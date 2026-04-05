"use client";

import { useState } from "react";
import TrailerConfigurator from "./TrailerConfigurator";
import { Settings } from "lucide-react";

export default function ConfiguratorTrigger({ modelName }: { modelName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  // Map product name to configurator exact string if necessary
  const normalizedModel = (modelName.includes("Scout") ? "Z1 Scout" : 
                           modelName.includes("Guardian") ? "Z1 Guardian" : 
                           "Z1 Apex") as "Z1 Scout" | "Z1 Guardian" | "Z1 Apex";

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex-1 md:flex-none px-8 py-4 bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-display font-black text-xs uppercase tracking-[0.2em] transition-colors text-center inline-flex justify-center items-center group"
      >
        <Settings className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform duration-500" />
        Configure Build
      </button>

      <TrailerConfigurator 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        initialModel={normalizedModel} 
      />
    </>
  );
}
