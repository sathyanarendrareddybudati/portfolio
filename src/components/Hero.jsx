import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, ShieldCheck, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Only apply 3D tilt on desktop screens
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const stats = [
    { value: '2+', label: 'YEARS PROFESSIONAL EXP', sub: 'Production Engineering' },
    { value: '10+', label: 'ACTIVE BRAND INTEGRATIONS', sub: 'Shopify, Easyecomm & Loginext' },
    { value: '99.9%', label: 'SERVICE AVAILABILITY', sub: 'Docker & Kubernetes CI/CD' },
    { value: '100K+', label: 'MONTHLY PLATFORM VISITS', sub: 'High-Throughput APIs' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Main Hero Card Container matching Reel Frame 003 */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl sm:rounded-3xl cyber-glass p-5 sm:p-10 md:p-12 border border-red-500/25 overflow-hidden shadow-2xl"
      >
        {/* Subtle Ambient Red Glow inside hero */}
        <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 sm:w-96 h-64 sm:h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

        {/* Diagonal Futuristic Laser Accent line (from the video!) */}
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent pointer-events-none hidden lg:block transform -skew-x-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Red Badge as in reel */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-6 self-start shadow-neon-red-sm"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
              <span className="truncate">FULL-STACK DEVELOPER • DEVOPS ENGINEER</span>
            </motion.div>

            {/* Big Headline ASWIN -> SATYA NARENDRA */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-display leading-[1.08] mb-2 sm:mb-3"
            >
              SATYA <span className="text-red-500 text-glow-red">NARENDRA</span>
            </motion.h1>

            {/* Subtitle / Role Tag matching reel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-base font-bold tracking-wider sm:tracking-widest text-neutral-300 font-mono mb-4"
            >
              <span>FULL-STACK DEVELOPER</span>
              <span className="text-red-500 font-extrabold">/</span>
              <span className="text-red-400">DEVOPS ARCHITECT</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8"
            >
              Engineering high-performance web applications with React, Django, FastAPI & Node.js. 
              Master of Science in Computer Science candidate at <span className="text-white font-semibold">ISEP Paris</span>, 
              orchestrating resilient cloud infrastructure on <span className="text-white font-semibold">AWS, Docker & Kubernetes</span>.
            </motion.p>

            {/* CTA Buttons matching Reel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="#projects"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-6 py-3.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider btn-cyber-primary flex items-center justify-center gap-2 group text-center"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-6 py-3.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider btn-cyber-secondary flex items-center justify-center gap-2 text-center"
              >
                <span>GET IN TOUCH</span>
              </a>
            </motion.div>

            {/* Metadata Pills: Location & Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-xs font-mono text-neutral-400 pt-4 border-t border-white/[0.08]"
            >
              <div className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span>Ivry-sur-Seine, France</span>
              </div>
              <div className="hidden sm:block text-neutral-600">|</div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/sathyanarendrareddybudati"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors flex items-center gap-1 py-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/satyanarendra-reddy-b505aa192/"
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors flex items-center gap-1 py-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:satyareddy0608@gmail.com"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="hover:text-red-400 transition-colors flex items-center gap-1 py-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Visual matching Reel Segmented Faceted Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[300px] sm:max-w-md aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-red-500/40 via-red-950/20 to-neutral-900 border border-red-500/40 shadow-neon-red group"
            >
              {/* Inner card container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0c0c14] flex flex-col justify-between p-4 sm:p-6">
                
                {/* Red Nebula Smoke Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600/35 via-red-950/40 to-[#08080c] pointer-events-none" />
                <div className="absolute inset-0 opacity-20 cyber-grid-bg pointer-events-none" />

                {/* Diagonal Futuristic Segments Lines (Frame 003 visual replica) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Laser line 1 */}
                  <div className="absolute -top-12 left-1/4 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-red-500 to-transparent transform rotate-[35deg] opacity-70 group-hover:opacity-100 transition-opacity" />
                  {/* Laser line 2 */}
                  <div className="absolute top-1/3 -left-12 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent transform -rotate-[25deg] opacity-60" />
                </div>

                {/* Top Telemetry / Status Header */}
                <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-xs font-mono text-red-400">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/60 border border-red-500/30">
                    <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-red-500" />
                    <span>SYS.VERIFIED</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/60 border border-white/10 text-neutral-400">
                    <Cpu className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-neutral-300" />
                    <span>ISEP // PARIS</span>
                  </div>
                </div>

                {/* Center Developer Avatar / Holographic Portrait */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center w-full">
                  <div className="relative w-44 h-56 sm:w-64 sm:h-84 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-neon-red-sm group-hover:shadow-neon-red transition-all">
                    {/* Real generated Cyberpunk Portrait */}
                    <img
                      src="/satya-hero.jpg"
                      alt="Budati Satya Narendra Reddy"
                      className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Scanline line moving over avatar */}
                    <div className="absolute inset-x-0 h-1 bg-red-500/60 shadow-[0_0_10px_#ef4444] animate-scanline pointer-events-none" />

                    {/* Subtle bottom gradient shadow */}
                    <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                    {/* Name tag pill overlayed at bottom */}
                    <div className="absolute bottom-2 inset-x-2 py-1 px-2 sm:py-1.5 sm:px-3 rounded-lg sm:rounded-xl bg-black/85 border border-red-500/40 text-center backdrop-blur-md shadow-neon-red-sm">
                      <p className="text-[10px] sm:text-xs font-bold font-mono tracking-wider sm:tracking-widest text-white uppercase truncate">
                        B. SATYA NARENDRA REDDY
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-red-400 font-mono truncate">
                        FULL STACK & CLOUD ARCHITECT
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Skill Badges */}
                <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-[8px] sm:text-[10px] font-mono">
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/60 border border-white/10 text-neutral-300 truncate">
                    REACT & DJANGO
                  </div>
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/60 border border-red-500/40 text-red-400 truncate">
                    DOCKER & K8S
                  </div>
                  <div className="p-1 sm:p-1.5 rounded-lg bg-black/60 border border-white/10 text-neutral-300 truncate">
                    AWS CLOUD
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Frame 006 Stats Bar directly beneath Hero - Responsive Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-6 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4"
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl cyber-glass border border-white/[0.08] hover:border-red-500/40 transition-all text-center group"
          >
            <div className="text-2xl sm:text-4xl md:text-5xl font-black font-mono text-white text-glow-white group-hover:text-red-500 group-hover:text-glow-red transition-colors">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-slate-300 mt-1 sm:mt-2 leading-tight">
              {stat.label}
            </div>
            <div className="text-[9px] sm:text-[11px] text-neutral-500 font-mono mt-0.5 line-clamp-1">
              {stat.sub}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
