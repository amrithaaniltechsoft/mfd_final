"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Button from "../ui/Button";
import { getContact, getFooterAbout, getProducts, type Contact } from "@/lib/api";
import type { Product } from "@/data/products";
import { MapPin, ChevronRight } from "lucide-react";

const DEFAULT_ABOUT =
  "Specializing in delivering high-precision engineering solutions, high-grade die manufacturing, and custom tooling designed to meet the rigorous demands of modern manufacturing.";

const DEFAULT_CONTACT: Contact = {
  companyName: "MASTER FORM DIES MANUFACTURING COMPANY PVT LTD",
  address: "2/284, MANNATHOOR P.O., NEAR GOVERNMENT AYURVEDA HOSPITAL, ERNAKULAM-686667, KERALA, INDIA",
  email: "info@masterformdies.com",
  contact1: "+917025839776",
  contact2: "+966536897613",
  whatsapp: null,
  hours: null,
};

const DEFAULT_PRODUCTS: { slug: string; label: string }[] = [
  { slug: "multi-cavity-stamping-die-block", label: "Stamping Die Blocks" },
  { slug: "high-tolerance-progressive-mould", label: "Progressive Moulds" },
  { slug: "tungsten-carbide-insert-die", label: "Tungsten Carbide Tools" },
  { slug: "precision-plastic-injection-mould", label: "Injection Mould Cores" },
];

export default function Footer() {
  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [contact, setContact] = useState<Contact | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [aboutText, setAboutText] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let active = true;
    getContact({ fresh: true }).then((data) => {
      if (active && data) setContact(data);
    });
    getFooterAbout({ fresh: true }).then((data) => {
      if (active && data?.description) setAboutText(data.description);
    });
    getProducts({ fresh: true }).then((data) => {
      if (active) setProducts(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const companyName = contact?.companyName ?? DEFAULT_CONTACT.companyName;
  const address = contact?.address ?? DEFAULT_CONTACT.address;
  const email = contact?.email ?? DEFAULT_CONTACT.email;
  const phone1 = contact?.contact1 ?? DEFAULT_CONTACT.contact1;
  const phone2 = contact?.contact2 ?? DEFAULT_CONTACT.contact2;
  const about = aboutText ?? DEFAULT_ABOUT;

  const footerProducts =
    products && products.length > 0
      ? products.slice(0, 4).map((p) => ({ slug: p.slug, label: p.title }))
      : DEFAULT_PRODUCTS;

  const scrollToSection = (id: string) => {
    if (id === "about-us") {
      router.push("/about");
      return;
    }

    if (id === "quote-section") {
      if (pathname === "/contact") {
        const el = document.getElementById("quote-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/contact#quote-section");
      }
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black text-white relative overflow-hidden">

      {/* 1. TOP HERO CTA BLOCK */}
      <div className="relative w-full py-20 sm:py-28 px-6 text-center bg-gradient-to-b from-black via-[#0a1204] to-black">

        {/* Ambient Top Light Beam Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#526E07]/20 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10 flex flex-col items-center">

          {/* Top Center Hero Visual Logo Image */}
          <div className="relative w-64 sm:w-[420px] lg:w-[480px] h-24 sm:h-36 lg:h-40 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo/logo4.png"
              alt="Master Form Dies Hero Logo Visual"
              fill
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 420px, 480px"
              className="object-contain object-center brightness-110"
              priority
            />
          </div>


          {/* Headline & Inquiries Subtitle */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact Our Technical Team
            </h2>
            <p className="text-base sm:text-lg text-zinc-100 font-medium max-w-xl mx-auto leading-relaxed">
              Contact our technical team for custom project quotes, design consultations, or site visits.
            </p>
          </div>

          {/* Secondary White Variant Reusable Button */}
          <Button
            onClick={() => scrollToSection("quote-section")}
            variant="secondary"
            size="md"
            icon={<ChevronRight className="w-4 h-4 text-black" />}
            iconPosition="right"
          >
            Submit Technical Inquiry
          </Button>

        </div>
      </div>

      {/* 2. MIDDLE FOOTER NAVIGATION GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-12 border-b border-[#1f1f1f]">

          {/* Column 1: Exact Registered Address & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 h-6">
              <MapPin className="w-4 h-4 text-[#A3E635]" />
              <span>Registered Address</span>
            </h4>

            <div className="text-xs text-zinc-300 space-y-2 leading-relaxed font-mono">
              <div className="font-bold text-white uppercase">{companyName}</div>
              <div>{address}</div>
              <div className="pt-1 font-sans space-y-1 text-xs">
                <div><strong>Email:</strong> <a href={`mailto:${email}`} className="text-[#A3E635] hover:underline">{email}</a></div>
                <div><strong>Mob:</strong> <a href={`tel:${phone1}`} className="hover:text-white transition-colors">{phone1}</a>, <a href={`tel:${phone2}`} className="hover:text-white transition-colors">{phone2}</a></div>
              </div>
            </div>
          </div>

          {/* Column 2: About Us Summary */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white h-6 flex items-center">About Us</h4>
            <p className="text-xs sm:text-sm text-zinc-200 font-normal leading-relaxed">
              {about}
            </p>
            <button
              onClick={() => scrollToSection("about-us")}
              className="inline-block text-xs sm:text-sm font-semibold text-white hover:text-[#A3E635] transition-colors pt-1 cursor-pointer"
            >
              Read About Us &rarr;
            </button>
          </div>

          {/* 2-Column Row on Mobile View for Products & Quick Links */}
          <div className="grid grid-cols-2 gap-6 sm:gap-10 col-span-1 md:col-span-2 lg:col-span-2">
            {/* Column 3: Products */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white h-6 flex items-center">Products</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 font-medium">
                {footerProducts.map((p) => (
                  <li key={p.slug}>
                    <button
                      onClick={() => router.push(`/products/${p.slug}`)}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {p.label}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/products")}
                className="inline-block text-xs sm:text-sm font-semibold text-[#A3E635] hover:text-white transition-colors pt-2 cursor-pointer"
              >
                View All Products &rarr;
              </button>
            </div>

            {/* Column 4: Quick Navigation & Location */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white h-6 flex items-center">Quick Links</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200 font-medium">
                <li><button onClick={() => scrollToSection("hero")} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollToSection("about-us")} className="hover:text-white transition-colors cursor-pointer">About Us</button></li>
                <li><button onClick={() => router.push("/products")} className="hover:text-white transition-colors cursor-pointer">Products</button></li>
                <li><button onClick={() => router.push("/services")} className="hover:text-white transition-colors cursor-pointer">Services</button></li>
                <li><button onClick={() => scrollToSection("quote-section")} className="hover:text-white transition-colors cursor-pointer">Contact Us</button></li>
                <li><button onClick={() => setMapModalOpen(true)} className="hover:text-[#A3E635] transition-colors text-left font-semibold text-white cursor-pointer">View Ernakulam Facility Map</button></li>
              </ul>
            </div>
          </div>

        </div>

        {/* 3. BOTTOM LEGAL & COPYRIGHT BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300 font-medium">
          <div>
            Copyright &copy; {new Date().getFullYear()} Master Form Dies Manufacturing Company Pvt Ltd. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">

            <span>
              Web Designed By{" "}
              <a
                href="https://www.techsoftweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A3E635] hover:text-white font-semibold underline underline-offset-4 transition-colors"
              >
                Techsoft
              </a>
            </span>

            {/* <Button
              onClick={() => scrollToSection("hero")}
              variant="iconOnly"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </Button> */}
          </div>
        </div>

      </div>

      {/* Map Location Modal */}
      {mapModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="bg-[#0a0a0a] border border-[#526E07] rounded-md w-full max-w-xl p-6 space-y-4 text-white">
            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
              <div className="flex items-center gap-2 text-white font-semibold text-base">
                <MapPin className="w-5 h-5 text-white" />
                <span>Ernakulam Facility Location</span>
              </div>
              <button
                onClick={() => setMapModalOpen(false)}
                className="text-sm text-zinc-300 hover:text-white font-mono cursor-pointer"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="p-4.5 bg-[#050505] border border-[#222222] rounded-md space-y-2 text-sm font-mono">
              <div className="text-white font-semibold">Master Form Dies Manufacturing Company Pvt Ltd</div>
              <div className="text-zinc-200">Ward No. 2, Room No. 284</div>
              <div className="text-zinc-200">Mannathoor North P.O., Near Government Ayurveda Hospital</div>
              <div className="text-white font-bold">Ernakulam - 686667, Kerala, India</div>
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href="https://maps.google.com/?q=Mannathoor+Ernakulam+Kerala+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" size="sm">
                  Open in Google Maps &rarr;
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
