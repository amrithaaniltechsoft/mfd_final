import React from "react";
import SvgDice from "@/components/global/SvgDice";
import DieMoldAnimation from "./DieMoldAnimation";

export default function AboutDescription() {
  return (
    <section id="about-overview" className="w-full py-24 bg-[#050505] text-white relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Standardized Dark Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              About Our Company
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Engineering Excellence <span className="text-[#A3E635]">& Precision Craftsmanship</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              High Precision Tooling & Manufacturing Partner
            </h3>
            
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Master Form Dies Manufacturing Company Pvt Ltd is a precision engineering enterprise located in Mannathoor, Ernakulam, Kerala. Dedicated to high-standard tool design, die making, and custom manufacturing, the company serves diverse industrial sectors requiring robust component design, high accuracy, and strict quality control.
            </p>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              At Master Form Dies, we specialize in delivering high-precision engineering solutions, high-grade die manufacturing, and custom tooling designed to meet the rigorous demands of modern manufacturing. From initial concept and tool design to final production and quality assurance, we partner with clients across various sectors to provide durable, cost-effective manufacturing solutions.
            </p>
          </div>

          {/* Right Column: Animated Die Mould */}
          <div className="lg:col-span-6">
            <DieMoldAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
