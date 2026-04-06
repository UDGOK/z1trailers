import React from 'react';
import { Battery, Flame, Zap, ShieldCheck, Activity, Maximize } from 'lucide-react';

export default function LiFePO4Content() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         Deploying hundreds of pounds of standard Lithium-ion batteries onto an incredibly harsh, 115°F industrial construction site is a catastrophic fire hazard waiting to detonate. We exclusively utilize military-grade LiFePO4 (Lithium Iron Phosphate) chemistry to achieve absolute thermal immunity.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Battery className="w-8 h-8" /> The Obsolescence of Lead-Acid & Standard Lithium
      </h2>
      <p className="mb-6">
         The overwhelming majority of low-end competitor security trailers run on incredibly heavy, obsolete AGM Lead-Acid batteries. These batteries cannot be discharged below 50% without suffering permanent cell death, and they require highly corrosive internal acids that fail rapidly in extreme winter environments. 
      </p>
      <p className="mb-6">
         When competitors attempt to upgrade into modern tech, they foolishly buy standard Lithium-Ion (NMC) cells used in laptops. While energy-dense, NMC chemistry is highly volatile. If the aluminum box housing the batteries sustains a large physical structural impact or bakes in the extreme Nevada sun, standard Lithium-Ion suffers "Thermal Runaway"—a self-sustaining chemical reaction resulting in a violent, uncontrollable explosion that destroys the trailer and burns the surrounding project site to ash.
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Flame className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: The Thermal Mitigation Test</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Tier-1 Solar Farm Facility, Mojave Desert <br/>
           <strong>Incident:</strong> Preventing explosive chassis rupture during an unprecedented 122°F atmospheric phenomena.
        </p>
        <p className="relative z-10">
           During the extreme peak parameters of desert operations in August, surface temperatures on the raw black steel and asphalt of a solar construction nexus reached levels capable of literally melting plastic casing. A competitor's NMC lithium deployment suffered a critical thermal runaway event following an over-voltage failure from their shoddy solar controller—causing the unit to violently catch fire and destroy $75,000 worth of adjacent staging materials. The GC purged the contractor and deployed our Z1 models utilizing dense LiFePO4 atomic structures. LiFePO4 chemistry inherently resists oxygen release at high temperatures, making it physically impossible to catch fire even when directly punctured or chronically overheated. The units effortlessly consumed 122°F daytime highs while simultaneously powering heavy-duty thermal optics without a single microvolt of thermal failure.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Maximize className="w-8 h-8" /> Cycle Depth Omniscience
      </h2>
      <p className="mb-6">
         Physical stability is only the baseline. The true power of LiFePO4 lies in its immense cyclic elasticity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Activity className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">10-Year Shelf Life (3,500+ Cycles)</h4>
            <p className="text-brand-steel text-xs leading-loose">
               A lead-acid battery provides roughly 300 charge cycles before dying. Our Z1 LiFePO4 arrays are rated for an astonishing 3,500 to 5,000 total discharge cycles. That translates to almost an entire decade of non-stop, daily, grueling field abuse without ever needing a replacement pack.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Zap className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">100% Discharge Authorization</h4>
            <p className="text-brand-steel text-xs leading-loose">
               You can safely run a LiFePO4 battery array entirely down to 0% state-of-charge without damaging the underlying atomic lattice. Combined with our massive 3x solar panel roofs, this provides deep, 10-day autonomy even during heavy overcast thunderstorms.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <ShieldCheck className="w-8 h-8" /> True Autonomy Built on Physics
      </h2>
      <p className="mb-6">
         By eliminating catastrophic fire liabilities and fundamentally removing battery replacement costs from the financial equation, the Z1 Trailer achieves true operational independence. You are investing in superior physical science, not just optics.
      </p>
    </article>
  );
}
