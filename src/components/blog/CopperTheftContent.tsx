import React from 'react';
import Link from 'next/link';
import { Shield, Target, Zap, Activity, ShieldAlert, Cpu } from 'lucide-react';

export default function CopperTheftContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         The escalation of Organized Retail Crime (ORC) networks has synthesized with industrial metal theft, making raw copper spooling the most liquid, untraceable black-market commodity on modern commercial <Link href="/industries/construction-sites" className="text-brand-teal hover:underline underline-offset-4">construction sites</Link>.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ShieldAlert className="w-8 h-8" /> The Anatomy of a Copper Strike
      </h2>
      <p className="mb-6">
         Copper wire is untraceable. Unlike industrial machinery or heavy-duty generators that carry active GPS telemetry or localized VIN etching, raw copper spools and stripped wire lack zero identifying markers. Once it leaves the boundary perimeter of a construction site, it is instantaneously fenced to scrap recyclers for roughly $3 to $4 per pound.
      </p>
      <p className="mb-6">
         A professional strike team can orchestrate a breach, load $40,000 worth of electrical conduits into an unmarked transit van, and vanish within exactly 6 to 9 minutes. The traditional methodology of perimeter security—chainlink fencing and a passive padlock—is mathematically proven to fail against thermal cutting torches and hydraulic bolt shears.
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12">
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4">Financial Blast Radius</h3>
        <ul className="space-y-4">
           <li className="flex items-start gap-4">
              <span className="text-brand-teal font-black mt-1">01.</span>
              <span><strong>The Material Cost:</strong> Replacing 500 feet of 4/0 industrial copper wiring carries an immediate capital expenditure penalty, frequently exceeding $25,000 depending on real-time market fluctuations.</span>
           </li>
           <li className="flex items-start gap-4">
              <span className="text-brand-teal font-black mt-1">02.</span>
              <span><strong>The Labor Penalty:</strong> The stolen wire was likely already pulled, organized, and staged. Your electrical contractors must now strip the damaged remnants, re-order the spools, and execute the identical labor loop twice.</span>
           </li>
           <li className="flex items-start gap-4">
              <span className="text-brand-teal font-black mt-1">03.</span>
              <span><strong>The Schedule Paralysis:</strong> Supply chain delays mean replacement spools might be 3 to 5 weeks backordered, halting drywall, HVAC, and all downstream mechanical schedules instantly.</span>
           </li>
        </ul>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Target className="w-8 h-8" /> Autonomous Deterrence Architecture
      </h2>
      <p className="mb-6">
         Passive recording is useless. Identifying an individual wearing a black balaclava via a grainy 1080p camera feed 14 hours after the extraction yields a 0% recovery rate. Your security posture must shift from <strong>Forensic Validation</strong> to <strong>Active Deterrence</strong>.
      </p>
      <p className="mb-12">
         <Link href="/security-trailers" className="text-brand-teal hover:underline underline-offset-4">Z1 Trailers</Link> utilize an edge-computed intelligence matrix explicitly engineered for zero-latency perimeter enforcement. When an unauthorized vector crosses an invisible geofence line around your staging yards, the Z1 command hierarchy triggers within 0.4 seconds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Cpu className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Neural Filtering</h4>
            <p className="text-brand-steel text-xs leading-loose">
               General motion sensors trigger on heavy winds, raccoons, and distant headlights. Z1's algorithm utilizes a Deep Learning engine to isolate explicit human posture and vehicular shapes, eradicating false-positive noise by 99.8%. Focus remains strictly on hostile infantry.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Activity className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Acoustic Overwhelm</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Upon target lock, the 20-foot telescopic mast detonates a 120-decibel active-acoustic siren array combined with blinding red/blue law enforcement strobe patterns. This immediately alters the psychological warfare matrix, forcing a retreat sequence from the perimeter.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Zap className="w-8 h-8" /> Total Threat Sovereignty
      </h2>
      <p className="mb-6">
         The most robust defense mechanism is an overwhelming show of force. Deploying a 4,000-pound tactical surveillance platform directly adjacent to your high-value electrical vaults fundamentally changes the mathematical risk/reward calculation of a copper theft syndicate.
      </p>
      <p className="mb-6">
         They will map your site. They will see the 360-degree PTZ turrets. They will see the solar telemetry arrays. They will attack the site down the street that operates off chainlink alone.
      </p>
    </article>
  );
}
