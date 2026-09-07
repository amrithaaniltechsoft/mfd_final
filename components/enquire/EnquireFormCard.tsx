"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import EnquireSuccessModal from "./EnquireSuccessModal";
import { Product } from "@/data/products";
import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

export interface FormDataState {
  fullName: string;
  contactInfo: string;
  companyName: string;
  serviceType: string;
  quantity: string;
  message: string;
}

export default function EnquireFormCard({
  selectedProduct,
  selectedService,
}: {
  selectedProduct?: Product;
  selectedService?: Service;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialServiceType = selectedService
    ? selectedService.title
    : selectedProduct
    ? selectedProduct.title
    : "Precision Die Manufacturing";

  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    contactInfo: "",
    companyName: "",
    serviceType: initialServiceType,
    quantity: "1 Unit",
    message: "",
  });

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService.title }));
    } else if (selectedProduct) {
      setFormData((prev) => ({ ...prev, serviceType: selectedProduct.title }));
    }
  }, [selectedProduct, selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="group relative w-full lg:col-span-7 bg-[#f3f4f6] rounded-2xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 text-black shadow-sm overflow-hidden border border-zinc-300">
      {/* Wave pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-[#526E07] opacity-[0.10] group-hover:opacity-20 transition-opacity duration-500 overflow-hidden"
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

      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/30 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#526E07]/45 transition-all duration-500" />

      <div className="space-y-2 relative z-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[#526E07]">TECHNICAL INQUIRY</span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Request a Custom Quote
        </h1>
        <p className="text-sm sm:text-base font-medium text-zinc-700">
          Submit your drawing specifications and production requirements to receive a fast engineering quotation.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 space-y-5 text-left pt-2">
        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Rivera"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
              Email / Phone *
            </label>
            <input
              type="text"
              required
              placeholder="alex@company.com"
              value={formData.contactInfo}
              onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
              className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Industrial Enterprises"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
              Estimated Production Run
            </label>
            <select
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full bg-white border border-zinc-300 rounded-lg text-black px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all cursor-pointer"
            >
              <option className="bg-white text-black">1 Prototype Unit</option>
              <option className="bg-white text-black">Small Batch (2-10 Units)</option>
              <option className="bg-white text-black">High Volume Production</option>
            </select>
          </div>
        </div>

        {/* Service Selection */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
            Product / Service Specification *
          </label>
          <input
            type="text"
            required
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            className="w-full bg-white border border-zinc-300 rounded-lg text-black px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all"
          />
        </div>

        {/* Project Notes */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
            Technical Requirements & Project Notes
          </label>
          <textarea
            rows={4}
            placeholder="Specify material grades (e.g. D2 steel), tolerances, or CAD file details..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 p-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all resize-none"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isSubmitting}
          icon={<ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />}
          iconPosition="right"
          className="mt-2 text-xs sm:text-sm md:text-base px-3 sm:px-6"
        >
          Submit Inquiry to Engineering Team
        </Button>
      </form>

      {/* SUCCESS CONFIRMATION MODAL */}
      {submitted && (
        <EnquireSuccessModal
          formData={formData}
          isService={Boolean(selectedService)}
          onClose={() => setSubmitted(false)}
        />
      )}
    </div>
  );
}
