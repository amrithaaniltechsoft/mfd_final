"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import SearchModal from "./SearchModal";
import { Menu, X, ArrowUpRight, ChevronDown, Search } from "lucide-react";
import { products } from "@/data/products";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const productDropdownItems = products.slice(0, 6);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Left: Official Company Logo PNG */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center">
            <Image
              src="/logo/logo4.png"
              alt="Master Form Dies Manufacturing Company Pvt Ltd"
              width={180}
              height={45}
              className="h-20 w-auto object-contain brightness-110"
              priority
            />
          </div>
        </a>

        {/* Center Navigation Links: Home, About Us, Products (Dropdown), Contact Us */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Home
          </button>
          
          {/* About Us -> Links directly to /about page route */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              router.push("/about");
            }}
            className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer focus:outline-none"
          >
            About Us
          </button>

          {/* Products Dropdown Menu Container */}
          <div className="relative group">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/products");
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer py-2"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Menu Popup Box */}
            <div className="absolute top-full left-0 mt-1 w-64 bg-[#0d0d0d] border border-zinc-800 rounded-xl p-2 shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
              <div className="space-y-0.5 max-h-[300px] overflow-y-auto custom-scrollbar">
                {productDropdownItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push(`/products/${item.slug}`);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#1a1a1a] text-xs font-semibold text-zinc-200 hover:text-[#A3E635] transition-colors focus:outline-none cursor-pointer line-clamp-1"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-800/80 mt-1">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/products");
                  }}
                  className="w-full py-1.5 px-3 text-left text-xs font-bold text-[#A3E635] hover:text-white transition-colors cursor-pointer focus:outline-none"
                >
                  View All Products &rarr;
                </button>
              </div>
            </div>

          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              router.push("/contact");
            }}
            className="text-sm font-semibold tracking-wide text-zinc-100 hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            Contact Us
          </button>
        </nav>

        {/* Right: Search Modal Trigger & Primary CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Header Compact Search Modal Trigger */}
          <div
            onClick={() => setIsSearchModalOpen(true)}
            className="relative w-44 lg:w-56 cursor-pointer group"
          >
            <div className="relative flex items-center bg-[#1a1a1a] hover:bg-[#282828] border border-zinc-700 hover:border-white rounded-lg pl-9 pr-3 py-2 transition-all shadow-sm">
              <Search className="absolute left-3 w-4 h-4 text-zinc-300 group-hover:text-white pointer-events-none transition-colors" />
              <span className="text-xs font-bold text-zinc-200 group-hover:text-white select-none transition-colors">
                Search products...
              </span>
            </div>
          </div>

          <a href="tel:+966536897613">
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Contact Technical Team
            </Button>
          </a>
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
            onClick={() => scrollToSection("hero")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about-us")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            About Us
          </button>
          
          {/* Mobile Products Sub-menu */}
          <div className="py-2 border-b border-[#1a1a1a] space-y-2">
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white"
            >
              Products
            </button>
            <div className="pl-4 space-y-1.5">
              {productDropdownItems.map((product, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection("products")}
                  className="block text-xs text-zinc-400 hover:text-[#A3E635]"
                >
                  • {product.title}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => scrollToSection("quote-section")}
            className="block w-full text-left text-sm font-semibold tracking-wide text-zinc-100 hover:text-white py-3 border-b border-[#1a1a1a]"
          >
            Contact Us
          </button>

          <a href="tel:+966536897613" className="block w-full">
            <Button
              variant="primary"
              size="md"
              fullWidth
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Contact Technical Team
            </Button>
          </a>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </header>
  );
}
