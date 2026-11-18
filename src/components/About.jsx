import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Award, CheckCircle, Terminal, Code2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function About() {
  const technologies = [
    'Python', 'JavaScript', 'Django', 'FastAPI', 
    'React.js', 'Node.js', 'Nest.js', 'Docker', 
    'Kubernetes', 'AWS', 'PostgreSQL', 'Elasticsearch'
  ];

  const focusAreas = [
    { title: 'Full-Stack Development', desc: 'Building responsive React interfaces backed by robust Django & Node.js services.' },
    { title: 'Backend & Microservices', desc: 'Sub-100ms RESTful APIs with Redis caching, PostgreSQL & MongoDB storage.' },
    { title: 'DevOps & Cloud Architecture', desc: 'Docker containerization, Kubernetes pod orchestration & GitHub Actions CI/CD on AWS.' },
    { title: 'Webhook Pipelines & Automation', desc: 'Real-time order notifications, WhatsApp bots, and multi-brand synchronization.' }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header matching Reel Frame 011 */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          ENGINEER • DEVELOPER • BUILDER
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          ABOUT ME<span className="text-red-500">.</span>
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Left Column matching Frame 011 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 rounded-3xl cyber-glass p-7 sm:p-10 border border-white/[0.08] hover:border-red-500/30 transition-all"
        >
          {/* Bio paragraph */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a <span className="text-white font-semibold">Full Stack Developer</span> and{' '}
              <span className="text-red-400 font-semibold">DevOps Engineer</span> with 2+ years of professional experience building high-performance web applications and automated microservice architectures.
            </p>
            <p>
              Currently pursuing my <span className="text-white font-semibold">Master of Science in Computer Science at ISEP Paris (2025 – 2027)</span> and holding a B.Tech in Computer Science from Lovely Professional University.
            </p>
            <p className="text-neutral-400">
              I specialize in turning complex product requirements into resilient, observable, and containerized platforms. From engineering real-time WhatsApp webhook notification pipelines to deploying Kubernetes clusters and Elasticsearch indexing for 100K+ monthly visits, I ensure platforms stay fast, secure, and always available.
            </p>
          </div>

          {/* TECHNOLOGIES Pills matching Frame 011 */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-red-400 uppercase mb-3">
              CORE TECHNOLOGIES
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  onMouseEnter={() => sound.playHover()}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-neutral-200 border border-white/[0.08] hover:border-red-500/50 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* AREAS OF FOCUS matching Frame 011 */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] text-red-400 uppercase mb-4">
              AREAS OF FOCUS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] hover:border-red-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm font-display mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-neon-red-sm" />
                    <span>{area.title}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-normal">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Spoken Languages from resume */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span className="text-red-400 font-bold uppercase tracking-wider">LANGUAGES:</span>
            <span className="text-neutral-300">English (Professional)</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300">Telugu (Native)</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-300">French (Basic / A2 In Progress)</span>
          </div>
        </motion.div>

        {/* Right Column: Suspended Hanging Wire Card (Exact replica of Frame 011) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center pt-8"
        >
          {/* Hanging Wire Mechanism from Frame 011 */}
          <div className="relative w-full max-w-sm flex flex-col items-center">
            
            {/* Top Anchor Ring / Pin */}
            <div className="w-4 h-4 rounded-full border-2 border-red-500 bg-[#07070a] shadow-neon-red-sm z-20" />
            
            {/* Triangle Suspension Wires */}
            <div className="relative w-48 h-14 -mt-2 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 35" fill="none">
                <line x1="50" y1="5" x2="10" y2="35" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.7" />
                <line x1="50" y1="5" x2="90" y2="35" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.7" />
                <circle cx="10" cy="35" r="2" fill="#ef4444" />
                <circle cx="90" cy="35" r="2" fill="#ef4444" />
              </svg>
            </div>

            {/* Suspended Framed Portrait Card */}
            <div className="w-full rounded-2xl cyber-glass p-6 border-2 border-red-500/40 shadow-neon-red relative overflow-hidden bg-gradient-to-b from-[#140b0f] via-[#0d0912] to-[#08080c] group">
              
              {/* Glowing Red Smoke Nebula Behind Photo */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/30 via-red-950/20 to-transparent pointer-events-none" />

              {/* Standing Portrait Avatar Frame */}
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-red-500/40 bg-black/50 flex flex-col items-center justify-center">
                {/* Real Cyberpunk Tech Portrait */}
                <img
                  src="/satya-profile.jpg"
                  alt="Satya Narendra Reddy"
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Laser Scanline */}
                <div className="absolute inset-x-0 h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444] animate-scanline pointer-events-none" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                {/* Bottom Badge Name from Frame 011 */}
                <div className="absolute bottom-3 inset-x-3 py-2 px-3 rounded-lg bg-black/85 border border-red-500/40 text-center backdrop-blur-md">
                  <p className="text-xs font-black font-mono tracking-widest text-white uppercase">
                    SATYA NARENDRA
                  </p>
                  <p className="text-[10px] font-mono text-red-400 tracking-wider">
                    INDEPENDENT DEVELOPER
                  </p>
                </div>
              </div>

              {/* Status footer inside badge */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN TO WORK
                </span>
                <span className="text-red-400 font-bold">PARIS, FR</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
