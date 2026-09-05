"use client";

import React from "react";
import Image from "next/image";
import SvgDice from "@/components/global/SvgDice";
import Button from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export interface InnerHeroProps {
  badgeText?: string;
  title: React.ReactNode;
  subtitle?: string;
  bgImage?: string;
  targetId?: string;
  buttonText?: string;
  customAction?: React.ReactNode;
}

export default function InnerHero({
  badgeText = "Master Form Dies",
  title,
  subtitle,
  bgImage = "/about-page/hero.png",
  targetId,
  buttonText = "Explore Overview",
  customAction,
}: InnerHeroProps) {
  const handleScroll = () => {
    if (!targetId) return;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[50vh] md:h-[55vh] lg:h-[60vh] min-h-[380px] flex flex-col justify-end pb-12 sm:pb-14 bg-black z-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bgImage && (
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center brightness-[0.4]"
          />
        )}

        {/* Radial ambient background highlight */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#A3E635] via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {badgeText && (
          <div className="inline-flex items-center gap-2.5 px-4 py-1 bg-black/60 backdrop-blur-md rounded-full border border-zinc-700/60 shadow-lg">
            <SvgDice size="sm" interactive={false} />
            <span className="text-[12px] sm:text-sm font-semibold text-zinc-200 tracking-wide">
              {badgeText}
            </span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-normal">
            {subtitle}
          </p>
        )}

        {customAction ? (
          <div className="w-full pt-4 sm:pt-6">{customAction}</div>
        ) : (
          targetId && (
            <Button
              variant="primary"
              size="lg"
              onClick={handleScroll}
              icon={
                <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                  <ArrowDown className="w-3.5 h-3.5" />
                </span>
              }
              iconPosition="right"
              className="mt-2"
            >
              {buttonText}
            </Button>
          )
        )}
      </div>
    </section>
  );
}
