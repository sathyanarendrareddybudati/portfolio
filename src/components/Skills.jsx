import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Categories matching Frame 016
  const skillCategories = [
    {
      title: 'Full-Stack Development',
      badge: 'FRONTEND & UI',
      icon: Code2,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'Next.js concepts', 'REST API Integration']
    },
    {
      title: 'Backend Engineering',
      badge: 'CORE LOGIC',
      icon: Server,
      skills: ['Python', 'Django & Django REST', 'FastAPI', 'Node.js', 'Nest.js', 'Microservices Architecture']
    },
    {
      title: 'Databases & Search',
      badge: 'STORAGE & INDEX',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis In-Memory', 'Query Optimization']
    },
    {
      title: 'DevOps & Cloud Systems',
      badge: 'INFRASTRUCTURE',
      icon: Cloud,
      skills: ['Docker Containerization', 'Kubernetes Orchestration', 'AWS (Lambda, S3, ECS)', 'CI/CD (GitHub Actions)', 'Celery Workers', 'Linux Admin']
    },
  ];

  // Tech stack icon grid matching Frame 017
  const techStack = [
    { name: 'React', symbol: '⚛️', category: 'Frontend' },
    { name: 'JavaScript', symbol: 'JS', category: 'Language' },
    { name: 'Python', symbol: '🐍', category: 'Language' },
    { name: 'Django', symbol: 'dj', category: 'Framework' },
    { name: 'FastAPI', symbol: '⚡', category: 'Framework' },
    { name: 'Node.js', symbol: '⬢', category: 'Runtime' },
    { name: 'Nest.js', symbol: '🦁', category: 'Backend' },
    { name: 'Docker', symbol: '🐳', category: 'DevOps' },
    { name: 'Kubernetes', symbol: '☸️', category: 'DevOps' },
    { name: 'AWS Cloud', symbol: '☁️', category: 'Cloud' },
    { name: 'PostgreSQL', symbol: '🐘', category: 'Database' },
    { name: 'MySQL', symbol: '🐬', category: 'Database' },
    { name: 'MongoDB', symbol: '🍃', category: 'Database' },
    { name: 'Elasticsearch', symbol: '🔍', category: 'Search' },
    { name: 'Redis', symbol: '🔴', category: 'Cache' },
    { name: 'GitHub CI/CD', symbol: '🐙', category: 'Automation' },
  ];

  return (
    <section id="skills" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[750px] h-[320px] sm:h-[550px] bg-red-600/10 rounded-full blur-[110px] sm:blur-[170px] pointer-events-none" />

      {/* Header matching Frame 016 */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10 px-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          WHAT I WORK WITH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          TECHNICAL SKILLS<span className="text-red-500">.</span>
          <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-2 sm:mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
        <p className="text-neutral-400 text-xs sm:text-base mt-3 sm:mt-4 max-w-xl mx-auto">
          Battle-tested tech stack across frontend engineering, distributed backends, database scaling, and containerized cloud pipelines.
        </p>
      </div>

      {/* Frame 016 Skill Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10 mb-14 sm:mb-20">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 sm:p-8 rounded-2xl cyber-glass border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.08]">
                  {cat.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => sound.playHover()}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.06] hover:border-red-500/50 hover:bg-red-500/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Frame 017: MY TECH STACK Matrix - 3 columns on small screens, 4 on tablet, 8 on desktop */}
      <div className="relative z-10 pt-2 sm:pt-4">
        <div className="text-center mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-3xl font-black font-display tracking-wider text-white uppercase inline-block">
            MY TECH STACK<span className="text-red-500">.</span>
          </h3>
          <p className="text-[10px] sm:text-xs font-mono text-neutral-500 mt-1">
            HOLOGRAPHIC TILES // TAP OR HOVER TO INSPECT
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-2 sm:gap-3">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -4, scale: 1.04 }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredCard(tech.name);
              }}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => sound.playClick()}
              className="p-2.5 sm:p-4 rounded-xl cyber-glass border border-white/[0.08] active:border-red-500/60 hover:border-red-500/60 hover:shadow-neon-red text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-200 relative group overflow-hidden"
            >
              <div className="text-xl sm:text-3xl mb-1 sm:mb-2 font-mono group-hover:scale-110 transition-transform">
                {tech.symbol}
              </div>

              <h4 className="text-[10px] sm:text-xs font-bold font-mono text-white group-hover:text-red-400 transition-colors truncate w-full">
                {tech.name}
              </h4>

              <span className="text-[8px] sm:text-[9px] font-mono text-neutral-500 mt-0.5 uppercase hidden sm:block">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
