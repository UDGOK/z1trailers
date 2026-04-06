import React from 'react';
import { CloudRain, Sun, CloudLightning, BatteryCharging, Power, Activity } from 'lucide-react';

export default function RenewableSecurityContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         Mobile security that depends on diesel generators or tethered 120V shore power is an operational liability. True autonomous off-grid sovereignty is measured not by performance under peak sunlight, but by total computational resilience during 10-day torrential overcast phenomena.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <CloudRain className="w-8 h-8" /> The Overcast Survival Metric
      </h2>
      <p className="mb-6">
         The standard flaw in the solar surveillance industry is the systemic under-sizing of photovoltaic (PV) arrays by low-end vendors seeking to minimize production costs. A standard trailer deploying one or two 100W panels will reliably charge their batteries in Arizona in June. However, when deployed to the Pacific Northwest during a 2-week continuous atmospheric river event where solar irradiance drops to 15%, these under-equipped arrays mathematically fail to output enough wattage to outpace the draw of their own cameras.
      </p>
      <p className="mb-6">
         Z1 limits this failure point through deliberate extreme over-engineering. Our Z1 Guardian and Apex models integrate a massive 1200W+ expandable monocrystalline solar wing system. This over-sized intake ensures that even at a catastrophic 15% irradiance efficiency due to heavy storm clouds, the panels are physically large enough to scavenge enough ambient photons to sustain the 24/7 Neural Processing Unit. 
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <CloudLightning className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Seattle Mega-Storm</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Tier-1 Port Logistics Hub, Seattle WA <br/>
           <strong>Incident:</strong> Uninterrupted optical deterrence during a 9-day Category 4 atmospheric river zero-sun event.
        </p>
        <p className="relative z-10">
           A sprawling port authority managing hundreds of millions in overseas container traffic experienced a localized grid failure during a massive Pacific weather front. The storm blocked direct sunlight for 9 consecutive days while simultaneously cutting shore power to all external lighting arrays. The port was plunged into total darkness, and the competitor's perimeter cameras completely drained their batteries by day 3 and deactivated. However, the 15 Z1 Apex units deployed across the northern transit corridor utilized their deep 10-day LiFePO4 battery vaults. Because the massive 1200W solar arrays on the Z1 were able to trickle-charge the batteries purely on ambient, gray-sky UV scattering during the limited daytime, the state-of-charge never dropped below 34%. At day 7 of the storm, the Z1's active thermal imaging successfully intercepted an organized cargo-pillaging cell entering via a damaged fence, utilizing their own onboard power to run the 120dB acoustic sirens to repel the threat. Total 100% operational uptime maintained without a single generator or cord.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Sun className="w-8 h-8" /> Smart Charge Controller Matrix
      </h2>
      <p className="mb-6">
         Solar array size means nothing without algorithmic distribution of the raw wattage. The Z1 features redundant Maximum Power Point Tracking (MPPT) intelligence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Activity className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">MPPT Computational Yield</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Traditional PWM controllers waste up to 30% of their solar harvest as pure heat. The Z1 utilizes intelligent MPPT controllers that actively sweep the voltage curves of the massive solar canopy 100 times per second, guaranteeing a 99.8% energy translation metric into the LiFePO4 block even when the panels are heavily shaded by construction cranes.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Power className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Load-Shedding Autonomy</h4>
            <p className="text-brand-steel text-xs leading-loose">
               In the mathematically rare scenario that solar reserves approach absolute zero, the Z1 OS natively executes intelligent load-shedding. It will temporarily disable non-vital strobe systems and auxiliary communications, prioritizing all remaining atomic energy perfectly to sustain the crucial recording and Neural inference loops—keeping you legally covered.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <BatteryCharging className="w-8 h-8" /> Absolute Clean Dominance
      </h2>
      <p className="mb-6">
         Eliminating the logistical horror of dispatching personnel to constantly refuel humming, exhaust-spewing diesel generators saves thousands in OpEx. The Z1 converts the pure kinetic heat of a star into an unassailable tactical digital barrier forever.
      </p>
    </article>
  );
}
