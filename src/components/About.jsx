import React from 'react';
import { Award, CheckCircle2, Code2, Server, Smartphone, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { stats, personal } = portfolioData;

  const coreStrengths = [
    {
      icon: <Code2 className="w-5 h-5 text-orange-400" />,
      title: "Frontend Engineering",
      desc: "Creating pixel-perfect, accessible, and reactive user interfaces using React, Next.js, and Tailwind CSS."
    },
    {
      icon: <Server className="w-5 h-5 text-amber-400" />,
      title: "Backend & Systems",
      desc: "Architecting modular REST APIs, authentications, and scalable database designs with Node.js, Express, and MongoDB."
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: "LAN & Infrastructure",
      desc: "Practical network routing, IP schemes, switch configuration, and hardware diagnostics refined through industry experience."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0e1a]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3" />
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Engineering reliable software from code to infrastructure.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                I began my journey into technology driven by curiosity about how computing systems communicate and scale from scratch. That interest quickly expanded into full-stack development, distributed architecture, and network administration.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                As a student at <strong className="text-slate-200">{personal.institution}</strong> and an experienced developer with hands-on industrial attachment at <strong className="text-slate-200">Afya Sacco Ltd</strong>, I bridge the gap between software design and hardware operations. Whether collaborating on complex team systems or crafting bespoke client platforms, I prioritize maintainability, security, and exceptional performance.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-800">
              {coreStrengths.map((s, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="p-2 w-fit rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {s.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white">{s.title}</h4>
                  <p className="text-xs text-slate-400 leading-normal">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Quick Highlights Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Stats 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="glass-card rounded-xl p-6 flex flex-col items-center justify-center text-center group"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Fast facts container */}
            <div className="glass-panel rounded-xl p-6 flex flex-col gap-3.5 flex-1 justify-center border border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Professional Highlights
              </h4>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  Specialized in modern stack web architectures (<span className="text-orange-400 font-medium">React, Next.js, Node</span>).
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  Hands-on industry networking & hardware maintenance experience.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  Dedicated client support, timely delivery, and transparent workflows.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
