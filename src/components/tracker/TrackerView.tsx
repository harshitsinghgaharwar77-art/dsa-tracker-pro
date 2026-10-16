import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { Question } from '../../types';
import { Hero } from './Hero';
import { FilterBar } from './FilterBar';
import { TopicSection } from './TopicSection';
import { NotesModal } from './NotesModal';
import { QuestionModal } from './QuestionModal';
import { JOURNEY_TOPIC_ORDER } from '../../data/constants';
import { SearchX, Plus } from 'lucide-react';

export const TrackerView: React.FC = () => {
  const { questions } = useApp();

  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [diffFilter, setDiffFilter] = useState('all');
  const [companyFilter, setCompanyFilter] = useState('all');

  const [activeNotesQuestion, setActiveNotesQuestion] = useState<Question | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Extract unique topics
  const allTopics = useMemo(() => {
    const set = new Set(questions.map((q) => q.topic));
    const ordered: string[] = [];
    JOURNEY_TOPIC_ORDER.forEach((t) => {
      if (set.has(t)) {
        ordered.push(t);
        set.delete(t);
      }
    });
    return [...ordered, ...Array.from(set).sort()];
  }, [questions]);

  // Extract unique companies
  const allCompanies = useMemo(() => {
    const compSet = new Set<string>();
    questions.forEach((q) => {
      q.company?.forEach((c) => compSet.add(c));
    });
    return Array.from(compSet).sort();
  }, [questions]);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    const qTerm = search.trim().toLowerCase();

    return questions.filter((q) => {
      // Search
      if (qTerm) {
        const matchesTitle = q.title.toLowerCase().includes(qTerm);
        const matchesTopic = q.topic.toLowerCase().includes(qTerm);
        const matchesCompany = q.company?.some((c) => c.toLowerCase().includes(qTerm));
        const matchesNotes = q.notes.toLowerCase().includes(qTerm);
        if (!matchesTitle && !matchesTopic && !matchesCompany && !matchesNotes) {
          return false;
        }
      }

      // Topic
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) {
        return false;
      }

      // Status
      if (statusFilter === 'solved' && !q.solved) return false;
      if (statusFilter === 'unsolved' && q.solved) return false;
      if (statusFilter === 'important' && !q.important) return false;

      // Difficulty
      if (diffFilter !== 'all' && q.difficulty !== diffFilter) return false;

      // Company
      if (companyFilter !== 'all' && (!q.company || !q.company.includes(companyFilter))) {
        return false;
      }

      return true;
    });
  }, [questions, search, selectedTopic, statusFilter, diffFilter, companyFilter]);

  // Group filtered questions by topic according to JOURNEY_TOPIC_ORDER
  const groupedByTopic = useMemo(() => {
    const map = new Map<string, Question[]>();
    filteredQuestions.forEach((q) => {
      if (!map.has(q.topic)) {
        map.set(q.topic, []);
      }
      map.get(q.topic)!.push(q);
    });

    const result: { topic: string; questions: Question[] }[] = [];
    allTopics.forEach((t) => {
      if (map.has(t)) {
        result.push({ topic: t, questions: map.get(t)! });
        map.delete(t);
      }
    });

    // any leftovers
    map.forEach((qs, topic) => {
      result.push({ topic, questions: qs });
    });

    return result;
  }, [filteredQuestions, allTopics]);

  return (
    <div className="min-h-screen pb-24">
      {/* Hero */}
      <Hero onSelectTopic={(t) => setSelectedTopic(t)} />

      {/* Filter Bar */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        diffFilter={diffFilter}
        setDiffFilter={setDiffFilter}
        companyFilter={companyFilter}
        setCompanyFilter={setCompanyFilter}
        topics={allTopics}
        companies={allCompanies}
        totalFiltered={filteredQuestions.length}
        totalQuestions={questions.length}
        onOpenAddModal={() => setIsAddModalOpen(true)}
      />

      {/* Main Topic Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-4">
        {groupedByTopic.length === 0 ? (
          <div className="py-16 text-center glass-card rounded-2xl border border-slate-800 p-8">
            <SearchX className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Problems Found</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto mb-4">
              We couldn't find any questions matching your current search or filter combination.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedTopic('all');
                setStatusFilter('all');
                setDiffFilter('all');
                setCompanyFilter('all');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          groupedByTopic.map(({ topic, questions: topicQuestions }) => (
            <TopicSection
              key={topic}
              topic={topic}
              questions={topicQuestions}
              onOpenNotes={(q) => setActiveNotesQuestion(q)}
            />
          ))
        )}
      </main>

      {/* Floating Add Button for Mobile */}
      <button
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-6 right-6 z-30 sm:hidden w-13 h-13 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center active:scale-90 transition-transform"
        title="Add problem"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Modals */}
      <NotesModal
        question={activeNotesQuestion}
        onClose={() => setActiveNotesQuestion(null)}
      />

      <QuestionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        availableTopics={allTopics}
      />
    </div>
  );
};
