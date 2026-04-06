import React from 'react';
import { Smartphone, Globe, Activity, Eye, Shield, Layers } from 'lucide-react';

export default function EnterpriseDashboardContent() {
  return (
    <article className="prose prose-invert prose-brand max-w-none font-mono text-xs md:text-sm text-brand-steel tracking-wide leading-relaxed">
      
      <p className="text-xl md:text-2xl font-display font-black text-white uppercase tracking-widest leading-loose mb-12 border-l-4 border-brand-teal pl-6">
         Scaling mobile surveillance from a single local construction yard to a sovereign fleet of 50 remote logistical endpoints demands a unified, zero-latency command interface. The Z1 Enterprise Dashboard bridges a fragmented geographical footprint into a single pane of glass.
      </p>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Globe className="w-8 h-8" /> The Single Interface Doctrine
      </h2>
      <p className="mb-6">
         The standard security industry model forces logistics managers to log into disparate legacy VMS (Video Management System) software protocols, requiring unique static IP parsing or clunky VPN authentication just to check if a camera is functioning.
      </p>
      <p className="mb-6">
         We engineered the Z1 Command OS to obliterate friction. Whether you have two Scout trailers flanking an auto dealership in Dallas, or a fleet of fifty Apex units guarding pipelines down the Midwest corridor, every single solar parameter, battery cell charge rate, and raw AI-filtered optic feed pipes securely into a centralized cloud HUD.
      </p>

      <div className="my-16 bg-black/40 border border-white/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand-teal transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
           <Layers className="w-32 h-32" />
        </div>
        <h3 className="font-display font-black text-xl text-white uppercase tracking-widest mb-6 border-b border-brand-teal/30 pb-4 relative z-10">Live Use Case: National Fleet Synchronicity</h3>
        <p className="text-brand-steel mb-4 relative z-10">
           <strong>Location:</strong> Nationwide Intermodal Freight Network <br/>
           <strong>Incident:</strong> Standardizing threat protocols across 40 disparate, remote tracking yards.
        </p>
        <p className="relative z-10">
           A massive supply chain logistics provider managing 40 remote train-to-truck transfer yards struggled to coordinate local security elements. They blindly relied on night watchmen who frequently ignored perimeter alerts. By deploying a unified fleet of Z1 Guardian models at every node, the logistics Director of Security achieved total visualization. Utilizing an iPad Pro at their Chicago headquarters, the Director instantly accesses the Z1 OS map grid. Within 3 taps, they can inspect the precise 10-day battery metrics of a unit in Wyoming, while simultaneously arming the active acoustic matrices on a unit in Texas. They replaced $4M in varying disjointed security budgets with a scalable, predictable AI grid, dropping theft vectors essentially to zero by month two.
        </p>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Activity className="w-8 h-8" /> Bi-Directional Overmatch 
      </h2>
      <p className="mb-6">
         The enterprise dashboard is not merely an observational tool. It provides violent, bi-directional intervention architecture.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Eye className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Active Threat Detonation</h4>
            <p className="text-brand-steel text-xs leading-loose">
               When an unauthorized target breaches your geo-fence, the dashboard generates an acute alert. An operator thousands of miles away can instantly trigger the massive 120-decibel speaker arrays from their phone, forcefully announcing to the trespasser that the site is lethal and authorities are deploying.
            </p>
         </div>
         <div className="bg-[#0a111a] border border-brand-teal/20 p-8 hover:border-brand-teal transition-colors group">
            <Smartphone className="w-10 h-10 text-brand-teal mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="font-display font-black text-lg text-white uppercase tracking-widest mb-4">Battery Telemetry Analytics</h4>
            <p className="text-brand-steel text-xs leading-loose">
               Total off-grid intelligence. Instead of guessing if your trailer has enough power, the Z1 OS delivers granular solar absorption telemetry graphs. You can see precisely how much wattage the 3 massive panels generated on a cloudy Tuesday vs a sunny Friday, ensuring absolute uptime confidence.
            </p>
         </div>
      </div>

      <h2 className="font-display font-black text-3xl uppercase tracking-widest text-brand-teal mt-16 mb-8 flex items-center gap-4">
         <Shield className="w-8 h-8" /> Role-Based Zero Trust
      </h2>
      <p className="mb-6">
         At the enterprise tier, compartmentalized access is mandatory. The OS enables hierarchical identity partitioning. Grant local project managers view-only access to their specific yards, while giving national operations absolute administrative override across the entire fleet architecture.
      </p>
    </article>
  );
}
