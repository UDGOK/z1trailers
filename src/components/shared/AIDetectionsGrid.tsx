"use client";

import { User, Car, Package, Thermometer, Leaf, ScanEye } from "lucide-react";

export default function AIDetectionsGrid() {
  const detections = [
    {
       name: "Human Signatures",
       desc: "Differentiates between authorized personnel and loitering threats.",
       icon: User,
       status: "VALIDATED"
    },
    {
       name: "LPR & Vehicles",
       desc: "Logs precise license plates, vehicle types, and ATVs bypassing main gates.",
       icon: Car,
       status: "TRACKED"
    },
    {
       name: "Thermal Indexing",
       desc: "Detects body heat signatures through thick fog, foliage, and absolute darkness.",
       icon: Thermometer,
       status: "LOCKED"
    },
    {
       name: "Environmental Nullifier",
       desc: "Tags and ignores stray animals (dogs/coyotes), shadows, and moving foliage.",
       icon: Leaf,
       status: "FILTERED"
    },
    {
       name: "Logistics Verification",
       desc: "Identifies FedEx, UPS, and inbound freight deliveries instantly.",
       icon: Package,
       status: "VERIFIED"
    },
    {
       name: "Biometric Sweep",
       desc: "Continuous 360° optical scanning over 30+ distinct object classes.",
       icon: ScanEye,
       status: "SCANNING"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020406] border-y border-brand-teal/10">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full mb-16 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
            30+ Target <span className="text-brand-teal">Classifications.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-slate-300 uppercase tracking-widest leading-loose max-w-2xl mx-auto">
            Z1 neural analytics process telemetry natively to aggressively eliminate false alarms. 
            We filter environmental noise so our UL-listed monitoring partners only act on verified threats.
          </p>
       </div>

       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detections.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative group bg-[#05080c] border border-white/5 p-8 flex flex-col items-center justify-center text-center overflow-hidden h-64 hover:border-brand-teal/40 transition-colors duration-500">
                
                {/* SVG Targeting Box UI */}
                <svg className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                   {/* Corners */}
                   <path d="M 0 20 L 0 0 L 20 0" fill="none" stroke="#1B9AAA" strokeWidth="1" />
                   <path d="M 100 20 L 100 0 L 80 0" fill="none" stroke="#1B9AAA" strokeWidth="1" />
                   <path d="M 0 80 L 0 100 L 20 100" fill="none" stroke="#1B9AAA" strokeWidth="1" />
                   <path d="M 100 80 L 100 100 L 80 100" fill="none" stroke="#1B9AAA" strokeWidth="1" />
                </svg>

                {/* Animated Laser Sweep Effect inside the box */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-teal/50 shadow-[0_0_15px_#1B9AAA] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]">
                   <style jsx>{`
                     div {
                        animation: scan-down 3s ease-in-out infinite alternate;
                     }
                     @keyframes scan-down {
                        0% { transform: translateY(16px); }
                        100% { transform: translateY(240px); }
                     }
                   `}</style>
                </div>

                <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center">
                   <div className="absolute inset-0 bg-brand-teal/10 rotate-45 group-hover:bg-brand-teal/20 transition-colors duration-500 shadow-[0_0_20px_rgba(27,154,170,0.1)]" />
                   <Icon className="w-8 h-8 text-brand-teal relative z-20 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                </div>
                
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2 relative z-10">
                  {item.name}
                </h3>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-[200px] relative z-10">
                  {item.desc}
                </p>
                
                {/* Status Badges */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className={`text-[8px] font-mono font-bold tracking-widest uppercase px-2 py-1 ${item.status === 'FILTERED' ? 'bg-red-500/20 text-red-500 border border-red-500/30' : 'bg-brand-teal/20 text-brand-teal border border-brand-teal/30'}`}>
                      {item.status}
                    </span>
                </div>
                
              </div>
            );
          })}
       </div>
    </section>
  );
}
