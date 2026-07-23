export interface Industry {
  id: string;
  icon: string;
  title: string;
  description: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    description:
      "Patient portals, clinical workflow automation, medical document intelligence, compliance-ready platforms, and AI-powered diagnostic support tools.",
    services: ["Document Intelligence", "AI Assistants", "Custom Platforms"],
  },
  {
    id: "event-technology",
    icon: "Calendar",
    title: "Event Technology",
    description:
      "End-to-end event management platforms, attendee experiences, registration systems, real-time dashboards, and hybrid event infrastructure.",
    services: ["Custom Software", "Integrations", "Data Engineering"],
  },
  {
    id: "retail-ecommerce",
    icon: "ShoppingBag",
    title: "Retail & E-Commerce",
    description:
      "AI-driven recommendation engines, inventory intelligence, personalised shopping experiences, and connected supply-chain and fulfilment systems.",
    services: ["Predictive AI", "Platform Engineering", "Data Pipelines"],
  },
  {
    id: "enterprise-operations",
    icon: "Building2",
    title: "Enterprise Operations",
    description:
      "ERP modernisation, intelligent process automation, cross-system data integration, workforce tools, and scalable enterprise application development.",
    services: ["Legacy Modernisation", "AI Agents", "Cloud Migration"],
  },
  {
    id: "professional-services",
    icon: "Briefcase",
    title: "Professional Services",
    description:
      "Knowledge management systems, document processing, client portals, billing and workflow automation for legal, financial, and consulting firms.",
    services: ["Document Intelligence", "Custom Portals", "AI Automation"],
  },
  {
    id: "infrastructure",
    icon: "Server",
    title: "Infrastructure & Utilities",
    description:
      "IoT data platforms, asset monitoring systems, field service applications, predictive maintenance, and cloud-native operational dashboards.",
    services: ["Data Engineering", "Cloud Platforms", "Predictive Analytics"],
  },
];
