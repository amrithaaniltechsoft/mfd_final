"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import EnquireProductCard from "@/components/enquire/EnquireProductCard";
import EnquireFormCard, { FormDataState } from "@/components/enquire/EnquireFormCard";
import EnquireSuccessModal from "@/components/enquire/EnquireSuccessModal";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";

function EnquirePageContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");

  const selectedProduct = products.find((p) => p.slug === productSlug) || products[0];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    contactInfo: "",
    companyName: "",
    serviceType: selectedProduct ? selectedProduct.title : "Precision Die Manufacturing",
    quantity: "1 Unit",
    message: "",
  });

  return (
    <main className="flex-1 w-full bg-[#f8f9fa] pt-6 lg:pt-8 pb-16 px-6 sm:px-12 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto space-y-5">
        {/* Back Link */}
        <div>
          <Link
            href={selectedProduct ? `/products/${selectedProduct.slug}` : "/products"}
            className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#526E07] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Product Details
          </Link>
        </div>

        {/* 2-Column Main Layout: Left = Product Card; Right = Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <EnquireProductCard selectedProduct={selectedProduct} />
          <EnquireFormCard
            selectedProduct={selectedProduct}
            formData={formData}
            setFormData={setFormData}
            onSuccess={() => setSubmitted(true)}
          />
        </div>
      </div>

      {/* SUCCESS CONFIRMATION MODAL */}
      {submitted && (
        <EnquireSuccessModal
          formData={formData}
          onClose={() => setSubmitted(false)}
        />
      )}
    </main>
  );
}

export default function EnquirePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#526E07] selection:text-white">
      <Header />
      <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center">Loading...</div>}>
        <EnquirePageContent />
      </Suspense>
      <Footer />
    </div>
  );
}
