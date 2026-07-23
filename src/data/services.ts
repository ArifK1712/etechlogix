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
    title: "AI & Intelligent Automation",
    description:
      "We design and deploy AI that works inside your real business operations — not proof-of-concept demos. From intelligent document processing to multi-step AI agents, we build solutions that reduce manual effort and improve decision quality.",
    outcomes: [
      "AI assistants & chatbots",
      "Document intelligence",
      "Intelligent workflow automation",
      "Predictive systems",
    ],
    href: "/services/ai-automation",
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: "Custom Software Engineering",
    description:
      "Scalable, secure, and purpose-built digital platforms designed around your users and processes. We architect and deliver web applications, SaaS products, enterprise systems, APIs, portals, and mobile solutions.",
    outcomes: [
      "Web & SaaS platforms",
      "Enterprise applications",
      "APIs & integrations",
      "Mobile solutions",
    ],
    href: "/services/custom-software",
  },
  {
    id: "cloud-modernisation",
    icon: "Cloud",
    title: "Cloud & Modernisation",
    description:
      "We help organisations move away from costly, fragile legacy systems and into modern, cloud-native architectures. Migration, re-platforming, DevOps implementation, and infrastructure optimisation — end to end.",
    outcomes: [
      "Legacy modernisation",
      "Cloud migration",
      "DevOps & CI/CD",
      "Infrastructure optimisation",
    ],
    href: "/services/cloud",
  },
  {
    id: "data-engineering",
    icon: "Database",
    title: "Data Engineering",
    description:
      "Clean, structured, and AI-ready data is the foundation of every good outcome. We build the pipelines, integrations, and data foundations your organisation needs to make confident decisions and power intelligent systems.",
    outcomes: [
      "Data pipelines & ETL",
      "System integration",
      "Analytics foundations",
      "AI-ready data preparation",
    ],
    href: "/services/data",
  },
  {
    id: "dedicated-teams",
    icon: "Users",
    title: "Dedicated Technology Teams",
    description:
      "Extend your team with experienced engineers, designers, architects, and cloud specialists who integrate directly with your organisation. Flexible engagement models built around your delivery cadence and product roadmap.",
    outcomes: [
      "Dedicated engineering squads",
      "Technical consultants",
      "Cloud & DevOps specialists",
      "Flexible team models",
    ],
    href: "/services/teams",
  },
];
