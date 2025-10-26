import React from 'react';
import Hero from './components/Hero';
import PlanSection from './components/PlanSection';
import RiskMatrix from './components/RiskMatrix';
import ProjectStructure from './components/ProjectStructure';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <PlanSection />
      <RiskMatrix />
      <ProjectStructure />
      <footer className="py-10 border-t border-white/10 text-center text-white/60 text-sm">
        Built for a secure, proximity-based auto lock/wake MVP.
      </footer>
    </div>
  );
}

export default App;
