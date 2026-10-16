import { Question, ActiveTimer } from '../types';
import seedQuestionsData from '../data/seedQuestions.json';
import { REVISION_STAGES, DEFAULT_DAILY_GOAL } from '../data/constants';

export const STORAGE_KEY = 'lb_dsa_questions_v2';
export const TIMER_KEY = 'lb_dsa_active_timer';
export const DAILY_GOAL_KEY = 'lb_dsa_daily_goal';
export const ACHIEVEMENTS_SEEN_KEY = 'lb_dsa_achievements_seen';

export function backfillQuestion(q: Partial<Question>, defaultId: string): Question {
  return {
    id: q.id || defaultId,
    title: q.title || 'Untitled Problem',
    link: q.link || '#',
    topic: q.topic || 'Arrays',
    difficulty: q.difficulty || 'Medium',
    notes: q.notes || '',
    solved: Boolean(q.solved),
    important: Boolean(q.important),
    solvedAt: q.solved ? q.solvedAt || new Date().toISOString() : null,
    timeSpent: typeof q.timeSpent === 'number' && Number.isFinite(q.timeSpent) ? q.timeSpent : 0,
    company: Array.isArray(q.company) ? q.company : [],
    revisionsDone:
      Array.isArray(q.revisionsDone) && q.revisionsDone.length === REVISION_STAGES.length
        ? q.revisionsDone
        : REVISION_STAGES.map(() => false),
  };
}

export function loadQuestions(): Question[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((q, idx) => backfillQuestion(q, `q_${idx}`));
      }
    }
  } catch (err) {
    console.error('Failed to load questions from localStorage:', err);
  }

  // Fallback to seed questions
  const seeds = (seedQuestionsData as Partial<Question>[]).map((q, idx) =>
    backfillQuestion(q, `seed_${idx}`)
  );
  saveQuestions(seeds);
  return seeds;
}

export function saveQuestions(questions: Question[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
  } catch (err) {
    console.error('Failed to save questions:', err);
  }
}

export function loadActiveTimer(): ActiveTimer | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(TIMER_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.questionId === 'string' && typeof parsed.startedAt === 'number') {
      return parsed;
    }
  } catch {
    // ignore
  }
  return null;
}

export function saveActiveTimer(timer: ActiveTimer | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (!timer) {
      localStorage.removeItem(TIMER_KEY);
    } else {
      localStorage.setItem(TIMER_KEY, JSON.stringify(timer));
    }
  } catch {
    // ignore
  }
}

export function loadDailyGoal(): number {
  if (typeof window === 'undefined') return DEFAULT_DAILY_GOAL;
  try {
    const val = parseInt(localStorage.getItem(DAILY_GOAL_KEY) || '', 10);
    return Number.isFinite(val) && val > 0 ? val : DEFAULT_DAILY_GOAL;
  } catch {
    return DEFAULT_DAILY_GOAL;
  }
}

export function saveDailyGoal(goal: number): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DAILY_GOAL_KEY, String(goal));
  } catch {
    // ignore
  }
}

export function calculateStreaks(questions: Question[]): {
  currentStreak: number;
  longestStreak: number;
  todayCount: number;
  monthCount: number;
  historyMap: Map<string, Question[]>;
} {
  const historyMap = new Map<string, Question[]>();
  const todayStr = new Date().toISOString().slice(0, 10);
  const now = new Date();
  const currentMonthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

  let todayCount = 0;
  const monthDays = new Set<string>();

  questions.forEach((q) => {
    if (q.solved && q.solvedAt) {
      const day = q.solvedAt.slice(0, 10);
      if (!historyMap.has(day)) {
        historyMap.set(day, []);
      }
      historyMap.get(day)!.push(q);

      if (day === todayStr) {
        todayCount++;
      }
      if (day.startsWith(currentMonthStr)) {
        monthDays.add(day);
      }
    }
  });

  const sortedDays = Array.from(historyMap.keys()).sort();
  if (sortedDays.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      todayCount: 0,
      monthCount: 0,
      historyMap,
    };
  }

  // Calculate streaks
  let longestStreak = 0;
  let running = 0;
  let prevDate: Date | null = null;

  for (const dayStr of sortedDays) {
    const d = new Date(dayStr + 'T00:00:00');
    if (!prevDate) {
      running = 1;
    } else {
      const diffDays = Math.round((d.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        running++;
      } else if (diffDays > 1) {
        running = 1;
      }
    }
    prevDate = d;
    if (running > longestStreak) longestStreak = running;
  }

  // Current streak
  let currentStreak = 0;
  const checkDate = new Date();
  // If solved today, start from today, else start from yesterday
  const checkStr = checkDate.toISOString().slice(0, 10);
  let inspectDate = historyMap.has(checkStr)
    ? checkDate
    : new Date(checkDate.getTime() - 24 * 60 * 60 * 1000);

  while (true) {
    const dStr = inspectDate.toISOString().slice(0, 10);
    if (historyMap.has(dStr)) {
      currentStreak++;
      inspectDate = new Date(inspectDate.getTime() - 24 * 60 * 60 * 1000);
    } else {
      break;
    }
  }

  return {
    currentStreak,
    longestStreak,
    todayCount,
    monthCount: monthDays.size,
    historyMap,
  };
}

export function exportBackup(questions: Question[]): void {
  const data = {
    version: 2,
    exportedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    questions,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `dsa-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
