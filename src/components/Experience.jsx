import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-[#070a12] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Career & Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experience.map((item, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-900 border-2 border-orange-500 group-hover:border-amber-400 flex items-center justify-center text-orange-400 shadow-lg shadow-orange-500/20 transition-colors">
                {item.type.includes("Education") ? (
                  <GraduationCap className="w-4 h-4" />
                ) : (
                  <Briefcase className="w-4 h-4" />
                )}
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-orange-500/15 text-orange-300 border border-orange-500/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-4">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{item.company}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs text-slate-400">{item.type}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Tech / Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
