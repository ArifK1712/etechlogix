import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyCustomSoftwareSection } from "@/components/services/WhyCustomSoftwareSection";
import { EngineeringCapabilitiesSection } from "@/components/home/EngineeringCapabilitiesSection";
import { AiSection } from "@/components/home/AiSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { IntegrationReadySection } from "@/components/services/IntegrationReadySection";
import { StartupSection } from "@/components/home/StartupSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Header (rendered in RootLayout) */}

      {/* 2. Enterprise software and AI hero */}
      <HeroSection />

      {/* 3. Enterprise statistics/proof */}
      <TrustBar />

      {/* 4. When operations outgrow off-the-shelf software */}
      <WhyCustomSoftwareSection />

      {/* 5. Engineering capabilities */}
      <EngineeringCapabilitiesSection />

      {/* 6. Agentic AI workflow automation */}
      <AiSection />

      {/* 7. Industries and enterprise use cases */}
      <IndustriesSection />

      {/* 8. Existing technology ecosystem and integrations */}
      <IntegrationReadySection />

      {/* 9. Startup prototype development */}
      <StartupSection />

      {/* 10. Structured delivery approach */}
      <ProcessSection />

      {/* 11. Client testimonials or case-study proof */}
      <TestimonialsSection />

      {/* 12. Footer CTA and footer (rendered in RootLayout) */}
    </>
  );
}
