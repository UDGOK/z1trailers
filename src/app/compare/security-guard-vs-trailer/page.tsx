"use client";

import { motion } from "framer-motion";
import { Shield, Clock, TrendingDown, CheckCircle2, AlertTriangle, Zap, Activity } from "lucide-react";
import Link from "next/link";

export default function GuardVsTrailer() {
  const comparisonLines = [
    { label: "Operating Hours", guard: "Limited (Shift-based)", trailer: "True 24/7/365", trailerWin: true },
    { label: "Cost Per Month", guard: "$20,000 - $34,000+", trailer: "$1,500 - $4,000", trailerWin: true },
    { label: "Fatigue Risk", guard: "High (Human Error)", trailer: "Zero (AI Driven)", trailerWin: true },
    { label: "Digital Evidence", guard: "Inconsistent/None", trailer: "4K Verifiable / Thermal", trailerWin: true },
    { label: "Deployment Speed", guard: "Days (Hiring/Vetting)", trailer: "15 Minutes", trailerWin: true },
    { label: "Liability Shield", guard: "Manual Reporting", trailer: "Automated Compliance", trailerWin: true },
  ];

  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 font-sans selection:bg-brand-teal/30">
      {/* TACTICAL OVERLAY */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05080c_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/20 px-4 py-1.5"
          >
            <Activity className="w-4 h-4 text-brand-teal animate-pulse" />
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold">Cost-Efficiency Analysis Matrix</p>
          </motion.div>
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-12">
            THE FORCE <br/><span className="text-brand-steel/50">OFFSET.</span>
          </h1>
          <p className="font-mono text-sm tracking-[0.2em] leading-[2] text-brand-steel uppercase border-l border-brand-teal/30 pl-8 max-w-2xl">
            Human guards are limited by biology. Z1 Tactical Endpoints are driven by neural networks and solar autonomy. Compare the ROI of 20th-century security vs. the future of perimeter defense.
          </p>
        </div>

        {/* ROI CALCULATOR / DATA SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* COST CARD: GUARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-12 border border-white/5 bg-[#0a111a] relative overflow-hidden"
          >
             <div className="flex justify-between items-start mb-12">
                <div>
                   <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest mb-2">Traditional Method</p>
                   <h3 className="font-display font-black text-4xl text-white uppercase tracking-tight">Security Guard</h3>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/20">
                   <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
             </div>
             
             <div className="space-y-6 mb-12">
                <div className="flex justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 uppercase text-xs font-bold font-display">Annual Cost (24/7)</span>
                   <span className="text-white font-mono font-bold">$240K - $400K+</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 uppercase text-xs font-bold font-display">Liability Load</span>
                   <span className="text-red-500/80 font-mono font-bold uppercase tracking-widest">HIGH</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-4">
                   <span className="text-white/40 uppercase text-xs font-bold font-display">Performance Variable</span>
                   <span className="text-white/60 font-mono uppercase tracking-widest">Fatigue / Bias</span>
                </div>
             </div>

             <div className="p-6 bg-red-500/5 border border-red-500/10">
                <p className="text-[10px] font-mono text-red-500/60 uppercase leading-relaxed tracking-wider">
                   Critical Alert: Human guards represent the largest single vulnerability in modern perimeter defense due to inconsistent detection and extreme operational costs.
                </p>
             </div>
          </motion.div>

          {/* COST CARD: Z1 TRAILER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-12 border border-brand-teal/30 bg-brand-teal/5 relative overflow-hidden ring-1 ring-brand-teal/20 shadow-[0_0_50px_rgba(27,154,170,0.1)]"
          >
             <div className="absolute top-0 right-0 p-4 bg-brand-teal text-brand-navy font-mono text-[9px] font-black uppercase tracking-widest">
                Recommended Sector Defense
             </div>
             <div className="flex justify-between items-start mb-12">
                <div>
                   <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest mb-2">Tactical Innovation</p>
                   <h3 className="font-display font-black text-4xl text-white uppercase tracking-tight">Z1 Tactical Unit</h3>
                </div>
                <div className="p-3 bg-brand-teal/20 border border-brand-teal/40">
                   <Zap className="w-6 h-6 text-brand-teal" />
                </div>
             </div>
             
             <div className="space-y-6 mb-12">
                <div className="flex justify-between border-b border-brand-teal/10 pb-4">
                   <span className="text-brand-teal uppercase text-xs font-bold font-display">Annual Cost (24/7)</span>
                   <span className="text-white font-mono font-bold">$18K - $48K</span>
                </div>
                <div className="flex justify-between border-b border-brand-teal/10 pb-4">
                   <span className="text-brand-teal uppercase text-xs font-bold font-display">Liability Load</span>
                   <span className="text-brand-teal font-mono font-bold uppercase tracking-widest">MINIMAL</span>
                </div>
                <div className="flex justify-between border-b border-brand-teal/10 pb-4">
                   <span className="text-brand-teal uppercase text-xs font-bold font-display">Performance Variable</span>
                   <span className="text-white font-mono uppercase tracking-widest">100% Neural Uptime</span>
                </div>
             </div>

             <div className="p-6 bg-brand-teal/10 border border-brand-teal/20">
                <p className="text-[10px] font-mono text-brand-teal uppercase leading-relaxed tracking-wider font-black">
                   Z1 Operation: Deploying a single Z1 Tactical Hub provides greater deterrence and evidence gathering than 4 full-time guards at 10% of the CAPEX.
                </p>
             </div>
          </motion.div>
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-32">
           <h2 className="font-display font-black text-3xl text-white uppercase tracking-tighter mb-12 border-l-4 border-brand-teal pl-6">Technical Specification Contrast</h2>
           <div className="border border-white/5 bg-[#0a111a] overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 bg-white/5 border-b border-white/10">
                 <div className="p-6 font-mono text-[9px] uppercase tracking-widest text-brand-steel">Metric</div>
                 <div className="p-6 font-mono text-[9px] uppercase tracking-widest text-brand-steel hidden md:block">On-Site Guard</div>
                 <div className="p-6 font-mono text-[9px] uppercase tracking-widest text-brand-teal text-right md:text-left">Z1 Tactical System</div>
              </div>
              {comparisonLines.map((row, idx) => (
                <div key={idx} className="grid grid-cols-2 md:grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                   <div className="p-6 font-display font-bold text-[11px] text-white/40 uppercase tracking-widest flex items-center">{row.label}</div>
                   <div className="p-6 font-mono text-xs text-white/60 hidden md:flex items-center">{row.guard}</div>
                   <div className="p-6 font-mono text-xs text-brand-teal font-bold flex items-center justify-end md:justify-start">
                      <div className="flex items-center space-x-3">
                         <CheckCircle2 className="w-4 h-4" />
                         <span>{row.trailer}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* CEO CONTACT SECTION - GOOGLE STYLE AUTHORITY */}
        <div className="max-w-4xl mx-auto">
           <div className="p-1 text-center bg-brand-teal/20 mb-1">
              <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.5em] font-black">Strategic Consultation Protocol v.2026</p>
           </div>
           <motion.div 
             whileHover={{ y: -5 }}
             className="p-16 border border-brand-teal/50 bg-[#0a111a] text-center shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-teal border border-black flex items-center justify-center">
                 <Shield className="w-10 h-10 text-brand-navy" />
              </div>
              <h2 className="font-display font-black text-4xl text-white uppercase tracking-tighter mb-8 mt-4 leading-tight">
                 DEPLOY A Z1 ANALYST <br/>TO YOUR SECTOR.
              </h2>
              <p className="font-mono text-xs tracking-widest leading-relaxed text-brand-steel uppercase mb-12 max-w-xl mx-auto">
                 Skip the sales pitch. Speak directly with a High-Level Tactical Analyst to calculate the exact force-offset and cost-reduction matrix for your project.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                 <Link href="/get-a-quote" className="w-full md:w-auto px-12 py-5 bg-white text-brand-navy font-display font-black uppercase text-sm tracking-widest hover:bg-brand-teal hover:text-brand-navy transition-all">
                    Initialize Consultation
                 </Link>
                 <a href="tel:9185203823" className="w-full md:w-auto px-12 py-5 border border-white/20 text-white font-display font-black uppercase text-sm tracking-widest hover:border-brand-teal hover:text-brand-teal transition-all">
                    Contact Command Line
                 </a>
              </div>
           </motion.div>
        </div>

      </div>
    </div>
  );
}
