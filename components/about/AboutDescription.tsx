import React from "react";
import SvgDice from "@/components/global/SvgDice";
import DieMoldAnimation from "./DieMoldAnimation";

const DEFAULT_HEADING = (
  <>
    Engineering Excellence <span className="text-[#A3E635]">& Precision Craftsmanship</span>
  </>
);

const DEFAULT_PARAGRAPHS = [
  "Master Form Dies Manufacturing Company Pvt Ltd is a precision engineering enterprise located in Mannathoor, Ernakulam, Kerala. Dedicated to high-standard tool design, die making, and custom manufacturing, the company serves diverse industrial sectors requiring robust component design, high accuracy, and strict quality control.",
  "At Master Form Dies, we specialize in delivering high-precision engineering solutions, high-grade die manufacturing, and custom tooling designed to meet the rigorous demands of modern manufacturing. From initial concept and tool design to final production and quality assurance, we partner with clients across various sectors to provide durable, cost-effective manufacturing solutions.",
];

interface AboutDescriptionProps {
  heading?: string | null;
  contentHtml?: string | null;
}

export default function AboutDescription({ heading, contentHtml }: AboutDescriptionProps) {
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

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            {heading || DEFAULT_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white">
              High Precision Tooling & Manufacturing Partner
            </h3>

            {contentHtml ? (
              <div
                className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-normal [&_p]:mb-4 [&_p:last-child]:mb-0"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            ) : (
              DEFAULT_PARAGRAPHS.map((text, idx) => (
                <p key={idx} className="text-sm sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  {text}
                </p>
              ))
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
