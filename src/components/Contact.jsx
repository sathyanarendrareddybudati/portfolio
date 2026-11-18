import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Github, Linkedin, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playAccess();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#ef4444', '#dc2626', '#f87171', '#ffffff']
      });
    } catch (err) {
      // ignore
    }

    // Prepare mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:satyareddy0608@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client after slight pause
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const copyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText('satyareddy0608@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header matching Frame 017 & 019 */}
      <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-red-500 uppercase mb-2"
        >
          START A CONVERSATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase inline-block relative"
        >
          CONTACT<span className="text-red-500">.</span>
          <span className="block w-20 h-1 bg-gradient-to-r from-red-600 to-rose-400 mx-auto mt-3 rounded-full shadow-neon-red-sm" />
        </motion.h2>
        <p className="text-neutral-400 text-sm sm:text-base mt-4 max-w-xl mx-auto">
          Looking for a Full Stack Developer, DevOps Engineer, or technical collaborator in Paris or remote? Let's build something exceptional.
        </p>
      </div>

      {/* Frame 019 Contact Card Replica */}
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl cyber-glass p-7 sm:p-12 border border-red-500/30 shadow-2xl relative overflow-hidden"
        >
          {/* Top direct contact pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
            <button
              onClick={copyEmail}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-red-500/50 text-xs sm:text-sm font-mono text-neutral-300 hover:text-white transition-all group"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span>satyareddy0608@gmail.com</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-red-400" />
              )}
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>+33 759054637</span>
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Paris, France</span>
              </span>
            </div>
          </div>

          {/* Form matching Frame 019 */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500 mx-auto flex items-center justify-center text-red-500 mb-4 shadow-neon-red-sm">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-2">
                TRANSMISSION RECEIVED
              </h3>
              <p className="text-neutral-400 text-sm max-w-md mx-auto mb-6">
                Thank you, {formData.name}. Opening your email client to dispatch the message directly to <span className="text-red-400">satyareddy0608@gmail.com</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full text-xs font-mono font-bold btn-cyber-secondary"
              >
                SEND ANOTHER MESSAGE
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* YOUR NAME */}
                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
                  />
                </div>

                {/* YOUR EMAIL */}
                <div>
                  <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans"
                  />
                </div>
              </div>

              {/* MESSAGE & PROJECT SCOPE */}
              <div>
                <label className="block text-xs font-mono font-bold tracking-wider text-neutral-300 uppercase mb-2">
                  MESSAGE & PROJECT SCOPE
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea, timeline and what you need built..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/[0.08] text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-sans resize-none"
                />
              </div>

              {/* Centered Glowing Red Button matching Frame 019 */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  onMouseEnter={() => sound.playHover()}
                  className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wider btn-cyber-primary inline-flex items-center gap-2 shadow-neon-red"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
