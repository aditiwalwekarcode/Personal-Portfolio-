import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Journey } from './components/Journey';
import { BuildLog } from './components/BuildLog';
import { DeveloperProfiles } from './components/DeveloperProfiles';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { sendSilentVisitorNotification } from './utils/visitorNotifier';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Silently notify whenever a new visitor opens the portfolio
  useEffect(() => {
    // Non-blocking background dispatch
    const timer = setTimeout(() => {
      sendSilentVisitorNotification('visit');
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
    sendSilentVisitorNotification('resume');
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f14] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200 selection:bg-blue-600 selection:text-white">
        
        {/* Subtle Top Hairline Scroll Progress */}
        <ScrollProgress />

        {/* Clear, Hassle-Free Top Bar Navigation */}
        <Navbar onOpenResumeModal={handleOpenResume} />

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Section 01: Hero */}
          <Hero onOpenResumeModal={handleOpenResume} />

          {/* Section 02: About */}
          <About />

          {/* Section 03: Currently Exploring */}
          <CurrentlyExploring />

          {/* Section 04: Interactive Skills */}
          <Skills />

          {/* Section 05: Projects & Filtering */}
          <Projects />

          {/* Section 06: Achievements (AWS Ignite Bedrock) */}
          <Achievements />

          {/* Section 07: Certifications (AWS, Gemini, Unstop, IIT Madras) */}
          <Certifications />

          {/* Section 08: Formal Education */}
          <Education />

          {/* Section 09: Chronological Journey */}
          <Journey />

          {/* Section 10: Engineering Build Log */}
          <BuildLog />

          {/* Section 11: Developer Profiles (GitHub & LeetCode) */}
          <DeveloperProfiles />

          {/* Section 12: Resume System */}
          <ResumeSection onOpenPreview={handleOpenResume} />

          {/* Section 13: Direct Contact */}
          <Contact />
        </main>

        {/* Clean Footer (No alert buttons or telemetry visible to visitors) */}
        <Footer />

        {/* Global In-Page Resume Viewer Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />

      </div>
    </ThemeProvider>
  );
}
