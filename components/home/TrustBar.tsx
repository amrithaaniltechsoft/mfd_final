"use client";

import React, { useState } from "react";
import SvgDice from "../global/SvgDice";
import { ShieldCheck, Cpu, Award, MapPin, ArrowRight } from "lucide-react";


// Full-Width Organic Vector Wave Background Component for Bento Cards
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

// Green Bottom Ambient Gradient Overlay (Seamless Full Card Coverage)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#6B910C]/40 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#6B910C]/60 transition-all duration-500" />
);

export default function TrustBar() {
  const [activeCard, setActiveCard] = useState(0);

  const trustItems = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#A3E635]" />,
      title: "Uncompromised Quality & Engineering Precision",
      desc: "We adhere to rigorous quality standards, maintaining tight tolerances and utilizing high-grade tool steel to ensure optimal component performance.",
      tag: "Quality Protocol",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#A3E635]" />,
      title: "Advanced Manufacturing Technology",
      desc: "Equipped with state-of-the-art multi-axis CNC milling machines, wire-cut EDM, and high-precision inspection tools for intricate fabrications.",
      tag: "Infrastructure",
    },
    {
      icon: <Award className="w-8 h-8 text-[#A3E635]" />,
      title: "Technical Proficiency & Experienced Team",
      desc: "Our skilled team of engineers and toolmakers bring years of industry expertise to every project, offering tailored tooling solutions.",
      tag: "Expert Tooling",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#A3E635]" />,
      title: "Strategic Location & Reliable Delivery",
      desc: "Based in Mannathoor, Ernakulam, Kerala, our facility is strategically positioned for efficient distribution and prompt customer support.",
      tag: "Strategic Logistics",
    },
  ];

  return (
    <section id="trust-bar" className="w-full bg-[#050505] py-20 lg:py-28 relative overflow-hidden text-white">
      
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Standardized Bolder High-Contrast Section Header */}
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

        {/* 2-Column Layout: Left Stacked 3D Cards, Right 3D Dice Landing Slot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: 3D Stacked Cards Deck (60% Width) */}
          <div className="lg:col-span-7 space-y-6 relative">
            
            {/* Animated Navigation Tabs Bar (Full-Width Aligned with Cards) */}
            <div className="w-full p-1.5 bg-[#111111] rounded-xl border border-zinc-800/90 shadow-inner grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {trustItems.map((item, idx) => {
                const isActive = activeCard === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCard(idx)}
                    className={`relative w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold tracking-wide text-center transition-all duration-300 cursor-pointer focus:outline-none z-10 ${
                      isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {/* Smooth Animated Active Pill Background */}
                    {isActive && (
                      <span className="absolute inset-0 bg-[#6B910C] rounded-lg shadow-md shadow-[#6B910C]/35 border border-[#A3E635]/40 -z-10 transition-all duration-300" />
                    )}
                    <span className="truncate">{item.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* 3D Stacked Container Deck (Full-Width Matching Bar) */}
            <div className="relative min-h-[380px] xs:min-h-[340px] sm:min-h-[320px] w-full perspective-[1000px]">
              {trustItems.map((item, idx) => {
                const isSelected = activeCard === idx;
                const offset = idx - activeCard;

                // 3D Stack positioning calculations
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
                    className={`absolute inset-x-0 top-0 group bg-[#0d0d0d] rounded-2xl p-6 sm:p-8 border ${
                      isSelected
                        ? "border-[#A3E635]/60 shadow-2xl shadow-[#6B910C]/20"
                        : "border-zinc-800/80 hover:border-zinc-700 cursor-pointer"
                    } transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between w-full`}
                  >
                    {/* Background Wave & Ambient Green Gradient */}
                    <WaveCardPattern />
                    <CardBottomGradient />

                    <div className="space-y-4 relative z-10">
                      {/* Top Bar: Icon + Clean Tag */}
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-[#111111] rounded-xl border border-zinc-800">
                          {item.icon}
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#A3E635] px-3 py-1 bg-black/60 rounded-md border border-zinc-800">
                          {item.tag}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#A3E635] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Tag Bar with Card Count & Interactive Next Card Button */}
                    <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10 mt-4">
                      <span className="text-[#A3E635] font-bold tracking-wider">
                        0{idx + 1} / 0{trustItems.length}
                      </span>


                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveCard((prev) => (prev + 1) % trustItems.length);
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

          {/* RIGHT COLUMN: 3D Dice Target Landing Slot (40% Width) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center min-h-[320px] relative isolate">
            
            {/* Ambient Backlight Glow behind 3D Dice */}
            <div className="absolute w-72 h-72 bg-[#6B910C]/30 blur-[90px] rounded-full pointer-events-none" />

            {/* Target Slot Anchor for 3D Rolling Dice Trajectory */}
            <div
              id="trust-dice-slot"
              className="w-64 h-64 sm:w-72 sm:h-72 relative flex items-center justify-center"
            />

            <div
              className="text-center text-xs sm:text-sm font-semibold tracking-wide mt-4 text-white select-none pointer-events-none relative z-20"
              style={{ mixBlendMode: "difference" }}
            >
              Engineering Excellence • High-Tolerance Tooling Moulds
            </div>

          </div>


        </div>

      </div>
    </section>
  );
}
