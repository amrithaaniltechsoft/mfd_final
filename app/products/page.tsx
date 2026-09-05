import React, { Suspense } from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ProductCatalogSection from "@/components/products/ProductCatalogSection";

export default function ProductsListingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#526E07] selection:text-white">
      <Header />

      <main className="flex-1 w-full bg-[#f3f4f6]">
        {/* Interactive Product Catalog Section with Embedded Hero Search */}
        <Suspense fallback={<div className="py-20 text-center text-zinc-500 font-medium">Loading catalog...</div>}>
          <ProductCatalogSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
