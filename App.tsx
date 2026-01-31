import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'timeline', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 dark:selection:bg-blue-900/30 transition-colors duration-500 overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero" className="min-h-screen">
          <Hero data={PORTFOLIO_DATA} />
        </section>

        <section id="about" className="py-20 md:py-32 lg:py-40 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-500">
          <About about={PORTFOLIO_DATA.about} />
        </section>

        <section id="skills" className="py-20 md:py-32 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500">
          <Skills skills={PORTFOLIO_DATA.skills} />
        </section>

        <section id="projects" className="py-20 md:py-32 lg:py-40 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-500">
          <Projects projects={PORTFOLIO_DATA.projects} />
        </section>

        <section id="timeline" className="py-20 md:py-32 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500">
          <Timeline events={PORTFOLIO_DATA.timeline} />
        </section>

        <section id="certificates" className="py-20 md:py-32 lg:py-40 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-500">
          <Certificates certificates={PORTFOLIO_DATA.certificates} />
        </section>

        <section id="contact" className="py-20 md:py-32 lg:py-40 bg-slate-900 dark:bg-black text-white transition-colors duration-500">
          <Contact data={PORTFOLIO_DATA} />
        </section>
      </main>

      {/* Floating Controls */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4 items-center">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-14 h-14 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-slate-900 dark:text-yellow-400 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 border border-slate-200 dark:border-slate-700 group"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? (
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.95 16.95l.707.707M7.05 7.05l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 group-hover:-rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
        
        <AIAssistant />
      </div>
    </div>
  );
};

export default App;