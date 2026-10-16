import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Question } from '../../types';
import {
  JOURNEY_TOPIC_ORDER,
  JOURNEY_TOPIC_ICONS,
  TOPIC_PALETTE,
  SOLVED_TIER_ICONS,
  WEEKDAY_LABELS,
  MONTH_LABELS_SHORT,
} from '../../data/constants';
import {
  Flame,
  Calendar,
  CheckCircle2,
  Trophy,
  Target,
  Clock,
  Star,
  MapPin,
  Lock,
  Unlock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const { questions, streakStats, dailyGoal, setDailyGoal, totalTimePracticed } = useApp();

  const [selectedYear, setSelectedYear] = useState<number>(() => new Date().getFullYear());
  const [inspectedDay, setInspectedDay] = useState<string | null>(() => {
    return new Date().toISOString().slice(0, 10);
  });
  const [isEditingGoal, setIsEditingGoal] = useState(false);
  const [goalDraft, setGoalDraft] = useState(dailyGoal);

  const totalQuestions = questions.length;
  const totalSolved = questions.filter((q) => q.solved).length;
  const totalImportantPending = questions.filter((q) => q.important && !q.solved).length;

  // Format total practice time
  const formatTime = (sec: number) => {
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    if (hrs > 0) return `${hrs}h ${mins}m`;
    if (mins > 0) return `${mins}m`;
    return `${sec}s`;
  };

  // Group stats by topic
  const topicStats = useMemo(() => {
    const map = new Map<string, { total: number; solved: number }>();
    questions.forEach((q) => {
      if (!map.has(q.topic)) map.set(q.topic, { total: 0, solved: 0 });
      const entry = map.get(q.topic)!;
      entry.total++;
      if (q.solved) entry.solved++;
    });

    return Array.from(map.entries()).map(([topic, { total, solved }], idx) => ({
      topic,
      total,
      solved,
      percent: total > 0 ? Math.round((solved / total) * 100) : 0,
      color: TOPIC_PALETTE[idx % TOPIC_PALETTE.length],
    }));
  }, [questions]);

  // Current topic in progress
  const currentTopic = useMemo(() => {
    for (const t of JOURNEY_TOPIC_ORDER) {
      const match = topicStats.find((s) => s.topic === t);
      if (match && match.solved < match.total) {
        return match.topic;
      }
    }
    return topicStats[0]?.topic || 'Arrays';
  }, [topicStats]);

  // Heatmap generation for selectedYear
  const { heatmapGrid, totalYearSolves } = useMemo(() => {
    const startDate = new Date(selectedYear, 0, 1);
    const endDate = new Date(selectedYear, 11, 31);
    const days: { dateStr: string; count: number; level: number; date: Date }[] = [];

    // align to first Sunday
    const firstDayOfWeek = startDate.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      // pad previous days
      days.push({ dateStr: '', count: 0, level: -1, date: new Date(0) });
    }

    let runningDate = new Date(startDate);
    let solvesInYear = 0;

    while (runningDate <= endDate) {
      const dStr = runningDate.toISOString().slice(0, 10);
      const solves = streakStats.historyMap.get(dStr)?.length || 0;
      solvesInYear += solves;

      let level = 0;
      if (solves >= 6) level = 4;
      else if (solves >= 4) level = 3;
      else if (solves >= 2) level = 2;
      else if (solves >= 1) level = 1;

      days.push({
        dateStr: dStr,
        count: solves,
        level,
        date: new Date(runningDate),
      });

      runningDate.setDate(runningDate.getDate() + 1);
    }

    return { heatmapGrid: days, totalYearSolves: solvesInYear };
  }, [selectedYear, streakStats.historyMap]);

  // Questions solved on inspected day
  const inspectedQuestions = useMemo(() => {
    if (!inspectedDay) return [];
    return streakStats.historyMap.get(inspectedDay) || [];
  }, [inspectedDay, streakStats.historyMap]);

  // Achievements milestones
  const streakMilestones = [3, 7, 14, 30, 60, 100];
  const solvedMilestones = [10, 25, 50, 100, 200, 350, 448];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Head */}
      <div>
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold mb-1">
          <Trophy className="w-4 h-4" />
          <span>PERFORMANCE METRICS & JOURNEY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Dashboard</h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Track problem retention, topic milestones, streak consistency, and your annual solve heatmap.
        </p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {/* Streak */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
            <Flame className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {streakStats.currentStreak}{' '}
              <span className="text-xs font-normal text-slate-400">days</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Active Streak</div>
          </div>
        </div>

        {/* Month Solves */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {streakStats.monthCount}{' '}
              <span className="text-xs font-normal text-slate-400">days</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Practiced This Month</div>
          </div>
        </div>

        {/* Total Solved */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {totalSolved}{' '}
              <span className="text-xs font-normal text-slate-500">/ {totalQuestions}</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Problems Cleared</div>
          </div>
        </div>

        {/* Time Practiced */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {formatTime(totalTimePracticed)}
            </div>
            <div className="text-xs text-slate-400 font-medium">Practice Timer Logged</div>
          </div>
        </div>

        {/* Current Topic */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-sm sm:text-base font-bold text-white truncate">{currentTopic}</div>
            <div className="text-xs text-slate-400 font-medium">Next Station</div>
          </div>
        </div>

        {/* Important Pending */}
        <div className="glass-card p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
            <Star className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {totalImportantPending}
            </div>
            <div className="text-xs text-slate-400 font-medium">Starred Pending</div>
          </div>
        </div>

        {/* Today's Goal target card */}
        <div className="col-span-2 glass-card p-4 rounded-2xl border border-slate-800/80 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold text-slate-200">Daily Solve Target</span>
            </div>
            {isEditingGoal ? (
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={goalDraft}
                  onChange={(e) => setGoalDraft(Number(e.target.value))}
                  className="w-14 px-2 py-0.5 bg-slate-950 border border-slate-800 text-xs rounded text-center text-white"
                />
                <button
                  onClick={() => {
                    setDailyGoal(goalDraft);
                    setIsEditingGoal(false);
                  }}
                  className="px-2.5 py-0.5 bg-gradient-to-r from-emerald-500 to-lime-500 text-slate-950 text-[11px] font-black rounded-lg"
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditingGoal(true)}
                className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300"
              >
                Change Goal ({dailyGoal}/day)
              </button>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">
                Solved Today: <strong className="text-white font-bold">{streakStats.todayCount}</strong>
              </span>
              <span className="text-emerald-400 font-black">
                {Math.min(100, Math.round((streakStats.todayCount / dailyGoal) * 100))}%
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(100, (streakStats.todayCount / dailyGoal) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* DSA Journey Roadmap Map */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span>DSA Journey Roadmap</span>
          </h3>
          <p className="text-xs text-slate-400">
            Recommended pedagogical sequence. Clear milestones in order to master foundational to
            advanced algorithms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 pt-2">
          {JOURNEY_TOPIC_ORDER.map((topic, index) => {
            const stat = topicStats.find((s) => s.topic === topic);
            const total = stat?.total || 0;
            const solved = stat?.solved || 0;
            const percent = stat?.percent || 0;
            const isUnlocked = index === 0 || (topicStats[index - 1]?.percent || 0) >= 40;
            const isFinished = percent === 100 && total > 0;
            const icon = JOURNEY_TOPIC_ICONS[topic] || '📁';

            return (
              <div
                key={topic}
                className={`p-3.5 rounded-xl border transition-all ${
                  isFinished
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : isUnlocked
                    ? 'bg-slate-900/80 border-slate-800 hover:border-indigo-500/40'
                    : 'bg-slate-950/40 border-slate-900 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{icon}</span>
                  {isFinished ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isUnlocked ? (
                    <Unlock className="w-3.5 h-3.5 text-indigo-400" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-600" />
                  )}
                </div>

                <div className="font-bold text-xs text-white truncate">{topic}</div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-1">
                  <span>
                    {solved}/{total}
                  </span>
                  <span className={isFinished ? 'text-emerald-400 font-bold' : 'text-indigo-400'}>
                    {percent}%
                  </span>
                </div>

                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div
                    className={`h-full ${isFinished ? 'bg-emerald-500' : 'bg-indigo-500'}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* GitHub-style Solved Activity Heatmap */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span>Solved Activity Heatmap</span>
            </h3>
            <p className="text-xs text-slate-400">
              {totalYearSolves} problems solved in {selectedYear}. Days with 6+ problems glow with
              extra fire! 🔥
            </p>
          </div>

          {/* Year Nav */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedYear(selectedYear - 1)}
              className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold font-mono text-slate-200 px-2">{selectedYear}</span>
            <button
              onClick={() => setSelectedYear(selectedYear + 1)}
              className="p-1.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedYear(new Date().getFullYear())}
              className="px-2.5 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300 hover:text-white"
            >
              Current Year
            </button>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="inline-grid grid-rows-7 grid-flow-col gap-1.5">
            {heatmapGrid.map((item, idx) => {
              if (item.level === -1) {
                return <div key={idx} className="w-3.5 h-3.5 opacity-0" />;
              }

              const isSelected = inspectedDay === item.dateStr;

              // Color levels
              let bg = 'bg-slate-900 border border-slate-800/80';
              if (item.level === 1) bg = 'bg-emerald-950/80 border border-emerald-800/60';
              if (item.level === 2) bg = 'bg-emerald-700 border border-emerald-600';
              if (item.level === 3) bg = 'bg-emerald-500 border border-emerald-400';
              if (item.level === 4)
                bg = 'bg-lime-400 border border-amber-300 shadow-sm shadow-lime-400/50';

              return (
                <button
                  key={item.dateStr}
                  onClick={() => setInspectedDay(item.dateStr)}
                  title={`${item.dateStr}: ${item.count} solved`}
                  className={`w-3.5 h-3.5 rounded-sm transition-transform hover:scale-125 ${bg} ${
                    isSelected ? 'ring-2 ring-lime-400 scale-125 z-10' : ''
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Heatmap Legend */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/60">
          <span className="font-mono text-[11px]">
            {inspectedDay ? `Selected: ${inspectedDay} (${inspectedQuestions.length} solved)` : ''}
          </span>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Less</span>
            <span className="w-3 h-3 rounded-sm bg-slate-900 border border-slate-800" />
            <span className="w-3 h-3 rounded-sm bg-emerald-900/60" />
            <span className="w-3 h-3 rounded-sm bg-emerald-700" />
            <span className="w-3 h-3 rounded-sm bg-emerald-500" />
            <span className="w-3 h-3 rounded-sm bg-emerald-400" />
            <span>More</span>
          </div>
        </div>

        {/* Inspected Day Details */}
        {inspectedDay && inspectedQuestions.length > 0 && (
          <div className="mt-3 p-3 bg-slate-950/60 border border-slate-800 rounded-xl space-y-2">
            <div className="text-xs font-semibold text-slate-300">
              Problems cracked on {inspectedDay}:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {inspectedQuestions.map((q) => (
                <a
                  key={q.id}
                  href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs text-slate-200 hover:text-indigo-300 border border-slate-800 transition-colors"
                >
                  <span className="truncate pr-2">{q.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-40 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Achievements Badges */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800/80 space-y-5">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Milestones & Badges</span>
          </h3>
          <p className="text-xs text-slate-400">
            Permanent achievement badges unlocked by maintaining streak discipline and solving problem volume.
          </p>
        </div>

        {/* Streak Badges */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Streak Milestones</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {streakMilestones.map((m) => {
              const unlocked = streakStats.longestStreak >= m;
              return (
                <div
                  key={m}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    unlocked
                      ? 'bg-orange-500/10 border-orange-500/30'
                      : 'bg-slate-950/40 border-slate-900 opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{unlocked ? '🔥' : '🔒'}</div>
                  <div className="text-xs font-bold text-white">{m} Days</div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {unlocked ? 'Unlocked' : `${streakStats.longestStreak}/${m}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Questions Solved Badges */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Problems Solved Milestones</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2.5">
            {solvedMilestones.map((m, idx) => {
              const unlocked = totalSolved >= m;
              const tierIcon = SOLVED_TIER_ICONS[idx % SOLVED_TIER_ICONS.length];
              return (
                <div
                  key={m}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    unlocked
                      ? 'bg-emerald-500/10 border-emerald-500/30'
                      : 'bg-slate-950/40 border-slate-900 opacity-50'
                  }`}
                >
                  <div className="text-2xl mb-1">{unlocked ? tierIcon : '🔒'}</div>
                  <div className="text-xs font-bold text-white">{m} Solved</div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {unlocked ? 'Claimed' : `${totalSolved}/${m}`}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
