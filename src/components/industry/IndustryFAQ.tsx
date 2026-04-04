"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndustryFAQProps {
  faqs: {
    q: string;
    a: string;
  }[];
}

export default function IndustryFAQ({ faqs }: IndustryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-navy border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
            Sector_Intelligence // Intelligence Briefing
          </p>
          <h2 className="font-display font-black text-4xl text-white uppercase tracking-tighter leading-[0.9]">
            Operational <span className="text-white/20">Protocols.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={cn(
                "border transition-all duration-300",
                openIndex === idx ? "border-brand-teal bg-brand-teal/5" : "border-white/5 bg-black/40 hover:border-white/20"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-brand-teal/50 font-black tracking-widest">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span className="font-display font-black text-lg text-white uppercase tracking-widest leading-snug">{faq.q}</span>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-teal transition-transform duration-300", openIndex === idx && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/5 mt-2">
                       <p className="font-mono text-xs text-white/60 leading-relaxed uppercase tracking-widest">
                          {faq.a}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-16 text-center">
           <a href="/get-a-quote" className="inline-flex items-center gap-4 group">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold group-hover:text-brand-teal transition-colors underline underline-offset-8 decoration-brand-teal/30 group-hover:decoration-brand-teal">
                 Strategic Briefing Request // Contact Command
              </span>
              <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
}
