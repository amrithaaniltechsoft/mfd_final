"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Product } from "@/data/products";
import { ArrowUpRight, Maximize2 } from "lucide-react";

export default function ProductStickyImage({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const allImages = useMemo(() => {
    const sources = [product.image, ...(product.images ?? [])];
    return sources.filter((src, idx) => Boolean(src) && sources.indexOf(src) === idx);
  }, [product.image, product.images]);

  const activeImage = allImages[activeIndex] ?? product.image;

  useEffect(() => {
    if (allImages.length <= 1 || isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((idx) => (idx + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [allImages.length, isPaused]);

  return (
    <>
      <div className="lg:col-span-6 static lg:sticky lg:top-28 self-start space-y-4 pt-0">
        {/* Image Box / Carousel */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-200 cursor-pointer group transition-all duration-700 ease-out z-20"
        >
          {/* Sliding Track */}
          <div
            className="flex h-full transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {allImages.map((src) => (
              <div key={src} className="relative w-full h-full shrink-0">
                <Image
                  src={src}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Prev / Next Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((idx) => (idx - 1 + allImages.length) % allImages.length);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 4.293a1 1 0 010 1.414L8.414 10l4.293 4.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((idx) => (idx + 1) % allImages.length);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-black transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 15.707a1 1 0 010-1.414L11.586 10 7.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20 group-hover:bg-black transition-colors">
            <Maximize2 className="w-3.5 h-3.5 text-[#A3E635]" />{" "}
            {allImages.length > 1 ? `${activeIndex + 1} / ${allImages.length} · ` : ""}
            Fullscreen Preview
          </div>
        </div>

        {/* Thumbnail Carousel Strip */}
        {allImages.length > 1 && (
          <div className="flex gap-2.5 sm:gap-3 pt-1 pb-1 overflow-x-auto">
            {allImages.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image ${idx + 1} of ${allImages.length}`}
                className={`relative shrink-0 w-20 sm:w-24 aspect-[4/3] rounded-lg overflow-hidden cursor-pointer border transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-[#526E07] ring-2 ring-[#526E07]/60 opacity-100"
                    : "border-zinc-300 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${product.title} thumbnail ${idx + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Action Buttons directly below image */}
        <div className="w-full pt-1 flex flex-row items-center gap-2.5 sm:gap-3">
          <Link href={`/enquire?product=${product.slug}`} className="flex-1">
            <Button
              variant="primary"
              size="md"
              fullWidth
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
              className="text-xs sm:text-base px-3 sm:px-6"
            >
              Enquire Now
            </Button>
          </Link>
          <Link href="/products" className="flex-1">
            <Button
              variant="outline"
              size="md"
              fullWidth
              className="!border-zinc-300 !bg-white hover:!bg-zinc-100 !text-black font-bold shadow-xs text-xs sm:text-base px-3 sm:px-6"
            >
              Explore Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Fixed Bottom CTA Bar (Mobile View Only) */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-[#0d0d0d] border-t border-zinc-800 p-3 sm:p-4 shadow-2xl flex items-center justify-between gap-3 lg:hidden backdrop-blur-md">
        <div className="flex-1 min-w-0 text-left">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#A3E635] truncate">
            {product.tag}
          </div>
          <div className="text-xs sm:text-sm font-bold text-white truncate">
            {product.title}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link href={`/enquire?product=${product.slug}`}>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
              iconPosition="right"
              className="px-4 py-2.5 text-xs font-bold shadow-lg shadow-[#526E07]/30 cursor-pointer"
            >
              Enquire Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
        >
          <div className="relative w-full max-w-6xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
            <Image
              key={activeImage}
              src={activeImage}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}