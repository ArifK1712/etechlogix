export interface Industry {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  description: string;
  imageSrc: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    id: "events-conferences",
    icon: "Calendar",
    title: "Events & Conferences",
    badge: "Industry Sector",
    description:
      "Registration, ticketing, attendee management, mobile apps, on-site operations, meetings, engagement, and event reporting.",
    imageSrc: "/industry-events.png",
    services: ["Registration & Ticketing", "On-Site Operations", "Event Reporting"],
  },
  {
    id: "erp-distribution",
    icon: "ShoppingBag",
    title: "ERP & Distribution",
    badge: "Industry Sector",
    description:
      "Order management, inventory, pricing, warehouse operations, logistics, finance, tax, and connected distribution workflows.",
    imageSrc: "/industry-retail.png",
    services: ["Order Management", "Warehouse Operations", "Logistics & Tax"],
  },
  {
    id: "healthcare",
    icon: "HeartPulse",
    title: "Healthcare",
    badge: "Industry Sector",
    description:
      "Secure healthcare workflows, document processing, operational automation, system integrations, and compliance-sensitive platforms.",
    imageSrc: "/industry-healthcare.png",
    services: ["HIPAA Workflows", "Document Processing", "System Integrations"],
  },
  {
    id: "enterprise-operations",
    icon: "Building2",
    title: "Enterprise Operations",
    badge: "Business Environment",
    description:
      "Internal portals, approvals, workflow management, reporting, document processing, and business automation.",
    imageSrc: "/industry-enterprise-operations.png",
    services: ["Internal Portals", "Approval Workflows", "Business Automation"],
  },
  {
    id: "enterprise-integrations",
    icon: "Server",
    title: "Enterprise Integrations",
    badge: "Solution Environment",
    description:
      "Connected solutions across Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP systems, healthcare platforms, cloud services, and custom APIs.",
    imageSrc: "/industry-enterprise-integrations.png",
    services: ["Salesforce & MuleSoft", "Descartes & Avalara", "ERP & Cloud APIs"],
  },
  {
    id: "startups-digital-products",
    icon: "Rocket",
    title: "Startups & Digital Products",
    badge: "Business Environment",
    description:
      "Clickable prototypes, functional demos, SaaS platforms, MVPs, customer validation, and scalable product foundations.",
    imageSrc: "/industry-startups-digital-products.png",
    services: ["Clickable Prototypes", "Functional Demos", "Scalable MVPs"],
  },
];
