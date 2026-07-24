export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  outcomes: string[];
  href: string;
}

export const services: Service[] = [
  {
    id: "ai-automation",
    icon: "Brain",
    title: "Agentic AI & Workflow Automation",
    description:
      "AI agents that connect systems, process information, execute multi-step workflows, manage exceptions, and support human approvals.",
    outcomes: [
      "Autonomous multi-step AI agents",
      "Intelligent document processing",
      "Human-in-the-loop exception routing",
      "Cross-platform workflow execution",
    ],
    href: "#ai-solutions",
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: "Enterprise Custom Software",
    description:
      "Business-critical platforms, portals, applications, APIs, and operational systems built around complex enterprise requirements.",
    outcomes: [
      "Event & conference platforms",
      "ERP & distribution systems",
      "Healthcare software solutions",
      "High-concurrency web & SaaS",
    ],
    href: "/contact",
  },
  {
    id: "enterprise-integrations",
    icon: "Database",
    title: "Enterprise Integrations",
    description:
      "Secure integrations across Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP platforms, healthcare systems, cloud services, and custom APIs.",
    outcomes: [
      "Salesforce & MuleSoft integrations",
      "Descartes & Avalara connectors",
      "DMSi Agility & ERP integration",
      "Cloud services & custom APIs",
    ],
    href: "/contact",
  },
  {
    id: "cloud-modernisation",
    icon: "Cloud",
    title: "Legacy System Modernisation",
    description:
      "Phased application modernisation, cloud migration, data migration, performance improvements, and technical-debt reduction without disrupting operations.",
    outcomes: [
      "Phased application re-architecture",
      "Zero-downtime data migration",
      "Cloud migration & DevOps",
      "Technical debt reduction",
    ],
    href: "/contact",
  },
  {
    id: "dedicated-teams",
    icon: "Users",
    title: "Dedicated Engineering Teams",
    description:
      "Senior engineers, architects, designers, and AI specialists who take ownership and work as an extension of the client’s internal team.",
    outcomes: [
      "Senior engineering squads",
      "Engineers who think like owners",
      "Cloud & AI specialists",
      "Seamless team extension",
    ],
    href: "/contact",
  },
  {
    id: "startup-mvps",
    icon: "Zap",
    title: "Startup Prototypes & MVPs",
    description:
      "Clickable prototypes, functional demos, and scalable MVPs built for customer validation, investor presentations, and fundraising conversations.",
    outcomes: [
      "Interactive functional demos",
      "Production-ready MVPs",
      "Investor pitch preparation",
      "Rapid 2–4 week delivery",
    ],
    href: "#startups",
  },
];
