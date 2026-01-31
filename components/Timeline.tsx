
import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-[1px] w-12 bg-blue-600 dark:bg-blue-400"></span>
          <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Resume</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800">
          {events.map((event) => (
            <div key={event.id} className="relative pl-12 group">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-9 h-9 flex items-center justify-center">
                <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-300 ${event.type === 'experience' ? 'bg-slate-900 border-slate-900 dark:bg-white dark:border-white' : 'bg-white border-slate-900 dark:bg-slate-900 dark:border-white'}`}></div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:border-blue-200 dark:group-hover:border-blue-400/40 group-hover:shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-2">
                      {event.type}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{event.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium transition-colors">{event.organization}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg transition-colors">
                    {event.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;