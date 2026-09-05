import React from "react";
import SvgDice from "@/components/global/SvgDice";
import { Factory, Target, Wrench, Hammer } from "lucide-react";

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

// Green Bottom Ambient Gradient Overlay (Dark Theme Version)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/45 via-[#526E07]/15 to-transparent pointer-events-none rounded-xl group-hover:from-[#526E07]/65 transition-all duration-500" />
);

export default function CoreExpertise() {
  const coreExpertise = [
    {
      tag: "CAPABILITY 01",
      title: "Precision Die Manufacturing",
      desc: "Engineering custom dies built for durability, exact tolerances, and high-volume production efficiency.",
      icon: <Hammer className="w-8 h-8 text-[#A3E635]" />,
    },
    {
      tag: "CAPABILITY 02",
      title: "Tooling & Mold Design",
      desc: "Developing specialized tools and molds tailored to complex component geometries and specific industry requirements.",
      icon: <Target className="w-8 h-8 text-[#A3E635]" />,
    },
    {
      tag: "CAPABILITY 03",
      title: "Custom Metal Working & Machining",
      desc: "Precision machining and metal component fabrication delivered with strict quality controls.",
      icon: <Wrench className="w-8 h-8 text-[#A3E635]" />,
    },
    {
      tag: "CAPABILITY 04",
      title: "Component Prototyping",
      desc: "Rapid translation of technical drawings into functional prototypes for testing and validation.",
      icon: <Factory className="w-8 h-8 text-[#A3E635]" />,
    },
  ];

  return (
    <section id="expertise" className="w-full bg-[#050505] text-white py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Engineering Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Core <span className="text-[#A3E635]">Expertise & Services</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-xl mx-auto">
            Specialized engineering disciplines tailored for robust industrial production.
          </p>
        </div>

        {/* 4 Cards Grid - Matches AdvantagesGrid in Dark Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreExpertise.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#0d0d0d] rounded-xl p-7 sm:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] hover:bg-[#141414] transition-all duration-500 space-y-6 text-white shadow-lg overflow-hidden border border-zinc-800/80"
            >
              {/* Full-Width Organic Wave Background Pattern */}
              <WaveCardPattern />

              {/* Bottom Green Gradient Overlay */}
              <CardBottomGradient />

              <div className="space-y-5 z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400">
                    {item.tag}
                  </span>
                  {item.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-[#A3E635] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 text-xs sm:text-sm font-bold text-[#A3E635] z-10 uppercase tracking-wider">
                ENGINEERING SPEC
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
