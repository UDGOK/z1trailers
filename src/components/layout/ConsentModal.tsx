"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ConsentPrefs = {
  marketing: boolean;
  personalization: boolean;
  analytics: boolean;
};

export default function ConsentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"banner" | "modal">("banner");
  const [prefs, setPrefs] = useState<ConsentPrefs>({
    marketing: false,
    personalization: false,
    analytics: true, 
  });

  useEffect(() => {
    // Check local storage on mount to see if user has already accepted/rejected
    const consent = localStorage.getItem("z1-consent-protocol");
    if (!consent) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = (mode: "all" | "none" | "custom") => {
    let finalPrefs = { ...prefs };
    if (mode === "all") {
      finalPrefs = { marketing: true, personalization: true, analytics: true };
    } else if (mode === "none") {
      finalPrefs = { marketing: false, personalization: false, analytics: false };
    }
    
    // Save to localStorage
    localStorage.setItem("z1-consent-protocol", JSON.stringify(finalPrefs));
    setIsOpen(false);
  };

  const togglePref = (key: keyof ConsentPrefs) => {
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {view === "banner" && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="fixed bottom-6 left-6 right-6 md:left-auto md:w-[600px] z-[100] bg-brand-navy border border-brand-teal/30 shadow-[0_20px_40px_rgba(13,27,42,0.5)] p-6 md:p-8"
            >
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-teal/50" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-teal/50" />

              <p className="font-mono text-xs text-brand-steel/90 leading-relaxed mb-8">
                By clicking <span className="text-white font-bold">"Accept"</span>, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our tactical marketing efforts. View our <Link href="/privacy" className="text-brand-teal hover:text-white underline underline-offset-2 transition-colors">Privacy Policy</Link> for more information.
              </p>

              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setView("modal")}
                  className="font-display text-sm tracking-wide text-brand-steel hover:text-brand-teal border-b border-brand-steel hover:border-brand-teal pb-0.5 transition-colors"
                >
                  Preferences
                </button>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => handleSave("none")}
                    className="px-6 py-2 border border-brand-mist/40 text-brand-steel font-display text-xs uppercase tracking-widest hover:text-white hover:border-white transition-colors"
                  >
                    REJECT
                  </button>
                  <button 
                    onClick={() => handleSave("all")}
                    className="px-8 py-2 bg-brand-teal text-brand-navy font-display font-black text-xs uppercase tracking-[0.1em] hover:bg-brand-gold transition-colors"
                  >
                    ACCEPT
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {view === "modal" && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-0">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md" 
              />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

              <motion.div 
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                className="w-full max-w-2xl bg-[#0a111a] border border-brand-teal/30 shadow-[0_0_50px_rgba(27,154,170,0.15)] relative z-10 flex flex-col overflow-hidden max-h-[90vh]"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-teal/60 mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-teal/60 mix-blend-screen" />

                <div className="flex justify-between items-start border-b border-white/10 relative">
                  <div className="p-6 pb-5">
                    <p className="font-mono text-[9px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-2 flex items-center">
                      <span className="w-1.5 h-1.5 bg-brand-teal animate-pulse mr-2" />
                      Data Protocol Authorization
                    </p>
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider">Manage Consent Preferences</h2>
                  </div>
                  <button 
                    onClick={() => { setView("banner"); }}
                    className="bg-brand-teal/10 hover:bg-brand-teal text-brand-teal hover:text-brand-navy p-4 transition-colors border-b border-l border-brand-teal/20"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scroll">
                  
                  <div className="pb-6 border-b border-white/5 relative group">
                    <div className="absolute left-0 top-0 bottom-6 w-1 bg-brand-steel/30" />
                    <div className="pl-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-display font-bold text-lg text-white uppercase tracking-wide">Essentials</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-2 py-0.5 border border-brand-teal/20">Always Active</span>
                      </div>
                      <p className="font-mono text-xs text-brand-steel leading-relaxed tracking-wide">Strictly necessary for tactical operations and fundamental site stability. Cannot be disabled without compromising perimeter integrity.</p>
                    </div>
                  </div>

                  <div 
                    className={cn("pb-6 border-b border-white/5 relative group cursor-pointer transition-colors", prefs.marketing ? "bg-white/[0.02]" : "")}
                    onClick={() => togglePref("marketing")}
                  >
                    <div className={cn("absolute left-0 top-0 bottom-6 w-1 transition-colors duration-300", prefs.marketing ? "bg-brand-teal" : "bg-transparent group-hover:bg-brand-steel/30")} />
                    <div className="pl-6 flex items-start gap-4">
                      <div className={cn("w-6 h-6 shrink-0 mt-1 flex items-center justify-center border transition-all duration-300", prefs.marketing ? "border-brand-teal bg-brand-teal/20" : "border-brand-steel/50 bg-black/40 group-hover:border-brand-teal/50")}>
                        {prefs.marketing && <Check className="w-4 h-4 text-brand-teal" strokeWidth={3} />}
                      </div>
                      <div>
                        <h3 className={cn("font-display font-bold text-lg uppercase tracking-wide mb-2 transition-colors", prefs.marketing ? "text-white" : "text-brand-steel/80 group-hover:text-white")}>Marketing</h3>
                        <p className="font-mono text-xs text-brand-steel leading-relaxed tracking-wide">Deploys targeted data payloads for advertising and cross-site surveillance networks.</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={cn("pb-6 border-b border-white/5 relative group cursor-pointer transition-colors", prefs.personalization ? "bg-white/[0.02]" : "")}
                    onClick={() => togglePref("personalization")}
                  >
                    <div className={cn("absolute left-0 top-0 bottom-6 w-1 transition-colors duration-300", prefs.personalization ? "bg-brand-teal" : "bg-transparent group-hover:bg-brand-steel/30")} />
                    <div className="pl-6 flex items-start gap-4">
                      <div className={cn("w-6 h-6 shrink-0 mt-1 flex items-center justify-center border transition-all duration-300", prefs.personalization ? "border-brand-teal bg-brand-teal/20" : "border-brand-steel/50 bg-black/40 group-hover:border-brand-teal/50")}>
                        {prefs.personalization && <Check className="w-4 h-4 text-brand-teal" strokeWidth={3} />}
                      </div>
                      <div>
                        <h3 className={cn("font-display font-bold text-lg uppercase tracking-wide mb-2 transition-colors", prefs.personalization ? "text-white" : "text-brand-steel/80 group-hover:text-white")}>Personalization</h3>
                        <p className="font-mono text-xs text-brand-steel leading-relaxed tracking-wide">Stores identity preference matrices to deploy customized tactical operational features upon return.</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={cn("relative group cursor-pointer transition-colors", prefs.analytics ? "bg-white/[0.02] -mx-6 px-6 py-2" : "py-2")}
                    onClick={() => togglePref("analytics")}
                  >
                    <div className={cn("absolute left-0 top-0 bottom-0 w-1 transition-colors duration-300", prefs.analytics ? "bg-brand-teal" : "bg-transparent group-hover:bg-brand-steel/30")} />
                    <div className="pl-6 flex items-start gap-4">
                      <div className={cn("w-6 h-6 shrink-0 mt-1 flex items-center justify-center border transition-all duration-300", prefs.analytics ? "border-brand-teal bg-brand-teal/20" : "border-brand-steel/50 bg-black/40 group-hover:border-brand-teal/50")}>
                        {prefs.analytics && <Check className="w-4 h-4 text-brand-teal" strokeWidth={3} />}
                      </div>
                      <div>
                        <h3 className={cn("font-display font-bold text-lg uppercase tracking-wide mb-2 transition-colors", prefs.analytics ? "text-white" : "text-brand-steel/80 group-hover:text-white")}>Analytics</h3>
                        <p className="font-mono text-xs text-brand-steel leading-relaxed tracking-wide">Quantifies traffic vectors and establishes baseline telemetry to improve grid performance.</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="p-6 bg-black/40 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    onClick={() => handleSave("none")}
                    className="w-full sm:w-auto px-6 py-3 border border-brand-mist/30 text-brand-steel font-display font-bold uppercase tracking-widest text-[11px] hover:text-white hover:border-white transition-colors"
                  >
                    Reject All
                  </button>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button 
                      onClick={() => handleSave("custom")}
                      className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-brand-teal/30 text-brand-teal font-display font-bold uppercase tracking-widest text-[11px] hover:bg-brand-teal/10 hover:border-brand-teal transition-colors"
                    >
                      Save Preferences
                    </button>
                    <button 
                      onClick={() => handleSave("all")}
                      className="w-full sm:w-auto px-8 py-3 bg-brand-teal border border-brand-teal text-brand-navy font-display font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-gold hover:border-brand-gold transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10">Accept All</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
