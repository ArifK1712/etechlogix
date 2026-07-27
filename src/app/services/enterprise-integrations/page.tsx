import { EnterpriseIntegrationsHero } from "@/components/services/EnterpriseIntegrationsHero";

export const metadata = {
  title: "Enterprise Integrations | eTechLogix",
  description:
    "Connect ERP, CRM, legacy applications, data platforms, and third-party services through secure, reliable enterprise integrations.",
  alternates: {
    canonical: "https://www.etechlogix.com/services/enterprise-integrations",
  },
  openGraph: {
    title: "Enterprise Integrations | eTechLogix",
    description:
      "Connect ERP, CRM, legacy applications, data platforms, and third-party services through secure, reliable enterprise integrations.",
    url: "https://www.etechlogix.com/services/enterprise-integrations",
    siteName: "eTechLogix",
    images: [
      {
        url: "https://www.etechlogix.com/hero-enterprise-integrations.png",
        width: 1200,
        height: 630,
        alt: "eTechLogix Enterprise System Integrations & Orchestration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Integrations | eTechLogix",
    description:
      "Connect ERP, CRM, legacy applications, data platforms, and third-party services through secure, reliable enterprise integrations.",
    images: ["https://www.etechlogix.com/hero-enterprise-integrations.png"],
  },
};

export default function EnterpriseIntegrationsServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.etechlogix.com/services/enterprise-integrations#webpage",
        url: "https://www.etechlogix.com/services/enterprise-integrations",
        name: "Enterprise Integrations | eTechLogix",
        description:
          "Connect ERP, CRM, legacy applications, data platforms, and third-party services through secure, reliable enterprise integrations.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.etechlogix.com/services/enterprise-integrations#breadcrumb",
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
            name: "Enterprise Integrations",
            item: "https://www.etechlogix.com/services/enterprise-integrations",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Enterprise System Integrations",
        provider: {
          "@type": "Organization",
          name: "eTechLogix",
          url: "https://www.etechlogix.com",
        },
        description:
          "Connecting enterprise ERP, CRM, legacy applications, data platforms, and third-party APIs with MuleSoft, event-driven architecture, and secure connectors.",
        serviceType: "Enterprise System Integration",
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

      {/* Enterprise Integrations Hero */}
      <EnterpriseIntegrationsHero />
    </main>
  );
}
