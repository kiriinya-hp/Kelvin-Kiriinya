import React, { useState, useEffect } from 'react';
import { Layers, Terminal, Sparkles, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skillsByCategory, allSkills } = portfolioData;
  const [activeTab, setActiveTab] = useState('categorized');
  const [tickerIndex, setTickerIndex] = useState(0);

  // Rotating live spotlight ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % allSkills.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [allSkills.length]);

  return (
    <section id="skills" className="py-24 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Languages, libraries, databases, and network architectures I leverage to deliver solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3 mb-8" />

          {/* Toggle Button for Mode */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab('categorized')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'categorized'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Categorized Stack
            </button>
            <button
              onClick={() => setActiveTab('spotlight')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'spotlight'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Live Spotlight
            </button>
          </div>
        </div>

        {/* Categorized View */}
        {activeTab === 'categorized' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {skillsByCategory.map((cat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-4">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-orange-500/40 hover:text-orange-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live Spotlight Mode */}
        {activeTab === 'spotlight' && (
          <div className="max-w-2xl mx-auto glass-panel rounded-2xl p-10 text-center border border-slate-800 shadow-2xl flex flex-col items-center justify-center min-h-[260px] animate-in fade-in duration-300">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Real-Time Competency Spotlight
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white mb-4 transition-all duration-300">
              {allSkills[tickerIndex]}
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Actively practiced and implemented in production and academic environments.
            </p>
            <div className="flex items-center gap-1 mt-6">
              {allSkills.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === tickerIndex ? 'w-6 bg-orange-500' : 'w-2 bg-slate-800'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
