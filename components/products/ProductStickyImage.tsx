"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Product } from "@/data/products";
import { ArrowUpRight, Maximize2 } from "lucide-react";

export default function ProductStickyImage({ product }: { product: Product }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="lg:col-span-6 sticky top-28 self-start space-y-4 pt-0">
        {/* Image Box */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-200 cursor-pointer group transition-all duration-700 ease-out z-20"
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20 group-hover:bg-black transition-colors">
            <Maximize2 className="w-3.5 h-3.5 text-[#A3E635]" /> Fullscreen Preview
          </div>
        </div>

        {/* Action Buttons directly below image */}
        <div className="w-full pt-1 flex flex-col sm:flex-row items-center gap-3">
          <Link href={`/enquire?product=${product.slug}`} className="w-full sm:flex-1">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              icon={<ArrowUpRight className="w-4.5 h-4.5" />}
              iconPosition="right"
            >
              Enquire Now
            </Button>
          </Link>
          <Link href="/products" className="w-full sm:flex-1">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              className="!border-zinc-300 !bg-white hover:!bg-zinc-100 !text-black font-bold shadow-xs"
            >
              Explore Products
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
              src={product.image}
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
