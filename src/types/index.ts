export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  title: string;
  link: string;
  topic: string;
  difficulty: Difficulty;
  notes: string;
  solved: boolean;
  important: boolean;
  solvedAt?: string | null;
  timeSpent?: number; // in seconds
  company?: string[];
  revisionsDone?: boolean[]; // 5 stages: [day 1, 3, 7, 15, 30]
}

export interface ActiveTimer {
  questionId: string;
  startedAt: number; // timestamp ms
}

export type AppView = 'tracker' | 'compiler' | 'revision' | 'dashboard';

export interface TestCase {
  id: string;
  input: string;
  expected: string;
}

export interface TestResult {
  caseIndex: number;
  stdout: string;
  stderr: string;
  passed?: boolean;
  timeMs?: number;
  error?: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  primary: string;
  accent: string;
  swatch: string;
  bgClass: string;
}

export interface TopicStat {
  topic: string;
  total: number;
  solved: number;
  percent: number;
  color: string;
}
