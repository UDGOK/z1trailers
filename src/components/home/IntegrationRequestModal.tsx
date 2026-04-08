"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Network, Send } from "lucide-react";
import { useState, useEffect } from "react";

interface IntegrationRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntegrationRequestModal({ isOpen, onClose }: IntegrationRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    integrationType: "Camera Connectivity"
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset state when opened
      setSuccess(false);
      setErrorMsg("");
      setSubmitting(false);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");
    
    try {
      const response = await fetch('/api/integrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Network error occurred. Please test again.');
    } finally {
      setSubmitting(false);
    }
  };

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
            className="relative w-full max-w-2xl bg-[#0a101a] border border-brand-teal/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(27,154,170,0.15)] flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 flex items-start justify-between border-b border-white/5 relative bg-[#05080c]">
               <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1b9aaa 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-12 h-12 bg-brand-teal/10 border border-brand-teal/20 rounded flex items-center justify-center">
                    <Network className="w-5 h-5 text-brand-teal" />
                 </div>
                 <div>
                    <h2 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-1">
                      Integration <span className="text-brand-teal">Request</span>
                    </h2>
                    <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                      Engineering & API Liaison
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

            {/* Content Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar bg-[#020406]">
              {success ? (
                <div className="text-center py-12">
                   <div className="w-16 h-16 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
                     <Network className="w-8 h-8" />
                   </div>
                   <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">Request Transmitted</h3>
                   <p className="font-mono text-xs text-slate-400 uppercase tracking-widest max-w-md mx-auto">
                     Our integration engineering team has received your request and will follow up with technical documentation.
                   </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 font-mono text-xs uppercase tracking-wider">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Operator Name</label>
                       <input 
                         required
                         type="text" 
                         value={formData.name}
                         onChange={e => setFormData({...formData, name: e.target.value})}
                         className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm uppercase tracking-wider focus:border-brand-teal focus:outline-none transition-colors"
                         placeholder="Jane Doe"
                       />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Phone Number</label>
                       <input 
                         type="tel" 
                         value={formData.phone}
                         onChange={e => setFormData({...formData, phone: e.target.value})}
                         className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm uppercase tracking-wider focus:border-brand-teal focus:outline-none transition-colors"
                         placeholder="555-012-3456"
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Official Email</label>
                     <input 
                       required
                       type="email" 
                       value={formData.email}
                       onChange={e => setFormData({...formData, email: e.target.value})}
                       className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm tracking-wider focus:border-brand-teal focus:outline-none transition-colors"
                       placeholder="jane@organization.com"
                     />
                  </div>

                  <div className="space-y-2">
                     <label className="font-mono text-[10px] text-brand-teal uppercase tracking-widest">Required Integration Vector</label>
                     <select 
                       value={formData.integrationType}
                       onChange={e => setFormData({...formData, integrationType: e.target.value})}
                       className="w-full bg-black/50 border border-white/10 p-3 text-white font-mono text-sm uppercase tracking-wider focus:border-brand-teal focus:outline-none transition-colors appearance-none"
                     >
                        <option value="Camera Connectivity">Third-Party Camera Protocol (ONVIF/RTSP)</option>
                        <option value="VMS Integration">VMS Head-End Synchronization</option>
                        <option value="Monitoring Station">Central Monitoring Station API</option>
                        <option value="Custom API / Webhook">Custom Developer API / Webhook</option>
                     </select>
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full py-4 mt-4 bg-brand-teal flex items-center justify-center group hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-display font-black text-xs text-[#0a1628] uppercase tracking-[0.2em]">
                      {submitting ? 'Transmitting...' : 'Dispatch Request'}
                    </span>
                    <Send className="w-4 h-4 ml-3 text-[#0a1628] group-hover:translate-x-1 transition-transform" />
                  </button>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
