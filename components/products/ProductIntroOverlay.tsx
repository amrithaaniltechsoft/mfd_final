"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductIntroOverlay({ product }: { product: Product }) {
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    const shrinkTimer = setTimeout(() => {
      setIsShrinking(true);
    }, 800);

    const dismissTimer = setTimeout(() => {
      setShowLoadingOverlay(false);
    }, 1700);

    return () => {
      clearTimeout(shrinkTimer);
      clearTimeout(dismissTimer);
    };
  }, []);

  if (!showLoadingOverlay) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black overflow-hidden pointer-events-none flex flex-col items-center justify-center">
      {/* Full Screen Product Background Image */}
      <div
        className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${isShrinking ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 pointer-events-none" />
      </div>

      {/* Company Logo and Loading Title Overlay */}
      <div
        className={`relative z-10 flex flex-col items-center text-center space-y-6 px-6 transition-all duration-700 ease-out ${isShrinking ? "opacity-0 translate-y-6 scale-90" : "opacity-100 translate-y-0 scale-100"
          }`}
      >
        <div className="relative h-20 sm:h-24 w-64 sm:w-80">
          <Image
            src="/logo/logo4.png"
            alt="Master Form Dies Logo"
            fill
            priority
            className="object-contain brightness-120 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-2xl leading-tight">
          {product.title}
        </h1>
      </div>
    </div>
  );
}
