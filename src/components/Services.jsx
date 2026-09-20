import React from 'react';
import { GraduationCap, Briefcase, Globe, Cpu, MessageSquare, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Services = () => {
  const { services, personal } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-orange-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <Globe className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0a0e1a]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Services & Solutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Providing tailored development and technical expertise for students, businesses, and creators.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const whatsappLink = `https://wa.me/254797722331?text=${encodeURIComponent(service.whatsappMsg)}`;

            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-all shadow-md shadow-emerald-900/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
