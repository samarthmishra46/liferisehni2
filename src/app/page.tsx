import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MovingStrip from "@/components/MovingStrip";
import AboutSection from "@/components/AboutSection";
import DoctorSection from "@/components/DoctorSection";
import WhoIsItForSection from "@/components/WhoIsItForSection";
import ProgramApproach from "@/components/ProgramApproach";
import BenefitsSection from "@/components/BenefitsSection";
import DigitalDelivery from "@/components/DigitalDelivery";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MovingStrip />
        <AboutSection />
        <DoctorSection />
        <WhoIsItForSection />
        <ProgramApproach />
        <BenefitsSection />
        <DigitalDelivery />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
