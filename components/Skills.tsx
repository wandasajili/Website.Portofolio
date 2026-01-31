
import React from 'react';
import { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-10 md:mb-12">
          <span className="hidden md:block h-[1px] w-12 bg-blue-600 dark:bg-blue-400"></span>
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-8 md:gap-y-10">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-base md:text-lg font-medium text-slate-900 dark:text-white">{skill.name}</span>
                <span className="text-xs md:text-sm text-slate-400 dark:text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-slate-900 dark:bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {['Accessibility', 'Performance', 'Architecture', 'Testing'].map((item) => (
            <div key={item} className="flex flex-col items-center text-center p-5 md:p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md hover:border-blue-100 dark:hover:border-blue-400/30">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-sm md:text-base font-medium text-slate-800 dark:text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;