"use client";

import React, { useState } from "react";
import Image from "next/image";
import SvgDice from "../global/SvgDice";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight, Gauge } from "lucide-react";

interface FacilityImage {
  url: string;
  title: string;
  subtitle: string;
  spec: string;
}

export default function FacilitySection() {
  const images: FacilityImage[] = [
    {
      url: "/machines/WhatsApp Image 2026-08-23 at 1.23.20 PM.jpeg",
      title: "Precision Die Tooling Workshop",
      subtitle: "Heavy duty die block machining and mold assembly",
      spec: "Tolerance: ±0.003mm | Surface Finish: Ra 0.2µm"
    },
    {
      url: "/machines/WhatsApp Image 2026-08-23 at 1.23.20 PM (1).jpeg",
      title: "5-Axis High-Speed CNC Milling",
      subtitle: "Complex 3D cavity cut & high-precision contouring",
      spec: "Spindle Speed: 24,000 RPM | Tool Change: 1.2s"
    },
    {
      url: "/machines/WhatsApp Image 2026-08-23 at 1.23.20 PM (2).jpeg",
      title: "CMM Metrology & Inspection Lab",
      subtitle: "Coordinate Measuring Machine multi-axis dimensional validation",
      spec: "Accuracy: 0.001mm | Temperature Controlled 20°C"
    },
    {
      url: "/machines/WhatsApp Image 2026-08-23 at 1.23.20 PM (3).jpeg",
      title: "Wire-Cut EDM & Surface Grinding",
      subtitle: "Sub-micron electrical discharge machining for hardened steels",
      spec: "Max Hardness: 65 HRC | Taper Angle: ±30°"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="facility" className="w-full bg-[#050505] py-20 lg:py-24 relative overflow-hidden">
      
      {/* 3D Dice Zig-Zag Waypoint Slot */}
      <div id="facility-dice-slot" className="absolute top-1/2 left-8 sm:left-16 -translate-y-1/2 w-24 h-24 pointer-events-none opacity-0" />

      <div className="max-w-7xl mx-auto px-6 space-y-12 relative z-10">
        
        {/* Standardized Bolder High-Contrast Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-white tracking-wide">
              Facility & Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            State-of-the-Art Workshop & <span className="text-[#A3E635]">Equipment</span>
          </h2>
        </div>

        {/* Full-Width Interactive Image Showcase */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-[#0d0d0d] p-3 sm:p-4 shadow-2xl border border-zinc-800/80">
            
            {/* Main Active Image Display */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#111111]">
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="object-cover contrast-105 brightness-95 transition-all duration-500"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Top Carousel Index Indicator */}
              <div className="absolute top-4 left-4 px-4 py-1.5 bg-black/85 backdrop-blur-md rounded-md text-sm font-semibold text-white border border-zinc-700">
                IMAGE {currentIndex + 1} / {images.length}
              </div>

              {/* Navigation Arrows using reusable Button variant */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
                <Button
                  onClick={prevSlide}
                  variant="iconOnly"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextSlide}
                  variant="iconOnly"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-32 p-4 sm:p-5 bg-black/90 backdrop-blur-md rounded-md border border-zinc-800">
                <div className="text-lg font-bold text-white tracking-tight">
                  {images[currentIndex].title}
                </div>
                <div className="text-sm text-zinc-100 font-medium truncate">
                  {images[currentIndex].subtitle}
                </div>
              </div>
            </div>

            {/* Specs Bar below image */}
            <div className="p-4 flex items-center justify-between text-xs sm:text-sm font-mono text-zinc-200">
              <span className="flex items-center gap-2 font-medium">
                <Gauge className="w-4 h-4 text-white" />
                {images[currentIndex].spec}
              </span>
              <span className="text-white font-semibold uppercase tracking-wider">ERNAKULAM FACILITY</span>
            </div>

          </div>

          {/* Thumbnail Selectors */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-[16/10] overflow-hidden rounded-xl cursor-pointer ${
                  currentIndex === idx ? "ring-2 ring-[#A3E635] opacity-100 scale-[1.02]" : "opacity-40 hover:opacity-100"
                } transition-all duration-300`}
              >
                <Image src={img.url} alt={img.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
