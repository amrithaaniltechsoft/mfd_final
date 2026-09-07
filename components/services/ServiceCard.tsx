"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

// Reusable Organic Vector Wave Background Pattern
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.08] group-hover:opacity-15 transition-opacity duration-500 overflow-hidden"
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

const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/25 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#526E07]/40 transition-all duration-500" />
);

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-zinc-200/90 hover:border-zinc-300 transition-all duration-500 shadow-md hover:shadow-xl text-black">
      <WaveCardPattern />
      <CardBottomGradient />

      <div className="space-y-3 sm:space-y-4">
        {/* Top Image Container (NO Category Tag Badge) */}
        <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover sepia-[0.35] contrast-[1.2] brightness-[0.9] saturate-[0.85] group-hover:sepia-0 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105 transition-all duration-700"
          />

          {/* Vintage Film Grain Overlay */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Card Content Details */}
        <div className="p-3 sm:p-5 space-y-1.5 sm:space-y-2 relative z-20 text-left flex-1">
          <h3 className="text-xs sm:text-lg font-bold tracking-tight leading-snug group-hover:text-[#526E07] transition-colors line-clamp-2">
            {service.title}
          </h3>
          <p className="text-[11px] sm:text-sm text-zinc-900 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">
            {service.desc}
          </p>
        </div>
      </div>

      {/* Card Bottom: Direct Enquire CTA Button */}
      <div className="p-3 sm:p-5 pt-0 relative z-20">
        <Link href={`/enquire?service=${service.slug}`}>
          <Button
            variant="primary"
            size="sm"
            fullWidth
            icon={<ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            iconPosition="right"
            className="!px-2 sm:!px-4 !py-2 sm:!py-2.5 text-[11px] sm:text-sm font-bold shadow-md cursor-pointer tracking-tight"
          >
            Enquire Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
