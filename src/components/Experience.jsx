import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('WORK');

  const workExperience = [
    {
      role: 'Full Stack Developer',
      company: 'Zippee',
      location: 'India / Remote',
      period: 'Jul 2023 – Jul 2025',
      type: 'Full-time',
      bullets: [
        'Architected high-performance e-commerce integrations using React, Django, and Node.js, connecting Easyecomm and Loginext with Shopify; reduced order processing time by 35% and supported 10+ active brand integrations.',
        'Engineered real-time webhook pipelines for WhatsApp order notifications, improving customer communication response rate by 60%; configured COD capture webhooks ensuring accurate payouts for 5+ brands.',
        'Developed 15+ RESTful APIs for brand-specific order retrieval, automated transaction creation, and a multi-brand dashboard with role-based data authorization used by 20+ team members.',
        'Managed CI/CD pipelines and containerized services using Docker and Kubernetes, reducing deployment downtime by 50% and ensuring 99.9% service availability.'
      ],
      stack: ['React', 'Django', 'Node.js', 'FastAPI', 'Docker', 'Kubernetes', 'AWS', 'Redis', 'Webhooks']
    },
    {
      role: 'Backend Developer (Internship)',
      company: 'Careers360',
      location: 'India',
      period: 'Dec 2022 – Jun 2023',
      type: 'Internship',
      bullets: [
        'Designed and deployed scalable backend services using Django, FastAPI, and Node.js, optimizing query performance by 30% to support platforms receiving 100K+ monthly visits.',
        'Participated in 2-week agile sprints, leading code reviews and delivering continuous improvement initiatives that reduced the bug backlog by 25% over 6 months.',
        'Location-aware school discovery app with advanced filters supporting 500+ school records; stack: Django REST Framework, MySQL, Elasticsearch reduced search response time by 45%.',
        'RESTful microservice exposing detailed school profiles for 500+ institutions with sub-100ms response times, handling 10K+ daily API requests; stack: Nest.js, MongoDB.'
      ],
      stack: ['Django REST', 'FastAPI', 'Nest.js', 'MySQL', 'MongoDB', 'Elasticsearch', 'Python']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'ISEP Paris',
      location: 'Paris, France',
      period: 'Sep 2025 – 2027',
      status: 'In Progress',
      details: 'Focusing on distributed systems, advanced cloud architectures, microservices, and AI integrations in European engineering environments.'
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Lovely Professional University',
      location: 'Jalandhar, India',
      period: '2019 – 2023',
      status: 'Completed',
      details: 'Comprehensive computer science foundation covering algorithms, data structures, software engineering, databases, and full stack web development.'
    }
  ];

  const certifications = [
    { title: 'OOP with Python', issuer: 'Ebox', year: 'Verified' },
    { title: 'Python for Machine Learning', issuer: 'Great Learning', year: 'Verified' },
    { title: 'Basics of Machine Learning', issuer: 'Great Learning', year: 'Verified' }
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-red-800/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          CAREER & CREDENTIALS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          EXPERIENCE<span className="text-red-500">.</span>
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('WORK');
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
              activeTab === 'WORK'
                ? 'bg-red-500 text-white shadow-neon-red-sm border border-red-400'
                : 'bg-white/[0.04] text-neutral-400 border border-white/[0.08] hover:text-white'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('EDUCATION');
            }}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all ${
              activeTab === 'EDUCATION'
                ? 'bg-red-500 text-white shadow-neon-red-sm border border-red-400'
                : 'bg-white/[0.04] text-neutral-400 border border-white/[0.08] hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>EDUCATION & CERTS</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        {activeTab === 'WORK' ? (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-red-500/30 before:to-transparent">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 sm:pl-16 group"
              >
                {/* Timeline node icon */}
                <div className="absolute left-3.5 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-red-600 border-4 border-[#07070a] shadow-neon-red-sm group-hover:scale-125 transition-transform" />

                <div className="rounded-2xl cyber-glass p-6 sm:p-8 border border-white/[0.08] group-hover:border-red-500/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-red-400 transition-colors">
                        {exp.role}
                      </span>
                      <span className="text-neutral-500 font-mono">@</span>
                      <span className="text-lg font-bold font-display text-red-500">
                        {exp.company}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="text-red-400">{exp.type}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {exp.stack.map((stk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
                      >
                        {stk}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Education Cards */}
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl cyber-glass p-6 sm:p-8 border border-white/[0.08] hover:border-red-500/40 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-mono font-bold">
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-red-400 font-display mb-1">
                    <span>{edu.institution}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-400 text-xs font-mono">{edu.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {edu.details}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Grid */}
            <div className="pt-6">
              <h3 className="text-sm font-mono font-bold tracking-[0.2em] text-red-400 uppercase mb-4 text-center">
                OFFICIAL CERTIFICATIONS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl cyber-glass border border-white/[0.08] text-center hover:border-red-500/30 transition-all"
                  >
                    <Award className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <h4 className="text-sm font-bold text-white mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
