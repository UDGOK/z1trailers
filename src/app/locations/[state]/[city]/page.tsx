import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin, ChevronDown, Zap, Shield, Target, Cpu, Battery, Sun } from "lucide-react";
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
    title: `Mobile Surveillance, Solar, & Battery Trailers in ${cityData.name}, ${stateData.name} | Z1 Trailers`,
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

  // AEO FAQ targeting the user's priority keywords
  const faqs = [
    {
      q: `Are surveillance trailers available for immediate deployment in ${cityName}?`,
      a: `Yes, Z1 Trailers provides rapid-deployment surveillance trailers across ${cityName}. Our mobile units are AI-equipped and ready to secure construction sites, retail perimeters, and industrial hubs instantly.`
    },
    {
      q: `Do your solar trailers require any external power in ${stateName}?`,
      a: `No. Our solar trailers are 100% autonomous. They utilize high-yield monocrystalline arrays to harvest energy during the day, which is stored in industrial-grade lithium cores for 24/7/365 operational uptime in ${cityName}.`
    },
    {
      q: `What makes your battery trailers better than traditional security?`,
      a: `Traditional security relies on grid power or human patrols. Our battery-backed surveillance trailers never sleep and never lose power. Even in zero-sunlight conditions, our massive core reserves provide up to 10-20 days of continuous AI-monitored protection.`
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
      "telephone": "(918) 520-3823",
      "servesArea": {
        "@type": "City",
        "name": cityName
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mobile Surveillance Trailer Deployment",
      "provider": { "@type": "Organization", "name": "Z1 Trailers" },
      "areaServed": cityName,
      "description": `Elite solar-powered and battery-backed surveillance trailers for ${cityName}, ${stateName}.`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 relative overflow-hidden text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-6 mb-20">
           <Link href={`/locations/${state}`} className="font-mono text-[10px] text-brand-teal uppercase tracking-widest hover:text-white transition-colors border border-brand-teal/20 px-4 py-2 bg-brand-teal/5">
              &lt; Sector: {stateName}
           </Link>
           <div className="h-px w-12 bg-white/10" />
           <span className="font-mono text-[10px] text-white uppercase tracking-widest opacity-60">Terminal: {cityName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-40">
           
           <div>
              <div className="inline-flex items-center space-x-3 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
                 <Cpu className="w-4 h-4 text-brand-teal" />
                 <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">Local Artificial Intelligence Grid</span>
              </div>
              <h1 className="font-display font-black text-7xl md:text-8xl uppercase tracking-tighter leading-none mb-10">
                {cityName}<span className="text-brand-teal">.</span>
              </h1>
              <p className="font-mono text-sm tracking-[0.2em] leading-loose text-brand-steel uppercase mb-16 max-w-xl">
                 {cityData.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { label: "Surveillance Trailers", icon: Shield, val: "ACTIVE" },
                   { label: "Solar Trailers", icon: Sun, val: "READY" },
                   { label: "Battery Trailers", icon: Battery, val: "READY" }
                 ].map((t, i) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-8 hover:border-brand-teal transition-all group">
                      <t.icon className="w-6 h-6 text-brand-teal mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      <p className="font-display font-bold text-lg text-white uppercase tracking-widest mb-1">{t.label}</p>
                      <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest font-black animate-pulse">{t.val}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="relative pt-12">
              {/* Tactical Map Mockup Interface */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] border border-white/10 bg-black/40 shadow-2xl p-2 group">
                 
                 <div className="absolute top-8 left-8 z-20 bg-brand-navy/90 border border-brand-teal/40 px-6 py-4 backdrop-blur-xl">
                    <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold flex items-center mb-2">
                       <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping mr-3" />
                       Tactical Overlay 04
                    </p>
                    <p className="font-display font-black text-xl text-white tracking-widest uppercase">Target: {cityName}</p>
                 </div>

                 <iframe 
                   width="100%" 
                   height="100%" 
                   style={{ filter: "invert(90%) hue-rotate(180deg) contrast(110%) grayscale(80%) brightness(0.8)", opacity: 0.7 }}
                   frameBorder="0" 
                   scrolling="no" 
                   src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${cityName},${stateName}&t=&z=12&ie=UTF8&iwloc=B&output=embed`}
                 ></iframe>

                 <div className="absolute inset-0 border-[20px] border-[#05080c] pointer-events-none" />
                 <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-brand-teal opacity-40 translate-x-4 -translate-y-4" />
                 <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-brand-teal opacity-40 -translate-x-4 translate-y-4" />
              </div>
           </div>
        </div>

        {/* Tactical Keywords & AI Advantage Section */}
        <section className="py-40 border-y border-white/10 mb-40">
           <div className="text-center mb-32">
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-tight">
                The <span className="text-brand-teal">Off-Grid</span> <br className="hidden md:block" /> Intelligence Matrix.
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 hover:border-brand-teal/30 transition-colors cursor-default">
                 <Shield className="w-12 h-12 text-brand-teal mb-10" strokeWidth={1} />
                 <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-6">Surveillance Trailers</h3>
                 <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                    Sub-second Edge AI categorization of human and vehicle anomalies. We identify threats before they breach your perimeter in {cityName}.
                 </p>
              </div>
              <div className="flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 hover:border-brand-teal/30 transition-colors cursor-default">
                 <Sun className="w-12 h-12 text-brand-teal mb-10" strokeWidth={1} />
                 <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-6">Solar Trailers</h3>
                 <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                    Engineered for the ${stateName} climate. High-yield energy harvesting ensures your security protocols never fall victim to power grid failures.
                 </p>
              </div>
              <div className="flex flex-col items-center text-center p-10 bg-white/5 border border-white/10 hover:border-brand-teal/30 transition-colors cursor-default">
                 <Battery className="w-12 h-12 text-brand-teal mb-10" strokeWidth={1} />
                 <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-6">Battery Trailers</h3>
                 <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                    Massive battery cores with 10-20 day autonomy. Zero reliance on exterior fuels or shore power for mission-critical surveillance in {cityName}.
                 </p>
              </div>
           </div>
        </section>

        {/* Local FAQ Intelligence */}
        <div className="max-w-4xl mx-auto mb-40">
           <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
              <Zap className="w-4 h-4 text-brand-teal" />
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">AEO FAQ Terminal</span>
           </div>
           <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-12">{cityName} Operational Intelligence</h2>
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 border border-white/5 p-10 hover:border-brand-teal/40 transition-all group">
                   <h3 className="font-display font-bold text-lg text-white uppercase tracking-widest mb-6 flex items-start">
                      <ChevronDown className="w-6 h-6 mr-6 shrink-0 text-brand-teal" />
                      {faq.q}
                   </h3>
                   <p className="font-mono text-[11px] leading-relaxed text-brand-steel uppercase tracking-widest ml-12">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* Specialized Contact/Conversion Bar */}
        <div className="bg-brand-navy border border-brand-teal/30 p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-brand-teal to-transparent" />
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                 <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-6">Deploy to <br /> {cityName} <span className="text-brand-teal">Today.</span></h2>
                 <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest">Rapid Response // (918) 520-3823</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                 <Link href="/get-a-quote" className="bg-brand-teal text-brand-navy px-12 py-5 font-display font-black text-xs uppercase tracking-widest hover:bg-white transition-colors text-center group flex items-center justify-center">
                    Request Quote <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
                 </Link>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}