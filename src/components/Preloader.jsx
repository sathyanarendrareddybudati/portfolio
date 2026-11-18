import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/sound';

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 2;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(interval);
        sound.playAccess();
        setTimeout(() => {
          onComplete();
        }, 500);
      } else {
        setCount(current);
        if (current % 15 === 0) sound.playHover();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07070a] text-white select-none overflow-hidden p-4"
    >
      {/* Background radial crimson aura */}
      <div className="absolute w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-red-600/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none animate-pulse-slow" />

      {/* Futuristic Grid & scanline */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-2xl px-4 text-center">
        {/* Large Counter as in Frame 001 - Responsive sizing */}
        <div className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-white font-mono flex items-baseline">
          <span className="text-glow-white">{count}</span>
          <span className="text-red-500 text-3xl sm:text-5xl ml-1 font-bold">%</span>
        </div>

        {/* Progress bar line */}
        <div className="w-52 sm:w-80 h-1 bg-neutral-900 rounded-full my-6 sm:my-8 overflow-hidden border border-red-500/20">
          <motion.div
            className="h-full bg-gradient-to-r from-red-700 via-red-500 to-rose-400 shadow-neon-red"
            style={{ width: `${count}%` }}
          />
        </div>

        {/* The Exact Quote from Frame 001 */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl font-bold tracking-wider sm:tracking-widest uppercase text-slate-200"
        >
          THE DEVELOPER WHO TURNS <span className="text-red-500 text-glow-red">IDEAS</span> INTO <span className="text-red-500 text-glow-red">SOFTWARE</span>
        </motion.h2>

        <p className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] font-mono text-neutral-500 uppercase mt-3 sm:mt-4">
          BUDATI SATYA NARENDRA REDDY // FULL STACK & DEVOPS
        </p>
      </div>

      {/* Corner telemetry decorations */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-neutral-600 tracking-wider hidden sm:block">
        SYS.CORE: ACTIVE // V2.4<br />
        LOC: PARIS, FRANCE (ISEP)
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-neutral-600 tracking-wider hidden sm:block text-right">
        STATUS: 200 OK<br />
        SECURE PROTOCOL [TLS 1.3]
      </div>
    </motion.div>
  );
}
