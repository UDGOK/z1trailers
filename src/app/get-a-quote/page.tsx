"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Lock, Crosshair } from "lucide-react";

export default function QuotePage() {
  return (
    <div className="bg-brand-ice min-h-screen pt-32 pb-24 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-10 relative z-10">
         
         <div className="flex flex-col md:flex-row gap-16">
            
            <div className="w-full md:w-5/12">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
               >
                  <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-teal animate-pulse mr-3" /> Initialization
                  </p>
                  <h1 className="font-display font-black text-5xl md:text-6xl text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
                    Deploy <br/><span className="text-brand-teal">Intel.</span>
                  </h1>
                  <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase mb-12">
                    Submit perimeter parameters for tactical analysis. Our deployment command will return a custom hardware configuration within 24 hours.
                  </p>

                  <div className="space-y-6">
                     {[
                       { icon: ShieldCheck, text: "5-Diamond Monitored Hub" },
                       { icon: Zap, text: "Zero Power Grid Requirement" },
                       { icon: Crosshair, text: "AI-Precision Targeting" }
                     ].map((item, i) => (
                       <div key={i} className="flex items-center space-x-4 border border-brand-mist/50 bg-white p-4">
                         <div className="w-10 h-10 bg-brand-navy flex items-center justify-center text-brand-teal">
                            <item.icon className="w-5 h-5" />
                         </div>
                         <p className="font-display font-bold uppercase tracking-wider text-sm text-brand-navy">{item.text}</p>
                       </div>
                     ))}
                  </div>
               </motion.div>
            </div>

            <div className="w-full md:w-7/12">
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-brand-navy p-10 relative shadow-2xl overflow-hidden"
               >
                  {/* Cyber glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 blur-[80px]" />
                  
                  <form className="relative z-10 flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Command Officer / Name</label>
                         <input type="text" className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="J. DOE" />
                       </div>
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Organization / Company</label>
                         <input type="text" className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="ACME CORP" />
                       </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Comms / Email</label>
                         <input type="email" className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="DATA@ACME.COM" />
                       </div>
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Phone</label>
                         <input type="tel" className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="555-0100" />
                       </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Perimeter Size (Acres/SqFt)</label>
                         <input type="text" className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="5 ACRES" />
                       </div>
                       <div className="flex flex-col">
                         <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Operation Type</label>
                         <select className="bg-[#0a111a] border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors appearance-none cursor-pointer">
                            <option>Rental Deployment</option>
                            <option>Hardware Acquisition</option>
                         </select>
                       </div>
                     </div>

                     <div className="flex flex-col">
                        <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Tactical Objectives / Comments</label>
                        <textarea rows={4} className="bg-white/5 border border-white/10 text-white font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors resize-none" placeholder="DESCRIBE THE TARGET PERIMETER..."></textarea>
                     </div>

                     <button className="w-full bg-brand-gold text-brand-navy font-display font-black uppercase tracking-[0.2em] text-sm py-4 hover:bg-white transition-colors relative group overflow-hidden">
                       <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                       <span className="relative z-10 flex items-center justify-center">
                         Initiate Sequence <ArrowRight className="w-4 h-4 ml-3" />
                       </span>
                     </button>
                  </form>
               </motion.div>
            </div>

         </div>
       </div>
    </div>
  )
}
