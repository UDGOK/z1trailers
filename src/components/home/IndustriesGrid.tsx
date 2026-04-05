"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function IndustriesGrid() {
  const industries = [
    { 
      title: "Construction & Development", 
      desc: "Protecting high-value materials and heavy machinery from organized theft and material extraction.", 
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop", 
      colSpan: "md:col-span-2 lg:col-span-2", 
      rowSpan: "md:row-span-2 lg:row-span-2" 
    },
    { 
      title: "Auto Dealerships", 
      desc: "Perimeter lockdown preventing catalytic converter and high-inventory theft.", 
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop", 
      colSpan: "md:col-span-1 lg:col-span-1", 
      rowSpan: "md:row-span-1 lg:row-span-1" 
    },
    { 
      title: "Law Enforcement", 
      desc: "Force-multiplying municipal surveillance for active high-crime sector coverage.", 
      img: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?q=80&w=1000&auto=format&fit=crop", 
      colSpan: "md:col-span-1 lg:col-span-1", 
      rowSpan: "md:row-span-1 lg:row-span-1" 
    },
    { 
      title: "Oil, Gas & Energy", 
      desc: "Securing remote, completely off-grid critical infrastructure sites natively.", 
      img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", 
      colSpan: "md:col-span-1 lg:col-span-1", 
      rowSpan: "md:row-span-1 lg:row-span-1" 
    },
    { 
      title: "Retail & Commercial", 
      desc: "Proactive deterrence for parking lot perimeters and storefront security.", 
      img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop", 
      colSpan: "md:col-span-1 lg:col-span-2", 
      rowSpan: "md:row-span-1 lg:row-span-1" 
    },
    { 
      title: "Events & Festivals", 
      desc: "Rapid deployment overwatch for crowd telemetry and ticketing access gates.", 
      img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop", 
      colSpan: "md:col-span-1 lg:col-span-1", 
      rowSpan: "md:row-span-1 lg:row-span-1" 
    },
  ];

  return (
    <section className="bg-[#f8fbfd] py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Light Premium Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#1b9aaa 1px, transparent 1px), linear-gradient(90deg, #1b9aaa 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl bg-white/60 backdrop-blur-md p-6 border-l-4 border-brand-teal shadow-sm">
             <p className="font-mono text-xs text-brand-teal uppercase tracking-[0.3em] font-black mb-2 flex items-center">
               <span className="w-2 h-2 bg-brand-teal mr-3" /> Strategic Deployment Sectors
             </p>
             <h2 className="font-display font-black text-5xl md:text-7xl text-[#0a1628] uppercase tracking-tighter leading-[0.9]">
               Sector <span className="text-brand-teal text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-blue-600">Dominance</span>
             </h2>
             <p className="mt-4 font-mono text-xs text-slate-500 uppercase tracking-widest leading-loose">
               Tactical overwatch engineered for complex environments. Our hardware actively defends billions of dollars in vulnerable physical assets across the nation.
             </p>
          </div>
          <Link href="/industries" className="hidden md:inline-flex mt-6 md:mt-0 items-center space-x-3 bg-[#0a1628] text-white font-mono text-[10px] uppercase tracking-widest px-8 py-4 hover:bg-brand-teal transition-all duration-300 shadow-xl hover:shadow-brand-teal/20 group">
            <span className="font-bold">View All 15+ Sectors</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Bento Box UI */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-6">
          {industries.map((ind, idx) => (
             <motion.div
               key={ind.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
               className={`group relative overflow-hidden bg-[#0a1628] rounded-xl shadow-xl ${ind.colSpan} ${ind.rowSpan} cursor-pointer`}
             >
                {/* Image & Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={ind.img} 
                    alt={ind.title} 
                    className="w-full h-full object-cover scale-[1.03] group-hover:scale-110 transition-transform duration-[2s] ease-out opacity-80 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent group-hover:from-brand-teal/90 group-hover:to-[#0a1628]/40 transition-colors duration-500" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10 flex flex-col justify-end h-full">
                   <div className="self-end opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 mb-auto">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <ArrowUpRight className="w-6 h-6" strokeWidth={2.5}/>
                     </div>
                   </div>
                   
                   <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                     <h3 className="font-display font-black text-2xl lg:text-3xl text-white uppercase tracking-wider mb-2 drop-shadow-md">
                       {ind.title}
                     </h3>
                     <div className="h-[2px] w-12 bg-brand-teal mb-4 group-hover:w-full transition-all duration-700 ease-out" />
                     
                     <p className="font-mono text-[10px] text-brand-ice uppercase tracking-widest leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                       {ind.desc}
                     </p>
                   </div>
                </div>

                {/* Tactical Frame Elements */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/30 group-hover:border-white transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30 group-hover:border-white transition-colors duration-500 z-20 pointer-events-none" />
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
