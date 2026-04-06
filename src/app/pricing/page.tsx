import { Metadata } from "next";
import Link from "next/link";
import ConfiguratorTrigger from "@/components/configurator/ConfiguratorTrigger";
import { Shield, Zap, Crosshair, Cpu, MapPin, Target, ChevronRight, Activity, Globe, Check, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Configurations | Mobile Security Trailers | Z1",
  description: "Calculate your exact deployment specifications for Z1 Scout, Guardian, and Apex units. Custom AI and autonomous solar profiles for every sector.",
};

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Z1 Trailers - Security Hardware Configuration & Pricing",
    "description": "Tactical breakdown and pricing configuration matrix for the Z1 Scout, Guardian, Apex, and Command autonomous security endpoints.",
    "isPartOf": {
      "@id": "https://www.z1trailers.com/#organization"
    }
  };

  const tiers = [
    {
      name: "Z1 Scout",
      badge: "ENTRY VECTOR",
      desc: "Compact rapid-deployment baseline for standard physical deterioration zones.",
      icon: Crosshair,
      href: "/security-trailers/z1-scout",
      specs: ["5-Day LiFePO4 Autonomy", "Dual 4MP AI Optics", "18ft Telescopic Mast", "Standard 4G LTE Uplink"],
      color: "border-white/10"
    },
    {
      name: "Z1 Guardian",
      badge: "SECTOR STANDARD",
      desc: "Our high-adoption autonomous anchor with bi-directional acoustic deterrence.",
      icon: Target,
      href: "/security-trailers/z1-guardian",
      specs: ["10-Day LiFePO4 Autonomy", "Quad 4MP (360° FOV)", "24ft Heavy-Duty Mast", "Active 120dB Talkdown"],
      color: "border-brand-teal shadow-[0_0_50px_rgba(27,154,170,0.15)]",
      popular: true
    },
    {
      name: "Z1 Apex",
      badge: "ADVANCED TARGETING",
      desc: "Military-grade optical payload featuring absolute Thermal and LPR integrations.",
      icon: Shield,
      href: "/security-trailers/z1-apex",
      specs: ["15-Day LiFePO4 Autonomy", "Thermal Tracking Matrix", "Automated License Plate Rec", "5G & Radar Integrations"],
      color: "border-white/10"
    }
  ];

  return (
    <div className="bg-[#05080c] min-h-screen text-white font-sans selection:bg-brand-teal selection:text-white pb-24 overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,#05080c_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-32 lg:pt-48 pb-20">
        
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
           <div className="inline-flex items-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1">
              <Activity className="w-4 h-4 text-brand-teal animate-pulse" />
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold">Hardware Configuration Matrix</span>
           </div>
           <h1 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
             Calculate <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-ice">Deployment.</span>
           </h1>
           <p className="font-mono text-sm tracking-[0.2em] leading-loose text-brand-steel uppercase">
             Identify your operational timeline and hardware specifications. Z1 Trailers operate securely on a transparent financial model with zero hidden latency fees or data cap uncharges.
           </p>
        </div>

        {/* TIERS MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32 items-end">
           {tiers.map((tier, idx) => (
             <div key={idx} className={`relative bg-[#0a111a] border ${tier.color} p-10 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500`}>
                
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-teal text-brand-navy px-4 py-1 font-mono text-[9px] uppercase tracking-[0.3em] font-black z-20">
                     Highest Active Deployments
                  </div>
                )}

                <div className="flex items-center justify-between mb-8">
                   <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-teal">
                      <tier.icon className="w-6 h-6" strokeWidth={1.5} />
                   </div>
                   <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">{tier.badge}</span>
                </div>

                <Link href={tier.href} className="group/title inline-block">
                  <h3 className="font-display font-black text-4xl uppercase tracking-widest text-white mb-4 group-hover/title:text-brand-teal transition-colors flex items-center">
                    {tier.name} <ChevronRight className="w-6 h-6 ml-2 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-2 transition-all" />
                  </h3>
                </Link>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-loose mb-10 min-h-[3rem]">
                   {tier.desc}
                </p>

                <div className="space-y-4 mb-12 flex-grow">
                   {tier.specs.map((spec, sIdx) => (
                     <div key={sIdx} className="flex items-start space-x-3">
                        <Check className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                        <span className="font-mono text-[11px] text-slate-300 uppercase tracking-widest leading-relaxed">{spec}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-8 border-t border-white/10">
                   <ConfiguratorTrigger modelName={tier.name} className="w-full flex justify-center border border-brand-teal/50 bg-brand-teal/10 hover:bg-brand-teal hover:text-brand-navy text-brand-teal transition-all px-6 py-4 font-display font-bold text-xs uppercase tracking-[0.2em] group/btn">
                      Calculate Quote <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                   </ConfiguratorTrigger>
                </div>

                {/* Subtle Glitch Decal */}
                <div className="absolute bottom-4 right-4 text-[8px] font-mono text-brand-steel uppercase tracking-[0.3em] opacity-40">
                   {tier.name.split(' ')[1]}_TAC_NODE
                </div>
             </div>
           ))}
        </div>

        {/* ENTERPRISE WARNING BOX */}
        <div className="max-w-4xl mx-auto border border-brand-teal/30 bg-brand-navy border-l-[6px] border-l-brand-teal p-8 md:p-12 relative overflow-hidden group">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
           <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
              <Globe className="w-16 h-16 text-brand-teal shrink-0 group-hover:rotate-90 transition-transform duration-1000" strokeWidth={1} />
              <div>
                 <h4 className="font-display font-black text-2xl md:text-3xl uppercase tracking-widest text-white mb-4">Enterprise Fleet Procurements</h4>
                 <p className="font-mono text-xs text-slate-300 tracking-widest uppercase leading-loose mb-6">
                   Deploying hardware across multiple geographic sectors? Z1 Command requires custom configuration for massive operations and StarLink logic implementations.
                 </p>
                 <div className="flex flex-col sm:flex-row items-center gap-6">
                    <ConfiguratorTrigger className="border border-white/20 hover:border-brand-teal px-8 py-3 font-mono text-xs text-white uppercase tracking-[0.3em] transition-colors shadow-none bg-transparent hover:bg-transparent">
                      Initiate Fleet Quote
                    </ConfiguratorTrigger>
                    <a href="tel:9185203823" className="font-mono text-[10px] text-brand-teal hover:text-white uppercase tracking-[0.3em] font-bold transition-colors">
                      Sales Desk: 918.520.3823
                    </a>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
