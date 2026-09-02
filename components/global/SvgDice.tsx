"use client";

import React from "react";
import Image from "next/image";

interface SvgDiceProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
}

export default function SvgDice({ className = "", size = "md", interactive = true }: SvgDiceProps) {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`relative inline-block select-none ${sizeMap[size]} ${className} ${
        interactive ? "cursor-pointer group" : ""
      }`}
    >
      {/* Floating SVG Die Icon with Drop Shadow */}
      <Image
        src="/dice/die.svg"
        alt="Master Form Dies Animated Die"
        width={48}
        height={48}
        className="w-full h-full object-contain animate-dice-float drop-shadow-[0_6px_14px_rgba(82,110,7,0.55)] group-hover:drop-shadow-[0_8px_20px_rgba(163,230,53,0.7)] transition-all duration-300"
        priority
      />

      {/* Ground Soft Ambient Shadow */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-1.5 bg-black/40 blur-[3px] rounded-full pointer-events-none group-hover:bg-[#526E07]/40 group-hover:w-full transition-all duration-300" />
    </div>
  );
}
