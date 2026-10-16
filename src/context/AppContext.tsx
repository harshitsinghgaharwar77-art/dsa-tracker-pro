import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode, useRef } from 'react';
import { Question, ActiveTimer, AppView } from '../types';
import {
  loadQuestions,
  saveQuestions,
  loadActiveTimer,
  saveActiveTimer,
  loadDailyGoal,
  saveDailyGoal,
  calculateStreaks,
  backfillQuestion,
} from '../utils/storage';
import { playSolveSound, playStreakSound, isSoundEnabled, setSoundEnabled } from '../utils/audio';
import { triggerSolveConfetti, triggerStreakCelebration } from '../utils/confetti';
import {
  initFirebase,
  signInWithGoogle,
  logOut,
  syncUserDataToCloud,
  fetchUserDataFromCloud,
  isFirebaseConfigured,
} from '../utils/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export type SyncStatus = 'synced' | 'syncing' | 'error' | 'local';

interface AppContextType {
  questions: Question[];
  activeView: AppView;
  setActiveView: (view: AppView) => void;
  activeTimer: ActiveTimer | null;
  dailyGoal: number;
  setDailyGoal: (goal: number) => void;
  isDarkMode: boolean;
  toggleThemeMode: () => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  toggleSolve: (id: string) => void;
  toggleImportant: (id: string) => void;
  updateNotes: (id: string, notes: string) => void;
  toggleTimer: (id: string) => void;
  resetTimer: (id: string) => void;
  addQuestion: (q: Omit<Question, 'id'>) => void;
  deleteQuestion: (id: string) => void;
  resetTopic: (topic: string) => void;
  resetAll: () => void;
  markRevision: (id: string, stageIndex: number) => void;
  importQuestions: (newQuestions: Question[]) => void;
  streakStats: ReturnType<typeof calculateStreaks>;
  streakPopup: { open: boolean; count: number };
  closeStreakPopup: () => void;
  totalTimePracticed: number;

  // Google Login & Cloud Storage
  user: User | null;
  cloudSyncStatus: SyncStatus;
  loginWithGoogle: () => Promise<void>;
  logoutUser: () => Promise<void>;
  triggerCloudSync: () => Promise<void>;
  isConfigModalOpen: boolean;
  setIsConfigModalOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>(() => loadQuestions());
  const [activeView, setActiveView] = useState<AppView>('tracker');
  const [activeTimer, setActiveTimer] = useState<ActiveTimer | null>(() => loadActiveTimer());
  const [dailyGoal, setDailyGoalState] = useState<number>(() => loadDailyGoal());
  const [soundEnabled, setSoundState] = useState<boolean>(() => isSoundEnabled());
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('lb_dsa_mode') !== 'light';
  });
  const [streakPopup, setStreakPopup] = useState<{ open: boolean; count: number }>({
    open: false,
    count: 0,
  });

  // Cloud user & sync status
  const [user, setUser] = useState<User | null>(null);
  const [cloudSyncStatus, setCloudSyncStatus] = useState<SyncStatus>('local');
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const syncTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Initialize Firebase Auth listener
  useEffect(() => {
    const { auth } = initFirebase();
    if (!auth) {
      setCloudSyncStatus('local');
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setCloudSyncStatus('syncing');
        try {
          const cloudQuestions = await fetchUserDataFromCloud(currentUser);
          if (cloudQuestions && Array.isArray(cloudQuestions) && cloudQuestions.length > 0) {
            setQuestions(cloudQuestions.map((q, idx) => backfillQuestion(q, `cloud_${idx}`)));
          } else {
            // First time login - upload local questions
            await syncUserDataToCloud(currentUser, questions);
          }
          setCloudSyncStatus('synced');
        } catch (err) {
          console.error('Cloud sync load failed:', err);
          setCloudSyncStatus('error');
        }
      } else {
        setCloudSyncStatus('local');
      }
    });

    return () => unsubscribe();
  }, []);

  // Debounced cloud sync on question change
  useEffect(() => {
    saveQuestions(questions);

    if (!user) return;

    setCloudSyncStatus('syncing');
    if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);

    syncTimeoutRef.current = setTimeout(async () => {
      try {
        await syncUserDataToCloud(user, questions);
        setCloudSyncStatus('synced');
      } catch (err) {
        console.error('Auto cloud sync failed:', err);
        setCloudSyncStatus('error');
      }
    }, 1200);

    return () => {
      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    };
  }, [questions, user]);

  // Sync active timer
  useEffect(() => {
    saveActiveTimer(activeTimer);
  }, [activeTimer]);

  // Apply Light / Dark theme to DOM
  useEffect(() => {
    document.body.className = '';

    if (!isDarkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.add(
        'theme-light',
        'min-h-screen',
        'text-slate-900',
        'bg-slate-50',
        'selection:bg-indigo-500',
        'selection:text-white',
        'transition-colors',
        'duration-300'
      );
      localStorage.setItem('lb_dsa_mode', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.add(
        'theme-dark',
        'min-h-screen',
        'text-slate-100',
        'bg-slate-950',
        'selection:bg-indigo-500',
        'selection:text-white',
        'transition-colors',
        'duration-300'
      );
      localStorage.setItem('lb_dsa_mode', 'dark');
    }
  }, [isDarkMode]);

  const toggleThemeMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const streakStats = useMemo(() => calculateStreaks(questions), [questions]);

  const totalTimePracticed = useMemo(() => {
    return questions.reduce((acc, q) => acc + (q.timeSpent || 0), 0);
  }, [questions]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundState(next);
    setSoundEnabled(next);
  };

  const setDailyGoal = (goal: number) => {
    setDailyGoalState(goal);
    saveDailyGoal(goal);
  };

  const toggleSolve = (id: string) => {
    const prevStreaks = calculateStreaks(questions);
    let justSolved = false;

    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const nextSolved = !q.solved;
          justSolved = nextSolved;

          let additionalTime = 0;
          if (activeTimer && activeTimer.questionId === id) {
            additionalTime = Math.round((Date.now() - activeTimer.startedAt) / 1000);
            setActiveTimer(null);
          }

          return {
            ...q,
            solved: nextSolved,
            solvedAt: nextSolved ? new Date().toISOString() : null,
            timeSpent: (q.timeSpent || 0) + additionalTime,
            revisionsDone: nextSolved ? q.revisionsDone : [false, false, false, false, false],
          };
        }
        return q;
      })
    );

    if (justSolved) {
      playSolveSound();
      triggerSolveConfetti();

      setTimeout(() => {
        setQuestions((currentQs) => {
          const nextStreaks = calculateStreaks(currentQs);
          if (nextStreaks.currentStreak > prevStreaks.currentStreak && nextStreaks.currentStreak > 0) {
            playStreakSound();
            triggerStreakCelebration();
            setStreakPopup({ open: true, count: nextStreaks.currentStreak });
          }
          return currentQs;
        });
      }, 50);
    }
  };

  const toggleImportant = (id: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, important: !q.important } : q))
    );
  };

  const updateNotes = (id: string, notes: string) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, notes } : q))
    );
  };

  const toggleTimer = (id: string) => {
    if (activeTimer && activeTimer.questionId === id) {
      const elapsed = Math.max(0, Math.round((Date.now() - activeTimer.startedAt) / 1000));
      setQuestions((prev) =>
        prev.map((q) =>
          q.id === id ? { ...q, timeSpent: (q.timeSpent || 0) + elapsed } : q
        )
      );
      setActiveTimer(null);
    } else {
      if (activeTimer) {
        const elapsed = Math.max(0, Math.round((Date.now() - activeTimer.startedAt) / 1000));
        setQuestions((prev) =>
          prev.map((q) =>
            q.id === activeTimer.questionId
              ? { ...q, timeSpent: (q.timeSpent || 0) + elapsed }
              : q
          )
        );
      }
      setActiveTimer({ questionId: id, startedAt: Date.now() });
    }
  };

  const resetTimer = (id: string) => {
    if (activeTimer && activeTimer.questionId === id) {
      setActiveTimer(null);
    }
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, timeSpent: 0 } : q))
    );
  };

  const addQuestion = (qData: Omit<Question, 'id'>) => {
    const newQ: Question = backfillQuestion(
      {
        ...qData,
        id: `custom_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      },
      `q_${Date.now()}`
    );
    setQuestions((prev) => [newQ, ...prev]);
  };

  const deleteQuestion = (id: string) => {
    if (activeTimer && activeTimer.questionId === id) {
      setActiveTimer(null);
    }
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const resetTopic = (topic: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.topic === topic) {
          return {
            ...q,
            solved: false,
            solvedAt: null,
            timeSpent: 0,
            revisionsDone: [false, false, false, false, false],
          };
        }
        return q;
      })
    );
  };

  const resetAll = () => {
    setActiveTimer(null);
    setQuestions((prev) =>
      prev.map((q) => ({
        ...q,
        solved: false,
        solvedAt: null,
        timeSpent: 0,
        revisionsDone: [false, false, false, false, false],
      }))
    );
  };

  const markRevision = (id: string, stageIndex: number) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id === id) {
          const updated = [...(q.revisionsDone || [false, false, false, false, false])];
          updated[stageIndex] = true;
          return { ...q, revisionsDone: updated };
        }
        return q;
      })
    );
    playSolveSound();
    triggerSolveConfetti();
  };

  const importQuestions = (newQuestions: Question[]) => {
    setQuestions(newQuestions.map((q, idx) => backfillQuestion(q, `import_${idx}`)));
  };

  const closeStreakPopup = () => {
    setStreakPopup({ open: false, count: 0 });
  };

  // Google Authentication handlers
  const loginWithGoogle = async () => {
    if (!isFirebaseConfigured()) {
      setIsConfigModalOpen(true);
      return;
    }

    try {
      setCloudSyncStatus('syncing');
      const loggedUser = await signInWithGoogle();
      if (loggedUser) {
        setUser(loggedUser);
        const cloudQuestions = await fetchUserDataFromCloud(loggedUser);
        if (cloudQuestions && Array.isArray(cloudQuestions) && cloudQuestions.length > 0) {
          setQuestions(cloudQuestions.map((q, idx) => backfillQuestion(q, `cloud_${idx}`)));
        } else {
          await syncUserDataToCloud(loggedUser, questions);
        }
        setCloudSyncStatus('synced');
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.message === 'CONFIG_REQUIRED') {
        setIsConfigModalOpen(true);
      } else {
        console.error('Google Sign-In failed:', err);
        setCloudSyncStatus('error');
      }
    }
  };

  const logoutUser = async () => {
    try {
      await logOut();
      setUser(null);
      setCloudSyncStatus('local');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const triggerCloudSync = async () => {
    if (!user) {
      await loginWithGoogle();
      return;
    }
    setCloudSyncStatus('syncing');
    try {
      await syncUserDataToCloud(user, questions);
      setCloudSyncStatus('synced');
    } catch (err) {
      setCloudSyncStatus('error');
    }
  };

  return (
    <AppContext.Provider
      value={{
        questions,
        activeView,
        setActiveView,
        activeTimer,
        dailyGoal,
        setDailyGoal,
        isDarkMode,
        toggleThemeMode,
        soundEnabled,
        toggleSound,
        toggleSolve,
        toggleImportant,
        updateNotes,
        toggleTimer,
        resetTimer,
        addQuestion,
        deleteQuestion,
        resetTopic,
        resetAll,
        markRevision,
        importQuestions,
        streakStats,
        streakPopup,
        closeStreakPopup,
        totalTimePracticed,
        user,
        cloudSyncStatus,
        loginWithGoogle,
        logoutUser,
        triggerCloudSync,
        isConfigModalOpen,
        setIsConfigModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
