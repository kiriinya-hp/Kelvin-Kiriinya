import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Copy, Check, Send, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Open default mail client with pre-filled content
    const mailtoUri = `mailto:${personal.email}?subject=${encodeURIComponent(formState.subject || `Inquiry from ${formState.name}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.location.href = mailtoUri;
    setStatusMessage('Opening your email client...');
  };

  return (
    <section id="contact" className="py-24 bg-[#070a12] relative">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            Have a project in mind, need full-stack development, or want to discuss an opportunity? Reach out directly!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direct Contact Channels Card */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-8 sm:p-10 flex flex-col justify-between border border-slate-800 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-slate-400 text-sm mb-8">
                I am usually responsive within a few hours on WhatsApp or via direct phone call.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Button */}
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 hover:border-emerald-500/50 hover:bg-emerald-500/20 transition-all text-white group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center text-white shadow-md">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Fastest Reply</p>
                      <p className="text-sm font-bold text-white">Chat on WhatsApp</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors">Launch ↗</span>
                </a>

                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <p className="text-xs text-slate-400 font-medium">Email Address</p>
                      <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-orange-400 truncate block">
                        {personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-medium">Phone / Mobile</p>
                      <a href={`tel:${personal.phone}`} className="text-sm font-semibold text-white hover:text-blue-400 block truncate">
                        {personal.phone}
                      </a>
                      <span className="text-xs text-slate-400">{personal.internationalPhone}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white shrink-0 ml-2"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location Pill */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>Based in <strong className="text-slate-300">{personal.location}</strong>. Available worldwide remotely.</span>
            </div>
          </div>

          {/* Direct Message Form Card */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Message
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Fill out this form to quickly send an inquiry directly to my inbox.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Subject / Service Needed
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Web App / School Project"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, and requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold text-sm shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry via Email</span>
              </button>

              {statusMessage && (
                <p className="text-xs text-center text-orange-400 font-medium mt-2">
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
