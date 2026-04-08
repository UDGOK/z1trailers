"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function RentPage() {
  const data = [
    { name: "Z1 Scout", price: "$1,850", period: "/ MO", desc: "ENTRY TIER", weekly: "$575", daily: "$95" },
    { name: "Z1 Guardian", price: "$2,250", period: "/ MO", desc: "STANDARD COMMAND", highlight: true, weekly: "$650", daily: "$125" },
    { name: "Z1 Apex", price: "CUSTOM", period: "", desc: "THERMAL + LPR", callForPricing: true }
  ];

  return (
    <div className="bg-brand-ice min-h-screen pt-32 pb-24 relative overflow-hidden">
       {/* UI Grid background */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

       <div className="max-w-7xl mx-auto px-10 mb-20 relative z-10 text-center">
         <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">OpEx Integration</p>
         <h1 className="font-display font-black text-5xl md:text-7xl text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
           Rental <span className="text-brand-teal">Lease.</span>
         </h1>
         <p className="font-mono text-xs tracking-widest leading-loose text-brand-steel uppercase max-w-2xl mx-auto">
           Flexible, flat-rate monthly leases designed to scale exactly with your operational timeline. No capital depreciation. 100% tactical flexibility.
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
                className={`relative flex flex-col p-8 border ${tier.highlight ? 'border-brand-teal bg-white shadow-2xl shadow-brand-teal/10 rotate-1 scale-105 z-20' : 'border-brand-mist/60 bg-brand-ice/50 z-10'}`}
             >
                {tier.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1 bg-brand-teal" />
                )}
                
                <p className="font-mono text-[9px] uppercase tracking-widest text-brand-teal font-bold mb-2">{tier.desc}</p>
                <h3 className="font-display font-black text-xl text-brand-navy uppercase tracking-widest mb-8">{tier.name}</h3>

                <div className="mt-auto">
                   <p className="font-mono text-[10px] uppercase text-brand-steel/50 tracking-widest mb-1 border-t border-brand-mist pt-4">MONTHLY RATE</p>
                   {tier.callForPricing ? (
                      <p className="font-display font-black text-3xl text-red-500 tracking-tight">CALL FOR PRICING</p>
                   ) : (
                      <>
                        <div className="flex items-baseline mb-3">
                          <span className="font-display font-black text-4xl tracking-tighter text-red-500 drop-shadow-sm">{tier.price}</span>
                          <span className="font-mono text-[10px] ml-1 text-brand-steel tracking-widest">{tier.period}</span>
                        </div>
                        <div className="flex justify-between font-mono text-[9px] tracking-widest uppercase border-t border-brand-mist/50 pt-2 mb-2">
                           <span className="text-brand-steel">Weekly: <span className="text-brand-navy font-bold">{tier.weekly}</span></span>
                           <span className="text-brand-steel">Daily: <span className="text-brand-navy font-bold">{tier.daily}</span></span>
                        </div>
                      </>
                   )}
                </div>

                <Link href={tier.callForPricing ? "/contact" : "/get-a-quote"} className={`mt-6 w-full py-4 text-center font-display font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${tier.highlight ? 'bg-brand-teal text-white hover:bg-brand-navy' : 'bg-brand-navy text-white hover:bg-brand-teal'}`}>
                   Deploy Now
                </Link>
             </motion.div>
           ))}
         </div>
       </div>
    </div>
  )
}
