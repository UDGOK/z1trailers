import { notFound } from "next/navigation";
import { Metadata } from 'next';
import SectorHero from "@/components/industry/SectorHero";
import TacticalStats from "@/components/industry/TacticalStats";
import IndustryFAQ from "@/components/industry/IndustryFAQ";
import { ShieldAlert, TrendingUp, BarChart3, Target, Crosshair, MapPin, Zap, Lock, AlertTriangle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const industriesDb: Record<string, any> = {
  "construction-sites": {
    name: "Construction Sites",
    desc: "Vast, unlit, and populated with high-value assets. Construction sites represent the primary target for organized theft rings seeking copper and equipment.",
    img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "CRITICAL",
    telemetryStats: [
      { label: "ANNUAL_SECTOR_LOSS", value: "$1.0B+" },
      { label: "RECOVERY_PROBABILITY", value: "< 25%" },
      { label: "COPPER_SPOT_PRICE", value: "$5.64/LB" }
    ],
    tacticalStats: [
      { title: "Financial Impact", value: "$1.0B", desc: "Estimated annual industry loss in the US from equipment and material theft.", icon: "AlertTriangle", color: "red" },
      { title: "Incident Volume", value: "11,200+", desc: "Reported theft incidents annually, averaging 1,000+ per month across major metros.", icon: "ShieldAlert", color: "red" },
      { title: "Insurance Hike", value: "+5.0%", desc: "Average increase in project insurance premiums for sites without active surveillance.", icon: "TrendingUp", color: "red" },
      { title: "Project Delay", value: "$10K/DAY", desc: "Indirect costs of idle labor and schedule penalties caused by asset loss.", icon: "BarChart3", color: "red" }
    ],
    faqs: [
      { q: "How do you detect thieves in low-light environments?", a: "Z1 units employ thermal tracking and infrared illumination to identify heat signatures in total darkness (0.001 Lux)." },
      { q: "Can the units detect copper theft from inside buildings?", a: "We strategically position units to monitor primary ingress/egress points and utilize acoustic sensors to detect material vibrations." },
      { q: "What happens if a unit is tampered with?", a: "The unit features 360° proximity sensors and on-board telemetry that triggers an immediate UL-listed monitoring response if shifted." }
    ]
  },
  "parking-lots": {
    name: "Parking Management",
    desc: "Vast expanses of civilian vehicles present severe liability and catalytic converter theft targets. Z1 surveillance systems automate total perimeter defense.",
    img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "HIGH",
    telemetryStats: [
      { label: "US_PROPERTY_CRIME_LOTS", value: "10.0%" },
      { label: "VIOLENT_CRIME_RATIO", value: "7.3%" },
      { label: "CATALYTIC_RISK_INDEX", value: "ELEVATED" }
    ],
    tacticalStats: [
      { title: "Property Crime", value: "10%", desc: "Percentage of all US property crimes that occur within parking facilities.", icon: "AlertTriangle", color: "red" },
      { title: "Liability Payouts", value: "$250K+", desc: "Average legal settlement for 'slip and fall' or 'assault' claims due to poor lighting.", icon: "TrendingUp", color: "red" },
      { title: "Vandalism Rate", value: "HIGH", desc: "Unsecured lots face a 40% higher probability of vehicle break-ins and graffiti.", icon: "ShieldAlert", color: "red" },
      { title: "ORC Impact", value: "+14%", desc: "Year-over-year increase in Organized Retail Crime (ORC) affecting retail parking lots.", icon: "BarChart3", color: "red" }
    ],
    faqs: [
      { q: "Does the system scan license plates?", a: "Yes, our Z1 units can be configured with LPR (License Plate Recognition) to log all vehicles entering the facility." },
      { q: "Can one unit cover an entire parking lot?", a: "A single Z1 Guardian can monitor up to a 100-yard radius, providing coverage for approximately 150-200 parking stalls." }
    ]
  },
  "events": {
    name: "Event Security",
    desc: "Short-term mass gatherings require massive intelligence and crowd flow analytics without permanent hardware installation.",
    img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "ELEVATED",
    telemetryStats: [
      { label: "DEPLOYMENT_WINDOW", value: "15MIN" },
      { label: "PEAK_CROWD_DENSITY", value: "MAX" },
      { label: "PERIMETER_BREACH_DATA", value: "ACTIVE" }
    ],
    tacticalStats: [
      { title: "Rapid Deploy", value: "15MIN", desc: "Z1 units go from trailer to 30ft operational status in under fifteen minutes.", icon: "Zap", color: "teal" },
      { title: "Coverage Span", value: "360°", desc: "Total panoramic visibility allows for simultaneous monitoring of VIP, Gates, and Main Stage.", icon: "Crosshair", color: "teal" },
      { title: "Crowd Flow AI", value: "LIVE", desc: "Automated crowd density alerts prevent bottlenecks and potential safety hazards.", icon: "BarChart3", color: "teal" },
      { title: "No-Utility Op", value: "100%", desc: "100% solar and LiFePO4 battery power ensures operation even if site power fails.", icon: "Target", color: "teal" }
    ],
    faqs: [
      { q: "Can we view the video from our mobile phones?", a: "Yes, we provide a secure Cloud VMS login for authorized event staff to view live feeds 24/7." },
      { q: "How do you handle the crowd noise or lighting at night?", a: "Our cameras are optimized for dynamic range (WDR) and can capture clear faces even with strobe lights and mass concert lighting." }
    ]
  },
  "oil-gas": {
    name: "Oil & Gas Logistics",
    desc: "Remote perimeters devoid of power or cellular connectivity. Protecting critical infrastructure from sabotage requires elite edge-computing.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "CRITICAL",
    telemetryStats: [
      { label: "ANNUAL_METAL_THEFT", value: "$2.0B" },
      { label: "REMOTE_RESPONSE_DELAY", value: "45MIN+" },
      { label: "OIL_DIVERSION_EST", value: "3.0%" }
    ],
    tacticalStats: [
      { title: "Petroleum Theft", value: "$2.0B", desc: "Estimated annual loss from organized petroleum and equipment theft in Texas alone.", icon: "AlertTriangle", color: "red" },
      { title: "Remote Risk", value: "45MIN", desc: "Average law enforcement response time to remote Permian Basin wellheads.", icon: "MapPin", color: "red" },
      { title: "Barrel Loss", value: "500/WK", desc: "Estimated weekly volume of stolen crude in active 'hot spot' counties like Martin.", icon: "BarChart3", color: "red" },
      { title: "Asset Sabotage", value: "HIGH", desc: "Remote valves and pumpjacks are primary targets for sabotage and copper stripping.", icon: "ShieldAlert", color: "red" }
    ],
    faqs: [
      { q: "Does the system work in the Texas heat?", a: "Our units are engineered for 115°F+ environments using thermal-stabilized LiFePO4 battery arrays." },
      { q: "How do you get internet to remote wellheads?", a: "Z1 Trailers utilize StarLink options for low-latency, satellite-based video uplinks in zero-cell zones." }
    ]
  },
  "law-enforcement": {
    name: "Law Enforcement",
    desc: "Rapid deployment for high-crime hot spots, special operations, and temporary surveillance for critical public safety surges.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "HIGH",
    telemetryStats: [
      { label: "CRIME_VEHICLE_LINK", value: "70.0%" },
      { label: "LPR_SUCCESS_RATE", value: "99.8%" },
      { label: "HOT_SPOT_DETERRENCE", value: "ACTIVE" }
    ],
    tacticalStats: [
      { title: "Intelligence Link", value: "70%", desc: "Percentage of crimes that correlate with a specific vehicle entry or exit.", icon: "Crosshair", color: "blue" },
      { title: "LPR Accuracy", value: "99.8%", desc: "Z1 License Plate Recognition captures data at speeds up to 100MPH in total darkness.", icon: "Target", color: "blue" },
      { title: "Public Safety", value: "ELITE", desc: "Visual deterrence of mobile units reduces active burglaries by up to 40% in hot zones.", icon: "ShieldCheck", color: "blue" },
      { title: "Evidence Storage", value: "120_DAYS", desc: "Tethered storage arrays maintain 4K evidence for long-term prosecution efforts.", icon: "Lock", color: "blue" }
    ],
    faqs: [
      { q: "Can we integrate this with our existing RTCC?", a: "Yes, our units support ONVIF and RTSP protocols for seamless integration into Real Time Crime Centers." },
      { q: "Is the video data encrypted?", a: "All streams are AES-256 encrypted at the source and piped through secure VPN tunnels to your command center." }
    ]
  },
  "car-dealerships": {
    name: "Auto Dealerships",
    desc: "Open-air showrooms displaying millions of dollars of inventory. Auto dealerships need sophisticated monitoring to catch extremely fast smash-and-grabs.",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "CRITICAL",
    telemetryStats: [
      { label: "WHEEL_THEFT_INDEX", value: "HIGH" },
      { label: "CASING_TIME_AVG", value: "14MIN" },
      { label: "LOT_SQUARE_FOOTAGE", value: "VARIABLE" }
    ],
    tacticalStats: [
      { title: "Inventory Value", value: "$15.0M", desc: "Average total vehicle value exposed in open-air lots during non-operational hours.", icon: "ShieldAlert", color: "red" },
      { title: "Smash-and-Grab", value: "MAX", desc: "Quick-entry theft vectors are the primary threat for catalytic converters and internal tech.", icon: "AlertTriangle", color: "red" },
      { title: "LPR Monitoring", value: "LIVE", desc: "AI logs all suspicious vehicles casing the perimeter during late-night cycles.", icon: "Target", color: "red" },
      { title: "Damage Recovery", value: "100%", desc: "High-definition evidence ensures successful prosecution and insurance claim recovery.", icon: "ShieldCheck", color: "red" }
    ],
    faqs: [
      { q: "How do you detect thieves in between cars?", a: "Our units are elevated to 30ft, allowing for top-down visibility that eliminates blind spots between inventory rows." },
      { q: "Does the strobe light distract law enforcement?", a: "No, the strobes are programmable to trigger only upon AI-verified intrusion, assisting first responders in locating the threat." }
    ]
  },
  "school-campuses": {
    name: "Education Campuses",
    desc: "Protecting the sprawling infrastructure and student body of modern education centers without creating a prison-like environment.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    threatLevel: "ELEVATED",
    telemetryStats: [
      { label: "VULNERABLE_ENTRIES", value: "MANY" },
      { label: "RESPONSE_TIME_GOAL", value: "< 2MIN" },
      { label: "PERIMETER_MONITORING", value: "ACTIVE" }
    ],
    tacticalStats: [
      { title: "Incident Deterrence", value: "85%", desc: "Observed reduction in after-hours trespassing and vandalism upon deployment.", icon: "ShieldCheck", color: "blue" },
      { title: "Rapid Alert", value: "< 2S", desc: "Time from AI breach verification to campus security notification.", icon: "Zap", color: "blue" },
      { title: "Total Coverage", value: "360°", desc: "Thermal imaging covers vast sports fields and parking structures from a central unit.", icon: "Crosshair", color: "blue" },
      { title: "Utility Resilience", value: "HIGH", desc: "Solar-backed arrays ensure surveillance remains operational during campus power outages.", icon: "Lock", color: "blue" }
    ],
    faqs: [
      { q: "Can we use this for sports events?", a: "Yes, Z1 units are mobile and can be relocated from dorm parking to stadium gates for game-day surges." },
      { q: "Is the video data stored on-site?", a: "Data is processed at the edge but redundantly stored in the cloud for secure retrieval by law enforcement." }
    ]
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
    title: `${ind.name} Surveillance Operations // Tactical Briefing`,
    description: ind.desc,
    alternates: {
      canonical: `/industries/${slug}`
    }
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = industriesDb[slug];
  
  if (!ind) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "isPartOf": {
      "@id": "https://www.z1trailers.com/#organization"
    },
    "mainEntity": ind.faqs.map((faq: { q: string, a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <main className="bg-brand-navy min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SectorHero 
        name={ind.name}
        desc={ind.desc}
        img={ind.img}
        threatLevel={ind.threatLevel}
        stats={ind.telemetryStats}
      />
      
      <TacticalStats stats={ind.tacticalStats} />

      <section className="py-24 bg-brand-ice text-brand-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none mb-8">
              Strategic <br/>Deployment <span className="text-brand-teal">Protocol.</span>
            </h2>
            <p className="font-mono text-sm leading-loose tracking-widest uppercase font-bold text-brand-navy/70">
              The Z1 ecosystem is engineered for total sector overmatch. We don't just record crime; we anticipate it. Through AI-verified threat detection and military-grade hardware, we ensure your assets remain uncompromised in the most hostile environments.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
               <Link href="/get-a-quote" className="px-8 py-4 bg-brand-navy text-white font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-brand-teal hover:text-brand-navy hover:scale-105">
                 Deploy Sector Defense
               </Link>
               <Link href="/contact" className="px-8 py-4 border border-brand-navy text-brand-navy font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-brand-navy hover:text-white">
                 Request Tactical Briefing
               </Link>
            </div>
          </div>
          <div className="relative group overflow-hidden border-8 border-white shadow-2xl">
            <img src={ind.img} alt="Operation View" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 h-[400px] object-cover" />
            <div className="absolute inset-0 bg-brand-teal/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-4 right-4 bg-brand-navy text-white px-4 py-2 font-mono text-[9px] uppercase tracking-widest font-black">
              LIVE_TAC_FEED // SECURED
            </div>
          </div>
        </div>
      </section>

      <IndustryFAQ faqs={ind.faqs} />

      {/* CTA Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-teal/5 animate-pulse" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h3 className="font-display font-black text-4xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
             Mission <span className="text-white/20">Critical</span> Ready.
           </h3>
           <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-12">
             [ JOIN THE NATIONWIDE GRID // 50 STATES PROTECTED ]
           </p>
           <Link href="/get-a-quote" className="group inline-flex items-center space-x-6">
              <span className="font-display font-black text-3xl text-brand-teal hover:text-white transition-colors uppercase tracking-widest">
                Get a Quote
              </span>
              <div className="w-16 h-[1px] bg-brand-teal group-hover:w-32 transition-all duration-500" />
           </Link>
        </div>
      </section>
    </main>
  );
}
