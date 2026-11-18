import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, Send, CornerDownLeft, Play } from 'lucide-react';
import { sound } from '../utils/sound';

export default function DevOpsConsole() {
  const [history, setHistory] = useState([
    { type: 'sys', text: 'SATYA_OS v2.4 (x86_64-apple-darwin)' },
    { type: 'sys', text: 'Type a command or tap a quick chip below.' },
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickCommands = ['deploy', 'docker ps', 'skills', 'projects', 'whoami', 'clear'];

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    sound.playClick();
    const newHistory = [...history, { type: 'user', text: `satya@cloud-ops:~$ ${rawCmd}` }];

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
          text: 'Budati Satya Narendra Reddy // Full Stack Developer & DevOps Engineer\nLocation: Ivry-sur-Seine, France\nEducation: Master of Science in CS @ ISEP Paris'
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
          text: 'EMAIL:    satyareddy0608@gmail.com\nPHONE:    +33 759054637\nLOCATION: Ivry-sur-Seine, France\nLINKEDIN: linkedin.com/in/satyanarendra-reddy-b505aa192/\nGITHUB:   github.com/sathyanarendrareddybudati'
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-hidden">
      <div className="rounded-2xl cyber-glass border border-red-500/30 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0d0d14] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500/80" />
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
            <span className="text-[11px] sm:text-xs font-mono text-neutral-400 ml-1 sm:ml-2 flex items-center gap-1.5 truncate">
              <TerminalIcon className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>satya@cloud-ops: ~</span>
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest hidden sm:inline">
            INTERACTIVE SHELL
          </span>
        </div>

        {/* Quick Command Chips for 1-Tap Execution on Mobile */}
        <div className="px-3 py-2 bg-[#09090f] border-b border-white/[0.05] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
            QUICK:
          </span>
          {quickCommands.map((qCmd) => (
            <button
              key={qCmd}
              type="button"
              onClick={() => executeCommand(qCmd)}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-neutral-300 border border-white/[0.08] active:border-red-500/60 active:bg-red-500/10 active:text-white shrink-0 transition-colors"
            >
              ${qCmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-3 sm:p-6 font-mono text-[11px] sm:text-sm bg-[#08080c]/90 min-h-[200px] sm:min-h-[260px] max-h-[300px] sm:max-h-[360px] overflow-y-auto space-y-1.5 sm:space-y-2">
          {history.map((item, idx) => (
            <div key={idx}>
              {item.type === 'sys' && (
                <div className="text-neutral-500 tracking-wide text-[10px] sm:text-xs">{item.text}</div>
              )}
              {item.type === 'user' && (
                <div className="text-red-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed py-0.5 font-mono text-[10px] sm:text-xs overflow-x-auto">
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 text-[10px] sm:text-xs">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar - text-base prevents iOS zoom bug */}
        <form onSubmit={handleFormSubmit} className="p-2 sm:p-3 bg-[#0a0a10] border-t border-white/[0.08] flex items-center gap-2">
          <span className="text-red-500 font-mono text-xs pl-1 sm:pl-2">❯</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'deploy', 'skills'..."
            className="w-full bg-transparent text-base sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Run command"
            className="p-1.5 sm:p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors shrink-0"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
