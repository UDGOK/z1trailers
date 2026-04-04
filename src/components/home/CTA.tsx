"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-brand-gold py-32 relative overflow-hidden flex flex-col items-center justify-center text-center px-10">
      {/* Dynamic tech overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none mix-blend-overlay" />
      
      <div className="relative z-10 max-w-3xl">
        <h2 className="font-display font-black text-5xl md:text-7xl text-brand-navy uppercase tracking-tighter leading-none mb-6">
          Secure Your <br/> Perimeter Today.
        </h2>
        <p className="font-mono text-sm text-brand-navy/80 font-bold uppercase tracking-widest mb-10">
          Deploy an elite surveillance system in under 15 minutes. Select your required hardware tier or contact our tactical division for a custom matrix.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <Link href="/get-a-quote" className="w-full sm:w-auto px-12 py-5 bg-brand-navy hover:bg-brand-teal text-white font-display font-black uppercase tracking-[0.2em] text-sm transition-colors flex items-center justify-center group">
             <span>Request A Quote</span>
             <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
          </Link>
          <Link href="/security-trailers" className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-brand-navy text-brand-navy font-display font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-navy hover:text-white transition-colors">
             View Hardware
          </Link>
        </div>
        
        <p className="font-mono text-xs text-brand-navy/60 font-bold uppercase tracking-widest mt-6">
          Or Call Core Command: <a href="tel:9185203823" className="text-brand-navy hover:text-white transition-colors underline decoration-brand-navy/30 underline-offset-4 ml-2">(918) 520-3823</a>
        </p>
      </div>
    </section>
  );
}
