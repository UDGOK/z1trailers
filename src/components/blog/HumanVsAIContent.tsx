import React from 'react';
import Link from 'next/link';
import { UserX, Cpu, Eye, Clock, ShieldAlert, Crosshair } from 'lucide-react';

export default function HumanVsAIContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         The primary vulnerability in perimeter security is physiological. Human security guards are crippled by severe fatigue, exceptionally limited fields of vision, and extreme susceptibility to environmental elements and bribery. An AI never sleeps.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <UserX className="w-8 h-8" /> The Biological Liability
      </h2>
      <p className="mb-6">
         The traditional deployment model for a high-value commercial construction site or sprawling <Link href="/industries/parking-lots" className="text-brand-teal hover:underline underline-offset-4">auto dealership</Link> involves contracting an unarmed night guard for $20 to $30 an hour. They are tasked with maintaining unbroken visual awareness over a massive 15-acre perimeter entirely in the pitch black between the hours of 18:00 and 06:00. This is biologically impossible.
      </p>
      <p className="mb-6">
         Statistics indicate that human attention spans during low-stimulus observation drastically collapse after just 20 minutes. Compounded by plunging midnight temperatures, smartphone distractions, and simple physical exhaustion, the vast majority of physical security guards retreat to their vehicles and inevitably sleep during peak threat hours.
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Eye className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Inside Job Failure</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Tier-1 Dealership Logistics Lot, Atlanta GA <br/>
           <strong>Incident:</strong> Orchestrated multi-vehicle extraction bypassing human enforcement.
        </p>
        <p className="relative z-10">
           An auto group leasing a secondary overflow lot was losing inventory despite employing a $6,000/month human security patrol. The thieves routinely accessed the western chainlink fence at 03:00. A forensic audit later revealed the human guard was not just sleeping—he was actively compromised, accepting micro-bribes to park on the eastern perimeter and turn his vehicle's radio up to ignore the angle grinders breaching the gate. The auto group terminated the human contract immediately and deployed two <Link href="/security-trailers/z1-apex" className="text-brand-teal hover:underline underline-offset-4">Z1 Apex Trailers</Link> for 60% less capital expenditure. The Z1 requires no bribes, features infinite peripheral vision across dual PTZ cameras, and mathematically cannot experience fatigue. On week two, the same syndicate attempted a breach and was met instantly with a 120-decibel autonomous siren blast directly to their faces, forcing an immediate, panicked retreat.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Cpu className="w-8 h-8" /> Mathematical Optical Omniscience
      </h2>
      <p className="mb-6">
         Replacing human variance with robotic determinism fundamentally changes your exposure surface. A camera array processes visual input exponentially faster than a human retina.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Clock className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">24/7/365 Maximum Alertness</h4>
            <p className="text-brand-steel text-xs leading-loose">
               The Guardian Neural Processing Engine operates at 100% capacity continuously. It does not blink. It does not take restroom breaks. At 04:14 AM on a frigid Sunday morning, the Z1 is scanning its environment with the exact same lethal precision it had at 2:00 PM on Tuesday.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Crosshair className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Hyper-Spectral Physics</h4>
            <p className="text-brand-steel text-xs leading-loose">
               A human guard standing with a flashlight can see approximately 40 feet in heavy fog. A Z1 Apex equipped with uncooled VOx Thermal radiation matrices can instantly lock onto the radioactive heat signature of a trespasser lurking deep in the woods 800 feet away.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ShieldAlert className="w-8 h-8" /> The Economic Superiority
      </h2>
      <p className="mb-6">
         A standard security guard costs an organization upwards of $80,000 annually. A fully autonomous, thermally equipped, 20-foot tall robotic platform costs a mere fraction of that—delivering vastly superior, objectively provable deterrence without the associated HR liabilities or biological weaknesses.
      </p>
    </article>
  );
}
