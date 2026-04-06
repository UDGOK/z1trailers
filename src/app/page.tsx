"use strict";

import Link from "next/link";
import { Shield, Zap, Clock } from "lucide-react";
import SocialProof from "@/components/home/SocialProof";
import ProductsPreview from "@/components/home/ProductsPreview";
import HowItWorks from "@/components/home/HowItWorks";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import AIDetectionsGrid from "@/components/shared/AIDetectionsGrid";
import AnimatedTelemetry from "@/components/home/AnimatedTelemetry";
import ConfiguratorTrigger from "@/components/configurator/ConfiguratorTrigger";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can a unit be deployed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tactical teams can deliver, position, and initialize a Z1 trailer on your site in under 15 minutes. It connects to our central AI network immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Do these require external power or internet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. All models are 100% autonomous. They run on vast solar arrays with high-capacity battery reserves (5 to 20+ days) and transmit data via 4G/5G or StarLink satellite."
        }
      },
      {
        "@type": "Question",
        "name": "Can I rent a trailer, or do I have to buy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both Capital Expenditure (CapEx) purchase plans and OpEx monthly rental agreements engineered to fit the operational cycles of your specific project."
        }
      },
      {
        "@type": "Question",
        "name": "Who monitors the cameras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our trailers use edge-AI computing to filter false alarms. When a legitimate threat occurs, it triggers our elite UL-listed monitoring partners to initiate real-time visual verification, active deterrence, and dispatch authorities if necessary."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative isolate overflow-hidden bg-brand-ice pt-32 pb-16 lg:pt-48 lg:pb-32 flex flex-col items-center">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,27,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,27,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none -z-10" />
        
        {/* Abstract glow */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-teal/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-[55%] flex flex-col items-start pr-8">
            <div className="inline-flex items-center space-x-3 mb-10 border border-brand-teal/30 bg-brand-teal/5 px-4 py-2">
              <span className="w-2 h-2 bg-brand-teal animate-pulse" />
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold text-brand-navy">Defense Grade Hardware System</span>
            </div>
            
            <h1 className="font-display font-black text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-brand-navy uppercase mb-8">
              Autonomy <br/>
              <span className="text-brand-teal">By Design.</span>
            </h1>
            
            <p className="font-mono text-sm tracking-widest leading-loose text-brand-steel uppercase max-w-xl mb-12 font-medium">
              We deploy solar-powered, AI-equipped surveillance trailers across the Mid-South in under 15 minutes. Pure tactical advantage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto">
              <Link
                href="/get-a-quote"
                className="relative group overflow-hidden bg-brand-navy h-16 px-12 flex items-center justify-center border border-transparent hover:border-brand-teal transition-colors"
              >
                <div className="absolute inset-0 w-0 bg-brand-teal transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative z-10 font-display font-black text-white uppercase tracking-[0.2em] text-sm">Deploy Hardware</span>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-white/20 z-10" />
              </Link>
              
              <ConfiguratorTrigger 
                 modelName="Scout"
                 className="font-mono text-[10px] font-bold leading-6 text-brand-teal uppercase tracking-widest flex items-center hover:text-brand-navy transition-colors px-4 animate-pulse bg-brand-teal/10 py-2 border border-brand-teal/30"
              >
                 [ Calculate Specifications ]
              </ConfiguratorTrigger>
            </div>
          </div>
          
          <div className="lg:w-[45%] w-full mt-24 lg:mt-0 relative perspective-1000">
             <AnimatedTelemetry />
          </div>
        </div>
      </div>
      
      <SocialProof />
      <ProductsPreview />
      <AIDetectionsGrid />
      <HowItWorks />
      <IndustriesGrid />
      <FAQ />
      <CTA />
    </>
  );
}
