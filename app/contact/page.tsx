import React from "react";
import type { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import InnerHero from "@/components/global/InnerHero";
import InnerCtaForm from "@/components/global/PageCtaForm";
import SvgDice from "@/components/global/SvgDice";
import { getContact, getCtaContact, getSeo } from "@/lib/api";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const DEFAULT_TITLE = "Contact Us | Master Form Dies";
const DEFAULT_DESCRIPTION =
  "Contact Master Form Dies for custom die and mold manufacturing enquiries. Reach our engineering team by phone, WhatsApp, email or visit our facility in Ernakulam, Kerala, India.";
const DEFAULT_KEYWORDS =
  "contact Master Form Dies, die manufacturing enquiry, mold manufacturing contact, die engineering team, sheet metal die maker contact, tool and die company Ernakulam";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("contact", { fresh: true });

  return {
    title: seo?.title || DEFAULT_TITLE,
    description: seo?.description || DEFAULT_DESCRIPTION,
    keywords: seo?.keywords || DEFAULT_KEYWORDS,
  };
}

const FALLBACK = {
  companyName: "MASTER FORM DIES MANUFACTURING COMPANY PVT LTD",
  address:
    "2/284, MANNATHOOR P.O., NEAR GOVERNMENT AYURVEDA HOSPITAL, ERNAKULAM-686667, KERALA, INDIA",
  contact1: "+91 7025839776",
  contact2: "+966 536897613",
  email: "info@masterformdies.com",
  hours: "Mon - Sat: 8:30 AM - 6:00 PM",
};

// Full-Width Organic Vector Wave Background Component (Dark Theme Version)
const WaveCardPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none text-[#6B910C] opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 overflow-hidden"
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

const CardBottomGradient = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#6B910C]/25 via-transparent to-transparent pointer-events-none rounded-2xl group-hover:from-[#6B910C]/40 transition-all duration-500" />
);

export default async function ContactPage() {
  const contact = await getContact({ fresh: true });
  const ctaContact = await getCtaContact({ fresh: true });
  const companyName = contact?.companyName || FALLBACK.companyName;
  const address = contact?.address || FALLBACK.address;
  const contact1 = contact?.contact1 || FALLBACK.contact1;
  const contact2 = contact?.contact2 || FALLBACK.contact2;
  const email = contact?.email || FALLBACK.email;
  const hours = contact?.hours || FALLBACK.hours;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#526E07] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* Inner Hero Section */}
        <InnerHero
          badgeText="Get In Touch"
          title={
            <>
              Contact Our <br /><span className="text-[#A3E635]">Engineering Team</span>
            </>
          }
          bgImage="/contact-page/hero.png"
        />

        {/* Contact Details Grid Section (Dark Mode with Wave BG) */}
        <section id="contact-details-grid" className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
              <SvgDice size="sm" interactive={false} />
              <span className="text-xs sm:text-base font-semibold text-white tracking-wide">
                Reach Us Directly
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Facility Address <br /><span className="text-[#A3E635]">& Support Lines</span>
            </h2>
          </div>

          {/* Clean 3-Column Equal Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch">
            {/* Card 1: Registered Company Address */}
            <div className="group relative bg-[#0d0d0d] rounded-2xl p-5 sm:p-7 lg:p-9 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between border border-zinc-800 hover:border-zinc-600 shadow-2xl text-left overflow-hidden hover:bg-[#121212] transition-all duration-500">
              <WaveCardPattern />
              <CardBottomGradient />

              {/* Header Row: Title on Left, Icon Box on Right */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-wide">
                  Registered <br />Address
                </h3>
                <div className="p-3 sm:p-3.5 bg-[#161616] text-[#A3E635] rounded-xl border border-zinc-800 shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Card Body Details */}
              <div className="space-y-2.5 relative z-10 pt-4 sm:pt-6">
                <p className="text-[11px] sm:text-xs lg:text-sm text-zinc-200 font-semibold leading-relaxed uppercase">
                  {companyName}
                </p>
                <p className="text-[11px] sm:text-xs lg:text-sm text-zinc-300 font-semibold leading-relaxed uppercase">
                  {address}
                </p>
              </div>
            </div>

            {/* Card 2: Mobile & Phone Support Lines */}
            <div className="group relative bg-[#0d0d0d] rounded-2xl p-5 sm:p-7 lg:p-9 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between border border-zinc-800 hover:border-zinc-600 shadow-2xl text-left overflow-hidden hover:bg-[#121212] transition-all duration-500">
              <WaveCardPattern />
              <CardBottomGradient />

              {/* Header Row: Title on Left, Icon Box on Right */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-wide">
                  Mobile <br />& Phone Lines
                </h3>
                <div className="p-3 sm:p-3.5 bg-[#161616] text-[#A3E635] rounded-xl border border-zinc-800 shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Card Body Details */}
              <div className="space-y-3 relative z-10 pt-4 sm:pt-6">
                <div className="text-sm sm:text-base text-zinc-100 font-sans font-semibold tracking-wide leading-relaxed space-y-2">
                  <a href={`tel:${contact1.replace(/[^+\d]/g, "")}`} className="block text-zinc-100 hover:text-white transition-colors">
                    {contact1}
                  </a>
                  <a href={`tel:${contact2.replace(/[^+\d]/g, "")}`} className="block text-zinc-100 hover:text-white transition-colors">
                    {contact2}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Email Inquiries & Operating Hours */}
            <div className="group relative bg-[#0d0d0d] rounded-2xl p-5 sm:p-7 lg:p-9 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between border border-zinc-800 hover:border-zinc-600 shadow-2xl text-left overflow-hidden hover:bg-[#121212] transition-all duration-500">
              <WaveCardPattern />
              <CardBottomGradient />

              {/* Header Row: Title on Left, Icon Box on Right */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-wide">
                  Email <br /> Inquiries
                </h3>
                <div className="p-3 sm:p-3.5 bg-[#161616] text-[#A3E635] rounded-xl border border-zinc-800 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
              </div>

              {/* Card Body Details */}
              <div className="space-y-4 relative z-10 pt-4">
                <div>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs sm:text-sm text-zinc-100 hover:text-white font-sans font-semibold tracking-normal leading-normal block transition-colors break-all sm:break-normal"
                  >
                    {email}
                  </a>
                </div>

                <div className="pt-3 border-t border-zinc-800/80">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-semibold">
                    <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                    <span>{hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section using PageCtaForm */}
        <InnerCtaForm data={ctaContact} />

        {/* Boxed Google Map Section (Dark Mode) */}
        <section className="w-full space-y-8 sm:space-y-12 lg:space-y-16 bg-[#050505] border-t border-zinc-900 py-12 sm:py-20 lg:py-24">
          <div className="space-y-4 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#111111] rounded-full border border-zinc-800">
              <SvgDice size="sm" interactive={false} />
              <span className="text-xs sm:text-base font-semibold text-white tracking-wide">
                Facility Map
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Locate Our <br /><span className="text-[#A3E635]">Manufacturing Plant</span>
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="w-full h-[320px] sm:h-[450px] lg:h-[520px] relative border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]">
              <iframe
                title="Master Form Dies Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.803732641042!2d76.5412!3d9.9482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTYnNTMuNSJOIDc2wrAzMicyNC4zIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full invert-[0.9] hue-rotate-180 contrast-[1.25] hover:invert-0 hover:hue-rotate-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

