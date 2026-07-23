export interface ProcessStep {
  step: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
  activities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    phase: "Discover",
    title: "Understand the problem deeply",
    icon: "Search",
    description:
      "We invest time understanding your business, users, existing systems, and goals before writing a line of code. Good software starts with a clear problem definition.",
    activities: [
      "Stakeholder workshops",
      "Technical environment review",
      "User and workflow research",
      "Goal and constraint mapping",
    ],
  },
  {
    step: 2,
    phase: "Design",
    title: "Architect a clear path forward",
    icon: "PenTool",
    description:
      "We design the system architecture, data model, UX flows, and technical approach — creating a blueprint that your team can review and validate before any engineering begins.",
    activities: [
      "System architecture design",
      "UX and interface design",
      "Data and integration mapping",
      "Technology selection",
    ],
  },
  {
    step: 3,
    phase: "Build",
    title: "Deliver with engineering rigour",
    icon: "Hammer",
    description:
      "We build iteratively in short cycles, with continuous testing, regular demos, and transparent progress. You see working software early and often — not just at the end.",
    activities: [
      "Agile sprint delivery",
      "Continuous integration",
      "Automated testing",
      "Regular stakeholder demos",
    ],
  },
  {
    step: 4,
    phase: "Improve",
    title: "Evolve as your business grows",
    icon: "TrendingUp",
    description:
      "After launch we monitor performance, gather real-world feedback, and continue improving the product. Great software is never finished — it gets better as you learn more.",
    activities: [
      "Performance monitoring",
      "User feedback integration",
      "Feature iteration",
      "Scaling and optimisation",
    ],
  },
];
