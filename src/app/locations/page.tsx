"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Route, Activity, Shield, Zap } from "lucide-react";
import { locationDb } from "@/lib/locationData";

export default function LocationsPage() {
  // Dynamically derive regions from the tactical database
  const regions = Object.values(locationDb).map(state => ({
    name: state.name,
    subtitle: state.subtitle,
    status: "ONLINE",
    href: `/locations/${state.slug}`,
    cityCount: Object.keys(state.cities).length
  }));

  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 relative overflow-hidden font-sans">
       {/* TACTICAL BACKGROUND ANIMATION GRID */}
       <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05080c_120%)]" />
       </div>
       
       <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
         
         <div className="max-w-4xl mb-32">
            <div className="inline-flex items-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1">
               <Activity className="w-4 h-4 text-brand-teal animate-pulse" />
               <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold">Global Operational Grid</p>
            </div>
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.85] mb-12 drop-shadow-2xl">
              NATIONWIDE <br/><span className="text-brand-steel/50">SECTORS.</span>
            </h1>
            <p className="font-mono text-sm tracking-[0.2em] leading-[2] text-brand-steel uppercase border-l border-brand-teal/30 pl-8 max-w-2xl">
              Z1 Trailers maintains 24/7 AI-monitored surveillance and LiFePO4 supplemental power across the entire US tactical matrix. Select a sector to initialize local diagnostic telemetry.
            </p>
         </div>

         {/* DYNAMIC REGION GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, idx) => (
              <Link key={region.name} href={region.href} className="group overflow-hidden">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="relative p-10 border border-white/10 bg-[#0a111a] hover:border-brand-teal transition-all group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                >
                   <div className="flex items-start justify-between mb-12">
                      <div className="w-14 h-14 bg-black border border-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors">
                         <MapPin className="w-6 h-6 text-brand-teal group-hover:text-brand-navy" />
                      </div>
                      <div className="text-right">
                         <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em] font-black">{region.status}</p>
                         <p className="font-display font-bold text-[10px] text-white/40 uppercase tracking-widest">{region.cityCount} DEPLOYMENT ZONES</p>
                      </div>
                   </div>
                   
                   <div className="mb-10">
                      <p className="font-mono text-[10px] text-brand-steel uppercase tracking-[0.4em] font-bold mb-2">{region.subtitle}</p>
                      <h2 className="font-display font-black text-4xl text-white uppercase tracking-tighter group-hover:text-brand-teal transition-colors leading-none">{region.name}</h2>
                   </div>

                   <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
                      <span className="font-mono text-[9px] text-white uppercase tracking-[0.3em] font-bold">Initialize Sector</span>
                      <Zap className="w-4 h-4 text-brand-teal group-hover:translate-x-2 transition-transform" />
                   </div>

                   {/* Scanning animation line */}
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-teal/50 -translate-y-full group-hover:translate-y-[350px] transition-transform duration-[1.5s] pointer-events-none" />
                </motion.div>
              </Link>
            ))}
         </div>

       </div>

       {/* Decorative Elements */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-brand-teal/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
}
