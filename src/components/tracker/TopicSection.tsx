import React, { useState } from 'react';
import { Question } from '../../types';
import { QuestionRow } from './QuestionRow';
import { JOURNEY_TOPIC_ICONS } from '../../data/constants';
import { ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';

interface TopicSectionProps {
  topic: string;
  questions: Question[];
  onOpenNotes: (q: Question) => void;
  defaultExpanded?: boolean;
}

export const TopicSection: React.FC<TopicSectionProps> = ({
  topic,
  questions,
  onOpenNotes,
  defaultExpanded = true,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const solved = questions.filter((q) => q.solved).length;
  const total = questions.length;
  const percent = total > 0 ? Math.round((solved / total) * 100) : 0;
  const isComplete = solved === total && total > 0;
  const icon = JOURNEY_TOPIC_ICONS[topic] || '📁';

  return (
    <div className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden shadow-sm transition-all duration-200">
      {/* Topic Header Accordion */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 sm:px-6 hover:bg-slate-900/60 transition-colors text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-xl sm:text-2xl p-1.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
            {icon}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                {topic}
              </h2>
              {isComplete && (
                <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Mastered</span>
                </span>
              )}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">
              <span>{solved}</span>
              <span className="text-slate-600"> / </span>
              <span>{total} completed</span>
            </div>
          </div>
        </div>

        {/* Progress bar & Percent */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:flex flex-col items-end gap-1 w-28">
            <span className="text-xs font-mono font-bold text-emerald-400">{percent}%</span>
            <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden p-0.5">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  isComplete
                    ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                    : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400'
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="p-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
            {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Progress Bar for mobile */}
      <div className="sm:hidden w-full h-1 bg-slate-800">
        <div
          className={`h-full transition-all duration-300 ${
            isComplete ? 'bg-emerald-400' : 'bg-gradient-to-r from-emerald-500 to-lime-400'
          }`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Questions list */}
      {expanded && (
        <div className="p-3 sm:p-4 pt-1 sm:pt-2 space-y-2 border-t border-slate-800/60 bg-slate-950/40">
          {questions.map((q) => (
            <QuestionRow key={q.id} question={q} onOpenNotes={onOpenNotes} />
          ))}
        </div>
      )}
    </div>
  );
};
