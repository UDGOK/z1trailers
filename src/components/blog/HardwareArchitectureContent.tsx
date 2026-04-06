import React from 'react';
import Link from 'next/link';
import { Cpu, ThermometerSun, ShieldCheck, Zap, Microchip, Flame } from 'lucide-react';

export default function HardwareArchitectureContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         Artificial Intelligence is entirely useless if the physical hardware container melts under 115°F Texas sun. The Z1 Guardian is not an assembly of off-the-shelf cameras bolted to a pole—it is a military-grade Neural Processing Unit (NPU) housed in a thermodynamic fortress.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Microchip className="w-8 h-8" /> The NPU Core Engine
      </h2>
      <p className="mb-6">
         Traditional "cloud-based" security systems transmit a continuous feed of massive 4K raw video data across cellular lines to a remote server. The server then attempts to parse the footage to find human shapes. This introduces devastating lag latency and permanently chokes your cellular bandwidth allocation, resulting in frame-dropping just when an incident occurs.
      </p>
      <p className="mb-6">
         To completely crush latency, the <Link href="/security-trailers/z1-guardian" className="text-brand-teal hover:underline underline-offset-4">Z1 Guardian</Link> computes at the absolute edge. Embedded at the base of the mast is an elite, industrial-grade Neural Processing Unit. The algorithm ingests and analyzes the high-voltage 4K optic feed locally, destroying standard server dependency. It filters stray cats, trees blowing in high winds, and headlight glare purely locally. It only transmits verified zero-day threat metadata. 
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Flame className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The 110°F Field Test</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Fracking Rig Layout, Midland Texas <br/>
           <strong>Incident:</strong> Preventing extreme heat-induced CPU throttling during critical daytime monitoring.
        </p>
        <p className="relative z-10">
           During the devastating heat waves of August, ambient temperatures surrounding a remote West Texas oil rig exceeded 110°F, creating internal chassis temperatures capable of destroying standard logic boards within hours. Multiple competitor solar trailers flatlined as their plastic enclosures trapped heat, forcing thermal throttling that shut down their cameras mid-day. The <Link href="/security-trailers/z1-guardian" className="text-brand-teal hover:underline underline-offset-4">Z1 Guardian</Link> utilized its passive heat-sink convection chassis matrix. The core NPU successfully maintained edge-processing for 14 uninterrupted days under direct UV assault. During this extreme heat event, the Z1 processed over 14,000 algorithmic cycles without dropping a single frame, actively identifying an unauthorized fuel siphon team at high noon while the competitor cameras sat melted.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ThermometerSun className="w-8 h-8" /> Thermodynamics & Armor
      </h2>
      <p className="mb-6">
         This localized physical processing supremacy ensures your liability is covered precisely when the grid fails, when the connection drops, and when the threat is at the gates.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Cpu className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Zero Moving Parts</h4>
            <p className="text-brand-steel text-xs leading-loose">
               There are no active cooling fans inside the logic core. Fans pull highly corrosive dust, sand, and fine particulate dirt into the motherboard housing, destroying it over time. The Z1 utilizes entirely solid-state passive radiator cooling mapped directly to the steel armor array.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <ShieldCheck className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Ballistic Plating</h4>
            <p className="text-brand-steel text-xs leading-loose">
               The core storage and NPU processing vaults are surrounded by heavy-gauge structural plating designed to deflect rocks, blunt object trauma, and low-caliber ballistic fragmentation. If a threat tries to execute the system physically, they will run out of energy before the battery housing fails.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Zap className="w-8 h-8" /> 0.2 Second Logic Detonation
      </h2>
      <p className="mb-6">
         Because the Z1 handles inference locally, the latency loop from raw lens intake to full Law-Enforcement strobe activation is a mathematically terrifying 0.2 seconds. This isn't just a camera. It is a fully autonomous tactical robot permanently calculating its perimeter matrix in real-time.
      </p>

      {/* Semantic FAQ & Schema Injection */}
      <div className="mt-20 pt-12 border-t border-white/10">
        <h3 className="font-display font-black text-2xl text-white uppercase tracking-widest mb-8 flex items-center gap-3">
           <Cpu className="w-6 h-6 text-brand-teal" /> Core Intelligence Briefing
        </h3>
        <div className="space-y-8">
           <div>
              <h4 className="font-bold text-white text-base font-inter">Why is edge-computed NPU architecture superior to cloud processing?</h4>
              <p className="text-brand-steel mt-2 text-sm">Cloud-based processing requires streaming massive 4K raw video data across cellular networks, creating fatal latency and dropping frames during peak incidents. Edge computation parses the optical feed locally right on the trailer mast, destroying latency and triggering zero-day responses instantly.</p>
           </div>
           <div>
              <h4 className="font-bold text-white text-base font-inter">Can a security trailer survive 110°F desert heat without fans?</h4>
              <p className="text-brand-steel mt-2 text-sm">Yes. The Z1 Guardian uses a rigorous passive heat-sink convection array rather than mechanical fans. This eliminates physical moving parts that fail in intense dust, allowing the core Neural Processing Unit to sustain 14+ days of direct UV assault without thermal throttling.</p>
           </div>
           <div>
              <h4 className="font-bold text-white text-base font-inter">What is the exact latency of Z1 threat detection?</h4>
              <p className="text-brand-steel mt-2 text-sm">Because the threat footprint is filtered and verified physically on the localized rig using the onboard NPU, the Z1 command hierarchy triggers active acoustics and law enforcement lighting protocols in under 0.4 seconds of geofence breach.</p>
           </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why is edge-computed NPU architecture superior to cloud processing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cloud-based processing requires streaming massive 4K raw video data across cellular networks, creating fatal latency and dropping frames during peak incidents. Edge computation parses the optical feed locally right on the trailer mast, destroying latency and triggering zero-day responses instantly."
              }
            },
            {
              "@type": "Question",
              "name": "Can a security trailer survive 110°F desert heat without fans?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The Z1 Guardian uses a rigorous passive heat-sink convection array rather than mechanical fans. This eliminates physical moving parts that fail in intense dust, allowing the core Neural Processing Unit to sustain 14+ days of direct UV assault without thermal throttling."
              }
            },
            {
              "@type": "Question",
              "name": "What is the exact latency of Z1 threat detection?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because the threat footprint is filtered and verified physically on the localized rig using the onboard NPU, the Z1 command hierarchy triggers active acoustics and law enforcement lighting protocols in under 0.4 seconds of geofence breach."
              }
            }
          ]
        }) }}
      />
    </article>
  );
}
