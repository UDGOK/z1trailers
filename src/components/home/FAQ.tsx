"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  { question: "How fast can a unit be deployed?", answer: "Our tactical teams can deliver, position, and initialize a Z1 trailer on your site in under 15 minutes. It connects to our central AI network immediately." },
  { question: "Do these require external power or internet?", answer: "No. All models are 100% autonomous. They run on vast solar arrays with high-capacity battery reserves (5 to 20+ days) and transmit data via 4G/5G or StarLink satellite." },
  { question: "Can I rent a trailer, or do I have to buy?", answer: "We offer both Capital Expenditure (CapEx) purchase plans and OpEx monthly rental agreements engineered to fit the operational cycles of your specific project." },
  { question: "Who monitors the cameras?", answer: "Our trailers use edge-AI computing to filter false alarms. When a legitimate threat occurs, it triggers our elite UL-listed monitoring partners to initiate real-time visual verification, active deterrence, and dispatch authorities if necessary." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-ice py-32 border-t border-brand-mist relative">
       <div className="max-w-4xl mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-4xl text-brand-navy uppercase tracking-[0.1em] mb-4">Operational Briefing</h2>
            <p className="font-mono text-xs text-brand-steel tracking-widest uppercase">Frequently Asked Questions</p>
          </div>

          <div className="space-y-4">
             {faqs.map((faq, idx) => {
               const isOpen = openIndex === idx;
               return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className={cn(
                     "border transition-colors duration-300",
                     isOpen ? "border-brand-teal bg-white" : "border-brand-mist/50 bg-brand-mist/10 hover:border-brand-teal/50 hover:bg-white"
                   )}
                 >
                   <button 
                     onClick={() => setOpenIndex(isOpen ? null : idx)}
                     className="w-full flex items-center justify-between p-6 text-left"
                   >
                      <span className={cn("font-display font-bold text-sm uppercase tracking-[0.15em] transition-colors", isOpen ? "text-brand-teal" : "text-brand-navy")}>{faq.question}</span>
                      <ChevronDown className={cn("w-5 h-5 text-brand-steel transition-transform duration-500", isOpen && "rotate-180 text-brand-teal")} />
                   </button>
                   <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <div className="p-6 pt-0 border-t border-brand-mist/30 mt-2">
                              <p className="font-mono text-xs text-brand-steel leading-loose tracking-wide">{faq.answer}</p>
                           </div>
                        </motion.div>
                      )}
                   </AnimatePresence>
                 </motion.div>
               )
             })}
          </div>
       </div>
    </section>
  );
}
