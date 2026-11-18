import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, FileText, Send } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 bg-[#07070a]/90 backdrop-blur-md border-b border-red-500/10 shadow-lg' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo matching Reel */}
        <a 
          href="#home" 
          onClick={() => sound.playClick()}
          className="group flex items-center gap-1.5 focus:outline-none"
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

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2 rounded-full text-neutral-400 hover:text-red-400 hover:bg-white/[0.05] border border-white/[0.05] transition-colors"
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
            className="px-4 py-1.5 text-xs font-bold tracking-wider rounded-full btn-cyber-primary flex items-center gap-1.5 shadow-neon-red-sm"
          >
            <span>LET'S TALK</span>
            <Send className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="p-2 text-neutral-400 hover:text-red-400"
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-red-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-neutral-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-[#0a0a0f]/95 border-b border-red-500/20 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sound.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-semibold tracking-wider text-neutral-300 hover:text-red-400 py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="/BSatya_Resume.pdf"
                  download="BSatya_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-neutral-200 bg-white/5 rounded-full border border-white/10"
                >
                  <FileText className="w-4 h-4 text-red-400" />
                  DOWNLOAD RESUME
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-center text-xs font-bold tracking-wider rounded-full btn-cyber-primary shadow-neon-red-sm"
                >
                  LET'S TALK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
