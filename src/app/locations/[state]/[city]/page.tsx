import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin } from "lucide-react";
import { Metadata } from 'next';

const cityDb: Record<string, Record<string, any>> = {
  "oklahoma": {
    "oklahoma-city": {
      name: "Oklahoma City",
      state: "Oklahoma",
      subtitle: "COMMAND HQ",
      desc: "Z1 Trailers serves Oklahoma City with rapidly deployable solar security trailers. Same-day delivery available for OKC construction sites, parking lots, and events.",
      primary: ["Downtown OKC", "Edmond Corridor", "Norman Logistics", "Midwest City"],
    },
    "tulsa": {
      name: "Tulsa",
      state: "Oklahoma",
      subtitle: "REGIONAL HUB",
      desc: "Z1 Trailers provides mobile surveillance trailers to Tulsa and surrounding areas. Protect construction sites, lots, and events with AI-powered security.",
      primary: ["Downtown Tulsa", "Broken Arrow", "Bixby Grid", "Owasso Logistics"],
    },
    "edmond": {
      name: "Edmond / Norman",
      state: "Oklahoma",
      subtitle: "URBAN SECTOR",
      desc: "Safeguarding expanding construction parameters in the northern and southern OKC metro sectors with 100% solar tactical gear.",
      primary: ["Edmond Commercial", "Norman Retail", "Moore Corridors", "Guthrie Development"],
    }
  },
  "texas": {
    "dallas": {
      name: "Dallas",
      state: "Texas",
      subtitle: "PRIMARY DIVISION",
      desc: "Deploying solar surveillance trailers throughout Dallas and DFW. Serving construction sites, parking lots, dealerships, and events.",
      primary: ["Downtown Dallas", "Plano/Frisco Tech Corridor", "Irving Hubs", "Garland Industrial"],
    },
    "fort-worth": {
      name: "Fort Worth",
      state: "Texas",
      subtitle: "HEAVY INDUSTRIAL",
      desc: "Securing industrial perimeters and construction equipment throughout Tarrant County with automated AI-active trailers.",
      primary: ["Fort Worth Industrial", "Arlington Entertainment", "Alliance Logistics", "HEB Corridor"],
    },
    "houston": {
      name: "Houston",
      state: "Texas",
      subtitle: "PORT & LOGISTICS",
      desc: "Commanding extreme infrastructure near Houston ports. Protecting logistics yards and rebuilding sectors from supply chain theft.",
      primary: ["Port of Houston", "The Woodlands", "Katy Development", "Sugar Land Sector"],
    },
    "austin": {
      name: "Austin",
      state: "Texas",
      subtitle: "TECH DEVELOPMENT",
      desc: "Protecting high-value commercial builds and multi-family construction parameters stretching across Central Texas.",
      primary: ["Downtown Austin", "Round Rock Tech", "Georgetown Builds", "San Marcos Logistics"],
    }
  },
  "arkansas": {
    "little-rock": {
      name: "Little Rock",
      state: "Arkansas",
      subtitle: "SUPPLY CHAIN",
      desc: "Providing security surveillance trailers to protect Little Rock distribution centers and heavy trucking logistics vectors.",
      primary: ["Port of Little Rock", "North Little Rock", "Conway Corridors", "Pine Bluff Sector"],
    },
    "fayetteville": {
      name: "Fayetteville",
      state: "Arkansas",
      subtitle: "NWA CORRIDOR",
      desc: "Rapid response security trailers tracking construction expansions across Northwest Arkansas supply networks.",
      primary: ["Fayetteville Urban", "Springdale Logistics", "Rogers Operations", "Bentonville HQ"],
    }
  },
  "kansas": {
    "wichita": {
      name: "Wichita",
      state: "Kansas",
      subtitle: "AVIATION VECTOR",
      desc: "Securing manufacturing, aviation development, and construction growth in South Kansas with zero grid reliance.",
      primary: ["Wichita Manufacturing", "Derby Developments", "Andover Projects", "Hutchinson Corridors"],
    }
  },
  "louisiana": {
    "shreveport": {
      name: "Shreveport",
      state: "Louisiana",
      subtitle: "NORTH GULF",
      desc: "High-humidity rated mobile security tracking for Bossier City and Shreveport commercial site developments.",
      primary: ["Shreveport City", "Bossier Developments", "I-20 Logistics", "Barksdale Perimeter"],
    },
    "baton-rouge": {
      name: "Baton Rouge",
      state: "Louisiana",
      subtitle: "CAPITAL OPERATIONS",
      desc: "Protecting Delta region logistics along Baton Rouge with fully off-grid surveillance matrix systems.",
      primary: ["Capital Operations", "Mississippi River Ports", "Gonzalez Logistics", "Denham Springs"],
    }
  },
  "alabama": {
    "birmingham": {
      name: "Birmingham",
      state: "Alabama",
      subtitle: "HEAVY INDUSTRY",
      desc: "Deploying highly durable security hubs throughout Jefferson County manufacturing locations and distribution setups.",
      primary: ["Downtown Birmingham", "Hoover Operations", "Bessemer Logistics", "Trussville Corridors"],
    },
    "huntsville": {
      name: "Huntsville",
      state: "Alabama",
      subtitle: "AEROSPACE VECTOR",
      desc: "Safeguarding highly secured defense sector builds and high-tech parameters across Madison County.",
      primary: ["Research Park", "Redstone Perimeters", "Madison City", "Decatur Industrial"],
    }
  }
};

export function generateStaticParams() {
  const params: { state: string, city: string }[] = [];
  
  for (const [stateKey, cities] of Object.entries(cityDb)) {
    for (const cityKey of Object.keys(cities)) {
      params.push({
        state: stateKey,
        city: cityKey
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ state: string, city: string }> }): Promise<Metadata> {
  const { state, city } = await params;
  const loc = cityDb[state]?.[city];
  if (!loc) return {};
  
  return {
    title: `Mobile Security Trailers in ${loc.name}, ${loc.state} | Z1 Trailers`,
    description: loc.desc,
  };
}

export default async function CityLocationPage({ params }: { params: Promise<{ state: string, city: string }> }) {
  const { state, city } = await params;
  const loc = cityDb[state]?.[city];
  
  if (!loc) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Z1 Security Trailer Deployment - ${loc.name}`,
    "provider": {
      "@type": "Organization",
      "name": "Z1 Trailers",
      "url": "https://z1trailers.com"
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": loc.state
      }
    },
    "description": loc.desc,
  };

  return (
    <div className="bg-[#0a111a] min-h-screen pt-32 pb-24 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Radar / Cartography background elements */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[1200px] h-[1200px] border border-brand-teal/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-brand-teal/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-brand-teal/20 rounded-full pointer-events-none flex items-center justify-center">
         <div className="w-2 h-2 bg-brand-teal rounded-full shadow-[0_0_20px_rgba(27,154,170,1)] animate-ping" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col lg:flex-row mt-12 gap-16">
         
         <div className="w-full lg:w-1/2">
            <Link href={`/locations/${state}`} className="inline-flex items-center space-x-2 text-brand-steel hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] mb-12 transition-colors border border-white/10 hover:border-white px-4 py-2 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" /> <span>Back to {loc.state}</span>
            </Link>

            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              <Route className="w-4 h-4 mr-3" /> Urban Operational Grid // {loc.subtitle}
            </p>
            
            <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none mb-8">
              {loc.name}.
            </h1>
            
            <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase mb-12 max-w-lg">
              {loc.desc}
            </p>

            {/* Added Phone CTA for Geo Tracking/Local Business logic */}
            <div className="bg-brand-navy border-l-4 border-brand-teal p-6 mb-12">
               <p className="font-display font-black text-white text-lg tracking-widest mb-2">Protect Your {loc.name} Site 24/7</p>
               <a href="tel:9185203823" className="font-mono text-brand-teal font-bold tracking-widest hover:text-white transition-colors">Call Direct: (918) 520-3823</a>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md mb-12">
               <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 flex items-center border-b border-white/10 pb-4">
                 <MapPin className="w-5 h-5 text-brand-teal mr-4" /> Priority Dispatches
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {loc.primary.map((zone: string) => (
                   <div key={zone} className="flex items-center space-x-3">
                     <span className="w-4 h-px bg-brand-teal/50" />
                     <span className="font-mono text-[10px] font-bold text-white/80 uppercase tracking-widest">{zone}</span>
                   </div>
                 ))}
               </div>
            </div>

            <Link href="/get-a-quote" className="inline-flex px-10 py-5 bg-brand-teal hover:bg-brand-gold text-brand-navy font-display font-black text-[12px] uppercase tracking-[0.25em] transition-colors items-center group">
               Deploy in {loc.name} <ArrowRight className="w-4 h-4 ml-4 group-hover:translate-x-2 transition-transform" />
            </Link>
         </div>

         {/* Stats Panel */}
         <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-8 border border-white/10 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center">
                  <ShieldCheck className="w-8 h-8 text-brand-teal mb-4" strokeWidth={1} />
                  <p className="font-display font-black text-4xl text-white tracking-widest mb-2">99.9%</p>
                  <p className="font-mono text-[9px] text-brand-steel uppercase tracking-[0.2em] font-bold">Network Uptime</p>
               </div>
               <div className="p-8 border border-brand-teal/30 bg-brand-teal/10 backdrop-blur-md flex flex-col items-center justify-center text-center">
                  <div className="flex space-x-1 mb-4">
                     <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                     <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse delay-75" />
                     <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse delay-150" />
                  </div>
                  <p className="font-display font-black text-4xl text-white tracking-widest mb-2">&lt;15m</p>
                  <p className="font-mono text-[9px] text-brand-steel uppercase tracking-[0.2em] font-bold">Dispatch Response</p>
               </div>
               <div className="col-span-2 p-8 border border-white/10 bg-black/60 backdrop-blur-md text-center">
                  <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">System Status // {loc.name} Operations</p>
                  <div className="flex items-center justify-center space-x-6 text-white/50 font-mono text-[9px] uppercase tracking-widest">
                     <span className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full shadow-[0_0_5px_rgba(34,197,94,1)]" /> Optics Grid Stable</span>
                     <span className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full shadow-[0_0_5px_rgba(34,197,94,1)]" /> AI Feed Active</span>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
