export interface ComplexityAnalysisResult {
  timeComplexity: string;
  spaceComplexity: string;
  notes: string[];
  maxNesting: number;
  hasRecursion: boolean;
  hasMemoization: boolean;
}

const INDENT_LANGS = new Set(['python', 'ruby']);

function stripCommentsAndStrings(code: string, lang: string): string {
  if (INDENT_LANGS.has(lang)) {
    return code
      .replace(/("""[\s\S]*?"""|'''[\s\S]*?''')/g, '')
      .replace(/#.*$/gm, '')
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '""');
  }
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '""');
}

function maxLoopNestingBraces(code: string): number {
  let nesting = 0;
  let maxNesting = 0;
  const loopStack: number[] = [];

  const tokens = code.match(/\b(for|while)\b|[{}()]/g) || [];
  let parenDepth = 0;
  let pendingLoop = false;

  for (const token of tokens) {
    if (token === 'for' || token === 'while') {
      pendingLoop = true;
    } else if (token === '(') {
      parenDepth++;
    } else if (token === ')') {
      parenDepth = Math.max(0, parenDepth - 1);
    } else if (token === '{') {
      if (pendingLoop && parenDepth === 0) {
        nesting++;
        maxNesting = Math.max(maxNesting, nesting);
        loopStack.push(nesting);
        pendingLoop = false;
      }
    } else if (token === '}') {
      if (loopStack.length > 0) {
        loopStack.pop();
        nesting = Math.max(0, nesting - 1);
      }
    }
  }

  return maxNesting;
}

function maxLoopNestingIndent(code: string): number {
  const lines = code.split('\n');
  const stack: number[] = [];
  let maxNesting = 0;

  for (const raw of lines) {
    if (!raw.trim()) continue;
    const indent = (raw.match(/^[ \t]*/)?.[0] || '').replace(/\t/g, '    ').length;
    while (stack.length && indent <= stack[stack.length - 1]) {
      stack.pop();
    }
    if (/^[ \t]*(for|while)\b.*:\s*$/.test(raw)) {
      stack.push(indent);
      maxNesting = Math.max(maxNesting, stack.length);
    }
  }
  return maxNesting;
}

function detectRecursion(code: string, lang: string): boolean {
  const names = new Set<string>();
  if (lang === 'python') {
    const re = /\bdef\s+([a-zA-Z_]\w*)\s*\(/g;
    let m;
    while ((m = re.exec(code))) names.add(m[1]);
  } else {
    const re = /\b(?:function\s+([a-zA-Z_]\w*)|([a-zA-Z_]\w*)\s*\([^;{}()]*\)\s*\{)/g;
    let m;
    while ((m = re.exec(code))) {
      const name = m[1] || m[2];
      if (name) names.add(name);
    }
  }

  for (const name of names) {
    if (!name || name === 'main' || name === 'solve') continue;
    const callRe = new RegExp(`\\b${name}\\s*\\(`, 'g');
    const count = (code.match(callRe) || []).length;
    if (count >= 2) return true;
  }
  return false;
}

export function estimateComplexity(rawCode: string, lang = 'javascript'): ComplexityAnalysisResult {
  const code = stripCommentsAndStrings(rawCode, lang);
  const nesting = INDENT_LANGS.has(lang)
    ? maxLoopNestingIndent(code)
    : maxLoopNestingBraces(code);
  const recursive = detectRecursion(code, lang);
  const memoized =
    /\b(memo|cache|dp)\b/i.test(code) ||
    /lru_cache/.test(code) ||
    /unordered_map|std::map|HashMap|Dictionary\s*</.test(code);
  const sorts = /\.sort\(|sorted\(|Arrays\.sort|std::sort|Collections\.sort/i.test(code);
  const binSearch = /binary.?search|lower_bound|upper_bound|bisect/i.test(code);
  const extraDs =
    /\[\s*\]\s*(=|;)|new\s+(int|long|float|double|char)\s*\[|vector\s*<|ArrayList|std::vector|\bdict\(|\bset\(|HashMap|unordered_map|unordered_set/i.test(
      code
    );

  const notes: string[] = [];
  let time = 'O(1) to O(n)';

  if (recursive && !memoized) {
    time = 'O(2^n) — Exponential Branching';
    notes.push('Recursive calls detected without memoization or dynamic programming cache.');
  } else if (recursive && memoized) {
    time = 'O(N) — Memoized Dynamic Programming';
    notes.push('Recursion combined with cache/memo structures collapses state space.');
  } else if (nesting >= 3) {
    time = `O(n^${nesting}) — Multi-nested Loops`;
    notes.push(`Detected ${nesting} nested loop levels.`);
  } else if (nesting === 2) {
    time = 'O(n²) — Quadratic';
    notes.push('Two nested loop levels detected.');
    if (sorts) notes.push('Sorting detected, dominated by O(n²) loop iterations.');
  } else if (nesting === 1) {
    if (sorts) {
      time = 'O(n log n)';
      notes.push('Single loop combined with sorting invocation.');
    } else {
      time = 'O(n) — Linear';
      notes.push('Single level loop traversal.');
    }
  } else if (sorts) {
    time = 'O(n log n) — Sorting dominated';
    notes.push('Sorting detected without nested loops.');
  } else if (binSearch) {
    time = 'O(log n) — Logarithmic Search';
    notes.push('Binary search / divide-and-conquer pattern recognized.');
  } else {
    time = 'O(1) — Constant Time';
    notes.push('No obvious loops, recursive calls, or sorting found.');
  }

  let space = 'O(1) Auxiliary Space';
  if (recursive) {
    space = memoized ? 'O(N) Memoization & Call Stack' : 'O(Depth) Call Stack';
    notes.push('Recursive invocation consumes call stack memory.');
  } else if (extraDs) {
    space = 'O(N) Auxiliary Data Structures';
    notes.push('Dynamic arrays, hash tables, or tree structures allocated.');
  } else {
    notes.push('Variables use constant auxiliary space.');
  }

  return {
    timeComplexity: time,
    spaceComplexity: space,
    notes,
    maxNesting: nesting,
    hasRecursion: recursive,
    hasMemoization: memoized,
  };
}
