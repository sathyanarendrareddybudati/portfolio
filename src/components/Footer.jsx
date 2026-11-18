import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050508] text-neutral-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Left */}
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold font-mono text-red-500 text-sm">
              S
            </div>
            <span className="text-lg font-bold font-display tracking-wider text-white">
              <span className="text-red-500">S</span>ATYA<span className="text-red-500">.</span>
            </span>
          </a>
          <p className="text-xs font-mono text-neutral-500 mt-2 text-center md:text-left">
            Full Stack Developer & DevOps Engineer // ISEP Paris
          </p>
        </div>

        {/* Social Pill Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sathyanarendrareddybudati"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/satyanarendra-reddy-b505aa192/"
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:satyareddy0608@gmail.com"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Links & Scroll to Top */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a href="#projects" className="hover:text-red-400 transition-colors">PROJECTS</a>
          <a href="#about" className="hover:text-red-400 transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-red-400 transition-colors">SERVICES</a>
          <a href="#contact" className="hover:text-red-400 transition-colors">CONTACT</a>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="p-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white transition-all ml-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-3">
        <div>
          © {new Date().getFullYear()} BUDATI SATYA NARENDRA REDDY. ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-1.5">
          <span>HOSTED WITH CLOUD EXCELLENCE IN PARIS, FRANCE</span>
        </div>
      </div>
    </footer>
  );
}
