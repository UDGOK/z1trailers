"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, Car, Bug, ShieldAlert, Cpu, Crosshair, Scan } from "lucide-react";
import { useEffect } from "react";

interface TargetClassificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TargetClassificationsModal({ isOpen, onClose }: TargetClassificationsModalProps) {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const categories = [
    {
      title: "Human Signatures (Verified Threats)",
      icon: User,
      color: "text-red-500",
      borderColor: "border-red-500/20",
      bgClass: "bg-red-500/5",
      items: [
        "Adult Pedestrians",
        "Children / Sub-Adults",
        "Multi-Person Clusters",
        "Loitering Subjects",
        "Trespassers",
      ]
    },
    {
      title: "Vehicular Logistics (Logged & Tracked)",
      icon: Car,
      color: "text-brand-teal",
      borderColor: "border-brand-teal/20",
      bgClass: "bg-brand-teal/5",
      items: [
        "Standard Passenger Vehicles",
        "Commercial Trucks",
        "FedEx Delivery Vehicles",
        "UPS Delivery Vehicles",
        "Amazon Logistics Fleet",
        "Buses & Heavy Transport",
        "Motorcycles",
        "Bicycles",
        "ATVs / Off-Road"
      ]
    },
    {
      title: "Biological Noise (Filtered & Ignored)",
      icon: Crosshair,
      color: "text-[#666]",
      borderColor: "border-[#333]",
      bgClass: "bg-[#111]",
      items: [
        "Dogs (All sizes)",
        "Cats",
        "Avian / Birds",
        "Deer",
        "Raccoons",
        "Skunks",
        "Bears",
        "Squirrels / Mice",
        "Unknown Small Mammals"
      ]
    },
    {
      title: "Environmental Interference (Nullified)",
      icon: Bug,
      color: "text-[#666]",
      borderColor: "border-[#333]",
      bgClass: "bg-[#111]",
      items: [
        "Spiders on Lens",
        "Flying Insects",
        "Moving Foliage / Shadows",
        "Wind-blown Debris"
      ]
    },
    {
      title: "Insight LPR Engine (Advanced)",
      icon: Scan,
      color: "text-brand-gold",
      borderColor: "border-brand-gold/20",
      bgClass: "bg-brand-gold/5",
      items: [
        "Full & Partial License Plates",
        "Vehicle Make & Model Extraction",
        "Vehicle Color Recognition",
        "State of Registration",
        "Direction of Travel Tracking",
        "Hotlist & Convoy Analysis"
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0a101a] border border-brand-teal/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(27,154,170,0.1)] flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 md:p-8 flex items-start justify-between border-b border-white/5 relative bg-[#05080c]">
               <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1b9aaa 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/20 rounded flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-brand-teal" />
                 </div>
                 <div>
                    <h2 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider leading-none mb-1">
                      Z1 Neural <span className="text-brand-teal">Matrix</span>
                    </h2>
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.2em] flex items-center">
                      <ShieldAlert className="w-3 h-3 text-red-500 mr-2" /> 30+ Official Target Classifications
                    </p>
                 </div>
               </div>
               <button 
                 onClick={onClose} 
                 className="relative z-10 text-slate-500 hover:text-white transition-colors bg-white/5 hover:bg-red-500/20 p-2 rounded"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Content Body Grid */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar bg-[#020406]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {categories.map((cat, idx) => {
                   const Icon = cat.icon;
                   return (
                     <div key={idx} className={`p-6 border ${cat.borderColor} ${cat.bgClass} rounded-lg relative overflow-hidden group`}>
                        <div className="flex items-center gap-3 mb-6 relative z-10">
                          <Icon className={`w-5 h-5 ${cat.color}`} />
                          <h3 className={`font-mono text-xs uppercase tracking-widest font-bold ${cat.color === 'text-[#666]' ? 'text-slate-300' : 'text-white'}`}>
                            {cat.title}
                          </h3>
                        </div>
                        
                        <ul className="space-y-3 relative z-10">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <Crosshair className={`w-3 h-3 shrink-0 mt-0.5 ${cat.color === 'text-[#666]' ? 'text-[#333]' : cat.color}`} />
                              <span className="font-display font-bold text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Tactical Scan Line overlay */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                           <style jsx>{`
                             div { animation: sweep 4s linear infinite; }
                             @keyframes sweep { 0% { transform: translateY(0); } 100% { transform: translateY(300px); } }
                           `}</style>
                        </div>
                     </div>
                   );
                 })}
              </div>

              {/* Informational Footer */}
              <div className="mt-8 p-4 border border-brand-teal/20 bg-brand-teal/5 flex items-start gap-4 rounded">
                 <ShieldAlert className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                 <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider leading-relaxed">
                   <strong>Machine Learning Verification:</strong> By isolating verified human and vehicular vectors against a massive local database of biological and environmental noise artifacts, our edge-processors operate with a 99.7% threat-accuracy rating. We entirely bypass standard motion-pixel detection paradigms.
                 </p>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
