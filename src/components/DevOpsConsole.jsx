import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DevOpsConsole() {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'SATYA_OS v2.4 (x86_64-apple-darwin)' },
    { type: 'sys', text: 'Type "help" to list available commands or "deploy" for live container orchestration.' },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    const newHistory = [...history, { type: 'user', text: `satya@cloud-ops:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • whoami     - Display developer bio & location
  • skills     - List full tech stack & proficiencies
  • projects   - Show active projects & metrics
  • exp        - Show professional career history
  • docker ps  - List running container services
  • deploy     - Trigger simulated CI/CD pipeline
  • contact    - Display email & phone details
  • resume     - Download official PDF resume
  • clear      - Clear terminal screen`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Budati Satya Narendra Reddy // Full Stack Developer & DevOps Engineer\nLocation: Paris, France\nEducation: Master of Science in CS @ ISEP Paris'
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'FRONTEND: React.js, JavaScript, Tailwind, HTML5/CSS3\nBACKEND:  Python, Django, FastAPI, Node.js, Nest.js\nCLOUD:    Docker, Kubernetes, AWS (Lambda, S3, ECS), CI/CD\nDATABASE: PostgreSQL, MySQL, MongoDB, Elasticsearch, Redis'
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: '01. E-Commerce Integration (Zippee) - -35% processing time, 10+ brands\n02. WhatsApp Webhook Pipeline - +60% response rate, 5+ brands COD\n03. School Discovery Engine (Careers360) - Elasticsearch, -45% latency\n04. High-Throughput Microservice - Sub-100ms response, 10K+ req/day'
        });
        break;

      case 'exp':
        newHistory.push({
          type: 'output',
          text: '• Full Stack Developer @ Zippee (Jul 2023 – Jul 2025)\n• Backend Developer Intern @ Careers360 (Dec 2022 – Jun 2023)'
        });
        break;

      case 'docker ps':
        newHistory.push({
          type: 'output',
          text: `CONTAINER ID   IMAGE                 STATUS         PORTS
a81f87caf8ee   zippee-webhook-srv    Up 42 days     0.0.0.0:8000->8000/tcp
d94c921fe12a   careers360-elastic    Up 180 days    0.0.0.0:9200->9200/tcp
e781192ab30c   redis-cache:7.0       Up 42 days     0.0.0.0:6379->6379/tcp
c559812401ba   react-portal-ui:v2    Up 14 days     0.0.0.0:3000->80/tcp`
        });
        break;

      case 'deploy':
        newHistory.push({
          type: 'output',
          text: `[GITHUB ACTIONS] Triggered deploy to production...
> Running linter & pytest suite... [PASSED 48/48]
> Building Docker container: ghcr.io/satya/app:latest...
> Pushing image to AWS ECR... [SUCCESS]
> Rolling update on Kubernetes cluster (prod-k8s-paris)...
> Pods healthy: 6/6 | Service Availability: 99.9%
DEVOPS DEPLOYMENT SUCCESSFUL IN 1.84s!`
        });
        sound.playAccess();
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'EMAIL:    satyareddy0608@gmail.com\nPHONE:    +33 759054637\nLOCATION: Paris, France\nLINKEDIN: linkedin.com/in/satyanarendra-reddy-b505aa192/\nGITHUB:   github.com/sathyanarendrareddybudati'
        });
        break;

      case 'resume':
        window.open('/BSatya_Resume.pdf', '_blank');
        newHistory.push({
          type: 'output',
          text: 'Downloading official resume PDF: BSatya_Resume.pdf ...'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" to see available commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="rounded-2xl cyber-glass border border-red-500/30 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-[#0d0d14] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs font-mono text-neutral-400 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-red-500" />
              <span>satya@cloud-ops: ~</span>
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            INTERACTIVE SHELL
          </span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm bg-[#08080c]/90 min-h-[260px] max-h-[360px] overflow-y-auto space-y-2">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'sys' && (
                <div className="text-neutral-500 tracking-wide">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="text-red-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed py-1 font-mono text-xs">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#0a0a10] border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-red-500 font-mono text-xs pl-2">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'docker ps', 'deploy', or 'projects'..."
            className="w-full bg-transparent text-xs sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
