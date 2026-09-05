import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";

export default function EnquireProductCard({ selectedProduct }: { selectedProduct: Product }) {
  return (
    <div className="w-full lg:col-span-5 space-y-6 lg:sticky lg:top-20 self-start">
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-zinc-300 shadow-md space-y-4 sm:space-y-5 overflow-hidden relative">
        {/* Full-Width Organic Wave Background Component */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.10] group-hover:opacity-20 transition-opacity duration-500 overflow-hidden"
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

        {/* Product Image */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 z-10">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Category Tag & Product Title */}
        <div className="space-y-2 relative z-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#526E07]/10 rounded-md border border-[#526E07]/20">
            <span className="text-xs font-bold text-[#526E07] uppercase tracking-wider">
              {selectedProduct.tag}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight leading-snug pt-1">
            {selectedProduct.title}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-zinc-800 leading-relaxed">
            {selectedProduct.desc}
          </p>
        </div>

      </div>
    </div>
  );
}
