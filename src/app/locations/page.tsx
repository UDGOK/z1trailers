"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Route } from "lucide-react";

export default function LocationsPage() {
  const regions = [
    { name: "Oklahoma", tier: "HEADQUARTERS", status: "ONLINE", href: "/locations/oklahoma" },
    { name: "Texas", tier: "PRIMARY DIVISION", status: "ONLINE", href: "/locations/texas" },
    { name: "Louisiana", tier: "REGIONAL SECTOR", status: "ONLINE", href: "/locations/louisiana" },
    { name: "Arkansas", tier: "REGIONAL SECTOR", status: "ONLINE", href: "/locations/arkansas" },
    { name: "Kansas", tier: "REGIONAL SECTOR", status: "ONLINE", href: "/locations/kansas" },
    { name: "Alabama", tier: "REGIONAL SECTOR", status: "ONLINE", href: "/locations/alabama" },
  ];

  return (
    <div className="bg-[#0a111a] min-h-screen pt-32 pb-24 relative overflow-hidden">
       {/* UI Grid background */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-10 relative z-10">
         <div className="max-w-3xl mb-24">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              <Route className="w-4 h-4 mr-3" /> Operational Cartography
            </p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Service <br/><span className="text-slate-300">Jurisdictions.</span>
            </h1>
            <p className="font-mono text-xs tracking-widest leading-loose text-slate-300 uppercase">
              Our tactical delivery teams guarantee 15-minute on-site deployment logic across the entire Mid-South vector.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, idx) => (
              <Link key={region.name} href={region.href}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-8 border border-white/10 bg-white/5 hover:border-brand-teal hover:bg-brand-teal/5 transition-all"
                >
                   <div className="flex items-center space-x-6 mb-6 sm:mb-0">
                      <div className="w-12 h-12 bg-black border border-brand-teal/30 flex items-center justify-center shrink-0">
                         <MapPin className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                         <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-1">{region.tier}</p>
                         <h2 className="font-display font-black text-3xl text-white uppercase tracking-wider group-hover:text-brand-teal transition-colors">{region.name}</h2>
                      </div>
                   </div>
                   
                   <div className="flex items-center space-x-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-6">
                      <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-brand-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                      </span>
                      <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.2em]">{region.status}</span>
                   </div>
                </motion.div>
              </Link>
            ))}
         </div>

       </div>
    </div>
  )
}
