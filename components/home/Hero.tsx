"use client";

import React from "react";
import dynamic from "next/dynamic";
import SvgDice from "../global/SvgDice";
import Button from "../ui/Button";
import { ArrowUpRight } from "lucide-react";

const ThreeDiceCanvas = dynamic(() => import("../ui/ThreeDiceCanvas"), {
  ssr: false,
});


export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-black py-8 lg:py-12 overflow-visible border-b border-[#222222]">
      
      {/* Ambient Radial Green Background Glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#526E07]/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Main 2-Column Hero Grid: Left Content Block & Right 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (Spans 6 Cols): Badge, Headline, Description, Pill CTA, & Quality Audit */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] border border-zinc-800 rounded-full text-xs sm:text-sm font-semibold text-white">
              <SvgDice size="sm" interactive={false} />
              <span className="tracking-wider text-white font-semibold">Master Form Dies Manufacturing Company Pvt Ltd</span>
              <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full" />
              <span className="text-white font-medium">Ernakulam, Kerala</span>
            </div>

            {/* MASSIVE HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
              HIGH-PRECISION <span className="text-[#A3E635]">DIE MANUFACTURING</span> & CUSTOM TOOLING.
            </h1>

            {/* Description Paragraph placed directly beneath headline */}
            <p className="text-base sm:text-lg text-zinc-100 font-normal leading-relaxed max-w-xl">
              Master Form Dies Manufacturing Company Pvt Ltd is a precision engineering enterprise located in Mannathoor, Ernakulam, Kerala — dedicated to high-standard tool design, die making, and custom manufacturing.
            </p>

            {/* Primary Action Reusable Button */}
            <div className="pt-1">
              <Button
                onClick={() => scrollToSection("quote-section")}
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="w-4.5 h-4.5" />}
                iconPosition="right"
              >
                Contact Technical Team
              </Button>
            </div>

            {/* Quality Control Audit Badge */}
            <div className="pt-1 flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-200">
              <span className="w-3 h-3 rounded-full bg-[#A3E635] animate-pulse" />
              <div className="space-y-0.5">
                <div className="text-white font-bold uppercase tracking-wider">Strict Quality Control</div>
                <div className="text-zinc-200 font-medium">100% CMM Accuracy Audit</div>
              </div>
            </div>

          </div>

          {/* Right Column: Grand 3D Rotating Dice Canvas */}
          <div
            id="hero-dice-slot"
            className="lg:col-span-6 flex items-center justify-center lg:justify-end relative z-40"
          >
            <ThreeDiceCanvas />
          </div>

        </div>

      </div>
    </section>
  );
}
