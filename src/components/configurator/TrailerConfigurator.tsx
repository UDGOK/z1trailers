"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { X, ChevronRight, ChevronLeft, Camera, Speaker, HardDrive, Zap, ShieldCheck, Mail, AlertTriangle, Send, Target, Check } from "lucide-react";

type CameraBrand = "Uniview" | "Hanwha" | "Axis";
type CameraType = "PTZ" | "Fisheye" | "Multisensor" | "Dome" | "Bullet";

interface CameraSelection {
  id: string;
  type: CameraType;
  brand: CameraBrand;
  draw: number; // Watts
  price: number;
}

const PRICING = {
  models: {
    "Z1 Scout": 8500,
    "Z1 Guardian": 12500,
    "Z1 Apex": 16500,
  },
  cameras: {
    "PTZ": { base: 650, draw: 30 },
    "Fisheye": { base: 850, draw: 15 },
    "Multisensor": { base: 2750, draw: 40 },
    "Dome": { base: 149, draw: 10 },
    "Bullet": { 
      Uniview: 225, 
      Hanwha: 389, 
      Axis: 595,
      draw: 8
    }
  },
  addons: {
    audio: 299, // 30W Horn
    lpr: 3500,  // Insight LPR
    storage30: 850,
    storage60: 1250,
    batteryUpgrade: 1500, // 24V 200Ah
  }
};

const getCameraPrice = (type: CameraType, brand: CameraBrand) => {
  if (type === "Bullet") {
    return PRICING.cameras.Bullet[brand];
  }
  // For others, base price + brand premium simulation
  const base = PRICING.cameras[type].base;
  const multiplier = brand === "Axis" ? 1.5 : brand === "Hanwha" ? 1.2 : 1.0;
  return Math.round(base * multiplier);
};

export default function TrailerConfigurator({ 
  isOpen, 
  onClose, 
  initialModel = "Z1 Scout" 
}: { 
  isOpen: boolean; 
  onClose: () => void;
  initialModel?: "Z1 Scout" | "Z1 Guardian" | "Z1 Apex";
}) {
  const [step, setStep] = useState(1);
  const [model, setModel] = useState<"Z1 Scout" | "Z1 Guardian" | "Z1 Apex">(initialModel);
  const [cameras, setCameras] = useState<CameraSelection[]>([]);
  const [audio, setAudio] = useState(false);
  const [lpr, setLpr] = useState(false);
  const [storage, setStorage] = useState<"0" | "30" | "60">("0");
  const [batteryUpgrade, setBatteryUpgrade] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Derived calculations
  const { totalPurchase, estMonthly, powerDraw } = useMemo(() => {
    let total = PRICING.models[model];
    let draw = 50; // Base system draw

    cameras.forEach(c => {
      total += c.price;
      draw += c.draw;
    });

    if (audio) { total += PRICING.addons.audio; draw += 15; }
    if (lpr) { total += PRICING.addons.lpr; draw += 25; }
    if (storage === "30") total += PRICING.addons.storage30;
    if (storage === "60") total += PRICING.addons.storage60;
    if (batteryUpgrade) total += PRICING.addons.batteryUpgrade;

    // Rental calculation proxy (approx 1/12th hardware + $600 base overhead)
    const monthly = Math.round((total / 12) + 400);

    return { totalPurchase: total, estMonthly: monthly, powerDraw: draw };
  }, [model, cameras, audio, lpr, storage, batteryUpgrade]);

  const addCamera = (type: CameraType, brand: CameraBrand) => {
    if (cameras.length >= 4) return;
    setCameras([...cameras, { 
      id: Math.random().toString(), 
      type, 
      brand, 
      price: getCameraPrice(type, brand),
      draw: PRICING.cameras[type].draw || 15 
    }]);
  };

  const removeCamera = (id: string) => {
    setCameras(cameras.filter(c => c.id !== id));
  };

  const handleFocusOut = (e: any) => {
    if (e.target.id === 'modal-backdrop') onClose();
  }

  const submitConfig = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        name: userData.name,
        company: userData.company,
        email: userData.email,
        phone: userData.phone,
        message: `CONFIGURATOR BUILD: \nModel: ${model}\nCameras: ${cameras.map(c => `${c.brand} ${c.type}`).join(', ')}\nAudio: ${audio}\nLPR: ${lpr}\nStorage: ${storage} days\nBattery Upgrade: ${batteryUpgrade}\nEst Purchase: $${totalPurchase}\nEst Monthly: $${estMonthly}`,
        requirements: [],
      };
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setSubmitted(true);
    } catch {
      alert("Failed to send config. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      id="modal-backdrop" 
      onClick={handleFocusOut}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="w-full max-w-6xl h-[90vh] md:h-[80vh] flex flex-col md:flex-row bg-[#0a0a0a] border border-[#333] rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* LEFT PANE - Visual & Summary */}
        <div className="w-full md:w-5/12 bg-[#1a1a1a] border-r border-[#333] flex flex-col relative overflow-hidden">
           {/* Abstract Z1 Rendering */}
           <div className="absolute inset-0 z-0 opacity-30">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-teal/10 blur-[100px] rounded-full" />
           </div>

           <div className="relative z-10 p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div>
                   <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.2em] mb-1">Live Configuration</p>
                   <h2 className="font-display font-black text-3xl text-white uppercase">{model}</h2>
                </div>
                <div className="px-3 py-1 bg-black/50 border border-[#333] rounded">
                   <p className="font-mono text-[9px] text-[#b0b0b0] uppercase">Cameras</p>
                   <p className="font-display font-bold text-white">{cameras.length} / 4</p>
                </div>
              </div>

              {/* Real-time Hardware Stack */}
              <div className="flex-1 space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                 <AnimatePresence>
                   {cameras.map((c, i) => (
                     <motion.div 
                       key={c.id}
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       exit={{ opacity: 0, scale: 0.9 }}
                       className="p-3 bg-[#252525] border border-[#333] flex justify-between items-center rounded"
                     >
                        <div className="flex items-center space-x-3">
                           <Camera className="w-4 h-4 text-brand-teal" />
                           <div>
                              <p className="font-display font-bold text-sm text-white">{c.brand} {c.type}</p>
                              <p className="font-mono text-[9px] text-[#666]">+${(c.price / 12).toFixed(0)}/mo</p>
                           </div>
                        </div>
                        <button onClick={() => removeCamera(c.id)} className="text-[#666] hover:text-red-500">
                          <X className="w-3 h-3" />
                        </button>
                     </motion.div>
                   ))}
                 </AnimatePresence>
                 
                 {audio && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-[#252525] border border-[#333] flex items-center space-x-3 rounded">
                      <Speaker className="w-4 h-4 text-[#ff6b00]" />
                      <p className="font-display font-bold text-sm text-white">30W IP Horn Speaker</p>
                   </motion.div>
                 )}
                 {lpr && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-[#252525] border border-[#333] flex items-center space-x-3 rounded">
                      <Target className="w-4 h-4 text-[#ff6b00]" />
                      <p className="font-display font-bold text-sm text-white">Insight LPR System</p>
                   </motion.div>
                 )}
              </div>

              {/* Power Draw Gauge */}
              <div className="mt-6 p-4 bg-black/40 border border-[#333] rounded">
                 <div className="flex justify-between items-center mb-2">
                    <p className="font-mono text-[10px] text-[#b0b0b0]">Est. Power Draw (Load)</p>
                    <p className="font-mono text-[10px] font-bold text-white">{powerDraw}W</p>
                 </div>
                 <div className="w-full h-1.5 bg-[#333] rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${powerDraw > 120 ? 'bg-[#ff3333]' : powerDraw > 80 ? 'bg-[#ffa500]' : 'bg-[#00ff88]'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((powerDraw / 180) * 100, 100)}%` }}
                    />
                 </div>
                 {powerDraw > 120 && !batteryUpgrade && (
                    <p className="font-mono text-[9px] text-[#ff3333] mt-2 flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" /> High draw detected. Recommend battery upgrade.
                    </p>
                 )}
              </div>

              {/* Pricing Ticker */}
              <div className="mt-4 pt-4 border-t border-[#333]">
                 <p className="font-mono text-[10px] text-[#b0b0b0] uppercase tracking-widest mb-1">Estimated Purchase</p>
                 <motion.p 
                    key={totalPurchase}
                    initial={{ scale: 1.1, color: "#1B9AAA" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    className="font-display font-black text-2xl"
                 >
                    ${totalPurchase.toLocaleString()}
                 </motion.p>
                 <p className="font-mono text-xs text-[#b0b0b0] mt-2">
                    Est. Lease: <span className="text-white font-bold">${estMonthly.toLocaleString()}/mo</span>
                 </p>
              </div>
           </div>
        </div>

        {/* RIGHT PANE - Wizard Form */}
        <div className="w-full md:w-7/12 flex flex-col bg-[#0a0a0a] relative">
           <button onClick={onClose} className="absolute top-6 right-6 text-[#b0b0b0] hover:text-white z-50">
             <X className="w-6 h-6" />
           </button>

           {submitted ? (
             <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
               <div className="w-20 h-20 bg-[#00ff88]/10 text-[#00ff88] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(0,255,136,0.2)]">
                  <ShieldCheck className="w-10 h-10" />
               </div>
               <h3 className="font-display font-black text-3xl text-white mb-4">Configuration Sent.</h3>
               <p className="font-mono text-sm text-[#b0b0b0] leading-relaxed max-w-md">
                 Your exact trailer schematic has been sent to our tactical deployment team. We will review the specs and contact you shortly.
               </p>
             </div>
           ) : (
             <>
               {/* Progress indicator */}
               <div className="px-8 pt-8 pb-4 border-b border-[#333] flex items-center space-x-2">
                  {[1,2,3,4].map(s => (
                     <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-brand-teal' : 'bg-[#333]'}`} />
                  ))}
               </div>

               <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                  <AnimatePresence mode="wait">
                     
                     {/* STEP 1: CAMERAS */}
                     {step === 1 && (
                        <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Step 1: Surveillance Rig</h3>
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-8">Select up to 4 cameras for your mast array.</p>

                           <div className="grid grid-cols-2 gap-4 mb-6">
                              {(["PTZ", "Bullet", "Dome", "Fisheye"] as CameraType[]).map(type => (
                                 <button 
                                   key={type}
                                   onClick={() => addCamera(type, "Hanwha")} // Default to Hanwha for quick add, real UI would have a sub-menu
                                   disabled={cameras.length >= 4}
                                   className="p-4 bg-[#1a1a1a] border border-[#333] hover:border-brand-teal rounded text-left group disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                 >
                                    <p className="font-display font-bold text-white group-hover:text-brand-teal flex justify-between">
                                      {type} <span className="text-[#666]">+</span>
                                    </p>
                                    <p className="font-mono text-[9px] text-[#666] mt-1">Starts at ${(PRICING.cameras[type] as any).base || 225}</p>
                                 </button>
                              ))}
                           </div>
                           <p className="font-mono text-[9px] text-brand-teal p-3 bg-brand-teal/10 rounded border border-brand-teal/20">
                             Brands (Axis, Hanwha, Uniview) will be finalized during onboarding. Default estimates applied.
                           </p>
                        </motion.div>
                     )}

                     {/* STEP 2: ADD-ONS */}
                     {step === 2 && (
                        <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Step 2: Tactical Sensors</h3>
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-8">Equip active deterrence and edge analytics.</p>

                           <div className="space-y-4">
                              <label className="flex items-start space-x-4 p-4 bg-[#1a1a1a] border border-[#333] rounded cursor-pointer hover:border-brand-teal/50">
                                 <input type="checkbox" checked={audio} onChange={e => setAudio(e.target.checked)} className="mt-1 accent-[#ff6b00]" />
                                 <div>
                                    <p className="font-display font-bold text-white flex items-center space-x-2"><span>Two-Way Audio (IP Horn 30W)</span> <span className="text-[#ff6b00] text-xs">+$299</span></p>
                                    <p className="font-mono text-[10px] text-[#666] mt-1">Enable live remote talkdown via dispatch.</p>
                                 </div>
                              </label>

                              <label className="flex items-start space-x-4 p-4 bg-[#1a1a1a] border border-[#333] rounded cursor-pointer hover:border-brand-teal/50">
                                 <input type="checkbox" checked={lpr} onChange={e => setLpr(e.target.checked)} className="mt-1 accent-[#ff6b00]" />
                                 <div>
                                    <p className="font-display font-bold text-white flex items-center space-x-2"><span>Insight LPR System</span> <span className="text-[#ff6b00] text-xs">+$3500</span></p>
                                    <p className="font-mono text-[10px] text-[#666] mt-1">Dedicated license plate recognition software.</p>
                                 </div>
                              </label>

                              <div className="p-4 bg-[#1a1a1a] border border-[#333] rounded">
                                 <p className="font-display font-bold text-white mb-2">Local Edge Storage</p>
                                 <select value={storage} onChange={e => setStorage(e.target.value as "0"|"30"|"60")} className="w-full bg-[#0a0a0a] border border-[#333] text-white p-2 font-mono text-xs focus:border-brand-teal outline-none">
                                    <option value="0">Standard Edge Storage (Included)</option>
                                    <option value="30">30 Days High-Retention (+$850)</option>
                                    <option value="60">60 Days Enterprise Retention (+$1250)</option>
                                 </select>
                              </div>
                           </div>
                        </motion.div>
                     )}

                     {/* STEP 3: POWER */}
                     {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Step 3: Energy Grid</h3>
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-8">Z1 units ship with autonomous dual solar panels.</p>
                           
                           <div className="p-4 bg-[#1a1a1a] border border-[#333] rounded opacity-70 mb-4 flex items-center justify-between">
                              <div>
                                 <p className="font-display font-bold text-white">Default Matrix</p>
                                 <p className="font-mono text-[10px] text-[#b0b0b0]">2x 395W Solar + 2x 24V 100Ah Batteries</p>
                              </div>
                              <Check className="w-5 h-5 text-[#00ff88]" />
                           </div>

                           <label className={`flex items-start space-x-4 p-4 bg-[#1a1a1a] border ${powerDraw > 120 ? 'border-[#ff3333]' : 'border-[#333]'} rounded cursor-pointer hover:border-brand-teal/50 transition-colors`}>
                              <input type="checkbox" checked={batteryUpgrade} onChange={e => setBatteryUpgrade(e.target.checked)} className="mt-1 accent-[#ff6b00]" />
                              <div>
                                 <p className="font-display font-bold text-white flex items-center space-x-2">
                                    <span>24V 200Ah High-Cap Upgrde</span> 
                                    <span className="text-[#ff6b00] text-xs">+$1500</span>
                                 </p>
                                 <p className="font-mono text-[10px] text-[#666] mt-1">Double the reserve capacity. Recommended for setups utilizing LPR or 3+ PTZ units.</p>
                              </div>
                           </label>
                        </motion.div>
                     )}

                     {/* STEP 4: LEAD FORM */}
                     {step === 4 && (
                        <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Deployment Request</h3>
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-6">Our security analysts will confirm this build with you.</p>
                           
                           <div className="space-y-4">
                              <input 
                                placeholder="Full Name" 
                                value={userData.name} onChange={e=>setUserData({...userData, name:e.target.value})}
                                className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 font-mono text-xs focus:border-brand-teal outline-none transition-colors rounded"
                              />
                              <input 
                                placeholder="Company" 
                                value={userData.company} onChange={e=>setUserData({...userData, company:e.target.value})}
                                className="w-full bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 font-mono text-xs focus:border-brand-teal outline-none transition-colors rounded"
                              />
                              <div className="flex gap-4">
                                <input 
                                  placeholder="Email Address" type="email"
                                  value={userData.email} onChange={e=>setUserData({...userData, email:e.target.value})}
                                  className="w-1/2 bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 font-mono text-xs focus:border-brand-teal outline-none transition-colors rounded"
                                />
                                <input 
                                  placeholder="Phone Number" 
                                  value={userData.phone} onChange={e=>setUserData({...userData, phone:e.target.value})}
                                  className="w-1/2 bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 font-mono text-xs focus:border-brand-teal outline-none transition-colors rounded"
                                />
                              </div>
                           </div>
                        </motion.div>
                     )}

                  </AnimatePresence>
               </div>

               {/* Footer Navigation */}
               <div className="p-6 border-t border-[#333] flex justify-between items-center bg-[#111]">
                  {step > 1 ? (
                     <button onClick={() => setStep(step - 1)} className="text-[#b0b0b0] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                     </button>
                  ) : <div />}
                  
                  {step < 4 ? (
                     <button onClick={() => setStep(step + 1)} className="bg-brand-teal text-brand-navy hover:bg-white font-display font-black text-sm uppercase px-8 py-3 transition-colors flex items-center">
                        Next Step <ChevronRight className="w-4 h-4 ml-1" />
                     </button>
                  ) : (
                     <button 
                       onClick={submitConfig} 
                       disabled={isSubmitting || !userData.email || !userData.name}
                       className="bg-[#ff6b00] text-white hover:bg-white hover:text-brand-navy font-display font-black text-sm uppercase px-8 py-3 transition-colors flex items-center disabled:opacity-50"
                     >
                        {isSubmitting ? "Sending..." : "Request Build"} <Send className="w-4 h-4 ml-2" />
                     </button>
                  )}
               </div>
             </>
           )}
        </div>

      </motion.div>
    </div>
  );
}
