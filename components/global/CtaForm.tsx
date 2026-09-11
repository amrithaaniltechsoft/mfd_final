"use client";

import React, { useState } from "react";
import SvgDice from "./SvgDice";
import Button from "../ui/Button";
import { submitEnquiry, type Contact, type CtaContact } from "@/lib/api";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";

// Full-Width Organic Vector Wave Background Component (Light Theme Version)
const WaveCardPattern = () => (
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
);

// Green Bottom Ambient Gradient Overlay (Seamless Full Card Coverage)
const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#526E07]/30 via-transparent to-transparent pointer-events-none rounded-xl group-hover:from-[#526E07]/45 transition-all duration-500" />
);

const DEFAULT_DATA: CtaContact = {
  badgeLabel: "Contact Information",
  sectionTitle: "Inquiries &",
  sectionTitleAccent: "Design Consultations",
  subtitle: "Contact our technical team for custom project quotes, design consultations, or site visits.",
};

const DEFAULT_CONTACT: Contact = {
  companyName: "MASTER FORM DIES MANUFACTURING COMPANY PVT LTD",
  address: "2/284, MANNATHOOR P.O., NEAR GOVERNMENT AYURVEDA HOSPITAL, ERNAKULAM-686667, KERALA, INDIA",
  email: "info@masterformdies.com",
  contact1: "+917025839776",
  contact2: "+966536897613",
  whatsapp: null,
  hours: null,
};

export default function CtaForm({
  data,
  contact,
}: {
  data?: CtaContact | null;
  contact?: Contact | null;
}) {
  const content: CtaContact = {
    badgeLabel: data?.badgeLabel ?? DEFAULT_DATA.badgeLabel,
    sectionTitle: data?.sectionTitle ?? DEFAULT_DATA.sectionTitle,
    sectionTitleAccent: data?.sectionTitleAccent ?? DEFAULT_DATA.sectionTitleAccent,
    subtitle: data?.subtitle ?? DEFAULT_DATA.subtitle,
  };

  const companyName = contact?.companyName ?? DEFAULT_CONTACT.companyName;
  const address = contact?.address ?? DEFAULT_CONTACT.address;
  const email = contact?.email ?? DEFAULT_CONTACT.email;
  const phone1 = contact?.contact1 ?? DEFAULT_CONTACT.contact1;
  const phone2 = contact?.contact2 ?? DEFAULT_CONTACT.contact2;
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
    <section id="quote-section" className="w-full bg-white text-black py-20 lg:py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 2-Column Grid: Header & 3D Dice on Left, Unified Form Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Header, Description, and 3D Dice Slot */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-start text-left">

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#f3f4f6] rounded-full border border-zinc-300 w-fit">
              <SvgDice size="sm" interactive={false} />
              <span className="text-sm sm:text-base font-semibold text-black tracking-wide">
                {content.badgeLabel}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                {content.sectionTitle} <br />
                <span className="text-[#526E07]">{content.sectionTitleAccent}</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-900 font-medium leading-relaxed max-w-lg">
                {content.subtitle}
              </p>
            </div>

            {/* 3D Dice Landing Slot directly below header copy */}
            <div
              id="cta-dice-slot"
              className="w-full h-[200px] sm:h-[320px] lg:h-[400px] relative flex justify-center items-center pointer-events-none"
            />

          </div>

          {/* Right Column: Unified Form Card (Matching Light Mode Cards) */}
          <div className="group relative lg:col-span-6 bg-[#f3f4f6] rounded-xl p-7 sm:p-9 space-y-6 text-black shadow-sm overflow-hidden border border-zinc-200 transition-all hover:bg-[#e5e7eb]">

            {/* Full-Width Organic Wave Background Pattern */}
            <WaveCardPattern />

            {/* Bottom Green Ambient Gradient Overlay */}
            <CardBottomGradient />

            {/* Exact Official Registered Address & Contact Details Box */}
            <div className="relative z-10 bg-zinc-50 rounded-xl p-4 sm:p-5 border border-zinc-200/90 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-black font-bold text-xs sm:text-sm uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#526E07] shrink-0" />
                {companyName}
              </div>
              <div className="text-xs text-zinc-700 font-mono leading-relaxed space-y-1 pl-6 font-medium">
                <div>{address}</div>
                <div className="pt-1 flex flex-wrap gap-x-4 gap-y-1 font-sans text-xs">
                  {email && (
                    <span><strong>Email:</strong> <a href={`mailto:${email}`} className="text-[#526E07] hover:underline">{email}</a></span>
                  )}
                  <span><strong>Mob:</strong> <a href={`tel:${phone1}`} className="text-black hover:underline">{phone1}</a>, <a href={`tel:${phone2}`} className="text-black hover:underline">{phone2}</a></span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-4 text-left">

              {/* Inputs Grid: Full Name & Contact Info */}
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
                    className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-500 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all text-left"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
                    Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="alex@company.com"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-500 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all text-left"
                  />
                </div>

              </div>

              {/* Service Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
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
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black block pl-1">
                  Project Notes & Drawing Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Component design details, tolerances, or site visit request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-zinc-300 rounded-lg text-black placeholder:text-zinc-500 p-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526E07] transition-all resize-none text-left"
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
          <div className="bg-white rounded-2xl w-full max-w-md p-8 space-y-6 text-center relative text-black shadow-2xl border border-zinc-200">
            <div className="w-12 h-12 mx-auto bg-[#f3f4f6] rounded-full flex items-center justify-center text-[#526E07]">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black tracking-tight">
                Inquiry Submitted
              </h3>
              <p className="text-sm text-zinc-900 font-medium leading-relaxed">
                Thank you <span className="text-black font-bold">{formData.fullName}</span>. Our technical team at Master Form Dies is reviewing your request.
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
