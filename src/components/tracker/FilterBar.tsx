import React from 'react';
import { Search, X, Filter, Sparkles, Plus } from 'lucide-react';
import { Difficulty } from '../../types';

interface FilterBarProps {
  search: string;
  setSearch: (s: string) => void;
  selectedTopic: string;
  setSelectedTopic: (t: string) => void;
  statusFilter: string;
  setStatusFilter: (s: string) => void;
  diffFilter: string;
  setDiffFilter: (d: string) => void;
  companyFilter: string;
  setCompanyFilter: (c: string) => void;
  topics: string[];
  companies: string[];
  totalFiltered: number;
  totalQuestions: number;
  onOpenAddModal: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  search,
  setSearch,
  selectedTopic,
  setSelectedTopic,
  statusFilter,
  setStatusFilter,
  diffFilter,
  setDiffFilter,
  companyFilter,
  setCompanyFilter,
  topics,
  companies,
  totalFiltered,
  totalQuestions,
  onOpenAddModal,
}) => {
  const isFiltered =
    search.trim() !== '' ||
    selectedTopic !== 'all' ||
    statusFilter !== 'all' ||
    diffFilter !== 'all' ||
    companyFilter !== 'all';

  const clearAllFilters = () => {
    setSearch('');
    setSelectedTopic('all');
    setStatusFilter('all');
    setDiffFilter('all');
    setCompanyFilter('all');
  };

  return (
    <div className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 px-4 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search problems, patterns, or companies..."
            className="w-full pl-9 pr-8 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/80 focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Topic */}
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="bg-slate-900/90 border border-slate-800 text-xs text-slate-300 rounded-xl px-2.5 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="all">All Topics ({topics.length})</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-900/90 border border-slate-800 text-xs text-slate-300 rounded-xl px-2.5 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="solved">✅ Solved</option>
            <option value="unsolved">⭕ Unsolved</option>
            <option value="important">⭐ Important</option>
          </select>

          {/* Difficulty */}
          <select
            value={diffFilter}
            onChange={(e) => setDiffFilter(e.target.value)}
            className="bg-slate-900/90 border border-slate-800 text-xs text-slate-300 rounded-xl px-2.5 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
          >
            <option value="all">All Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Company */}
          {companies.length > 0 && (
            <select
              value={companyFilter}
              onChange={(e) => setCompanyFilter(e.target.value)}
              className="bg-slate-900/90 border border-slate-800 text-xs text-slate-300 rounded-xl px-2.5 py-2 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              <option value="all">All Companies</option>
              {companies.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}

          {/* Clear Filters */}
          {isFiltered && (
            <button
              onClick={clearAllFilters}
              className="px-2.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          {/* Filter Match Count */}
          <div className="text-xs font-mono text-slate-400 px-2">
            <span className="text-indigo-400 font-bold">{totalFiltered}</span>
            <span className="text-slate-600"> / </span>
            <span>{totalQuestions}</span>
          </div>

          {/* Add Question Button */}
          <button
            onClick={onOpenAddModal}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all active:scale-95 ml-auto sm:ml-0"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Question</span>
          </button>
        </div>
      </div>
    </div>
  );
};
