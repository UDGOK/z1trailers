"use strict";

import Link from "next/link";
import { Shield, Zap, Clock } from "lucide-react";
import SocialProof from "@/components/home/SocialProof";
import ProductsPreview from "@/components/home/ProductsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import AIDetectionsGrid from "@/components/shared/AIDetectionsGrid";

export default function Home() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-brand-ice pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col items-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />
        
        {/* Abstract glow */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-10 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[55%] flex flex-col items-start pr-8">
            <div className="inline-flex items-center space-x-3 mb-10 border border-brand-teal/30 bg-brand-teal/5 px-4 py-2">
              <span className="w-2 h-2 bg-brand-teal animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-brand-navy">Defense Grade Hardware System</span>
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-brand-navy uppercase mb-8">
              Autonomy <br/>
              <span className="text-brand-teal">By Design.</span>
            </h1>
            
            <p className="font-mono text-sm tracking-widest leading-loose text-slate-300 uppercase max-w-xl mb-12 font-medium">
              We deploy solar-powered, AI-equipped surveillance trailers across the Mid-South in under 15 minutes. Pure tactical advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Link
                href="/get-a-quote"
                className="relative group overflow-hidden bg-brand-navy h-16 px-12 flex items-center justify-center border border-transparent hover:border-brand-teal transition-colors"
              >
                <div className="absolute inset-0 w-0 bg-brand-teal transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 font-display font-black text-white uppercase tracking-[0.2em] text-sm">Deploy Hardware</span>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-white/20 z-10" />
              </Link>
              
              <Link href="/security-trailers" className="font-mono text-[10px] font-bold leading-6 text-brand-navy uppercase tracking-widest flex items-center hover:text-brand-teal transition-colors px-4">
                [ Calculate Specifications ]
              </Link>
            </div>
          </div>
          
          <div className="lg:w-[45%] w-full mt-24 lg:mt-0 relative perspective-1000">
             {/* 3D Dashboard representation */}
             <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
               {/* Underglow */}
               <div className="absolute inset-10 bg-brand-teal/20 blur-[60px] rounded-full z-0 group-hover:bg-brand-teal/30 transition-colors duration-700" />
               
               {/* 3D Card */}
               <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl border border-white shadow-[0_40px_80px_-20px_rgba(13,27,42,0.15)] overflow-hidden transform transition-transform duration-700 rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 p-8 flex flex-col z-10 border-l-brand-teal/30">
                 
                 <div className="flex items-center justify-between mb-8 border-b border-brand-mist/50 pb-4">
                    <p className="font-mono text-[10px] text-brand-steel uppercase tracking-[0.2em]">Live Telemetry Feed</p>
                    <span className="px-2 py-1 bg-green-500/10 text-green-600 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center border border-green-500/20">
                      <span className="w-1.5 h-1.5 bg-green-500 mr-2 shadow-[0_0_5px_rgba(34,197,94,1)] rounded-full animate-pulse "/> Secure
                    </span>
                 </div>

                 <div className="grid grid-cols-2 gap-4 mb-8 flex-1">
                    <div className="bg-brand-ice/50 border border-brand-mist/50 p-4 flex flex-col justify-between">
                       <Shield className="w-5 h-5 text-brand-teal mb-4"/>
                       <div>
                         <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Defense Array</p>
                         <p className="font-display font-black text-xl text-brand-navy tracking-tight">ARMED</p>
                       </div>
                    </div>
                    <div className="bg-brand-ice/50 border border-brand-mist/50 p-4 flex flex-col justify-between">
                       <Zap className="w-5 h-5 text-brand-gold mb-4"/>
                       <div>
                         <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Power Output</p>
                         <p className="font-display font-black text-xl text-brand-navy tracking-tight">8.4 kW</p>
                       </div>
                    </div>
                 </div>

                 <div className="h-24 bg-brand-navy relative overflow-hidden flex items-end p-4 border border-brand-navy">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=600&q=80')] opacity-50 mix-blend-luminosity scale-110 object-cover" />
                    <div className="absolute inset-0 bg-brand-navy/60" />
                    <p className="font-mono text-[9px] text-white uppercase tracking-[0.3em] relative z-10 flex items-center">
                       <Clock className="w-3 h-3 text-brand-teal mr-2" /> Sector 4 Optics
                    </p>
                 </div>

               </div>
               
               {/* Tech crosshairs */}
               <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-teal/50 z-20 transform translate-x-4 -translate-y-4" />
               <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-teal/50 z-20 transform -translate-x-4 translate-y-4" />
             </div>
          </div>
        </div>
      </div>
      
      <SocialProof />
      <ProductsPreview />
      <AIDetectionsGrid />
      <HowItWorks />
      <IndustriesGrid />
      <FAQ />
      <CTA />
    </>
  );
}
