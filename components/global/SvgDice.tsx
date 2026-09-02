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
      <Image
        src="/dice/die.svg"
        alt="Master Form Dies Animated Die"
        width={48}
        height={48}
        className="w-full h-full object-contain animate-dice-float drop-shadow-none"
        priority
      />
    </div>
  );
}
