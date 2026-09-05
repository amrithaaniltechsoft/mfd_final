"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import SearchModal from "./SearchModal";
import { Menu, X, ArrowUpRight, ChevronDown, Search, CornerDownRight } from "lucide-react";
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
    <header className="sticky top-0 z-[999] w-full bg-black border-b border-[#222222]">
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
            <div className="absolute top-full left-0 mt-1 w-64 bg-[#0d0d0d] border border-zinc-800 rounded-xl p-2 shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
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

        {/* Mobile Right Action Buttons (Search & Menu Trigger) */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            onClick={() => setIsSearchModalOpen(true)}
            variant="iconOnly"
            aria-label="Open search"
            className="p-2 text-zinc-300 hover:text-white"
          >
            <Search className="w-5 h-5" />
          </Button>

          <Button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            variant="iconOnly"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Slide-over Drawer & Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden flex justify-end">
          {/* Dark Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative w-full max-w-xs bg-[#0d0d0d] border-l border-zinc-800 h-full flex flex-col justify-between p-6 shadow-2xl z-10 overflow-y-auto">
            <div className="space-y-6">
              {/* Drawer Top Header Row */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <Image
                  src="/logo/logo4.png"
                  alt="Master Form Dies"
                  width={140}
                  height={35}
                  className="h-10 w-auto object-contain brightness-110"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/80 transition-colors focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Bar Trigger inside Drawer */}
              <div
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchModalOpen(true);
                }}
                className="relative flex items-center bg-[#1a1a1a] hover:bg-[#282828] border border-zinc-700 rounded-xl px-3 py-2.5 cursor-pointer group transition-all"
              >
                <Search className="w-4 h-4 text-zinc-400 group-hover:text-white mr-2.5 shrink-0" />
                <span className="text-xs font-semibold text-zinc-300 group-hover:text-white">
                  Search products...
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1 pt-1">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-zinc-100 hover:text-white hover:bg-zinc-800/50 transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/about");
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-zinc-100 hover:text-white hover:bg-zinc-800/50 transition-colors cursor-pointer"
                >
                  About Us
                </button>

                {/* Mobile Products Section */}
                <div className="pt-2 pb-1 space-y-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push("/products");
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl font-semibold text-sm text-zinc-100 hover:text-[#A3E635] hover:bg-zinc-800/50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>Products</span>
                    <span className="text-xs font-bold text-zinc-400">&rarr;</span>
                  </button>
                  <div className="pl-3 space-y-1 border-l border-zinc-800/80 ml-3 my-1">
                    {productDropdownItems.map((product, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          router.push(`/products/${product.slug}`);
                        }}
                        className="flex items-center gap-2 w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-[#A3E635] hover:bg-zinc-900 transition-colors cursor-pointer"
                      >
                        <CornerDownRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span className="line-clamp-1 flex-1">{product.title}</span>
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        router.push("/products");
                      }}
                      className="flex items-center gap-2 w-full text-left px-2.5 py-2 mt-1.5 rounded-lg text-xs font-bold text-[#A3E635] hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
                    >
                      <CornerDownRight className="w-3.5 h-3.5 text-[#A3E635] shrink-0" />
                      <span>View All Products &rarr;</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/contact");
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-xl font-semibold text-sm text-zinc-100 hover:text-white hover:bg-zinc-800/50 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </nav>
            </div>

            {/* Drawer Bottom CTA Footer */}
            <div className="pt-6 border-t border-zinc-800 space-y-3">
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
              <div className="text-[11px] text-zinc-300 font-mono text-center">
                Master Form Dies Mfg Co Pvt Ltd
              </div>
            </div>
          </div>
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
