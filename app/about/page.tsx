import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutDescription from "@/components/about/AboutDescription";
import CoreExpertise from "@/components/about/CoreExpertise";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import { getCms, getCoreExpertise, getSeo, getWhyChooseUs } from "@/lib/api";

const DEFAULT_TITLE = "About Us | Master Form Dies";
const DEFAULT_DESCRIPTION =
  "Master Form Dies Manufacturing Company Pvt Ltd is a precision engineering enterprise in Ernakulam, Kerala, specializing in custom die manufacturing, tool design, precision machining and component prototyping.";
const DEFAULT_KEYWORDS =
  "about Master Form Dies, precision engineering company Kerala, die manufacturing company Ernakulam, tool and die maker, custom mold manufacturing India";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("about", { fresh: true });

  return {
    title: seo?.title || DEFAULT_TITLE,
    description: seo?.description || DEFAULT_DESCRIPTION,
    keywords: seo?.keywords || DEFAULT_KEYWORDS,
  };
}

export default async function AboutPage() {
  const cms = await getCms("about", { fresh: true });
  const whyChooseUs = await getWhyChooseUs({ fresh: true });
  const coreExpertise = await getCoreExpertise({ fresh: true });
  const bannerImage = cms?.image || "/about-page/banner.png";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#526E07] selection:text-white">
      <Header />

      <main className="flex-1 w-full relative">
        <AboutHero />
        <AboutDescription heading={cms?.title} contentHtml={cms?.content} />
        <CoreExpertise data={coreExpertise} />

        {/* Full-Width Banner Image */}
        <section className="w-full relative h-[220px] sm:h-[360px] md:h-[480px] lg:h-[620px] overflow-hidden bg-black">
          <Image
            src={bannerImage}
            alt="Master Form Dies Banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </section>

        <WhyChooseUs data={whyChooseUs} />
      </main>

      <Footer />
    </div>
  );
}
