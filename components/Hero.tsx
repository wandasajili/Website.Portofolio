import React from 'react';
import { PortfolioData } from '../types';

interface HeroProps {
  data: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-3xl">
            <h2 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.45em] text-blue-600 dark:text-blue-500 mb-8">
              {data.jobTitle}
            </h2>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-outfit font-bold text-slate-900 dark:text-white mb-10 tracking-tight leading-tight whitespace-nowrap">
              {data.fullName}
            </h1>

            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0">
              {data.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-12 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-90 transition-all active:scale-95 shadow-xl"
              >
                Portfolio
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto px-12 py-4 bg-transparent border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-95"
              >
                Inquiry
              </a>
            </div>

            {/* Subtle Inline Email for "Profile Section" presence */}
            <div className="hidden lg:flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${data.email}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-colors">
                {data.email}
              </a>
            </div>
          </div>

          {/* Minimalist Profile Circle */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-full border-[12px] lg:border-[20px] border-slate-100 dark:border-slate-900 shadow-2xl overflow-hidden transition-transform duration-700">
                <img 
                  src="https://picsum.photos/1000/1000?random=110" 
                  alt={data.fullName}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Minimal Status Pill */}
              <div className="absolute bottom-[8%] left-0 sm:left-4 bg-white dark:bg-slate-800/90 backdrop-blur px-6 py-3 rounded-full shadow-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></span>
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white">Available</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity">
        <span className="text-[8px] font-black uppercase tracking-[0.6em] text-slate-500 translate-x-[0.3em]">Scroll</span>
        <div className="w-[1px] h-8 bg-slate-400"></div>
      </div>
    </div>
  );
};

export default Hero;