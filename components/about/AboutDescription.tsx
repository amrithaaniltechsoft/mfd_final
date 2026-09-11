import React from "react";
import SvgDice from "@/components/global/SvgDice";
import DieMoldAnimation from "./DieMoldAnimation";

interface AboutDescriptionProps {
  heading?: string | null;
  contentHtml?: string | null;
}

export default function AboutDescription({ heading, contentHtml }: AboutDescriptionProps) {
  if (!heading && !contentHtml) return null;

  return (
    <section id="about-overview" className="w-full py-12 sm:py-20 lg:py-24 bg-[#050505] text-white relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 sm:space-y-16">
        {/* Standardized Dark Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
            <SvgDice size="sm" interactive={false} />
            <span className="text-xs sm:text-base font-semibold text-white tracking-wide">
              About Our Company
            </span>
          </div>

          {heading && (
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              {heading}
            </h2>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {contentHtml && (
              <div
                className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-normal [&_p]:mb-4 [&_p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            )}
          </div>

          {/* Right Column: Animated Die Mould */}
          <div className="lg:col-span-6">
            <DieMoldAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
