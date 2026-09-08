import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import CatalogSection from "@/components/catalog-section";
import AdvantagesSection from "@/components/advantages-section";
import ProcessSection from "@/components/process-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-red-600 focus:px-4 focus:py-3 focus:text-white"
      >
        Перейти к содержимому
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <CatalogSection />
        <ProcessSection />
        <AdvantagesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
