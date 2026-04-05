"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Target, Zap, ShieldAlert, Check, MapPin, Activity } from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      num: "01", 
      title: "Target Identification", 
      desc: "Select the optimal surveillance hardware based on your perimeter's specific threat vectors and layout.",
      icon: Target,
      visual: () => (
         <div className="w-full h-full relative bg-[#0a111a] border border-white/5 flex items-center justify-center overflow-hidden overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,154,170,0.15)_0%,transparent_70%)]" />
            <motion.div 
               className="absolute w-full h-[2px] bg-brand-teal/50 shadow-[0_0_15px_rgba(27,154,170,0.8)]"
               animate={{ top: ["0%", "100%", "0%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10 w-48 h-48 border border-brand-teal/20 rounded-full flex flex-col items-center justify-center">
               <Target className="w-12 h-12 text-brand-teal animate-pulse mb-3" strokeWidth={1} />
               <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em]">Sector Scanning</p>
               {/* Radar Sweeper */}
               <motion.div 
                 className="absolute inset-0 border-r-2 border-brand-teal rounded-full origin-center"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-teal/20 rounded-full origin-center"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               />
            </div>
         </div>
      )
    },
    { 
      num: "02", 
      title: "Rapid Deployment", 
      desc: "Our tactical team delivers and initializes your units in under 15 minutes. 100% autonomous solar power.",
      icon: Zap,
      visual: () => (
         <div className="w-full h-full relative bg-[#0a111a] border border-white/5 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
               <motion.div 
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-brand-navy border border-brand-teal/50 rounded-lg shadow-[0_0_30px_rgba(27,154,170,0.3)] flex items-center justify-center mb-6 relative"
               >
                  <MapPin className="w-10 h-10 text-brand-teal relative z-10" strokeWidth={1.5} />
                  {/* Solar charging indicator */}
                  <motion.div 
                     className="absolute -right-3 -top-3 bg-brand-gold w-6 h-6 rounded-full flex items-center justify-center"
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                  >
                     <Zap className="w-3 h-3 text-black" />
                  </motion.div>
               </motion.div>

               <div className="flex space-x-2">
                  {[0,1,2,3,4].map((i) => (
                    <motion.div 
                       key={i}
                       className="w-2 h-1 bg-green-500 rounded-full"
                       animate={{ opacity: [0.2, 1, 0.2] }}
                       transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  ))}
               </div>
               <p className="font-mono text-[10px] text-brand-steel mt-4 uppercase tracking-[0.3em]">Asset Deployed</p>
            </div>
         </div>
      )
    },
    { 
      num: "03", 
      title: "Command Oversight", 
      desc: "Your site goes live on our secure monitoring grid. AI algorithms immediately begin filtering threats from noise.",
      icon: ShieldAlert,
      visual: () => (
         <div className="w-full h-full relative bg-[#0a111a] border border-white/5 flex items-center justify-center overflow-hidden p-8">
            <div className="w-full max-w-md bg-black/50 border border-white/10 rounded-lg p-6 shadow-2xl">
               <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-3">
                     <Activity className="w-4 h-4 text-green-500" />
                     <span className="font-mono text-[10px] text-white uppercase tracking-widest">Global Dashboard</span>
                  </div>
                  <span className="px-2 py-1 bg-red-500/10 text-red-500 font-mono text-[8px] uppercase tracking-widest border border-red-500/20 animate-pulse">Live</span>
               </div>
               
               <div className="space-y-4">
                  {[1,2,3].map((i) => (
                    <motion.div 
                       key={i}
                       initial={{ x: -20, opacity: 0 }}
                       animate={{ x: 0, opacity: 1 }}
                       transition={{ duration: 0.5, delay: i * 0.3 }}
                       className="flex justify-between items-center bg-white/5 p-3 rounded"
                    >
                       <div className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-brand-teal" />
                          <div>
                             <p className="font-display font-medium text-xs text-white uppercase tracking-wider">Sector {i} Clear</p>
                             <p className="font-mono text-[8px] text-slate-400">AI Threat Filtering Active</p>
                          </div>
                       </div>
                       <span className="font-mono text-[8px] text-brand-steel">{new Date().toISOString().split('T')[1].slice(0,5)}</span>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      )
    },
  ];

  // Auto-advance logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000); // 6 seconds per step

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="bg-[#05080c] py-32 relative overflow-hidden border-b border-brand-teal/20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
        
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end md:justify-between max-w-5xl">
           <div>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center justify-center md:justify-start">
                 <span className="w-2 h-2 bg-brand-teal animate-pulse mr-3" /> Operational Architecture
              </p>
              <h2 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none">
                Deployment <span className="text-brand-steel">Protocol.</span>
              </h2>
           </div>
           <p className="font-mono text-xs text-slate-400 tracking-widest leading-loose uppercase mt-6 md:mt-0 max-w-sm">
             Select a phase below to observe the intelligence infrastructure initialization sequence.
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch h-auto lg:h-[600px]">
           
           {/* Left Sidebar - Interactive Selectors */}
           <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-4">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div 
                     key={step.num}
                     onClick={() => setActiveStep(idx)}
                     className={`
                        relative p-6 md:p-8 border cursor-pointer overflow-hidden transition-all duration-500 group
                        ${isActive ? 'bg-brand-teal/10 border-brand-teal bg-white/[0.02]' : 'bg-transparent border-white/10 hover:border-white/30'}
                     `}
                  >
                     {/* Progress bar line for active step */}
                     {isActive && (
                        <motion.div 
                          className="absolute bottom-0 left-0 h-1 bg-brand-teal z-20"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                        />
                     )}

                     <div className="flex items-start gap-6 relative z-10">
                        <div className={`mt-1 font-mono text-sm uppercase tracking-widest font-bold transition-colors duration-300 ${isActive ? 'text-brand-teal' : 'text-slate-500 group-hover:text-slate-300'}`}>
                           {step.num}
                        </div>
                        <div>
                           <h3 className={`font-display font-black text-xl md:text-2xl uppercase tracking-wider mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                              {step.title}
                           </h3>
                           <AnimatePresence>
                              {isActive && (
                                 <motion.p 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="font-mono text-[10px] md:text-[11px] text-slate-300 tracking-widest leading-loose uppercase"
                                 >
                                    {step.desc}
                                 </motion.p>
                              )}
                           </AnimatePresence>
                        </div>
                     </div>
                  </div>
                );
              })}
           </div>

           {/* Right Side - Dynamic Premium Visuals */}
           <div className="w-full lg:w-7/12 h-[400px] lg:h-full relative border border-white/10 bg-black overflow-hidden shadow-[0_0_50px_rgba(27,154,170,0.05)]">
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-teal/50 m-4 z-20 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-teal/50 m-4 z-20 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                 <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                 >
                    {steps[activeStep].visual()}
                 </motion.div>
              </AnimatePresence>
           </div>

        </div>

      </div>
    </section>
  );
}
