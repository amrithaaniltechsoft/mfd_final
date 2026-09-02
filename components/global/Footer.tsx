"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { MapPin, ChevronRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const [mapModalOpen, setMapModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      scrollToTop();
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">

      {/* 1. TOP HERO CTA BLOCK */}
      <div className="relative w-full py-20 sm:py-28 px-6 text-center bg-gradient-to-b from-black via-[#0a1204] to-black">

        {/* Ambient Top Light Beam Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#526E07]/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10 flex flex-col items-center">

          {/* Top Center Hero Visual Logo Image */}
          <div className="relative w-80 sm:w-[420px] lg:w-[480px] h-28 sm:h-36 lg:h-40 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo2.png"
              alt="Master Form Dies Hero Logo Visual"
              fill
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 480px"
              className="object-contain object-center brightness-110"
              priority
            />
          </div>


          {/* Headline & Inquiries Subtitle */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact Our Technical Team
            </h2>
            <p className="text-base sm:text-lg text-zinc-100 font-medium max-w-xl mx-auto leading-relaxed">
              Contact our technical team for custom project quotes, design consultations, or site visits.
            </p>
          </div>

          {/* Secondary White Variant Reusable Button */}
          <Button
            onClick={() => scrollToSection("quote-section")}
            variant="secondary"
            size="md"
            icon={<ChevronRight className="w-4 h-4 text-black" />}
            iconPosition="right"
          >
            Submit Technical Inquiry
          </Button>

        </div>
      </div>

      {/* 2. MIDDLE FOOTER NAVIGATION GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1f1f1f]">

          {/* Column 1: Exact Official Address */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A3E635]" />
              <span>Contact Us</span>
            </h4>

            <div className="text-xs sm:text-sm text-zinc-100 space-y-1 leading-relaxed font-mono">
              <div className="font-bold text-white">Master Form Dies Manufacturing Company Pvt Ltd</div>
              <div>Ward No. 2, Room No. 284</div>
              <div>Mannathoor North P.O., Near Government Ayurveda Hospital</div>
              <div className="text-white font-bold">Ernakulam - 686667, Kerala, India</div>
            </div>
          </div>

          {/* Column 2: About Us Summary */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">About Us</h4>
            <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed">
              Specializing in delivering high-precision engineering solutions, high-grade die manufacturing, and custom tooling designed to meet the rigorous demands of modern manufacturing.
            </p>
            <button
              onClick={() => scrollToSection("about-us")}
              className="inline-block text-xs sm:text-sm font-semibold text-white hover:text-[#A3E635] transition-colors pt-1 cursor-pointer"
            >
              Read About Us &rarr;
            </button>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Products</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 font-medium">
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Stamping Die Blocks</button></li>
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Progressive Moulds</button></li>
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Tungsten Carbide Tools</button></li>
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Injection Mould Cores</button></li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Location */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 font-medium">
              <li><button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection("about-us")} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
              <li><button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Products</button></li>
              <li><button onClick={() => scrollToSection("quote-section")} className="hover:text-white transition-colors cursor-pointer">Contact Us</button></li>
              <li><button onClick={() => setMapModalOpen(true)} className="hover:text-[#A3E635] transition-colors text-left font-semibold text-white cursor-pointer">View Ernakulam Facility Map</button></li>
            </ul>
          </div>

        </div>

        {/* 3. BOTTOM LEGAL & COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300 font-medium">
          <div>
            Copyright &copy; {new Date().getFullYear()} Master Form Dies Manufacturing Company Pvt Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => scrollToSection("about-us")} className="hover:text-white transition-colors cursor-pointer">About Us</button>
            <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors cursor-pointer">Products</button>
            <button onClick={() => scrollToSection("quote-section")} className="hover:text-white transition-colors cursor-pointer">Contact Us</button>

            <Button
              onClick={scrollToTop}
              variant="iconOnly"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>

      </div>

      {/* Map Location Modal */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="bg-[#0a0a0a] border border-[#526E07] rounded-md w-full max-w-xl p-6 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <MapPin className="w-5 h-5 text-white" />
                <span>Ernakulam Facility Location</span>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="text-sm text-zinc-300 hover:text-white font-mono cursor-pointer"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-4.5 bg-[#050505] border border-[#222222] rounded-md space-y-2 text-sm font-mono">
              <div className="text-white font-semibold">Master Form Dies Manufacturing Company Pvt Ltd</div>
              <div className="text-zinc-200">Ward No. 2, Room No. 284</div>
              <div className="text-zinc-200">Mannathoor North P.O., Near Government Ayurveda Hospital</div>
              <div className="text-white font-bold">Ernakulam - 686667, Kerala, India</div>
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href="https://maps.google.com/?q=Mannathoor+Ernakulam+Kerala+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="sm">
                  Open in Google Maps &rarr;
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
