import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ZoomIn } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-primary-600 uppercase tracking-wide">My Work</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Recent Projects
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-white rounded-full text-slate-900 hover:text-primary-600 transition-colors" title="View details">
                     <ZoomIn size={20} />
                  </button>
                  {project.link && (
                    <a href={project.link} className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors" title="Visit Site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-800 flex items-center justify-center gap-2">
                Start a project with me like these <ArrowRight size={16}/>
            </a>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react'; // Import locally if needed, but App.tsx handles global imports usually. 
// Adding local import to be safe since App.tsx imports are not global.

export default Portfolio;