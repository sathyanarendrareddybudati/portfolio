import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Zap, X, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Projects() {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'FULL-STACK', 'DEVOPS & CLOUD', 'BACKEND & APIS'];

  const projects = [
    {
      id: '01',
      title: 'E-Commerce Multi-Brand Integration Platform',
      category: 'FULL-STACK',
      company: 'Zippee',
      period: 'Jul 2023 – Jul 2025',
      summary: 'Connected Shopify, Easyecomm, and Loginext into an automated synchronization engine serving 10+ major brands.',
      impact: 'Reduced order processing turnaround by 35% with 99.9% service availability.',
      description: 'Architected high-performance e-commerce integrations using React, Django, and Node.js. Built real-time inventory and catalog syncing, webhook-triggered state machines, and automated discrepancy resolvers.',
      stack: ['React', 'Django', 'Node.js', 'Shopify APIs', 'AWS', 'Docker'],
      metrics: [
        { label: 'Order Processing', value: '-35%' },
        { label: 'Active Brands', value: '10+' },
        { label: 'Daily Orders', value: '25K+' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: true,
    },
    {
      id: '02',
      title: 'Real-Time WhatsApp & Webhook Pipeline',
      category: 'BACKEND & APIS',
      company: 'Zippee',
      period: '2023 – 2024',
      summary: 'Automated order status delivery & Cash-on-Delivery (COD) capture pipelines using high-speed webhooks.',
      impact: 'Boosted customer communication response rates by 60% and secured zero-loss COD payouts for 5+ brands.',
      description: 'Engineered resilient webhook consumers with Node.js, Celery, and Redis. Features idempotency checks, automated retry queues with exponential backoff, and direct WhatsApp Business API webhooks.',
      stack: ['Node.js', 'FastAPI', 'Redis', 'Celery', 'Docker', 'Webhooks'],
      metrics: [
        { label: 'Response Rate', value: '+60%' },
        { label: 'COD Brands', value: '5+' },
        { label: 'Webhook Latency', value: '<80ms' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: true,
    },
    {
      id: '03',
      title: 'Location-Aware School Discovery Engine',
      category: 'BACKEND & APIS',
      company: 'Careers360',
      period: 'Dec 2022 – Jun 2023',
      summary: 'Geospatial search and filtering platform indexing 500+ educational institutions with faceted queries.',
      impact: 'Integrated Elasticsearch clusters to accelerate query response times by 45% for 100K+ monthly users.',
      description: 'Designed and deployed scalable backend services using Django REST Framework and MySQL. Engineered geo-radius boundary filters, faceted school ranking algorithms, and cached read replicas.',
      stack: ['Django REST', 'MySQL', 'Elasticsearch', 'Python', 'Redis'],
      metrics: [
        { label: 'Search Latency', value: '-45%' },
        { label: 'Institutions', value: '500+' },
        { label: 'Monthly Traffic', value: '100K+' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: true,
    },
    {
      id: '04',
      title: 'High-Throughput Institutional Microservice',
      category: 'BACKEND & APIS',
      company: 'Careers360',
      period: '2023',
      summary: 'Lightweight distributed microservice handling 10,000+ daily API requests with ultra-low latency.',
      impact: 'Sub-100ms profile response times with zero dropped requests during peak university admissions cycles.',
      description: 'Architected microservice exposing detailed school profiles using Nest.js and MongoDB. Configured horizontal pod autoscaling, rate-limiting, and automated code review pipelines reducing bug backlog by 25%.',
      stack: ['Nest.js', 'MongoDB', 'Docker', 'Kubernetes', 'TypeScript'],
      metrics: [
        { label: 'API Response Time', value: '<100ms' },
        { label: 'Daily Requests', value: '10K+' },
        { label: 'Bug Backlog Cut', value: '-25%' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: false,
    },
    {
      id: '05',
      title: 'Multi-Brand Merchant Dashboard & RBAC',
      category: 'FULL-STACK',
      company: 'Zippee',
      period: '2024',
      summary: 'Enterprise operator portal featuring granular role-based access control and live order telemetry.',
      impact: 'Adopted by 20+ operations team members for brand-specific order retrieval and transaction audits.',
      description: 'Developed 15+ RESTful APIs and an administrative UI in React.js and Tailwind. Implemented JWT authentication, role-based authorization scopes, and instant financial transaction ledger views.',
      stack: ['React.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      metrics: [
        { label: 'APIs Developed', value: '15+' },
        { label: 'Internal Users', value: '20+' },
        { label: 'Audit Trail', value: '100%' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: false,
    },
    {
      id: '06',
      title: 'Cloud-Native Infrastructure & CI/CD Pipeline',
      category: 'DEVOPS & CLOUD',
      company: 'Zippee & Cloud Ops',
      period: '2023 – 2025',
      summary: 'Automated container orchestration and zero-downtime deployment pipelines across AWS.',
      impact: 'Cut deployment downtime by 50% while sustaining 99.9% service availability.',
      description: 'Containerized all backend and frontend services using Docker. Orchestrated container pods on Kubernetes and AWS ECS, configured AWS Lambda serverless handlers, S3 buckets, and GitHub Actions CI/CD workflows.',
      stack: ['Docker', 'Kubernetes', 'AWS (Lambda, S3, ECS)', 'GitHub Actions', 'Linux'],
      metrics: [
        { label: 'Downtime Cut', value: '-50%' },
        { label: 'Service Uptime', value: '99.9%' },
        { label: 'Deploy Automation', value: '100%' },
      ],
      github: 'https://github.com/sathyanarendrareddybudati',
      featured: false,
    },
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[800px] h-[340px] sm:h-[500px] bg-red-600/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />

      {/* Header matching Reel Frame 007 */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10 px-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          FEATURED WORKS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          PROJECTS<span className="text-red-500">.</span>
          {/* Glowing Red Underline from Frame 007 */}
          <span className="block w-16 sm:w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-2 sm:mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
        <p className="text-neutral-400 text-xs sm:text-base mt-3 sm:mt-4 max-w-xl mx-auto">
          Production systems, e-commerce integrations, scalable microservices, and cloud infrastructure engineered for resilience and speed.
        </p>

        {/* Filter Badges with horizontal swipe support */}
        <div className="flex items-center sm:justify-center gap-2 mt-6 sm:mt-8 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilter(cat);
              }}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-mono font-bold tracking-wider rounded-full transition-all duration-200 shrink-0 whitespace-nowrap ${
                filter === cat
                  ? 'bg-red-500 text-white shadow-neon-red-sm border border-red-400'
                  : 'bg-white/[0.04] text-neutral-400 border border-white/[0.08] active:border-red-500/40 active:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid matching Frame 008, 009 & 010 */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => sound.playHover()}
              onClick={() => {
                sound.playClick();
                setSelectedProject(project);
              }}
              className="cursor-pointer group relative rounded-2xl cyber-glass p-5 sm:p-7 border border-white/[0.08] hover:border-red-500/50 hover:shadow-neon-red transition-all duration-300 flex flex-col justify-between overflow-hidden active:scale-[0.99]"
            >
              {/* Subtle top red laser accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/0 group-hover:via-red-500 to-transparent transition-all duration-500" />

              <div>
                {/* Big Holographic Number as in Reel (01, 02, 03...) */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-5xl font-black font-mono text-neutral-800 group-hover:text-red-500/80 transition-colors">
                    {project.id}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
                      {project.company}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-400 transition-colors mb-2 line-clamp-2">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-neutral-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4 sm:mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Key Metric highlight */}
                <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/[0.05] mb-4 sm:mb-5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-400 text-[11px] sm:text-xs">{project.metrics[0].label}:</span>
                    <span className="font-bold text-red-400 text-glow-red text-xs sm:text-sm">{project.metrics[0].value}</span>
                  </div>
                </div>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-5">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-red-500/10 text-red-400">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card footer CTA */}
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/[0.06] text-[11px] sm:text-xs font-mono text-neutral-400 group-hover:text-red-400">
                  <span>VIEW SPECIFICATION</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Dialog for Deep Project Specs (Fully mobile responsive) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0c0c14] border border-red-500/40 rounded-2xl sm:rounded-3xl p-5 pt-12 sm:p-8 shadow-2xl z-10 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button - Larger touch target */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2.5 rounded-full text-neutral-400 hover:text-white bg-white/5 active:bg-white/10"
              >
                <X className="w-5 h-5 text-red-400" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/30 text-[10px] sm:text-xs">
                  {selectedProject.company}
                </span>
                <span>•</span>
                <span className="text-[10px] sm:text-xs">{selectedProject.period}</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-extrabold font-display text-white mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed mb-5">
                {selectedProject.description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 my-4 sm:my-6">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 sm:p-3.5 rounded-xl bg-black/60 border border-red-500/20 text-center">
                    <div className="text-base sm:text-2xl font-black font-mono text-red-500 text-glow-red truncate">
                      {m.value}
                    </div>
                    <div className="text-[9px] sm:text-xs text-neutral-400 font-mono mt-0.5 line-clamp-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack Used */}
              <div className="mb-5 sm:mb-6">
                <h4 className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2">
                  TECHNOLOGY STACK
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono bg-white/[0.04] text-neutral-200 border border-white/[0.1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-full text-xs font-mono font-bold btn-cyber-secondary text-center"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW GITHUB REPO</span>
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-xl sm:rounded-full text-xs font-mono font-bold btn-cyber-primary text-center"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
