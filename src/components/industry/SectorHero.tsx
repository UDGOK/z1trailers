"use client";

import { motion } from "framer-motion";
import { Crosshair, ShieldAlert, Target, Activity, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorHeroProps {
  name: string;
  desc: string;
  img: string;
  threatLevel: "ELEVATED" | "CRITICAL" | "HIGH";
  stats: { label: string; value: string; }[];
}

export default function SectorHero({ name, desc, img, threatLevel, stats }: SectorHeroProps) {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-end justify-start overflow-hidden bg-brand-navy">
      {/* Background Image with Tactical Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent z-10" />
        <img src={img} alt={name} className="w-full h-full object-cover scale-105 contrast-125 grayscale-[30%]" />
        
        {/* Animated Scan Line */}
        <motion.div 
          className="absolute inset-x-0 h-[2px] bg-brand-teal/40 z-20 pointer-events-none"
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />

        {/* Tactical Grid */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] z-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 relative z-30 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* HUD Data Panel (Left) */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="px-3 py-1 bg-brand-teal text-brand-navy font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <Activity className="w-3 h-3 animate-pulse" /> TARGET_SECURED // {threatLevel}
              </div>
              <div className="font-mono text-[10px] text-brand-steel tracking-widest uppercase">GPS: [ 32.7767° N, 96.7970° W ]</div>
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
              {name} <br/><span className="text-white/20">Defense Grid.</span>
            </h1>
            <p className="max-w-xl font-mono text-xs md:text-sm tracking-widest leading-loose text-white/70 uppercase">
              {desc}
            </p>
          </motion.div>
        </div>

        {/* Telemetry HUD (Right) */}
        <div className="lg:col-span-5 flex flex-col items-end space-y-4">
          <div className="w-full max-w-sm bg-black/40 backdrop-blur-2xl border border-white/10 p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-teal m-2" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-teal m-2" />
            
            <p className="font-mono text-[10px] text-brand-teal mb-6 tracking-widest uppercase font-black flex items-center gap-2">
              <Crosshair className="w-4 h-4" /> Tactical_Telemetry // LIVE
            </p>

            <div className="space-y-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                    <span className="font-display font-black text-lg text-white group-hover:text-brand-teal transition-colors">{stat.value}</span>
                  </div>
                  <div className="h-[2px] bg-white/5 relative overflow-hidden">
                    <motion.div 
                      className="absolute inset-y-0 left-0 bg-brand-teal"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 2, delay: idx * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
               <div className="flex items-center gap-2 font-mono text-[8px] text-brand-steel tracking-widest uppercase">
                  <Zap className="w-3 h-3 text-brand-gold animate-pulse" /> Power: LiFePO4 // OK
               </div>
               <div className="font-mono text-[8px] text-brand-teal tracking-widest uppercase font-black">
                  [ SCANNING_SECTOR ]
               </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-1/4 right-10 hidden xl:block z-20 pointer-events-none opacity-20">
         <div className="w-64 h-64 border border-brand-teal/30 rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full border border-brand-teal/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
               <Target className="w-12 h-12 text-brand-teal" strokeWidth={1} />
            </div>
         </div>
      </div>
    </section>
  );
}
