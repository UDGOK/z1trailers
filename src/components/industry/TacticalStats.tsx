"use client";

import { motion } from "framer-motion";
import { ShieldAlert, TrendingUp, BarChart3, AlertTriangle, Zap, Crosshair, MapPin, Target, Lock, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: Record<string, any> = {
  ShieldAlert,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Zap,
  Crosshair,
  MapPin,
  Target,
  Lock,
  ShieldCheck
};

interface TacticalStatsProps {
  stats: {
    title: string;
    value: string;
    desc: string;
    icon: string;
    color: string;
  }[];
}

export default function TacticalStats({ stats }: TacticalStatsProps) {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
            Evidence_of_Overmatch // Market Intelligence
          </p>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
            Sector <span className="text-white/20">Vulnerability</span> Analysis.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = IconMap[stat.icon] || ShieldAlert;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-white/5 p-8 relative group overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                   <div className={cn("p-3 bg-white/5 border border-white/10 text-white/50 group-hover:text-brand-teal group-hover:border-brand-teal transition-all")}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                   </div>
                   <BarChart3 className="w-10 h-10 text-white/5 group-hover:text-brand-teal/20 transition-all transform group-hover:scale-110" strokeWidth={1} />
                </div>

                <div className="space-y-2">
                   <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest font-black">{stat.title}</p>
                   <p className="font-display font-black text-4xl text-white tracking-tighter group-hover:text-brand-teal transition-colors">
                      {stat.value}
                   </p>
                </div>

                <p className="mt-6 font-mono text-[9px] text-white/40 leading-relaxed uppercase tracking-widest">
                   {stat.desc}
                </p>

                <div className="absolute top-0 right-0 w-8 h-[1px] bg-brand-teal/20" />
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-brand-teal/20" />
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-12 p-6 border-l-2 border-brand-teal/30 bg-brand-teal/5 flex items-center gap-6">
           <AlertTriangle className="w-8 h-8 text-brand-gold animate-pulse shrink-0" strokeWidth={1.5} />
           <p className="font-mono text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
              [ WARNING: UNSECURED SECTORS FACE 30% INCREASED VULNERABILITY IN 2025 CYCLES. COORDINATES LOCKED. ]
           </p>
        </div>
      </div>
    </section>
  );
}
