import { AlertOctagon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Z1 Trailers",
  description: "Liability protections, SLAs, and commercial hardware leasing terms.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 text-white">
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 blur-[120px] pointer-events-none rounded-full" />

       <div className="max-w-4xl mx-auto px-10 relative z-10">
          
          <div className="mb-16 border-b border-white/10 pb-12">
             <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold mb-4 flex items-center">
                <AlertOctagon className="w-4 h-4 mr-3" /> Universal Operating Parameters
             </p>
             <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-6">
                Terms of <span className="text-brand-steel">Service.</span>
             </h1>
             <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                Contractual Liability Architecture.<br/>
                Execution enforces universal indemnification.
             </p>
          </div>

          <div className="space-y-12 font-mono text-xs text-brand-steel leading-loose tracking-wide">
             
             <section>
                <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-4 border-l-4 border-brand-teal pl-6">1. Limitation of Liability & Deterrence Guarantee</h2>
                <p className="mb-4 pl-7 text-white/60">
                   Z1 Trailers provides sophisticated optical, auditory, and edge-AI endpoints to deter unauthorized access and criminal activities. However, no autonomous infrastructure offers absolute invulnerability.
                </p>
                <div className="bg-red-500/10 border border-red-500/30 p-6 ml-7">
                   <p className="text-red-400 uppercase font-black tracking-[0.2em] mb-2 text-[10px]">ABSOLUTE INDEMNIFICATION:</p>
                   <p className="text-red-100/80">
                      Under no circumstances shall Z1 Trailers LLC, its directors, engineers, or third-party monitoring partners be held legally, commercially, or financially liable for theft, vandalism, trespassing, assault, or property damage occurring within the optical perimeter of an active Z1 endpoint. The Client acknowledges that Z1 hardware serves as a deterrent and analytical tool, not an absolute guarantee against human failure or criminal intent.
                   </p>
                </div>
             </section>

             <section>
                <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-4 border-l-4 border-brand-teal pl-6">2. Hardware Liability & Physical Integrity</h2>
                <p className="mb-4 pl-7 text-white/60">
                   Clients entering into an OpEx (Rental) lease assume physical custody of extreme-value hardware deployments.
                </p>
                <ul className="list-disc pl-12 space-y-2 text-white/70">
                   <li>The Leasing Client is strictly liable for structural damage sustained by Z1 endpoints originating from site negligence, heavy equipment collisions, unapproved repositioning attempts, or active perimeter sabotage.</li>
                   <li>Z1 units feature anti-tamper telemetry. Any detection of unsanctioned panel breaches or optical tampering immediately triggers a dispatch lockdown and incurs liability penalties to the Client.</li>
                   <li>Clients must ensure adequate insurance coverage to indemnify Z1 Trailers against destruction of the physical unit (valued up to $70,000 USD per endpoint) while deployed on the Client's domain.</li>
                </ul>
             </section>

             <section>
                <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-4 border-l-4 border-brand-teal pl-6">3. System Autonomy & Solar Anomalies</h2>
                <p className="mb-4 pl-7 text-white/60">
                   Z1 Endpoints are engineered for grid-independent operations powered via dense lithium-ion (and subsequent sodium-ion) battery architecture sustained by solar arrays.
                </p>
                <p className="pl-7 text-white/70">
                   Z1 does not guarantee 100% telemetry uptime in the event of extreme, catastrophic meteorological anomalies (e.g., continuous weeks of zero-light blizzards, tornadic disruption of arrays, EMP, or cellular grid exhaustion). Clients must immediately notify Z1 Command in the event of local cellular blackout protocols to enable StarLink failovers where contracted.
                </p>
             </section>

             <section>
                <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wider mb-4 border-l-4 border-brand-teal pl-6">4. Financial Directives</h2>
                <p className="pl-7 text-white/70">
                   Monthly OpEx agreements are strictly enforced. Failure to fulfill capital requirements within 72 hours of cycle refresh will result in immediate remote system lockdown. The Z1 endpoint will cease AI optical logging, automated deterrence protocols will flatten, and rapid-recovery teams will immediately deploy to extract the hardware from the Client's perimeter. Re-deployment requires a penalty authorization fee.
                </p>
             </section>

          </div>

       </div>
    </div>
  )
}
