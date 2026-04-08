"use client";

import { Download } from "lucide-react";

export default function PrintButton() {
  return (
    <button 
      onClick={() => { if(typeof window !== 'undefined') window.print(); }}
      className="bg-brand-teal hover:bg-white text-[#0a1628] px-6 py-2 flex items-center gap-2 font-black uppercase text-xs tracking-widest transition-colors"
    >
      <Download className="w-4 h-4" />
      Save to PDF / Print
    </button>
  );
}
