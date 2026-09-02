"use client";

import React, { useState } from "react";
import Image from "next/image";
import SvgDice from "./SvgDice";
import Button from "../ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Left: Official Company Logo PNG */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative flex items-center">
            <Image
              src="/logo/logo2.png"
              alt="Master Form Dies Manufacturing Company Pvt Ltd"
              width={180}
              height={45}
              className="h-20 w-auto object-contain brightness-110"
              priority
            />
          </div>
        </a>

        {/* Center Navigation Links (Matching Clean Title Case Style) */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollToSection("about-us")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("capabilities")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Core Expertise
          </button>
          <button
            onClick={() => scrollToSection("trust-bar")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("trust-bar")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("quote-section")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Contact Info
          </button>
        </nav>

        {/* Right: Primary CTA - Contact Technical Team Reusable Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={() => scrollToSection("quote-section")}
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Contact Technical Team
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="iconOnly"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-[#222222] px-6 py-6 space-y-4">
          <button
            onClick={() => scrollToSection("about-us")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("capabilities")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Core Expertise
          </button>
          <button
            onClick={() => scrollToSection("trust-bar")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Why Choose Us
          </button>
          <button
            onClick={() => scrollToSection("trust-bar")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("quote-section")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Contact Info
          </button>

          <Button
            onClick={() => scrollToSection("quote-section")}
            variant="primary"
            size="md"
            fullWidth
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Contact Technical Team
          </Button>
        </div>
      )}
    </header>
  );
}
