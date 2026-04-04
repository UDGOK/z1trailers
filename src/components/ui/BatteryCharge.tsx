"use client";

import { useEffect, useState, useRef } from "react";
import { Activity } from "lucide-react";
import { useInView } from "framer-motion";

export default function BatteryCharge() {
  const [charge, setCharge] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let current = 0;
    // 25ms interval * 99 = ~2.5 seconds total charge duration
    const interval = setInterval(() => {
      current += 1;
      setCharge(current);
      if (current >= 99) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-[300px] h-[500px]">
       {/* Scanner lines */}
       <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-teal z-30 animate-[slide_3s_ease-in-out_infinite_alternate]" style={{boxShadow: '0 0 15px #1B9AAA'}} />
       
       <div className="w-full h-full border border-white/10 relative p-4 flex flex-col justify-end bg-[#05080c] shadow-[0_0_60px_rgba(27,154,170,0.1)]">
          {/* Battery Fill Level Animation */}
          <div 
            className="w-full bg-gradient-to-t from-brand-teal/80 to-[#2dd4bf] relative overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out flex flex-col justify-center"
            style={{ height: `${charge}%` }}
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay" />
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[size:100%_15px] animate-[slide_4s_linear_infinite]" />
             
             {/* Animated Positive/Negative Ions */}
             <div className="absolute inset-0 overflow-hidden opacity-60 z-10 pointer-events-none mix-blend-overlay">
                <span className="absolute bottom-0 left-[15%] text-white font-mono text-2xl font-black drop-shadow-[0_0_10px_white] animate-[float-up_3s_ease-in_infinite]">+</span>
                <span className="absolute bottom-0 left-[45%] text-[#05080c] font-mono text-3xl font-black drop-shadow-[0_0_5px_black] animate-[float-up_4s_ease-in_infinite_1s]">-</span>
                <span className="absolute bottom-0 left-[75%] text-white font-mono text-xl font-black drop-shadow-[0_0_10px_white] animate-[float-up_2.5s_ease-in_infinite_0.5s]">+</span>
                <span className="absolute bottom-0 left-[25%] text-[#05080c] font-mono text-2xl font-black drop-shadow-[0_0_5px_black] animate-[float-up_3.5s_ease-in_infinite_2s]">-</span>
                <span className="absolute bottom-0 left-[85%] text-white font-mono text-3xl font-black drop-shadow-[0_0_10px_white] animate-[float-up_4.5s_ease-in_infinite_1.5s]">+</span>
                <span className="absolute bottom-0 left-[60%] text-[#05080c] font-mono text-xl font-black drop-shadow-[0_0_5px_black] animate-[float-up_5s_ease-in_infinite_0.8s]">-</span>
             </div>
             
          </div>

          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl px-8 py-6 border ${charge === 99 ? 'border-brand-teal' : 'border-white/20'} text-center w-3/4 z-20 transition-colors duration-500`}>
              <Activity className={`w-8 h-8 ${charge === 99 ? 'text-brand-teal' : 'text-slate-500'} mx-auto mb-3 transition-colors duration-500`} />
              <span className="font-display font-black text-5xl text-white block relative z-20">{charge}%</span>
              <p className={`font-mono text-[10px] ${charge === 99 ? 'text-brand-teal shadow-brand-teal/50 drop-shadow-md' : 'text-slate-500'} uppercase tracking-[0.3em] font-bold mt-2 relative z-20 transition-all duration-500`}>
                {charge < 99 ? 'CHARGING ARRAY' : 'SYS_HEALTH: OPTIMAL'}
              </p>
          </div>
       </div>
    </div>
  );
}
