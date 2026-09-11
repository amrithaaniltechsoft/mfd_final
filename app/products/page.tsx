import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ProductCatalogSection from "@/components/products/ProductCatalogSection";
import { getSeo } from "@/lib/api";

const DEFAULT_TITLE = "Precision Die & Mold Products | Master Form Dies";
const DEFAULT_DESCRIPTION =
  "Explore our catalog of precision dies, molds and tooling: progressive dies, plastic injection molds, stamping dies, tungsten carbide tooling, extrusion dies and die components.";
const DEFAULT_KEYWORDS =
  "precision die products, progressive die, plastic injection mold, stamping die, tungsten carbide tooling, extrusion die, die components, Master Form Dies";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("products", { fresh: true });

  return {
    title: seo?.title || DEFAULT_TITLE,
    description: seo?.description || DEFAULT_DESCRIPTION,
    keywords: seo?.keywords || DEFAULT_KEYWORDS,
  };
}

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
