import { Metadata } from 'next';
import { Cpu, Eye, Shield, Zap, Crosshair, Network, Workflow, Globe, Lock, Activity, ChevronRight, Check } from 'lucide-react';
import ConfiguratorTrigger from '@/components/configurator/ConfiguratorTrigger';

export const metadata: Metadata = {
  title: 'Z1 Command OS | The Ultimate Artificial Intelligence Security Platform',
  description: 'The central AI software layer governing the Z1 physical trailer fleet. Features absolutely zero false positives, active acoustic deterrence, and universal monitoring.',
};

export default function CommandOSPage() {
  return (
    <div className="bg-[#05080c] min-h-screen text-white font-sans selection:bg-brand-teal selection:text-white pb-24 overflow-hidden relative">
      
      {/* Deep Cyber Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 -left-96 w-[1000px] h-[1000px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-96 w-[1000px] h-[1000px] bg-brand-teal/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-32 lg:pt-48">
        
        {/* HERO MATRIX */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
           <div className="inline-flex items-center justify-center space-x-3 mb-8 bg-brand-teal/10 border border-brand-teal/30 px-4 py-1.5 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-brand-teal animate-pulse" />
              <span className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.4em] font-bold">Neural Engine Core</span>
           </div>
           
           <h1 className="font-display font-black text-6xl md:text-[7.5rem] uppercase tracking-tighter leading-[0.85] mb-8 drop-shadow-2xl">
             Z1 Command <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-white/50">O/S</span>
           </h1>
           
           <p className="font-mono text-sm md:text-md text-slate-400 tracking-[0.2em] leading-loose uppercase max-w-3xl mx-auto mb-12">
             The software architecture controlling the physical fleet. Z1 Command processes millions of optical data points locally at the edge, actively filtering 100% of false positives before bridging confirmed targets into our master intervention dashboard.
           </p>

           <ConfiguratorTrigger className="border-brand-teal bg-brand-teal text-brand-navy hover:bg-transparent hover:text-brand-teal hover:border-brand-teal px-10 py-5 font-display font-black text-sm md:text-md uppercase tracking-[0.3em] transition-all group">
             Initialize Fleet Quote <ChevronRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
           </ConfiguratorTrigger>
        </div>

        {/* CORE CAPABILITIES GRID (Camect & Chekt Synthesis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-teal/20 border border-brand-teal/20 mb-32">
          
          {/* Feature 1 */}
          <div className="bg-[#0a111a] p-12 lg:p-16 group hover:bg-[#0c141e] transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
               <Eye className="w-64 h-64 text-brand-teal" />
             </div>
             <Eye className="w-10 h-10 text-brand-teal mb-8" />
             <h3 className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">Total False-Positive Elimination</h3>
             <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-loose">
               Traditional analytics trigger on swaying branches, heavy rain, shadows, and roaming animals. The Z1 Command OS utilizes a deep-learning ingestion pipeline that mathematically confirms exact human or vehicular vectors before triggering any core logic loops. Zero fatigue. Zero false alarms.
             </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#0a111a] p-12 lg:p-16 group hover:bg-[#0c141e] transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
               <Workflow className="w-64 h-64 text-brand-teal" />
             </div>
             <Workflow className="w-10 h-10 text-brand-teal mb-8" />
             <h3 className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">Visual Alarm Bridging</h3>
             <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-loose">
               We bridge standard video feeds into a hyper-active monitoring portal. When a target violates a perimeter, the intelligence engine automatically stitches pre-lock and post-lock video streams directly into the operator dashboard—arming the tactical response center with absolute visual confirmation instantly.
             </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#0a111a] p-12 lg:p-16 group hover:bg-[#0c141e] transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
               <Activity className="w-64 h-64 text-brand-teal" />
             </div>
             <Activity className="w-10 h-10 text-brand-teal mb-8" />
             <h3 className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">Zero-Latency Deterrence Executions</h3>
             <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-loose">
               Detection is meaningless without action. Operators utilizing Z1 Command OS can forcefully trigger 120dB active-acoustic horns, initiate live 2-way talkdown protocols, or ignite physical strobe sequences via a secure uplink from any device on Earth with complete zero-latency dispatch logic.
             </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-[#0a111a] p-12 lg:p-16 group hover:bg-[#0c141e] transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
               <Network className="w-64 h-64 text-brand-teal" />
             </div>
             <Network className="w-10 h-10 text-brand-teal mb-8" />
             <h3 className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">Universal Unified Intercept</h3>
             <p className="font-mono text-[11px] text-slate-400 uppercase tracking-widest leading-loose">
               Monitor an infinite constellation of trailers across multiple remote geographies completely simultaneously. The Universal Dashboard seamlessly correlates analytics, system health pings, battery voltage readouts, and active breaches into one absolute pane of glass.
             </p>
          </div>
          
        </div>

        {/* FULL WIDTH IMMERSION */}
        <div className="relative w-full h-[600px] border border-white/10 mb-32 group overflow-hidden bg-black flex items-center justify-center">
            {/* The background can be a sophisticated grid or map graphic representing the dashboard */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000')] opacity-30 object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale-[0.5]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080c] via-transparent to-[#05080c]" />
            <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
            
            <div className="relative z-10 text-center max-w-4xl px-6">
                <Shield className="w-16 h-16 text-brand-teal mx-auto mb-8 animate-[pulse_3s_ease-in-out_infinite]" />
                <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-widest text-white mb-6">Absolute Threat Sovereignty</h2>
                <p className="font-mono text-[11px] md:text-[13px] tracking-widest leading-loose text-slate-300 uppercase mb-8">
                  The Z1 Command endpoint natively shields its communications using bank-grade encryption tunnels. Every packet of telemetry and visual evidence generated by the physical trailer fleet hits the dashboard completely sanitized, secure, and ready for prosecution parsing.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                   {['End-to-End Encryption', 'Edge-Computed Logic', 'Failover Redundancy', 'Target Classification'].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 bg-white/5 border border-white/10 p-3">
                         <Check className="w-3 h-3 text-brand-teal shrink-0 mt-0.5" />
                         <span className="font-mono text-[8px] text-white uppercase tracking-widest">{item}</span>
                      </div>
                   ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
