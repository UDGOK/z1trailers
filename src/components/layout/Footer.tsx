"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-teal/20 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-teal text-brand-navy flex items-center justify-center font-display font-black text-xl">Z1</div>
                <span className="font-display font-black text-xl text-white uppercase tracking-[0.2em]">Trailers</span>
              </div>
            </Link>
            <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-relaxed mb-8">
              Advanced mobile intelligence.<br/>Tactical surveillance endpoints.<br/>Zero infrastructure required.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-teal hover:text-brand-teal text-white/50 transition-all"><Mail className="w-4 h-4" /></Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 hover:border-brand-teal hover:text-brand-teal text-white/50 transition-all"><MapPin className="w-4 h-4" /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-black text-white text-xs uppercase tracking-[0.2em] mb-6">Products</h4>
            <ul className="space-y-4">
              {[
                { name: 'Z1 Scout', href: '/security-trailers/z1-scout' },
                { name: 'Z1 Guardian', href: '/security-trailers/z1-guardian' },
                { name: 'Z1 Apex', href: '/security-trailers/z1-apex' },
                { name: 'Z1 Command', href: '/security-trailers/z1-command' }
              ].map((item) => (
                <li key={item.name}><Link href={item.href} className="font-mono text-[10px] uppercase text-white/60 hover:text-brand-teal tracking-widest transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-white text-xs uppercase tracking-[0.2em] mb-6">Industries</h4>
            <ul className="space-y-4">
              {[
                { name: 'Construction Sites', href: '/industries/construction-sites' },
                { name: 'Parking Management', href: '/industries/parking-lots' },
                { name: 'Event Security', href: '/industries/events' },
                { name: 'Oil & Gas Logistics', href: '/industries/oil-gas' },
                { name: 'Law Enforcement', href: '/industries/law-enforcement' }
              ].map((item) => (
                <li key={item.name}><Link href={item.href} className="font-mono text-[10px] uppercase text-white/60 hover:text-brand-teal tracking-widest transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-display font-black text-white text-xs uppercase tracking-[0.2em] mb-6">HQ Operations</h4>
             <p className="font-mono text-[10px] text-white/60 uppercase tracking-widest leading-relaxed mb-4">
               1518 Paloma St<br/>Los Angeles, CA 90021<br/>UNITED STATES
             </p>
             <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-6 border-l-2 border-brand-teal pl-3">
               + Branch: TULSA, OKLAHOMA<br/>+ Branch: HOUSTON, TEXAS
             </p>
             <a href="tel:9492489748" className="block font-display font-black text-white hover:text-brand-teal transition-colors tracking-widest mb-2">
               (949) 248-9748
             </a>
             <a href="tel:9185203823" className="block font-display font-black text-white hover:text-brand-teal transition-colors tracking-widest mb-6">
               (918) 520-3823
             </a>
             <Link href="/get-a-quote" className="inline-flex items-center space-x-2 text-brand-teal font-display font-black text-xs uppercase tracking-[0.2em] group mt-2">
               <span>Initialize Contact</span>
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
             </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
           <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
             &copy; {new Date().getFullYear()} Z1 Trailers LLC. All tactical operations reserved.
           </p>
           <div className="flex space-x-6 mt-4 md:mt-0">
             <Link href="/privacy" className="font-mono text-[9px] text-slate-400 hover:text-white uppercase tracking-widest">Privacy Protocol</Link>
             <Link href="/terms" className="font-mono text-[9px] text-slate-400 hover:text-white uppercase tracking-widest">Terms of Service</Link>
           </div>
        </div>
      </div>
    </footer>
  );
}
