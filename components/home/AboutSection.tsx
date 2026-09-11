"use client";

import React from "react";
import Image from "next/image";
import SvgDice from "../global/SvgDice";
import {
  BadgeCheck,
  Cog,
  Factory,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import type { AboutSection as AboutSectionData } from "@/lib/api";

import "swiper/css";
import "swiper/css/free-mode";

// Full-Width Organic Vector Wave Background Component for Bento Cards
const WaveCardPattern = ({ isGreenBg = false }: { isGreenBg?: boolean }) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${isGreenBg ? "text-white opacity-[0.14] group-hover:opacity-25" : "text-[#526E07] opacity-[0.10] group-hover:opacity-20"
      } transition-opacity duration-500 overflow-hidden`}
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
const CardBottomGradient = ({ isGreenBg = false }: { isGreenBg?: boolean }) => (
  <div
    className={`absolute inset-0 w-full h-full pointer-events-none rounded-xl transition-all duration-500 ${isGreenBg
      ? "bg-gradient-to-t from-black/40 via-transparent to-transparent"
      : "bg-gradient-to-t from-[#526E07]/30 via-transparent to-transparent group-hover:from-[#526E07]/45"
      }`}
  />
);

const ICON_MAP: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  target: Target,
  factory: Factory,
  sparkles: Sparkles,
  tools: Wrench,
  layers: Layers,
  quality: BadgeCheck,
  map: MapPin,
  cog: Cog,
};

export default function AboutSection({ data }: { data?: AboutSectionData | null }) {
  if (!data) return null;

  const content = data;
  const cards = content.cards ?? [];
  const overviewBg = content.overviewImage ?? "/about-home/card-bg2.png";
  const machineImages = (content.carouselImages ?? []).filter((img) => img.image);

  return (
    <section id="about-us" className="w-full bg-white text-black py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Standardized Bolder High-Contrast Section Header (White Theme) */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#f3f4f6] rounded-full border border-zinc-300">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-black tracking-wide">
              {content.badgeLabel}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
            {content.sectionTitle} <span className="text-[#526E07]">{content.sectionTitleAccent}</span>
          </h2>
        </div>

        {/* Dashboard Bento Grid with Unified Wave Pattern & Green Gradient Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card 1: Primary Specialization */}
          <div className="group md:col-span-8 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all space-y-6 text-white shadow-md relative overflow-hidden min-h-[300px]">
            {/* Background Image */}
            <Image
              src={overviewBg}
              alt="Master Form Dies Specialization Background"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center z-0 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Brand Green Overlay Anchored Solidly at Bottom Edge (0%-65% Solid #526E07) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none z-[1] rounded-xl"
              style={{
                background:
                  "linear-gradient(to top, #010200ce 0%, #0a0e00b7 65%, rgba(9, 12, 0, 0.29) 85%, rgba(0, 0, 0, 0.3) 100%)",
              }}
            />

            <div className="space-y-4 z-10 relative">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                <Sparkles className="w-4.5 h-4.5 text-white" />
                {content.overviewLabel}
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-white">
                {content.overviewText}
              </p>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-white/90 pt-2 z-10 relative">
              {content.overviewFooter}
            </div>
          </div>

          {/* Cards 2-5: Dynamic Bento Cards (rendered per design slot) */}
          {cards.map((card, idx) => {
            const Icon = card.icon ? ICON_MAP[card.icon] ?? null : null;

            /* Green accent card (slot index 1) */
            if (idx === 1) {
              return (
                <div key={idx} className="group md:col-span-4 bg-[#526E07] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#3f5505] transition-all space-y-6 text-white shadow-md relative overflow-hidden">
                  <WaveCardPattern isGreenBg={true} />
                  <CardBottomGradient isGreenBg={true} />

                  <div className="space-y-4 z-10">
                    {Icon && <Icon className="w-9 h-9 text-white" />}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">{card.title}</h3>
                      <p className="text-base text-white font-medium leading-relaxed">{card.desc}</p>
                    </div>
                  </div>

                  {card.footer && (
                    <div className="text-xs sm:text-sm font-semibold text-white z-10">{card.footer}</div>
                  )}
                </div>
              );
            }

            /* Tag-style card (slot index 2, title renders as uppercase label when no icon) */
            if (idx === 2) {
              return (
                <div key={idx} className="group md:col-span-4 bg-[#f3f4f6] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#e5e7eb] transition-all space-y-6 text-black shadow-sm border border-zinc-200/90 relative overflow-hidden">
                  <WaveCardPattern isGreenBg={false} />
                  <CardBottomGradient isGreenBg={false} />

                  <div className="space-y-4 z-10">
                    {Icon ? (
                      <Icon className="w-9 h-9 text-[#526E07]" />
                    ) : (
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800">{card.title}</div>
                    )}
                    <div className="space-y-2">
                      {Icon && <h3 className="text-xl font-bold text-black tracking-tight">{card.title}</h3>}
                      <p className="text-base text-zinc-900 font-medium leading-relaxed">{card.desc}</p>
                    </div>
                  </div>

                  {card.footer && (
                    <div className="text-xs sm:text-sm font-bold text-zinc-800 z-10">{card.footer}</div>
                  )}
                </div>
              );
            }

            /* Facility / dice-slot card (slot index 3) */
            if (idx === 3) {
              return (
                <div key={idx} className="group md:col-span-4 bg-[#f3f4f6] rounded-xl p-6 flex flex-col justify-end gap-2 hover:bg-[#e5e7eb] transition-all text-black shadow-sm border border-zinc-200/90 relative overflow-hidden">
                  <WaveCardPattern isGreenBg={false} />
                  <CardBottomGradient isGreenBg={false} />

                  {/* Target Slot where 3D Dice stops on scroll */}
                  <div
                    id="dice-target-slot"
                    className="w-full h-[150px] relative flex justify-center items-center"
                  />

                  {/* Address & Facility Info aligned snugly at Bottom of Card */}
                  <div className="space-y-2.5 z-10 pt-1">
                    {Icon && <Icon className="w-8 h-8 text-[#526E07]" />}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-black tracking-tight">{card.title}</h3>
                      <p className="text-base text-zinc-900 font-medium leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </div>
              );
            }

            /* Standard light card (slot index 0 & fallback) */
            return (
              <div key={idx} className="group md:col-span-4 bg-[#f3f4f6] rounded-xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#e5e7eb] transition-all space-y-6 text-black shadow-sm border border-zinc-200/90 relative overflow-hidden">
                <WaveCardPattern isGreenBg={false} />
                <CardBottomGradient isGreenBg={false} />

                <div className="space-y-4 z-10">
                  {Icon ? (
                    <Icon className="w-9 h-9 text-[#526E07]" />
                  ) : (
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800">{card.title}</div>
                  )}
                  <div className="space-y-2">
                    {Icon && <h3 className="text-xl font-bold text-black tracking-tight">{card.title}</h3>}
                    <p className="text-base text-zinc-900 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                </div>

                {card.footer && (
                  <div className="text-xs sm:text-sm font-bold text-zinc-800 z-10">{card.footer}</div>
                )}
              </div>
            );
          })}

        </div>

        {/* Continuous 3D Draggable Machine Carousel */}
        <div className="pt-8 relative w-full overflow-hidden">

          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={1.2}
            spaceBetween={12}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 12,
              },
              480: {
                slidesPerView: 1.6,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 32,
              },
            }}
            className="w-full machine-swiper py-2"
          >

            {machineImages.map((img, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="group relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-100 shadow-xl transform-gpu hover:-translate-y-2 transition-all duration-500 cursor-grab active:cursor-grabbing">

                  {/* Vintage Image Filter */}
                  <Image
                    src={img.image ?? ""}
                    alt={img.alt ?? `Master Form Dies Machinery ${idx + 1}`}
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

                  {/* Vintage Camera Lens Vignette Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-10" />
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

      </div>

      <style jsx global>{`
        .machine-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}