import React, { useEffect, useRef } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Touch & Mouse tracker
    const pointer = { x: -1000, y: -1000, radius: width < 640 ? 100 : 140 };

    const handleMouseMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Optimize particle count for mobile screens
    const isMobile = width < 768;
    const particleCount = isMobile ? Math.min(Math.floor((width * height) / 22000), 50) : Math.min(Math.floor((width * height) / 14000), 110);
    const particles = [];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.size = Math.random() * (isMobile ? 2.2 : 2.8) + 0.8;
        this.speedY = -(Math.random() * 0.7 + 0.3);
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.alpha = Math.random() * 0.6 + 0.2;
        this.hue = Math.random() > 0.3 ? 355 : 340; // Crimson / Hot Red
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulse += this.pulseSpeed;

        // Pointer interaction (Mouse or Touch)
        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < pointer.radius) {
          const force = (pointer.radius - dist) / pointer.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2.5;
          this.y -= Math.sin(angle) * force * 2.5;
        }

        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        const currentAlpha = Math.max(0.1, this.alpha + Math.sin(this.pulse) * 0.2);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 95%, 60%, ${currentAlpha})`;
        ctx.shadowBlur = isMobile ? this.size * 2 : this.size * 5;
        ctx.shadowColor = `hsla(${this.hue}, 100%, 60%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting lines
      const maxDist = isMobile ? 65 : 85;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background glow orbs - adjusted sizes for mobile */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[700px] bg-red-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 sm:right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-red-800/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 sm:left-10 w-[260px] sm:w-[450px] h-[260px] sm:h-[450px] bg-rose-900/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />
      
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
