"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SvgDice from "../global/SvgDice";
import Button from "../ui/Button";
import { getHeroSettings, type HeroSettings } from "@/lib/api";
import { ArrowUpRight } from "lucide-react";

const ThreeDiceCanvas = dynamic(() => import("../ui/ThreeDiceCanvas"), {
  ssr: false,
});

export default function Hero() {
  const [hero, setHero] = useState<HeroSettings | null>(null);

  useEffect(() => {
    let active = true;
    getHeroSettings({ fresh: true }).then((data) => {
      if (active && data) setHero(data);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!hero) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-black pt-8 lg:pt-12 pb-0 lg:pb-0 overflow-visible border-b border-[#222222]">
      
      {/* Ambient Radial Green Background Glow */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#526E07]/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Main 2-Column Hero Grid: Left Content Block & Right 3D Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (Spans 6 Cols): Badge, Headline, Description, Pill CTA, & Quality Audit */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Top Pill Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#111111] border border-zinc-800 rounded-full text-[11px] sm:text-sm font-semibold text-white max-w-full">
              <SvgDice size="sm" interactive={false} />
              <span className="tracking-wider text-white font-semibold">{hero.badgeTitle}</span>
              <span className="w-1.5 h-1.5 bg-[#A3E635] rounded-full shrink-0" />
              <span className="text-white font-medium">{hero.badgeLocation}</span>
            </div>

            {/* MASSIVE HEADLINE */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
              {hero.headline1} <span className="text-[#A3E635]">{hero.headlineAccent}</span> {hero.headline2}
            </h1>

            {/* Description Paragraph placed directly beneath headline */}
            <p className="text-sm sm:text-lg text-zinc-100 font-normal leading-relaxed max-w-xl">
              {hero.description}
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
                {hero.buttonLabel}
              </Button>
            </div>

            {/* Quality Control Audit Badge */}
            <div className="pt-1 flex items-center gap-3 text-xs sm:text-sm font-mono text-zinc-200">
              <span className="w-3 h-3 rounded-full bg-[#A3E635] animate-pulse shrink-0" />
              <div className="space-y-0.5">
                <div className="text-white font-bold uppercase tracking-wider">{hero.qualityTitle}</div>
                <div className="text-zinc-200 font-medium">{hero.qualitySubtitle}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Grand 3D Rotating Dice Canvas */}
          <div
            id="hero-dice-slot"
            className="lg:col-span-6 flex items-center justify-start lg:justify-end relative z-40 min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] w-full"
          >
            <ThreeDiceCanvas />
          </div>

        </div>

      </div>
    </section>
  );
}
