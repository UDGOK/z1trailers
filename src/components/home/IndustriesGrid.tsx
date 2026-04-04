"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IndustriesGrid() {
  const industries = [
    { title: "Construction Sites", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { title: "Parking Lots", img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=800", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "Events & Festivals", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "Oil & Gas", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { title: "Auto Dealerships", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800", colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
  ];

  return (
    <section className="bg-brand-navy py-32 px-10 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Strategic Applications</p>
             <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tight leading-none">
               Sector Dominance
             </h2>
          </div>
          <Link href="/industries" className="hidden md:inline-flex items-center space-x-2 font-mono text-[10px] text-brand-teal uppercase tracking-widest border border-brand-teal/30 hover:border-brand-teal hover:bg-brand-teal/10 px-6 py-3 transition-colors">
            <span>View All Sectors</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          {industries.map((ind, idx) => (
             <motion.div
               key={ind.title}
               initial={{ opacity: 0, scale: 0.98 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className={`group relative overflow-hidden bg-brand-ice/5 ${ind.colSpan} ${ind.rowSpan} border border-brand-teal/10 hover:border-brand-teal/50 transition-colors cursor-pointer`}
             >
                <div className="absolute inset-0 bg-brand-navy/60 z-10 transition-opacity duration-700 group-hover:opacity-30 group-hover:bg-brand-teal/10 mix-blend-multiply" />
                <img src={ind.img} alt={ind.title} className="w-full h-full object-cover grayscale-[40%] scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out" />
                
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                   <div className="self-end opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                     <div className="w-10 h-10 bg-brand-teal flex items-center justify-center text-brand-navy">
                        <ArrowUpRight className="w-5 h-5" strokeWidth={2.5}/>
                     </div>
                   </div>
                   <div>
                     <p className="font-mono text-[9px] bg-black/50 backdrop-blur-md text-brand-teal uppercase tracking-[0.3em] px-2 py-1 inline-block mb-2 border border-brand-teal/20">TARGET VECTOR</p>
                     <h3 className="font-display font-black text-2xl lg:text-3xl text-white uppercase tracking-wider">{ind.title}</h3>
                   </div>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
