import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AiSection } from "@/components/home/AiSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { StartupSection } from "@/components/home/StartupSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <AiSection />
      <IndustriesSection />
      <IntegrationsSection />
      <StartupSection />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}
