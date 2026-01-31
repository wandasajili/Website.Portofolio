
import React from 'react';

interface AboutProps {
  about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-10 md:mb-12">
          <span className="hidden md:block h-[1px] w-12 bg-blue-600 dark:bg-blue-400"></span>
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-outfit font-bold text-slate-900 dark:text-white leading-tight transition-colors">
              A brief history of my journey and development.
            </h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light transition-colors">
              {about}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-400/50 transition-all duration-300">
              <h4 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-2">08+</h4>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Years of professional experience in frontend development.</p>
            </div>
            <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-400/50 transition-all duration-300">
              <h4 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-2">120</h4>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium">Successfully delivered projects across various industries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;