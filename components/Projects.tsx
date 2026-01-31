
import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-blue-600 dark:bg-blue-400"></span>
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Portfolio</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white transition-colors">
              Selected Works
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm transition-colors">
            A curation of projects focusing on design aesthetics, technical complexity, and business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-slate-200 dark:hover:border-slate-600 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a href={project.link} className="px-6 py-3 bg-white text-slate-900 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-50">
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow transition-colors">
                  {project.description}
                </p>
                <a href={project.link} className="inline-flex items-center text-slate-900 dark:text-slate-200 font-bold group/link hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;