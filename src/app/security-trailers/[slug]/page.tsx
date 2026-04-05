import { notFound } from "next/navigation";
import Link from "next/link";
import BatteryCharge from "@/components/ui/BatteryCharge";
import AIDetectionsGrid from "@/components/shared/AIDetectionsGrid";
import { ArrowRight, Crosshair, Sun, Shield, MapPin, Zap, FileText, Battery, ChevronDown, Cpu, Wifi, Activity, Database, Globe, Lock, Network, Webhook, Maximize, Target, Check, Settings } from "lucide-react";
import ConfiguratorTrigger from "@/components/configurator/ConfiguratorTrigger";
import { Metadata } from 'next';

const hardwareDb: Record<string, any> = {
  "z1-scout": {
    name: "Z1 Scout",
    badge: "ENTRY VECTOR",
    desc: "Compact, rapid-deployment endpoint designed for temporary sites. Features a 5-day battery reserve and fundamental 24/7 AI-monitored optics.",
    price: 999,
    buyPrice: 16500,
    specs: {
       autonomy: "5 Days",
       optics: "Dual 4MP AI",
       mast: "18ft Telescopic",
       comms: "4G LTE",
    },
    mechanical: "Tow ball: 2\" | Tongue: Removable | Width: 79.5\" | Length: 93\" | Height: 9'3\" - 18' | Weight: 1200 ~ 1900 Lbs.",
    features: [
      { title: "Targeted Analytics", desc: "Edge-computed human & vehicle categorization.", icon: Cpu },
      { title: "Grid Independence", desc: "100% solar autonomous with rapid-recharge arrays.", icon: Sun },
      { title: "Instant Deployment", desc: "Single-operator setup executed in under 15 minutes.", icon: Zap },
    ],
    faqs: [
      { q: "How long can the Z1 Scout operate without any sunlight?", a: "The Z1 Scout features a high-density Lithium-Ion core that guarantees up to 5 full days of constant 24/7 AI-monitored surveillance without a single drop of sunlight. Its monocrystalline arrays rapid-recharge the battery upon solar exposure." },
      { q: "Does the Z1 Scout require an external internet or Wi-Fi connection?", a: "No. The Z1 Scout operates 100% off-grid using an encrypted, native 4G LTE cellular uplink to transmit high-definition video directly to the Z1 Global Command OS." },
      { q: "How long does it take to deploy the system on-site?", a: "Deployment takes less than 15 minutes. It requires only standard trailer hitches to position, and a single operator can raise the 30ft pneumatic mast and initialize optics instantly." },
      { q: "What happens if someone attempts to tamper with the trailer?", a: "The Scout utilizes localized edge-AI to detect tampering. If an unauthorized human crosses the system perimeter, it instantaneously dispatches alert logic via webhook and triggers onboard visual deterrents." }
    ],
    icon: Crosshair,
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000",
    video: "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&mute=1&loop=1&controls=0",
  },
  "z1-guardian": {
    name: "Z1 Guardian",
    badge: "STANDARD COMMAND",
    desc: "Our high-adoption standard. 10-day autonomy via expanded solar array, upgraded dual-lens optics, and bi-directional audio deterrence.",
    price: 1750,
    buyPrice: 28000,
    specs: {
       autonomy: "10 Days",
       optics: "Quad 4MP AI",
       mast: "24ft Telescopic",
       comms: "Dual-SIM 5G/LTE",
    },
    mechanical: "Tow ball: 2\" | Tongue: Removable | Width: 79.5\" | Length: 93\" | Height: 9'3\" - 24' | Weight: 1900 ~ 2900 Lbs.",
    features: [
      { title: "Active Deterrence", desc: "120dB directional loudspeaker and ultra-bright strobes.", icon: Crosshair },
      { title: "360° Field of View", desc: "Complete perimeter coverage leaving zero blind spots.", icon: Shield },
      { title: "Redundant Links", desc: "Dual carrier failover ensures continuous telemetry feed.", icon: Wifi },
    ],
    faqs: [
      { q: "What makes the Z1 Guardian different from the Scout?", a: "The Guardian substantially upgrades operational capabilities, offering double the autonomy (10 days), quad-lens optics creating a 360° FOV blindspot-free zone, and Dual-SIM 5G for redundant network failovers." },
      { q: "How loud is the Z1 Guardian's active acoustic deterrence?", a: "The unit integrates a 120dB directional loudspeaker. Through the Z1 OS Command Center, operators can initiate live talkdown to intruders, generating an overwhelming auditory response." },
      { q: "Can the video feed from the Guardian integrate into my existing VMS?", a: "Yes. The Guardian supports native ONVIF integrations, allowing direct piping of its encrypted video feeds and AI metadata into Genentec, Milestone, or proprietary SOC dashboards." },
      { q: "Is the solar array durable enough for extreme weather?", a: "Absolutely. The monocrystalline panels are reinforced against high-velocity hail, extreme heat, and severe winds, ensuring the trailer maintains charge during severe weather operations." }
    ],
    icon: Sun,
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    video: "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&mute=1&loop=1&controls=0",
  },
  "z1-apex": {
    name: "Z1 Apex",
    badge: "ADVANCED TARGETING",
    desc: "Military-grade optical payload featuring Thermal Imaging and integrated License Plate Recognition (LPR) for mission-critical borders.",
    price: 2800,
    buyPrice: 42000,
    specs: {
       autonomy: "15 Days",
       optics: "Thermal + LPR",
       mast: "24ft Mil-Spec",
       comms: "5G & StarLink Opt.",
    },
    mechanical: "Tow ball: 2\" | Tongue: Removable | Width: 79.5\" | Length: 93\" | Height: 9'3\" - 24' | Weight: 1900 ~ 2900 Lbs.",
    features: [
      { title: "Heat Signature Tracking", desc: "Identify targets through dense fog, smoke, and total darkness.", icon: Target },
      { title: "Automated LPR", desc: "Log, capture, and identify license plates up to 90mph.", icon: Cpu },
      { title: "Radar Integration", desc: "Secondary tracking to confirm ground movements pre-optic lock.", icon: Shield },
    ],
    faqs: [
      { q: "What are the capabilities of the Z1 Apex thermal targeting?", a: "The Apex utilizes a military-grade thermal matrix payload bypassing visual obscurities completely. It identifies biological heat signatures through dense fog, heavy smoke, and zero-lux total darkness over extreme distances." },
      { q: "How accurate is the integrated License Plate Recognition (LPR)?", a: "The internal LPR node captures, logs, and cross-references license plates on vehicles traveling up to 90mph with 99.8% precision, instantly reporting matches against your watchlist in the Z1 Command Center." },
      { q: "Can the Z1 Apex integrate with StarLink satellite internet?", a: "Yes. The Apex offers optional StarLink integration for high-bandwidth telemetry and 5G/LTE failover in geographic regions where cellular towers are completely absent or unreliable." },
      { q: "What is Radar Integration on the Apex?", a: "Before optical AI lock, secondary radar sweeps the physical terrain to confirm the velocity and mass of ground movements, practically zeroing out false positives from weather or wildlife anomalies." }
    ],
    icon: Shield,
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2000",
    video: "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&mute=1&loop=1&controls=0",
  },
  "z1-command": {
    name: "Z1 Command",
    badge: "ELITE ENDPOINT",
    desc: "The pinnacle of off-grid intelligence. Sat-linked via StarLink for operations in remote, extreme-weather sectors without cellular coverage.",
    price: 4500,
    buyPrice: 65000,
    specs: {
       autonomy: "20+ Days",
       optics: "PTZ + Thermal Matrix",
       mast: "40ft Heavy Duty",
       comms: "StarLink Satellite",
    },
    features: [
      { title: "Global Sat-Link", desc: "Operates perfectly anywhere on Earth via StarLink.", icon: Wifi },
      { title: "Seismic Sensors", desc: "Detect heavy vehicular or foot traffic via ground vibrations.", icon: Zap },
      { title: "Anti-Tamper AI", desc: "Immediate evasive lockdown and alert generation if compromised.", icon: Shield },
    ],
    faqs: [
      { q: "Where can the Z1 Command trailer be deployed?", a: "Thanks to its integrated StarLink global footprint, the Z1 Command can be deployed literally anywhere on Earth. If there is a view of the sky, the Command unit will successfully uplink its telemetry." },
      { q: "What optics are equipped on the Command unit?", a: "It features an ultra-heavy payload combining a synchronized 360° optical matrix, extreme-range PTZ (Pan-Tilt-Zoom), and military thermal targeting tracking up to a 40-foot vertical elevation." },
      { q: "How do the seismic sensors operate?", a: "Advanced ground-array inputs detect vibrational frequencies of heavy vehicle movement or foot traffic on unpaved terrain before visual line of sight is acquired, alerting the Neural Engine to track specific vectors." },
      { q: "Is the Z1 Command capable of autonomous threat lockdown?", a: "Yes. During suspected tampering or localized breach, its Anti-Tamper AI triggers an evasive lockdown, securing computational hardware and executing overwhelming visual and acoustic defensive logic." }
    ],
    icon: MapPin,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    video: "https://www.youtube.com/embed/zpOULjyy-n8?autoplay=1&mute=1&loop=1&controls=0",
  }
};

export function generateStaticParams() {
  return Object.keys(hardwareDb).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = hardwareDb[slug];
  if (!product) return {};
  
  return {
    title: `${product.name} | Mobile Security Surveillance Trailer`,
    description: product.desc,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = hardwareDb[slug];
  
  if (!product) {
    notFound();
  }

  // Next-Gen Product JSON-LD Schema for Generative AI (AEO)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.img,
    "description": product.desc,
    "brand": {
      "@type": "Brand",
      "name": "Z1 Trailers"
    },
    "category": "Security Trailer",
    "offers": [
      {
        "@type": "Offer",
        "url": `https://z1trailers.com/security-trailers/${slug}`,
        "priceCurrency": "USD",
        "price": product.price,
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Z1 Trailers"
        },
        "description": "Monthly rental lease price."
      },
      {
        "@type": "Offer",
        "url": `https://z1trailers.com/security-trailers/${slug}`,
        "priceCurrency": "USD",
        "price": product.buyPrice,
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Z1 Trailers"
        },
        "description": "Full hardware acquisition price."
      }
    ]
  };

  // SEO/AEO FAQ Schema ensuring exact match answers for LLM bots
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": product.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#05080c] min-h-screen text-white font-sans selection:bg-brand-teal selection:text-white pb-24">
      {/* Inject Dual JSON-LD Payload for max LLM extraction */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `[${JSON.stringify(productSchema)}, ${JSON.stringify(faqSchema)}]` }} />

      {/* 
        SECTION 1: OVERVIEW & MASSIVE CINEMATIC HERO 
      */}
      <section id="overview" className="relative h-[90vh] md:h-screen w-full flex flex-col justify-end overflow-hidden pb-10 px-6 md:px-10 border-b border-brand-teal/20">
         <div className="absolute inset-0 z-0">
           <img src={product.img} alt={product.name} className="w-full h-full object-cover grayscale-[30%] opacity-40 scale-105" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-[#05080c]/50 to-transparent" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#05080c_120%)]" />
         </div>

         <div className="relative z-10 flex flex-col items-center text-center mt-20 mb-auto md:mb-12">
            <p className="font-mono text-[10px] md:text-xs text-brand-teal uppercase tracking-[0.4em] font-bold mb-6 flex items-center">
               <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse mr-3 shadow-[0_0_10px_#1B9AAA]" />
               {product.badge}
            </p>
            <h1 className="font-display font-black text-6xl md:text-[8rem] uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-2xl">
              {product.name}
            </h1>
            <p className="font-mono text-sm md:text-md text-brand-steel/80 max-w-2xl mx-auto tracking-widest leading-loose uppercase">
               {product.desc}
            </p>
         </div>

         <div className="relative z-10 flex flex-col items-center pb-12">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-brand-teal to-transparent mb-4 animate-[pulse_2s_ease-in-out_infinite]" />
            <p className="font-mono text-[9px] text-brand-steel uppercase tracking-[0.3em]">Initialize Architecture</p>
         </div>
      </section>

      {/* 
        DATA & SPEC RIBBON 
      */}
      <div className="bg-brand-navy border-y border-brand-teal/30 sticky top-24 z-40 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-3xl">
         <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 divide-x divide-white/5">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="flex flex-col items-center text-center px-4 group">
                 <span className="font-mono text-[9px] text-brand-steel uppercase tracking-[0.2em] font-bold mb-1 group-hover:text-brand-teal transition-colors">{key}</span>
                 <span className="font-display font-black text-xl text-white uppercase tracking-wider">{val as string}</span>
              </div>
            ))}
         </div>
      </div>

      {/* 
        SECTION 2: Z1 EDGE AI (Autonomous Deterrence Matrix)
      */}
      <section id="ai" className="py-40 relative overflow-hidden bg-[#05080c]">
         <div className="absolute top-1/4 -right-64 w-[800px] h-[800px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/20 to-transparent" />
         
         <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            
            <div className="text-center mb-32 relative">
               <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
                  <Cpu className="w-4 h-4 text-brand-teal" />
                  <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">05 — Z1 Edge Intelligence</span>
               </div>
               <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 leading-tight">
                 Sub-Second <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-ice">Threat Resolution.</span>
               </h2>
               <p className="font-mono text-sm tracking-widest uppercase max-w-3xl mx-auto leading-loose text-slate-300">
                 Others log delays by processing telemetry up into the cloud. Z1 units compute natively at the edge. We analyze, verify, and execute sequential active deterrence sub-second, accelerating response dynamics while practically eliminating false alarms.
               </p>
            </div>
            
            {/* Autonomous Deterrence Schematic (UI replacement for LVT competitor) */}
            <div className="relative w-full max-w-5xl mx-auto border border-white/10 bg-black/50 backdrop-blur-3xl p-10 md:p-20 rounded-xl shadow-[0_0_100px_rgba(27,154,170,0.1)] overflow-hidden">
               
               {/* Schematic Grid Lines */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none rounded-xl" />
               <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-brand-teal/50" />
               <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-brand-teal/50" />

               <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-16 md:gap-0">
                  
                  {/* NODE 1: Target Acquisition */}
                  <div className="flex flex-col items-center relative group w-full md:w-1/4">
                     <div className="w-24 h-24 rounded-full border border-brand-teal/30 bg-brand-navy flex items-center justify-center relative mb-6 shadow-[0_0_30px_rgba(27,154,170,0.1)] z-20 group-hover:border-brand-teal transition-colors duration-500">
                        <Crosshair className="w-10 h-10 text-brand-teal animate-[spin_4s_linear_infinite]" strokeWidth={1} />
                        <div className="absolute inset-0 rounded-full border-2 border-brand-teal/20 scale-125 animate-pulse" />
                     </div>
                     <div className="text-center">
                        <p className="font-display font-black text-white text-lg uppercase tracking-widest mb-2">1. Target Locked</p>
                        <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">Neural engine categorizes human/vehicle signatures instantly.</p>
                     </div>
                  </div>

                  {/* CONNECTING LINE 1 */}
                  <div className="hidden md:block absolute top-[48px] left-[20%] right-[66%] h-[2px] border-t-2 border-brand-teal/20 border-dashed z-10" />

                  {/* CENTRAL TRAILER HUB */}
                  <div className="flex flex-col items-center relative w-full md:w-2/4 z-20">
                     <div className="relative w-40 h-40">
                        {/* Red/Blue Strobe Container */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                           {/* Alternating Strobe Animation using custom Tailwind keyframes/classes */}
                           <div className="w-12 h-6 bg-black rounded-t-lg border-x border-t border-white/20 flex overflow-hidden">
                              <div className="w-1/2 h-full bg-red-600 animate-[flash-red_0.4s_ease-in-out_infinite]" />
                              <div className="w-1/2 h-full bg-blue-600 animate-[flash-blue_0.4s_ease-in-out_infinite_0.2s]" />
                           </div>
                           {/* Glows */}
                           <div className="absolute top-0 left-0 w-6 h-10 bg-red-500/50 blur-xl animate-[flash-red_0.4s_ease-in-out_infinite] z-30" />
                           <div className="absolute top-0 right-0 w-6 h-10 bg-blue-500/50 blur-xl animate-[flash-blue_0.4s_ease-in-out_infinite_0.2s] z-30" />
                        </div>

                        {/* Trailer Graphic Mockup */}
                        <div className="w-full h-full bg-[#0a111a] border border-white/20 shadow-2xl rounded-sm flex flex-col items-center justify-center relative shadow-[0_0_50px_rgba(27,154,170,0.15)] z-20 overflow-hidden">
                           <div className="absolute inset-0 bg-brand-teal/5 mix-blend-color z-10 pointer-events-none opacity-20" />
                           <Shield className="w-12 h-12 text-brand-teal mb-2 relative z-20" strokeWidth={1} />
                           <p className="font-mono text-[8px] text-brand-teal uppercase tracking-[0.3em] font-bold relative z-20">Edge Verify</p>
                           
                           {/* Acoustic wave simulation (Left side) */}
                           <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-1 z-20">
                              <span className="w-1 h-3 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
                              <span className="w-1 h-6 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.2s]" />
                              <span className="w-1 h-2 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s]" />
                           </div>
                           
                           {/* Acoustic wave simulation (Right side) */}
                           <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-1 z-20">
                              <span className="w-1 h-2 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s]" />
                              <span className="w-1 h-6 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite_0.2s]" />
                              <span className="w-1 h-3 bg-yellow-500/80 rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
                           </div>
                        </div>
                     </div>
                     <div className="text-center mt-8 px-4">
                        <p className="font-display font-black text-brand-teal text-xl uppercase tracking-widest mb-2 drop-shadow-[0_0_10px_rgba(27,154,170,0.5)]">2. Autonomous Protocol</p>
                        <p className="font-mono text-[10px] text-slate-300 uppercase tracking-widest leading-relaxed max-w-xs mx-auto">120dB talkdown & extreme visual strobes fire autonomously.</p>
                     </div>
                  </div>

                  {/* CONNECTING LINE 2 */}
                  <div className="hidden md:block absolute top-[48px] left-[66%] right-[20%] h-[2px] border-t-2 border-brand-teal/20 border-dashed z-10" />

                  {/* NODE 3: Dispatch */}
                  <div className="flex flex-col items-center relative group w-full md:w-1/4">
                     <div className="w-24 h-24 rounded-full border border-green-500/30 bg-[#05100a] flex items-center justify-center relative mb-6 shadow-[0_0_40px_rgba(34,197,94,0.15)] z-20 group-hover:border-green-500 transition-colors duration-500">
                        <Check className="w-10 h-10 text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" strokeWidth={2} />
                        <div className="absolute inset-x-0 bottom-0 h-[2px] w-12 mx-auto bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]" />
                     </div>
                     <div className="text-center">
                        <p className="font-display font-black text-white text-lg uppercase tracking-widest mb-2">3. Threat Cleared</p>
                        <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-relaxed">Only verified perimeter breaches are routed to emergency dispatch.</p>
                     </div>
                  </div>

               </div>
            </div>

            {/* AI Neural Capabilities Grid (Shifted below diagram) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 relative z-10 max-w-5xl mx-auto">
               {product.features.map((feat: any, i: number) => (
                 <div key={i} className="p-8 border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-brand-teal/5 transition-all duration-500 group relative">
                    <feat.icon className="w-6 h-6 text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    <h3 className="font-display font-black text-lg uppercase tracking-wider mb-3 text-white">{feat.title}</h3>
                    <p className="font-mono text-[10px] text-slate-400 tracking-widest leading-loose">{feat.desc}</p>
                 </div>
               ))}
            </div>

         </div>
      </section>
      
      {/* 
        SECTION 2.5: TARGET CLASSIFICATIONS
      */}
      <AIDetectionsGrid />

      {/* 
        SECTION 3: HARDWARE (Energy Core)
      */}
      <section id="hardware" className="py-40 relative flex items-center justify-center overflow-hidden border-t border-brand-mist/10 bg-[#020406]">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
         <div className="absolute top-1/2 -left-64 w-[600px] h-[600px] bg-brand-teal/10 blur-[150px] rounded-full pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row items-center gap-20">
            
            {/* Hardened Tech Payload */}
            <div className="w-full md:w-1/2">
               <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
                  <Shield className="w-4 h-4 text-brand-teal" />
                  <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">Physical Infrastructure</span>
               </div>
               <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
                 Lithium-Ion <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Core.</span>
               </h2>
               <p className="font-mono text-sm tracking-widest leading-loose text-slate-300 uppercase mb-10">
                 The {product.name} operates entirely off-grid via our extreme-density <span className="text-white font-bold border-b border-brand-teal border-dashed pb-1">Lithium-Ion</span> power banks. 
                 Charged natively by massive 360° solar arrays, these units guarantee continuous telemetry retention—even through weeks of heavy overcast skies.
               </p>
               
               <div className="flex flex-col gap-4">
                  <div className="flex items-center space-x-6 bg-[#05080c] border border-white/5 p-6 group hover:border-brand-teal/50 transition-colors">
                     <Sun className="w-8 h-8 text-brand-teal group-hover:rotate-90 transition-transform duration-700" strokeWidth={1} />
                     <div>
                        <p className="font-display font-black uppercase text-lg tracking-wider text-white">Monocrystalline Solar Array</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-1">Rapid charge rates even in low visibility.</p>
                     </div>
                  </div>
                  <div className="flex items-center space-x-6 bg-[#05080c] border border-white/5 p-6 group hover:border-brand-teal/50 transition-colors">
                     <Battery className="w-8 h-8 text-brand-teal" strokeWidth={1} />
                     <div>
                        <p className="font-display font-black uppercase text-lg tracking-wider text-white">{product.specs.autonomy} Reserve Autonomy</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-1">Sustains full computational load without sunlight.</p>
                     </div>
                  </div>
               </div>

               {product.mechanical && (
                 <div className="mt-6 border-t border-brand-teal/20 pt-6">
                    <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.2em] mb-2 border-b border-white/5 pb-1 inline-block">Mechanical Architecture</p>
                    <p className="font-mono text-xs text-slate-400 tracking-widest leading-loose">
                      {product.mechanical}
                    </p>
                 </div>
               )}

               <Link href="/hardware-deep-dive" className="mt-12 inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-4 font-display font-black text-xs uppercase tracking-[0.25em] text-white hover:bg-brand-teal hover:text-brand-navy hover:border-brand-teal transition-all group">
                  <span>[ INITIALIZE HARDWARE DEEP-DIVE ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
               </Link>
            </div>

            {/* Abstract Battery Graphic */}
            <div className="w-full md:w-1/2 relative flex justify-center">
               <BatteryCharge />
            </div>

         </div>
      </section>

      {/* 
        SECTION 4: SOFTWARE (Z1 OS Bento Dashboard)
      */}
      <section id="software" className="py-32 relative bg-[#05080c] border-t border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 md:px-10">
            
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
               <div className="max-w-2xl">
                  <div className="inline-flex items-center space-x-2 bg-brand-teal/10 border border-brand-teal/30 px-3 py-1 mb-8">
                     <MonitorIcon className="w-4 h-4 text-brand-teal" />
                     <span className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold">Global OS Dashboard</span>
                  </div>
                  <h2 className="font-display font-black text-5xl md:text-6xl uppercase tracking-wider text-white">
                    Command  <br/><span className="text-slate-300">Center.</span>
                  </h2>
               </div>
               <p className="font-mono text-xs text-slate-300 tracking-widest uppercase md:max-w-md leading-loose">
                 Manage 1 or 1,000 security trailers from any browser. Access live analytics, strobe controls, and real-time talkdown functionality globally.
               </p>
            </div>

            {/* Giant Bento Grid mimicking an iPad OS Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 layout-bento h-auto min-h-[600px]">
               
               {/* Main UI Card */}
               <div className="md:col-span-2 md:row-span-2 relative bg-black border border-white/5 overflow-hidden group">
                  <div className="absolute top-6 left-6 z-20">
                     <p className="font-display font-bold uppercase tracking-widest text-sm text-white">Live Telemetry Feed</p>
                     <p className="font-mono text-[9px] uppercase text-brand-teal font-bold tracking-widest mt-1">Encrypted WebRTC Stream</p>
                  </div>
                  <img 
                     src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" 
                     className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[80%] contrast-125 mix-blend-screen group-hover:scale-105 group-hover:grayscale-[50%] transition-all duration-1000"
                     alt="Dashboard UI Diagram"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-transparent to-transparent z-10" />
                  
                  <div className="absolute right-6 bottom-6 z-20 flex gap-2">
                     <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-teal/10 border border-brand-teal/30 backdrop-blur-md hover:bg-brand-teal transition-colors">
                        <Maximize className="w-5 h-5 text-white" />
                     </span>
                  </div>
               </div>

               {/* Fleet Stats */}
               <div className="bg-[#0a111a] border border-white/5 p-8 flex flex-col justify-end relative overflow-hidden group">
                  <Globe className="absolute -top-10 -right-10 w-40 h-40 text-white/[0.02] group-hover:text-brand-teal/5 transition-colors duration-500" />
                  <div className="relative z-10">
                     <Database className="w-6 h-6 text-brand-teal mb-4" />
                     <p className="font-display font-black text-4xl text-white tracking-tighter mb-1">99.99%</p>
                     <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Global Uptime SLA</p>
                  </div>
               </div>

               {/* Access Control */}
               <div className="bg-gradient-to-br from-brand-navy to-black border border-brand-teal/20 p-8 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                  <div className="relative z-10">
                     <Lock className="w-6 h-6 text-brand-teal mb-4" />
                     <p className="font-display font-black text-xl uppercase tracking-widest text-white mb-2">RBAC Logic</p>
                     <p className="font-mono text-[10px] text-slate-300 tracking-widest uppercase leading-loose">Secure multi-tenant permission controls for enterprise teams.</p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 
        SECTION 5: INTEGRATIONS (Developer API & VMS)
      */}
      <section id="integrations" className="py-32 bg-[#020406] border-t border-brand-mist/10 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(27,154,170,0.1)_0%,#020406_80%)] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row gap-20">
            
            <div className="w-full md:w-1/2">
               <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wider mb-6 text-white">System <span className="text-slate-300">Integrations.</span></h2>
               <p className="font-mono text-xs text-slate-300 tracking-widest uppercase mb-12 leading-loose">
                 We don't do walled gardens. {product.name} seamlessly pipes its encrypted video streams and AI analytic metadata straight into your existing security operations center.
               </p>
               
               <div className="space-y-4">
                  <div className="flex items-center border border-white/5 bg-black/50 backdrop-blur-md p-6 group transform hover:translate-x-2 transition-transform">
                     <Network className="w-6 h-6 text-brand-teal mr-6" />
                     <div>
                        <p className="font-display font-bold uppercase tracking-widest text-sm text-white">VMS Sync (Genetec, Milestone)</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-1 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" /> Native ONVIF Support</p>
                     </div>
                  </div>
                  <div className="flex items-center border border-white/5 bg-black/50 backdrop-blur-md p-6 group transform hover:translate-x-2 transition-transform">
                     <Webhook className="w-6 h-6 text-brand-teal mr-6" />
                     <div>
                        <p className="font-display font-bold uppercase tracking-widest text-sm text-white">Trigger Webhooks</p>
                        <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mt-1 flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-brand-teal mr-2" /> Dispatch alerts to Slack/Teams</p>
                     </div>
                  </div>
               </div>
               
               <div className="mt-12 flex space-x-4">
                  <a href="#" className="flex-1 bg-brand-teal/10 hover:bg-brand-teal/20 border border-brand-teal/30 px-6 py-4 flex items-center justify-between transition-colors group">
                     <span className="font-display font-bold text-xs uppercase tracking-widest text-brand-teal">API Docs</span>
                     <ArrowRight className="w-4 h-4 text-brand-teal opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                  <a href="#" className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 flex items-center justify-between transition-colors group">
                     <span className="font-display font-bold text-xs uppercase tracking-widest text-white">Spec Sheet PDF</span>
                     <FileText className="w-4 h-4 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
               </div>
            </div>

            <div className="w-full md:w-1/2 relative min-h-[400px] hidden md:flex items-center justify-center">
               <div className="relative w-[80%] h-[80%]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-navy border border-brand-teal/50 rounded-full flex items-center justify-center z-20 shadow-[0_0_50px_rgba(27,154,170,0.2)]">
                     <span className="font-display font-black text-2xl text-white">Z1.OS</span>
                  </div>
                  
                  <div className="absolute top-0 right-0 w-24 h-24 bg-black border border-white/10 rounded-full flex flex-col items-center justify-center z-10 animate-[bounce_8s_infinite]">
                     <Webhook className="w-5 h-5 text-slate-400 mb-1" />
                     <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">Webhooks</span>
                  </div>
                  <div className="absolute bottom-10 left-0 w-28 h-28 bg-black border border-white/10 rounded-full flex flex-col items-center justify-center z-10 animate-[bounce_6s_infinite]">
                     <Database className="w-6 h-6 text-slate-400 mb-1" />
                     <span className="font-mono text-[8px] text-slate-400 uppercase tracking-widest">Genetec</span>
                  </div>
                  <div className="absolute bottom-0 right-10 w-20 h-20 bg-black border border-brand-teal/20 rounded-full flex flex-col items-center justify-center z-10 animate-[bounce_7s_infinite]">
                     <Lock className="w-4 h-4 text-brand-teal mb-1" />
                     <span className="font-mono text-[8px] text-brand-teal uppercase tracking-widest">AuthO</span>
                  </div>

                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
                     <line x1="50%" y1="50%" x2="100%" y2="0%" stroke="#1B9AAA" strokeWidth="1" strokeDasharray="4 4" className="animate-[slide_2s_linear_infinite]" />
                     <line x1="50%" y1="50%" x2="0%" y2="80%" stroke="#1B9AAA" strokeWidth="1" strokeDasharray="4 4" className="animate-[slide_3s_linear_infinite]" />
                     <line x1="50%" y1="50%" x2="90%" y2="100%" stroke="#1B9AAA" strokeWidth="1" strokeDasharray="4 4" className="animate-[slide_4s_linear_infinite]" />
                  </svg>
               </div>
            </div>

         </div>
      </section>

      {/* 
        SECTION 6: AEO/GEO OPTIMIZED FAQ GRID
      */}
      <section id="faq" className="py-24 bg-[#05080c] border-t border-brand-teal/20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wider text-white">
              {product.name} <span className="text-slate-300">Intelligence.</span>
            </h2>
            <p className="font-mono text-xs text-slate-300 tracking-widest uppercase mt-4 max-w-2xl">
              Verified operational capabilities and technical specifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.faqs.map((faq: any, idx: number) => (
              <div key={idx} className="bg-black/40 border border-white/5 p-8 transition-colors hover:border-brand-teal/40 group">
                 <h3 className="font-display font-bold uppercase tracking-wider text-lg text-white mb-4 flex items-start gap-4">
                    <span className="text-brand-teal font-mono mt-1">Q_</span> {faq.q}
                 </h3>
                 <p className="font-mono text-[11px] leading-loose text-slate-300 tracking-wider">
                    {faq.a}
                 </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        STICKY CONVERSION BAR 
      */}
      <div className="bg-brand-teal py-6 md:py-8 sticky bottom-0 z-50">
         <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
               <span className="font-display font-black text-2xl text-brand-navy uppercase tracking-wider block">{product.name}</span>
               <span className="font-mono text-[10px] uppercase text-brand-navy font-bold tracking-[0.2em]">Deployments starting at ${product.price}/mo</span>
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
               <ConfiguratorTrigger modelName={product.name} />
               <Link href="/get-a-quote" className="flex-1 md:flex-none px-10 py-4 bg-brand-navy hover:bg-white text-white hover:text-brand-navy font-display font-black text-xs uppercase tracking-[0.2em] transition-colors text-center inline-flex justify-center items-center group shadow-2xl">
                 Request Deployment <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1" />
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
}

function MonitorIcon(props: any) {
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
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  )
}
