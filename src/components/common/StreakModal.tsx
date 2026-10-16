import React from 'react';
import { useApp } from '../../context/AppContext';
import { Flame, X, Sparkles, Award } from 'lucide-react';

export const StreakModal: React.FC = () => {
  const { streakPopup, closeStreakPopup } = useApp();

  if (!streakPopup.open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 border border-orange-500/40 rounded-3xl p-6 sm:p-8 text-center shadow-2xl shadow-orange-500/20">
        <button
          onClick={closeStreakPopup}
          className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Pulsing flame icon */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-orange-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-orange-500/30 text-white mb-4 animate-bounce">
          <Flame className="w-10 h-10 fill-current" />
        </div>

        <div className="text-4xl font-extrabold font-heading text-white tracking-tight">
          {streakPopup.count} Day Streak!
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
          Incredible dedication! You just extended your active problem-solving streak. Consistency is
          the superpower that cracks top engineering interviews.
        </p>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-amber-400">
          <Sparkles className="w-4 h-4" />
          <span>Keep the momentum burning tomorrow!</span>
        </div>

        <button
          onClick={closeStreakPopup}
          className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-600/30 transition-all active:scale-95"
        >
          Keep Cracking DSA
        </button>
      </div>
    </div>
  );
};
