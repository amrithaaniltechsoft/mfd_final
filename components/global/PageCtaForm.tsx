"use client";

import React, { useState } from "react";
import Image from "next/image";
import SvgDice from "./SvgDice";
import Button from "../ui/Button";
import { submitEnquiry, type CtaContact } from "@/lib/api";
import { CheckCircle2, ArrowRight } from "lucide-react";

// Full-Width Organic Vector Wave Background Component (Dark Theme Version)
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#6B910C] opacity-[0.04] group-hover:opacity-10 transition-opacity duration-500 overflow-hidden"
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
);

// Green Bottom Ambient Gradient Overlay (Dark Theme Version)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#6B910C]/25 via-transparent to-transparent pointer-events-none rounded-xl group-hover:from-[#6B910C]/40 transition-all duration-500" />
);

export default function InnerCtaForm({ data }: { data?: CtaContact | null }) {
  const content = data ?? null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    contactInfo: "",
    serviceType: "Precision Die Manufacturing",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await submitEnquiry(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-section" className="w-full bg-[#6B910C] text-white py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Card Container */}
        <div className="relative bg-[#0d0d0d] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Column: Image Container with overlay content */}
          <div className="relative lg:col-span-5 min-h-[300px] sm:min-h-[460px] lg:min-h-[auto] flex flex-col justify-between p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-zinc-800">
            {/* Background Image */}
            <Image
              src="/cta/bg.png"
              alt="CTA Background"
              fill
              priority
              className="object-cover object-center brightness-[0.4]"
            />

            {/* Dark overlay gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/70 pointer-events-none" />

            {/* Top Badge */}
            {content?.badgeLabel && (
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-zinc-700/60 w-fit">
                <SvgDice size="sm" interactive={false} />
                <span className="text-xs sm:text-base font-semibold text-zinc-200 tracking-wide">
                  {content.badgeLabel}
                </span>
              </div>
            </div>
            )}

            {/* Bottom Content / Headline & Subtitle */}
            {(content?.sectionTitle || content?.subtitle) && (
            <div className="relative z-10 space-y-3 sm:space-y-4 text-left pt-8 sm:pt-0">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                {content.sectionTitle} <br />
                <span className="text-[#A3E635]">{content.sectionTitleAccent}</span>
              </h2>

              <p className="text-sm sm:text-lg text-zinc-300 font-normal leading-relaxed">
                {content.subtitle}
              </p>
            </div>
            )}
          </div>

          {/* Right Column: White Form Section */}
          <div className="relative lg:col-span-7 bg-white p-5 sm:p-9 space-y-5 sm:space-y-6 text-black flex flex-col justify-between">

            {/* Full-Width Organic Wave Background Pattern */}
            <WaveCardPattern />

            {/* Bottom Green Ambient Gradient Overlay */}
            <CardBottomGradient />

            {/* Exact Official Registered Address & Contact Details Box */}
            {/* <div className="relative z-10 bg-zinc-50 rounded-xl p-3.5 sm:p-5 border border-zinc-200/90 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-black font-bold text-[11px] sm:text-sm uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#526E07] shrink-0" />
                MASTER FORM DIES MANUFACTURING COMPANY PVT LTD
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-700 font-mono leading-relaxed space-y-1 pl-6 font-medium">
                <div>2/284, MANNATHOOR P.O., NEAR GOVERNMENT AYURVEDA HOSPITAL, ERNAKULAM-686667, KERALA, INDIA</div>
                <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs">
                  <span><strong>Email:</strong> <a href="mailto:info@masterformdies.com" className="text-[#526E07] hover:underline">info@masterformdies.com</a></span>
                  <span><strong>Mob:</strong> <a href="tel:+917025839776" className="text-black hover:underline">+917025839776</a>, <a href="tel:+966536897613" className="text-black hover:underline">+966536897613</a></span>
                </div>
              </div>
            </div> */}

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4 text-left">

              {/* Inputs Grid: Full Name & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800 block pl-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all text-left"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800 block pl-1">
                    Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="alex@company.com"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all text-left"
                  />
                </div>

              </div>

              {/* Service Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800 block pl-1">
                  Required Core Expertise *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-white border border-zinc-300 rounded-lg text-black px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all text-left cursor-pointer"
                >
                  <option className="bg-white text-black">Precision Die Manufacturing</option>
                  <option className="bg-white text-black">Tooling & Mold Design</option>
                  <option className="bg-white text-black">Custom Metal Working & Machining</option>
                  <option className="bg-white text-black">Component Prototyping</option>
                </select>
              </div>

              {/* Project Notes Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-800 block pl-1">
                  Project Notes & Drawing Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Component design details, tolerances, or site visit request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-400 p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all resize-none text-left"
                />
              </div>

              {error && (
                <p className="text-xs sm:text-sm font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              {/* Primary Action Reusable Button */}
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                isLoading={isSubmitting}
                icon={<ArrowRight className="w-4.5 h-4.5" />}
                iconPosition="right"
                className="mt-2"
              >
                Contact Our Technical Team
              </Button>

            </form>
          </div>

        </div>

      </div>

      {/* Confirmation Modal */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="bg-[#0d0d0d] rounded-2xl w-full max-w-md p-8 space-y-6 text-center relative text-white shadow-2xl border border-zinc-800">
            <div className="w-12 h-12 mx-auto bg-[#111111] rounded-full flex items-center justify-center text-[#A3E635]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Inquiry Submitted
              </h3>
              <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                Thank you <span className="text-white font-bold">{formData.fullName}</span>. Our technical team at Master Form Dies is reviewing your request.
              </p>
            </div>

            <Button
              onClick={() => setSubmitted(false)}
              variant="primary"
              size="md"
              fullWidth
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
