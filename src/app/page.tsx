import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AiSection } from "@/components/home/AiSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InsightsSection } from "@/components/home/InsightsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustBar />
      <AiSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <InsightsSection />
    </>
  );
}
