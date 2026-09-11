"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SvgDice from "../global/SvgDice";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { type Product } from "@/data/products";
import { getProducts } from "@/lib/api";

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
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let active = true;
    getProducts().then((data) => {
      if (active) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const scrollToQuote = () => {
    const el = document.getElementById("quote-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="w-full bg-[#f3f4f6] text-black py-12 sm:py-20 lg:py-24 relative overflow-hidden">

      {/* 3D Rotating Dice Slot in Background of Products Section */}
      <div
        id="products-dice-slot"
        className="absolute top-1/2 right-6 sm:right-16 -translate-y-1/2 w-32 h-32 pointer-events-none opacity-0 z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-14 relative z-10">

        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-zinc-300 shadow-xs">
            <SvgDice size="sm" interactive={false} />
            <span className="text-xs sm:text-base font-semibold text-black tracking-wide">
              Die & Mould Products
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.15]">
            Precision Tooling <span className="text-[#526E07]">& Die Mould Showcase</span>
          </h2>
        </div>

        {/* Product Cards Grid */}
        {products.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-zinc-200/90 hover:border-zinc-300 transition-all duration-500 shadow-md hover:shadow-xl text-black">

              {/* Card Background Wave & Green Ambient Overlay */}
              <WaveCardPattern />
              <CardBottomGradient />

              <div className="space-y-3 sm:space-y-4">

                {/* Top Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">

                  {/* Product Image with Vintage Filter */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                <div className="p-4 sm:p-5 space-y-2 sm:space-y-2.5 relative z-20 text-left">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight leading-snug group-hover:text-[#526E07] transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-900 font-medium leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

              </div>

              {/* Card Bottom: "Know More" Tertiary Link Button */}
              <div className="p-4 sm:p-5 pt-0 relative z-20">
                <Link
                  href={`/products/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#526E07] hover:text-[#3f5505] transition-colors cursor-pointer group/btn focus:outline-none"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>
        )}

        {/* View All Button */}
        <div className="flex items-center justify-center pt-8">
          <Button
            onClick={() => router.push("/products")}
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
