"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ShieldAlert, TrendingUp, BarChart3, AlertTriangle, Zap, Target,
  Activity, Crosshair, ChevronDown, ArrowRight, Clock, DollarSign,
  Camera, Battery, Volume2, Radio, CheckCircle2, Lock, Car,
  Users, FileText, MapPin, Eye, Cpu, Sun, ScanLine, CircleParking
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── LIVE THREAT INTELLIGENCE DATA ──────────────────────────────────────────
const THREAT_STATS = [
  { title: "Property Crime Rate", value: "10%", desc: "1 in 10 property crimes in the US occurs in parking structures or surface lots.", icon: AlertTriangle, color: "red", source: "FBI UCR Data" },
  { title: "Annual National Loss", value: "$7.4B", desc: "Total annual losses from vehicle break-ins, theft, and vandalism in US parking facilities.", icon: ShieldAlert, color: "red", source: "National Insurance Crime Bureau" },
  { title: "Avg. Liability Payout", value: "$750K", desc: "Average premises liability settlement when customers experience crime on parking property.", icon: TrendingUp, color: "red", source: "Insurance Industry Analysis" },
  { title: "Customer Attrition", value: "67%", desc: "Percentage of parkers who factor security measures when choosing between parking options.", icon: BarChart3, color: "red", source: "Consumer Survey Data" },
];

const DEPLOYMENT_STEPS = [
  { num: "01", title: "Tow & Position", desc: "Standard hitch delivery to any surface lot, garage entry, or overflow area. No permits needed.", time: "0 MIN", icon: MapPin },
  { num: "02", title: "Level & Stabilize", desc: "Integrated jacks auto-level on concrete, asphalt, or gravel surfaces. Tamper-resistant base anchors.", time: "5 MIN", icon: Target },
  { num: "03", title: "Mast Raise & LPR Calibrate", desc: "18–22ft pneumatic mast clears vehicle rooflines. LPR cameras auto-calibrate to traffic lanes.", time: "10 MIN", icon: Eye },
  { num: "04", title: "Go Live", desc: "Solar panels charge, cellular uplinks activate, AI analytics begin learning normal traffic patterns.", time: "15 MIN", icon: Zap },
];

const CASE_STUDIES = [
  {
    title: "Hospital Parking Structure — Phoenix, AZ",
    result: "87% Crime Reduction in 30 Days",
    before: "23 vehicle break-ins per month",
    after: "3 incidents in first month; 2 stolen vehicles recovered via LPR",
    detail: "Two Z1 units covered 800 spaces across four levels. Patient safety satisfaction scores increased 19% in quarterly surveys, directly attributable to the enhanced visible security measures.",
    savings: "$180K+",
    icon: BarChart3,
  },
  {
    title: "Shopping Mall Overflow — Detroit, MI",
    result: "Black Friday Threat Neutralized",
    before: "Annual spike in holiday vehicle crimes",
    after: "3 suspects detected at 11:30 PM via thermal imaging — arrested within 72 hours",
    detail: "Thermal imaging detected break-in in progress. Two-way audio announced police dispatch while strobe activation caused suspects to flee. LPR data provided to authorities led to rapid arrests. Preventing just four break-ins paid for the entire two-month rental period.",
    savings: "$95K+",
    icon: Shield,
  },
  {
    title: "Mixed-Use Development — Multi-Tenant",
    result: "91% Vandalism Reduction in 6 Months",
    before: "Unauthorized overnight parking and periodic vehicle vandalism",
    after: "Towing incidents reduced 64% via proactive audio warnings",
    detail: "LPR created automated permit verification — alerting security when unauthorized vehicles entered after hours. Property management firm now includes mobile surveillance as a standard amenity in all new developments.",
    savings: "$120K+",
    icon: Crosshair,
  },
];

const FEATURES = [
  { title: "License Plate Recognition", desc: "Captures and catalogs every vehicle entering and exiting — 60–120 vehicles/minute with 98%+ accuracy. Searchable databases identify suspect vehicles within seconds.", icon: ScanLine },
  { title: "Infrared & Thermal Imaging", desc: "Identification-quality footage in complete darkness. Facial features, clothing, and vehicle details captured at 250+ feet regardless of lighting conditions.", icon: Camera },
  { title: "LiFePO4 Solar Energy Core", desc: "7–10 day battery reserve with solar recharge. Zero dependency on facility electrical systems — continuous operation during power outages when lots are most vulnerable.", icon: Battery },
  { title: "AI Behavioral Analytics", desc: "Distinguishes normal parking behavior from threat indicators: loitering near vehicles, repeated circling, accessing areas during closed hours. 94% false alarm reduction.", icon: Cpu },
  { title: "Two-Way Audio System", desc: "Customer assistance, parking instructions, or trespasser warnings from remote command center. Service enhancement plus deterrent capability in one system.", icon: Volume2 },
  { title: "Cloud Multi-Site Dashboard", desc: "Consolidates all camera feeds across multiple facilities with customizable alert protocols. Mobile app access from any device, anywhere.", icon: Radio },
];

const FAQS = [
  { q: "Can security trailers effectively monitor multi-level parking structures?", a: "Yes. Position trailers at entry/exit points to capture all vehicle license plates, then place additional units on intermediate levels to cover stairwells, elevators, and high-risk zones. The elevated 18–22ft masts extend above vehicle rooflines, providing sight lines across entire parking decks. Most installations achieve comprehensive coverage with 1 trailer per 250–400 parking spaces depending on facility layout." },
  { q: "How does license plate recognition work in high-traffic parking areas?", a: "Advanced LPR cameras process 60–120 vehicles per minute, capturing plates from multiple lanes simultaneously regardless of speed or direction. The system photographs every vehicle entering and exiting with 98%+ accuracy in daylight and 94%+ at night. Data feeds into searchable databases with timestamps, enabling security teams to locate specific vehicles within seconds. The system can flag stolen plates, alert when banned vehicles enter, or identify vehicles exceeding time limits." },
  { q: "What prevents criminals from avoiding the trailer-covered areas?", a: "Strategic placement at entry/exit chokepoints ensures all facility users are captured regardless of parking location. Extended camera range covers 3–5 acres per unit — criminals cannot identify blind spots from perimeter observation. The visible deterrent causes many criminals to bypass the facility entirely. For large facilities, randomized trailer repositioning every 7–14 days prevents pattern recognition. The result is facility-wide crime reduction, not displacement." },
  { q: "Can the security trailer operate during severe weather events?", a: "Z1 trailers are engineered for continuous operation in hurricanes, blizzards, and severe thunderstorms. IP66/IP67 weatherproof enclosures protect electronics from rain, snow, ice, and temporary flooding. Wind-resistant designs with stabilizer systems withstand gusts up to 65 mph. Temperature-controlled enclosures maintain operation from -40°F to 140°F. The autonomous solar/battery system functions during grid outages that commonly accompany severe weather." },
  { q: "How quickly can we deploy security for a special event parking area?", a: "Mobile security trailers deploy in 15–20 minutes from delivery to full operation. Tow to location, level the base, raise the mast, and activate. Solar panels and LiFePO4 battery banks provide immediate power without hookups. 4G/5G cellular connectivity establishes live monitoring within minutes. For special events, schedule delivery 24–48 hours before for testing and positioning. Same-day emergency deployment is available for urgent security needs." },
];

// ── ROI CALCULATOR ─────────────────────────────────────────────────────────
function ParkingROICalculator() {
  const [months, setMonths] = useState(6);
  const [incidents, setIncidents] = useState(15);
  const costPerIncident = 5950; // avg of $3,200-$8,700
  const trailerCostPerMonth = 1400;
  const currentAnnualLoss = incidents * 12 * costPerIncident;
  const protectedLoss = Math.round(currentAnnualLoss * 0.22); // 78% reduction
  const trailerCost = months * trailerCostPerMonth;
  const netSavings = Math.round((currentAnnualLoss - protectedLoss) * (months / 12)) - trailerCost;

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-teal m-3" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-teal m-3" />

      <div className="flex items-center gap-3 mb-8">
        <DollarSign className="w-5 h-5 text-brand-teal" />
        <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-black">Parking Facility ROI // Live Projection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">Monthly Incidents (Current)</label>
          <input
            type="range" min={1} max={40} value={incidents}
            onChange={(e) => setIncidents(Number(e.target.value))}
            className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-red-400"
          />
          <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-widest">
            <span>1</span>
            <span className="text-red-400 font-black text-sm">{incidents} INCIDENTS/MO</span>
            <span>40</span>
          </div>
        </div>
        <div>
          <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">Protection Duration (Months)</label>
          <input
            type="range" min={1} max={24} value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-widest">
            <span>1 MO</span>
            <span className="text-brand-teal font-black text-sm">{months} MONTHS</span>
            <span>24 MO</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-500/5 border border-red-500/20 p-6">
          <p className="font-mono text-[9px] text-red-400/60 uppercase tracking-widest mb-2">Current Annual Loss</p>
          <p className="font-display font-black text-xl md:text-2xl text-red-400 tracking-tighter">${currentAnnualLoss.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">@ ${costPerIncident.toLocaleString()}/INCIDENT</p>
        </div>
        <div className="bg-green-500/5 border border-green-500/20 p-6">
          <p className="font-mono text-[9px] text-green-400/60 uppercase tracking-widest mb-2">After Z1 Deployment</p>
          <p className="font-display font-black text-xl md:text-2xl text-green-400 tracking-tighter">${protectedLoss.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">78% CRIME REDUCTION</p>
        </div>
        <div className="bg-brand-teal/5 border border-brand-teal/20 p-6">
          <p className="font-mono text-[9px] text-brand-teal/60 uppercase tracking-widest mb-2">Z1 Trailer Investment</p>
          <p className="font-display font-black text-xl md:text-2xl text-brand-teal tracking-tighter">${trailerCost.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">{months} MONTH RENTAL</p>
        </div>
        <div className="bg-brand-gold/5 border border-brand-gold/20 p-6">
          <p className="font-mono text-[9px] text-brand-gold/60 uppercase tracking-widest mb-2">Net Savings</p>
          <p className={cn("font-display font-black text-xl md:text-2xl tracking-tighter", netSavings > 0 ? "text-brand-gold" : "text-red-400")}>${netSavings.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">PROJECTED ROI</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ ACCORDION ──────────────────────────────────────────────────────────
function ParkingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, idx) => (
        <div
          key={idx}
          className={cn(
            "border transition-all duration-300",
            openIndex === idx ? "border-brand-teal bg-brand-teal/5" : "border-white/5 bg-black/40 hover:border-white/20"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <span className="font-mono text-[10px] text-brand-teal/50 font-black tracking-widest shrink-0">0{idx + 1}</span>
              <span className="font-display font-black text-sm md:text-lg text-white uppercase tracking-wider leading-snug">{faq.q}</span>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-brand-teal transition-transform duration-300 shrink-0 ml-4", openIndex === idx && "rotate-180")} />
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 border-t border-white/5 mt-2">
                  <p className="font-mono text-xs text-white/60 leading-loose tracking-wider">{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function ParkingLotsPage() {
  return (
    <main className="bg-brand-navy min-h-screen">

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-auto min-h-[85vh] flex items-end justify-start overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent z-10" />
          <img
            src="/images/industries/parking-day.jpg"
            alt="Z1 Security Trailer Parking Lot Surveillance"
            className="w-full h-full object-cover scale-105 contrast-125 grayscale-[30%]"
          />
          <motion.div
            className="absolute inset-x-0 h-[2px] bg-brand-teal/40 z-20 pointer-events-none"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] z-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-24 relative z-30 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-32">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="px-3 py-1 bg-brand-gold text-brand-navy font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-pulse" /> THREAT_LEVEL // HIGH
                </div>
                <div className="font-mono text-[10px] text-brand-steel tracking-widest uppercase hidden md:block">SECTOR: PARKING_MANAGEMENT</div>
              </div>
              <h1 className="font-display font-black text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
                Parking Lot<br /><span className="text-white/20">Security Trailer.</span>
              </h1>
              <p className="max-w-xl font-mono text-xs md:text-sm tracking-widest leading-loose text-white/70 uppercase">
                Advanced mobile surveillance with license plate recognition, AI behavioral analytics, and 24/7 autonomous monitoring. Reduce parking facility crime by 78% without permanent infrastructure.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="px-8 py-4 bg-brand-teal text-brand-navy font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-105">
                  Secure Your Facility
                </Link>
                <a href="tel:9185203823" className="px-8 py-4 border border-white/20 text-white font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white/10">
                  (918) 520-3823
                </a>
              </div>
            </motion.div>
          </div>

          {/* Telemetry HUD */}
          <div className="lg:col-span-5 flex flex-col items-end space-y-4">
            <div className="w-full max-w-sm bg-black/40 backdrop-blur-2xl border border-white/10 p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-teal m-2" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-teal m-2" />
              <p className="font-mono text-[10px] text-brand-teal mb-6 tracking-widest uppercase font-black flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> Tactical_Telemetry // LIVE
              </p>
              <div className="space-y-6">
                {[
                  { label: "US_PROPERTY_CRIME_LOTS", value: "10.0%" },
                  { label: "ANNUAL_NATIONAL_LOSS", value: "$7.4B" },
                  { label: "AVG_LIABILITY_PAYOUT", value: "$750K" },
                ].map((stat, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                      <span className="font-display font-black text-lg text-white group-hover:text-brand-teal transition-colors">{stat.value}</span>
                    </div>
                    <div className="h-[2px] bg-white/5 relative overflow-hidden">
                      <motion.div className="absolute inset-y-0 left-0 bg-brand-teal" initial={{ width: 0 }} animate={{ width: `${60 + idx * 15}%` }} transition={{ duration: 2, delay: idx * 0.2 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[8px] text-brand-steel tracking-widest uppercase">
                  <Zap className="w-3 h-3 text-brand-gold animate-pulse" /> Source: FBI / NICB
                </div>
                <div className="font-mono text-[8px] text-brand-teal tracking-widest uppercase font-black">[ LPR_ACTIVE ]</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/4 right-10 hidden xl:block z-20 pointer-events-none opacity-20">
          <div className="w-64 h-64 border border-brand-teal/30 rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full border border-brand-teal/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Target className="w-12 h-12 text-brand-teal" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ THREAT INTELLIGENCE MATRIX ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Evidence_of_Overmatch // Facility Intelligence</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Parking <span className="text-white/20">Vulnerability</span> Analysis.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {THREAT_STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-white/5 p-8 relative group overflow-hidden"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 text-white/50 group-hover:text-red-400 group-hover:border-red-400/30 transition-all">
                    <stat.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <BarChart3 className="w-10 h-10 text-white/5 group-hover:text-red-400/20 transition-all transform group-hover:scale-110" strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest font-black">{stat.title}</p>
                  <p className="font-display font-black text-4xl text-white tracking-tighter group-hover:text-red-400 transition-colors">{stat.value}</p>
                </div>
                <p className="mt-6 font-mono text-[9px] text-white/40 leading-relaxed uppercase tracking-widest">{stat.desc}</p>
                <p className="mt-4 font-mono text-[8px] text-brand-teal/40 uppercase tracking-widest">Source: {stat.source}</p>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-6 border-l-2 border-brand-gold/30 bg-brand-gold/5 flex items-center gap-6">
            <AlertTriangle className="w-8 h-8 text-brand-gold animate-pulse shrink-0" strokeWidth={1.5} />
            <p className="font-mono text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
              [ ALERT: PARKING FACILITIES COST OPERATORS $3,200–$8,700 PER INCIDENT WHEN FACTORING RESPONSE, REPAIRS, AND TEMPORARY SECURITY ESCALATION. ORGANIZED RETAIL CRIME (ORC) UP 14% YOY. ]
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ SECURITY CHALLENGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Threat_Analysis // Facility Intelligence</p>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-8">
                Why Parking Facilities<br /><span className="text-brand-teal">Need Specialized Security.</span>
              </h2>
              <div className="space-y-6 font-mono text-xs md:text-sm text-brand-navy/70 leading-loose tracking-wider">
                <p>Parking facilities present distinct security challenges that demand solutions beyond standard surveillance. High vehicle turnover creates hundreds of access events daily, making it nearly impossible to distinguish legitimate users from criminals conducting reconnaissance.</p>
                <p>Low lighting during evening and overnight hours — when <strong className="text-brand-navy">most crimes occur</strong> — renders standard cameras ineffective, capturing only grainy footage insufficient for identification. Multi-level structures contain blind spots created by support columns, ramps, and vehicle clusters.</p>
                <p>The isolated positioning of parking areas away from building entrances means incidents go unnoticed for extended periods. Seasonal usage fluctuations mean permanent systems sit underutilized off-peak while providing insufficient coverage during demand surges.</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Vehicle-Dense False Alarms", desc: "Traditional motion detection triggers constant alerts from legitimate traffic, rendering systems useless when genuine threats occur.", icon: Car },
                { title: "Structural Blind Spots", desc: "Columns, ramps, and vehicle clusters in garages create unmonitored zones where criminals operate undetected by wall-mounted cameras.", icon: Eye },
                { title: "Seasonal Coverage Gaps", desc: "Winter holiday shopping or summer events require surge security that permanent systems cannot economically scale.", icon: Clock },
                { title: "Premises Liability Exposure", desc: "Inadequate security lawsuits average $750K in settlements. Documented 24/7 surveillance reduces claim frequency by 40–60%.", icon: FileText },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-6 p-6 bg-white border border-brand-mist/50 shadow-sm group hover:border-brand-teal/30 transition-all"
                >
                  <div className="shrink-0 w-12 h-12 bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-all">
                    <item.icon className="w-5 h-5 text-brand-navy/40 group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-sm uppercase tracking-widest text-brand-navy mb-2">{item.title}</h3>
                    <p className="font-mono text-[11px] text-brand-navy/50 tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 3.5: 24/7 AUTONOMOUS SHIFT (DAY / NIGHT) ━━━━━━━━━━━━ */}
      <section className="py-24 bg-[#020406] border-t border-brand-teal/20 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Continuous_Overwatch // 24/7 Operations</p>
          <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-6 text-white">
            Complete <span className="text-brand-teal drop-shadow-[0_0_10px_rgba(27,154,170,0.5)]">Circadian Control.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose text-white/50">
            Hover over the deployment below to simulate nightfall. High-output perimeter strobes, thermal arrays, and PTZ illuminators engage autonomously the moment ambient light drops.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {/* Interactive Day/Night Container */}
          <div className="relative w-full aspect-video rounded-sm overflow-hidden group border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] cursor-crosshair">
            {/* 1. The Daytime Base Image */}
            <img src="/images/industries/parking-day.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Daytime Parking Setup" />
            
            {/* 2. The Nighttime Fading Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] ease-in z-10">
              <img src="/images/industries/parking-night.jpg" className="w-full h-full object-cover scale-105" alt="Nighttime Parking Setup" />
              
              {/* Optional Physical Hardware Glow Enhancements */}
              <div className="absolute top-1/4 left-1/2 -translate-x-[60%] -translate-y-1/2 w-40 h-40 bg-white blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-[2s] pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 flex items-center space-x-3 bg-black/60 backdrop-blur-md px-4 py-2 border border-red-500/30">
                 <div className="w-2 h-2 bg-red-500 rounded-full animate-ping shadow-[0_0_15px_red]" />
                 <span className="font-mono text-[10px] uppercase text-red-500 tracking-widest font-bold">NIGHT VISION // ACTIVE</span>
              </div>
            </div>

            {/* Hover instruction overlay (Disappears on hover) */}
            <div className="absolute inset-x-0 bottom-0 py-10 bg-gradient-to-t from-black via-black/50 to-transparent z-20 flex justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500">
               <span className="font-mono text-[10px] uppercase text-brand-teal tracking-[0.3em] bg-brand-navy/80 px-6 py-2 border border-brand-teal/30 shadow-[0_0_20px_rgba(27,154,170,0.2)] animate-pulse">
                [ HOVER MOUSE TO TERMINATE SUNLIGHT ]
               </span>
            </div>
            
            {/* Tactical Targeting Reticle overlay (Appears on Hover) */}
            <div className="absolute inset-0 border border-brand-teal/10 pointer-events-none z-20 group-hover:border-brand-teal/50 transition-colors duration-1000">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-teal/30 rounded-full opacity-0 group-hover:opacity-100 scale-150 group-hover:scale-100 transition-all duration-[1.5s] ease-out" />
               <Crosshair className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-[2s]" strokeWidth={1} />
               
               <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-brand-teal m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300" />
               <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-brand-teal m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DEPLOYMENT TIMELINE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Operational_Architecture // Rapid Deployment</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              15-Minute <span className="text-white/20">Deployment.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPLOYMENT_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative p-8 border border-white/5 bg-black/30 group hover:border-brand-teal/30 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-teal group-hover:h-full transition-all duration-700" />
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-brand-teal/10 border border-brand-teal/30">
                    <step.icon className="w-5 h-5 text-brand-teal" strokeWidth={1.5} />
                  </div>
                  <span className="font-display font-black text-4xl text-white/10 group-hover:text-brand-teal/20 transition-colors">{step.num}</span>
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-4 group-hover:text-brand-teal transition-colors">{step.title}</h3>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed mb-6">{step.desc}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="font-mono text-[10px] bg-brand-teal/10 border border-brand-teal/30 text-brand-teal px-3 py-1 uppercase tracking-widest font-black">{step.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy border-t border-brand-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Hardware_Payload // Parking Specialization</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-4">
              Parking-Grade <span className="text-brand-teal">Technology.</span>
            </h2>
            <p className="font-mono text-xs text-brand-navy/50 uppercase tracking-widest max-w-2xl">
              Purpose-built for vehicle-dense environments. LPR, thermal imaging, and AI behavioral analytics designed to eliminate the false alarm problem that plagues traditional parking surveillance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-8 bg-white border border-brand-mist/50 shadow-sm group hover:border-brand-teal/30 hover:shadow-lg transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-brand-teal group-hover:w-full transition-all duration-500" />
                <div className="w-14 h-14 bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center mb-8 group-hover:bg-brand-teal/10 group-hover:border-brand-teal/30 transition-all">
                  <feat.icon className="w-6 h-6 text-brand-navy/30 group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-brand-navy mb-4">{feat.title}</h3>
                <p className="font-mono text-[11px] text-brand-navy/50 leading-relaxed tracking-wider">{feat.desc}</p>
                <Link href="/hardware-deep-dive" className="mt-6 inline-flex items-center gap-2 font-mono text-[9px] text-brand-teal uppercase tracking-widest font-bold group-hover:underline underline-offset-4">
                  Full Specifications <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ROI & COST ANALYSIS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Financial_Intelligence // Facility Cost Analysis</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              ROI <span className="text-white/20">Projection.</span>
            </h2>
          </div>
          <ParkingROICalculator />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "Crime Reduction", value: "78%", detail: "Average reduction within first 90 days of deployment across all parking facility types.", source: "Z1 Deployment Data" },
              { metric: "Insurance Discount", value: "8–18%", detail: "Premium reductions from Chubb & AIG for certified 24/7 parking surveillance systems.", source: "Carrier Reports" },
              { metric: "Revenue Uplift", value: "+$1.50–3.00", detail: "Per-event premium increase customers will pay for facilities with visible security measures.", source: "Consumer Survey" },
            ].map((item, idx) => (
              <div key={idx} className="bg-black/30 border border-white/5 p-8 group hover:border-brand-teal/20 transition-all">
                <p className="font-mono text-[9px] text-brand-teal/50 uppercase tracking-widest mb-3 font-bold">{item.metric}</p>
                <p className="font-display font-black text-4xl text-white tracking-tighter mb-4 group-hover:text-brand-teal transition-colors">{item.value}</p>
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">{item.detail}</p>
                <p className="font-mono text-[8px] text-brand-teal/30 uppercase tracking-widest mt-3">Source: {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CASE STUDIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Field_Intelligence // Verified Deployments</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">
              Deployment <span className="text-brand-teal">Case Files.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-brand-mist/50 shadow-sm group hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-brand-navy/5 border border-brand-navy/10">
                      <cs.icon className="w-5 h-5 text-brand-navy/40 group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="font-display font-black text-2xl text-brand-teal tracking-tighter">{cs.savings}</span>
                  </div>
                  <h3 className="font-display font-black text-sm uppercase tracking-widest text-brand-navy mb-2">{cs.title}</h3>
                  <p className="font-mono text-[10px] text-brand-teal uppercase tracking-widest font-bold mb-6">{cs.result}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-red-50 border border-red-100">
                      <p className="font-mono text-[8px] text-red-400 uppercase tracking-widest mb-1 font-bold">Before</p>
                      <p className="font-mono text-[10px] text-brand-navy/60 leading-relaxed">{cs.before}</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-100">
                      <p className="font-mono text-[8px] text-green-500 uppercase tracking-widest mb-1 font-bold">After</p>
                      <p className="font-mono text-[10px] text-brand-navy/60 leading-relaxed">{cs.after}</p>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-brand-navy/50 leading-relaxed tracking-wider">{cs.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ COMPLIANCE & LEGAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Compliance_Matrix // Legal Framework</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
              Regulatory <span className="text-white/20">Compliance.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Municipal Parking Security Mandates", code: "CA SB 1138+", desc: "Multiple jurisdictions now mandate minimum security standards for commercial parking. Non-compliance exposes operators to fines and increased liability in civil litigation.", icon: Shield },
              { title: "ADA Accessible Zone Protection", code: "ADA / DOJ", desc: "Accessible parking spaces near entrances create isolated areas targeted more frequently. Documented surveillance demonstrates reasonable accommodation security measures.", icon: Users },
              { title: "Privacy & Biometric Compliance", code: "BIPA / CCPA", desc: "LPR and facial data must be collected, stored, and accessed per strict protocols. Z1 systems incorporate AES-256 encryption, access controls, and configurable retention policies.", icon: Lock },
              { title: "Zoning & Operating Permits", code: "LOCAL / DHS", desc: "Operating permits increasingly require 24/7 monitoring capabilities and law enforcement integration. Mobile trailers with professional monitoring satisfy renewal requirements.", icon: FileText },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-black/30 border border-white/5 p-8 group hover:border-brand-teal/20 transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-teal group-hover:w-full transition-all duration-500" />
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 group-hover:border-brand-teal/30 transition-all">
                    <item.icon className="w-5 h-5 text-white/30 group-hover:text-brand-teal transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[9px] text-brand-teal/50 uppercase tracking-widest font-bold">{item.code}</span>
                </div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-wider mb-4">{item.title}</h3>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Sector_Intelligence // Operational Protocols</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-[0.9]">
              Frequently Asked <span className="text-white/20">Questions.</span>
            </h2>
          </div>
          <ParkingFAQ />
          <div className="mt-16 text-center">
            <Link href="/get-a-quote" className="inline-flex items-center gap-4 group">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold group-hover:text-brand-teal transition-colors underline underline-offset-8 decoration-brand-teal/30 group-hover:decoration-brand-teal">
                Have More Questions? Contact Command
              </span>
              <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-teal/5 animate-pulse" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Car className="w-16 h-16 text-brand-teal mx-auto mb-8 animate-pulse" strokeWidth={1} />
          <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
            Secure Your <span className="text-white/20">Facility Today.</span>
          </h2>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4 max-w-2xl mx-auto leading-loose">
            Z1 Trailers monitors over 15,000 parking spaces nationwide with proven 78% crime reduction results. Safer facilities mean satisfied customers and stronger bottom lines.
          </p>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-12">
            [ FLEXIBLE WEEKLY, MONTHLY & ANNUAL RENTAL // PURCHASE PROGRAMS AVAILABLE ]
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/get-a-quote" className="w-full md:w-auto px-16 py-6 bg-brand-teal text-brand-navy font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1">
              Free Security Assessment
            </Link>
            <a href="tel:9185203823" className="w-full md:w-auto px-16 py-6 border border-brand-teal/40 text-brand-teal font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-brand-teal/10 transition-all">
              (918) 520-3823
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/20 font-mono text-[9px] uppercase tracking-widest">
            <Link href="/compare/lvt-alternative" className="hover:text-brand-teal transition-colors">[ Z1 vs LVT Comparison ]</Link>
            <Link href="/hardware-deep-dive" className="hover:text-brand-teal transition-colors">[ Hardware Deep-Dive ]</Link>
            <Link href="/industries/construction-sites" className="hover:text-brand-teal transition-colors">[ Construction Sites ]</Link>
          </div>
        </div>
      </section>

      {/* ━━━ SCHEMA MARKUP ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Parking Lot Security Trailer: Advanced Protection for Parking Facilities",
            "description": "Reduce parking lot crime by 78% with mobile security trailers. License plate capture, live monitoring & rapid deployment.",
            "author": { "@type": "Organization", "name": "Z1 Trailers", "url": "https://www.z1trailers.com" },
            "publisher": { "@type": "Organization", "name": "Z1 Trailers", "url": "https://www.z1trailers.com" },
            "datePublished": "2026-04-04",
            "dateModified": new Date().toISOString().split("T")[0]
          })
        }}
      />
    </main>
  );
}
