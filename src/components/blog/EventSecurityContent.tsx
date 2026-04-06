import React from 'react';
import { Users, Activity, ScanLine, Satellite, ShieldAlert, Navigation } from 'lucide-react';

export default function EventSecurityContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         Securing a 50,000+ attendee environment necessitates an immediate shift from linear ground-level logistics to aerial-grade situational overmatch. You cannot police massive volumetric crowd flow manually.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Users className="w-8 h-8" /> The Chaos of High-Density Events
      </h2>
      <p className="mb-6">
         A multi-stage outdoor music festival or sprawling championship tailgate is characterized by massive, unpredictable velocity clusters. Crowd density can shift abruptly, resulting in immense kinetic pressure on primary bottlenecks like entrance turnstiles, medical tents, and exit vectors.
      </p>
      <p className="mb-6">
         Relying heavily on standard security contractors standing at ground-level creates a horrific tactical disadvantage: they possess zero line-of-sight beyond a 15-foot radius. To govern dynamic crowd pressure, command operations require elevated, omni-directional optics transmitting real-time telemetric video. 
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Activity className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Autonomous Perimeter</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Massive Regional Music Festival (60,000+ Attendees) <br/>
           <strong>Incident:</strong> Emergency egress management during severe microburst weather anomaly.
        </p>
        <p className="relative z-10">
           With 18 Z1 Guardian units deployed in a massive ring around the sprawling 200-acre event complex, operators mapped the site in 3 hours. On day two, an unexpected severe microburst weather cell approached the venue, requiring immediate, orchestrated complex evacuation. Security Command utilized the 20-foot elevated PTZ (Pan-Tilt-Zoom) optics across the Z1 grid to identify major congestion pockets at the northern gates. Using the integrated edge loudspeakers mounted on the masts, operators deployed localized, booming crowd direction audio arrays, splitting the crowd pressure across secondary egress vectors. The entire density was diffused in under 12 minutes without a single pedestrian crush incident.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Navigation className="w-8 h-8" /> Tactical Elevation Advantage
      </h2>
      <p className="mb-6">
         Deployment velocity is the primary directive. Because event sites are leased temporarily, infrastructure must be completely sovereign.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <ScanLine className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Total Aerial Perspective</h4>
            <p className="text-brand-steel text-xs leading-loose">
               The 20 to 30-foot heavily fortified masts completely negate crowd obstruction. Central command achieves a god's-eye view of every staging area, VIP enclosure, and parking logistics hub simultaneously. AI modules auto-track individual erratic behavior irrespective of crowd depth.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Satellite className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Zero-Wire Dependency</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Event grids are notorious for cellular bandwidth collapse when 50,000 phones hit local towers. Z1 units feature redundant local SD caching arrays combined with StarLink satellite communication matrix capability. Our streaming integrity remains flawless when the civilian network flatlines.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ShieldAlert className="w-8 h-8" /> Uncontested Visual Dominance
      </h2>
      <p className="mb-6">
         Deploying military-grade, solar-powered hardware adorned with high-visibility law enforcement strobes creates an immediate psychological perimeter. The simple physical presence of a Z1 Trailer eradicates 90% of opportunistic theft, fencing jumpers, and localized vandalism before a single camera is actuated.
      </p>
    </article>
  );
}
