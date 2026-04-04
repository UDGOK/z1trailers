import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin, ChevronDown, Zap, Shield, Target, Activity, Database, Globe, Lock, Network, Webhook, Maximize, Cpu, Battery, Sun, Waves, Wind, ThermometerSnowflake, ThermometerSun } from "lucide-react";
import { Metadata } from 'next';
import { locationDb } from "@/lib/locationData";

export function generateStaticParams() {
  const params: any[] = [];
  Object.keys(locationDb).forEach((state) => {
    Object.keys(locationDb[state].cities).forEach((city) => {
      params.push({ state, city });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ state: string, city: string }> }): Promise<Metadata> {
  const { state, city } = await params;
  const stateData = locationDb[state];
  const cityData = stateData?.cities[city];
  
  if (!stateData || !cityData) return {};
  
  return {
    title: `Surveillance, Solar & Battery Trailers in ${cityData.name}, ${stateData.name} | Z1 Trailers`,
    description: cityData.desc,
  };
}

export default async function CityLocationPage({ params }: { params: Promise<{ state: string, city: string }> }) {
  const { state, city } = await params;
  const stateData = locationDb[state];
  const cityData = stateData?.cities[city];
  
  if (!stateData || !cityData) {
    notFound();
  }

  const cityName = cityData.name;
  const stateName = stateData.name;

  const faqs = [
    {
      q: `Are surveillance trailers available for immediate deployment in ${cityName}?`,
      a: `Yes, Z1 maintains a dedicated fleet of AI-equipped surveillance trailers for the ${cityName} sector. Deployment typically takes under 24 hours.`
    },
    {
      q: `Do your solar trailers require any external power in ${stateName}?`,
      a: `No. Our units are 100% self-sufficient. They utilize monocrystalline arrays specifically tuned for ${stateName}'s solar metadata, storing energy in lithium cores for continuous 24/7/365 uptime.`
    },
    {
      q: `How do the battery-backed surveillance trailers perform in extreme weather?`,
      a: `Z1 battery trailers are industrial-grade. In ${cityName}, they are rated for ${stateData.weatherContext || 'extreme industrial conditions'}, featuring thermal management and redundant failovers.`
    }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Z1 Trailers - ${cityName} Tactical Division`,
      "image": "https://z1trailers.com/og-image.jpg",
      "description": cityData.desc,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": stateName,
        "addressCountry": "US"
      },
      "url": `https://z1trailers.com/locations/${state}/${city}`,
      "telephone": "(918) 520-3823"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    }
  ];

  return (
    <div className="bg-[#05080c] min-h-screen text-white pb-24 overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TACTICAL OVERLAY INTERFACE */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent z-20" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 font-mono text-[9px] text-brand-teal/40 tracking-[0.5em] uppercase pointer-events-none z-20">
         System Online // Terminal Link: {state.toUpperCase()}_{city.toUpperCase()}
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 pt-32 lg:pt-48">
        
        {/* BREADCRUMB HUD */}
        <div className="flex items-center space-x-4 mb-20">
           <Link href={`/locations/${state}`} className="font-mono text-[10px] text-brand-teal hover:text-white uppercase tracking-[0.3em] font-bold transition-colors">
              &lt; Sector: {stateName}
           </Link>
           <div className="h-[1px] w-12 bg-white/10" />
           <span className="font-mono text-[10px] text-white uppercase tracking-[0.3em] opacity-40">Local Endpoint: {cityName}</span>
        </div>

        {/* HERO GRID: HIGH-END GRAPHICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-48">
           
           <div className="lg:col-span-6">
              <div className="inline-flex items-center space-x-3 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
                 <Cpu className="w-4 h-4 text-brand-teal" />
                 <span className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-black">AI GEOGRAPHIC TELEMETRY</span>
              </div>
              <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] mb-12 drop-shadow-2xl">
                {cityName}<span className="text-brand-teal">.</span>
              </h1>
              <p className="font-mono text-sm sm:text-md tracking-[0.15em] leading-relaxed text-brand-steel uppercase mb-16 max-w-xl border-l border-brand-teal/30 pl-8">
                 {cityData.desc}
              </p>

              {/* TACTICAL HARDWARE MATRIX GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                 {[
                   { label: "Surveillance Trailers", icon: Shield, val: "ACTIVE", detail: cityData.threatFocus || "Sector Defense" },
                   { label: "Solar Trailers", icon: Sun, val: "READY", detail: cityData.climateLogic || "Autonomous" },
                   { label: "Battery Trailers", icon: Battery, val: "STANDBY", detail: "Lithium Core" }
                 ].map((t, i) => (
                   <div key={i} className="bg-white/[0.03] border border-white/10 p-8 hover:border-brand-teal transition-all group relative overflow-hidden backdrop-blur-md">
                      <t.icon className="w-8 h-8 text-brand-teal mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform" strokeWidth={1} />
                      <p className="font-display font-bold text-lg text-white uppercase tracking-widest leading-none mb-4">{t.label}</p>
                      <p className="font-mono text-[9px] text-brand-steel uppercase tracking-widest leading-relaxed mb-6">{t.detail}</p>
                      <div className="flex items-center space-x-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
                         <span className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-black">{t.val}</span>
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-brand-teal/5 border-b border-l border-brand-teal/10 rotate-45 translate-x-4 -translate-y-4" />
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-6 pt-12">
              {/* INTERACTIVE HUB GRAPHIC (MAP HUD) */}
              <div className="relative border border-white/10 bg-[#0a111a] shadow-2xl p-4 overflow-hidden group">
                 {/* Map Frame Elements */}
                 <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 pointer-events-none">
                    <div className="flex items-center space-x-3 bg-brand-navy/90 border border-brand-teal/30 px-4 py-2">
                       <Activity className="w-4 h-4 text-brand-teal animate-pulse" />
                       <span className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-black">Scanning Sector...</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-3 bg-brand-navy/90 border border-brand-teal/30 px-4 py-2">
                       <Globe className="w-4 h-4 text-brand-teal" />
                       <span className="font-mono text-[10px] text-white uppercase tracking-[0.4em]">LAT/LONG: VERIFIED</span>
                    </div>
                 </div>

                 <div className="relative aspect-square md:aspect-auto md:h-[650px] w-full bg-black">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      style={{ filter: "invert(100%) hue-rotate(180deg) brightness(1) contrast(1.1) grayscale(0.5)", opacity: 0.8 }}
                      frameBorder="0" 
                      scrolling="no" 
                      src={`https://maps.google.com/maps?width=100%25&height=650&hl=en&q=${cityName},${stateName}&t=&z=13&ie=UTF8&iwloc=B&output=embed`}
                    ></iframe>
                    
                    {/* Tactical Overlays */}
                    <div className="absolute inset-0 border-[30px] border-[#0a111a] pointer-events-none" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a111a_110%)] pointer-events-none" />
                    <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-brand-teal/30 translate-x-4 -translate-y-4 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-brand-teal/30 -translate-x-4 translate-y-4 pointer-events-none" />
                    
                    {/* Crosshair Animation */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-20">
                       <div className="absolute inset-0 border border-brand-teal rounded-full animate-ping" />
                       <div className="absolute top-1/2 left-0 w-full h-px bg-brand-teal" />
                       <div className="absolute left-1/2 top-0 w-px h-full bg-brand-teal" />
                    </div>
                 </div>

                 {/* Diagnostic Overlay Footer */}
                 <div className="absolute bottom-0 left-0 w-full p-8 border-t border-white/10 bg-[#0a111a]/95 backdrop-blur-3xl z-20 grid grid-cols-3 gap-8">
                    <div>
                       <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Local Industry</p>
                       <p className="font-display font-black text-sm text-white uppercase tracking-wider">{cityData.industryAnchor || "N/A"}</p>
                    </div>
                    <div>
                       <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Optical Clear</p>
                       <p className="font-display font-black text-sm text-brand-teal uppercase tracking-wider">10.0 // AI Ready</p>
                    </div>
                    <div className="flex items-center justify-end">
                       <div className="w-2 h-2 rounded-full bg-brand-teal mr-3" />
                       <span className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em] font-black">SECURE</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* SECTION: INTELLIGENT DEFENSE (AEO-FOCUSED) */}
        <section className="py-48 border-y border-white/5 mb-48 text-center">
           <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-12 leading-[0.85]">
             OFF-GRID <br /><span className="text-brand-steel opacity-50">INTELLIGENCE MATRIX.</span>
           </h2>
           <p className="font-mono text-sm tracking-[0.4em] text-brand-teal uppercase font-black mb-24">Tactical Primacy in {cityName}</p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 overflow-hidden">
              {[
                { title: "AI Surveillance", icon: Shield, desc: "Autonomous threat categorization." },
                { title: "Solar Autonomy", icon: Sun, icon2: Zap, desc: "Monocrystalline energy harvesting." },
                { title: "Thermal Vector", icon: Activity, desc: "Night-vision heat signature tracking." },
                { title: "5G Telemetry", icon: Network, desc: "Zero-latency remote monitoring." }
              ].map((ind, i) => (
                <div key={i} className="flex flex-col items-center text-center p-12 bg-white/[0.01] border border-white/5 hover:border-brand-teal/50 hover:bg-brand-teal/5 transition-all group overflow-hidden">
                   <div className="relative mb-12">
                      <ind.icon className="w-16 h-16 text-brand-teal group-hover:scale-110 transition-transform" strokeWidth={0.5} />
                      <div className="absolute inset-0 bg-brand-teal/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                   <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-6 leading-none">{ind.title}</h3>
                   <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest leading-loose">
                      {ind.desc}
                   </p>
                   {/* Scanning Animation */}
                   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-teal/50 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 transition-all duration-700" />
                </div>
              ))}
           </div>
        </section>

        {/* SECTION: LOCAL FAQ TELEMETRY */}
        <div className="max-w-4xl mx-auto mb-48">
           <div className="inline-flex items-center space-x-3 mb-12">
              <Database className="w-5 h-5 text-brand-teal" />
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter">Sector Intelligence: {cityName}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#0a111a] border border-white/5 p-12 hover:border-brand-teal/30 transition-all group">
                   <h3 className="font-display font-bold text-xl text-white uppercase tracking-widest mb-6 flex items-start">
                      <span className="text-brand-teal mr-6 font-mono text-sm opacity-50">ID_{idx}:</span>
                      {faq.q}
                   </h3>
                   <p className="font-mono text-xs leading-loose tracking-[0.2em] text-brand-steel uppercase pl-16">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* FINAL DEPLOYMENT CONVERSION: HIGH IMPACT */}
        <div className="bg-brand-navy border border-brand-teal/30 p-16 md:p-32 relative overflow-hidden text-center group">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
           
           <div className="relative z-10">
              <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-12 drop-shadow-xl text-white">
                DEPLOY TO <span className="text-brand-teal">{cityName}</span>
              </h2>
              <p className="font-mono text-sm tracking-[0.5em] text-brand-steel uppercase mb-20 max-w-2xl mx-auto">
                 Command Line Operational // Immediate Hardware Authorization Matrix
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                 <Link href="/get-a-quote" className="w-full md:w-auto px-20 py-6 bg-brand-teal text-brand-navy font-display font-black text-sm uppercase tracking-[0.3em] hover:bg-white transition-all group flex items-center justify-center">
                    Initialize Deployment <ArrowRight className="w-5 h-5 ml-6 group-hover:translate-x-2 transition-transform" />
                 </Link>
                 <a href="tel:9185203823" className="w-full md:w-auto px-20 py-6 bg-transparent border border-white/20 text-white font-mono text-xs uppercase tracking-[0.4em] hover:bg-white/5 transition-all text-center">
                    Direct Hub: 918.520.3823
                 </a>
              </div>
           </div>
        </div>

      </div>

      {/* Decorative Cartography Overlay */}
      <div className="fixed bottom-0 left-0 w-96 h-96 border-l border-b border-brand-teal/10 -translate-x-1/2 translate-y-1/2 pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-96 h-96 border-t border-r border-brand-teal/10 translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

    </div>
  );
}