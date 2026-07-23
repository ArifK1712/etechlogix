export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  tag: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "healthcare-document-intelligence",
    industry: "Healthcare",
    tag: "Document Intelligence",
    title: "AI-Powered Medical Document Processing Platform",
    challenge:
      "A regional healthcare network was manually processing thousands of patient intake forms, referral documents, and insurance authorisations — creating bottlenecks, errors, and compliance risk.",
    solution:
      "We designed and built a secure document intelligence platform using custom ML models to extract, classify, and validate structured data from unstructured medical documents — integrating directly with their existing EHR system.",
    outcome:
      "Processing time reduced from hours to seconds, error rates dropped significantly, and the clinical operations team redirected over 2,000 hours per month to patient-facing work.",
    metrics: [
      { label: "Faster Processing", value: "94%" },
      { label: "Error Reduction", value: "87%" },
      { label: "Hours Saved / Month", value: "2,000+" },
    ],
    technologies: ["Python", "Azure AI", "FastAPI", "React", "PostgreSQL"],
  },
  {
    id: "event-platform",
    industry: "Event Technology",
    tag: "Custom Software Engineering",
    title: "Enterprise Event Management Platform",
    challenge:
      "A growing event management company was running their operations across four disconnected tools, causing data loss, double bookings, and a poor attendee experience at scale.",
    solution:
      "We architected and delivered a unified event management platform — covering registration, session management, attendee communication, sponsor portals, and real-time reporting — built for high concurrency and white-labelled deployment.",
    outcome:
      "The platform now powers over 150 events annually, processes thousands of registrations per hour, and has reduced operational overhead by more than 60%.",
    metrics: [
      { label: "Events Managed Annually", value: "150+" },
      { label: "Operational Overhead Reduced", value: "60%" },
      { label: "Registrations / Hour", value: "10,000+" },
    ],
    technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    id: "erp-modernisation",
    industry: "Enterprise Operations",
    tag: "Cloud & Modernisation",
    title: "Legacy ERP Modernisation & Cloud Migration",
    challenge:
      "A mid-market manufacturing company was running a 15-year-old on-premises ERP system that could no longer support their growth, integration requirements, or remote workforce.",
    solution:
      "We executed a phased modernisation programme — re-architecting the core ERP modules as cloud-native services, migrating data with zero production downtime, and delivering a modern React-based interface with real-time operational dashboards.",
    outcome:
      "The organisation moved to a fully cloud-hosted environment with 99.9% uptime, halved their infrastructure costs, and enabled real-time operational visibility for the first time.",
    metrics: [
      { label: "Infrastructure Cost Reduction", value: "50%" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Downtime During Migration", value: "Zero" },
    ],
    technologies: ["React", "Azure", "Node.js", ".NET Core", "SQL Server", "Terraform"],
  },
];
