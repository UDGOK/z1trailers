'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type Particle = {
  id: string;
  type: 'pos' | 'neg';
  startX: number;
  startY: number;
  scale: number;
  opacity: number;
  duration: number;
};

export default function BatteryBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    
    // Positive ions
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: `pos-${i}`,
        type: 'pos',
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 10 + 10,
      });
    }

    // Negative ions
    for (let i = 0; i < 12; i++) {
      newParticles.push({
        id: `neg-${i}`,
        type: 'neg',
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        duration: Math.random() * 12 + 12,
      });
    }
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-brand-navy">
      {/* Tech Grid */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
      
      {/* Dark overlay for contrast - placed below particles now */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/80 to-brand-navy mix-blend-multiply z-0" />

      {/* Render Particles Only After Client Mount to Fix Hydration Mismatch */}
      {particles.map((p) => {
        if (p.type === 'pos') {
          return (
            <motion.div
              key={p.id}
              className="absolute text-brand-teal font-mono font-bold text-5xl select-none z-10"
              initial={{ x: p.startX, y: p.startY, opacity: p.opacity, scale: p.scale }}
              animate={{
                y: [p.startY, p.startY - 200 - Math.random() * 100],
                opacity: [p.opacity, p.opacity + 0.3, 0],
                scale: [p.scale, p.scale + 0.2],
              }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
              style={{ textShadow: '0 0 10px rgba(27,154,170,0.5)' }}
            >
              +
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key={p.id}
              className="absolute text-brand-steel font-mono font-bold text-6xl select-none z-10"
              initial={{ x: p.startX, y: p.startY, opacity: p.opacity, scale: p.scale }}
              animate={{
                y: [p.startY, p.startY + 200 + Math.random() * 100],
                opacity: [p.opacity, p.opacity + 0.2, 0],
              }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
            >
              -
            </motion.div>
          );
        }
      })}

      {/* Pulsing Energy Cores */}
      <motion.div 
         className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] z-0"
         animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
         className="absolute top-1/2 -right-64 w-[600px] h-[600px] bg-brand-steel/10 rounded-full blur-[150px] z-0"
         animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
