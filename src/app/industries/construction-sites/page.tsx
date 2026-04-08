"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ShieldAlert, TrendingUp, BarChart3, AlertTriangle, Zap, Target,
  Activity, Crosshair, ChevronDown, ArrowRight, Clock, DollarSign,
  Camera, Battery, Volume2, Radio, CheckCircle2, HardHat, Lock,
  Users, FileText, MapPin, Eye, Cpu, Sun
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── LIVE THREAT INTELLIGENCE DATA ──────────────────────────────────────────
const THREAT_STATS = [
  { title: "Annual Sector Loss", value: "$1.0B+", desc: "Estimated annual equipment & material theft across North American construction sites.", icon: AlertTriangle, color: "red", source: "National Equipment Register" },
  { title: "Off-Hours Crime Rate", value: "73%", desc: "Percentage of all construction site crimes occurring during off-hours when traditional security is absent.", icon: ShieldAlert, color: "red", source: "AGC of America" },
  { title: "Insurance Premium Hike", value: "+15–25%", desc: "Average increase in project insurance premiums for sites without documented 24/7 surveillance systems.", icon: TrendingUp, color: "red", source: "Liberty Mutual / Travelers" },
  { title: "Recovery Probability", value: "< 25%", desc: "Probability of recovering stolen construction equipment after theft due to rapid interstate redistribution networks.", icon: BarChart3, color: "red", source: "NER Database" },
];

const DEPLOYMENT_STEPS = [
  { num: "01", title: "Tow & Position", desc: "Trailer arrives on-site via standard hitch. No permits, no excavation, no concrete pours required.", time: "0 MIN", icon: MapPin },
  { num: "02", title: "Level & Stabilize", desc: "Integrated jacks auto-level on uneven terrain. Reinforced steel base resists tampering and repositioning.", time: "5 MIN", icon: Target },
  { num: "03", title: "Mast Raise", desc: "Telescoping mast extends cameras to 15–20 feet, eliminating ground-level blind spots across the entire site.", time: "10 MIN", icon: Eye },
  { num: "04", title: "System Activation", desc: "Solar panels charge, 4G/5G uplinks establish, AI analytics calibrate to your site's unique threat patterns.", time: "15 MIN", icon: Zap },
];

const CASE_STUDIES = [
  {
    title: "Commercial High-Rise — Denver, CO",
    result: "0 Incidents After Deployment",
    before: "11 theft incidents/month",
    after: "Zero incidents over 8-month deployment",
    detail: "Three Z1 units positioned at entry points and high-value material storage. AI detection intercepted two organized theft attempts, alerting police who apprehended suspects before they could remove a $75,000 compact excavator.",
    savings: "$350K+",
    icon: BarChart3,
  },
  {
    title: "Highway Expansion — 12-Mile Corridor",
    result: "Weekly Redeployment Success",
    before: "Vandalism to safety barriers in closed sections",
    after: "Suspects arrested within 48 hours via timestamped footage",
    detail: "Mobile security trailers relocated weekly as paving crews advanced, maintaining consistent surveillance throughout the corridor. DOT contractor credited the system with maintaining the project schedule.",
    savings: "$125K+",
    icon: Shield,
  },
  {
    title: "Residential Subdivision — Utility Phase",
    result: "Copper Theft Attempt Neutralized",
    before: "Peak copper wire theft vulnerability period",
    after: "Three suspects detected at 2:47 AM via thermal imaging",
    detail: "Two-way audio announced police dispatch while strobe lights activated, causing suspects to flee. Prevented an estimated $40,000 in wire theft and project delays. Developer calculated ROI within four months.",
    savings: "$40K+",
    icon: Crosshair,
  },
];

const FEATURES = [
  { title: "360° AI Neural Optics", desc: "Pan-tilt-zoom cameras with 30x optical zoom capture license plates and facial details from 300+ feet in complete darkness via infrared night vision.", icon: Camera },
  { title: "LiFePO4 Energy Core", desc: "Solar panels with battery backup ensure 5–7 day autonomous runtime without external power. Zero fire risk on your job site with 3,500+ cycle life.", icon: Battery },
  { title: "120dB Acoustic Deterrence", desc: "Two-way audio enables live talkdown from Command Center. Automated voice warnings deter trespassers before theft escalates.", icon: Volume2 },
  { title: "AI Threat Classification", desc: "Machine learning distinguishes workers, vehicles, wildlife, and genuine threats with 94% false alarm reduction vs conventional motion sensors.", icon: Cpu },
  { title: "StarLink / 5G Uplink", desc: "4G/5G cellular + Starlink satellite connectivity transmits live footage without requiring internet installation. Works in zero-cell zones.", icon: Radio },
  { title: "Active Strobe Protocol", desc: "High-intensity red/blue strobes trigger autonomously on AI-verified breach. Simultaneous alerts to your security team and local authorities.", icon: Zap },
];

const FAQS = [
  { q: "How long does it take to deploy a construction site security trailer?", a: "Mobile security trailers deploy in 15–20 minutes without requiring electrical hookups, internet installation, or ground excavation. Simply tow the unit to your desired location, level the base, raise the mast, and activate. Solar panels and LiFePO4 batteries provide immediate autonomous operation, while 4G/5G cellular connectivity establishes live monitoring within minutes. Relocation takes approximately the same time, allowing security coverage to move seamlessly as your project progresses." },
  { q: "Will the security trailer work during winter months with limited sunlight?", a: "Yes. Z1 trailers are engineered for year-round operation in all climates. High-efficiency solar panels generate sufficient power even during overcast winter conditions, while industrial-grade LiFePO4 battery banks store 5–7 days of reserve capacity. In extreme low-light scenarios, optional generator hookups or AC power connections ensure continuous operation. Components are rated for -40°F to 140°F with active heating elements protecting critical electronics during freezing conditions." },
  { q: "Can one trailer monitor an entire large construction site?", a: "A single Z1 unit provides 360° coverage with optical zoom up to 30x, monitoring areas up to 300 feet away with identification-quality detail. For sites exceeding one acre, deploying multiple trailers at strategic locations (entry points, equipment storage, material yards) creates overlapping coverage zones. Our cloud-based management platform consolidates all feeds into a single interface, allowing supervisors to monitor the entire site from any device." },
  { q: "What happens if someone tries to vandalize or disable the trailer?", a: "Z1 trailers incorporate multiple layers of tamper protection. Any attempt to move, tilt, or impact the unit triggers immediate alerts to your security team and authorities. Reinforced steel construction resists cutting and prying. If power is interrupted or cellular connection is jammed, automatic tamper alerts are sent before going offline. Internal battery backup continues recording locally. The elevated 15–20 foot mast places equipment beyond ground-level interference." },
  { q: "How does the cost compare to hiring security guards?", a: "Z1 trailers deliver 88–94% lower cost than guard services. A typical guard costs $35–$55/hour ($8,400–$13,200/month for overnight coverage alone). Z1 trailer rentals range from $800–$1,600/monthly for continuous 24/7 coverage. Beyond direct savings, trailers eliminate guard fatigue, coverage gaps during breaks, and overnight personnel liability. Video documentation provides evidence quality that witness statements cannot match." },
];

// ── ROI CALCULATOR COMPONENT ───────────────────────────────────────────────
function ROICalculator() {
  const [months, setMonths] = useState(6);
  const guardCostPerMonth = 10800; // avg of $35-55/hr * 8hr * 30 days
  const trailerCostPerMonth = 1200; // avg rental
  const guardTotal = months * guardCostPerMonth;
  const trailerTotal = months * trailerCostPerMonth;
  const savings = guardTotal - trailerTotal;
  const savingsPercent = Math.round((savings / guardTotal) * 100);

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-teal m-3" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-teal m-3" />

      <div className="flex items-center gap-3 mb-8">
        <DollarSign className="w-5 h-5 text-brand-teal" />
        <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-black">ROI Calculator // Live Projection</p>
      </div>

      <div className="mb-10">
        <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">Project Duration (Months)</label>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-red-500/5 border border-red-500/20 p-6">
          <p className="font-mono text-[9px] text-red-400/60 uppercase tracking-widest mb-2">Guard Service Cost</p>
          <p className="font-display font-black text-2xl md:text-3xl text-red-400 tracking-tighter">${guardTotal.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">@ $35–55/HR OVERNIGHT</p>
        </div>
        <div className="bg-brand-teal/5 border border-brand-teal/20 p-6">
          <p className="font-mono text-[9px] text-brand-teal/60 uppercase tracking-widest mb-2">Z1 Trailer Rental</p>
          <p className="font-display font-black text-2xl md:text-3xl text-brand-teal tracking-tighter">${trailerTotal.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">24/7 AUTONOMOUS COVERAGE</p>
        </div>
        <div className="bg-green-500/5 border border-green-500/20 p-6">
          <p className="font-mono text-[9px] text-green-400/60 uppercase tracking-widest mb-2">Your Savings</p>
          <p className="font-display font-black text-2xl md:text-3xl text-green-400 tracking-tighter">${savings.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">{savingsPercent}% COST REDUCTION</p>
        </div>
      </div>
    </div>
  );
}

// ── FAQ ACCORDION COMPONENT ────────────────────────────────────────────────
function ConstructionFAQ() {
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
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export default function ConstructionSitesPage() {
  return (
    <main className="bg-brand-navy min-h-screen">

      {/* ━━━ SECTION 1: HERO — SECTOR THREAT BRIEFING ━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-auto min-h-[85vh] flex items-end justify-start overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent z-10" />
          <img
            src="/images/industries/construction-day.jpg"
            alt="Z1 Security Trailer Construction Site Surveillance"
            className="w-full h-full object-cover scale-105 contrast-125 grayscale-[30%]"
          />
          {/* Scan Line */}
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
                <div className="px-3 py-1 bg-red-500 text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-pulse" /> THREAT_LEVEL // CRITICAL
                </div>
                <div className="font-mono text-[10px] text-brand-steel tracking-widest uppercase hidden md:block">SECTOR: CONSTRUCTION_SITES</div>
              </div>
              <h1 className="font-display font-black text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
                Construction Site<br /><span className="text-white/20">Security Trailer.</span>
              </h1>
              <p className="max-w-xl font-mono text-xs md:text-sm tracking-widest leading-loose text-white/70 uppercase">
                Protect your job site with autonomous, solar-powered mobile surveillance. 24/7 AI-verified threat detection deploys in 15 minutes — no infrastructure required.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="px-8 py-4 bg-brand-teal text-brand-navy font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-105">
                  Deploy Site Defense
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
                  { label: "ANNUAL_SECTOR_LOSS", value: "$1.0B+" },
                  { label: "RECOVERY_PROBABILITY", value: "< 25%" },
                  { label: "OFF_HOURS_CRIME_RATE", value: "73%" },
                ].map((stat, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                      <span className="font-display font-black text-lg text-white group-hover:text-brand-teal transition-colors">{stat.value}</span>
                    </div>
                    <div className="h-[2px] bg-white/5 relative overflow-hidden">
                      <motion.div className="absolute inset-y-0 left-0 bg-brand-teal" initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 2, delay: idx * 0.2 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[8px] text-brand-steel tracking-widest uppercase">
                  <Zap className="w-3 h-3 text-brand-gold animate-pulse" /> Source: NER / AGC
                </div>
                <div className="font-mono text-[8px] text-brand-teal tracking-widest uppercase font-black">[ SCANNING_SECTOR ]</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative HUD */}
        <div className="absolute top-1/4 right-10 hidden xl:block z-20 pointer-events-none opacity-20">
          <div className="w-64 h-64 border border-brand-teal/30 rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full border border-brand-teal/20 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Target className="w-12 h-12 text-brand-teal" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 2: THREAT INTELLIGENCE MATRIX ━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              Evidence_of_Overmatch // Market Intelligence
            </p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Sector <span className="text-white/20">Vulnerability</span> Analysis.
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
          <div className="mt-12 p-6 border-l-2 border-red-500/30 bg-red-500/5 flex items-center gap-6">
            <AlertTriangle className="w-8 h-8 text-brand-gold animate-pulse shrink-0" strokeWidth={1.5} />
            <p className="font-mono text-[10px] text-white/60 leading-relaxed uppercase tracking-widest">
              [ WARNING: UNSECURED CONSTRUCTION SITES FACE $30,000–$400,000 PER THEFT INCIDENT. COPPER SPOT PRICE AT $5.64/LB CONTINUES TO DRIVE ORGANIZED THEFT OPERATIONS. ]
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ SECTION 3: THE PROBLEM — SECURITY CHALLENGES (CONTENT) ━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Threat_Analysis // Sector Intelligence</p>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-8">
                Why Construction Sites<br /><span className="text-brand-teal">Are Prime Targets.</span>
              </h2>
              <div className="space-y-6 font-mono text-xs md:text-sm text-brand-navy/70 leading-loose tracking-wider">
                <p>Construction environments present unique vulnerabilities that conventional security systems cannot address. The transient nature of job sites means security infrastructure must deploy rapidly and relocate frequently as work progresses across different zones.</p>
                <p>High-value equipment — excavators, generators, copper wire — represents targets worth <strong className="text-brand-navy">$30,000 to $400,000 per theft incident</strong> according to the Associated General Contractors of America. Remote or rural locations often lack reliable power and internet, rendering traditional wired systems impossible.</p>
                <p>The open, expansive layout creates multiple access points. Perimeter fencing provides minimal deterrence when criminals cut through chain link in seconds. Environmental factors including dust, weather exposure, and vibration from heavy machinery damage equipment not purpose-built for industrial conditions.</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Multi-Point Access Vulnerability", desc: "Open perimeters create dozens of unmonitored entry vectors that static cameras cannot cover simultaneously.", icon: Target },
                { title: "Zero Infrastructure Paradox", desc: "No power grid, no internet, no permanent structures — yet maximum security is required from day one.", icon: Zap },
                { title: "24/7 Coverage Gap", desc: "Guard fatigue, shift changes, and bathroom breaks create predictable windows of zero surveillance.", icon: Clock },
                { title: "Liability Exposure", desc: "Unauthorized after-hours entry creates costly injury claims and potential OSHA citations with 15–40% workers' comp premium increases.", icon: FileText },
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
            <img src="/images/industries/construction-day.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Daytime Construction Setup" />
            
            {/* 2. The Nighttime Fading Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] ease-in z-10">
              <img src="/images/industries/construction-night.jpg" className="w-full h-full object-cover scale-105" alt="Nighttime Construction Setup" />
              
              {/* Optional Physical Hardware Glow Enhancements */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-[2s] pointer-events-none" />
              
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

      {/* ━━━ SECTION 4: HOW IT WORKS — DEPLOYMENT TIMELINE ━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Operational_Architecture // Deployment Protocol</p>
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

      {/* ━━━ SECTION 5: KEY FEATURES & TECH PAYLOAD ━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy border-t border-brand-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Hardware_Payload // System Architecture</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-4">
              Construction-Grade <span className="text-brand-teal">Hardware.</span>
            </h2>
            <p className="font-mono text-xs text-brand-navy/50 uppercase tracking-widest max-w-2xl">
              Every component is rated IP66 for rain, snow, dust, and extreme temperatures from -40°F to 140°F. Purpose-built for the harshest industrial environments.
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

      {/* ━━━ SECTION 6: ROI & COST SAVINGS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Financial_Intelligence // Cost Analysis</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              ROI <span className="text-white/20">Projection.</span>
            </h2>
          </div>
          <ROICalculator />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "Theft Reduction", value: "87%", detail: "Average reduction in theft and vandalism incidents on sites using mobile surveillance.", source: "Z1 Deployment Data" },
              { metric: "Insurance Savings", value: "10–25%", detail: "Premium reductions from Liberty Mutual & Travelers for documented 24/7 surveillance.", source: "Carrier Reports" },
              { metric: "Claims Processing", value: "10–14 Days", detail: "Reduced from 45–60 days with traditional evidence vs. timestamped 4K footage.", source: "Industry Average" },
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

      {/* ━━━ SECTION 7: CASE STUDIES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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

      {/* ━━━ SECTION 8: REGULATORY & COMPLIANCE ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Compliance_Matrix // Regulatory Framework</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
              Regulatory <span className="text-white/20">Compliance.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "OSHA Compliance", code: "29 CFR 1926", desc: "OSHA requires contractors to provide a workplace free from recognized hazards. Site security forms a key component of hazard prevention — unauthorized access resulting in injuries creates citations, litigation, and 15–40% workers' comp premium increases.", icon: Shield },
              { title: "Municipal Permit Requirements", code: "LOCAL CODE", desc: "Many municipalities now mandate construction site security plans as conditions for building permit approval. 24/7 video surveillance is increasingly becoming a standard requirement with timestamped compliance documentation.", icon: FileText },
              { title: "Federal Acquisition Regulations", code: "FAR 52.224-3", desc: "Federal construction projects require contractors to implement physical security measures and privacy protections. Z1 trailers address this through AES-256 encrypted data transmission and access-controlled footage retrieval.", icon: Lock },
              { title: "ESG & Insurance Standards", code: "ESG / ISO", desc: "The emerging trend toward ESG reporting in construction means demonstrating community responsibility through theft prevention strengthens contractor reputations and competitive positioning for future bids.", icon: CheckCircle2 },
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

      {/* ━━━ SECTION 9: FAQ — SCHEMA OPTIMIZED ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4 flex items-center">
              Sector_Intelligence // Operational Protocols
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-[0.9]">
              Frequently Asked <span className="text-white/20">Questions.</span>
            </h2>
          </div>
          <ConstructionFAQ />
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

      {/* ━━━ SECTION 10: FINAL CTA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-teal/5 animate-pulse" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <HardHat className="w-16 h-16 text-brand-teal mx-auto mb-8 animate-pulse" strokeWidth={1} />
          <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
            Secure Your <span className="text-white/20">Site Tonight.</span>
          </h2>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4 max-w-2xl mx-auto leading-loose">
            Z1 Trailers has protected over 3,500 job sites across North America. Our mobile surveillance systems deploy immediately and deliver measurable ROI from day one.
          </p>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-12">
            [ FLEXIBLE OPEX RENTAL OR CAPEX PURCHASE // 24/7 TACTICAL SUPPORT ]
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/get-a-quote" className="w-full md:w-auto px-16 py-6 bg-brand-teal text-brand-navy font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1">
              Initialize Site Assessment
            </Link>
            <a href="tel:9185203823" className="w-full md:w-auto px-16 py-6 border border-brand-teal/40 text-brand-teal font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-brand-teal/10 transition-all">
              (918) 520-3823
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/20 font-mono text-[9px] uppercase tracking-widest">
            <Link href="/compare/lvt-alternative" className="hover:text-brand-teal transition-colors">[ Z1 vs LVT Comparison ]</Link>
            <Link href="/hardware-deep-dive" className="hover:text-brand-teal transition-colors">[ Hardware Deep-Dive ]</Link>
            <Link href="/rent-security-trailer" className="hover:text-brand-teal transition-colors">[ Rental Options ]</Link>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ SCHEMA — JSON-LD ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
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
            "headline": "Construction Site Security Trailer: Comprehensive Protection for Your Job Site",
            "description": "Protect your construction site with mobile security trailers. Reduce theft by 87% with autonomous surveillance, night vision & real-time alerts.",
            "author": { "@type": "Organization", "name": "Z1 Trailers", "url": "https://z1trailers.com" },
            "publisher": { "@type": "Organization", "name": "Z1 Trailers", "url": "https://z1trailers.com" },
            "datePublished": "2026-04-04",
            "dateModified": new Date().toISOString().split("T")[0]
          })
        }}
      />
    </main>
  );
}
