"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Shield, Zap, Clock, Activity, Target } from "lucide-react";

export default function AnimatedTelemetry() {
  const [power, setPower] = useState(8.4);
  const [targets, setTargets] = useState([{ id: 1, x: 20, y: 30 }, { id: 2, x: 70, y: 60 }]);
  const [logs, setLogs] = useState(["SYSTEM ARMED", "THERMAL ONLINE"]);
  const [isArmed, setIsArmed] = useState(true);

  // Simulate changing power output
  useEffect(() => {
    const interval = setInterval(() => {
      setPower((prev) => +(prev + (Math.random() > 0.5 ? 0.1 : -0.1)).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Simulate targets moving
  useEffect(() => {
    const interval = setInterval(() => {
      setTargets((prev) => 
        prev.map(t => ({
          ...t,
          x: Math.min(Math.max(t.x + (Math.random() - 0.5) * 10, 10), 90),
          y: Math.min(Math.max(t.y + (Math.random() - 0.5) * 10, 10), 90)
        }))
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Simulate logs
  useEffect(() => {
    const possibleLogs = [
        "PERIMETER SCAN: NOMINAL",
        "AI: MOTION DETECTED",
        "BATTERY: ION CHARGE ACTIVE",
        "SOLAR INCIDENCE DECREASING",
        "OPTICS: NIGHT VISION ENGAGED",
        "AI: ANALYZING SUBJECT DWELL TIME"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => {
        const newLogs = [...prev, possibleLogs[i % possibleLogs.length]];
        return newLogs.slice(-2); // keep last 2 logs
      });
      i++;
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto group perspective-1000">
      {/* Underglow */}
      <div className="absolute inset-10 bg-brand-teal/20 blur-[60px] rounded-full z-0 group-hover:bg-brand-teal/30 transition-colors duration-700" />
      
      {/* 3D Card */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-3xl border border-white shadow-[0_40px_80px_-20px_rgba(13,27,42,0.15)] overflow-hidden transform transition-transform duration-700 rotate-y-[-12deg] rotate-x-[5deg] group-hover:rotate-y-0 group-hover:rotate-x-0 p-8 flex flex-col z-10 border-l-brand-teal/30">
        
        <div className="flex items-center justify-between mb-6 border-b border-brand-mist/50 pb-4">
           <div className="flex items-center space-x-2">
             <Activity className="w-3 h-3 text-brand-teal animate-pulse" />
             <p className="font-mono text-[10px] text-brand-steel uppercase tracking-[0.2em]">Live Telemetry Feed</p>
           </div>
           <span className="px-2 py-1 bg-green-500/10 text-green-600 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center border border-green-500/20">
             <span className="w-1.5 h-1.5 bg-green-500 mr-2 shadow-[0_0_5px_rgba(34,197,94,1)] rounded-full animate-pulse "/> Secure
           </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 relative">
           {/* Defense Status */}
           <div 
              onClick={() => setIsArmed(!isArmed)}
              className="bg-brand-ice/50 border border-brand-mist/50 p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer group/defense"
           >
              <Shield className={`w-5 h-5 mb-4 relative z-10 transition-colors duration-300 ${isArmed ? 'text-red-500' : 'text-green-500'}`}/>
              <div className="relative z-10">
                <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Defense Array</p>
                <p className={`font-display font-black text-xl tracking-tight transition-colors duration-300 ${isArmed ? 'text-red-600' : 'text-green-500'}`}>
                  {isArmed ? 'ARMED' : 'DISARMED'}
                </p>
              </div>
              
              {isArmed ? (
                <>
                  {/* High level background strobe */}
                  <motion.div 
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-color-dodge"
                    animate={{ 
                      backgroundColor: [
                        "rgba(220, 38, 38, 0)",     // Off
                        "rgba(220, 38, 38, 0.25)",  // Red Flash
                        "rgba(220, 38, 38, 0)",     // Off
                        "rgba(220, 38, 38, 0)",     // Pause
                        "rgba(37, 99, 235, 0)",     // Off
                        "rgba(37, 99, 235, 0.25)",  // Blue Flash
                        "rgba(37, 99, 235, 0)",     // Off
                        "rgba(37, 99, 235, 0)"      // Pause
                      ] 
                    }}
                    transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.2, 0.5, 0.5, 0.6, 0.7, 1] }}
                  />
                  {/* Physical LED strobe analog */}
                  <div className="absolute top-0 inset-x-0 h-1 flex">
                     <motion.div 
                       className="w-1/2 h-full bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.8)]"
                       animate={{ opacity: [0, 1, 0, 0, 0, 0, 0, 0] }}
                       transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.2, 0.5, 0.5, 0.6, 0.7, 1] }}
                     />
                     <motion.div 
                       className="w-1/2 h-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.8)]"
                       animate={{ opacity: [0, 0, 0, 0, 0, 1, 0, 0] }}
                       transition={{ duration: 2, repeat: Infinity, times: [0, 0.1, 0.2, 0.5, 0.5, 0.6, 0.7, 1] }}
                     />
                  </div>
                </>
              ) : (
                <motion.div 
                  className="absolute inset-0 bg-green-500/20 pointer-events-none z-0 mix-blend-screen" 
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
           </div>

           {/* Solar / Battery Status */}
           <div className="bg-brand-ice/50 border border-brand-mist/50 p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start relative z-10 mb-4">
                 <Zap className="w-5 h-5 text-brand-gold"/>
                 {/* Simulated charging particles */}
                 <div className="flex space-x-1">
                    {[0,1,2].map((i) => (
                      <motion.div 
                        key={i}
                        className="w-1 h-3 bg-brand-gold"
                        animate={{ opacity: [0.1, 1, 0.1], scaleY: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                 </div>
              </div>
              <div className="relative z-10">
                <p className="font-mono text-[8px] text-brand-steel uppercase tracking-widest mb-1">Solar Output</p>
                <AnimatePresence mode="popLayout">
                  <motion.p 
                    key={power}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="font-display font-black text-xl text-brand-navy tracking-tight block"
                  >
                    {power.toFixed(1)} kW
                  </motion.p>
                </AnimatePresence>
              </div>
           </div>
        </div>

        {/* AI Camera Feed */}
        <div className="flex-1 bg-brand-navy relative overflow-hidden flex flex-col justify-between p-4 border border-brand-navy border-b-0 group/cam min-h-[140px]">
           {/* Background Image Feed */}
           <div className="absolute inset-0 bg-[url('/images/industries/construction.png')] opacity-50 mix-blend-luminosity object-cover scale-105" />
           
           {/* AI Scanning Line */}
           <motion.div 
             className="absolute top-0 left-0 right-0 h-[2px] bg-brand-teal z-20 shadow-[0_0_10px_rgba(27,154,170,1)]"
             animate={{ top: ['0%', '100%', '0%'] }}
             transition={{ duration: 4, ease: "linear", repeat: Infinity }}
           />
           <div className="absolute inset-0 bg-brand-navy/50 z-10 pointer-events-none" />
           <div className="absolute inset-0 bg-[linear-gradient(rgba(27,154,170,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(27,154,170,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10" />

           {/* Moving AI Target Boxes */}
           {targets.map((t) => (
             <motion.div
               key={t.id}
               className="absolute w-12 h-16 border-2 border-brand-teal bg-brand-teal/10 z-20"
               animate={{ left: t.x + "%", top: t.y + "%" }}
               transition={{ type: "spring", stiffness: 50, damping: 20 }}
             >
                <div className="absolute -top-4 -left-0.5 bg-brand-teal px-1 text-[6px] font-mono font-bold text-white uppercase whitespace-nowrap">Subject {t.id} - Tracked</div>
                <Target className="absolute inset-0 m-auto w-4 h-4 text-brand-teal opacity-50" />
             </motion.div>
           ))}

           <div className="relative z-30 flex justify-between items-start w-full">
              <span className="font-mono text-[7px] bg-red-500 text-white px-2 py-0.5 uppercase tracking-widest animate-pulse font-bold">REC</span>
              <span className="font-mono text-[8px] text-white/70 tracking-widest">{new Date().toISOString().split('T')[1].slice(0,8)}</span>
           </div>
           
           <p className="font-mono text-[9px] text-white uppercase tracking-[0.3em] relative z-20 mt-auto flex items-center bg-black/40 p-2 backdrop-blur-sm">
              <Clock className="w-3 h-3 text-brand-teal mr-2" /> Sector 4 Optics
           </p>
        </div>

        {/* Live Logs */}
        <div className="h-14 bg-black p-2 overflow-hidden flex flex-col justify-end text-[7px] font-mono text-brand-teal/80 border border-t-0 border-brand-navy gap-1">
           <AnimatePresence initial={false}>
             {logs.map((log, i) => (
               <motion.div 
                 key={log + "-" + i}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 className="flex gap-2 whitespace-nowrap overflow-hidden"
               >
                 <span className="opacity-50">&gt;</span>
                 {log}
               </motion.div>
             ))}
           </AnimatePresence>
        </div>

      </div>
      
      {/* Tech crosshairs */}
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-brand-teal/50 z-20 transform translate-x-4 -translate-y-4" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-brand-teal/50 z-20 transform -translate-x-4 translate-y-4" />
    </div>
  );
}
