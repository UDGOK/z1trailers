import { Shield, FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Protocol | Z1 Trailers",
  description: "Data retention, surveillance compliance, and legal privacy protocols for Z1 tactical hardware.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#05080c] min-h-screen pt-32 pb-24 text-white">
       <div className="max-w-4xl mx-auto px-10 relative">
          
          <div className="mb-16 border-b border-brand-teal/20 pb-12">
             <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-3" /> Legal & Compliance Directive
             </p>
             <h1 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-6">
                Privacy <span className="text-brand-steel">Protocol.</span>
             </h1>
             <p className="font-mono text-xs text-brand-steel uppercase tracking-widest leading-loose">
                Effective Date: Q2 2026<br/>
                Classification: Public Data Transparency // Tier 1
             </p>
          </div>

          <div className="space-y-12 font-mono text-xs text-brand-steel leading-loose tracking-wide">
             
             <section className="bg-white/[0.02] border border-white/5 p-8 hover:border-brand-teal/30 transition-colors">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/10">1. Surveillance Data Harvesting & Storage</h2>
                <p className="mb-4">
                  Z1 Trailers LLC ("Z1") functions strictly as the tactical hardware manufacturer and software infrastructure provider. Hardware leased or purchased by the Client captures optical, thermal, and auditory data originating from the designated deployment zone.
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-white/70">
                   <li>Z1 aggregates surveillance data strictly for edge-AI processing, threat categorization, and alert dispatch routing.</li>
                   <li>Optic logs, including automated License Plate Recognition (LPR) sequences and facial categorizations, are retained securely on localized hardware endpoints for up to 30 days.</li>
                   <li>Z1 assumes zero liability for the legality of surveillance placement on properties not universally owned or legally commanded by the leasing Client.</li>
                </ul>
             </section>

             <section className="bg-white/[0.02] border border-white/5 p-8 hover:border-brand-teal/30 transition-colors">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/10">2. Autonomous AI Diagnostics & Processing</h2>
                <p>
                  To deliver rapid-response deterrence, Z1 endpoints utilize continuous edge-computed Artificial Intelligence protocols. The AI filters ambient motion, classifies structural threats, and executes localized deterrence (strobe/audio). Z1 explicitly does not utilize client localized optical data to train generalized external machine learning modules without scrubbed anonymization. 
                </p>
             </section>

             <section className="bg-white/[0.02] border border-white/5 p-8 hover:border-brand-teal/30 transition-colors">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/10">3. Law Enforcement Disclosures</h2>
                <p className="mb-4">
                  Z1 Trailers inherently cooperates with legally binding municipal, state, and federal intelligence requests.
                </p>
                <div className="bg-brand-navy border border-brand-teal p-6 mt-4">
                   <p className="text-brand-teal uppercase font-bold tracking-[0.2em] mb-2 text-[10px]">Critical Clause:</p>
                   <p className="text-white/80">
                      If Z1 infrastructure receives a formalized subpoena, warrant, or active structural threat notification concerning a deployed endpoint, Z1 reserves the absolute right to bypass Client authorization to yield optical data securely to initiating law enforcement agencies.
                   </p>
                </div>
             </section>

             <section className="bg-white/[0.02] border border-white/5 p-8 hover:border-brand-teal/30 transition-colors">
                <h2 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/10">4. Endpoint Telemetry & Cookies</h2>
                <p>
                  For digital users traversing Z1Trailers.com, we utilize hyper-local cookies to orchestrate navigation and monitor interaction efficiency. Our primary domain tracks IP heuristics and location data to match Clients with optimized regional logistics dispatch nodes. User consent controls remain accessible via the localized cookie preferences protocol.
                </p>
             </section>

          </div>

       </div>
    </div>
  )
}
