import { ServicePageHero } from "@/components/services/ServicePageHero";
import { WhyCustomSoftwareSection } from "@/components/services/WhyCustomSoftwareSection";
import { CustomSoftwareCapabilitiesSection } from "@/components/services/CustomSoftwareCapabilitiesSection";
import { IntegrationReadySection } from "@/components/services/IntegrationReadySection";
import { CustomSoftwareInActionSection } from "@/components/services/CustomSoftwareInActionSection";

export const metadata = {
  title: "Enterprise Custom Software Development | eTechLogix",
  description:
    "eTechLogix designs and builds secure, scalable custom software for enterprise workflows, integrations, healthcare, events, ERP, distribution, and legacy modernisation.",
  alternates: {
    canonical: "https://www.etechlogix.com/services/custom-software",
  },
  openGraph: {
    title: "Enterprise Custom Software Development | eTechLogix",
    description:
      "eTechLogix designs and builds secure, scalable custom software for enterprise workflows, integrations, healthcare, events, ERP, distribution, and legacy modernisation.",
    url: "https://www.etechlogix.com/services/custom-software",
    siteName: "eTechLogix",
    images: [
      {
        url: "https://www.etechlogix.com/hero-enterprise-software.png",
        width: 1200,
        height: 630,
        alt: "eTechLogix Enterprise Custom Software Development",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Custom Software Development | eTechLogix",
    description:
      "eTechLogix designs and builds secure, scalable custom software for enterprise workflows, integrations, healthcare, events, ERP, distribution, and legacy modernisation.",
    images: ["https://www.etechlogix.com/hero-enterprise-software.png"],
  },
};

export default function CustomSoftwareServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.etechlogix.com/services/custom-software#webpage",
        url: "https://www.etechlogix.com/services/custom-software",
        name: "Enterprise Custom Software Development | eTechLogix",
        description:
          "eTechLogix designs and builds secure, scalable custom software for enterprise workflows, integrations, healthcare, events, ERP, distribution, and legacy modernisation.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.etechlogix.com/services/custom-software#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.etechlogix.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.etechlogix.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Enterprise Custom Software",
            item: "https://www.etechlogix.com/services/custom-software",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Enterprise Custom Software Development",
        provider: {
          "@type": "Organization",
          name: "eTechLogix",
          url: "https://www.etechlogix.com",
        },
        description:
          "Engineering custom enterprise web applications, operational platforms, event management systems, ERP connectors, and HIPAA-compliant healthcare software.",
        serviceType: "Custom Software Engineering",
      },
    ],
  };

  return (
    <main className="w-full bg-white text-black overflow-hidden pt-20">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Custom Software Hero */}
      <ServicePageHero
        eyebrow="ENTERPRISE CUSTOM SOFTWARE"
        heading="Software built"
        headingAccent="your business."
        description="We design and build secure, scalable software for complex enterprise workflows, connected systems, and modernisation initiatives."
        primaryCtaText="Discuss Your Project"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
      />

      {/* 2. Why Custom Software Workflow Section */}
      <WhyCustomSoftwareSection />

      {/* 3. Custom Software Capabilities Grid Section */}
      <CustomSoftwareCapabilitiesSection />

      {/* 4. Integration-Ready Section */}
      <IntegrationReadySection />

      {/* 5. Custom Software in Action Section */}
      <CustomSoftwareInActionSection />
    </main>
  );
}
