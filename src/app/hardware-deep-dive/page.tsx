import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Cpu, Shield, Sun, Zap, Crosshair, Camera, Volume2, Radio, Battery, Maximize, Activity } from 'lucide-react';
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'Hardware Deep-Dive | Tactical Surveillance Components',
  description: 'Technical specifications for Z1 Trailers proprietary hardware suite, including 4K AI optics, thermal payloads, and LiFePO4 energy cores.',
};

const components = [
  {
    title: "4K AI Neural Optics",
    desc: "Ultra-high definition imaging with integrated edge-computing for human and vehicle classification in sub-second cycles.",
    specs: ["3840 x 2160 Resolution", "H.265+ Compression", "0.001 Lux StarLight", "Dual-Lens Panoramic"],
    icon: Camera,
    color: "teal"
  },
  {
    title: "Thermal Matrix Payload",
    desc: "Military-grade heat signature tracking capable of identifying biological targets through total darkness, fog, and smoke.",
    specs: ["640 x 512 Thermal Res", "VOx Uncooled Sensor", "Temperature Exception Alert", "Long-Range Detection"],
    icon: Target,
    color: "red"
  },
  {
    title: "120dB Bi-Directional Horn",
    desc: "Ultra-high output IP-based loudspeaker for autonomous acoustic deterrence and live talkdown from Command Center.",
    specs: ["120dB Achievement", "Weatherproof IP66", "Low-Latency VoIP", "Automated Deterrence Clips"],
    icon: Volume2,
    color: "gold"
  },
  {
    title: "LiFePO4 Energy Core",
    desc: "Extreme-density Lithium Iron Phosphate battery arrays providing up to 20 days of autonomy with zero solar input.",
    specs: ["10,000+ Cycle Life", "Thermal Stabilization", "BMS Logic Control", "Rapid-Recharge Ready"],
    icon: Battery,
    color: "teal"
  },
  {
    title: "Active Deterrence Strobes",
    desc: "High-intensity Red/Blue visual deterrents that trigger autonomously upon perimeter breach verification.",
    specs: ["2,000 Lumen Output", "180° Visibility", "Programmable Patterns", "RSC Trigger Integration"],
    icon: AlertTriangle,
    color: "red"
  },
  {
    title: "StarLink Sat-Link",
    desc: "Global connectivity for remote deployments where cellular towers are non-existent or compromised.",
    specs: ["Global coverage", "200Mbps+ Latency", "Encrypted Tunneling", "Dual-WAN Failover"],
    icon: Radio,
    color: "blue"
  }
];

export default function HardwareDeepDive() {
  return (
    <div className="bg-[#05080c] min-h-screen text-white selection:bg-brand-teal selection:text-white pb-32">
      
      {/* HUD Header */}
      <div className="pt-32 pb-16 px-6 md:px-10 border-b border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div>
               <Link href="/security-trailers" className="group inline-flex items-center space-x-2 text-brand-teal font-mono text-[10px] uppercase tracking-widest mb-8 hover:text-white transition-colors">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                  <span>[ BACK_TO_PRODUCTS ]</span>
               </Link>
               <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-4">
                  Hardware <br/><span className="text-white/20">Deep-Dive.</span>
               </h1>
               <p className="font-mono text-xs text-brand-steel uppercase tracking-[0.3em] font-bold">
                  Technical Specifications // Component Hierarchy
               </p>
            </div>
            <div className="hidden lg:block p-6 border border-brand-teal/30 bg-brand-teal/5 max-w-sm">
               <p className="font-mono text-[10px] text-brand-teal/80 leading-relaxed uppercase tracking-widest">
                  [ ALERT: PROPRIETARY SCHEMATICS. ALL HARDWARE INTEGRATES NATIVELY WITH Z1 EDGE NEURAL ENGINES. ]
               </p>
            </div>
         </div>
      </div>

      {/* Main Schematic Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5 shadow-2xl">
            {components.map((comp, idx) => (
               <div key={idx} className="bg-[#05080c] p-12 md:p-16 relative group overflow-hidden border border-white/5">
                  {/* Background Accents */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 blur-[80px] group-hover:bg-brand-teal/10 transition-all" />
                  <div className={cn(
                    "absolute top-0 left-0 w-1 h-0 transition-all duration-700 bg-brand-teal group-hover:h-full",
                    comp.color === 'red' && "bg-red-500",
                    comp.color === 'gold' && "bg-brand-gold",
                    comp.color === 'blue' && "bg-blue-500"
                  )} />

                  <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-start justify-between mb-12">
                        <div className={cn(
                          "w-16 h-16 border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-brand-teal/50 transition-all",
                          comp.color === 'red' && "group-hover:border-red-500/50",
                          comp.color === 'gold' && "group-hover:border-brand-gold/50"
                        )}>
                           <comp.icon className={cn(
                             "w-8 h-8 text-white/30 group-hover:text-brand-teal group-hover:scale-110 transition-all duration-500",
                             comp.color === 'red' && "group-hover:text-red-500",
                             comp.color === 'gold' && "group-hover:text-brand-gold"
                           )} strokeWidth={1} />
                        </div>
                        <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">0{idx + 1} // TECH_PAYLOAD</span>
                     </div>

                     <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase tracking-wider mb-6 group-hover:text-brand-teal transition-colors">
                        {comp.title}
                     </h2>

                     <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-loose mb-12 max-w-sm">
                        {comp.desc}
                     </p>

                     <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                        {comp.specs.map((spec, sidx) => (
                           <div key={sidx} className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-brand-teal/30 rounded-full" />
                              <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest leading-none">{spec}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-20 transition-opacity">
                     <Maximize className="w-12 h-12 text-white" strokeWidth={0.5} />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
         <Shield className="w-16 h-16 text-brand-teal mx-auto mb-8 animate-pulse" strokeWidth={1} />
         <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-widest mb-6">
            Ready to <span className="text-brand-teal">Configure?</span>
         </h2>
         <p className="font-mono text-xs text-slate-400 tracking-widest uppercase leading-loose mb-12">
            Z1 Hardware is fully modular. Request a custom briefing to see how our tech payload aligns with your specific operational requirements.
         </p>
         <Link href="/get-a-quote" className="inline-flex items-center space-x-4 bg-brand-teal text-brand-navy px-12 py-5 font-display font-black text-sm uppercase tracking-[0.25em] hover:bg-white transition-colors group">
            <span>START CONFIGURATION</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
         </Link>
      </section>

    </div>
  );
}

function Target(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function AlertTriangle(props: any) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
