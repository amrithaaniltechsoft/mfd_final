import React from "react";
import Link from "next/link";
import Image from "next/image";
import SvgDice from "@/components/global/SvgDice";
import { Product } from "@/data/products";
import { ArrowRight } from "lucide-react";

// Reusable Background Pattern
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

export default function RelatedProducts({ currentSlug, products }: { currentSlug: string; products: Product[] }) {
  // Filter out current product and pick 4 related products
  const related = products.filter((p) => p.slug !== currentSlug).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="w-full bg-[#f3f4f6] py-20 border-t border-zinc-200">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white rounded-full border border-zinc-300 shadow-xs">
            <SvgDice size="sm" interactive={false} />
            <span className="text-sm font-semibold text-black tracking-wide">
              Product Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
            Related <span className="text-[#526E07]">Precision Toolings</span>
          </h2>
          <p className="text-base text-zinc-600 font-medium max-w-xl mx-auto">
            Explore complementing dies, moulds, and high-tolerance industrial components.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {related.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between h-full border border-zinc-200/90 hover:border-zinc-300 transition-all duration-500 shadow-md hover:shadow-xl text-black"
            >
              <WaveCardPattern />
              <CardBottomGradient />

              <div className="space-y-3 sm:space-y-4">
                {/* Top Image Container */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Tag Badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 sm:px-2.5 bg-white/95 backdrop-blur-md rounded-md text-[10px] sm:text-[11px] font-bold text-[#526E07] tracking-wider z-20 border border-zinc-200 shadow-xs">
                    {item.tag}
                  </div>
                </div>

                {/* Details */}
                <div className="p-3.5 sm:p-5 space-y-2 relative z-20 text-left flex-1">
                  <h3 className="text-sm sm:text-lg font-bold tracking-tight leading-snug group-hover:text-[#526E07] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-3.5 sm:p-5 pt-0 relative z-20">
                <Link
                  href={`/products/${item.slug}`}
                  className="inline-flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-[#526E07] hover:text-[#3f5505] transition-colors cursor-pointer group/btn focus:outline-none"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
