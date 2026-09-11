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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((item: Service, idx: number) => (
            <ServiceCard key={idx} service={item} />
          ))}
        </div>
      </section>
    </>
  );
}
