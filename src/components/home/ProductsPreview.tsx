"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Crosshair, Sun, Shield, MapPin, Zap } from "lucide-react";
import Image from "next/image";

export default function ProductsPreview() {
  const models = [
    {
       name: "Z1 Scout",
       role: "ENTRY TIER",
       desc: "Compact, rapid-deployment endpoint designed for temporary sites. Features a 5-day battery reserve and fundamental 24/7 AI-monitored optics.",
       price: "$1,850",
       period: "/MO",
       icon: Crosshair,
       img: "/images/products/z1-scout/frame-4.png",
       href: "/security-trailers/z1-scout"
    },
    {
       name: "Z1 Guardian",
       role: "STANDARD COMPUTE",
       desc: "Our high-adoption standard. 10-day autonomy via expanded solar array, upgraded dual-lens optics, and bi-directional audio deterrence.",
       price: "$2,250",
       period: "/MO",
       icon: Sun,
       img: "/images/products/z1-guardian.png",
       href: "/security-trailers/z1-guardian"
    },
    {
       name: "Z1 Apex",
       role: "ADVANCED TIER",
       desc: "Military-grade optical payload featuring Thermal Imaging and integrated License Plate Recognition (LPR) for mission-critical borders.",
       price: "CALL",
       period: "FOR PRICING",
       icon: Shield,
       img: "/images/products/z1-apex/frame-4.png",
       href: "/security-trailers/z1-apex"
    },
  ];

  return (
    <section className="bg-brand-navy py-32 relative overflow-hidden">
      
      {/* 
        High-End Abstract Ion Charging/Conduit Background 
        Simulating raw solar-to-battery charging mechanics via dynamic light streams
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {/* Subsurface glowing gradient grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
         
         {/* Massive pulsing core representing the battery stack */}
         <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/10 blur-[150px] rounded-full"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
         />

         {/* Charging Conduits - Lines moving upward like energy filling a cell */}
         <div className="absolute inset-0 flex justify-around opacity-30">
           {[...Array(8)].map((_, i) => (
             <div key={i} className="relative w-[2px] h-full bg-white/5 overflow-hidden">
               <motion.div
                 className="absolute bottom-0 w-full bg-brand-teal"
                 animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                 style={{ filter: "drop-shadow(0 0 10px #1B9AAA)" }}
                 transition={{ 
                   repeat: Infinity, 
                   duration: 3 + Math.random() * 4, 
                   delay: Math.random() * 3,
                   ease: "easeInOut" 
                 }}
               />
             </div>
           ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Zap className="w-4 h-4 text-brand-gold animate-pulse" />
              <span className="font-mono text-[10px] text-brand-gold uppercase tracking-[0.3em] font-bold">Hardware Endpoints // Power Status: Flow</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-6xl text-white uppercase tracking-[0.1em] leading-none mb-6">
              Tactical Output Models
            </h2>
            <p className="font-mono text-xs text-brand-steel tracking-widest uppercase leading-relaxed max-w-lg">
              Every unit is fully autonomous, 100% solar powered, and maintains extensive high-density battery arrays for continuous grid dominance.
            </p>
          </motion.div>

          <Link href="/security-trailers" className="group hidden md:flex flex-col items-center justify-center w-32 h-32 rounded-full border border-brand-teal hover:bg-brand-teal transition-all text-center p-4">
             <span className="font-display font-black text-[10px] uppercase tracking-[0.15em] text-brand-teal group-hover:text-brand-navy transition-colors">Compare<br/>Models</span>
             <ArrowRight className="w-4 h-4 mt-2 text-brand-teal group-hover:text-brand-navy transition-colors group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <motion.div 
              key={model.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 group flex flex-col hover:border-brand-teal/50 hover:shadow-[0_0_30px_rgba(27,154,170,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Cinematic Image Container */}
              <div className="relative h-64 overflow-hidden bg-black">
                 <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply z-10 transition-opacity group-hover:opacity-10 duration-700" />
                 <Image src={model.img} alt={model.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale-[60%] scale-105 group-hover:scale-100 group-hover:grayscale-[20%] transition-all duration-1000 ease-out" />
                 
                 {/* Targeting UI */}
                 <div className="absolute top-4 left-4 z-20 font-mono text-[9px] bg-black/60 backdrop-blur-md border border-brand-teal/30 text-brand-teal px-3 py-1.5 uppercase tracking-widest shadow-[0_0_10px_rgba(27,154,170,0.2)]">
                   {model.role}
                 </div>

                 {/* Corner Reticles */}
                 <div className="absolute top-4 right-4 z-20 w-3 h-3 border-t border-r border-brand-teal opacity-50 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute top-4 right-4 z-20 text-right">
                  <div className="font-display font-black text-2xl text-red-500 tracking-tight drop-shadow-md">{model.price}</div>
                  <div className="font-mono text-[8px] text-white/70 tracking-widest">{model.period}</div>
                </div>
              </div>

              {/* Data payload */}
              <div className="p-8 flex-1 flex flex-col relative z-20">
                {/* Connecting Node Graphic */}
                <div className="absolute top-0 right-8 w-px h-8 bg-brand-teal -translate-y-full opacity-50" />
                <div className="absolute top-0 right-8 w-2 h-2 bg-brand-teal rounded-full -translate-x-[3px] -translate-y-1/2 opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(27,154,170,1)] transition-all" />
                
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-[0.1em] mb-4">{model.name}</h3>
                <p className="font-mono text-[11px] text-brand-steel leading-relaxed mb-8 flex-1 tracking-widest">{model.desc}</p>
                
                <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                   <div>
                     <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-1.5">Starting Lease</p>
                     <p className="font-display font-black text-xl text-white tracking-widest">{model.price}</p>
                   </div>
                   <Link href={model.href} className="w-12 h-12 border border-brand-teal/30 hover:border-brand-teal group-hover:bg-brand-teal/10 text-white flex items-center justify-center transition-all duration-300">
                     <ArrowRight className="w-4 h-4 group-hover:-rotate-45 text-brand-teal transition-transform duration-300" />
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
