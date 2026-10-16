import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, Sparkles, Target, Zap, Rocket } from 'lucide-react';

interface HeroProps {
  onSelectTopic: (topic: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTopic }) => {
  const { streakStats, dailyGoal } = useApp();

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
    <section className="relative overflow-hidden py-10 sm:py-14 border-b border-emerald-950/40">
      {/* Funky decorative ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-700" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-500/12 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-40 bg-lime-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3.5 max-w-2xl">
            {/* Funky Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 via-lime-500/15 to-amber-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-400 to-amber-400 bg-clip-text text-transparent">
                448 CURATED DSA PROBLEMS • LEVEL UP YOUR CODE
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Crack DSA, <br />
              <span className="bg-gradient-to-r from-emerald-400 via-lime-300 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
                one problem at a time.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl font-medium">
              Master core data structures, conquer algorithmic intuition, track daily streaks with
              synthesized audio feedback, and compile code in real time.
            </p>
          </div>

          {/* Funky Stat Badges */}
          <div className="grid grid-cols-2 gap-3 w-full md:w-auto min-w-[290px]">
            {/* Streak Card */}
            <div className="glass-card p-4 rounded-3xl border border-emerald-500/20 hover:border-amber-400/50 transition-all duration-300 flex items-center gap-3.5 group shadow-lg hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 fill-current animate-pulse text-amber-400" />
              </div>
              <div>
                <div className="text-2xl font-black font-heading text-white">
                  {streakStats.currentStreak}{' '}
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Days</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">Active Streak 🔥</div>
              </div>
            </div>

            {/* Daily Target Card */}
            <div className="glass-card p-4 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 flex items-center gap-3.5 group shadow-lg hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-black font-heading text-white flex items-center justify-between">
                  <span>
                    {solvedToday}/{dailyGoal}
                  </span>
                  <span className="text-xs text-lime-400 font-mono font-bold">{goalPercent}%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">Daily Goal 🎯</div>
              </div>
            </div>
          </div>
        </div>

        {/* Funky Topic Pills / Quick Jumps */}
        <div className="mt-8 pt-6 border-t border-emerald-950/40 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" />
            <span>Topics:</span>
          </span>
          {tickerTopics.map((topic, i) => (
            <button
              key={topic}
              onClick={() => onSelectTopic(topic)}
              className="px-3.5 py-1.5 rounded-full bg-emerald-950/30 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/50 text-xs font-bold transition-all shrink-0 active:scale-95 shadow-sm hover:-translate-y-0.5"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
