"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { num: "01", title: "Target Identification", desc: "Select the optimal surveillance hardware based on your perimeter's specific threat vectors and layout." },
    { num: "02", title: "Rapid Deployment", desc: "Our tactical team delivers and initializes your units in under 15 minutes. 100% autonomous solar power." },
    { num: "03", title: "Command Oversight", desc: "Your site goes live on our secure monitoring grid. AI algorithms immediately begin filtering threats from noise." },
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden border-b border-brand-mist/50">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Operational Architecture</p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-navy uppercase tracking-[0.1em] leading-none">
            Deployment Protocol
          </h2>
        </div>

        <div className="relative">
           {/* Horizontal timeline track for Desktop */}
           <div className="hidden md:block absolute top-[50%] left-0 w-full h-px bg-brand-mist -translate-y-1/2 z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
             {steps.map((step, idx) => (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                   {/* Step Number Badge */}
                   <div className="w-16 h-16 bg-brand-navy text-white flex items-center justify-center font-display font-black text-2xl border-4 border-white shadow-[0_0_0_1px_rgba(238,244,247,1)] rounded-full mb-8 relative group cursor-default">
                     <span className="relative z-10 group-hover:text-brand-teal transition-colors">{step.num}</span>
                     <div className="absolute inset-0 bg-brand-teal/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   
                   <h3 className="font-display font-black text-xl text-brand-navy uppercase tracking-[0.1em] mb-4">{step.title}</h3>
                   <p className="font-mono text-[11px] text-brand-steel tracking-widest leading-relaxed max-w-xs">{step.desc}</p>
                </motion.div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
}
