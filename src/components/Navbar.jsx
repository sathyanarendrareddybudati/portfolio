import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, FileText, Send, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'SERVICES', href: '#services' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const toggleSound = () => {
    const newState = sound.toggle();
    setSoundOn(newState);
    if (newState) sound.playClick();
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2.5 sm:py-3 bg-[#07070a]/92 backdrop-blur-xl border-b border-red-500/15 shadow-xl' : 'py-3.5 sm:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching Reel */}
        <a 
          href="#home" 
          onClick={() => sound.playClick()}
          className="group flex items-center gap-2 focus:outline-none py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-950 border border-red-500/50 flex items-center justify-center font-bold font-mono text-white text-base shadow-neon-red-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="text-xl font-bold font-display tracking-wider text-white">
            <span className="text-red-500">S</span>ATYA<span className="text-red-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="px-3.5 py-1 text-xs font-semibold tracking-wider text-neutral-300 hover:text-white hover:text-glow-red transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-500 transition-all duration-200 group-hover:w-3/4 rounded-full shadow-neon-red-sm" />
            </a>
          ))}
        </nav>

        {/* Right Desktop CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2.5 rounded-full text-neutral-400 hover:text-red-400 hover:bg-white/[0.05] border border-white/[0.05] transition-colors"
            title={soundOn ? "Sound Effects ON" : "Sound Effects MUTED"}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-red-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Resume Download */}
          <a
            href="/BSatya_Resume.pdf"
            download="BSatya_Resume.pdf"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-300 hover:text-white bg-white/[0.04] border border-white/[0.1] rounded-full hover:border-red-500/40 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-red-500" />
            <span>RESUME</span>
          </a>

          {/* Let's Talk Glowing Pill CTA (Exact match to reel) */}
          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="px-4 py-2 text-xs font-bold tracking-wider rounded-full btn-cyber-primary flex items-center gap-1.5 shadow-neon-red-sm"
          >
            <span>LET'S TALK</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Control Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Sound Toggle on Mobile */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 active:text-red-400 active:scale-95 transition-all"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-red-400" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-neutral-200 active:scale-95 transition-all focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Fullscreen sleek cyber modal) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden fixed inset-x-0 top-[57px] bottom-0 bg-[#07070a]/98 backdrop-blur-2xl border-b border-red-500/20 z-50 overflow-y-auto flex flex-col justify-between p-6"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[10px] font-mono text-neutral-500 tracking-[0.25em] uppercase mb-2">
                NAVIGATION
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-3.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm font-bold tracking-wider text-neutral-200 active:bg-red-500/15 active:border-red-500/40 active:text-white transition-all"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-neon-red-sm" />
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </motion.a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 pb-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/BSatya_Resume.pdf"
                download="BSatya_Resume.pdf"
                onClick={() => sound.playClick()}
                className="flex items-center justify-center gap-2 py-3 px-4 text-xs font-mono font-bold text-neutral-200 bg-white/5 rounded-xl border border-white/10 active:bg-white/10 transition-all"
              >
                <FileText className="w-4 h-4 text-red-500" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className="py-3.5 px-4 text-center text-xs font-bold tracking-wider rounded-xl btn-cyber-primary shadow-neon-red flex items-center justify-center gap-2"
              >
                <span>LET'S TALK</span>
                <Send className="w-3.5 h-3.5" />
              </a>

              <div className="text-center pt-2 text-[10px] font-mono text-neutral-500">
                PARIS, FRANCE // SATYA NARENDRA
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
