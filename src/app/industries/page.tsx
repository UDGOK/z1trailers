"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function IndustriesPage() {
  const industries = [
    { name: "Construction Sites", desc: "Secure valuable materials and monitor contractor timelines with AI-filtered optics.", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200", href: "/industries/construction-sites" },
    { name: "Parking Lots", desc: "Prevent catalytic converter theft and unauthorized loitering in vast vehicle perimeters.", img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200", href: "/industries/parking-lots" },
    { name: "Events & Festivals", desc: "Rapid 15-minute deployment for temporary crowd control and perimeter defense.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200", href: "/industries/events" },
    { name: "Oil & Gas Logistics", desc: "Thermal imaging and LPR tracking for remote pipeline and refinery operations.", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200", href: "/industries/oil-gas" },
    { name: "Auto Dealerships", desc: "Strobe and audio-deterrence systems designed to protect high-value inventory.", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200", href: "/industries/car-dealerships" },
    { name: "Education Campuses", desc: "Unobtrusive but highly effective monitoring for massive, sprawling school districts.", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200", href: "/industries/school-campuses" }
  ];

  return (
    <div className="bg-brand-ice min-h-screen pt-32 pb-24 relative overflow-hidden">
       {/* Background */}
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />

       <div className="max-w-7xl mx-auto px-10 mb-20 relative z-10">
         <div className="max-w-3xl">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Target Verticals</p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-brand-navy uppercase tracking-tighter leading-[0.9] mb-8">
              Strategic <br/><span className="text-brand-steel/80">Applications.</span>
            </h1>
            <p className="font-mono text-xs tracking-widest leading-loose text-brand-steel uppercase">
              Our hardware matrix is engineered to dominate specific threat environments. Select your operational sector below.
            </p>
         </div>
       </div>

       <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
         {industries.map((ind, idx) => (
            <Link 
              href={ind.href}
              key={ind.name}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#0a111a] border border-brand-mist shadow-[0_20px_40px_-20px_rgba(13,27,42,0.15)] flex flex-col h-[400px] overflow-hidden"
              >
                  {/* Image Header */}
                  <div className="h-48 relative overflow-hidden bg-black">
                     <div className="absolute inset-0 bg-brand-navy/50 group-hover:bg-brand-teal/20 mix-blend-multiply transition-colors duration-500 z-10" />
                     <Image src={ind.img} alt={ind.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale-[40%] scale-105 group-hover:scale-100 transition-transform duration-[1s]" />
                  </div>
                  
                  {/* Data Body */}
                  <div className="p-8 flex flex-col flex-1 bg-white relative transition-colors duration-500 group-hover:bg-brand-teal/[0.02]">
                     <div className="absolute top-0 right-8 -translate-y-1/2 w-10 h-10 bg-brand-navy flex items-center justify-center border-4 border-white">
                        <ArrowUpRight className="w-4 h-4 text-brand-teal group-hover:rotate-45 transition-transform" />
                     </div>
                     <h2 className="font-display font-black text-2xl text-brand-navy uppercase tracking-wider mb-3">{ind.name}</h2>
                     <p className="font-mono text-[10px] text-brand-steel leading-relaxed tracking-widest">{ind.desc}</p>
                  </div>
              </motion.div>
            </Link>
         ))}
       </div>

    </div>
  )
}
