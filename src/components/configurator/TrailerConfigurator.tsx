"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { X, ChevronRight, ChevronLeft, Camera, Speaker, HardDrive, Zap, ShieldCheck, Mail, AlertTriangle, Send, Target, Check, Info, Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { SpecSheetTemplate } from "./SpecSheetPDF";

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
  }
};

const BATTERY_OPTIONS = [
  { id: '12V_100AH', name: '12V 100AH Self Heating', price: 425 },
  { id: '12V_200AH', name: '12V 200AH Self Heating', price: 650 },
  { id: '24V_100AH', name: '24V 100AH Self Heating', price: 495 },
  { id: '24V_200AH', name: '24V 200AH Self Heating', price: 875 },
  { id: '48V_200AH', name: '48V 200AH Battery', price: 1575 }
] as const;

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
  const [selectedBattery, setSelectedBattery] = useState<string>("");
  const [showBatteryInfo, setShowBatteryInfo] = useState(false);
  const [ledFlood, setLedFlood] = useState(true);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Reset state on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setModel(initialModel);
        setCameras([]);
        setAudio(false);
        setLpr(false);
        setStorage("0");
        setSelectedBattery("");
        setLedFlood(true);
        setUserData({ name: "", email: "", phone: "", company: "" });
        setSubmitted(false);
      }, 300);
    }
  }, [isOpen, initialModel]);

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
    
    if (selectedBattery) {
       const batt = BATTERY_OPTIONS.find(b => b.id === selectedBattery);
       if (batt) total += batt.price;
    }

    // Rental calculation proxy (approx 1/12th hardware + $600 base overhead)
    const monthly = Math.round((total / 12) + 400);

    return { totalPurchase: total, estMonthly: monthly, powerDraw: draw };
  }, [model, cameras, audio, lpr, storage, selectedBattery]);

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

  const handleFocusOut = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'modal-backdrop') onClose();
  }

  const submitConfig = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        name: userData.name,
        company: userData.company,
        email: userData.email,
        phone: userData.phone,
        message: `CONFIGURATOR BUILD: \nModel: ${model}\nCameras: ${cameras.map(c => `${c.brand} ${c.type}`).join(', ')}\nAudio: ${audio}\nLPR: ${lpr}\nStorage: ${storage} days\nBattery Upgrade: ${selectedBattery || 'Standard'}\nEst Purchase: $${totalPurchase}\nEst Monthly: $${estMonthly}`,
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

  const handleDownloadPDF = async () => {
    if (!pdfRef.current) return;
    setIsGeneratingPDF(true);
    try {
      // PDF is now rendered precisely at origin but completely invisible and behind the modal.
      const canvas = await html2canvas(pdfRef.current, { 
        scale: 2, 
        useCORS: true,
        logging: true,
        backgroundColor: "#ffffff",
        windowWidth: 1200,
        windowHeight: 1600
      });
      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4" // 210 x 297 mm
      });
      // A4 dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Z1_Trailers_SpecSheet_${model.replace(' ', '_')}.pdf`);
    } catch (e) {
      console.error(e);
      alert("Failed to generate PDF snapshot.");
    } finally {
      setIsGeneratingPDF(false);
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
                 {ledFlood && (
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-[#252525] border border-[#333] flex items-center space-x-3 rounded">
                      <Zap className="w-4 h-4 text-[#ff6b00]" />
                      <p className="font-display font-bold text-sm text-white">Motion LED Flood</p>
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
                 {powerDraw > 120 && !selectedBattery && (
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
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Step 1: Base & Optics</h3>
                           
                           {/* Base Platform Selector */}
                           <div className="mb-6">
                              <p className="font-mono text-[10px] text-[#b0b0b0] uppercase mb-2">Select Base Platform</p>
                              <div className="flex gap-2">
                                 {(["Z1 Scout", "Z1 Guardian", "Z1 Apex"] as const).map(t => (
                                    <button 
                                      key={t}
                                      onClick={() => setModel(t)}
                                      className={`flex-1 p-3 border font-display text-sm tracking-wider uppercase transition-all whitespace-nowrap overflow-hidden text-ellipsis ${model === t ? 'bg-brand-teal/20 border-brand-teal text-white' : 'bg-[#1a1a1a] border-[#333] text-[#666] hover:border-brand-teal/50'}`}
                                    >
                                       {t.replace("Z1 ", "")}
                                    </button>
                                 ))}
                              </div>
                           </div>
                           
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-4">Select up to 4 cameras for your mast array.</p>

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

                              <div className="p-4 bg-[#1a1a1a] border border-[#333] rounded mb-4">
                                 <p className="font-display font-bold text-white mb-2">Local Edge Storage</p>
                                 <select value={storage} onChange={e => setStorage(e.target.value as "0"|"30"|"60")} className="w-full bg-[#0a0a0a] border border-[#333] text-white p-2 font-mono text-xs focus:border-brand-teal outline-none">
                                    <option value="0">Standard Edge Storage (Included)</option>
                                    <option value="30">30 Days High-Retention (+$850)</option>
                                    <option value="60">60 Days Enterprise Retention (+$1250)</option>
                                 </select>
                              </div>

                              <label className="flex items-start space-x-4 p-4 bg-[#1a1a1a] border border-brand-teal/50 rounded cursor-pointer transition-all">
                                 <input type="checkbox" checked={ledFlood} onChange={e => setLedFlood(e.target.checked)} className="mt-1 accent-[#ff6b00]" />
                                 <div>
                                    <p className="font-display font-bold text-white flex items-center space-x-2">
                                      <span>LED Illuminator / Flood</span> 
                                      <span className="text-brand-teal text-xs border border-brand-teal px-1">INCLUDED (FREE)</span>
                                    </p>
                                    <p className="font-mono text-[10px] text-[#b0b0b0] mt-1">High-output active motion deterrence lighting. Only activates on verified human/vehicle perimeter breach.</p>
                                 </div>
                              </label>
                           </div>
                        </motion.div>
                     )}

                     {/* STEP 3: POWER */}
                     {step === 3 && (
                        <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                           <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Step 3: Energy Grid</h3>
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-8">Z1 units ship with autonomous solar power systems.</p>
                           
                           <div className="p-4 bg-[#1a1a1a] border border-[#333] rounded opacity-70 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div>
                                 <p className="font-display font-bold text-white">Base Solar Matrix (Auto-Matched)</p>
                                 <p className="font-mono text-[10px] text-[#b0b0b0]">
                                   {model === "Z1 Scout" ? "1x 395W Solar + 1x 24V 100Ah Battery" : "2x 395W Solar + 2x 24V 100Ah Batteries"}
                                 </p>
                              </div>
                              <Check className="w-5 h-5 text-[#00ff88]" />
                           </div>

                           <div className="space-y-2 mt-4 relative">
                              <div className="flex items-center justify-between mb-3 text-[#b0b0b0] border-b border-[#333] pb-2">
                                <p className="font-mono text-[10px] uppercase">Z1 Power LiFePO4 Upgrades</p>
                                <button 
                                  onMouseEnter={() => setShowBatteryInfo(true)}
                                  onMouseLeave={() => setShowBatteryInfo(false)}
                                  className="text-brand-teal hover:text-white flex items-center gap-1 font-mono text-[10px] uppercase"
                                >
                                  <Info className="w-3 h-3" /> Tech Specs
                                </button>
                              </div>

                              <button
                                onClick={() => setSelectedBattery("")}
                                className={`w-full flex items-center justify-between p-4 border rounded cursor-pointer transition-colors ${selectedBattery === "" ? 'bg-brand-teal/10 border-brand-teal' : 'bg-[#1a1a1a] border-[#333] hover:border-brand-teal/50'}`}
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedBattery === "" ? 'border-brand-teal' : 'border-[#666]'}`}>
                                     {selectedBattery === "" && <div className="w-2 h-2 rounded-full bg-brand-teal" />}
                                  </div>
                                  <p className={`font-display font-bold text-sm ${selectedBattery === "" ? 'text-white' : 'text-[#b0b0b0]'}`}>Included Base Matrix <span className="font-mono text-[10px] ml-2 text-brand-teal">(+0.00)</span></p>
                                </div>
                              </button>

                              {BATTERY_OPTIONS.map(batt => (
                                <button
                                  key={batt.id}
                                  onClick={() => setSelectedBattery(batt.id)}
                                  className={`w-full flex items-center justify-between p-4 border rounded cursor-pointer transition-colors ${selectedBattery === batt.id ? 'bg-[#ff6b00]/10 border-[#ff6b00]' : 'bg-[#1a1a1a] border-[#333] hover:border-[#ff6b00]/50'}`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedBattery === batt.id ? 'border-[#ff6b00]' : 'border-[#666]'}`}>
                                      {selectedBattery === batt.id && <div className="w-2 h-2 rounded-full bg-[#ff6b00]" />}
                                    </div>
                                    <p className={`font-display font-bold text-sm ${selectedBattery === batt.id ? 'text-white' : 'text-[#b0b0b0]'}`}>{batt.name}</p>
                                  </div>
                                  <p className="font-mono text-[11px] text-[#ff6b00]">${batt.price.toLocaleString()}</p>
                                </button>
                              ))}

                              {/* Spec Sheet Modal overlay inside Step 3 */}
                              <AnimatePresence>
                                {showBatteryInfo && (
                                   <motion.div
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     exit={{ opacity: 0, y: 10 }}
                                     className="absolute top-0 right-0 w-80 p-6 bg-[#0a1628] border border-brand-teal/40 rounded shadow-2xl z-50 pointer-events-none"
                                   >
                                      <h4 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">Z1 Power LiFePO4</h4>
                                      <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest mb-4">Mil-Spec Energy Storage</p>
                                      
                                      <ul className="space-y-3 font-mono text-[9px] text-[#b0b0b0] uppercase tracking-wider">
                                        <li className="flex items-start gap-2">
                                          <Zap className="w-3 h-3 text-brand-teal shrink-0 mt-0.5" />
                                          <span>Arctic Self-Heating (Operates & Charges to -4°F / -20°C)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <ShieldCheck className="w-3 h-3 text-brand-teal shrink-0 mt-0.5" />
                                          <span>Advanced BMS limits Over-Draw & Short Circuits</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="w-3 h-3 text-brand-teal shrink-0 mt-0.5" />
                                          <span>5,000+ Deep Cycles at 80% DOD</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                          <Check className="w-3 h-3 text-brand-teal shrink-0 mt-0.5" />
                                          <span>Bluetooth & Local SOC Monitoring</span>
                                        </li>
                                      </ul>
                                   </motion.div>
                                )}
                              </AnimatePresence>
                           </div>
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
                  <div className="flex gap-4">
                     {step > 1 ? (
                        <button onClick={() => setStep(step - 1)} className="text-[#b0b0b0] hover:text-white font-mono text-xs uppercase tracking-wider flex items-center bg-[#222] px-4 py-2 rounded">
                           <ChevronLeft className="w-4 h-4 mr-1" /> Back
                        </button>
                     ) : (
                        <div />
                     )}
                     <button onClick={() => { setStep(1); setCameras([]); setAudio(false); setLpr(false); setSelectedBattery(""); setLedFlood(true); }} className="text-red-400 hover:text-red-300 font-mono text-xs uppercase tracking-wider flex items-center">
                        <X className="w-3 h-3 mr-1" /> Start Over
                     </button>
                  </div>
                  
                  {step < 4 ? (
                     <button onClick={() => setStep(step + 1)} className="bg-brand-teal text-brand-navy hover:bg-white font-display font-black text-sm uppercase px-8 py-3 transition-colors flex items-center">
                        Next Step <ChevronRight className="w-4 h-4 ml-1" />
                     </button>
                  ) : (
                     <div className="flex gap-4">
                       <button 
                         onClick={handleDownloadPDF} 
                         disabled={isGeneratingPDF}
                         className="border-2 border-[#333] text-[#b0b0b0] hover:border-brand-teal hover:text-white font-display font-black text-xs uppercase px-6 py-3 transition-colors flex items-center disabled:opacity-50"
                       >
                          {isGeneratingPDF ? "Building..." : "Save PDF Specs"} <Download className="w-4 h-4 ml-2" />
                       </button>
                       <button 
                         onClick={submitConfig} 
                         disabled={isSubmitting || !userData.email || !userData.name}
                         className="bg-[#ff6b00] text-white hover:bg-white hover:text-brand-navy font-display font-black text-sm uppercase px-8 py-3 transition-colors flex items-center disabled:opacity-50"
                       >
                          {isSubmitting ? "Sending..." : "Request Build"} <Send className="w-4 h-4 ml-2" />
                       </button>
                     </div>
                  )}
               </div>
             </>
           )}
        </div>

        {/* HIDDEN PDF TEMPLATE (Strict DOM placement to prevent html2canvas canvas bounds failure) */}
        <div ref={pdfRef} className="fixed top-0 left-0 z-[-50] opacity-0 pointer-events-none w-[800px] h-[1131px]">
          <SpecSheetTemplate 
            model={model}
            cameras={cameras}
            audio={audio}
            lpr={lpr}
            storage={storage}
            ledFlood={ledFlood}
            selectedBattery={selectedBattery}
            powerDraw={powerDraw}
            totalPurchase={totalPurchase}
            estMonthly={estMonthly}
          />
        </div>

      </motion.div>
    </div>
  );
}
