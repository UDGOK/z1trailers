import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Route, ShieldCheck, MapPin } from "lucide-react";
import { Metadata } from 'next';

const locDb: Record<string, any> = {
  "oklahoma": {
    name: "Oklahoma",
    subtitle: "COMMAND HQ",
    desc: "Our Central Command operations originate natively from Oklahoma. We serve OKC, Tulsa, Lawton, and rural operational fields with under 15-minute rapid deployment capacities.",
    primary: ["Oklahoma City Metro", "Tulsa Operations", "Lawton & Ft Sill", "Enid & Northwest"],
  },
  "texas": {
    name: "Texas",
    subtitle: "PRIMARY DIVISION",
    desc: "Commanding extreme infrastructure growth requires maximum perimeter density. We deliver across Dallas-Fort Worth, Austin, Houston, and West Texas oil hubs.",
    primary: ["DFW Metroplex", "Austin Tech Corridors", "Houston Port Logistics", "Midland/Odessa Oil Fields"],
  },
  "louisiana": {
    name: "Louisiana",
    subtitle: "REGIONAL SECTOR",
    desc: "Protecting delta logistics, ports, and rebuilding logistics. 100% solar tactical gear performs flawlessly in massive humidity and sub-tropical grids.",
    primary: ["New Orleans Ports", "Baton Rouge Corridors", "Shreveport/Bossier", "Lake Charles"],
  },
  "arkansas": {
    name: "Arkansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Expansive supply chain defense in Little Rock and northwest logistics operations. We secure massive truck perimeters and cross-docking vectors.",
    primary: ["Little Rock", "Fayetteville Corridors", "Fort Smith", "Jonesboro"],
  },
  "kansas": {
    name: "Kansas",
    subtitle: "REGIONAL SECTOR",
    desc: "Midwestern construction growth secured. Providing thermal and LPR intelligence to industrial expansion zones.",
    primary: ["Wichita Area", "Topeka", "Overland Park Logistics", "Kansas City KS"],
  },
  "alabama": {
    name: "Alabama",
    subtitle: "REGIONAL SECTOR",
    desc: "Supporting the rapidly expanding southeastern corridor from heavy manufacturing vectors to port operations in Mobile.",
    primary: ["Birmingham Core", "Huntsville Defense Sector", "Mobile Ports", "Montgomery"],
  }
};


export function generateStaticParams() {
  return Object.keys(locDb).map((state) => ({
    state: state,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const loc = locDb[state];
  if (!loc) return {};
  
  return {
    title: `Mobile Security Trailers in ${loc.name} | Z1 Trailers`,
    description: loc.desc,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const loc = locDb[state];
  
  if (!loc) {
    notFound();
  }

  // Advanced GEO/AEO LocalBusiness Schema indicating service area
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
      "@type": "State",
      "name": loc.name
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
         
         {/* Text Section */}
         <div className="w-full lg:w-1/2">
            <Link href="/locations" className="inline-flex items-center space-x-2 text-brand-steel hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] mb-12 transition-colors border border-white/10 hover:border-white px-4 py-2 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" /> <span>Back to Cartography</span>
            </Link>

            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              <Route className="w-4 h-4 mr-3" /> State Operational Grid // {loc.subtitle}
            </p>
            
            <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-8">
              {loc.name}.
            </h1>
            
            <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase mb-16 max-w-lg">
              {loc.desc}
            </p>

            <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md mb-12">
               <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 flex items-center border-b border-white/10 pb-4">
                 <MapPin className="w-5 h-5 text-brand-teal mr-4" /> Primary Dispatch Zones
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
                  <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">System Status // {loc.name} Data Center</p>
                  <div className="flex items-center justify-center space-x-6 text-white/50 font-mono text-[9px] uppercase tracking-widest">
                     <span className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full shadow-[0_0_5px_rgba(34,197,94,1)]" /> Optics Grid Stable</span>
                     <span className="flex items-center"><span className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full shadow-[0_0_5px_rgba(34,197,94,1)]" /> Telemetry Synced</span>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
