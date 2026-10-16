import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import logoLight from '../../assets/logo-light.jpg';
import logoDark from '../../assets/logo-dark.jpg';
import {
  Code2,
  Terminal,
  RotateCcw,
  LayoutDashboard,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  RefreshCw,
  Trash2,
  Cloud,
  Check,
  LogOut,
  User as UserIcon,
  ChevronDown,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    questions,
    activeView,
    setActiveView,
    soundEnabled,
    toggleSound,
    isDarkMode,
    toggleThemeMode,
    resetTopic,
    resetAll,
    user,
    cloudSyncStatus,
    loginWithGoogle,
    logoutUser,
    triggerCloudSync,
  } = useApp();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showResetMenu, setShowResetMenu] = useState(false);
  const [selectedResetTopic, setSelectedResetTopic] = useState('Arrays');

  const solvedCount = questions.filter((q) => q.solved).length;
  const totalCount = questions.length;
  const percent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  // Calculate overdue/due revision count
  const revisionDueCount = questions.filter((q) => {
    if (!q.solved || !q.solvedAt) return false;
    const solveDate = new Date(q.solvedAt);
    const now = new Date();
    const daysSinceSolve = Math.floor((now.getTime() - solveDate.getTime()) / (1000 * 60 * 60 * 24));
    const stages = [1, 3, 7, 15, 30];
    const revisionsDone = q.revisionsDone || [false, false, false, false, false];

    for (let i = 0; i < stages.length; i++) {
      if (!revisionsDone[i] && daysSinceSolve >= stages[i]) {
        return true;
      }
    }
    return false;
  }).length;

  const topics = Array.from(new Set(questions.map((q) => q.topic))).sort();

  // SVG circular ring properties
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/20 ring-1 ring-slate-800/80 shrink-0 flex items-center justify-center transition-transform hover:scale-105 bg-slate-900">
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="DSA Tracker Pro Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-white text-base tracking-tight">
                DSA Tracker Pro
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-md">
                v2.0
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Master Data Structures & Algorithms</p>
          </div>
        </div>

        {/* View Navigation Tabs */}
        <nav className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800/90 shadow-inner">
          <button
            onClick={() => setActiveView('tracker')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeView === 'tracker'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Problems</span>
          </button>

          <button
            onClick={() => setActiveView('compiler')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeView === 'compiler'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>Compiler</span>
          </button>

          <button
            onClick={() => setActiveView('revision')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 relative ${
              activeView === 'revision'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Revise</span>
            {revisionDueCount > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] font-bold bg-amber-500 text-slate-950 rounded-full animate-pulse">
                {revisionDueCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeView === 'dashboard'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Progress Ring & Pill */}
          <div className="hidden lg:flex items-center gap-2.5 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-xl">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <svg className="w-7 h-7 transform -rotate-90">
                <circle
                  cx="14"
                  cy="14"
                  r={12}
                  className="stroke-slate-800"
                  strokeWidth="2.5"
                  fill="transparent"
                />
                <circle
                  cx="14"
                  cy="14"
                  r={12}
                  className="stroke-indigo-500 transition-all duration-500 ease-out"
                  strokeWidth="2.5"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 12}
                  strokeDashoffset={2 * Math.PI * 12 - (percent / 100) * 2 * Math.PI * 12}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute text-[9px] font-mono font-bold text-slate-200">
                {percent}%
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-white">
                <span className="text-indigo-400">{solvedCount}</span>
                <span className="text-slate-500"> / </span>
                <span>{totalCount}</span>
              </div>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-indigo-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleThemeMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors flex items-center justify-center active:scale-95"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>

          {/* Reset Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setShowResetMenu(!showResetMenu);
                setShowUserMenu(false);
              }}
              title="Reset progress"
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            {showResetMenu && (
              <div className="absolute right-0 mt-2 w-64 p-3 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                <div className="text-xs font-bold text-slate-200 mb-1 flex items-center justify-between">
                  <span>Reset Progress</span>
                  <span className="text-[10px] text-slate-500">Keeps notes</span>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="flex gap-2">
                    <select
                      value={selectedResetTopic}
                      onChange={(e) => setSelectedResetTopic(e.target.value)}
                      className="flex-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2 py-1.5 focus:outline-none focus:border-indigo-500"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        if (confirm(`Reset progress for "${selectedResetTopic}"?`)) {
                          resetTopic(selectedResetTopic);
                          setShowResetMenu(false);
                        }
                      }}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                  <hr className="border-slate-800" />
                  <button
                    onClick={() => {
                      if (
                        confirm(
                          'Are you sure you want to reset ALL solved questions? Your notes and starred flags will be preserved.'
                        )
                      ) {
                        resetAll();
                        setShowResetMenu(false);
                      }
                    }}
                    className="w-full py-1.5 px-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold rounded-lg border border-rose-500/20 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Reset All Solved
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Google Authentication & Cloud Sync */}
          <div className="relative">
            {user ? (
              <div>
                <button
                  onClick={() => {
                    setShowUserMenu(!showUserMenu);
                    setShowResetMenu(false);
                  }}
                  className="flex items-center gap-2 p-1 pl-2 pr-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl transition-all"
                  title={user.email || 'Google Account'}
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || 'User'}
                      className="w-6 h-6 rounded-lg object-cover ring-1 ring-indigo-500/50"
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      {user.displayName?.[0] || 'U'}
                    </div>
                  )}

                  <span className="text-xs font-semibold hidden md:inline max-w-[100px] truncate">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>

                  {/* Sync status indicator dot */}
                  <span
                    className={`w-2 h-2 rounded-full ${
                      cloudSyncStatus === 'syncing'
                        ? 'bg-amber-400 animate-ping'
                        : cloudSyncStatus === 'synced'
                        ? 'bg-emerald-400'
                        : cloudSyncStatus === 'error'
                        ? 'bg-rose-500'
                        : 'bg-slate-500'
                    }`}
                    title={`Cloud Status: ${cloudSyncStatus}`}
                  />
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {/* User Dropdown */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-60 p-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-800">
                      {user.photoURL ? (
                        <img
                          src={user.photoURL}
                          alt=""
                          className="w-8 h-8 rounded-xl object-cover ring-1 ring-white/20"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                          {user.displayName?.[0] || 'U'}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {user.displayName || 'Google User'}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">{user.email}</div>
                      </div>
                    </div>

                    <div className="py-2 space-y-1">
                      <div className="flex items-center justify-between text-xs px-1 text-slate-400">
                        <span className="flex items-center gap-1.5 text-[11px]">
                          <Cloud className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Status:</span>
                        </span>
                        <span
                          className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                            cloudSyncStatus === 'synced'
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : cloudSyncStatus === 'syncing'
                              ? 'bg-amber-500/10 text-amber-400 animate-pulse'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {cloudSyncStatus === 'synced'
                            ? 'Cloud Synced'
                            : cloudSyncStatus === 'syncing'
                            ? 'Syncing...'
                            : cloudSyncStatus === 'error'
                            ? 'Sync Error'
                            : 'Local'}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          triggerCloudSync();
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                      >
                        <span>Sync Progress Now</span>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      </button>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                      <button
                        onClick={() => {
                          logoutUser();
                          setShowUserMenu(false);
                        }}
                        className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold border border-rose-500/20 transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold shadow-md shadow-slate-900/10 transition-all border border-slate-200 active:scale-95"
                title="Sign in with Google to sync DSA progress"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="hidden sm:inline">Sign in with Google</span>
                <span className="sm:hidden">Sign in</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
