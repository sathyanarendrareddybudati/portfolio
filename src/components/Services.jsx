import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, ArrowRight, Code, Database, Cloud, Zap, Globe } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      id: '01',
      title: 'Full-Stack Web Applications',
      tag: 'POPULAR',
      icon: Code,
      rate: 'Starting at €1,500',
      timeline: '2–4 Weeks',
      summary: 'End-to-end production web applications with React frontend, scalable Django/Node backend, and responsive UI.',
      deliverables: [
        'Interactive React / Next.js responsive UI',
        'Secure RESTful or GraphQL API backend (Django/FastAPI/Node)',
        'Database architecture & schema migration (PostgreSQL/MySQL)',
        'Authentication, RBAC, and session management',
        'Docker containerization ready for cloud deployment'
      ]
    },
    {
      id: '02',
      title: 'Cloud DevOps & CI/CD Pipelines',
      tag: 'CORE',
      icon: Cloud,
      rate: 'Starting at €1,200',
      timeline: '1–2 Weeks',
      summary: 'Infrastructure as Code, Dockerization, Kubernetes orchestration, and automated zero-downtime GitHub Actions pipelines.',
      deliverables: [
        'Containerization of multi-service platforms with Docker & Compose',
        'Kubernetes pod orchestration, deployments, and ingress configuration',
        'AWS infrastructure setup (ECS, S3, Lambda, RDS, IAM security)',
        'GitHub Actions automated testing, linting, and deploy workflows',
        'SSL, domain routing, and 99.9% uptime SLA monitoring'
      ]
    },
    {
      id: '03',
      title: 'Backend APIs & High-Speed Databases',
      tag: 'BACKEND',
      icon: Database,
      rate: 'Starting at €1,000',
      timeline: '1–3 Weeks',
      summary: 'Microservices with sub-100ms response times, Elasticsearch indexing, Redis caching, and database query optimization.',
      deliverables: [
        'FastAPI, Django REST Framework, or Nest.js microservices',
        'Elasticsearch cluster setup for sub-second geospatial search',
        'Redis caching layers and in-memory queue management',
        'Query optimization cutting database load by 30-50%',
        'Comprehensive Swagger / OpenAPI documentation'
      ]
    },
    {
      id: '04',
      title: 'Webhook Pipelines & E-Commerce Integrations',
      tag: 'INTEGRATIONS',
      icon: Zap,
      rate: 'Starting at €1,100',
      timeline: '1–2 Weeks',
      summary: 'Real-time webhook pipelines for Shopify, Easyecomm, Loginext, and automated WhatsApp notification bots.',
      deliverables: [
        'Two-way Shopify, Loginext, and Easyecomm order synchronization',
        'Real-time WhatsApp business order status notifications',
        'Cash-on-Delivery (COD) capture and verification webhooks',
        'Celery & Redis asynchronous queue workers with exponential retry',
        'Webhook signature validation and idempotency handling'
      ]
    },
    {
      id: '05',
      title: 'Interactive 3D Web & Cyberpunk Portfolios',
      tag: 'CREATIVE',
      icon: Globe,
      rate: 'Starting at €1,400',
      timeline: '2–3 Weeks',
      summary: 'Bespoke, cinematic websites with Three.js canvas particles, glassmorphism, glowing neons, and custom sound effects.',
      deliverables: [
        'Custom WebGL / Canvas interactive particle & nebula system',
        'Ultra-sleek cyberpunk glassmorphism and neon red accents',
        'Synthesized Web Audio API sound effects (hover/click/access)',
        'Smooth Framer Motion animations and 3D card tilts',
        'Mobile-first responsive optimization and SEO readiness'
      ]
    }
  ];

  return (
    <section id="services" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[320px] sm:h-[500px] bg-red-600/10 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none" />

      {/* Header matching Reel Frame 013 & 015 */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10 px-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          WHAT I DO
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          SERVICES & PRICING<span className="text-red-500">.</span>
          <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-2 sm:mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
        <p className="text-neutral-400 text-xs sm:text-base mt-3 sm:mt-4 max-w-xl mx-auto">
          Tailored engineering solutions for startups and enterprises. Clear timelines, production standards, and transparent delivery.
        </p>
      </div>

      {/* Accordion / List matching Frame 015 */}
      <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 relative z-10">
        {services.map((service, idx) => {
          const isExpanded = expandedIndex === idx;
          const Icon = service.icon;

          return (
            <div
              key={service.id}
              className={`rounded-xl sm:rounded-2xl cyber-glass border transition-all duration-300 overflow-hidden ${
                isExpanded 
                  ? 'border-red-500/50 shadow-neon-red bg-[#100d14]/85' 
                  : 'border-white/[0.08] hover:border-red-500/30'
              }`}
            >
              {/* Row Header */}
              <button
                onClick={() => {
                  sound.playClick();
                  setExpandedIndex(isExpanded ? null : idx);
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 text-left focus:outline-none"
              >
                <div className="flex items-center gap-3 sm:gap-6">
                  {/* Number 01, 02... */}
                  <span className="text-xl sm:text-3xl font-black font-mono text-neutral-500 shrink-0">
                    {service.id}
                  </span>

                  {/* Icon */}
                  <div className={`p-2 sm:p-2.5 rounded-xl border shrink-0 transition-colors ${
                    isExpanded 
                      ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                      : 'bg-white/[0.03] border-white/[0.08] text-neutral-300'
                  }`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h3 className="text-sm sm:text-xl font-bold font-display text-white">
                        {service.title}
                      </h3>
                      {service.tag && (
                        <span className="inline-block text-[8px] sm:text-[10px] font-mono font-bold px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
                          {service.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-xs text-neutral-400 font-mono mt-0.5">
                      {service.timeline}
                    </p>
                  </div>
                </div>

                {/* Right rate badge & Chevron */}
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                  <div className="text-right hidden sm:block font-mono">
                    <span className="text-xs text-neutral-400 block">ESTIMATE</span>
                    <span className="text-sm font-bold text-red-400">{service.rate}</span>
                  </div>

                  <div className={`p-1.5 sm:p-2 rounded-full border border-white/10 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 bg-red-500 text-white border-red-400' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </div>
              </button>

              {/* Expanded details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-5 pt-1 sm:px-6 sm:pb-6 sm:pt-2 border-t border-white/[0.05]"
                  >
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-5">
                      {service.summary}
                    </p>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-red-400 uppercase mb-2.5 sm:mb-3">
                        KEY DELIVERABLES:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {service.deliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-white/10">
                      <div className="font-mono text-xs text-neutral-300">
                        <span className="text-neutral-500">ESTIMATE: </span>
                        <span className="font-bold text-red-400">{service.rate}</span>
                      </div>

                      <a
                        href="#contact"
                        onMouseEnter={() => sound.playHover()}
                        onClick={() => sound.playClick()}
                        className="px-5 py-2.5 rounded-full text-xs font-mono font-bold btn-cyber-primary flex items-center justify-center gap-2 text-center"
                      >
                        <span>DISCUSS THIS SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
