import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin, ChevronDown, Zap, Shield, Target } from "lucide-react";
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
    title: `Mobile Security & Solar Surveillance Trailers in ${loc.name} | Z1 Trailers`,
    description: loc.desc,
  };
}

export default async function StateLocationPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const loc = locationDb[state];
  
  if (!loc) {
    notFound();
  }

  // Construct AEO FAQ for the state
  const faqs = [
    {
      q: `How long does it take to deploy a security trailer in ${loc.name}?`,
      a: `In ${loc.name}, Z1 Trailers maintains a rapid-response logistics chain. We can typically deploy a solar-powered surveillance unit to your site in under 24 hours, with set-up taking less than 15 minutes by a single operator.`
    },
    {
      q: `Is solar power effective for security trailers in ${loc.name}?`,
      a: `Absolutely. Even with ${loc.name}'s varied cloud cover, our monocrystalline solar arrays are engineered for maximum energy harvest. Coupled with massive lithium-ion battery reserves, Z1 units operate 24/7/365 without ever needing grid power.`
    },
    {
      q: `What types of trailers do you offer in ${loc.name}?`,
      a: `We offer a full tactical matrix including the Z1 Scout (Entry Vector), Z1 Guardian (Standard Command), Z1 Apex (Thermal/LPR), and Z1 Command (StarLink-equipped satellite endpoints).`
    }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `Z1 Security Trailer Deployment - ${loc.name}`,
      "provider": {
        "@type": "Organization",
        "name": "Z1 Trailers",
        "url": "https://z1trailers.com"
      },
      "areaServed": {
        "@type": "State",
        "name": loc.name
      },
      "description": loc.desc,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Security Trailer Rentals",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surveillance Trailer Rental" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solar Security Trailer Deployment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Battery Powered Security Systems" } }
        ]
      }
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

  const cityList = Object.values(loc.cities);

  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 relative overflow-hidden text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Radial Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        
        <Link href="/locations" className="inline-flex items-center space-x-2 text-brand-steel hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] mb-16 transition-colors group">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> <span>Back to Global Grid</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
           <div>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold mb-6 flex items-center">
                 <Route className="w-4 h-4 mr-3" /> Tactical Operational Sector // {loc.subtitle}
              </p>
              <h1 className="font-display font-black text-7xl md:text-9xl uppercase tracking-tighter leading-none mb-8">
                {loc.name}<span className="text-brand-teal">.</span>
              </h1>
              <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase max-w-xl">
                 {loc.desc}
              </p>
           </div>
           
           <div className="flex flex-col space-y-6">
              <div className="bg-white/5 border-l-4 border-brand-teal p-8 backdrop-blur-md">
                 <p className="font-display font-black text-white text-xl tracking-widest mb-4 uppercase">Direct Command Line</p>
                 <a href="tel:9185203823" className="font-mono text-2xl text-brand-teal font-bold tracking-widest hover:text-white transition-colors">918.520.3823</a>
                 <p className="font-mono text-[9px] text-brand-steel mt-2 uppercase tracking-widest">Available 24/7 for Emergency Deployment</p>
              </div>
              <Link href="/get-a-quote" className="bg-brand-teal text-brand-navy p-6 font-display font-black text-xs uppercase tracking-widest text-center hover:bg-white transition-colors group flex items-center justify-between">
                 Initialize Deployment <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
           </div>
        </div>

        {/* City Matrix Implementation */}
        <div className="mb-40">
           <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-8">
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter">Sub-Sector Matrix</h2>
              <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest hidden md:block">Select city for localized AI telemetry</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityList.map((city, idx) => (
                <Link key={city.slug} href={`/locations/${state}/${city.slug}`}>
                  <div className="bg-white/5 border border-white/10 p-10 hover:border-brand-teal/50 hover:bg-brand-teal/5 transition-all group relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-brand-teal/5 border-b border-l border-brand-teal/20 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                        <MapPin className="w-5 h-5 text-brand-teal" />
                     </div>
                     <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">DEPLOYMENT ZONE</p>
                     <h3 className="font-display font-black text-3xl text-white uppercase tracking-wider mb-6 group-hover:text-brand-teal transition-colors">{city.name}</h3>
                     <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest leading-relaxed mb-8">
                        {city.desc.split('.')[0]}.
                     </p>
                     <div className="flex items-center text-brand-teal font-mono text-[9px] uppercase tracking-widest font-bold">
                        View Diagnostics <ArrowRight className="w-3 h-3 ml-3 group-hover:translate-x-1 transition-transform" />
                     </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>

        {/* Feature Grid for AEO focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 border-y border-white/10 py-32">
           {[
             { title: "Surveillance Trailers", icon: Shield, desc: "High-definition AI monitoring with sub-second threat categorization." },
             { title: "Solar Autonomy", icon: Zap, desc: "100% grid-independent operation with monocrystalline energy harvesting." },
             { title: "Battery Reliability", icon: Target, desc: "Industrial-grade lithium reserves for 24/7/365 telemetry uptime." }
           ].map((feat, i) => (
             <div key={i} className="flex flex-col items-center text-center">
                <feat.icon className="w-12 h-12 text-brand-teal mb-8" strokeWidth={1} />
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-4">{feat.title}</h3>
                <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                   {feat.desc}
                </p>
             </div>
           ))}
        </div>

        {/* FAQ Section for AEO */}
        <div className="max-w-4xl mx-auto">
           <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-12 text-center">Sector Intelligence</h2>
           <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-10 hover:border-brand-teal/20 transition-colors">
                   <h3 className="font-display font-bold text-xl text-brand-teal mb-4 uppercase tracking-widest flex items-start">
                      <ChevronDown className="w-6 h-6 mr-4 shrink-0 -mt-0.5" />
                      {faq.q}
                   </h3>
                   <p className="font-mono text-sm tracking-widest leading-loose text-slate-300 ml-10">
                      {faq.a}
                   </p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
