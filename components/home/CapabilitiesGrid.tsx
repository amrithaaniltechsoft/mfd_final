"use client";

import React from "react";
import SvgDice from "../global/SvgDice";
import { Wrench, Layers, Cpu, CheckCircle2 } from "lucide-react";

// Full-Width Organic Vector Wave Background Component
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.10] group-hover:opacity-20 transition-opacity duration-500 overflow-hidden"
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
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/30 via-transparent to-transparent pointer-events-none rounded-xl group-hover:from-[#526E07]/45 transition-all duration-500" />
);

export default function CapabilitiesGrid() {
  const capabilities = [
    {
      icon: <Wrench className="w-9 h-9 text-[#526E07]" />,
      tag: "CORE CAPABILITY 01",
      title: "Precision Die Manufacturing",
      desc: "Custom high-standard dies designed and built to withstand intense press operations and repetitive production cycles.",
      bullets: [
        "High-Grade Die Steels",
        "Tolerances within ±0.005mm",
        "Custom Stamping & Form Dies",
      ],
    },
    {
      icon: <Layers className="w-9 h-9 text-[#526E07]" />,
      tag: "CORE CAPABILITY 02",
      title: "Tooling & Mold Design",
      desc: "Advanced tool paths, mold assemblies, and fixture designs developed for maximum efficiency and material longevity.",
      bullets: [
        "3D Tool CAD Modeling",
        "Multi-Stage Progressive Dies",
        "Fixture & Gauge Assemblies",
      ],
    },
    {
      icon: <Cpu className="w-9 h-9 text-[#526E07]" />,
      tag: "CORE CAPABILITY 03",
      title: "Component Fabrication",
      desc: "Comprehensive CNC machining, wire EDM, and grinding services tailored for industrial components.",
      bullets: [
        "Precision Wire EDM",
        "High-Speed CNC Milling",
        "Surface & Profile Grinding",
      ],
    },
    {
      icon: <CheckCircle2 className="w-9 h-9 text-[#526E07]" />,
      tag: "CORE CAPABILITY 04",
      title: "Engineering & Quality Audit",
      desc: "Thorough dimensional verification, CMM inspection, and engineering consultation for reliable production runs.",
      bullets: [
        "100% CMM Inspection",
        "First-Article Inspection",
        "Quality Audit Certification",
      ],
    },
  ];

  return (
    <section id="capabilities" className="w-full bg-white text-black py-20 lg:py-24 relative overflow-hidden">
      
      {/* 3D Dice Zig-Zag Waypoint Slot (Left Side Anchor) */}
      <div id="capabilities-dice-slot" className="absolute top-1/2 left-8 sm:left-16 -translate-y-1/2 w-24 h-24 pointer-events-none opacity-0" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        
        {/* Standardized Bolder High-Contrast Section Header (White Theme) */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#f3f4f6] rounded-full border border-zinc-300">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-black tracking-wide">
              Core Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
            Our Engineering <span className="text-[#526E07]">& Manufacturing Capabilities</span>
          </h2>
        </div>

        {/* 4 Cards in 1 Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#f3f4f6] rounded-xl p-6 sm:p-7 flex flex-col justify-between min-h-[320px] hover:bg-[#e5e7eb] transition-all space-y-5 text-black shadow-sm border border-zinc-200/90 overflow-hidden"
            >
              {/* Full-Width Organic Wave Background Pattern */}
              <WaveCardPattern />

              {/* Bottom Green Ambient Gradient Overlay */}
              <CardBottomGradient />

              <div className="space-y-4 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-wider text-zinc-700">
                    {item.tag}
                  </span>
                  {item.icon}
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-900 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-3 border-t border-zinc-300 z-10">
                {item.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#526E07] shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
