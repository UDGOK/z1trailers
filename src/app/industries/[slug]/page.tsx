import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldAlert, Target } from "lucide-react";
import { Metadata } from 'next';

const industriesDb: Record<string, any> = {
  "construction-sites": {
    name: "Construction Sites",
    desc: "High-value raw materials, heavy equipment, and unprotected perimeters. Construction sites are the #1 target for industrial theft. We deploy our units to lock down these vectors.",
    img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Copper & Lumber Theft", "Heavy Equipment Vandalism", "After-hours Loitering", "Frivolous Liability Claims"],
    solution: "We utilize our Z1 Guardian units on construction perimeters. Dual arrays cover massive 100-yard distances, identifying human threats amongst stationary equipment. Auto-strobe arrays deter entry before theft occurs.",
  },
  "parking-lots": {
    name: "Parking Lots",
    desc: "Vast expanses of civilian vehicles present severe liability and catalytic converter theft targets. Z1 surveillance systems automate total perimeter defense.",
    img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Catalytic Converter Theft", "Vehicle Break-ins", "Liability / Slip-and-falls", "Unauthorized Encampments"],
    solution: "The Z1 Scout is the perfect rapid deployment tool for lots. We position it strategically under lighting to maximize optical intelligence and capture distinct data without human intervention.",
  },
  "events": {
    name: "Events & Festivals",
    desc: "Short-term mass gatherings require massive intelligence and crowd flow analytics without permanent hardware installation.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Crowd Crushes", "Unauthorized Backstage Entry", "Perimeter Fence Breaches", "Cash Point Robberies"],
    solution: "We drop Z1 Guardian units within 15 minutes to secure VIP vectors and main gates. The 30ft mast provides total top-down visibility directly into your tactical operations center.",
  },
  "oil-gas": {
    name: "Oil & Gas Logistics",
    desc: "Remote perimeters devoid of power or cellular connectivity. Protecting critical infrastructure from sabotage requires elite edge-computing.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Terror Sabotage", "Valve Access Tampering", "Copper Wire Theft", "Remote Vandalism"],
    solution: "The Z1 Command endpoint connects via StarLink, operating entirely independent of local utilities. Thermal imaging slices through dense fog and darkness to capture heat signatures of intruders at 300+ yards.",
  },
  "car-dealerships": {
    name: "Auto Dealerships",
    desc: "Open-air showrooms displaying millions of dollars of inventory. Auto dealerships need sophisticated monitoring to catch extremely fast smash-and-grabs.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Wheel & Rim Theft", "Mass Smash-and-Grab Vectors", "Lot Loitering", "Vehicle Damage (Vandalism)"],
    solution: "We blanket the dealer lot with Z1 Apex units, integrating License Plate Recognition (LPR) to log suspicious vehicles casing the perimeter during off-hours, sending immediate intelligence to our UL-listed monitoring partners.",
  },
  "school-campuses": {
    name: "Education Campuses",
    desc: "Protecting the sprawling infrastructure and student body of modern education centers without creating a prison-like environment.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    hazards: ["Perimeter Breaches", "Lot Loitering", "After-hours Vandalism", "Sports Field Damage"],
    solution: "We employ subtle deployment tactics using the Z1 Scout to augment existing campus security protocols, automatically pinging campus PD upon AI-verified threats.",
  }
};


export function generateStaticParams() {
  return Object.keys(industriesDb).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = industriesDb[slug];
  if (!ind) return {};
  
  return {
    title: `${ind.name} Surveillance Operations | Z1 Trailers`,
    description: ind.desc,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industriesDb[slug];
  
  if (!ind) {
    notFound();
  }

  // AEO JSON-LD Schema (Generative Search readiness for queries like "best security trailer for construction site")
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Security Surveillance for ${ind.name}`,
    "provider": {
      "@type": "Organization",
      "name": "Z1 Trailers"
    },
    "description": ind.desc,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surveillance Hardware",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tactical Hardware Deployment"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-brand-navy min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Banner spanning full width */}
      <div className="absolute inset-0 h-[60vh] z-0 pointer-events-none">
         <div className="absolute inset-0 bg-brand-navy/80 z-10 mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/10 via-transparent to-brand-navy z-10" />
         <img src={ind.img} className="w-full h-full object-cover grayscale-[40%] contrast-125" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 flex flex-col lg:flex-row mt-32 gap-16">
         
         {/* Title area */}
         <div className="w-full lg:w-5/12">
            <Link href="/industries" className="inline-flex items-center space-x-2 text-brand-teal hover:text-white font-mono text-[10px] uppercase tracking-[0.2em] mb-12 transition-colors border border-brand-teal/30 hover:border-white px-4 py-2 hover:bg-white/5">
              <ArrowLeft className="w-4 h-4" /> <span>Back to Sectors</span>
            </Link>
            
            <p className="font-mono text-[10px] text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              Target Operation Sector
            </p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-[0.9] mb-8">
              {ind.name} <br/><span className="text-white/20">Defense.</span>
            </h1>
            <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase bg-black/40 backdrop-blur-md p-6 border border-white/10 shadow-2xl">
              {ind.desc}
            </p>
         </div>

         {/* Content Area */}
         <div className="w-full lg:w-7/12 space-y-12">
            
            {/* Threat Vectors */}
            <div className="bg-[#0a111a]/80 backdrop-blur-xl border border-red-500/20 p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl pointer-events-none" />
               <h3 className="font-display font-black text-2xl text-white uppercase tracking-widest mb-8 border-b border-white/10 pb-4 flex items-center">
                 <ShieldAlert className="w-6 h-6 text-red-400 mr-4" /> Analyzed Threat Vectors
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {ind.hazards.map((hazard: string) => (
                   <div key={hazard} className="flex items-center space-x-3 bg-red-500/5 border border-red-500/10 p-3">
                     <div className="w-1.5 h-1.5 bg-red-500 shadow-[0_0_5px_rgba(239,68,68,1)] shrink-0" />
                     <span className="font-mono text-[10px] font-bold text-red-100 uppercase tracking-widest">{hazard}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Z1 Tactical Solution */}
            <div className="bg-brand-ice text-brand-navy p-10 relative">
               <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-brand-teal mt-4 mr-4" />
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-brand-teal mb-4 ml-4" />
               
               <h3 className="font-display font-black text-2xl uppercase tracking-widest mb-6 flex items-center">
                 <Target className="w-6 h-6 text-brand-teal mr-4" /> Tactical Implementation
               </h3>
               <p className="font-mono text-sm leading-loose tracking-widest text-brand-navy/80 font-bold uppercase">
                 {ind.solution}
               </p>

               <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/get-a-quote" className="px-8 py-4 bg-brand-navy hover:bg-brand-teal hover:text-brand-navy text-white font-display font-black text-[11px] uppercase tracking-[0.2em] transition-colors text-center w-full sm:w-auto">
                     Deploy Solution
                  </Link>
                  <Link href="/security-trailers" className="px-8 py-4 bg-transparent border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-display font-black text-[11px] uppercase tracking-[0.2em] transition-colors text-center w-full sm:w-auto">
                     View Hardware
                  </Link>
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}
