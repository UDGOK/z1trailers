"use client";

import { User, Car, Package, Thermometer, Leaf, ScanEye, ArrowRight } from "lucide-react";
import { useState } from "react";
import TargetClassificationsModal from "../home/TargetClassificationsModal";

export default function AIDetectionsGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const detections = [
    {
       name: "Human Signatures",
       desc: "Differentiates between authorized personnel and loitering threats.",
       icon: User,
       status: "VALIDATED",
       extended: [
         "Tracking Vectors: Gait & Posture",
         "Neural Reflex: 0.8s Response",
         "Uniform Exclusions Supported"
       ]
    },
    {
       name: "LPR & Vehicles",
       desc: "Logs precise license plates, vehicle types, and ATVs bypassing main gates.",
       icon: Car,
       status: "TRACKED",
       extended: [
         "Capture Velocity: Up to 120 MPH",
         "Glare Defeat: Optical Filtration",
         "Convoy & Hotlist DB Sync"
       ]
    },
    {
       name: "Thermal Indexing",
       desc: "Detects body heat signatures through thick fog, foliage, and absolute darkness.",
       icon: Thermometer,
       status: "LOCKED",
       extended: [
         "Spectrum: LWIR Uncooled VOx",
         "Range: 320m Human Signatures",
         "Conditions: Zero-Lux Operable"
       ]
    },
    {
       name: "Environmental Nullifier",
       desc: "Tags and ignores stray animals (dogs/coyotes), shadows, and moving foliage.",
       icon: Leaf,
       status: "FILTERED",
       extended: [
         "Biological Filter: >40lb threshold",
         "Static Defense: Web/Spider Ignore",
         "Weather Bypass: Rain/Snow Sync"
       ]
    },
    {
       name: "Logistics Verification",
       desc: "Identifies FedEx, UPS, and inbound freight deliveries instantly.",
       icon: Package,
       status: "VERIFIED",
       extended: [
         "Fleet Recognition: 15+ Corporate DBs",
         "Chassis Intel: Step-van, Daycab",
         "Auto-Log: Entry/Exit Timestamps"
       ]
    },
    {
       name: "Biometric Sweep",
       desc: "Continuous 360° optical scanning over 30+ distinct object classes.",
       icon: ScanEye,
       status: "SCANNING",
       extended: [
         "Processing Core: 5 TOPS NPU",
         "Matrix Overlap: 4x PTZ Sync",
         "Threat Escalation: Auto Sirens"
       ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020406] border-y border-brand-teal/10">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full mb-16 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
            30+ Target <span className="text-brand-teal">Classifications.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-slate-300 uppercase tracking-widest leading-loose max-w-2xl mx-auto mb-8">
            Z1 neural analytics process telemetry natively to aggressively eliminate false alarms. 
            We filter environmental noise so our UL-listed monitoring partners only act on verified threats.
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center bg-[#05080c] border border-brand-teal/50 hover:bg-brand-teal/10 px-8 py-3 overflow-hidden transition-all duration-300"
          >
             <div className="absolute inset-x-0 bottom-0 h-[1px] bg-brand-teal w-0 group-hover:w-full transition-all duration-500 ease-in-out mx-auto" />
             <span className="font-mono text-[10px] md:text-xs text-white uppercase tracking-[0.2em] font-bold group-hover:text-brand-teal transition-colors flex items-center">
               [ Access Full Target Matrix (30+ Classes) ] <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
       </div>

       <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detections.map((item, idx) => {
            const Icon = item.icon;
            return (
               <div key={idx} className="relative group bg-[#05080c] border border-white/5 p-8 flex flex-col justify-center text-center overflow-hidden h-[22rem] hover:border-brand-teal/40 transition-colors duration-500">
                
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
                        100% { transform: translateY(320px); }
                     }
                   `}</style>
                </div>

                <div className="relative z-10 w-full transform group-hover:-translate-y-10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center">
                   <div className="relative z-10 w-16 h-16 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-brand-teal/10 rotate-45 group-hover:bg-brand-teal/20 transition-colors duration-500 shadow-[0_0_20px_rgba(27,154,170,0.1)]" />
                      <Icon className="w-8 h-8 text-brand-teal relative z-20 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                   </div>
                   
                   <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2 relative z-10 max-w-[200px] leading-tight">
                     {item.name}
                   </h3>
                   <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest leading-relaxed max-w-[220px] relative z-10">
                     {item.desc}
                   </p>
                </div>
                
                {/* Extended Telemetry Reveal */}
                <div className="absolute bottom-8 left-0 right-0 px-8 md:px-12 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 pointer-events-none">
                   <div className="w-full h-px bg-brand-teal/20 mb-4" />
                   <ul className="text-left space-y-2">
                      {item.extended?.map((ext, eIdx) => (
                        <li key={eIdx} className="font-mono text-[9px] text-[#a0a0a0] flex items-start uppercase tracking-[0.15em] leading-tight drop-shadow-md">
                           <span className="mr-2 text-brand-teal font-black">›</span> {ext}
                        </li>
                      ))}
                   </ul>
                </div>
                
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

       <TargetClassificationsModal 
         isOpen={isModalOpen} 
         onClose={() => setIsModalOpen(false)} 
       />
    </section>
  );
}
