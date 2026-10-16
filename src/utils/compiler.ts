import { TestCase, TestResult } from '../types';
import { PISTON_LANG_MAP } from '../data/constants';

export const DEFAULT_PISTON_ENDPOINT = 'https://emkc.org/api/v2/piston/execute';
export const EXEC_ENDPOINT_KEY = 'lb_dsa_exec_endpoint_v1';
export const EXEC_APIKEY_KEY = 'lb_dsa_exec_key_v1';

export function getCustomEndpoint(): string {
  if (typeof window === 'undefined') return DEFAULT_PISTON_ENDPOINT;
  return localStorage.getItem(EXEC_ENDPOINT_KEY) || DEFAULT_PISTON_ENDPOINT;
}

export function getCustomApiKey(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem(EXEC_APIKEY_KEY) || '';
}

export async function runJavaScriptLocally(
  code: string,
  testCases: TestCase[]
): Promise<TestResult[]> {
  const results: TestResult[] = [];

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const logs: string[] = [];
    const errors: string[] = [];
    const startTime = performance.now();

    try {
      const inputLines = (tc.input || '').split('\n');
      let lineIndex = 0;

      const fakeConsole = {
        log: (...args: unknown[]) => {
          logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '));
        },
        error: (...args: unknown[]) => {
          errors.push(args.map((a) => String(a)).join(' '));
        },
        warn: (...args: unknown[]) => {
          logs.push('[WARN] ' + args.map((a) => String(a)).join(' '));
        },
      };

      const readLine = () => {
        return lineIndex < inputLines.length ? inputLines[lineIndex++] : '';
      };

      // Create sandboxed function
      const runner = new Function('console', 'readLine', 'input', code);
      runner(fakeConsole, readLine, tc.input);

      const endTime = performance.now();
      const stdout = logs.join('\n').trim();
      const stderr = errors.join('\n').trim();
      const expected = (tc.expected || '').trim();

      const passed = expected.length > 0 ? stdout === expected : undefined;

      results.push({
        caseIndex: i,
        stdout,
        stderr,
        passed,
        timeMs: Math.round(endTime - startTime),
      });
    } catch (err: unknown) {
      const endTime = performance.now();
      results.push({
        caseIndex: i,
        stdout: logs.join('\n').trim(),
        stderr: err instanceof Error ? err.message : String(err),
        passed: false,
        timeMs: Math.round(endTime - startTime),
        error: err instanceof Error ? err.stack || err.message : String(err),
      });
    }
  }

  return results;
}

export async function runPistonCode(
  lang: string,
  code: string,
  testCases: TestCase[]
): Promise<TestResult[]> {
  const endpoint = getCustomEndpoint();
  const apiKey = getCustomApiKey();
  const pistonLang = PISTON_LANG_MAP[lang] || lang;
  const results: TestResult[] = [];

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (apiKey) {
    headers['X-Auth-Token'] = apiKey;
  }

  for (let i = 0; i < testCases.length; i++) {
    const tc = testCases[i];
    const startTime = performance.now();

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          language: pistonLang,
          version: '*',
          files: [
            {
              content: code,
            },
          ],
          stdin: tc.input || '',
        }),
      });

      if (!res.ok) {
        throw new Error(`Execution service responded with status ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      const endTime = performance.now();

      const run = data.run || {};
      const stdout = (run.stdout || '').trim();
      const stderr = (run.stderr || data.message || '').trim();
      const expected = (tc.expected || '').trim();
      const passed = expected.length > 0 ? stdout === expected : undefined;

      results.push({
        caseIndex: i,
        stdout,
        stderr,
        passed,
        timeMs: Math.round(endTime - startTime),
      });
    } catch (err: unknown) {
      results.push({
        caseIndex: i,
        stdout: '',
        stderr: err instanceof Error ? err.message : 'Execution failed',
        passed: false,
        error: String(err),
      });
    }
  }

  return results;
}
