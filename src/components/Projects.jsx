import React from 'react';
import { ExternalLink, Sparkles, ShoppingBag, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-[#0a0e1a]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Featured Portfolio Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A glimpse into the applications, e-commerce solutions, and software systems I've engineered.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header with Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                    {project.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-orange-400 transition-colors">
                    {project.id === 'triple-crown-store' ? (
                      <ShoppingBag className="w-5 h-5" />
                    ) : (
                      <FolderGit2 className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-4">
                  {project.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-800/80">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs transition-colors shadow-md shadow-orange-500/20"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs border border-slate-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="glass-panel rounded-2xl p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              Looking for more repositories and scripts?
            </h4>
            <p className="text-sm text-slate-400">
              Check out my full GitHub profile where I push ongoing university projects, scripts, and utilities.
            </p>
          </div>
          <a
            href="https://github.com/kiriinya-hp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 shrink-0 transition-all hover:scale-105"
          >
            <GithubIcon className="w-5 h-5" />
            <span>Visit @kiriinya-hp</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
