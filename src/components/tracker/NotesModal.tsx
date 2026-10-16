import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { useApp } from '../../context/AppContext';
import { X, Save, FileText, ExternalLink, Lightbulb } from 'lucide-react';

interface NotesModalProps {
  question: Question | null;
  onClose: () => void;
}

export const NotesModal: React.FC<NotesModalProps> = ({ question, onClose }) => {
  const { updateNotes } = useApp();
  const [content, setContent] = useState('');

  useEffect(() => {
    if (question) {
      setContent(question.notes || '');
    }
  }, [question]);

  if (!question) return null;

  const handleSave = () => {
    updateNotes(question.id, content);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-800 bg-slate-950/40">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {question.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {question.topic} • {question.difficulty}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Key Insights, Intuition & Time/Space Complexity</span>
            </label>
            <a
              href={question.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              <span>Open Problem</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            placeholder="Write your approach notes here...
• Edge cases considered
• Time Complexity: O(...)
• Space Complexity: O(...)
• Key trick or pattern used"
            className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 resize-y"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-slate-800 bg-slate-950/60">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-600/25 transition-all"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
};
