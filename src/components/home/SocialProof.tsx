"use client";

import { motion } from "framer-motion";

export default function SocialProof() {
  const stats = [
    { value: "1,200+", label: "UNITS DEPLOYED" },
    { value: "0", label: "SOLAR FAILURES" },
    { value: "99.9%", label: "NETWORK UPTIME" },
    { value: "$2.4B", label: "ASSETS SECURED" },
  ];

  return (
    <section className="bg-brand-navy py-12 border-y border-brand-teal/20 relative overflow-hidden">
      {/* Moving tech lines background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <h5 className="font-display font-black text-3xl md:text-5xl text-white tracking-tighter mb-2">{stat.value}</h5>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.25em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
