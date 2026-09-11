"use client";

import React from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ChevronRight, Home, CheckCircle2, Check } from "lucide-react";

export default function ProductContentDetails({ product }: { product: Product }) {
  return (
    <div className="lg:col-span-6 space-y-8 text-left z-10">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-zinc-800 text-xs sm:text-sm font-bold">
        <Link href="/" className="hover:text-[#526E07] transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" /> Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 shrink-0" />
        <Link href="/products" className="hover:text-[#526E07] transition-colors">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 shrink-0" />
        <span className="text-[#526E07] font-bold truncate max-w-[180px] sm:max-w-none">{product.title}</span>
      </div>

      {/* Header Info */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.15]">
          {product.title}
        </h1>
        {product.price != null && product.price !== "" && Number(product.price) > 0 && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#526E07] text-white text-base sm:text-lg font-extrabold rounded-md">
            <span className="text-white/80 font-bold">Price:</span>
            ₹{Number(product.price).toLocaleString("en-IN")}
          </div>
        )}
      </div>

      {/* Descriptions */}
      <div className="space-y-6 text-base sm:text-lg text-black font-semibold leading-relaxed">
        <p className="font-semibold text-black text-[15px] leading-relaxed">
          {product.desc}
        </p>
        <p className="text-black font-medium text-base sm:text-lg">
          {product.fullDesc}
        </p>
      </div>

      {/* Key Features & Specifications Grid Box (Dynamic) */}
      {product.features && product.features.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-zinc-300">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">Key Specifications & Highlights</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
            {product.features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-[#f3f4f6] rounded-xl p-5 border border-zinc-300 space-y-3 shadow-xs hover:border-[#526E07]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Full-width organic wave card pattern */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.08] group-hover:opacity-20 transition-opacity duration-500 overflow-hidden"
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

                {/* Bottom ambient gradient overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/10 via-transparent to-transparent pointer-events-none rounded-xl group-hover:from-[#526E07]/20 transition-all duration-500" />

                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 bg-white rounded-lg border border-zinc-300 shadow-2xs group-hover:border-[#526E07]/40 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#526E07]" />
                  </div>
                  <span className="text-xs font-mono font-extrabold text-black tracking-wider">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-bold text-black leading-snug group-hover:text-[#526E07] transition-colors relative z-10">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Manufacturing Benefits (Dynamic) */}
      {product.benefits && product.benefits.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-zinc-300">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">Manufacturing Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.benefits.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-zinc-300 shadow-2xs">
                <Check className="w-4 h-4 text-[#526E07] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
