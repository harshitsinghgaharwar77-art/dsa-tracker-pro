import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { TrackerView } from './components/tracker/TrackerView';
import { CodeCompiler } from './components/compiler/CodeCompiler';
import { RevisionView } from './components/revision/RevisionView';
import { DashboardView } from './components/dashboard/DashboardView';
import { StreakModal } from './components/common/StreakModal';
import { CloudConfigModal } from './components/common/CloudConfigModal';

const AppContent: React.FC = () => {
  const { activeView, isConfigModalOpen, setIsConfigModalOpen, loginWithGoogle } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Navbar />

      <main className="flex-1">
        {activeView === 'tracker' && <TrackerView />}
        {activeView === 'compiler' && <CodeCompiler />}
        {activeView === 'revision' && <RevisionView />}
        {activeView === 'dashboard' && <DashboardView />}
      </main>

      {/* Global Streak Celebration Modal */}
      <StreakModal />

      {/* Cloud Sync Setup Modal */}
      <CloudConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onConfigSaved={() => loginWithGoogle()}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
