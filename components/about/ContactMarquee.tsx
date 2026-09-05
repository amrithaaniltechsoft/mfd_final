"use client";

import React from "react";
import SvgDice from "@/components/global/SvgDice";

const WaveBackgroundPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.05] overflow-hidden"
    viewBox="0 0 600 300"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 0 180 C 120 260, 280 140, 400 220 C 480 270, 540 200, 600 230 L 600 300 L 0 300 Z"
      fill="currentColor"
    />
    <path
      d="M 0 120 C 160 210, 320 90, 450 180 C 520 230, 560 170, 600 190"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="6 6"
    />
  </svg>
);

export default function ContactMarquee() {
  const marqueeItems = [
    { text: "MASTER FORM DIES MANUFACTURING CO. PVT LTD", highlight: true },
    { text: "HIGH-PRECISION TOOLING & DIE MOULD MANUFACTURING", highlight: false },
    { text: "ERNAKULAM • KERALA • INDIA", highlight: true },
    { text: "CUSTOM DIE MAKING & COMPONENT FABRICATION", highlight: false },
    { text: "EXPERT TOOL DESIGN & INDUSTRIAL PRECISION", highlight: true },
    { text: "STRICT QUALITY ASSURANCE & TIGHT TOLERANCES", highlight: false },
  ];

  return (
    <section className="w-full bg-white text-black border-t border-b border-zinc-300 py-10 sm:py-14 relative overflow-hidden select-none">
      <WaveBackgroundPattern />

      {/* Left and Right Smooth Vignette Fade Overlay */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      {/* Single Continuous Scrolling Band */}
      <div className="w-full overflow-hidden relative z-10 py-3 bg-[#f8fafc] border-y border-zinc-200/80">
        <div className="flex w-max animate-marquee items-center space-x-8 sm:space-x-12 hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-8 whitespace-nowrap">
              <SvgDice size="md" interactive={false} />
              
              {item.highlight ? (
                <span className="px-5 py-2 bg-black text-white rounded-full text-base sm:text-lg md:text-xl font-extrabold tracking-wider uppercase">
                  {item.text}
                </span>
              ) : (
                <span className="text-xl sm:text-2xl md:text-3xl font-black tracking-wider uppercase text-zinc-900 font-sans">
                  {item.text}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
