"use client";

import { forwardRef } from "react";

export interface SpecSheetProps {
  model: string;
  cameras: { brand: string; type: string }[];
  audio: boolean;
  lpr: boolean;
  storage: string;
  ledFlood: boolean;
  selectedBattery: string;
  powerDraw: number;
  totalPurchase: number;
  estMonthly: number;
}

export const SpecSheetTemplate = forwardRef<HTMLDivElement, SpecSheetProps>(({
  model, cameras, audio, lpr, storage, ledFlood, selectedBattery, powerDraw, totalPurchase, estMonthly
}, ref) => {
  const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const buildId = `Z1-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

  return (
    <div 
      ref={ref} 
      className="bg-white text-[#0a1628] font-sans relative overflow-hidden" 
      style={{ width: '800px', minHeight: '1131px', padding: '60px' }}
    >
      {/* Background Architectural Grid */}
      <div 
         className="absolute inset-0 z-0 opacity-5"
         style={{ backgroundImage: 'linear-gradient(#0a1628 1px, transparent 1px), linear-gradient(90deg, #0a1628 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      
      {/* Heavy Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#1b9aaa]" />

      <div className="relative z-10 h-full flex flex-col">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-start border-b-2 border-[#0a1628] pb-6 mb-8">
           <div className="flex items-center gap-4">
              <img src="/Logo.png" alt="Z1 Trailers" className="h-16 object-contain" />
              <div className="h-12 w-[2px] bg-[#0a1628]/20" />
              <div>
                 <h1 className="font-bold text-3xl tracking-tighter uppercase leading-none">Tactical Payload</h1>
                 <p className="font-mono text-xs text-[#1b9aaa] tracking-[0.2em] uppercase mt-1">Official Configuration Briefing</p>
              </div>
           </div>
           <div className="text-right">
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Date Generated</p>
              <p className="font-bold text-sm">{date}</p>
              <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mt-2">Build UUID</p>
              <p className="font-mono font-bold text-xs bg-gray-100 px-2 py-1 mt-1">{buildId}</p>
           </div>
        </div>

        {/* SUMMARY SECTION */}
        <div className="grid grid-cols-2 gap-8 mb-12">
           <div className="bg-gray-50 p-6 border border-gray-200">
             <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Target Chassis</p>
             <h2 className="font-black text-4xl uppercase tracking-tighter">{model}</h2>
             <div className="w-12 h-1 bg-[#ff6b00] mt-4 mb-4" />
             <p className="text-sm text-gray-600 leading-relaxed">
               Self-sufficient tactical intelligence node. 100% solar autonomous with rapid-deployment capabilities.
             </p>
           </div>

           <div className="flex flex-col justify-center space-y-6">
              <div>
                 <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Estimated Purchase Capital</p>
                 <p className="font-black text-3xl text-[#1b9aaa]">${totalPurchase.toLocaleString()}</p>
              </div>
              <div>
                 <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">Estimated Operating Lease (Mo)</p>
                 <p className="font-bold text-xl">${estMonthly.toLocaleString()}</p>
              </div>
           </div>
        </div>

        {/* MANIFEST BREAKDOWN */}
        <h3 className="font-bold text-lg uppercase tracking-wider mb-4 border-b border-gray-300 pb-2">Hardware Manifest</h3>
        <table className="w-full text-sm mb-12">
           <tbody>
             <tr className="border-b border-gray-100">
               <td className="py-4 font-mono text-[11px] text-gray-500 uppercase tracking-wider w-1/3">Optics Payload</td>
               <td className="py-4 font-bold">
                 {cameras.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {cameras.map((c, i) => <li key={i}>{c.brand} {c.type}</li>)}
                    </ul>
                 ) : "No Optics Selected"}
               </td>
             </tr>
             <tr className="border-b border-gray-100 bg-gray-50">
               <td className="py-4 px-2 font-mono text-[11px] text-gray-500 uppercase tracking-wider">Active Deterrence</td>
               <td className="py-4 px-2 font-bold">
                 {audio && <div>30W IP Horn Speaker (Enabled)</div>}
                 {ledFlood && <div>Motion LED Flood (Included)</div>}
                 {!audio && !ledFlood && <div>Omitted</div>}
               </td>
             </tr>
             <tr className="border-b border-gray-100">
               <td className="py-4 font-mono text-[11px] text-gray-500 uppercase tracking-wider">Edge Analytics</td>
               <td className="py-4 font-bold">{lpr ? 'Insight LPR Engine (Enabled)' : 'Standard Detection'}</td>
             </tr>
             <tr className="border-b border-gray-100 bg-gray-50">
               <td className="py-4 px-2 font-mono text-[11px] text-gray-500 uppercase tracking-wider">Retention Core</td>
               <td className="py-4 px-2 font-bold">{storage === "0" ? 'Standard Edge Storage' : `${storage} Days High-Retention`}</td>
             </tr>
             <tr className="border-b border-gray-100">
               <td className="py-4 font-mono text-[11px] text-gray-500 uppercase tracking-wider">Power Grid</td>
               <td className="py-4 font-bold">
                 {selectedBattery 
                   ? selectedBattery.replace(/_/g, ' ') 
                   : (model === "Z1 Scout" ? "24V 100Ah Base Matrix" : "48V 100Ah Base Matrix")
                 }
               </td>
             </tr>
           </tbody>
        </table>

        {/* TELEMETRY VISUALIZATION */}
        <h3 className="font-bold text-lg uppercase tracking-wider mb-4 border-b border-gray-300 pb-2">Energy Load Telemetry</h3>
        <div className="bg-[#0a1628] text-white p-6 rounded mb-auto">
           <div className="flex justify-between items-end mb-2">
             <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Base Current Draw</p>
             <p className="font-mono text-2xl font-bold">{powerDraw} Watts</p>
           </div>
           <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div 
                className={`h-full ${powerDraw > 120 ? 'bg-[#ff3333]' : 'bg-[#00ff88]'}`} 
                style={{ width: `${Math.min((powerDraw / 180) * 100, 100)}%` }}
              />
           </div>
           <p className="font-mono text-[9px] text-gray-400">
              {powerDraw > 120 && !selectedBattery 
                ? "WARNING: Load exceeds base threshold. Battery upgrade strongly recommended." 
                : "System nominal under specified operational capabilities."}
           </p>
        </div>

        {/* LEGAL DISCLAIMER */}
        <div className="mt-12 pt-6 border-t-2 border-[#1b9aaa]">
           <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#1b9aaa] mb-2">Notice of Confidentiality & Estimate Terms</h4>
           <p className="text-[9px] text-gray-500 leading-relaxed text-justify">
             This document is an unverified configuration estimate generated for planning purposes. Final deployment pricing, asset availability, and exact hardware substitutions are completely subject to review and confirmation by Z1 Command Operations. This document does not constitute a legally binding contract or an offer to lease/sell. Prices depicted exclude applicable taxes, shipping, or emergency on-site technician deployments unless explicitly stated in a finalized MSA (Master Services Agreement). Z1 Trailers retains all intellectual property rights to the design algorithms mapping this payload.
           </p>
        </div>
      </div>
    </div>
  );
});

SpecSheetTemplate.displayName = "SpecSheetTemplate";
