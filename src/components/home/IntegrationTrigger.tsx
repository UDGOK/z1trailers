"use client";

import { useState } from "react";
import IntegrationRequestModal from "./IntegrationRequestModal";
import { Network } from "lucide-react";
import { ReactNode } from "react";

export default function IntegrationTrigger({ 
  className,
  children
}: { 
  className?: string;
  children?: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={(e) => { e.preventDefault(); setIsOpen(true); }}
        className={className || "flex-1 md:flex-none px-8 py-4 bg-transparent border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-[#0a1628] font-display font-black text-xs uppercase tracking-[0.2em] transition-colors text-center inline-flex justify-center items-center group"}
      >
        {children || (
          <>
            Request Integration
            <Network className="w-4 h-4 ml-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </>
        )}
      </button>

      <IntegrationRequestModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
