"use client";

import React, { useState } from "react";
import SvgDice from "@/components/global/SvgDice";
import { ShieldCheck, Zap, Users, MapPin, Cpu, Award, Wrench, Timer, ArrowRight } from "lucide-react";
import type { WhyChoose } from "@/lib/api";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  quality: ShieldCheck,
  tech: Cpu,
  award: Award,
  map: MapPin,
  zap: Zap,
  users: Users,
  tools: Wrench,
  clock: Timer,
};

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

export default function WhyChooseUs({ data }: { data?: WhyChoose | null }) {
  const [activeCard, setActiveCard] = useState(0);

  if (!data) return null;
  const section = data;
  const whyChooseUs = section.cards ?? [];

  return (
    <section className="w-full py-12 sm:py-20 lg:py-24 bg-[#050505] text-white relative overflow-hidden border-b border-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-xs sm:text-base font-semibold text-white tracking-wide">
              {section.badgeLabel}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {section.sectionTitle} <span className="text-[#A3E635]">{section.sectionTitleAccent}</span>
          </h2>
          <p className="text-sm sm:text-lg text-zinc-300 font-normal max-w-xl mx-auto">
            {section.subtitle}
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
                  className={`relative w-full py-2.5 px-2 sm:px-3 rounded-lg text-[11px] sm:text-sm font-semibold tracking-wide text-center transition-all duration-300 cursor-pointer focus:outline-none z-10 ${isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-100"
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
          <div className="relative min-h-[380px] xs:min-h-[360px] sm:min-h-[380px] w-full">
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
                  className={`absolute inset-x-0 top-0 group bg-[#0d0d0d] rounded-2xl p-5 sm:p-10 border ${isSelected
                    ? "border-[#A3E635]/60 shadow-2xl shadow-[#6B910C]/20"
                    : "border-zinc-800/80 hover:border-zinc-700 cursor-pointer"
                    } transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between w-full h-[360px] xs:h-[330px] sm:h-[340px]`}
                >
                  <WaveCardPattern />
                  <CardBottomGradient />

                  <div className="space-y-3 sm:space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 sm:p-3 bg-[#111111] rounded-xl border border-zinc-800">
                        {(() => {
                          const Icon = ICON_MAP[item.icon] ?? ShieldCheck;
                          return <Icon className="w-8 h-8 text-[#A3E635]" />;
                        })()}
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#A3E635] px-2.5 py-1 bg-black/60 rounded-md border border-zinc-800">
                        {item.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#A3E635] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-base text-zinc-300 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-zinc-500/30 flex items-center justify-between text-xs font-mono text-zinc-400 relative z-10 mt-2 sm:mt-4">
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
