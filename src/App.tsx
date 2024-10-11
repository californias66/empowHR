import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
        <Header />
        <main className="flex-grow p-4 overflow-hidden">
          <ErrorBoundary>
            <Dashboard />
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </DndProvider>
  );
}

export default App;