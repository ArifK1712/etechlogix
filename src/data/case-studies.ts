export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  systems: string[];
  humanCheckpoint?: string;
  verifiedOutcome: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "agentic-ai-automation",
    category: "AGENTIC AI & WORKFLOW AUTOMATION",
    title: "AI-powered workflow automation for complex business operations.",
    description:
      "A secure Agentic AI solution that processes business information, applies workflow rules, coordinates tasks across systems, manages exceptions, and supports human approvals.",
    problem:
      "Unstructured incoming documents and multi-step manual data entry causing operational backlogs and delayed approvals across business units.",
    solution:
      "Autonomous AI agents that extract key entities, validate rules against database records, execute cross-system API actions, and route threshold exceptions for 1-click manager approvals.",
    systems: ["Salesforce", "Enterprise ERPs", "OCR Engines", "Custom APIs"],
    humanCheckpoint: "Threshold exceptions and high-value approvals automatically escalated to designated human managers.",
    verifiedOutcome: "Millions in operational savings achieved through drastic reduction in manual processing, errors, and delays.",
  },
  {
    id: "enterprise-platform-integration",
    category: "ERP, LOGISTICS & ENTERPRISE INTEGRATIONS",
    title: "A connected enterprise platform built for mission-critical operations.",
    description:
      "A scalable custom solution connecting business workflows, users, data, and enterprise systems in one reliable operational environment.",
    problem:
      "Fragmented inventory, order processing, and tax compliance across isolated sales, distribution, and warehouse platforms.",
    solution:
      "Unified enterprise integration platform linking DMSi Agility ERP, Descartes supply chain tracking, Avalara tax engine, and Salesforce CRM into a single real-time data flow.",
    systems: ["DMSi Agility", "Descartes", "Avalara", "Salesforce", "MuleSoft"],
    verifiedOutcome: "Unified real-time operational visibility, eliminated data silos, and zero downtime order execution.",
  },
];
