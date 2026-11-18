import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Skills from './components/Skills';
import DevOpsConsole from './components/DevOpsConsole';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#07070a] text-slate-100 relative selection:bg-red-500 selection:text-white">
      {/* Preloader from Frame 001 */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Background Particle & Nebula System */}
      <ParticleCanvas />

      {/* Main Portfolio Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Services />
          <Skills />
          <DevOpsConsole />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
