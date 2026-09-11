import React, { Suspense } from "react";
import Link from "next/link";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import EnquireProductCard from "@/components/enquire/EnquireProductCard";
import EnquireServiceCard from "@/components/enquire/EnquireServiceCard";
import EnquireFormCard from "@/components/enquire/EnquireFormCard";
import { getProduct, getService, getProducts } from "@/lib/api";
import { ArrowLeft } from "lucide-react";

interface EnquirePageProps {
  searchParams: Promise<{ product?: string; service?: string }>;
}

async function EnquirePageContent({
  searchParamsPromise,
}: {
  searchParamsPromise: Promise<{ product?: string; service?: string }>;
}) {
  const searchParams = await searchParamsPromise;
  const productSlug = searchParams.product;
  const serviceSlug = searchParams.service;

  const [selectedService, selectedProduct, fallbackProducts] = await Promise.all([
    serviceSlug ? getService(serviceSlug, { fresh: true }).then((s) => s ?? undefined) : undefined,
    productSlug ? getProduct(productSlug, { fresh: true }).then((p) => p ?? undefined) : undefined,
    getProducts({ fresh: true }),
  ]);

  const resolvedProduct =
    selectedProduct ?? (!selectedService ? fallbackProducts[0] : undefined);

  const backHref = selectedService
    ? "/services"
    : resolvedProduct
    ? `/products/${resolvedProduct.slug}`
    : "/products";

  const backLabel = selectedService
    ? "Back to Services"
    : "Back to Product Details";

  return (
    <main className="flex-1 w-full bg-[#f8f9fa] pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto space-y-5">
        {/* Back Link */}
        <div>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#526E07] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {backLabel}
          </Link>
        </div>

        {/* 2-Column Main Layout: Left = Product/Service Card; Right = Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {selectedService ? (
            <EnquireServiceCard selectedService={selectedService} />
          ) : resolvedProduct ? (
            <EnquireProductCard selectedProduct={resolvedProduct} />
          ) : null}

          <EnquireFormCard
            selectedProduct={resolvedProduct}
            selectedService={selectedService}
          />
        </div>
      </div>
    </main>
  );
}

export default function EnquirePage({ searchParams }: EnquirePageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] text-black selection:bg-[#526E07] selection:text-white">
      <Header />
      <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center">Loading...</div>}>
        <EnquirePageContent searchParamsPromise={searchParams} />
      </Suspense>
      <Footer />
    </div>
  );
}
