import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    sound.playClick();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050508] text-neutral-400 py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Brand Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center font-bold font-mono text-red-500 text-sm">
              S
            </div>
            <span className="text-lg font-bold font-display tracking-wider text-white">
              <span className="text-red-500">S</span>ATYA<span className="text-red-500">.</span>
            </span>
          </a>
          <p className="text-[11px] sm:text-xs font-mono text-neutral-500 mt-2">
            Full Stack Developer & DevOps Engineer // ISEP Paris
          </p>
        </div>

        {/* Social Pill Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sathyanarendrareddybudati"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 active:scale-95 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/satyanarendra-reddy-b505aa192/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 active:scale-95 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:satyareddy0608@gmail.com"
            aria-label="Send Email"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-3 rounded-full bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 active:scale-95 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Links & Scroll to Top */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono">
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-red-400 py-1 transition-colors">PROJECTS</a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-red-400 py-1 transition-colors">ABOUT</a>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-red-400 py-1 transition-colors">SERVICES</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-red-400 py-1 transition-colors">CONTACT</a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500 hover:text-white active:scale-95 transition-all"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500 gap-2 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} BUDATI SATYA NARENDRA REDDY. ALL RIGHTS RESERVED.
        </div>
        <div>
          PARIS, FRANCE // HIGH-PERFORMANCE WEB & DEVOPS
        </div>
      </div>
    </footer>
  );
}
