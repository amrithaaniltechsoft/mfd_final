"use client";

import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "iconOnly";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {

  // Variant styling with Brighter Brand Green (#6B910C)
  const variantClasses = {
    primary:
      "bg-[#6B910C] hover:bg-[#58770A] text-white border border-[#6B910C] shadow-lg shadow-[#6B910C]/25 hover:shadow-[#6B910C]/45 focus:ring-[#6B910C]",
    secondary:
      "bg-white hover:bg-zinc-200 text-black border border-white shadow-md focus:ring-white",
    outline:
      "bg-transparent hover:bg-[#6B910C] text-white hover:text-white border border-[#6B910C] shadow-sm hover:shadow-[#6B910C]/35 focus:ring-[#6B910C]",
    ghost:
      "bg-[#111111] hover:bg-[#1f1f1f] text-zinc-200 hover:text-white border border-zinc-800 focus:ring-zinc-700",
    iconOnly:
      "bg-black/90 hover:bg-[#6B910C] text-white border border-zinc-800 p-2.5 rounded-lg transition-colors",
  };

  // Size styling WITHOUT uppercase (Natural Case)
  const sizeClasses = {
    sm: "px-4 py-2.5 text-xs font-bold tracking-wide rounded-md gap-2",
    md: "px-6 py-3.5 text-sm font-bold tracking-wide rounded-lg gap-2.5",
    lg: "px-8 py-4 text-base font-bold tracking-wide rounded-xl gap-3",
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`
        relative inline-flex items-center justify-center overflow-hidden font-sans tracking-wide
        transition-all duration-300 ease-out active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black
        disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 group cursor-pointer
        ${variantClasses[variant]}
        ${variant !== "iconOnly" ? sizeClasses[size] : ""}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {/* Cool Sweeping Light Beam Hover Effect */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />

      {/* Loading Spinner */}
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">
              {icon}
            </span>
          )}

          {children && <span className="text-center">{children}</span>}

          {icon && iconPosition === "right" && (
            <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              {icon}
            </span>
          )}
        </>
      )}
    </button>
  );
}
