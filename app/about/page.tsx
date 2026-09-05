import React from "react";
import Image from "next/image";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutDescription from "@/components/about/AboutDescription";
import CoreExpertise from "@/components/about/CoreExpertise";
import WhyChooseUs from "@/components/about/WhyChooseUs";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#526E07] selection:text-white">
      <Header />

      <main className="flex-1 w-full relative">
        <AboutHero />
        <AboutDescription />
        <CoreExpertise />

        {/* Full-Width Banner Image */}
        <section className="w-full relative h-[220px] sm:h-[360px] md:h-[480px] lg:h-[620px] overflow-hidden bg-black">
          <Image
            src="/about-page/banner.png"
            alt="Master Form Dies Banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </section>

        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
