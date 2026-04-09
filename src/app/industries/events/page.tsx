"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ShieldAlert, TrendingUp, BarChart3, AlertTriangle, Zap, Target,
  Activity, Crosshair, ChevronDown, ArrowRight, Clock, DollarSign,
  Camera, Battery, Volume2, Radio, CheckCircle2, Lock, Users,
  FileText, MapPin, Eye, Cpu, Sun, Music, Ticket, Megaphone, Thermometer
} from "lucide-react";
import { cn } from "@/lib/utils";

// ── THREAT INTELLIGENCE ────────────────────────────────────────────────────
const THREAT_STATS = [
  { title: "Attendee Security Expectation", value: "84%", desc: "Percentage of event attendees who consider visible security measures a critical factor in their decision to attend.", icon: Users, color: "teal", source: "Event Safety Alliance" },
  { title: "Avg. Lawsuit Settlement", value: "$1.1M", desc: "Average event-related lawsuit settlement ($350K–$1.8M range) depending on injury severity and negligence findings.", icon: AlertTriangle, color: "red", source: "Insurance Industry Data" },
  { title: "Insurance Premium Savings", value: "12–20%", desc: "Rate reductions from Lloyds of London and specialty event insurers for certified surveillance coverage.", icon: TrendingUp, color: "teal", source: "Lloyds / Specialty Carriers" },
  { title: "Staffing Cost Reduction", value: "30–40%", desc: "Security personnel savings when combining mobile camera force multiplication with strategically positioned guards.", icon: BarChart3, color: "teal", source: "Operational Analysis" },
];

const DEPLOYMENT_STEPS = [
  { num: "01", title: "Site Survey & Plan", desc: "Pre-event site assessment maps gates, stages, vendor rows, and perimeter. Coverage plan satisfies all stakeholder requirements.", time: "PRE-EVENT", icon: MapPin },
  { num: "02", title: "Rapid Deployment", desc: "Trailers delivered 24–48 hours before. Pneumatic masts and quick-connect systems achieve full installation in 10–15 minutes per unit.", time: "10 MIN/UNIT", icon: Zap },
  { num: "03", title: "Integration & Test", desc: "Live feeds connect to command center displays, mobile apps, and law enforcement systems. AI analytics calibrate to venue-specific crowd patterns.", time: "30 MIN", icon: Radio },
  { num: "04", title: "Go Live & Monitor", desc: "24/7 autonomous operation through multi-day events. Solar + LiFePO4 battery ensures zero downtime regardless of venue power availability.", time: "CONTINUOUS", icon: Eye },
];

const CASE_STUDIES = [
  {
    title: "Music Festival — Austin, TX",
    result: "Lawsuit Dismissed Via Video Evidence",
    before: "35,000 daily attendees, 3-day festival",
    after: "Perimeter breach detected at 10:45 PM via thermal — intercepted in real-time",
    detail: "Eight Z1 trailers covered entry gates, main stages, camping areas, and perimeter. Video documentation supported defense against a subsequent injury claim — case dismissed based on evidence showing proper security response. Organizer calculated avoiding one lawsuit settlement justified the entire annual security trailer budget.",
    savings: "$1.2M+",
    icon: Music,
  },
  {
    title: "County Fair — 40-Acre Fairground",
    result: "$23K Equipment Recovered Overnight",
    before: "Overnight equipment theft between daily sessions",
    after: "Suspect vehicles captured at 2:15 AM via LPR — arrests made same night",
    detail: "LPR captured vehicles entering restricted areas with driver descriptions. Swift police response recovered $23,000 in stolen electronics and sound equipment. Vendor participation increased 22% the following year, directly increasing revenue through booth rental fees.",
    savings: "$23K+",
    icon: Shield,
  },
  {
    title: "Marathon Event — 8-Mile Urban Course",
    result: "Insurance Coverage Maintained",
    before: "Participant cardiac arrest at mile marker 5",
    after: "Timestamped footage documented exact incident moment and volunteer response times",
    detail: "Security footage provided crucial medical documentation and demonstrated proper safety protocol adherence. Race director credited comprehensive surveillance with maintaining insurance coverage after insurer reviewed response procedures. System also captured the winning finish from multiple angles for sponsor promotional value.",
    savings: "Coverage Saved",
    icon: Activity,
  },
  {
    title: "Political Rally — 8,000 Attendees",
    result: "Counter-Protest De-escalated Via Audio",
    before: "Counter-protesters gathered at perimeter",
    after: "Two-way audio de-escalated confrontation before physical contact",
    detail: "Comprehensive video documentation satisfied Secret Service security requirements and provided local law enforcement with situational awareness throughout the event. Organizer noted future venue permits became significantly easier to obtain after demonstrating professional security capabilities.",
    savings: "Permit Secured",
    icon: Megaphone,
  },
];

const FEATURES = [
  { title: "Crowd Density Analytics", desc: "AI-powered people counting monitors zone concentrations in real-time. Automatic alerts when capacity exceeds safe thresholds defined in your event safety plan.", icon: Users },
  { title: "4K Extreme Low-Light Optics", desc: "Identification-quality facial details captured during evening concerts and nighttime festivals. 360° PTZ with 30x zoom covers entire crowd sections.", icon: Camera },
  { title: "Thermal Crowd Monitoring", desc: "Detects crowd crush conditions via elevated body temperatures. Identifies individuals in complete darkness during overnight security operations.", icon: Thermometer },
  { title: "Multi-Carrier Cellular Uplink", desc: "Multiple carrier SIMs ensure reliable video transmission even when networks become congested from tens of thousands of simultaneous mobile users.", icon: Radio },
  { title: "Two-Way Audio Command", desc: "Security commanders issue real-time instructions to field teams or make announcements to crowd sections — eliminating radio communication delays.", icon: Volume2 },
  { title: "Solar + LiFePO4 Autonomy", desc: "5–7 day battery reserve with solar recharge. Zero dependency on venue electrical systems that may be committed to event production needs.", icon: Battery },
];

const FAQS = [
  { q: "How many security trailers do we need for our event size?", a: "General guidelines suggest 1 trailer per 5–7 acres for perimeter coverage or 1 per 3,000–5,000 attendees for crowd-focused monitoring. Entry/exit points require dedicated coverage, with high-volume gates justifying 1–2 trailers each. Multi-day festivals should also cover overnight equipment storage and camping areas. Most music festivals deploy 4–12 trailers depending on size and complexity. We conduct free site assessments considering venue layout, historical incident data, and stakeholder requirements to develop your optimal coverage plan." },
  { q: "Can we rent security trailers for just a weekend or single-day event?", a: "Absolutely. We offer flexible daily, weekend, weekly, and monthly rates. Single-day events typically book from setup day through teardown (commonly 3-day minimum). Trailers are delivered 24–48 hours before for testing and staff training, with pickup 24 hours post-event. Multi-day discounts apply for longer events. Rush delivery options exist for emergency security needs, though advance booking 2–4 weeks before major events ensures peak-season availability." },
  { q: "What happens if weather damages the equipment during our outdoor event?", a: "Z1 trailers are engineered specifically for outdoor deployment with IP66/IP67 weatherproof ratings that withstand rain, snow, humidity, and temperature extremes without performance degradation. Rental agreements include equipment insurance covering weather damage — Z1 assumes repair/replacement costs for covered incidents. In severe weather, we proactively secure equipment before storms arrive. Event organizers maintain zero financial liability for weather-related damage under standard rental terms." },
  { q: "How do security personnel access live camera feeds during events?", a: "Multiple access methods provide operational flexibility: command center monitors display all feeds in grid or focused layouts with PTZ joystick control. Mobile apps allow supervisors to view live feeds on smartphones/tablets while roaming event grounds. Web dashboards enable remote monitoring by stakeholders not physically present. Customizable access credentials allow different permission levels for command staff, roving security, law enforcement, and event organizers. Two-way audio integrates with radio systems for unified communications." },
  { q: "Can the security footage be used for marketing and promotional purposes?", a: "Yes, with appropriate contractual terms and attendee notification. Many organizers capture crowd shots, performances, and attendee experiences for social media and sponsor reports. We establish clear usage rights in rental agreements. Post appropriate signage notifying attendees that surveillance is in use and footage may appear in materials. We also offer higher-resolution cinema camera add-ons specifically for promotional capture alongside security monitoring." },
];

// ── EVENT ROI CALCULATOR ───────────────────────────────────────────────────
function EventROICalculator() {
  const [attendees, setAttendees] = useState(10000);
  const [days, setDays] = useState(3);
  const trailersNeeded = Math.max(2, Math.ceil(attendees / 4000));
  const trailerCostPerDay = 85; // ~$600/wk / 7
  const totalTrailerCost = trailersNeeded * days * trailerCostPerDay;
  const guardsWithout = Math.ceil(attendees / 250);
  const guardsWith = Math.ceil(attendees / 400);
  const guardCostPerDay = 420; // $35/hr x 12hrs
  const guardSavings = (guardsWithout - guardsWith) * days * guardCostPerDay;
  const insuranceSavings = Math.round(attendees * days * 0.12); // simplified
  const totalROI = guardSavings + insuranceSavings - totalTrailerCost;

  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-teal m-3" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-teal m-3" />

      <div className="flex items-center gap-3 mb-8">
        <DollarSign className="w-5 h-5 text-brand-teal" />
        <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-black">Event ROI Calculator // Live Projection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">Expected Attendees</label>
          <input
            type="range" min={500} max={75000} step={500} value={attendees}
            onChange={(e) => setAttendees(Number(e.target.value))}
            className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-widest">
            <span>500</span>
            <span className="text-brand-teal font-black text-sm">{attendees.toLocaleString()} ATTENDEES</span>
            <span>75K</span>
          </div>
        </div>
        <div>
          <label className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-4">Event Duration (Days)</label>
          <input
            type="range" min={1} max={14} value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between mt-2 font-mono text-[9px] text-white/30 uppercase tracking-widest">
            <span>1 DAY</span>
            <span className="text-brand-teal font-black text-sm">{days} {days === 1 ? "DAY" : "DAYS"}</span>
            <span>14 DAYS</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-brand-teal/5 border border-brand-teal/20 p-5">
          <p className="font-mono text-[8px] text-brand-teal/60 uppercase tracking-widest mb-2">Trailers Needed</p>
          <p className="font-display font-black text-2xl text-brand-teal tracking-tighter">{trailersNeeded}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">UNITS</p>
        </div>
        <div className="bg-brand-teal/5 border border-brand-teal/20 p-5">
          <p className="font-mono text-[8px] text-brand-teal/60 uppercase tracking-widest mb-2">Trailer Cost</p>
          <p className="font-display font-black text-2xl text-brand-teal tracking-tighter">${totalTrailerCost.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">{days}-DAY RENTAL</p>
        </div>
        <div className="bg-green-500/5 border border-green-500/20 p-5">
          <p className="font-mono text-[8px] text-green-400/60 uppercase tracking-widest mb-2">Guard Labor Saved</p>
          <p className="font-display font-black text-2xl text-green-400 tracking-tighter">${guardSavings.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">FORCE MULTIPLICATION</p>
        </div>
        <div className={cn("p-5 border", totalROI > 0 ? "bg-brand-gold/5 border-brand-gold/20" : "bg-red-500/5 border-red-500/20")}>
          <p className={cn("font-mono text-[8px] uppercase tracking-widest mb-2", totalROI > 0 ? "text-brand-gold/60" : "text-red-400/60")}>Net ROI</p>
          <p className={cn("font-display font-black text-2xl tracking-tighter", totalROI > 0 ? "text-brand-gold" : "text-red-400")}>${totalROI.toLocaleString()}</p>
          <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest mt-1">PROJECTED SAVINGS</p>
        </div>
      </div>
      <p className="mt-6 font-mono text-[8px] text-white/20 uppercase tracking-widest text-center">
        * Excludes liability protection value ($350K–$1.8M avg. lawsuit avoidance) and insurance premium reductions
      </p>
    </div>
  );
}

// ── FAQ ACCORDION ──────────────────────────────────────────────────────────
function EventFAQ() {
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
export default function EventsPage() {
  return (
    <main className="bg-brand-navy min-h-screen">

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-auto min-h-[85vh] flex items-end justify-start overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/70 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent z-10" />
          <img
            src="/images/industries/events-day.jpg"
            alt="Z1 Security Trailer Event Surveillance"
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
                <div className="px-3 py-1 bg-brand-teal text-brand-navy font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                  <Activity className="w-3 h-3 animate-pulse" /> THREAT_LEVEL // ELEVATED
                </div>
                <div className="font-mono text-[10px] text-brand-steel tracking-widest uppercase hidden md:block">SECTOR: EVENT_SECURITY</div>
              </div>
              <h1 className="font-display font-black text-4xl md:text-7xl lg:text-8xl text-white uppercase tracking-tighter leading-[0.85] mb-8">
                Event Security<br /><span className="text-white/20">Trailer Rental.</span>
              </h1>
              <p className="max-w-xl font-mono text-xs md:text-sm tracking-widest leading-loose text-white/70 uppercase">
                Turnkey mobile surveillance for festivals, concerts, fairs, and mass gatherings. Crowd analytics, 4K night vision, and two-way audio — deployed in under 15 minutes with zero infrastructure.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="px-8 py-4 bg-brand-teal text-brand-navy font-display font-black text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-white hover:scale-105">
                  Get Event Quote
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
                <Crosshair className="w-4 h-4" /> Event_Telemetry // LIVE
              </p>
              <div className="space-y-6">
                {[
                  { label: "DEPLOYMENT_WINDOW", value: "15MIN" },
                  { label: "CROWD_ANALYTICS", value: "ACTIVE" },
                  { label: "EVENTS_PROTECTED", value: "2,800+" },
                ].map((stat, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{stat.label}</span>
                      <span className="font-display font-black text-lg text-white group-hover:text-brand-teal transition-colors">{stat.value}</span>
                    </div>
                    <div className="h-[2px] bg-white/5 relative overflow-hidden">
                      <motion.div className="absolute inset-y-0 left-0 bg-brand-teal" initial={{ width: 0 }} animate={{ width: `${55 + idx * 20}%` }} transition={{ duration: 2, delay: idx * 0.2 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-[8px] text-brand-steel tracking-widest uppercase">
                  <Zap className="w-3 h-3 text-brand-gold animate-pulse" /> Power: Solar + LiFePO4
                </div>
                <div className="font-mono text-[8px] text-brand-teal tracking-widest uppercase font-black">[ CROWD_SCAN ]</div>
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

      {/* ━━━ THREAT INTELLIGENCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Evidence_of_Overmatch // Event Intelligence</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Event <span className="text-white/20">Security</span> Analysis.
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
                  <div className={cn("p-3 bg-white/5 border border-white/10 text-white/50 transition-all", stat.color === "red" ? "group-hover:text-red-400 group-hover:border-red-400/30" : "group-hover:text-brand-teal group-hover:border-brand-teal/30")}>
                    <stat.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <BarChart3 className={cn("w-10 h-10 text-white/5 transition-all transform group-hover:scale-110", stat.color === "red" ? "group-hover:text-red-400/20" : "group-hover:text-brand-teal/20")} strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] text-brand-steel uppercase tracking-widest font-black">{stat.title}</p>
                  <p className={cn("font-display font-black text-4xl text-white tracking-tighter transition-colors", stat.color === "red" ? "group-hover:text-red-400" : "group-hover:text-brand-teal")}>{stat.value}</p>
                </div>
                <p className="mt-6 font-mono text-[9px] text-white/40 leading-relaxed uppercase tracking-widest">{stat.desc}</p>
                <p className="mt-4 font-mono text-[8px] text-brand-teal/40 uppercase tracking-widest">Source: {stat.source}</p>
                <div className={cn("absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500", stat.color === "red" ? "bg-red-500" : "bg-brand-teal")} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CHALLENGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-ice text-brand-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Threat_Analysis // Event Dynamics</p>
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-8">
                Why Events Demand<br /><span className="text-brand-teal">Specialized Security.</span>
              </h2>
              <div className="space-y-6 font-mono text-xs md:text-sm text-brand-navy/70 leading-loose tracking-wider">
                <p>Events present multifaceted security dynamics unlike any permanent facility. The temporary nature of venues means <strong className="text-brand-navy">zero existing security infrastructure</strong> at parks, fairgrounds, or open fields — requiring systems deployable and removable within compressed timeframes.</p>
                <p>Crowd density at stages, vendor areas, and gates creates vulnerabilities where incidents escalate rapidly. Alcohol service correlates with increased altercations, medical emergencies, and disorderly conduct requiring immediate response.</p>
                <p>Multi-day events face overnight challenges protecting equipment, merchandise, and venue infrastructure. The diverse stakeholder ecosystem — venue owners, promoters, vendors, performers, and local authorities — requires documented measures satisfying each party's risk tolerance and contractual obligations.</p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { title: "Zero-Infrastructure Venues", desc: "Parks, fields, and fairgrounds lack power, internet, and permanent structures — yet maximum security is required from moment one.", icon: Zap },
                { title: "Dynamic Crowd Patterns", desc: "Shifting concentrations at stages, food courts, and exits prevent static cameras from maintaining effective coverage throughout the event.", icon: Users },
                { title: "Multi-Night Asset Exposure", desc: "Valuable staging, sound equipment, and vendor merchandise sit unprotected overnight between daily sessions — prime theft windows.", icon: Clock },
                { title: "Compressed Post-Event Investigation", desc: "Incident footage must be immediately accessible — not locked in proprietary systems requiring specialized technical knowledge to retrieve.", icon: FileText },
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
            <img src="/images/industries/events-day.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Daytime Event Setup" />
            
            {/* 2. The Nighttime Fading Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[1s] ease-in z-10">
              <img src="/images/industries/events-night.jpg" className="w-full h-full object-cover scale-105" alt="Nighttime Event Setup" />
              
              {/* Optional Physical Hardware Glow Enhancements */}
              <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-40 h-40 bg-white blur-[120px] opacity-0 group-hover:opacity-40 transition-opacity duration-[2s] pointer-events-none" />
              
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
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Operational_Architecture // Event Protocol</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Rapid Event <span className="text-white/20">Deployment.</span>
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
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Hardware_Payload // Event Specialization</p>
            <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-4">
              Event-Grade <span className="text-brand-teal">Technology.</span>
            </h2>
            <p className="font-mono text-xs text-brand-navy/50 uppercase tracking-widest max-w-2xl">
              Crowd analytics, thermal monitoring, and multi-carrier uplinks engineered for the unique demands of mass gatherings — from 500-person galas to 75,000-attendee festivals.
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

      {/* ━━━ ROI CALCULATOR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Financial_Intelligence // Event Economics</p>
            <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter leading-[0.9]">
              Event ROI <span className="text-white/20">Projection.</span>
            </h2>
          </div>
          <EventROICalculator />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "Attendee Safety Perception", value: "73%", detail: "Notice visible security measures. 58% report increased comfort influencing return attendance.", source: "Post-Event Surveys" },
              { metric: "Ticket Price Premium", value: "+8–15%", detail: "Willingness to pay increase for events with documented, visible security measures.", source: "Consumer Research" },
              { metric: "Lawsuit Risk Reduction", value: "40–65%", detail: "Settlement reduction when documented surveillance demonstrates reasonable security measures.", source: "Insurance Analysis" },
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
              Event <span className="text-brand-teal">Case Files.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <p className="font-mono text-[8px] text-red-400 uppercase tracking-widest mb-1 font-bold">Context</p>
                      <p className="font-mono text-[10px] text-brand-navy/60 leading-relaxed">{cs.before}</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-100">
                      <p className="font-mono text-[8px] text-green-500 uppercase tracking-widest mb-1 font-bold">Outcome</p>
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

      {/* ━━━ COMPLIANCE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-brand-navy border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Compliance_Matrix // Event Regulations</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-none">
              Regulatory <span className="text-white/20">Compliance.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Municipal Special Event Permits", code: "NYC / LA / CHI", desc: "Major cities mandate security plans detailing surveillance coverage, emergency response protocols, and law enforcement coordination as permit conditions.", icon: FileText },
              { title: "DHS SAFETY Act", code: "SAFETY ACT", desc: "Mass gathering guidelines recommend multi-layer security including surveillance, access control, and incident documentation. Compliance enables liability protections.", icon: Shield },
              { title: "Fire Marshal Crowd Capacity", code: "NFPA / IFC", desc: "Fire marshals require video monitoring capable of detecting real-time overcrowding conditions with automatic alerts integrated into emergency action plans.", icon: AlertTriangle },
              { title: "Privacy & Data Retention", code: "GDPR / CCPA", desc: "Z1 systems incorporate 30–90 day retention policies, role-based access controls, AES-256 encrypted transmission, and full audit trail functionality for all footage access.", icon: Lock },
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
            <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] font-bold mb-4">Sector_Intelligence // Event Protocols</p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-white uppercase tracking-tighter leading-[0.9]">
              Frequently Asked <span className="text-white/20">Questions.</span>
            </h2>
          </div>
          <EventFAQ />
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
          <Music className="w-16 h-16 text-brand-teal mx-auto mb-8 animate-pulse" strokeWidth={1} />
          <h2 className="font-display font-black text-3xl md:text-6xl text-white uppercase tracking-tighter mb-8 leading-none">
            Secure Your <span className="text-white/20">Next Event.</span>
          </h2>
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4 max-w-2xl mx-auto leading-loose">
            Z1 Trailers has protected over 2,800 events nationwide — from intimate 500-person gatherings to 75,000-attendee festivals — with proven incident response and risk mitigation results.
          </p>
          <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-12">
            [ DAILY · WEEKEND · WEEKLY · MONTHLY RENTAL OPTIONS // 24/7 TACTICAL SUPPORT ]
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/get-a-quote" className="w-full md:w-auto px-16 py-6 bg-brand-teal text-brand-navy font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-white transition-all transform hover:-translate-y-1">
              Get Event Security Quote
            </Link>
            <a href="tel:9185203823" className="w-full md:w-auto px-16 py-6 border border-brand-teal/40 text-brand-teal font-display font-black uppercase text-sm tracking-[0.3em] hover:bg-brand-teal/10 transition-all">
              (918) 520-3823
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/20 font-mono text-[9px] uppercase tracking-widest">
            <Link href="/industries/construction-sites" className="hover:text-brand-teal transition-colors">[ Construction Sites ]</Link>
            <Link href="/industries/parking-lots" className="hover:text-brand-teal transition-colors">[ Parking Management ]</Link>
            <Link href="/hardware-deep-dive" className="hover:text-brand-teal transition-colors">[ Hardware Deep-Dive ]</Link>
          </div>
        </div>
      </section>

      {/* ━━━ SCHEMA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
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
            "headline": "Event Security Trailer Rental: Professional-Grade Surveillance for Any Event",
            "description": "Rent mobile security trailers for events, festivals & concerts. Rapid deployment, crowd monitoring, live feeds & instant alerts.",
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
