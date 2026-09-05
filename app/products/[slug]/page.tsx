import React from "react";
import { notFound } from "next/navigation";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ProductIntroOverlay from "@/components/products/ProductIntroOverlay";
import ProductContentDetails from "@/components/products/ProductContentDetails";
import ProductStickyImage from "@/components/products/ProductStickyImage";
import RelatedProducts from "@/components/products/RelatedProducts";
import { products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#526E07] selection:text-white">
      <Header />
      <ProductIntroOverlay product={product} />

      <main className="flex-1 w-full bg-[#f8f9fa] relative pt-6 sm:pt-8 lg:pt-10 pb-24 lg:pb-20 px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative min-h-[600px]">
            <ProductStickyImage product={product} />
            <ProductContentDetails product={product} />
          </div>
        </div>
      </main>

      <RelatedProducts currentSlug={product.slug} products={products} />

      <Footer />
    </div>
  );
}


