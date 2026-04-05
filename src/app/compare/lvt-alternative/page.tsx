"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Activity, Battery, Gauge, LayoutGrid, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function LVTAlternative() {
  const overmatchPoints = [
    { label: "Energy Standard", lvt: "Standard Lithium", z1: "Enhanced LiFePO4 (Z-Grade)", z1Win: true },
    { label: "Contract Logic", lvt: "Multi-Year Focus", z1: "100% No-Contract Option", z1Win: true },
    { label: "Deployment Speed", lvt: "Variable Partners", z1: "Direct HQ Deployment", z1Win: true },
    { label: "Thermal Control", lvt: "Passive Cooling", z1: "Active Arctic/Desert Hulls", z1Win: true },
    { label: "Data Pipeline", lvt: "Standard 4G/LTE", z1: "Starlink Priority + 5G Hub", z1Win: true },
  ];

  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 font-sans selection:bg-brand-teal/30">
      {/* HUD OVERLAY */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(rgba(27,154,170,0.1)_2px,transparent_2px)] bg-[size:100%_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/30 px-4 py-2"
          >
            <Activity className="w-4 h-4 text-brand-teal" />
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-black">Competitive Overmatch Matrix v2.0</p>
          </motion.div>
          <h1 className="font-display font-black text-4xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-12">
            BEYOND <br/><span className="text-brand-steel/50">LVT.</span>
          </h1>
          <p className="font-mono text-sm tracking-[0.4em] leading-[2] text-brand-steel uppercase border-l-4 border-brand-teal pl-8 max-w-2xl">
            You deserve a security partner, not a contract-locked billing cycle. Discover why the Z1 platform is the primary alternative for enterprise-grade mobile surveillance.
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/10 mb-32">
           {/* THE Z1 ADVANTAGE */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-16 bg-[#0a111a] border-r border-white/5"
           >
              <h2 className="font-display font-black text-4xl text-brand-teal uppercase tracking-tighter mb-12 flex items-center">
                 <Shield className="w-8 h-8 mr-4" /> THE Z1 STANDARD
              </h2>
              <div className="space-y-12">
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center flex-shrink-0">
                       <Battery className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white uppercase tracking-widest mb-2">LiFePO4 Standard</h4>
                       <p className="font-mono text-[11px] text-brand-steel uppercase leading-relaxed font-bold tracking-wider">
                          We deploy enhanced Lithium Iron Phosphate as our baseline. Massive thermal stability, 3500+ cycle life, and zero fire risk on your job site.
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center flex-shrink-0">
                       <LayoutGrid className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white uppercase tracking-widest mb-2">Infinite Scalability</h4>
                       <p className="font-mono text-[11px] text-brand-steel uppercase leading-relaxed font-bold tracking-wider">
                          From a single parking lot to 50-state infrastructure rolls. Direct HQ support-to-mast means no dealer markup and no deployment delays.
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/30 flex items-center justify-center flex-shrink-0">
                       <Clock className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white uppercase tracking-widest mb-2">No Long-Term Contracts</h4>
                       <p className="font-mono text-[11px] text-brand-steel uppercase leading-relaxed font-bold tracking-wider">
                          We earn your business every month. Short-term rentals or multi-year enterprise leases—you dictate the terms of the engagement.
                       </p>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* THE COMPETITION CARD */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-16 bg-[#05080c]"
           >
              <h2 className="font-display font-black text-4xl text-white/20 uppercase tracking-tighter mb-12">LEGACY OPS</h2>
              <div className="space-y-12 opacity-40">
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                       <Battery className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white/50 uppercase tracking-widest mb-2">Standard Lithium</h4>
                       <p className="font-mono text-[11px] text-white/40 uppercase leading-relaxed tracking-wider">
                          Lower cycle life and higher thermal risk in extreme heat environments.
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                       <Gauge className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white/50 uppercase tracking-widest mb-2">Dealer Markup</h4>
                       <p className="font-mono text-[11px] text-white/40 uppercase leading-relaxed tracking-wider">
                          Layers of bureaucracy and third-party vendors between you and your security analysts.
                       </p>
                    </div>
                 </div>
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                       <Shield className="w-6 h-6 text-white/50" />
                    </div>
                    <div>
                       <h4 className="font-display font-bold text-white/50 uppercase tracking-widest mb-2">Locked Contracts</h4>
                       <p className="font-mono text-[11px] text-white/40 uppercase leading-relaxed tracking-wider">
                          Locked into 3-5 year commitments regardless of site success or evolving needs.
                       </p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* DATA OVERMATCH GRID */}
        <div className="mb-32">
           <div className="border border-white/5 bg-[#0a111a] rounded shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 bg-white/5 border-b border-white/10">
                 <div className="p-8 font-mono text-[10px] uppercase tracking-[0.4em] text-brand-steel">Strategic Metric</div>
                 <div className="p-8 font-mono text-[10px] uppercase tracking-[0.4em] text-brand-steel hidden md:block">Legacy Competitors</div>
                 <div className="p-8 font-mono text-[10px] uppercase tracking-[0.4em] text-brand-teal text-right md:text-left">Z1 Tactical Matrix</div>
              </div>
              {overmatchPoints.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 md:grid-cols-3 border-b border-white/5 hover:bg-brand-teal/5 transition-colors group">
                   <div className="p-8 font-display font-bold text-[12px] text-white/40 uppercase tracking-widest flex items-center group-hover:text-white transition-colors">{row.label}</div>
                   <div className="p-8 font-mono text-xs text-white/60 flex items-center hidden md:flex italic">{row.lvt}</div>
                   <div className="p-8 font-mono text-xs text-brand-teal font-black flex items-center justify-end md:justify-start">
                      <div className="flex items-center space-x-4">
                         <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                         <span className="tracking-widest uppercase">{row.z1}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* ANALYST CONSULTATION LINE - "GOOGLE CEO" STYLE AUTHORITY */}
        <div className="max-w-4xl mx-auto">
           <div className="relative p-1 bg-brand-teal/20 group">
              <div className="p-8 md:p-16 border border-brand-teal/50 bg-[#0a111a] text-center shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
                 <div className="inline-flex p-4 bg-brand-teal/10 border border-brand-teal/20 mb-8">
                    <Activity className="w-10 h-10 text-brand-teal animate-pulse" />
                 </div>
                 <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-tight">
                    DIRECT HQ ANALYST<br/><span className="text-brand-steel/50">ENGAGEMENT.</span>
                 </h2>
                 <p className="font-mono text-xs tracking-[0.3em] leading-relaxed text-brand-steel uppercase mb-12 max-w-2xl mx-auto font-bold underline underline-offset-8">
                    By-passing the sales layer for direct tactical deployment logic.
                 </p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link href="/get-a-quote" className="w-full md:w-auto px-16 py-6 bg-brand-teal text-brand-navy font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1">
                       INITIALIZE STRATEGIC AUDIT
                    </Link>
                    <a href="tel:9185203823" className="w-full md:w-auto px-16 py-6 border border-brand-teal/40 text-brand-teal font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-brand-teal/10 transition-all">
                       HQ COMMAND LINE
                    </a>
                 </div>
              </div>
           </div>
           <div className="mt-8 text-center">
              <p className="font-mono text-[9px] text-brand-steel/40 uppercase tracking-[0.6em]">System Protocol Security Hash: 0xFF1492Z1</p>
           </div>
        </div>

      </div>
    </div>
  );
}
