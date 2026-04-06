"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BuyPage() {
  const data = [
    { name: "Z1 Scout", price: "$16.5K", period: "USD", desc: "ENTRY TIER" },
    { name: "Z1 Guardian", price: "$28.0K", period: "USD", desc: "STANDARD COMMAND" },
    { name: "Z1 Apex", price: "$42.0K", period: "USD", desc: "ADVANCED TARGETING", highlight: true }
  ];

  return (
    <div className="bg-[#0a111a] min-h-screen pt-32 pb-24 relative overflow-hidden">
       
       {/* Tech background */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
       
       <div className="max-w-7xl mx-auto px-10 mb-20 relative z-10 text-center">
         <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">CapEx Integration</p>
         <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9] mb-8">
           Purchase <span className="text-brand-steel">Matrix.</span>
         </h1>
         <p className="font-mono text-xs tracking-widest leading-loose text-brand-steel uppercase max-w-2xl mx-auto">
           Acquire your own tactical surveillance assets. Perfect for permanent facility perimeters and long-term capital deployment.
         </p>
       </div>

       <div className="max-w-5xl mx-auto px-10 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {data.map((tier, idx) => (
             <motion.div 
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`flex flex-col p-8 border ${tier.highlight ? 'border-brand-teal bg-brand-teal/10 shadow-[0_0_40px_rgba(27,154,170,0.2)]' : 'border-white/10 bg-white/5 hover:border-brand-teal/50 transition-colors'}`}
             >
                <p className="font-mono text-[9px] uppercase tracking-widest text-brand-teal font-bold mb-2">{tier.desc}</p>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-8">{tier.name}</h3>

                <div className="mt-auto">
                   <p className="font-mono text-[10px] uppercase text-white/40 tracking-widest mb-1 border-t border-white/10 pt-4">HARDWARE COST</p>
                   {tier.price === "CUSTOM" ? (
                      <p className="font-display font-black text-3xl text-brand-gold tracking-tight">{tier.price}</p>
                   ) : (
                      <div className="flex items-baseline">
                        <span className="font-display font-black text-4xl tracking-tighter text-white">{tier.price}</span>
                        <span className="font-mono text-[10px] ml-1 text-white/50 tracking-widest">{tier.period}</span>
                      </div>
                   )}
                </div>

                <Link href="/get-a-quote" className={`mt-8 w-full py-4 text-center font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${tier.highlight ? 'bg-brand-teal text-brand-navy hover:bg-brand-gold' : 'bg-transparent border border-white/20 text-white hover:border-brand-teal hover:text-brand-teal'}`}>
                   Acquire Asset
                </Link>
             </motion.div>
           ))}
         </div>
       </div>

       {/* Notice */}
       <div className="max-w-3xl mx-auto mt-16 text-center px-10 relative z-10">
          <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest leading-loose">
             ** Cloud connectivity and AI-monitoring platform requires a separate monthly SaaS subscription per unit upon purchase.
          </p>
       </div>
    </div>
  )
}
