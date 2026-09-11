import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ServiceCatalogSection from "@/components/services/ServiceCatalogSection";
import { getSeo } from "@/lib/api";

const DEFAULT_TITLE = "Precision Die & Mold Manufacturing Services | Master Form Dies";
const DEFAULT_DESCRIPTION =
  "Specialized die, mold and tooling engineering services: custom die manufacturing, CNC precision machining, wire EDM, prototyping, heat treatment and quality inspection.";
const DEFAULT_KEYWORDS =
  "die manufacturing, mold manufacturing, precision machining, wire EDM, heat treatment, die repair, tooling services, Master Form Dies";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("services", { fresh: true });

  return {
    title: seo?.title || DEFAULT_TITLE,
    description: seo?.description || DEFAULT_DESCRIPTION,
    keywords: seo?.keywords || DEFAULT_KEYWORDS,
  };
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#526E07] selection:text-white">
      <Header />

      <main className="flex-1 w-full bg-[#f3f4f6]">
        <Suspense fallback={<div className="py-20 text-center text-zinc-500 font-medium">Loading services...</div>}>
          <ServiceCatalogSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
