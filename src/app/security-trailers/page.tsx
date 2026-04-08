"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Crosshair, Sun, Shield, MapPin, Check } from "lucide-react";
import Image from "next/image";

export default function HardwarePage() {
  const hardware = [
    {
      name: "Z1 Scout",
      badge: "ENTRY VECTOR",
      desc: "Compact, rapid-deployment endpoint for immediate event containment and short-term lot surveillance.",
      specs: ["5-Day Solar Autonomy", "Dual 4MP AI Optics", "30ft Mast Extent", "Grid Independent"],
      icon: Crosshair,
      bg: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      href: "/security-trailers/z1-scout"
    },
    {
      name: "Z1 Guardian",
      badge: "STANDARD COMMAND",
      desc: "Our high-adoption standard. 10-day autonomy via expanded array and bi-directional deterrence arrays.",
      specs: ["10-Day Solar Autonomy", "Quad 4MP AI Optics", "Loudspeaker & Strobe", "LTE Grid Link"],
      icon: Sun,
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
      href: "/security-trailers/z1-guardian"
    },
    {
      name: "Z1 Apex",
      badge: "ADVANCED TARGETING",
      desc: "Military-grade optical payload featuring Thermal Imaging and integrated LPR for vital infrastructure.",
      specs: ["Thermal Vision", "License Plate Tracking", "15-Day Battery Array", "Radar Detection"],
      icon: Shield,
      bg: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1200",
      href: "/security-trailers/z1-apex"
    }
  ];

  return (
    <div className="bg-brand-navy min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-10 mb-24 relative z-10">
         <div className="text-center max-w-3xl mx-auto">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Tactical Inventory</p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Hardware <span className="text-slate-300">Matrix.</span>
            </h1>
            <p className="font-mono text-xs tracking-widest leading-loose text-slate-300 uppercase">
              Identify the exact surveillance payload required to secure your operational perimeter.
            </p>
         </div>
      </div>

      {/* Hardware List */}
      <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col space-y-12">
         {hardware.map((item, idx) => (
           <motion.div 
             key={item.name}
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
             className="bg-black/40 border border-white/10 flex flex-col md:flex-row shadow-2xl group hover:border-brand-teal transition-colors"
           >
             {/* Left side: Cinematic Render */}
             <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply z-10 group-hover:opacity-10 transition-opacity duration-700" />
                <Image src={item.bg} alt={item.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale-[40%] scale-105 group-hover:scale-100 transition-transform duration-[1s]" />
                <div className="absolute top-4 left-4 z-20 font-mono text-[9px] bg-black/60 backdrop-blur-md border border-brand-teal/30 text-brand-teal px-3 py-1.5 uppercase tracking-widest">
                  {item.badge}
                </div>
             </div>

             {/* Right side: Data */}
             <div className="w-full md:w-7/12 p-10 flex flex-col justify-between relative bg-[#0a111a]">
                {/* Tech node */}
                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-brand-teal opacity-50 shadow-[0_0_10px_rgba(27,154,170,1)]" />

                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <item.icon className="w-8 h-8 text-brand-teal" strokeWidth={1} />
                    <h2 className="font-display font-black text-4xl text-white uppercase tracking-wider">{item.name}</h2>
                  </div>
                  <p className="font-mono text-xs text-slate-300 leading-relaxed tracking-widest max-w-md mb-8">
                    {item.desc}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {item.specs.map(spec => (
                    <div key={spec} className="flex items-center space-x-3 text-white/80">
                      <Check className="w-4 h-4 text-brand-teal shrink-0" strokeWidth={2} />
                      <span className="font-mono text-[9px] uppercase tracking-widest">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-white/10 pt-8 mt-auto">
                   <Link href="/get-a-quote" className="px-8 py-3 bg-brand-teal hover:bg-brand-gold text-brand-navy font-display font-black text-[11px] uppercase tracking-[0.2em] transition-colors flex items-center group/btn">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                   </Link>
                   <Link href={item.href} className="px-8 py-3 bg-transparent border border-white/20 hover:border-white text-white font-display font-bold text-[11px] uppercase tracking-[0.2em] transition-colors">
                      Deep Dive
                   </Link>
                </div>
             </div>
           </motion.div>
         ))}
      </div>

    </div>
  )
}
