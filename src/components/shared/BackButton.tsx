"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="flex items-center gap-2 text-slate-400 hover:text-brand-teal transition-colors font-mono text-[10px] sm:text-xs uppercase tracking-widest group"
    >
      <ArrowLeft className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:-translate-x-1 transition-all" />
      Return
    </button>
  );
}
