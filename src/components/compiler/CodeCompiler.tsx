import React, { useState, useEffect } from 'react';
import { STARTER_CODE, PISTON_LANG_MAP } from '../../data/constants';
import { TestCase, TestResult } from '../../types';
import { runJavaScriptLocally, runPistonCode, getCustomEndpoint, getCustomApiKey } from '../../utils/compiler';
import { estimateComplexity, ComplexityAnalysisResult } from '../../utils/complexity';
import {
  Play,
  RotateCcw,
  Sparkles,
  Settings,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Terminal,
  Code,
  Layers,
  HelpCircle,
  X,
} from 'lucide-react';

export const CodeCompiler: React.FC = () => {
  const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem('lb_dsa_compiler_lang_v1') || 'javascript';
  });

  const [code, setCode] = useState<string>(() => {
    const saved = localStorage.getItem(`lb_dsa_compiler_code_${lang}`);
    return saved || STARTER_CODE[lang] || STARTER_CODE.javascript;
  });

  const [testCases, setTestCases] = useState<TestCase[]>(() => {
    try {
      const saved = localStorage.getItem('lb_dsa_compiler_cases_v1');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      { id: '1', input: '', expected: '' },
      { id: '2', input: 'sample stdin input', expected: '' },
    ];
  });

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<TestResult[]>([]);
  const [complexityResult, setComplexityResult] = useState<ComplexityAnalysisResult | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [endpointInput, setEndpointInput] = useState(() => getCustomEndpoint());
  const [apiKeyInput, setApiKeyInput] = useState(() => getCustomApiKey());

  // Save code per language
  useEffect(() => {
    localStorage.setItem(`lb_dsa_compiler_code_${lang}`, code);
    localStorage.setItem('lb_dsa_compiler_lang_v1', lang);
  }, [code, lang]);

  // Save test cases
  useEffect(() => {
    localStorage.setItem('lb_dsa_compiler_cases_v1', JSON.stringify(testCases));
  }, [testCases]);

  const handleLangChange = (newLang: string) => {
    setLang(newLang);
    const saved = localStorage.getItem(`lb_dsa_compiler_code_${newLang}`);
    setCode(saved || STARTER_CODE[newLang] || '');
    setResults([]);
  };

  const handleResetCode = () => {
    if (confirm('Reset code editor to starter code?')) {
      const starter = STARTER_CODE[lang] || '';
      setCode(starter);
      setResults([]);
    }
  };

  const handleRun = async () => {
    setIsRunning(true);
    setResults([]);
    try {
      if (lang === 'javascript') {
        const localResults = await runJavaScriptLocally(code, testCases);
        setResults(localResults);
      } else {
        const remoteResults = await runPistonCode(lang, code, testCases);
        setResults(remoteResults);
      }
    } catch (err: unknown) {
      setResults([
        {
          caseIndex: 0,
          stdout: '',
          stderr: err instanceof Error ? err.message : 'Execution failed',
          passed: false,
        },
      ]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleAnalyzeComplexity = () => {
    const analysis = estimateComplexity(code, lang);
    setComplexityResult(analysis);
  };

  const addTestCase = () => {
    const nextId = String(Date.now());
    setTestCases([...testCases, { id: nextId, input: '', expected: '' }]);
    setActiveCaseIndex(testCases.length);
  };

  const removeTestCase = (index: number) => {
    if (testCases.length <= 1) return;
    const next = testCases.filter((_, i) => i !== index);
    setTestCases(next);
    setActiveCaseIndex(Math.max(0, index - 1));
  };

  const updateTestCase = (field: 'input' | 'expected', val: string) => {
    const updated = [...testCases];
    updated[activeCaseIndex] = { ...updated[activeCaseIndex], [field]: val };
    setTestCases(updated);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('lb_dsa_exec_endpoint_v1', endpointInput.trim());
    localStorage.setItem('lb_dsa_exec_key_v1', apiKeyInput.trim());
    setShowSettings(false);
  };

  const activeResult = results.find((r) => r.caseIndex === activeCaseIndex);

  // Keyboard shortcut: Cmd/Ctrl + Enter to run
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      handleRun();
    }
    // Tab key support
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const val = target.value;
      target.value = val.substring(0, start) + '  ' + val.substring(end);
      target.selectionStart = target.selectionEnd = start + 2;
      setCode(target.value);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-4">
      {/* Compiler Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-indigo-400 shrink-0 ml-1" />
          <select
            value={lang}
            onChange={(e) => handleLangChange(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="javascript">JavaScript (Instant In-Browser)</option>
            <option value="python">Python</option>
            <option value="cpp">C++ (GCC)</option>
            <option value="c">C</option>
            <option value="java">Java (OpenJDK)</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          {/* Run Button */}
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/25 transition-all active:scale-95 disabled:opacity-50"
          >
            <Play className={`w-4 h-4 fill-current ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>

          {/* Reset Code */}
          <button
            onClick={handleResetCode}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-colors"
            title="Reset code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Complexity Heuristic */}
          <button
            onClick={handleAnalyzeComplexity}
            className="flex items-center gap-1.5 px-3 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 rounded-xl text-xs font-semibold transition-colors"
            title="Estimate Big-O Complexity"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Analyze Big-O</span>
          </button>

          {/* Settings */}
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl transition-colors"
            title="Execution Settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Code Editor on Left, Test Cases & Output on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Code Editor Panel */}
        <div className="lg:col-span-7 glass-card rounded-2xl border border-slate-800/80 overflow-hidden shadow-lg flex flex-col h-[580px]">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-slate-800 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              <span>Source Code</span>
            </div>
            <span className="font-mono text-[11px] text-slate-500">
              Press Cmd/Ctrl + Enter to run
            </span>
          </div>

          <div className="flex-1 relative bg-slate-950">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              className="w-full h-full p-4 bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Testcases & Output Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4 h-[580px]">
          {/* Test Cases Panel */}
          <div className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col h-1/2">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-950/60 border-b border-slate-800">
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {testCases.map((tc, idx) => (
                  <button
                    key={tc.id}
                    onClick={() => setActiveCaseIndex(idx)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                      activeCaseIndex === idx
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    Case {idx + 1}
                  </button>
                ))}
                <button
                  onClick={addTestCase}
                  className="p-1 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 text-xs transition-colors shrink-0"
                  title="Add Test Case"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {testCases.length > 1 && (
                <button
                  onClick={() => removeTestCase(activeCaseIndex)}
                  className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Remove Current Case"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="p-3 space-y-2 flex-1 overflow-y-auto bg-slate-950/40">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Stdin Input <span className="font-normal text-slate-500">(optional)</span>
                </label>
                <textarea
                  value={testCases[activeCaseIndex]?.input || ''}
                  onChange={(e) => updateTestCase('input', e.target.value)}
                  placeholder="Enter input passed into program..."
                  rows={2}
                  className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                  Expected Output <span className="font-normal text-slate-500">(optional for pass/fail check)</span>
                </label>
                <textarea
                  value={testCases[activeCaseIndex]?.expected || ''}
                  onChange={(e) => updateTestCase('expected', e.target.value)}
                  placeholder="Paste expected output..."
                  rows={2}
                  className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg font-mono text-xs text-slate-200 focus:outline-none focus:border-indigo-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Execution Output Panel */}
          <div className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden flex flex-col h-1/2">
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-slate-800 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Console Output</span>
              </div>

              {activeResult && (
                <div className="flex items-center gap-2">
                  {activeResult.passed !== undefined && (
                    <span
                      className={`flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        activeResult.passed
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {activeResult.passed ? (
                        <>
                          <CheckCircle className="w-3 h-3" /> Passed
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" /> Failed
                        </>
                      )}
                    </span>
                  )}
                  {activeResult.timeMs !== undefined && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3 h-3" /> {activeResult.timeMs}ms
                    </span>
                  )}
                </div>
              )}
            </div>

            <div className="p-3 flex-1 overflow-y-auto bg-slate-950 font-mono text-xs">
              {activeResult ? (
                <div className="space-y-2">
                  {activeResult.stdout && (
                    <div className="text-slate-200 whitespace-pre-wrap">{activeResult.stdout}</div>
                  )}
                  {activeResult.stderr && (
                    <div className="text-rose-400 whitespace-pre-wrap font-semibold">
                      {activeResult.stderr}
                    </div>
                  )}
                  {!activeResult.stdout && !activeResult.stderr && (
                    <div className="text-slate-600 italic">No output produced.</div>
                  )}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-slate-600 text-xs italic">
                  Click "Run Code" above to execute and view output.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Complexity Heuristic Modal */}
      {complexityResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">Algorithmic Complexity Estimate</h3>
              </div>
              <button
                onClick={() => setComplexityResult(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <div className="text-[11px] font-semibold text-purple-300">Time Complexity</div>
                <div className="text-base font-mono font-bold text-white mt-1">
                  {complexityResult.timeComplexity}
                </div>
              </div>
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <div className="text-[11px] font-semibold text-indigo-300">Space Complexity</div>
                <div className="text-base font-mono font-bold text-white mt-1">
                  {complexityResult.spaceComplexity}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-300">Detection Breakdown:</div>
              <ul className="space-y-1.5 text-xs text-slate-400">
                {complexityResult.notes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setComplexityResult(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Execution Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-indigo-400" />
                <h3 className="text-base font-bold text-white">Execution Settings</h3>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              JavaScript runs instantly inside your browser. For compiled languages (C++, Java, Go, Rust),
              code is sent to a Piston-compatible API endpoint.
            </p>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Piston Endpoint URL
              </label>
              <input
                type="url"
                value={endpointInput}
                onChange={(e) => setEndpointInput(e.target.value)}
                placeholder="https://emkc.org/api/v2/piston/execute"
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                API Key <span className="font-normal text-slate-500">(optional, sent as X-Auth-Token)</span>
              </label>
              <input
                type="text"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="Leave blank if not required"
                className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSettings}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
