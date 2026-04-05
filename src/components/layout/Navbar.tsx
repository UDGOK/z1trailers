"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Settings, Maximize, FileText, ArrowRight, Video, Target, Camera, Database, Shield, Zap, Crosshair, ChevronDown, Menu, X, Activity, Sun, MapPin, CreditCard, Banknote } from "lucide-react";
import Image from "next/image";
import ConfiguratorTrigger from "@/components/configurator/ConfiguratorTrigger";
import { cn } from "@/lib/utils";

// --- Sub-component for Trillion-Dollar Products Dropdown ---
function ProductsDropdown() {
  const products = [
    { name: "Z1 Scout", desc: "ENTRY // 5 DAY BATTERY", icon: Crosshair, href: "/security-trailers/z1-scout", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" },
    { name: "Z1 Guardian", desc: "MID // 10 DAY BATTERY", icon: Sun, href: "/security-trailers/z1-guardian", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" },
    { name: "Z1 Apex", desc: "ADV // THERMAL + LPR", icon: Shield, href: "/security-trailers/z1-apex", img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=600" },
    { name: "Z1 Command", desc: "ELITE // STARLINK", icon: MapPin, href: "/security-trailers/z1-command", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" },
  ];

  const sublinks = [
    { label: "Overview", path: "" },
    { label: "Hardware", path: "#hardware" },
    { label: "Software", path: "#software" },
    { label: "A.I.", path: "#ai" },
    { label: "Integrations", path: "#integrations" },
  ];

  return (
    <div className="p-8 grid grid-cols-2 gap-6 w-[850px] bg-brand-navy backdrop-blur-3xl border border-brand-teal/30 shadow-[0_30px_60px_-15px_rgba(27,154,170,0.15)] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      {products.map((item) => (
        <div key={item.name} className="group relative flex flex-col p-8 border border-white/5 bg-black/20 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-teal/10 min-h-[220px]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply" />
            <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out grayscale-[50%]" />
            <motion.div 
               className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-teal/20 to-transparent h-full w-full z-20 opacity-0 group-hover:opacity-100 pointer-events-none"
               animate={{ y: ["-100%", "100%"] }}
               transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </div>
          <div className="relative z-10 flex items-start justify-between transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
            <div className="flex items-center space-x-4">
               <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-white/5 border border-brand-teal/30 text-brand-teal group-hover:bg-transparent group-hover:border-brand-teal group-hover:text-brand-teal transition-all duration-500 shadow-sm pointer-events-none">
                 <item.icon className="w-5 h-5" strokeWidth={1.5} />
               </div>
               <div className="pointer-events-none">
                 <p className="font-display font-black uppercase tracking-[0.2em] text-white transition-colors duration-500 text-xl leading-none mb-2">{item.name}</p>
                 <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 group-hover:text-brand-teal transition-colors duration-500 font-bold">{item.desc}</p>
               </div>
            </div>
            <Link href={item.href} className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-brand-teal group-hover:bg-brand-teal/20 transition-all duration-300 text-white/30 group-hover:text-brand-teal z-30">
               <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
            </Link>
          </div>
          <div className="relative z-20 mt-auto pt-6 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-[50ms]">
            {sublinks.map((sublink, idx) => (
               <Link key={sublink.label} href={`${item.href}${sublink.path}`} className="px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[9px] text-white/70 uppercase tracking-widest hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-all duration-300 relative overflow-hidden group/sublink z-30" style={{ transitionDelay: `${idx * 40}ms` }}>
                 <span className="relative z-10">{sublink.label}</span>
               </Link>
            ))}
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-teal opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 m-3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-teal opacity-0 group-hover:opacity-100 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out z-10 m-3 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}

// --- Sub-component for Trillion-Dollar Industries Dropdown ---
function IndustriesDropdown() {
  const industries = [
    { name: "Construction Sites", href: "/industries/construction-sites", img: "/images/industries/construction.png" },
    { name: "Parking Management", href: "/industries/parking-lots", img: "/images/industries/parking.png" },
    { name: "Event Security", href: "/industries/events", img: "/images/industries/events.png" },
    { name: "Oil & Gas Logistics", href: "/industries/oil-gas", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600" },
    { name: "Law Enforcement", href: "/industries/law-enforcement", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" },
    { name: "Retail & ORC", href: "/industries/parking-lots", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="w-[800px] bg-brand-navy backdrop-blur-3xl border border-brand-teal/30 shadow-[0_30px_60px_-15px_rgba(27,154,170,0.15)] flex relative overflow-hidden h-[400px]">
      <div className="w-1/2 p-8 flex flex-col justify-between relative z-10 bg-brand-navy/95 border-r border-white/5">
        <div className="space-y-1 relative">
          {industries.map((item, idx) => (
            <Link key={item.name} href={item.href} onMouseEnter={() => setHoveredIndex(idx)} className="group flex items-center justify-between py-3 px-4 border-l-2 border-transparent hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-300">
              <span className={cn("font-display uppercase tracking-[0.15em] text-sm font-black transition-colors duration-300", hoveredIndex === idx ? "text-brand-teal" : "text-white")}>{item.name}</span>
              <ArrowRight className={cn("w-4 h-4 transition-all duration-300", hoveredIndex === idx ? "text-brand-teal opacity-100 translate-x-1" : "text-white/30 opacity-0 -translate-x-2")} />
            </Link>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-white/10">
          <Link href="/industries" className="font-mono text-xs text-white uppercase tracking-widest hover:text-brand-teal transition-colors flex items-center group font-bold">
            [ EXPLORE ALL SECTORS ]
          </Link>
        </div>
      </div>
      <div className="w-1/2 relative bg-brand-navy overflow-hidden p-2">
         <div className="absolute inset-0 bg-brand-navy/20 z-10 mix-blend-multiply" />
         <AnimatePresence mode="wait">
           <motion.div key={hoveredIndex} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="absolute inset-2">
             <img src={industries[hoveredIndex].img} alt={industries[hoveredIndex].name} className="w-full h-full object-cover grayscale-[20%] contrast-125" />
             <div className="absolute inset-0 border border-white/20 z-20 pointer-events-none" />
             <div className="absolute top-4 left-4 z-20">
                <span className="bg-brand-navy/80 text-brand-teal px-2 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur-md">SECURE_SECTOR // {industries[hoveredIndex].name}</span>
             </div>
             <div className="absolute bottom-4 right-4 z-20">
                <Crosshair className="w-6 h-6 text-brand-teal/80" strokeWidth={1} />
             </div>
           </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}

// --- Sub-component for Sophisticated Procurement Hub (OpEx vs. CapEx) ---
function ProcurementHub() {
  const [mode, setMode] = useState<"rent" | "buy">("rent");
  const isRent = mode === "rent";

  const tiers = [
    { 
      name: "Z1 Scout", 
      rent: "$999", 
      buy: "$16.5K", 
      period: "/ MO", 
      buyPeriod: "USD",
      desc: "ENTRY // 5 DAY",
      icon: Crosshair,
      hero: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Z1 Guardian", 
      rent: "$1,750", 
      buy: "$28.0K", 
      period: "/ MO", 
      buyPeriod: "USD",
      desc: "MID // 10 DAY",
      icon: Sun,
      highlight: true,
      hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Z1 Apex", 
      rent: "$2,800", 
      buy: "$42.0K", 
      period: "/ MO", 
      buyPeriod: "USD",
      desc: "ADV // THERMAL",
      icon: Shield,
      hero: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Z1 Command", 
      rent: "CUSTOM", 
      buy: "CUSTOM", 
      period: "QUOTE", 
      buyPeriod: "QUOTE",
      desc: "ELITE // STARLINK",
      icon: MapPin,
      hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
    },
  ];

  return (
    <div className="p-8 w-[980px] bg-brand-navy backdrop-blur-3xl border border-brand-teal/30 shadow-[0_30px_60px_-15px_rgba(27,154,170,0.15)] relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 blur-[100px] pointer-events-none" />
      
      {/* Header with Mode Switcher */}
      <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/10 pb-6">
        <div>
          <h3 className="font-display font-black uppercase text-2xl text-white tracking-[0.2em]">Procurement Hub</h3>
          <p className="font-mono text-[10px] text-brand-teal uppercase tracking-[0.3em] mt-1">Select Tier Allocation // OpEx vs CapEx</p>
        </div>

        {/* Sophisticated Mode Toggle with Scanning Pulse */}
        <div className="flex bg-black/40 p-1 border border-white/5 rounded-none relative group/toggle overflow-hidden">
          {/* Pulsing Scan-Line Effect to guide the user */}
          <motion.div 
            className="absolute inset-x-0 h-[1px] bg-brand-teal/40 z-20 pointer-events-none"
            animate={{ 
              top: ["0%", "100%", "0%"]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "linear" 
            }}
          />
          
          <button 
            onClick={() => setMode("rent")}
            className={cn(
              "relative z-10 px-6 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors duration-500",
              isRent ? "text-white" : "text-white/40 hover:text-white/60"
            )}
          >
            {isRent && (
               <motion.div 
                 layoutId="mode-bg"
                 className="absolute inset-0 bg-brand-teal/20 border border-brand-teal -z-10"
                 transition={{ type: "spring", stiffness: 400, damping: 30 }}
               />
            )}
            Monthly Rental
          </button>
          <button 
            onClick={() => setMode("buy")}
            className={cn(
              "relative z-10 px-6 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors duration-500",
              !isRent ? "text-white" : "text-white/40 hover:text-white/60"
            )}
          >
            {!isRent && (
               <motion.div 
                 layoutId="mode-bg"
                 className="absolute inset-0 bg-brand-teal/20 border border-brand-teal -z-10"
                 transition={{ type: "spring", stiffness: 400, damping: 30 }}
               />
            )}
            Direct Purchase
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 relative z-10">
        {tiers.map((tier) => (
          <Link 
            href={isRent ? "/rent-security-trailer" : "/buy-security-trailer"} 
            key={tier.name}
            className={cn(
              "group relative flex flex-col p-6 border bg-black/30 transition-all duration-500 overflow-hidden min-h-[220px]",
              tier.highlight ? "border-brand-teal/40 bg-brand-teal/5 shadow-[0_0_30px_-5px_rgba(27,154,170,0.15)]" : "border-white/5 hover:border-brand-teal/40 hover:bg-white/5"
            )}
          >
            {/* Visual Overlays */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
               <img src={tier.hero} alt={tier.name} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-teal/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 pointer-events-none" />

            <div className="relative z-10 mb-4 flex items-start justify-between">
               <div className="p-2 bg-white/5 border border-white/10 text-brand-teal/50 group-hover:text-brand-teal group-hover:border-brand-teal transition-all">
                  <tier.icon className="w-4 h-4" strokeWidth={1.5} />
               </div>
               {tier.highlight && (
                  <span className="font-mono text-[8px] bg-brand-teal text-white px-2 py-0.5 uppercase tracking-widest font-black">Most Popular</span>
               )}
            </div>

            <div className="relative z-10 mt-auto">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white/50 group-hover:text-brand-teal transition-colors font-bold">{tier.desc}</p>
              <p className="font-display font-black uppercase tracking-wider mt-1 text-base text-white">{tier.name}</p>
              
              <div className="mt-4 pt-4 border-t border-white/5 flex items-baseline overflow-visible h-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mode}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-baseline"
                  >
                    {isRent ? (
                      <>
                        <span className="font-display font-black text-3xl text-brand-teal tracking-tighter shrink-0">{tier.rent}</span>
                        <span className="font-mono text-[9px] ml-1.5 text-white/40 tracking-widest translate-y-[-2px]">{tier.period}</span>
                      </>
                    ) : (
                      <>
                        <span className="font-display font-black text-3xl text-white tracking-tighter shrink-0">{tier.buy}</span>
                        <span className="font-mono text-[9px] ml-1.5 text-white/40 tracking-widest translate-y-[-2px]">{tier.buyPeriod}</span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Tech bracket decoration */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-teal/30 m-2 group-hover:border-brand-teal transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-teal/30 m-2 group-hover:border-brand-teal transition-colors" />
          </Link>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
         <div className="flex space-x-6 text-white/30 font-mono text-[9px] uppercase tracking-widest font-bold">
            <span className="flex items-center gap-2"><CreditCard className="w-3 h-3 text-brand-teal" /> 100% Tax Deductible (Section 179)</span>
            <span className="flex items-center gap-2"><Banknote className="w-3 h-3 text-brand-teal" /> Flexible Terms</span>
         </div>
         <Link href="/get-a-quote" className="font-mono text-[10px] text-white hover:text-brand-teal flex items-center gap-2 transition-colors uppercase tracking-widest font-black">
            Full Specification Sheet <ArrowRight className="w-3 h-3" />
         </Link>
      </div>
    </div>
  );
}

const navItems = [
  {
    name: "Products",
    href: "/security-trailers",
    component: <ProductsDropdown />,
    mobileLinks: [
      { name: "Z1 Scout", href: "/security-trailers/z1-scout" },
      { name: "Z1 Guardian", href: "/security-trailers/z1-guardian" },
      { name: "Z1 Apex", href: "/security-trailers/z1-apex" },
      { name: "Z1 Command", href: "/security-trailers/z1-command" },
    ]
  },
  {
    name: "Industries",
    href: "/industries",
    component: <IndustriesDropdown />,
    mobileLinks: [
      { name: "Construction Sites", href: "/industries/construction-sites" },
      { name: "Parking Management", href: "/industries/parking-lots" },
      { name: "Event Security", href: "/industries/events" },
      { name: "Oil & Gas Logistics", href: "/industries/oil-gas" },
      { name: "Law Enforcement", href: "/industries/law-enforcement" },
    ]
  },
  {
    name: "Rent / Buy",
    href: "/rent-security-trailer",
    component: <ProcurementHub />,
    mobileLinks: [
      { name: "Rental Options", href: "/rent-security-trailer" },
      { name: "Purchase Options", href: "/buy-security-trailer" },
    ]
  },
  {
    name: "Deployments",
    href: "/locations",
    dropdown: (
      <div className="p-8 w-[380px] bg-brand-navy backdrop-blur-3xl border border-brand-teal/30 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-teal/10 blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-mono text-xs text-brand-teal mb-6 tracking-[0.25em] uppercase border-b border-brand-teal/20 pb-3 font-bold">Active Regions</p>
          <div className="space-y-4">
            <Link href="/locations/oklahoma" className="flex items-center justify-between group cursor-pointer border border-white/5 p-4 hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                 <MapPin className="w-5 h-5 text-brand-teal" strokeWidth={1.5} />
                 <span className="font-display text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-brand-teal transition-colors">Oklahoma HQ</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
            </Link>
             <Link href="/locations/texas" className="flex items-center justify-between group cursor-pointer border border-white/5 p-4 hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-300">
              <div className="flex items-center space-x-4">
                 <MapPin className="w-5 h-5 text-brand-teal" strokeWidth={1.5} />
                 <span className="font-display text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-brand-teal transition-colors">Texas Division</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
          <Link href="/locations" className="mt-8 block font-mono text-[11px] uppercase tracking-widest text-white/40 hover:text-brand-teal transition-colors text-right font-bold w-full">
            [ VIEW FULL MAP ]
          </Link>
        </div>
      </div>
    ),
    mobileLinks: [
      { name: "Oklahoma HQ", href: "/locations/oklahoma" },
      { name: "Texas Division", href: "/locations/texas" },
    ]
  },
  {
    name: "Intel",
    href: "/blog",
  },
];

const MobileAccordionItem = ({ item, closeMenu }: { item: any, closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (!item.mobileLinks) {
    return (
      <Link 
        href={item.href} 
        onClick={closeMenu}
        className="font-display font-black text-2xl uppercase tracking-widest text-white py-4 block border-b border-white/5"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/5 py-2">
      <div 
        className="flex justify-between items-center w-full py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Link href={item.href} onClick={closeMenu} className="font-display font-black text-2xl uppercase tracking-widest text-white flex-1">{item.name}</Link>
        <button className="w-12 h-12 flex items-center justify-end text-brand-teal">
          <ChevronDown className={cn("w-6 h-6 transition-transform duration-300", isOpen && "rotate-180")} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div className="py-4 pl-4 border-l-2 border-brand-teal/30 space-y-4">
               {item.mobileLinks.map((link: any) => (
                 <Link 
                   key={link.name} 
                   href={link.href} 
                   onClick={closeMenu}
                   className="text-white/60 font-mono text-[11px] uppercase tracking-[0.2em] block mb-4 hover:text-brand-teal transition-colors"
                 >
                   [ {link.name} ]
                 </Link>
               ))}
               <Link 
                 href={item.href} 
                 onClick={closeMenu}
                 className="text-brand-teal font-mono text-[11px] uppercase tracking-[0.2em] font-bold block pt-2 flex items-center"
               >
                 VIEW ALL {item.name} <ArrowRight className="w-3 h-3 ml-2" />
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] pointer-events-none">
      
      {/* Top Banner Menu Area */}
      <div className="pointer-events-auto bg-[#05080c] w-full py-2 border-b border-white/5 flex justify-center items-center relative overflow-hidden">
         <div 
           className="absolute inset-0 z-0 opacity-20"
           style={{ backgroundImage: 'radial-gradient(#1b9aaa 1px, transparent 1px)', backgroundSize: '12px 12px' }}
         />
         <div className="relative z-10">
           <ConfiguratorTrigger className="text-white hover:text-brand-teal text-[10px] md:text-[11px] uppercase font-mono tracking-[0.2em] font-black transition-colors animate-pulse [text-shadow:0_0_10px_rgba(27,154,170,0.5)]">
              [ Calculate Specifications & Build Custom Trailer ]
           </ConfiguratorTrigger>
         </div>
      </div>

      <div className="pointer-events-auto h-20 lg:h-24 w-full bg-white/95 backdrop-blur-xl border-b border-brand-mist/80 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 shadow-sm relative z-50">
        
        <Link href="/" className="flex items-center space-x-3 lg:space-x-4 group shrink-0">
          <img src="/Logo.png" alt="Z1 Trailers" className="h-10 lg:h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-display font-black text-xl lg:text-2xl text-brand-navy uppercase tracking-[0.25em] leading-none group-hover:text-brand-teal transition-colors">
              Trailers
            </span>
            <span className="hidden sm:block font-mono text-[9px] lg:text-[10px] text-brand-steel tracking-[0.4em] font-bold mt-1 lg:mt-1.5">
              SURVEILLANCE STRATEGY
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center h-full" onMouseLeave={() => setActiveDropdown(null)}>
          {navItems.map((item) => (
            <div key={item.name} className="relative h-full flex items-center" onMouseEnter={() => setActiveDropdown(item.name)}>
              <Link
                href={item.href}
                className={cn(
                  "relative z-10 px-8 h-full flex items-center font-display uppercase tracking-[0.2em] text-sm font-black transition-all duration-300 border-x border-transparent hover:bg-brand-mist/30",
                  activeDropdown === item.name ? "text-brand-teal border-brand-mist/50 bg-brand-mist/30" : "text-brand-navy"
                )}
              >
                {item.name}
                {(item.dropdown || item.component) && (
                  <ChevronDown className={cn("ml-3 w-4 h-4 transition-transform duration-300", activeDropdown === item.name && "rotate-180")} strokeWidth={2.5} />
                )}

                {activeDropdown === item.name && (
                  <motion.div
                    layoutId="nav-bottom-border"
                    className="absolute bottom-0 inset-x-0 h-[3px] bg-brand-teal"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>

              <AnimatePresence>
                {activeDropdown === item.name && (item.dropdown || item.component) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-full left-0 pointer-events-auto origin-top-left"
                  >
                    {item.component || item.dropdown}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Actions Container */}
        <div className="flex items-center space-x-2 md:space-x-4">

          <Link 
            href="/get-a-quote" 
            className="hidden lg:flex relative group overflow-hidden bg-brand-gold h-14 px-10 items-center justify-center pointer-events-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 w-0 bg-brand-navy transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative text-sm font-display font-black text-white uppercase tracking-[0.25em]">Deploy Now</span>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-white/30 z-10 block" />
          </Link>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center bg-brand-navy text-white pointer-events-auto relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-teal/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            {isMobileMenuOpen ? <X className="w-6 h-6 relative z-10" /> : <Menu className="w-6 h-6 relative z-10" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-navy/95 backdrop-blur-2xl pointer-events-auto lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[100px] pointer-events-none" />

            <div className="flex flex-col flex-1 relative z-10 mt-4">
               {navItems.map((item) => (
                 <MobileAccordionItem 
                   key={item.name} 
                   item={item} 
                   closeMenu={() => setIsMobileMenuOpen(false)} 
                 />
               ))}
            </div>

            <div className="mt-12 relative z-10">
               <Link 
                 href="/get-a-quote" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="w-full relative group overflow-hidden bg-brand-gold h-16 flex items-center justify-center transition-transform active:scale-[0.98]"
               >
                 <div className="absolute inset-0 w-0 bg-brand-navy transition-all duration-500 ease-out group-hover:w-full" />
                 <span className="relative text-lg font-display font-black text-white uppercase tracking-[0.25em]">Deploy Instantly</span>
                 <ArrowRight className="w-5 h-5 ml-3 relative z-10 text-white" />
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
