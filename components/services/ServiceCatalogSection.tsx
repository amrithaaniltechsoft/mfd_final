import React from "react";
import { Service } from "@/data/services";
import InnerHero from "@/components/global/InnerHero";
import ServiceCard from "./ServiceCard";
import { getServices } from "@/lib/api";

export default async function ServiceCatalogSection() {
  const services = await getServices({ fresh: true });

  return (
    <>
      {/* Inner Hero */}
      <InnerHero
        badgeText="Our Engineering Capabilities"
        title={
          <>
            Specialized Engineering<br /> <span className="text-[#A3E635]">& Manufacturing Services</span>
          </>
        }
        bgImage="/contact-page/hero2.png"
      />

      {/* Services Grid Section (NO Search Bar) */}
      <section id="service-catalog-grid" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        {services.length === 0 ? (
          <div className="text-center py-20 px-4 bg-white rounded-2xl border border-zinc-200 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#526E07]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#6B910C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9h.01" />
                <path d="M6 15h.01" />
                <path d="M12 9h.01" />
                <path d="M12 15h.01" />
                <path d="M18 9h.01" />
                <path d="M18 15h.01" />
                <path d="M17 3H7a2 2 0 0 0-2 2v16l4-3 4 3 4-3 4 3V5a2 2 0 0 0-2-2Z" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Services Coming Soon
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((item: Service, idx: number) => (
              <ServiceCard key={idx} service={item} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
