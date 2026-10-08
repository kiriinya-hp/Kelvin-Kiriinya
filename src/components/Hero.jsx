import React from 'react';
import { ArrowRight, Mail, Phone, Download, Layers, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Profile Visual — first on mobile, right column on desktop */}
          <div className="order-first lg:order-last lg:col-span-5 flex justify-center items-center relative py-10 sm:py-6 lg:py-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30 animate-[spin_40s_linear_infinite]" />

              {/* Pulsing Gradient Glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-600/30 via-amber-500/20 to-transparent blur-xl" />

              {/* Main Photo Container */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-orange-500 via-amber-600 to-slate-900 shadow-2xl overflow-hidden group">
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Floating Badge 1: Full-Stack — bottom left */}
              <div className="absolute -bottom-8 left-0 sm:bottom-2 sm:left-0 lg:-bottom-2 lg:-left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-2 sm:gap-3 animate-float z-10 max-w-[140px] sm:max-w-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                  <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-white whitespace-nowrap">Full-Stack Dev</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 whitespace-nowrap">React • Node • APIs</p>
                </div>
              </div>

              {/* Floating Badge 2: Networking — top right */}
              <div className="absolute -top-8 right-0 sm:top-2 sm:right-0 lg:-top-2 lg:-right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-2xl p-2.5 sm:p-3 shadow-xl flex items-center gap-2 sm:gap-3 animate-float [animation-delay:1.5s] z-10 max-w-[140px] sm:max-w-none">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-white whitespace-nowrap">Networking & IT</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 whitespace-nowrap">Hardware & Routing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content — below photo on mobile, left column on desktop */}
          <div className="order-last lg:order-first lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 text-xs font-medium text-slate-300 mb-6 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personal.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                {personal.name}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mt-2">
                {personal.role}
              </span>
            </h1>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              Passionate developer and student at{' '}
              <span className="text-slate-200 font-medium">{personal.institution}</span>.{' '}
              I engineer responsive web applications, secure backends, and robust system workflows with a strong focus on clean architecture and intuitive user experience.
            </p>

            {/* Action Buttons — stacked on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-10 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
              </a>

              <a
                href={`mailto:${personal.email}?subject=Resume%20Request%20-%20Kelvin%20Kiriinya`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-orange-400 font-medium text-sm border border-slate-800 hover:border-orange-500/40 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Request CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 w-full justify-center lg:justify-start">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect:</span>
              <a href={personal.github} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all" title="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-blue-400 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-orange-400 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all" title="Email">
                <Mail className="w-4 h-4" />
              </a>
              <a href={`tel:${personal.phone}`}
                className="p-2.5 rounded-lg bg-slate-900/90 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all" title="Call">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
