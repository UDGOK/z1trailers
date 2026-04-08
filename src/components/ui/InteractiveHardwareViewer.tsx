"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HardwareViewerProps {
  frames: string[];
}

export default function InteractiveHardwareViewer({ frames }: HardwareViewerProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startFrame, setStartFrame] = useState(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartFrame(currentFrame);
    // @ts-ignore - set pointer capture for smooth out of bounds dragging
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    const diff = e.clientX - startX;
    
    // Constant rotation speed: 1 frame every 40 pixels dragged
    // Dragging left (negative diff) should rotate model right (positive frame index)
    const stepSize = 40; 
    const frameDiff = Math.floor(diff / stepSize);
    
    // Modulo wrapping for infinite 360 loop
    let nextFrame = startFrame - frameDiff;
    nextFrame = ((nextFrame % frames.length) + frames.length) % frames.length;
    
    setCurrentFrame(nextFrame);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    // @ts-ignore
    e.target.releasePointerCapture(e.pointerId);
  };

  return (
    <div 
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center group select-none touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
    >
      {/* Background Neon Grid & Pedeastal */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pb-20 pointer-events-none">
         <div className="w-[80%] md:w-[60%] h-24 bg-brand-teal/20 blur-[100px] rounded-[100%]" />
         <div className="absolute bottom-16 md:bottom-10 w-[70%] md:w-[50%] h-0.5 bg-brand-teal/50 shadow-[0_0_40px_10px_rgba(27,154,170,0.5)] rounded-[100%] transition-opacity duration-1000 opacity-50 group-hover:opacity-100" />
      </div>

      {frames.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hardware View ${index + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-contain transition-all duration-150 ease-out pointer-events-none drop-shadow-[0_40px_80px_rgba(27,154,170,0.15)] z-10 ${
            index === currentFrame ? "opacity-100 scale-100" : "opacity-0 scale-95" 
          }`}
          priority={index === 0}
        />
      ))}

      {/* Scrubber Hint UI */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between w-[200px] bg-black/60 backdrop-blur-md border border-white/10 px-6 py-3 shadow-[0_0_30px_rgba(0,0,0,0.8)] pointer-events-none rounded-full transition-opacity duration-500 opacity-80 group-hover:opacity-20">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_#1B9AAA] animate-pulse" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white font-bold ml-2">Drag to Rotate</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shadow-[0_0_8px_#1B9AAA] animate-pulse" />
      </div>
    </div>
  );
}
