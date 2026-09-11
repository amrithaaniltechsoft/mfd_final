import React from "react";
import SvgDice from "../global/SvgDice";
import { CheckCircle2, Cpu, ShieldCheck, MapPin, Wrench, Timer } from "lucide-react";
import type { HomeAdvantages } from "@/lib/api";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  quality: CheckCircle2,
  cpu: Cpu,
  shield: ShieldCheck,
  map: MapPin,
  tools: Wrench,
  clock: Timer,
};

// Full-Width Organic Vector Wave Background Component (Dark Theme Version)
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.14] group-hover:opacity-25 transition-opacity duration-500 overflow-hidden"
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
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/45 via-[#526E07]/15 to-transparent pointer-events-none rounded-xl group-hover:from-[#526E07]/65 transition-all duration-500" />
);

export default function AdvantagesGrid({ advantages }: { advantages?: HomeAdvantages | null }) {
  if (!advantages) return null;
  const data = advantages;

  return (
    <section id="advantages" className="w-full bg-[#050505] py-20 lg:py-24 relative overflow-hidden">
      {/* 3D Dice Zig-Zag Waypoint Slot (Right Side Anchor) */}
      <div id="advantages-dice-slot" className="absolute top-1/2 right-8 sm:right-16 -translate-y-1/2 w-24 h-24 pointer-events-none opacity-0" />

      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
        {/* Standardized Bolder High-Contrast Section Header (Centered) */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              {data.badgeLabel}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {data.sectionTitle}{" "}
            <span className="text-[#A3E635]">{data.sectionTitleAccent}</span>
          </h2>
        </div>

        {/* 4 Cards in 1 Row - Unified Design with Wave Pattern & Bottom Green Gradient */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(data.cards ?? []).map((item, idx) => {
            const Icon = ICON_MAP[item.icon] ?? CheckCircle2;
            return (
              <div
                key={idx}
                className="group relative bg-[#0d0d0d] rounded-xl p-7 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] hover:bg-[#141414] transition-all space-y-6 text-white shadow-lg overflow-hidden border border-zinc-800/80"
              >
                {/* Full-Width Organic Wave Background Pattern */}
                <WaveCardPattern />

                {/* Bottom Green Gradient Overlay */}
                <CardBottomGradient />

                <div className="space-y-5 z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-200">
                      {item.tag}
                    </span>
                    {Icon ? <Icon className="w-8 h-8 text-white" /> : null}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-zinc-100 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 text-xs sm:text-sm font-bold text-zinc-200 z-10 uppercase tracking-wider">
                  {data.footerLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}