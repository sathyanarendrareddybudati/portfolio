import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Cloud, Terminal, Cpu, Layers, GitBranch, 
  Workflow, Shield, Boxes, Gauge 
} from 'lucide-react';
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
    { name: 'React', symbol: '⚛️', category: 'Frontend', level: 'Advanced' },
    { name: 'JavaScript', symbol: 'JS', category: 'Language', level: 'Advanced' },
    { name: 'Python', symbol: '🐍', category: 'Language', level: 'Expert' },
    { name: 'Django', symbol: 'dj', category: 'Framework', level: 'Advanced' },
    { name: 'FastAPI', symbol: '⚡', category: 'Framework', level: 'Advanced' },
    { name: 'Node.js', symbol: '⬢', category: 'Runtime', level: 'Advanced' },
    { name: 'Nest.js', symbol: '🦁', category: 'Backend', level: 'Proficient' },
    { name: 'Docker', symbol: '🐳', category: 'DevOps', level: 'Advanced' },
    { name: 'Kubernetes', symbol: '☸️', category: 'DevOps', level: 'Proficient' },
    { name: 'AWS Cloud', symbol: '☁️', category: 'Cloud', level: 'Proficient' },
    { name: 'PostgreSQL', symbol: '🐘', category: 'Database', level: 'Advanced' },
    { name: 'MySQL', symbol: '🐬', category: 'Database', level: 'Advanced' },
    { name: 'MongoDB', symbol: '🍃', category: 'Database', level: 'Proficient' },
    { name: 'Elasticsearch', symbol: '🔍', category: 'Search', level: 'Proficient' },
    { name: 'Redis', symbol: '🔴', category: 'Cache', level: 'Advanced' },
    { name: 'GitHub CI/CD', symbol: '🐙', category: 'Automation', level: 'Advanced' },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header matching Frame 016 */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          WHAT I WORK WITH
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          TECHNICAL SKILLS<span className="text-red-500">.</span>
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          Battle-tested tech stack across frontend engineering, distributed backends, database scaling, and containerized cloud pipelines.
        </p>
      </div>

      {/* Frame 016 Skill Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-20">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl cyber-glass border border-white/[0.08] hover:border-red-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/[0.04] text-neutral-400 border border-white/[0.08]">
                  {cat.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    onMouseEnter={() => sound.playHover()}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.06] hover:border-red-500/50 hover:bg-red-500/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Frame 017: MY TECH STACK Matrix */}
      <div className="relative z-10 pt-4">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-black font-display tracking-wider text-white uppercase inline-block">
            MY TECH STACK<span className="text-red-500">.</span>
          </h3>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            INTERACTIVE HOLOGRAPHIC TILES // HOVER TO INSPECT
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.05 }}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredCard(tech.name);
              }}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => sound.playClick()}
              className="p-4 rounded-xl cyber-glass border border-white/[0.08] hover:border-red-500/60 hover:shadow-neon-red text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-200 relative group overflow-hidden"
            >
              {/* Subtle top red glow line on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-2xl sm:text-3xl mb-2 font-mono group-hover:scale-110 transition-transform">
                {tech.symbol}
              </div>

              <h4 className="text-xs font-bold font-mono text-white group-hover:text-red-400 transition-colors">
                {tech.name}
              </h4>

              <span className="text-[9px] font-mono text-neutral-500 mt-1 uppercase">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
