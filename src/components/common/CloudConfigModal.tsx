import React, { useState } from 'react';
import {
  getStoredFirebaseConfig,
  saveStoredFirebaseConfig,
  FirebaseConfigType,
  initFirebase,
} from '../../utils/firebase';
import { Cloud, X, Save, CheckCircle, ExternalLink, Key } from 'lucide-react';

interface CloudConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved: () => void;
}

export const CloudConfigModal: React.FC<CloudConfigModalProps> = ({
  isOpen,
  onClose,
  onConfigSaved,
}) => {
  const [config, setConfig] = useState<FirebaseConfigType>(() => getStoredFirebaseConfig());
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleParseJSON = () => {
    try {
      setError('');
      // Match key-value pairs or JSON
      let cleaned = jsonInput.trim();
      if (cleaned.startsWith('const firebaseConfig =')) {
        cleaned = cleaned.replace(/const firebaseConfig =/, '').replace(/;$/, '').trim();
      }
      // If it has unquoted keys like apiKey: "..."
      cleaned = cleaned.replace(/([a-zA-Z0-9_]+)\s*:/g, '"$1":');
      const parsed = JSON.parse(cleaned);
      if (parsed.apiKey) {
        setConfig({
          apiKey: parsed.apiKey || '',
          authDomain: parsed.authDomain || '',
          projectId: parsed.projectId || '',
          storageBucket: parsed.storageBucket || '',
          messagingSenderId: parsed.messagingSenderId || '',
          appId: parsed.appId || '',
        });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2000);
      } else {
        setError('Could not find apiKey in pasted config.');
      }
    } catch (err) {
      setError('Invalid JSON format. Please paste the firebaseConfig object from Firebase Console.');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!config.apiKey || !config.projectId) {
      setError('Please provide at least apiKey and projectId.');
      return;
    }
    saveStoredFirebaseConfig(config);
    initFirebase();
    onConfigSaved();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-slate-950/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Firebase Cloud Sync Setup</h3>
              <p className="text-xs text-slate-400">Sync DSA progress across all your devices</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Config parsed successfully!</span>
            </div>
          )}

          <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Quick Paste from Firebase</span>
              <a
                href="https://console.firebase.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>Firebase Console</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <textarea
              rows={3}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='Paste firebaseConfig = { apiKey: "...", projectId: "..." }'
              className="w-full p-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={handleParseJSON}
              className="w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 rounded-lg transition-colors"
            >
              Parse & Autofill
            </button>
          </div>

          <div className="space-y-3 pt-1">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                API Key <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={config.apiKey}
                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                placeholder="AIzaSy..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project ID <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                value={config.projectId}
                onChange={(e) => setConfig({ ...config, projectId: e.target.value })}
                placeholder="my-dsa-tracker"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Auth Domain
              </label>
              <input
                type="text"
                value={config.authDomain}
                onChange={(e) => setConfig({ ...config, authDomain: e.target.value })}
                placeholder="my-dsa-tracker.firebaseapp.com"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save & Connect</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
