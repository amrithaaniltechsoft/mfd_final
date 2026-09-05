"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import InnerHero from "@/components/global/InnerHero";
import Button from "@/components/ui/Button";
import { ArrowRight, Search, X } from "lucide-react";
import { products, Product } from "@/data/products";

// Reusable Background Pattern from Homepage
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

const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/25 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#526E07]/40 transition-all duration-500" />
);

export default function ProductCatalogSection() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Animated Placeholder Typewriter Effect
  const placeholderPhrases = React.useMemo(
    () => [
      "Search 'Precision Die Mould'...",
      "Search 'Progressive Mould'...",
      "Search 'Tungsten Carbide Tooling'...",
      "Search 'Plastic Injection Mould'...",
      "Search 'Extrusion Die Cavity'...",
      "Search 'Deep Drawing Sheet Metal Die'...",
    ],
    []
  );

  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [animatedPlaceholder, setAnimatedPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = placeholderPhrases[currentPhraseIdx];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setAnimatedPlaceholder(currentPhrase.substring(0, animatedPlaceholder.length + 1));
        if (animatedPlaceholder === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setAnimatedPlaceholder(currentPhrase.substring(0, animatedPlaceholder.length - 1));
        if (animatedPlaceholder === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % placeholderPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [animatedPlaceholder, isDeleting, currentPhraseIdx, placeholderPhrases]);

  useEffect(() => {
    const q = searchParams.get("search");
    if (q !== null) {
      setSearchQuery(q);
    }
  }, [searchParams]);

  // Filtered products list
  const filteredProducts = products.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.tag.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* Inner Hero */}
      <InnerHero
        badgeText="Product Catalog"
        title={
          <>
            Precision Tooling<br /> <span className="text-[#A3E635]">& Die Moulds</span>
          </>
        }
        bgImage="/contact-page/hero3.png"
      />

      {/* Single Search Bar (Inside Hero at top, Sticky below Header on Scroll) */}
      <div className="sticky top-24 z-40 -mt-10 sm:-mt-12 py-3 px-6 transition-all">
        <div className="max-w-xl w-full mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative group/search"
          >
            <div className="flex items-center gap-1.5 bg-white p-2 rounded-2xl border-2 border-zinc-400 shadow-2xl group-hover/search:border-[#6B910C] focus-within:border-[#6B910C] focus-within:ring-4 focus-within:ring-[#6B910C]/20 transition-all">
              <div className="relative flex-1 flex items-center pl-2.5">
                <Search className="w-4.5 h-4.5 text-zinc-500 mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={animatedPlaceholder || "Search products..."}
                  className="w-full text-sm sm:text-base font-bold text-zinc-900 placeholder:text-zinc-400 bg-transparent outline-none border-none py-1"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-zinc-500 hover:text-black mr-1 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="sm"
                icon={<Search className="w-4 h-4" />}
                iconPosition="left"
                className="shrink-0 text-xs sm:text-sm px-5 py-2.5 rounded-xl cursor-pointer"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Product Catalog Grid Section */}
      <section id="product-catalog-grid" className="py-16 sm:py-20 max-w-7xl mx-auto px-6">
        {/* Product Grid or No Results */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-zinc-200 shadow-sm max-w-md mx-auto space-y-4">
            <p className="text-base text-zinc-600 font-medium">
              No products found matching &ldquo;<span className="font-bold text-black">{searchQuery}</span>&rdquo;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 bg-[#6B910C] text-white rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#58770A] transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((item: Product, idx: number) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-zinc-200/90 hover:border-zinc-300 transition-all duration-500 shadow-md hover:shadow-xl text-black"
              >
                <WaveCardPattern />
                <CardBottomGradient />

                <div className="space-y-4">
                  {/* Top Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">
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

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 backdrop-blur-md rounded-md text-[11px] font-bold text-[#526E07] tracking-wider z-20 border border-zinc-200 shadow-xs">
                      {item.tag}
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 space-y-2.5 relative z-20 text-left flex-1">
                    <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-[#526E07] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-900 font-medium leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: "View Details" */}
                <div className="p-5 pt-0 relative z-20">
                  <Link
                    href={`/products/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#526E07] hover:text-[#3f5505] transition-colors cursor-pointer group/btn focus:outline-none"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
