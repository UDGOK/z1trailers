import React from 'react';
import { ShoppingCart, Scan, AlertTriangle, Crosshair, MapPin, Database } from 'lucide-react';

export default function RetailORCContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         If an Organized Retail Crime (ORC) syndicate has already crossed the threshold of your glass storefront, you have already lost. The battle must be won at the absolute edge of the pavement perimeter using high-speed License Plate Recognition.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Scan className="w-8 h-8" /> Pushing the Perimeter Outward
      </h2>
      <p className="mb-6">
         Big Box retailers traditionally focus their multi-million dollar security budgets internally—purchasing massive dome camera networks over checkout aisles and hiring undercover loss prevention officers. However, modern ORC isn't opportunistic shoplifting. It involves highly coordinated smash-and-grab flash mobs executing a massive payload extraction in under 90 seconds. 
      </p>
      <p className="mb-6">
         By the time these threat actors swarm the entry vestibule, your unarmed loss-prevention officer is physically incapable of intervening safely. To defeat ORC, the tactical matrix must push the threat detection zone 300 feet outward—directly into the asphalt ingress points of your parking facility.
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <ShoppingCart className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Big-Box Intercept</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> High-Volume Electronics Retailer, Los Angeles CA <br/>
           <strong>Incident:</strong> Repeat ORC targeting high-end Apple displays utilizing stolen gateway vehicles.
        </p>
        <p className="relative z-10">
           A major electronics retailer was bleeding over $150,000 monthly due to highly aggressive ORC cells repeatedly smashing the main glass and looting high-ticket laptops. The syndicate always utilized stolen sedans without local plates. The retailer deployed a Z1 Apex Trailer directly at the solitary choke-point entrance of the massive mall parking lot. Because the Z1 Apex natively supports high-speed LPR (License Plate Recognition), the system instantly scanned a stolen Hyundai Elantra crossing the property line at 40 MPH. The NPU cross-referenced the plate payload against the national NCIC stolen vehicle database in real-time. A silent, priority-one alert was fired to local law enforcement and the store manager locked down the automated vestibule doors entirely before the operators could even park the car. Denied entry, the syndicate fled and was apprehended two miles down the highway.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Crosshair className="w-8 h-8" /> LPR Database Dominance
      </h2>
      <p className="mb-6">
         A camera that just records plates is a passive liability. Our architecture actively matches plates against vast datasets locally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Database className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Known-Threat Blacklisting</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Retailers can manually flag repeat offenders, aggressive trespassers, or recently fired hostile employees into the Z1 OS. If that specific vehicle ever maps onto your asphalt again, the system generates an absolute red-alert directly to your mobile command center instantly.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <MapPin className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">National Retail Federation Sync</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Because ORC factions travel across county and state lines hitting multiple targets in a singular sweep, enterprise clients can share vehicle plate metadata across multiple regions. If a syndicate hits your Houston branch, your Dallas branch's Z1 trailer will lock them out immediately upon approach the next day.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <AlertTriangle className="w-8 h-8" /> Zero Safe Harbors
      </h2>
      <p className="mb-6">
         The visual deterrence of a 20-foot law enforcement strobe tower actively tracking vehicles in a retail lot fundamentally breaks the confidence matrix of an ORC gang. They rely heavily on the assumption that parking lots are dead zones for security. The Z1 weaponizes the parking lot against them.
      </p>
    </article>
  );
}
