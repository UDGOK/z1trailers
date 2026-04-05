"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft,
  Shield, 
  ShieldCheck, 
  Zap, 
  Lock, 
  Crosshair, 
  Cpu, 
  Target, 
  Activity, 
  MapPin, 
  Sun,
  Wifi,
  Database,
  Globe,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types & Constants ---
type Step = 1 | 2 | 3 | 4 | 5;
type Sector = 'construction' | 'parking' | 'events' | 'oil-gas' | 'law-enforcement' | 'retail';
type Mode = 'rent' | 'buy';

const SECTORS = [
  { id: 'construction', name: 'Construction Sites', icon: Zap, desc: 'Critical infrastructure & asset protection' },
  { id: 'parking', name: 'Parking Management', icon: Target, desc: 'Vehicle safety & liability reduction' },
  { id: 'events', name: 'Event Security', icon: Activity, desc: 'Crowd control & perimeter awareness' },
  { id: 'oil-gas', name: 'Oil & Gas Logistics', icon: Database, desc: 'Remote site & refinery surveillance' },
  { id: 'law-enforcement', name: 'Law Enforcement', icon: Shield, desc: 'Rapid police-assist & municipal oversight' },
  { id: 'retail', name: 'Retail & ORC', icon: Lock, desc: 'High-value inventory & theft deterrence' },
] as const;

const PRODUCTS = [
  { id: 'z1-scout', name: 'Z1 Scout', badge: 'ENTRY', desc: '5-Day Battery // Dual AI Optics' },
  { id: 'z1-guardian', name: 'Z1 Guardian', badge: 'MID', desc: '10-Day Battery // 360° Field of View' },
  { id: 'z1-apex', name: 'Z1 Apex', badge: 'ADV', desc: 'Thermal + LPR Matrix // 15-Day Battery' },
  { id: 'z1-command', name: 'Z1 Command', badge: 'ELITE', desc: 'StarLink Satellite // PTZ Payload' },
] as const;

// --- Sub-components ---

function MissionReadinessIndex({ step }: { step: Step }) {
  const percentage = (step / 5) * 100;
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 px-6 md:px-0">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-1">Mission Readiness Index</p>
          <p className="font-display font-black text-3xl text-brand-navy tracking-widest">{percentage}% COMPLETE</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="font-mono text-[9px] text-brand-steel uppercase tracking-widest">Protocol: Z1-BRIEFING-{new Date().getFullYear()}</p>
          <div className="flex gap-1 mt-2 justify-end">
             {Array.from({ length: 5 }).map((_, i) => (
               <div key={i} className={cn("w-3 h-1 transition-all duration-500", i + 1 <= step ? "bg-brand-teal" : "bg-brand-navy/10")} />
             ))}
          </div>
        </div>
      </div>
      <div className="h-4 bg-white border border-brand-navy/10 relative overflow-hidden">
        <motion.div 
          className="absolute inset-y-0 left-0 bg-brand-teal relative z-10"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Animated data-streaming effect inside progress bar */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </motion.div>
        {/* Tech Grid Background inside bar */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:20px_20px] z-0" />
      </div>
    </div>
  );
}

export default function QuotePage() {
  const [step, setStep] = useState<Step>(1);
  const [sector, setSector] = useState<Sector | null>(null);
  const [mode, setMode] = useState<Mode>('rent');
  const [product, setProduct] = useState<string | null>(null);
  const [customizing, setCustomizing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5) as Step);
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1) as Step);

  if (isSuccess) {
    return (
       <div className="bg-zinc-100 min-h-screen flex items-center justify-center p-6 selection:bg-brand-teal selection:text-white">
          <div className="max-w-2xl text-center">
             <div className="w-24 h-24 rounded-full border-2 border-brand-teal flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(27,154,170,0.15)]">
                <Check className="w-12 h-12 text-brand-teal" strokeWidth={3} />
             </div>
             <h2 className="font-display font-black text-5xl text-brand-navy uppercase tracking-tighter mb-6">Mission Initiated.</h2>
             <div className="mb-10 p-4 border border-brand-teal/20 bg-brand-teal/5 font-mono text-[10px] text-brand-teal uppercase tracking-widest">
               UPLINK ESTABLISHED // FORWARDING BRIEFING TO: YASIR@UDGOK.COM
             </div>
             <p className="font-mono text-sm text-brand-steel uppercase tracking-widest leading-loose mb-12">
               Your deployment parameters have been securely transmitted to the Tactical Command Center. A briefing officer will return a custom hardware configuration within 24 operational hours.
             </p>
             <Link href="/" className="bg-brand-navy text-white px-12 py-5 font-display font-black text-xs uppercase tracking-widest hover:bg-brand-teal transition-colors">
               RETURN TO COMMAND
             </Link>
          </div>
       </div>
    );
  }

  return (    <div className="bg-zinc-100 min-h-screen pt-32 pb-24 relative overflow-hidden text-brand-navy selection:bg-brand-teal selection:text-white">
      {/* 
        SURVEILLANCE HUD BACKGROUND LAYER (LIGHT MODE)
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(27,154,170,0.03)_0%,transparent:70%)]" />
         
         {/* CCTV Scanlines & Aesthetic Texture */}
         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.02)_51%)] bg-[size:100%_4px]" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-[0.05]" />
         
         {/* Vignette Overlay */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_120%)]" />

         {/* Pulsing Radar Scanning Effect */}
         <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-navy/5 rounded-full"
            animate={{ scale: [0.8, 1.2], opacity: [0.2, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
         />
         <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-navy/5 rounded-full"
            animate={{ scale: [0.8, 1.2], opacity: [0.15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeOut", delay: 1 }}
         />
         
         {/* Aesthetic Screen Corners */}
         <div className="absolute top-10 left-10 w-24 h-24 border-t-2 border-l-2 border-brand-navy/10" />
         <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-brand-navy/10" />
         <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-brand-navy/10" />
         <div className="absolute bottom-10 right-10 w-24 h-24 border-b-2 border-r-2 border-brand-navy/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col items-center">
        
        {/* Header HUD Elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6 bg-brand-navy/5 border border-brand-navy/10 px-3 py-1">
             <Activity className="w-4 h-4 text-brand-teal animate-pulse" />
             <span className="font-mono text-[10px] text-brand-steel uppercase tracking-[0.25em] font-bold">Secure Tactical Uplink // V9.4.2</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-4 text-brand-navy">
            Deployment <br/><span className="text-brand-teal">Briefing.</span>
          </h1>
        </div>

        <MissionReadinessIndex step={step} />

        {/* --- MAIN MULTI-STEP ENGINE --- */}
        <div className="w-full max-w-4xl min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SECTOR ORIENTATION */}
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <div className="md:col-span-2 lg:col-span-3 mb-8 bg-white shadow-sm p-6 border-l-4 border-brand-teal">
                   <p className="font-display font-black text-xl uppercase tracking-widest text-brand-navy mb-2">Identify Operational Sector</p>
                   <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">Select the primary environment for deployment to initialize hardware recommendation logic.</p>
                </div>
                {SECTORS.map((s) => (
                  <button 
                    key={s.id}
                    onClick={() => { setSector(s.id as Sector); nextStep(); }}
                    className={cn(
                      "group relative flex flex-col p-8 border bg-white transition-all duration-500 overflow-hidden text-left shadow-sm",
                      sector === s.id ? "border-brand-teal bg-brand-teal/5 shadow-xl ring-1 ring-brand-teal/30" : "border-brand-navy/10 hover:border-brand-teal/40 hover:bg-zinc-50"
                    )}
                  >
                    <div className="relative z-10 mb-6 flex items-center justify-between">
                       <div className={cn(
                         "p-2 border border-brand-navy/5 text-brand-steel group-hover:text-brand-teal group-hover:border-brand-teal transition-all",
                         sector === s.id && "text-brand-teal border-brand-teal"
                       )}>
                          <s.icon className="w-5 h-5" strokeWidth={1.5} />
                       </div>
                       <ArrowRight className="w-4 h-4 text-brand-navy/10 group-hover:text-brand-teal group-hover:-rotate-90 transition-all" />
                    </div>
                    <div className="relative z-10">
                       <p className="font-display font-black uppercase tracking-wider text-brand-navy mb-2">{s.name}</p>
                       <p className="font-mono text-[9px] uppercase tracking-widest text-brand-steel group-hover:text-brand-teal transition-colors leading-relaxed">{s.desc}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {/* STEP 2: ALLOCATION MODE */}
            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col items-center"
              >
                <div className="w-full mb-12 bg-white shadow-sm p-6 border-l-4 border-brand-teal">
                   <p className="font-display font-black text-xl uppercase tracking-widest text-brand-navy mb-2">Define Allocation Protocol</p>
                   <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">Choose between OpEx (Monthly Lease) or CapEx (Hardware Acquisition) for asset deployment.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                   <button 
                     onClick={() => { setMode('rent'); nextStep(); }}
                     className={cn(
                       "group relative p-10 border transition-all duration-500 overflow-hidden text-center bg-white shadow-sm",
                       mode === 'rent' ? "border-brand-teal bg-brand-teal/5 shadow-xl ring-1 ring-brand-teal/30" : "border-brand-navy/10 hover:border-brand-teal/30 hover:bg-zinc-50"
                     )}
                   >
                      <Sun className="w-12 h-12 text-brand-teal mx-auto mb-8 opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                      <h3 className="font-display font-black text-3xl uppercase tracking-widest text-brand-navy mb-4">Monthly Rental</h3>
                      <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest leading-loose mx-auto max-w-xs">Flexible OpEx allocation. All servicing and telemetry costs included in fixed monthly billing.</p>
                      <div className="mt-8 flex justify-center">
                         <span className="font-mono text-[9px] bg-brand-teal/10 border border-brand-teal text-brand-teal px-3 py-1 uppercase tracking-widest">OpEx Optimized</span>
                      </div>
                   </button>
                   <button 
                     onClick={() => { setMode('buy'); nextStep(); }}
                     className={cn(
                       "group relative p-10 border transition-all duration-500 overflow-hidden text-center bg-white shadow-sm",
                       mode === 'buy' ? "border-brand-teal bg-brand-teal/5 shadow-xl ring-1 ring-brand-teal/30" : "border-brand-navy/10 hover:border-brand-teal/30 hover:bg-zinc-50"
                     )}
                   >
                      <Database className="w-12 h-12 text-brand-teal mx-auto mb-8 opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                      <h3 className="font-display font-black text-3xl uppercase tracking-widest text-brand-navy mb-4">Direct Purchase</h3>
                      <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest leading-loose mx-auto max-w-xs">Full CapEx hardware ownership. Section 179 tax deduction eligible. Optimized for permanent site defense.</p>
                      <div className="mt-8 flex justify-center">
                         <span className="font-mono text-[9px] bg-brand-teal/10 border border-brand-teal text-brand-teal px-3 py-1 uppercase tracking-widest">CapEx Optimized</span>
                      </div>
                   </button>
                </div>
                
                <div className="mt-12 flex gap-4">
                  <button onClick={prevStep} className="font-mono text-[10px] bg-brand-navy text-white px-8 py-3 uppercase tracking-widest hover:bg-brand-teal transition-colors flex items-center space-x-2">
                     <ArrowLeft className="w-3 h-3" /> <span>[ BACK ]</span>
                  </button>
                  <button onClick={nextStep} className="font-mono text-[10px] border border-brand-navy text-brand-navy px-8 py-3 uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-colors flex items-center space-x-2">
                     <span>[ NEXT ]</span> <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: ASSET CONFIGURATION */}
            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="md:col-span-2 mb-8 bg-white shadow-sm p-6 border-l-4 border-brand-teal">
                   <p className="font-display font-black text-xl uppercase tracking-widest text-brand-navy mb-2">Asset Allocation Preference</p>
                   <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">Select the target hardware tier for the deployment briefing. (Users may specify custom configurations).</p>
                </div>
                {PRODUCTS.map((p) => (
                  <div 
                    key={p.id}
                    className={cn(
                      "group relative flex flex-col p-8 border bg-white transition-all duration-500 overflow-hidden text-left shadow-sm",
                      product === p.id ? "border-brand-teal bg-brand-teal/5 shadow-xl ring-1 ring-brand-teal/30" : "border-brand-navy/10 hover:border-brand-teal/40 hover:bg-zinc-50"
                    )}
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-14 h-14 shrink-0 border border-brand-navy/5 flex flex-col items-center justify-center bg-zinc-50 group-hover:border-brand-teal/50">
                         <span className="font-display font-black text-base text-brand-navy group-hover:text-brand-teal">Z1</span>
                         <span className="font-mono text-[7px] text-brand-steel uppercase tracking-widest">{p.badge}</span>
                      </div>
                      <div className="relative z-10 w-full">
                         <p className="font-display font-black uppercase tracking-widest text-xl text-brand-navy">{p.name}</p>
                         <p className="font-mono text-[9px] uppercase tracking-widest text-brand-steel group-hover:text-brand-teal transition-colors leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                       <button 
                         onClick={() => { setProduct(p.id); nextStep(); }}
                         className="flex-1 bg-brand-navy text-white font-display font-black text-[10px] uppercase tracking-widest py-3 hover:bg-brand-teal transition-colors"
                       >
                         SELECT
                       </button>
                       <button 
                         onClick={() => { setProduct(p.id); setCustomizing(true); nextStep(); }}
                         className="flex-1 border border-brand-navy/20 text-brand-navy font-display font-black text-[10px] uppercase tracking-widest py-3 hover:border-brand-teal hover:text-brand-teal transition-colors"
                       >
                         CUSTOMIZE
                       </button>
                    </div>
                  </div>
                ))}
                
                <div className="md:col-span-2 flex justify-center mt-12 gap-4">
                   <button onClick={prevStep} className="font-mono text-[10px] bg-brand-navy text-white px-8 py-3 uppercase tracking-widest hover:bg-brand-teal transition-colors flex items-center space-x-2">
                      <ArrowLeft className="w-3 h-3" /> <span>[ BACK ]</span>
                   </button>
                   <button onClick={nextStep} className="font-mono text-[10px] border border-brand-navy text-brand-navy px-8 py-3 uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-colors flex items-center space-x-2">
                      <span>[ NEXT ]</span> <ArrowRight className="w-3 h-3" />
                   </button>
                </div>
              </motion.div>
            )}
            {/* STEP 4: COMMAND LIAISON */}
            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="mb-12 bg-white shadow-sm p-6 border-l-4 border-brand-teal">
                   <p className="font-display font-black text-xl uppercase tracking-widest text-brand-navy mb-2">Protocol Command Liaison</p>
                   <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">Standard identification procedure. All briefing reports dispatched to: <b>YASIR@UDGOK.COM</b></p>
                </div>
                
                <div className="space-y-8 bg-white p-10 border border-brand-navy/5 shadow-2xl relative">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col">
                       <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Command Officer</label>
                       <input type="text" className="bg-zinc-50 border border-brand-navy/10 text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="NAME // RANK" />
                     </div>
                     <div className="flex flex-col">
                       <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Organization</label>
                       <input type="text" className="bg-zinc-50 border border-brand-navy/10 text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="ENTITY" />
                     </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col">
                       <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Contact Point (Email)</label>
                       <input type="email" className="bg-zinc-50 border border-brand-navy/10 text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="UPLINK@ORG.COM" />
                     </div>
                     <div className="flex flex-col">
                       <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Tactical Comms (Phone)</label>
                       <input type="tel" className="bg-zinc-50 border border-brand-navy/10 text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="DIRECT LINE" />
                     </div>
                   </div>

                   {customizing && (
                     <div className="flex flex-col border border-brand-gold bg-brand-gold/5 p-6 shadow-sm">
                        <label className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                           <Cpu className="w-3 h-3" /> Custom Hardware Requirements
                        </label>
                        <textarea rows={3} className="bg-white border border-brand-gold text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none resize-none placeholder:text-brand-gold/40" placeholder="OPTICS, STORAGE, COMMS..."></textarea>
                     </div>
                   )}

                   <div className="flex flex-col">
                      <label className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.2em] mb-2">Target Perimeter / Site Address</label>
                      <input type="text" className="bg-zinc-50 border border-brand-navy/10 text-brand-navy font-mono text-sm px-4 py-3 focus:outline-none focus:border-brand-teal transition-colors" placeholder="LAT/LONG OR ADDRESS" />
                   </div>

                   <div className="flex gap-4">
                      <button onClick={prevStep} className="flex-1 border border-brand-navy text-brand-navy font-display font-black uppercase tracking-[0.2em] text-[10px] py-4 hover:bg-brand-navy hover:text-white transition-all">
                        BACK
                      </button>
                      <button 
                        onClick={() => { setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); nextStep(); }, 2000); }}
                        className="flex-[2] bg-brand-navy text-white font-display font-black uppercase tracking-[0.25em] text-[10px] py-4 hover:bg-brand-teal transition-colors flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                         {isSubmitting ? <Activity className="w-4 h-4 animate-spin text-white" /> : "GENERATE BRIEFING"}
                      </button>
                   </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: FINAL SUMMARY */}
            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-3xl mx-auto"
              >
                 <div className="bg-white p-10 border border-brand-navy/10 shadow-2xl relative">
                    <div className="flex items-center justify-between mb-10 border-b border-brand-navy/5 pb-6">
                       <h2 className="font-display font-black text-3xl uppercase tracking-tighter text-brand-navy">Final Briefing <span className="text-brand-teal">Summary.</span></h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                       <div>
                          <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-3">01 — Target Sector</p>
                          <p className="font-display font-bold text-brand-navy uppercase text-lg tracking-widest">{SECTORS.find(s => s.id === sector)?.name || 'GENERIC'}</p>
                       </div>
                       <div>
                          <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-3">02 — Procurement Mode</p>
                          <p className="font-display font-bold text-brand-navy uppercase text-lg tracking-widest">{mode === 'rent' ? 'MONTHLY DEPLOYMENT' : 'HARDWARE ACQUISITION'}</p>
                       </div>
                       <div>
                          <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-3">03 — Designated Asset</p>
                          <p className="font-display font-bold text-brand-navy uppercase text-lg tracking-widest">{PRODUCTS.find(p => p.id === product)?.name || 'CUSTOM'}{customizing && " (+CUSTOM)"}</p>
                       </div>
                       <div>
                          <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-3">04 — Deployment Liaison</p>
                          <p className="font-display font-bold text-green-600 uppercase text-lg tracking-widest">ESTABLISHED // YASIR@UDGOK.COM</p>
                       </div>
                    </div>
 
                    <div className="flex gap-4">
                       <button onClick={prevStep} className="flex-1 border border-brand-navy text-brand-navy font-display font-black uppercase tracking-[0.2em] text-[10px] py-4 hover:bg-brand-navy hover:text-white transition-all">
                          EDIT BRIEFING
                       </button>
                       <button 
                          onClick={() => setIsSuccess(true)}
                          className="flex-[2] bg-brand-navy text-white font-display font-black uppercase tracking-[0.25em] text-[10px] py-4 hover:bg-brand-teal transition-colors"
                       >
                          INITIALIZE PROTOCOL ALPHA
                       </button>
                    </div>
                 </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* --- GLOBAL TACTICAL SIDEBAR / FOOTER --- */}
        <div className="mt-32 pt-16 border-t border-brand-navy/5 grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
           <div className="flex flex-col border-l border-brand-teal/20 pl-6">
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold mb-2">Encryption</span>
              <span className="font-display font-bold text-sm tracking-widest text-brand-navy">AES-256</span>
           </div>
           <div className="flex flex-col border-l border-brand-teal/20 pl-6">
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold mb-2">Latency</span>
              <span className="font-display font-bold text-sm tracking-widest text-brand-navy">{` < 24H `}</span>
           </div>
           <div className="flex flex-col border-l border-brand-teal/20 pl-6">
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold mb-2">Liaison</span>
              <span className="font-display font-bold text-[10px] tracking-widest text-brand-navy">yasir@udgok.com</span>
           </div>
           <div className="flex flex-col border-l border-brand-teal/20 pl-6">
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold mb-2">Command</span>
              <span className="font-display font-bold text-sm tracking-widest text-brand-navy">918-520-3823</span>
           </div>
        </div>

      </div>
    </div>
  );
}

function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}
