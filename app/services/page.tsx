import React, { Suspense } from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ServiceCatalogSection from "@/components/services/ServiceCatalogSection";

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
