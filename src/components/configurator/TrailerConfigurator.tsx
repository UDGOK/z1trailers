"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronRight, ChevronLeft, Camera, Speaker, HardDrive, Zap, ShieldCheck, Mail, AlertTriangle, Send, Target, Check, Info, Download } from "lucide-react";
import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import { SpecSheetTemplate } from "./SpecSheetPDF";

type CameraBrand = "Uniview" | "Hanwha" | "Axis";
type CameraType = "PTZ" | "Fisheye" | "Multisensor" | "Dome" | "Bullet";

interface CameraSelection {
  id: string;
  type: CameraType;
  brand: CameraBrand;
  name: string;
  draw: number; // Watts
  price: number;
}

const CAMERA_CATALOG: Record<CameraType, { brand: CameraBrand; name: string; price: number; draw: number }[]> = {
  "PTZ": [
    { brand: "Uniview", name: "Uniview Dual PTZ 22x", price: 650, draw: 25 },
    { brand: "Axis", name: "Axis PTZ 30x", price: 1850, draw: 35 }
  ],
  "Bullet": [
    { brand: "Uniview", name: "Uniview 4MP", price: 225, draw: 8 },
    { brand: "Hanwha", name: "Hanwha 4MP", price: 325, draw: 8 },
    { brand: "Axis", name: "Axis 4MP", price: 425, draw: 12 }
  ],
  "Dome": [
    { brand: "Uniview", name: "Uniview 4MP", price: 149, draw: 6 },
    { brand: "Hanwha", name: "Hanwha 4MP", price: 349, draw: 8 },
    { brand: "Axis", name: "Axis 4MP", price: 349, draw: 10 }
  ],
  "Fisheye": [
    { brand: "Uniview", name: "Uniview", price: 850, draw: 15 },
    { brand: "Hanwha", name: "Hanwha", price: 800, draw: 15 }
  ],
  "Multisensor": [
    { brand: "Uniview", name: "Uniview Multisensor", price: 2000, draw: 40 },
    { brand: "Hanwha", name: "Hanwha Multisensor", price: 5500, draw: 55 }
  ]
};

const PRICING = {
  models: {
    "Z1 Scout": 8500,
    "Z1 Guardian": 12500,
    "Z1 Apex": 16500,
  },
  addons: {
    audio: 299, // 30W Horn
    lpr: 3500,  // Insight LPR
    storage30: 850,
    storage60: 1250,
    starlink: 600,
  }
};

const BATTERY_OPTIONS = [
  { id: '24V_100AH', name: '24V 100AH Add-On (2,400Wh)', capacityWh: 2400, price: 495 },
  { id: '24V_200AH', name: '24V 200AH Add-On (4,800Wh)', capacityWh: 4800, price: 875 },
  { id: '24V_300AH', name: '24V 300AH Add-On (7,200Wh)', capacityWh: 7200, price: 1350 }
] as const;

const MODEL_SPECS = {
  "Z1 Scout": {
    power: "2x 395W Bifacial Solar, 50W Victron MPPT",
    battery: "2x 24V 100Ah LiFePO4 w/ BMS",
    lights: "1 Red Strobe, 2 Blue Flashers",
    mast: "18ft Telescopic Mast",
    mechanical: "Tow ball: 2\" | Tongue: Removable | W: 79.5\" | L: 93\" | H: 9'3\" - 18' | Weight: 1200 ~ 1900 Lbs.",
    extras: "16/4 Stranded & CAT5e Bundled Cable, 4 Leveling Jacks",
    baseDraw: 35,
  },
  "Z1 Guardian": {
    power: "3x 395W Solar, Victron 100W MPPT + Inverter",
    battery: "3x 24V 100Ah LiFePO4 w/ BMS",
    lights: "1 Red Strobe, 2 Blue Flashers",
    mast: "24ft Telescopic Mast",
    mechanical: "Tow ball: 2\" | Tongue: Removable | W: 79.5\" | L: 93\" | H: 9'3\" - 24' | Weight: 1900 ~ 2900 Lbs.",
    extras: "16/4 Stranded & CAT5e Bundled Cable, 4 Leveling Jacks",
    baseDraw: 45,
  },
  "Z1 Apex": {
    power: "3x 395W Solar, Victron 100W MPPT + Inverter",
    battery: "4x 24V 100Ah LiFePO4 w/ BMS",
    lights: "1 Red Strobe, 2 Blue Flashers",
    mast: "24ft Telescopic Mast",
    mechanical: "Tow ball: 2\" | Tongue: Removable | W: 79.5\" | L: 93\" | H: 9'3\" - 24' | Weight: 1900 ~ 2900 Lbs.",
    extras: "16/4 Stranded & CAT5e Bundled Cable, 4 Leveling Jacks",
    baseDraw: 50,
  }
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
  const [comm, setComm] = useState<"Teltonika 4G LTE" | "Starlink Satellite">("Teltonika 4G LTE");
  const [storage, setStorage] = useState<"0" | "30" | "60">("0");
  const [selectedBattery, setSelectedBattery] = useState<string>("");
  const [showBatteryInfo, setShowBatteryInfo] = useState(false);
  const [ledFlood, setLedFlood] = useState(true);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", company: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);

  // Reset state on close & manage portal mounting
  useEffect(() => {
    setMounted(true);
    if (!isOpen) {
      document.body.style.overflow = "";
      setTimeout(() => {
        setStep(1);
        setModel(initialModel);
        setCameras([]);
        setAudio(false);
        setLpr(false);
        setComm("Teltonika 4G LTE");
        setStorage("0");
        setSelectedBattery("");
        setLedFlood(true);
        setUserData({ name: "", email: "", phone: "", company: "" });
        setSubmitted(false);
      }, 300);
    } else {
      document.body.style.overflow = "hidden";
    }

    return () => { document.body.style.overflow = ""; };
  }, [isOpen, initialModel]);

  const { totalPurchase, estMonthly, powerDraw, autonomyDays } = useMemo(() => {
    let total = PRICING.models[model];
    let draw = MODEL_SPECS[model].baseDraw;

    cameras.forEach(c => {
      total += c.price;
      draw += c.draw;
    });

    // Component Load calculations
    if (audio) { total += PRICING.addons.audio; draw += 30; } // 30W IP Horn
    
    // Constant Deterrence Load
    draw += 3; // 1 Red Strobe, 2 Blue Flashers (1W each = 3W continuous)
    if (ledFlood) draw += 2; // Motion LED Flood standby/average overhead
    if (lpr) { total += PRICING.addons.lpr; draw += 25; }
    if (storage === "30") total += PRICING.addons.storage30;
    if (storage === "60") total += PRICING.addons.storage60;

    if (comm === "Starlink Satellite") {
       total += 600; // Hardware overhead for Starlink
       draw += 45;
    } else {
       draw += 5; // Teltonika draw
    }
    
    if (selectedBattery) {
       const batt = BATTERY_OPTIONS.find(b => b.id === selectedBattery);
       if (batt) total += batt.price;
    }

    // Rental calculation proxy (approx 1/12th hardware + $600 base overhead)
    const monthly = Math.round((total / 12) + 400);

    // Battery Engineering Math
    let baseWh = 4800; // Z1 Scout baseline 2x 100Ah 24v = 4800wh
    if (model === "Z1 Guardian") baseWh = 7200; // 3x 100Ah 24v = 7200wh
    if (model === "Z1 Apex") baseWh = 9600; // 4x 100Ah 24v = 9600wh

    let upgradeWh = 0;
    if (selectedBattery) {
       const batt = BATTERY_OPTIONS.find(b => b.id === selectedBattery);
       if (batt) upgradeWh = batt.capacityWh;
    }

    const totalUsableWh = (baseWh + upgradeWh) * 0.90; // 90% DoD for Lithium LifePO4 limitation
    const dailyDrawWh = draw * 24; 
    const autonomyDays = totalUsableWh / dailyDrawWh;

    return { totalPurchase: total, estMonthly: monthly, powerDraw: draw, autonomyDays };
  }, [model, cameras, audio, lpr, storage, selectedBattery, comm]);

  const maxCameras = model === "Z1 Scout" ? 4 : 5;

  const addCamera = (cam: { type: CameraType, brand: CameraBrand | string, name: string, price: number, draw: number }) => {
    if (cameras.length >= maxCameras) {
      alert(`Maximum of ${maxCameras} cameras reached for ${model}.`);
      return;
    }
    setCameras([...cameras, { 
      id: Math.random().toString(), 
      type: cam.type, 
      brand: cam.brand as CameraBrand, 
      name: cam.name,
      price: cam.price,
      draw: cam.draw 
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
        message: `CONFIGURATOR BUILD: \nModel: ${model}\nCameras: ${cameras.map(c => `${c.brand} ${c.type}`).join(', ')}\nAudio: ${audio}\nLPR: ${lpr}\nComm: ${comm}\nStorage: ${storage} days\nBattery Upgrade: ${selectedBattery || 'Standard'}\nEst Purchase: $${totalPurchase}\nEst Monthly: $${estMonthly}`,
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
      // Use html-to-image which natively relies on browser SVG engine rather than manual CSS pixel parsers
      const imgData = await toJpeg(pdfRef.current, { 
        quality: 1.0,
        backgroundColor: "#ffffff",
        pixelRatio: 2
      });

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4" // 210 x 297 mm
      });
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // Calculate height dynamically maintaining aspect ratio (usually 800 x 1131 equates to 1:1.414)
      const pdfHeight = (1131 * pdfWidth) / 800;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Z1_Trailers_SpecSheet_${model.replace(/ /g, '_')}.pdf`);
    } catch (e: any) {
      console.error(e);
      alert("Failed to render PDF Engine: " + (e.message || String(e)));
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div 
      id="modal-backdrop" 
      onClick={handleFocusOut}
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="relative w-full max-w-[1100px] h-[90vh] md:h-[85vh] flex flex-col md:flex-row bg-[#05080c] border border-brand-teal/30 rounded-2xl shadow-[0_0_50px_rgba(27,154,170,0.15)] overflow-y-auto md:overflow-hidden"
      >
        {/* GLOBAL CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white z-[60] bg-black/50 p-2 rounded-full md:bg-transparent md:p-0">
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* LEFT PANE - Visual & Summary */}
        <div className="w-full md:w-5/12 bg-brand-navy border-b md:border-b-0 md:border-r border-brand-teal/20 flex flex-col relative flex-shrink-0 min-h-[75vh] md:min-h-0 overflow-hidden">
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
                 <div className="px-3 py-1 bg-black/40 border border-brand-teal/30 rounded">
                    <p className="font-mono text-[9px] text-brand-teal/80 uppercase">Cameras</p>
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
                       className="p-3 bg-brand-navy border border-brand-teal/30 flex justify-between items-center rounded"
                     >
                       <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 rounded bg-brand-teal/10 flex items-center justify-center">
                            <Camera className="w-4 h-4 text-brand-teal" />
                         </div>
                         <div>
                            <p className="font-bold text-sm text-white">{c.brand}</p>
                            <p className="font-mono text-[9px] text-brand-teal">{c.type}</p>
                         </div>
                       </div>
                       <button onClick={() => removeCamera(c.id)} className="text-[#ff3333] hover:text-white p-2">
                          <X className="w-4 h-4" />
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
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-3 bg-brand-navy border border-brand-teal/30 flex justify-between items-center rounded">
                       <div className="flex items-center space-x-3">
                          <Target className="w-4 h-4 text-brand-teal" />
                          <p className="font-bold text-sm text-white">Motion LED Flood (Included)</p>
                       </div>
                     </motion.div>
                 )}
                   {lpr && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-brand-navy border border-brand-teal/30 flex items-center space-x-3 rounded">
                       <Target className="w-4 h-4 text-brand-teal" />
                       <p className="font-bold text-sm text-white">Insight LPR System</p>
                     </motion.div>
                   )}
                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 bg-brand-navy border border-brand-teal/30 flex items-center space-x-3 rounded">
                      <Zap className="w-4 h-4 text-brand-teal" />
                      <div>
                         <p className="font-bold text-[11px] text-white">Communications Layer: {comm}</p>
                      </div>
                   </motion.div>
                   
                   {/* Mechanical Specs & Included Features mapped dynamically */}
                   <div className="mt-4 p-3 bg-[#020406] border border-brand-teal/10 rounded space-y-2">
                      <p className="font-mono text-[9px] text-brand-teal uppercase tracking-widest mb-2 border-b border-brand-teal/20 pb-1">Included Base Specs</p>
                      <p className="font-mono text-[9px] text-slate-300"><strong className="text-white">Power:</strong> {MODEL_SPECS[model].power}</p>
                      <p className="font-mono text-[9px] text-slate-300"><strong className="text-white">Storage:</strong> {MODEL_SPECS[model].battery}</p>
                      <p className="font-mono text-[9px] text-slate-300"><strong className="text-white">Mast:</strong> {MODEL_SPECS[model].mast}</p>
                      <p className="font-mono text-[9px] text-slate-300"><strong className="text-white">Deterrents:</strong> {MODEL_SPECS[model].lights}</p>
                      <p className="font-mono text-[9px] text-slate-400 mt-2 pt-2 border-t border-brand-teal/5"><strong className="text-slate-300">Mechanical:</strong> {MODEL_SPECS[model].mechanical}</p>
                   </div>
               </div>

              {/* Power Draw & Reserve Autonomy HUD */}
               <div className="mt-4 pt-4 border-t border-brand-teal/20 space-y-2">
                 <div className="flex justify-between items-end mb-1">
                    <p className="font-mono text-[10px] text-brand-teal uppercase">Continuous Load</p>
                    <p className="font-mono text-sm tracking-widest text-[#ffffff] font-bold">{powerDraw}W <span className="text-brand-teal/50">/ 180W limit</span></p>
                 </div>
                 
                 <div className="w-full h-1.5 bg-brand-navy rounded-full overflow-hidden border border-brand-teal/20">
                    <div 
                      className={`h-full transition-all duration-500 ${powerDraw > 120 ? 'bg-[#ff3333]' : 'bg-[#00ff88] shadow-[0_0_10px_#00ff88]'}`} 
                      style={{ width: `${Math.min((powerDraw / 180) * 100, 100)}%` }}
                    />
                 </div>

                 {/* Phd Autonomy Tracker */}
                 <div className="mt-4 p-3 bg-[#0a0a0a] border border-[#333] rounded">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Reserve Autonomy</p>
                      <p className={`font-mono text-sm font-bold ${autonomyDays < 4 ? 'text-[#ff3333]' : 'text-white'}`}>
                        {autonomyDays.toFixed(1)} Days
                      </p>
                    </div>
                    {autonomyDays < 4 && (
                       <p className="font-mono text-[9px] text-[#ff3333] mt-2 flex items-start">
                         <AlertTriangle className="w-3 h-3 mr-1 flex-shrink-0 mt-0.5" /> 
                         Critical reserve limit. Add supplemental 24V battery capacity in Step 3 or reduce optical payload limits.
                       </p>
                    )}
                 </div>
               </div>

              {/* Pricing Ticker */}
              <div className="mt-4 pt-4 border-t border-brand-teal/20">
                 <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest mb-1">Estimated Purchase</p>
                 <motion.p 
                    key={totalPurchase}
                    initial={{ scale: 1.1, color: "#1B9AAA" }}
                    animate={{ scale: 1, color: "#ffffff" }}
                    className="font-display font-black text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
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
        <div className="w-full md:w-7/12 flex flex-col bg-[#05080c] relative flex-shrink-0 min-h-[75vh] md:min-h-0">

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
                           
                           <p className="font-mono text-[11px] text-[#b0b0b0] mb-4">Select up to {maxCameras} cameras for your mast array.</p>

                           <div className="space-y-6 mb-6">
                              {(Object.entries(CAMERA_CATALOG)).map(([type, options]) => (
                                 <div key={type}>
                                     <p className="font-display font-bold text-brand-teal mb-2 pb-1 border-b border-brand-teal/20 tracking-wider flex justify-between">
                                        {type}
                                     </p>
                                     <div className="flex flex-col gap-2">
                                       {options.map((opt) => (
                                          <button 
                                            key={opt.name}
                                            onClick={() => addCamera({ type: type as CameraType, ...opt })}
                                            disabled={cameras.length >= maxCameras}
                                            className="flex justify-between items-center p-3 bg-[#1a1a1a] border border-[#333] hover:border-brand-teal rounded group disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                          >
                                             <div className="text-left">
                                                <p className="font-display font-bold text-white group-hover:text-brand-teal text-sm flex items-center">
                                                   <span>{opt.name}</span> <span className="text-[#666] ml-2">+</span>
                                                </p>
                                                <p className="font-mono text-[9px] text-[#888] mt-1">Continuous Draw: {opt.draw}W</p>
                                             </div>
                                             <div className="text-right">
                                                <p className="font-mono text-[#00ff88] text-xs font-bold">${opt.price}</p>
                                             </div>
                                          </button>
                                       ))}
                                     </div>
                                 </div>
                              ))}
                           </div>
                           <p className="font-mono text-[9px] text-brand-teal p-3 bg-brand-teal/10 rounded border border-brand-teal/20">
                             Camera brands and advanced optics allocations will be finalized during deployment onboarding based on your regional infrastructure parameters.
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
                                 <p className="font-display font-bold text-white mb-2">Communications Uplink</p>
                                 <select value={comm} onChange={e => setComm(e.target.value as "Teltonika 4G LTE" | "Starlink Satellite")} className="w-full bg-[#0a0a0a] border border-[#333] text-white p-2 font-mono text-xs focus:border-brand-teal outline-none">
                                    <option value="Teltonika 4G LTE">Teltonika 4G LTE (Standard Included)</option>
                                    <option value="Starlink Satellite">Starlink Satellite Upgrade (+$600 / +45W Draw)</option>
                                 </select>
                              </div>

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

        {/* HIDDEN PDF TEMPLATE: Moved extremely far off-screen to avoid visibility tampering that breaks html2canvas bounding boxes */}
        <div style={{ position: 'fixed', top: '-10000px', left: '-10000px' }}>
          <div ref={pdfRef} style={{ width: '800px', minHeight: '1131px', backgroundColor: '#ffffff' }}>
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
        </div>

      </motion.div>
    </div>,
    document.body
  );
}
