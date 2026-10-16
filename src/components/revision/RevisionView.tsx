import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Question } from '../../types';
import { REVISION_STAGES } from '../../data/constants';
import {
  RotateCcw,
  CheckCircle2,
  Clock,
  AlertCircle,
  Calendar,
  ExternalLink,
  ChevronRight,
  Flame,
} from 'lucide-react';

export const RevisionView: React.FC = () => {
  const { questions, markRevision } = useApp();
  const [filter, setFilter] = useState<'pending' | 'upcoming' | 'all'>('pending');

  // Process revision status for all solved questions
  const revisionItems = useMemo(() => {
    const now = new Date();

    return questions
      .filter((q) => q.solved && q.solvedAt)
      .map((q) => {
        const solvedDate = new Date(q.solvedAt!);
        const daysSinceSolve = Math.max(
          0,
          Math.floor((now.getTime() - solvedDate.getTime()) / (1000 * 60 * 60 * 24))
        );
        const stagesDone = q.revisionsDone || [false, false, false, false, false];

        // Find current pending stage
        let nextStageIndex = -1;
        let isOverdue = false;
        let isDueToday = false;

        for (let i = 0; i < REVISION_STAGES.length; i++) {
          if (!stagesDone[i]) {
            nextStageIndex = i;
            const targetDay = REVISION_STAGES[i];
            if (daysSinceSolve > targetDay) {
              isOverdue = true;
            } else if (daysSinceSolve === targetDay) {
              isDueToday = true;
            }
            break;
          }
        }

        const isFullyDone = nextStageIndex === -1;

        return {
          question: q,
          daysSinceSolve,
          stagesDone,
          nextStageIndex,
          isOverdue,
          isDueToday,
          isFullyDone,
        };
      });
  }, [questions]);

  // Aggregate counts
  const overdueCount = revisionItems.filter((item) => item.isOverdue).length;
  const dueTodayCount = revisionItems.filter((item) => item.isDueToday).length;
  const upcomingCount = revisionItems.filter(
    (item) => !item.isOverdue && !item.isDueToday && !item.isFullyDone
  ).length;
  const fullyDoneCount = revisionItems.filter((item) => item.isFullyDone).length;

  // Filtered items
  const filteredItems = useMemo(() => {
    switch (filter) {
      case 'pending':
        return revisionItems.filter((i) => i.isOverdue || i.isDueToday);
      case 'upcoming':
        return revisionItems.filter((i) => !i.isOverdue && !i.isDueToday && !i.isFullyDone);
      case 'all':
      default:
        return revisionItems;
    }
  }, [revisionItems, filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Head */}
      <div>
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
          <RotateCcw className="w-4 h-4" />
          <span>SCIENTIFIC SPACED REPETITION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Revision Scheduler</h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mt-1">
          Memory fades exponentially without recall. Re-solve problems from memory when they come
          due on Day 1, 3, 7, 15 & 30 to lock algorithms into long-term intuition.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="glass-card p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5">
          <div className="text-2xl font-bold font-heading text-rose-400">{overdueCount}</div>
          <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Overdue</span>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <div className="text-2xl font-bold font-heading text-amber-400">{dueTodayCount}</div>
          <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Due Today</span>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
          <div className="text-2xl font-bold font-heading text-indigo-400">{upcomingCount}</div>
          <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            <span>Upcoming</span>
          </div>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <div className="text-2xl font-bold font-heading text-emerald-400">{fullyDoneCount}</div>
          <div className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Fully Mastered</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setFilter('pending')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            filter === 'pending'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Due & Overdue ({overdueCount + dueTodayCount})
        </button>

        <button
          onClick={() => setFilter('upcoming')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            filter === 'upcoming'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Upcoming ({upcomingCount})
        </button>

        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
            filter === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          All Solved ({revisionItems.length})
        </button>
      </div>

      {/* Revision List */}
      <div className="space-y-3">
        {filteredItems.length === 0 ? (
          <div className="p-12 text-center glass-card rounded-2xl border border-slate-800">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-2 opacity-80" />
            <h3 className="text-base font-bold text-white">All Caught Up!</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
              No problems are currently waiting for spaced repetition in this view. Keep solving new
              questions to build your queue!
            </p>
          </div>
        ) : (
          filteredItems.map(
            ({
              question,
              daysSinceSolve,
              stagesDone,
              nextStageIndex,
              isOverdue,
              isDueToday,
              isFullyDone,
            }) => (
              <div
                key={question.id}
                className="glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={question.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                    >
                      <span>{question.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-40 hover:opacity-100" />
                    </a>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {question.topic}
                    </span>

                    {isOverdue && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                        Overdue ({daysSinceSolve}d ago)
                      </span>
                    )}

                    {isDueToday && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 animate-pulse">
                        Due Today!
                      </span>
                    )}

                    {isFullyDone && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        100% Retained
                      </span>
                    )}
                  </div>

                  {/* 5 Stages Tracker (Day 1, 3, 7, 15, 30) */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {REVISION_STAGES.map((stageDay, sIdx) => {
                      const isDone = stagesDone[sIdx];
                      const isCurrent = sIdx === nextStageIndex;

                      return (
                        <div
                          key={stageDay}
                          className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-mono border ${
                            isDone
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                              : isCurrent
                              ? isOverdue
                                ? 'bg-rose-500/10 border-rose-500/40 text-rose-300 ring-1 ring-rose-500/30'
                                : 'bg-amber-500/10 border-amber-500/40 text-amber-300 ring-1 ring-amber-500/30'
                              : 'bg-slate-900 border-slate-800 text-slate-500'
                          }`}
                        >
                          <span>Day {stageDay}</span>
                          {isDone && <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action: Mark Revised */}
                {!isFullyDone && nextStageIndex !== -1 && (
                  <button
                    onClick={() => markRevision(question.id, nextStageIndex)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all shrink-0 active:scale-95"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Mark Stage {nextStageIndex + 1} Done</span>
                  </button>
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
