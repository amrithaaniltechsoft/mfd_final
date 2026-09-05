"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import { ChevronRight, Home, CheckCircle2, Check, ChevronDown } from "lucide-react";

const defaultBenefits = [
  "High-grade hardened tool steel construction for extended die life",
  "Precision micro-machined tolerances meeting strict standards",
  "Custom surface finishes and anti-wear treatment options",
  "Comprehensive dimensional inspection & quality assurance",
  "Optimized geometry for high-speed continuous production",
  "Full engineering support from initial CAD draft to site fitting"
];

const defaultFaqs = [
  {
    q: "What is the typical lead time for custom die manufacturing?",
    a: "Standard lead times range from 2 to 4 weeks depending on tool complexity, steel hardening requirements, and CAD verification. Expedited fabrication options are available for priority projects."
  },
  {
    q: "Can you manufacture dies according to custom technical drawings?",
    a: "Yes. Our engineering team works directly with STEP, IGES, DXF, and DWG files to model, prototype, and precision-machine custom dies tailored to your production workflow."
  },
  {
    q: "What quality assurance checks are performed before dispatch?",
    a: "Every die block undergoes CMM dimensional inspection, hardness testing, surface roughness checks, and trial stamping runs to guarantee strict compliance with client specifications."
  }
];

export default function ProductContentDetails({ product }: { product: Product }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
        <div className="inline-block px-3 py-1 bg-[#526E07]/15 text-[#526E07] text-[11px] sm:text-xs font-extrabold tracking-wider rounded-md border border-[#526E07]/30">
          {product.tag}
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-[1.15]">
          {product.title}
        </h1>
      </div>

      {/* Descriptions */}
      <div className="space-y-6 text-base sm:text-lg text-black font-semibold leading-relaxed">
        <p className="font-extrabold text-black text-xl sm:text-2xl leading-snug">
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

      {/* Additional Manufacturing Benefits (Dynamic) */}
      {((product.benefits && product.benefits.length > 0) || defaultBenefits.length > 0) && (
        <div className="space-y-4 pt-6 border-t border-zinc-300">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">Additional Manufacturing Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(product.benefits && product.benefits.length > 0 ? product.benefits : defaultBenefits).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-lg border border-zinc-300 shadow-2xs">
                <Check className="w-4 h-4 text-[#526E07] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Frequently Asked Questions Section (Dynamic) */}
      {((product.faqs && product.faqs.length > 0) || defaultFaqs.length > 0) && (
        <div className="space-y-6 pt-6 border-t border-zinc-300">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#526E07]">GOT QUESTIONS?</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-3">
            {(product.faqs && product.faqs.length > 0 ? product.faqs : defaultFaqs).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white rounded-xl border border-zinc-300 overflow-hidden shadow-2xs transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-black hover:text-[#526E07] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#526E07] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-black font-semibold leading-relaxed border-t border-zinc-200 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
