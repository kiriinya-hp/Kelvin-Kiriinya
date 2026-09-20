import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#070a12]/80 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-xl shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white group-hover:text-orange-400 transition-colors tracking-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg hover:from-orange-600 hover:to-amber-700 transition-all shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={portfolioData.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xs font-semibold text-white bg-orange-500/90 rounded-lg"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/60"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 mt-2 flex flex-col gap-2">
              <a
                href={portfolioData.personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
