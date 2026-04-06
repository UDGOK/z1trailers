import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin, ChevronDown, Zap, Shield, Target, Activity, Database, Globe, Lock, Network, Webhook, Maximize, Cpu, Power } from "lucide-react";
import { Metadata } from 'next';
import { locationDb } from "@/lib/locationData";

export function generateStaticParams() {
  return Object.keys(locationDb).map((state) => ({
    state: state,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const loc = locationDb[state];
  if (!loc) return {};
  
  return {
    title: `Mobile Security Trailers in ${loc.name} | Z1 Trailers`,
    description: loc.desc,
  };
}

export default async function StateLocationPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const loc = locationDb[state];
  
  if (!loc) {
    notFound();
  }

  const cityList = Object.values(loc.cities);

  const faqs = [];

  if (loc.weatherContext) {
    faqs.push({
      q: `Are your security trailers engineered for the extreme weather in ${loc.name}?`,
      a: `Yes. Our deployments in ${loc.name} are specifically equipped with ${loc.weatherContext.toLowerCase()} to ensure 100% operational uptime regardless of local weather challenges.`
    });
  }

  faqs.push({
    q: `How rapidly can you deploy a security trailer in ${loc.name}?`,
    a: `Through our ${loc.subtitle || 'regional'} logistics network, Z1 Trailers can typically deploy a solar-powered surveillance unit to your site in ${loc.name} within 24-48 hours of authorization.`
  });

  faqs.push({
    q: `What is the tactical advantage of LiFePO4 batteries for deployments in ${loc.name}?`,
    a: `Z1 exclusively utilizes LiFePO4 for the ${loc.name} sector. Unlike traditional lead-acid, LiFePO4 offers 10+ years of lifespan, superior thermal resilience across ${loc.name}'s environments, and zero maintenance.`
  });

  if (faqs.length < 3) {
    faqs.push({
      q: `Can I use the security trailer as a supplemental power source in ${loc.name}?`,
      a: `Yes. Our units in the ${loc.name} division are equipped with industrial inverters and deep-cycle LiFePO4 cores, providing reliable supplemental power for site offices or field-networking.`
    });
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Z1 Security Trailer Deployment - ${loc.name} Division`,
      "provider": { "@type": "Organization", "name": "Z1 Trailers" },
      "areaServed": { "@type": "State", "name": loc.name },
      "description": loc.desc,
      "isPartOf": {
        "@id": "https://www.z1trailers.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "isPartOf": {
        "@id": "https://www.z1trailers.com/#organization"
      },
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    }
  ];

  return (
    <main className="bg-[#05080c] min-h-screen text-white font-sans selection:bg-brand-teal selection:text-white pb-24 overflow-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TACTICAL BACKGROUND ANIMATION GRID */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05080c_120%)]" />
      </div>

      <article className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 pt-32 lg:pt-48">
        
        <Link href="/locations" className="inline-flex items-center space-x-2 text-brand-teal hover:text-white font-mono text-[9px] uppercase tracking-[0.4em] mb-16 transition-all group">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1" /> <span>Back to Global Grid</span>
        </Link>

        {/* HERO SECTION: STATE HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-32">
           <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1">
                 <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                 <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold">Tactical Sector: {loc.subtitle}</p>
              </div>
              <h1 className="font-display font-black text-[12vw] sm:text-[10vw] lg:text-[8rem] leading-[0.8] uppercase tracking-tighter mb-8 text-white drop-shadow-2xl">
                {loc.name}<span className="text-brand-teal">.</span>
              </h1>
              <p className="font-mono text-sm sm:text-md tracking-[0.2em] leading-relaxed text-brand-steel/80 uppercase max-w-2xl border-l border-brand-teal/30 pl-8">
                 {loc.desc}
              </p>
           </div>

           <div className="lg:col-span-4 flex flex-col space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-3xl relative group overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/10 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-brand-teal/20 transition-colors" />
                 <p className="font-display font-bold text-lg text-white tracking-widest uppercase mb-2">Operational Hub</p>
                 <a href="tel:9185203823" className="font-mono text-2xl text-brand-teal font-black tracking-widest block mb-4">918.520.3823</a>
                 <div className="w-full h-[1px] bg-white/10 mb-6" />
                 <Link href="/get-a-quote" className="w-full py-4 bg-brand-teal text-brand-navy font-display font-black text-xs uppercase tracking-widest flex items-center justify-center group hover:bg-white transition-colors">
                    Request Deployment <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-1" />
                 </Link>
              </div>
           </div>
        </div>

        {/* STATE DIAGNOSTICS BAR */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
           {[
             { label: "Deployment Up-time", val: "99.99%", icon: Activity },
             { label: "LiFePO4 Battery", val: "Standard", icon: Power },
             { label: "Encrypted Links", val: "LTE/5G/Sat", icon: Lock },
             { label: "Response Latency", val: "<15m", icon: Zap }
           ].map((stat, i) => (
             <div key={i} className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative group overflow-hidden hover:border-brand-teal/30 transition-colors">
                <stat.icon className="w-4 h-4 text-brand-teal/50 mb-8 group-hover:text-brand-teal transition-colors" />
                <p className="font-display font-black text-3xl text-white uppercase tracking-tighter mb-2">{stat.val}</p>
                <p className="font-mono text-[9px] text-brand-steel uppercase tracking-[0.2em]">{stat.label}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-teal/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
             </div>
           ))}
        </div>

        {/* CITY MATRIX: TACTICAL CARDS */}
        <div className="mb-40">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
              <div>
                 <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-white">SUB-SECTOR <span className="text-brand-steel">MATRIX.</span></h2>
                 <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold mt-4">LiFePO4 Tactical Power Hubs Online</p>
              </div>
              <div className="inline-flex items-center space-x-6 text-brand-steel font-mono text-[9px] uppercase tracking-[0.3em]">
                 <span className="flex items-center"><div className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-2" /> ACTIVE REGION</span>
                 <span className="flex items-center opacity-40"><div className="w-1.5 h-1.5 rounded-full bg-white mr-2" /> PENDING SCAN</span>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
              {cityList.map((city, idx) => (
                <Link key={city.slug} href={`/locations/${state}/${city.slug}`} className="group relative">
                  <div className="absolute inset-0 bg-brand-teal opacity-0 group-hover:opacity-10 blur-3xl transition-opacity pointer-events-none" />
                  <div className="bg-[#0a111a] border border-white/10 p-10 h-full relative overflow-hidden transition-all group-hover:border-brand-teal/50 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                     
                     {/* Card Header */}
                     <div className="flex items-center justify-between mb-12">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-navy transition-colors">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                           Power Terminal <Activity className="w-3 h-3 ml-2" />
                        </div>
                     </div>

                     <h3 className="font-display font-black text-4xl text-white uppercase tracking-wider mb-6 group-hover:text-brand-teal transition-colors leading-none">{city.name}</h3>
                     <p className="font-mono text-[11px] text-brand-steel uppercase tracking-widest leading-relaxed mb-12 min-h-[4rem]">
                        {city.desc.split('.')[0]}.
                     </p>

                     {/* Tactical Specs Injected into Card */}
                     <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="flex flex-col">
                           <span className="font-mono text-[8px] text-brand-steel uppercase tracking-widest">Industry Anchor</span>
                           <span className="font-display font-bold text-[10px] text-white uppercase">{city.industryAnchor || "General Industrial"}</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="font-mono text-[8px] text-brand-steel uppercase tracking-widest">LiFePO4 Core</span>
                           <span className="font-display font-bold text-[10px] text-brand-teal uppercase">Tactical Deployment</span>
                        </div>
                     </div>

                     <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
                        <span className="font-mono text-[9px] text-white uppercase tracking-[0.3em] font-bold">Initialize Hub</span>
                        <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-2 transition-transform" />
                     </div>

                     {/* Subtle Scan Line */}
                     <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-teal/50 -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[2s] pointer-events-none" />
                  </div>
                </Link>
              ))}
           </div>
        </div>

        {/* FAQ SECTION: AEO OPTIMIZED */}
        <div className="max-w-4xl mx-auto border-t border-white/5 pt-32">
           <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tighter text-center mb-16 underline-offset-8 decoration-brand-teal decoration-4">SECTOR <span className="text-brand-steel">INTELLIGENCE.</span></h2>
           <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white/5 border border-white/5 hover:border-brand-teal/20 transition-all rounded-sm overflow-hidden">
                   <summary className="list-none p-8 sm:p-10 cursor-pointer flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest flex items-start gap-6">
                         <span className="text-brand-teal font-mono shrink-0">0{idx+1}_</span>
                         {faq.q}
                      </h3>
                      <ChevronDown className="w-5 h-5 text-brand-teal group-open:rotate-180 transition-transform shrink-0" />
                   </summary>
                   <div className="px-8 sm:px-24 pb-12">
                      <p className="font-mono text-xs sm:text-sm tracking-widest leading-loose text-slate-300 uppercase">
                         {faq.a}
                      </p>
                   </div>
                </details>
              ))}
           </div>
        </div>

      </article>

      {/* Decorative Radar Ring */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] border border-brand-teal/10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] border border-brand-teal/20 rounded-full translate-x-1/4 translate-y-1/4 animate-pulse pointer-events-none z-0" />

    </main>
  );
}
