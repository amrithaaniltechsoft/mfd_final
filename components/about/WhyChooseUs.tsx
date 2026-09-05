"use client";

import React, { useState } from "react";
import SvgDice from "@/components/global/SvgDice";
import { ShieldCheck, Zap, Users, MapPin, ArrowRight } from "lucide-react";

// Full-Width Organic Vector Wave Background Component (Dark Theme Version)
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#6B910C] opacity-[0.12] group-hover:opacity-25 transition-opacity duration-500 overflow-hidden"
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
    <path
      d="M 0 210 C 180 140, 350 250, 500 170 L 600 210"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

// Green Bottom Ambient Gradient Overlay (Dark Theme Version)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#6B910C]/15 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#6B910C]/20 transition-all duration-500" />
);

export default function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState(0);

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#A3E635]" />,
      title: "Uncompromised Quality & Engineering Precision",
      desc: "Every die and component undergoes thorough quality checks to ensure exact dimensional accuracy, tight tolerances, and long operational life.",
      tag: "Quality Control",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#A3E635]" />,
      title: "Technical Proficiency & Tooling Design",
      desc: "Skilled engineering practices aligned with standard industrial specifications, advanced precision techniques, and specialized mold design.",
      tag: "Technical Spec",
    },
    {
      icon: <Users className="w-8 h-8 text-[#A3E635]" />,
      title: "Client-Centric & Custom Manufacturing",
      desc: "Flexible production runs, competitive lead times, and tailored component solutions designed to seamlessly fit specific manufacturing workflows.",
      tag: "Client Focus",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#A3E635]" />,
      title: "Strategic Location in Ernakulam",
      desc: "Conveniently accessible facility near Ernakulam, Kerala, strategically supporting local and regional industrial requirements with reliable delivery.",
      tag: "Location",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#050505] text-white relative overflow-hidden border-b border-zinc-500">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Why Choose <span className="text-[#A3E635]">Master Form Dies?</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl mx-auto">
            Built on a legacy of precision craftsmanship, cutting-edge technology, and unyielding quality assurance.
          </p>
        </div>

        {/* Centered Stacked Cards Deck */}
        <div className="max-w-3xl mx-auto space-y-6 relative w-full">

          {/* Tabs Navigation Bar */}
          <div className="w-full p-1.5 bg-[#111111] rounded-xl border border-zinc-800/90 shadow-inner grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {whyChooseUs.map((item, idx) => {
              const isActive = activeCard === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  className={`relative w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-center transition-all duration-300 cursor-pointer focus:outline-none z-10 ${isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-100"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-[#6B910C] rounded-lg shadow-md shadow-[#6B910C]/35 border border-[#A3E635]/40 -z-10 transition-all duration-300" />
                  )}
                  <span className="truncate">{item.tag}</span>
                </button>
              );
            })}
          </div>

          {/* 3D Stacked Container Deck */}
          <div className="relative min-h-[420px] sm:min-h-[380px] w-full">
            {whyChooseUs.map((item, idx) => {
              const isSelected = activeCard === idx;
              const offset = idx - activeCard;

              let translateY = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 10;

              if (offset === 0) {
                translateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 40;
              } else if (offset > 0) {
                translateY = offset * 24;
                scale = 1 - offset * 0.04;
                opacity = 1 - offset * 0.25;
                zIndex = 40 - offset * 10;
              } else {
                translateY = offset * 18;
                scale = 1 + offset * 0.04;
                opacity = 0;
                zIndex = 0;
              }

              return (
                <div
                  key={idx}
                  onClick={() => setActiveCard(idx)}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  className={`absolute inset-x-0 top-0 group bg-[#0d0d0d] rounded-2xl p-8 sm:p-10 border ${isSelected
                    ? "border-[#A3E635]/60 shadow-2xl shadow-[#6B910C]/20"
                    : "border-zinc-800/80 hover:border-zinc-700 cursor-pointer"
                    } transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between w-full h-[360px] sm:h-[340px]`}
                >
                  <WaveCardPattern />
                  <CardBottomGradient />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#111111] rounded-xl border border-zinc-800">
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A3E635] px-3 py-1 bg-black/60 rounded-md border border-zinc-800">
                        {item.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#A3E635] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-500/30 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10 mt-4">
                    <span className="text-[#A3E635] font-bold tracking-wider">
                      0{idx + 1} / 0{whyChooseUs.length}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCard((prev) => (prev + 1) % whyChooseUs.length);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111111] hover:bg-[#1f1f1f] text-white hover:text-[#A3E635] rounded-md border border-zinc-800 transition-all duration-300 font-sans font-semibold cursor-pointer group/next focus:outline-none"
                    >
                      <span>Next Feature</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/next:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
