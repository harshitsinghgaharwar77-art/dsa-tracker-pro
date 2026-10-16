import React, { useState, useEffect } from 'react';
import { Question } from '../../types';
import { useApp } from '../../context/AppContext';
import {
  Check,
  Star,
  ExternalLink,
  Play,
  Square,
  RotateCcw,
  FileText,
  Clock,
  Trash2,
} from 'lucide-react';

interface QuestionRowProps {
  question: Question;
  onOpenNotes: (q: Question) => void;
}

export const QuestionRow: React.FC<QuestionRowProps> = ({ question, onOpenNotes }) => {
  const { toggleSolve, toggleImportant, activeTimer, toggleTimer, resetTimer, deleteQuestion } =
    useApp();

  const isTimerActive = activeTimer?.questionId === question.id;
  const [liveSeconds, setLiveSeconds] = useState(0);

  useEffect(() => {
    if (!isTimerActive) {
      setLiveSeconds(0);
      return;
    }
    const update = () => {
      const sec = Math.max(0, Math.round((Date.now() - (activeTimer?.startedAt || Date.now())) / 1000));
      setLiveSeconds(sec);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [isTimerActive, activeTimer?.startedAt]);

  const totalSeconds = (question.timeSpent || 0) + liveSeconds;

  const formatTime = (sec: number) => {
    if (sec <= 0) return '0m';
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m ${s > 0 ? `${s}s` : ''}`;
    return `${s}s`;
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Hard':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'Medium':
      default:
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    }
  };

  const isCustom = question.id.startsWith('custom_');

  return (
    <div
      className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:px-4 rounded-xl border transition-all duration-200 ${
        question.solved
          ? 'bg-slate-900/40 border-slate-800/60 opacity-90'
          : 'bg-slate-900/80 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700/80'
      }`}
    >
      {/* Left section: Checkbox, Star, Title, Links */}
      <div className="flex items-center gap-3 w-full sm:w-auto flex-1 min-w-0 pr-2">
        {/* Solved Checkbox */}
        <button
          onClick={() => toggleSolve(question.id)}
          className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 active:scale-90 ${
            question.solved
              ? 'bg-gradient-to-tr from-emerald-500 to-lime-400 border-emerald-400 text-slate-950 shadow-md shadow-emerald-500/30 scale-105'
              : 'border-slate-700 hover:border-emerald-400 bg-slate-950/60'
          }`}
          title={question.solved ? 'Mark as Unsolved' : 'Mark as Solved'}
        >
          {question.solved && <Check className="w-4 h-4 stroke-[3]" />}
        </button>

        {/* Star / Important Toggle */}
        <button
          onClick={() => toggleImportant(question.id)}
          className={`p-1 rounded-md transition-colors shrink-0 ${
            question.important
              ? 'text-amber-400 fill-amber-400'
              : 'text-slate-600 hover:text-amber-400/80'
          }`}
          title={question.important ? 'Unstar question' : 'Star as Important'}
        >
          <Star className={`w-4 h-4 ${question.important ? 'fill-current' : ''}`} />
        </button>

        {/* Question Title & Links */}
        <div className="flex-1 min-w-0 flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <a
            href={question.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs sm:text-sm font-semibold tracking-tight truncate hover:text-emerald-400 transition-colors flex items-center gap-1.5 ${
              question.solved ? 'text-slate-400 line-through decoration-slate-600' : 'text-slate-100'
            }`}
            title={question.title}
          >
            <span>{question.title}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 shrink-0 text-slate-400 hover:text-emerald-400 transition-opacity" />
          </a>

          {/* Difficulty Badge */}
          <span
            className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border shrink-0 ${getDifficultyColor(
              question.difficulty
            )}`}
          >
            {question.difficulty}
          </span>

          {/* Companies Pill */}
          {question.company && question.company.length > 0 && (
            <div className="hidden lg:flex items-center gap-1">
              {question.company.slice(0, 2).map((comp) => (
                <span
                  key={comp}
                  className="px-1.5 py-0.5 text-[9px] font-medium bg-slate-800 text-slate-400 border border-slate-700/60 rounded"
                >
                  {comp}
                </span>
              ))}
              {question.company.length > 2 && (
                <span className="text-[9px] text-slate-500 font-mono">
                  +{question.company.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right section: Timer, Notes, Action buttons */}
      <div className="mt-2 sm:mt-0 flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/60">
        {/* Practice Timer */}
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs transition-colors ${
            isTimerActive
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-500/10'
              : 'bg-slate-950/60 border-slate-800 text-slate-400'
          }`}
        >
          <Clock className={`w-3.5 h-3.5 ${isTimerActive ? 'animate-spin text-emerald-400' : ''}`} />
          <span className="font-mono text-[11px] font-bold">{formatTime(totalSeconds)}</span>

          <button
            onClick={() => toggleTimer(question.id)}
            className={`p-1 rounded hover:bg-slate-800 transition-colors ${
              isTimerActive ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-200'
            }`}
            title={isTimerActive ? 'Pause timer' : 'Start solving timer'}
          >
            {isTimerActive ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
          </button>

          {totalSeconds > 0 && !isTimerActive && (
            <button
              onClick={() => resetTimer(question.id)}
              className="p-1 rounded text-slate-600 hover:text-rose-400 transition-colors"
              title="Reset recorded time"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Notes Button */}
        <button
          onClick={() => onOpenNotes(question)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs font-bold transition-all ${
            question.notes && question.notes.trim().length > 0
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25'
              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
          title="View & Edit notes"
        >
          <FileText className="w-3.5 h-3.5" />
          <span className="text-[11px]">Notes</span>
          {question.notes && question.notes.trim().length > 0 && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          )}
        </button>

        {/* Delete custom question */}
        {isCustom && (
          <button
            onClick={() => {
              if (confirm(`Delete "${question.title}"?`)) {
                deleteQuestion(question.id);
              }
            }}
            className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
            title="Delete custom question"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
