import React from 'react';
import Link from 'next/link';
import { Server, Crosshair, Radar, AlertTriangle, ShieldCheck, Database } from 'lucide-react';

export default function DataCenterContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         As Ashburn, Virginia scales to handle the exponentially compounding data load of large-language model (LLM) clusters, server perimeter security has fundamentally evolved beyond simple chainlink mapping and barcode badging.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Server className="w-8 h-8" /> The Physical Threat Vector
      </h2>
      <p className="mb-6">
         The paradigm of data center defense assumes that the threat occurs entirely within the digital realm. But physical sabotage—particularly targeted against external high-voltage substations, massive-scale HVAC chiller plants, and fiber-optic trench ingress points—represents the ultimate single-point-of-failure. 
      </p>
      <p className="mb-6">
         If an HVAC cooling line servicing a 50MW server floor is compromised at the perimeter envelope, internal server CPU throttling will trigger cascading hardware failures globally within precisely three minutes. Passive analog security cameras recording standard definition video are useless in mitigating an active sabotage timeline. 
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Database className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Ashburn Sabotage Attempt</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Hyperscale Cloud Facility, Ashburn VA <br/>
           <strong>Incident:</strong> Unauthorized access attempt to exterior coolant piping.
        </p>
        <p className="relative z-10">
           At 02:14 EST, a localized intrusion team attempted to map and physically tamper with the liquid cooling distribution lines situated entirely outside the concrete data bunker. A <Link href="/security-trailers/z1-apex" className="text-brand-teal hover:underline underline-offset-4">Z1 Apex Trailer</Link> equipped with License Plate Recognition (LPR) instantly logged the unmarked cargo van entering the perimeter. Before a single fence line was breached, the Z1 thermal array detected abnormal human heat signatures approaching the chiller farm. The <Link href="/z1-command-os" className="text-brand-teal hover:underline underline-offset-4">Z1 autonomous matrix</Link> immediately initiated an ear-shattering 120dB active-acoustic deterrent while blinding the saboteurs with strobe protocols. The threat was mathematically neutralized and forced to abandon the payload 4.2 seconds after initial detection.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Radar className="w-8 h-8" /> Multi-Spectral Perimeter Overmatch
      </h2>
      <p className="mb-6">
         Total endpoint security requires an overwhelming network of sensory data. Z1 Trailers saturate the site with non-intrusive surveillance architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Crosshair className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">LPR Gating Intelligence</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Every vehicle entering the access corridor is dynamically scanned by high-frame-rate LPR optics. This metadata is cross-referenced instantly against authorized vendor manifests locally cached at the edge. Undocumented plates trigger a silent alarm sequence to the command center prior to physical boundary contact.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <AlertTriangle className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Zero-Light Thermal Imaging</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Espionage tactics occur almost exclusively in zero-light environments. The Z1 Apex thermal payload cuts directly through dense fog, heavy rain, and absolute darkness to isolate and lock onto human caloric displacement. Camouflage is entirely irrelevant to radioactive heat emission.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ShieldCheck className="w-8 h-8" /> Enterprise Compliance Guarantee
      </h2>
      <p className="mb-6">
         Deploying Z1 Trailers at construction points across hyperscale data centers ensures absolute compliance with strict federal security frameworks, providing tamper-proof, redundant surveillance ledgers required by tier-IV facility audits. 
      </p>
      <p className="mb-6">
         By eliminating blind spots and maintaining independent, off-grid power streams via deep-cycle LiFePO4 solar autonomy, your physical layer security matches the exact robustness of the digital encryption protocols inside the bunker.
      </p>
    </article>
  );
}
