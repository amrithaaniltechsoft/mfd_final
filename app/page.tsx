import Header from "@/components/global/Header";
import Hero from "@/components/home/Hero";
import ProductsSection from "@/components/home/ProductsSection";
import AboutSection from "@/components/home/AboutSection";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import TrustBar from "@/components/home/TrustBar";
import AdvantagesGrid from "@/components/home/AdvantagesGrid";
import CtaForm from "@/components/global/CtaForm";
import Footer from "@/components/global/Footer";
import type { Metadata } from "next";
import { getAboutSection, getAdvantages, getCapabilities, getContact, getCtaContact, getSeo, getWhyChooseUs } from "@/lib/api";

const DEFAULT_TITLE = "Master Form Dies Manufacturing Company Pvt Ltd | High-Precision Die & Tooling";
const DEFAULT_DESCRIPTION =
  "Delivering uncompromised quality, exact tolerances, and robust custom dies and tooling for modern industrial sectors from Ernakulam to the world.";
const DEFAULT_KEYWORDS =
  "Die Manufacturing,Custom Tooling,Precision Machining,CNC Milling,Mold Design,Ernakulam Engineering";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeo("home", { fresh: true });

  return {
    title: seo?.title || DEFAULT_TITLE,
    description: seo?.description || DEFAULT_DESCRIPTION,
    keywords: seo?.keywords || DEFAULT_KEYWORDS,
  };
}

export default async function Home() {
  const advantages = await getAdvantages({ fresh: true });
  const whyChooseUs = await getWhyChooseUs({ fresh: true });
  const capabilities = await getCapabilities({ fresh: true });
  const aboutSection = await getAboutSection({ fresh: true });
  const ctaContact = await getCtaContact({ fresh: true });
  const contact = await getContact({ fresh: true });

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#526E07] selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductsSection />
        <AboutSection data={aboutSection} />
        <CapabilitiesGrid data={capabilities} />
        <TrustBar data={whyChooseUs} />
        <AdvantagesGrid advantages={advantages} />
        <CtaForm data={ctaContact} contact={contact} />
      </main>
      <Footer />
    </div>
  );
}
