import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Sparkles, Trophy, Target } from 'lucide-react';

interface HeroProps {
  onSelectTopic: (topic: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTopic }) => {
  const { streakStats, dailyGoal, questions } = useApp();

  const tickerTopics = [
    'Arrays',
    'Strings',
    'Linked List',
    'Binary Trees',
    'Graph',
    'Dynamic Programming',
    'Backtracking',
    'Heap',
    'Greedy',
  ];

  const solvedToday = streakStats.todayCount;
  const goalPercent = Math.min(100, Math.round((solvedToday / dailyGoal) * 100));

  return (
    <section className="relative overflow-hidden py-10 sm:py-14 border-b border-slate-800/60 bg-gradient-to-b from-indigo-950/20 via-slate-950/40 to-transparent">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>448 CURATED DSA PROBLEMS • LOVE BABBAR & TOP TECH</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crack DSA, <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                one problem at a time.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Master fundamental data structures, build your problem-solving intuition, track your
              active streaks, and run code directly in the integrated compiler.
            </p>
          </div>

          {/* Quick Stat Badges */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto min-w-[280px]">
            <div className="glass-card p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="text-xl font-bold font-heading text-white">
                  {streakStats.currentStreak}{' '}
                  <span className="text-xs font-normal text-slate-400">Days</span>
                </div>
                <div className="text-[11px] text-slate-400">Current Streak</div>
              </div>
            </div>

            <div className="glass-card p-3.5 rounded-2xl border border-slate-800/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold font-heading text-white flex items-center justify-between">
                  <span>
                    {solvedToday}/{dailyGoal}
                  </span>
                  <span className="text-xs text-emerald-400 font-mono">{goalPercent}%</span>
                </div>
                <div className="text-[11px] text-slate-400">Daily Target</div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic Ticker / Quick Jumps */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Quick Topics:
          </span>
          {tickerTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => onSelectTopic(topic)}
              className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-300 border border-slate-800 hover:border-indigo-500/40 text-xs font-medium transition-all shrink-0 active:scale-95"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
