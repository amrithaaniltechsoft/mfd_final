"use client";

import React from "react";
import Image from "next/image";
import SvgDice from "../global/SvgDice";
import Button from "../ui/Button";
import { ArrowRight, Grid } from "lucide-react";

// Full-Width Organic Vector Wave Background Component (Light Theme Version)
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

// Green Bottom Ambient Gradient Overlay (Seamless Full Card Coverage)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/15 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#526E07]/40 transition-all duration-500" />
);

export default function ProductsSection() {
  const scrollToQuote = () => {
    const el = document.getElementById("quote-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const products = [
    {
      image: "/products/p1.jpg",
      tag: "PRECISION DIE MOULD",
      title: "Multi-Cavity Stamping Die Block",
      desc: "Heavy-duty hardened steel mould engineered for repetitive high-speed metal stamping cycles.",
    },
    {
      image: "/products/p2.jpg",
      tag: "FORMING MOULD",
      title: "High-Tolerance Progressive Mould",
      desc: "Multi-stage sequential forming die designed for complex automotive and industrial components.",
    },
    {
      image: "/products/p3.jpg",
      tag: "EXTRUSION DIE",
      title: "Profile Extrusion Die Cavity",
      desc: "Custom profile extrusion mould core crafted with sub-micron wire EDM cuts.",
    },
    {
      image: "/products/p4.jpg",
      tag: "CARBIDE TOOLING",
      title: "Tungsten Carbide Insert Die",
      desc: "Extreme-wear resistant carbide die inserts built for abrasive high-tonnage pressing.",
    },
    {
      image: "/products/p5.jpg",
      tag: "INJECTION MOULD",
      title: "Precision Plastic Injection Mould",
      desc: "Balanced runner system with polished core and cavity surfaces for flawless surface finish.",
    },
    {
      image: "/products/p6.jpg",
      tag: "DRAWING DIE",
      title: "Deep Drawing Sheet Metal Die",
      desc: "Custom radiused draw die set for smooth metal flow without wrinkling or tearing.",
    },
    {
      image: "/products/p7.jpg",
      tag: "FORGING MOULD",
      title: "Hot Forging Die Block",
      desc: "Thermal shock resistant H13 tool steel die for heavy industrial hot forging operations.",
    },
    {
      image: "/products/p8.jpg",
      tag: "BLANKING DIE",
      title: "Compound Blanking & Piercing Die",
      desc: "Simultaneous blanking and hole punching die for precision sheet metal brackets.",
    },
    {
      image: "/products/p9.jpg",
      tag: "PUNCH TOOLING",
      title: "Hardened Punch & Die Assembly",
      desc: "Precision ground punch pins and matching die bushings for extended production life.",
    },
    {
      image: "/products/p10.jpg",
      tag: "GAUGE & FIXTURE",
      title: "Metrology Inspection Fixture",
      desc: "Custom checking gauge designed for rapid CMM verification of manufactured dies.",
    },
    {
      image: "/products/p11.jpg",
      tag: "SPECIALTY MOULD",
      title: "Custom Form Mould Core",
      desc: "Tailored industrial mould core produced according to exact client CAD specifications.",
    },
    {
      image: "/products/p9.jpg",
      tag: "ASSEMBLY TOOLING",
      title: "Precision Tool Assembly Component",
      desc: "Custom fitted die tooling component with micro-finished surfaces for tight tolerances.",
    },
  ];

  return (
    <section id="products" className="w-full bg-[#f3f4f6] text-black py-20 lg:py-24 relative overflow-hidden">

      {/* 3D Rotating Dice Slot in Background of Products Section */}
      <div
        id="products-dice-slot"
        className="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-0 z-0"
      />

      <div className="max-w-7xl mx-auto px-6 space-y-14 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-zinc-300 shadow-xs">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm sm:text-base font-semibold text-black tracking-wide">
              Die & Mould Products
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
            Precision Tooling <span className="text-[#526E07]">& Die Mould Showcase</span>
          </h2>
        </div>

        {/* Product Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-zinc-200/90 hover:border-zinc-300 transition-all duration-500 shadow-md hover:shadow-xl text-black">

              {/* Card Background Wave & Green Ambient Overlay */}
              <WaveCardPattern />
              <CardBottomGradient />

              <div className="space-y-4">

                {/* Top Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">

                  {/* Product Image with Vintage Filter */}
                  <Image
                    src={item.image}
                    alt={item.title}
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

                  {/* Category Tag Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-md text-[11px] font-bold text-[#526E07] tracking-wider z-20 border border-zinc-200 shadow-xs">
                    {item.tag}
                  </div>

                </div>

                {/* Card Content Details */}
                <div className="p-5 space-y-2.5 relative z-20 text-left">
                  <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-[#526E07] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-900 font-medium leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

              </div>

              {/* Card Bottom: "Know More" Tertiary Link Button (No Box Around) */}
              <div className="p-5 pt-0 relative z-20">
                <button
                  onClick={scrollToQuote}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#526E07] hover:text-[#3f5505] transition-colors cursor-pointer group/btn focus:outline-none"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex items-center justify-center pt-8">
          <Button
            onClick={scrollToQuote}
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View All Products
          </Button>
        </div>

      </div>
    </section>
  );
}
