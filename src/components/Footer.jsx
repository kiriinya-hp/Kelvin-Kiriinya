import React from 'react';
import { ArrowUp, Mail, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060a] border-t border-slate-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-md">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight">
                {personal.name}
              </span>
              <p className="text-xs text-slate-400">
                Full-Stack Developer & Software Engineer
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-blue-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg bg-slate-900 text-slate-400 hover:text-orange-400 hover:bg-slate-800 border border-slate-800 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800 transition-all hover:-translate-y-0.5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Built with</span>
            <span className="text-orange-400 font-medium">React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
