import Header from "@/components/global/Header";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import CapabilitiesGrid from "@/components/home/CapabilitiesGrid";
import TrustBar from "@/components/home/TrustBar";
import FacilitySection from "@/components/home/FacilitySection";
import AdvantagesGrid from "@/components/home/AdvantagesGrid";
import CtaForm from "@/components/global/CtaForm";
import Footer from "@/components/global/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#526E07] selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <CapabilitiesGrid />
        <TrustBar />
        <FacilitySection />
        <AdvantagesGrid />
        <CtaForm />
      </main>
      <Footer />
    </div>
  );
}
