import { AboutSection } from "@/components/AboutSection";
import { DentistSection } from "@/components/DentistSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <DentistSection />
        <ReviewsSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
