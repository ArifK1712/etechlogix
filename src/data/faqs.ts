export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What kind of companies does eTechLogix work with?",
    answer:
      "We work with SMEs and enterprise organisations across the United States, primarily in healthcare, event technology, retail, manufacturing, and professional services. Our clients typically have complex operational challenges, legacy systems that need modernising, or ambitious digital products they need to build — and they're looking for a technology partner rather than just a delivery vendor.",
  },
  {
    id: "faq-2",
    category: "AI",
    question: "How is eTechLogix's AI work different from generic AI tools or off-the-shelf chatbots?",
    answer:
      "We build AI solutions that are grounded in your specific data, workflows, and compliance requirements — not generic tools layered on top of a standard API. Whether it's a document intelligence platform, an AI agent that connects your internal systems, or a predictive model trained on your operational data, everything we build is designed for your business context, not a demo environment.",
  },
  {
    id: "faq-3",
    category: "AI",
    question: "Is the AI work you deliver compliant with industry regulations like HIPAA?",
    answer:
      "Yes. We have experience building AI and software platforms in regulated industries including healthcare. We design for data privacy, security, and compliance requirements from the outset — including HIPAA-aligned architectures, audit logging, access controls, and appropriate data handling practices.",
  },
  {
    id: "faq-4",
    category: "Services",
    question: "Can eTechLogix help modernise our legacy systems without disrupting operations?",
    answer:
      "Yes — and this is one of the areas where we have deep experience. We use phased migration strategies, strangler-fig patterns, and parallel-running environments to modernise legacy systems incrementally. Our approach is designed to avoid big-bang migrations and keep your business running throughout the transition.",
  },
  {
    id: "faq-5",
    category: "Services",
    question: "What does a dedicated engineering team from eTechLogix look like in practice?",
    answer:
      "A dedicated team is a group of engineers, designers, cloud specialists, and technical leads who work exclusively on your product, integrated into your delivery process and tools. Teams are sized to your needs — from a focused two-person squad to a full product team. We operate on your sprint cadence, attend your standups, and work as an extension of your organisation.",
  },
  {
    id: "faq-6",
    category: "Process",
    question: "What does the engagement process look like from initial conversation to delivery?",
    answer:
      "We start with a discovery call to understand your goals, challenges, and existing environment. From there we produce a scoped proposal covering approach, team structure, timeline, and investment. Engagements follow a Discover → Design → Build → Improve model, with regular checkpoints, demos, and transparent progress reporting throughout.",
  },
  {
    id: "faq-7",
    category: "Process",
    question: "Do you take on short-term projects or only long-term engagements?",
    answer:
      "Both. We take on focused project engagements — such as building a specific platform, delivering an AI proof-of-concept, or completing a cloud migration — as well as ongoing partnership arrangements with dedicated teams. The right model depends on your goals, and we're happy to discuss the options that fit your situation.",
  },
  {
    id: "faq-8",
    category: "General",
    question: "Where is eTechLogix based and where do you work?",
    answer:
      "eTechLogix is headquartered in Arizona, United States. We work with clients across the US and internationally, operating with distributed teams and remote-first delivery. Our engineering capability spans multiple time zones, which means you get both proximity and round-the-clock delivery when you need it.",
  },
  {
    id: "faq-9",
    category: "AI",
    question: "How long does it typically take to deliver an AI solution?",
    answer:
      "It depends significantly on the complexity and scope. A focused AI pilot or proof-of-concept can be delivered in four to eight weeks. A production-ready AI system integrated into existing infrastructure typically takes three to six months. We can advise on realistic timelines after a discovery session where we understand your specific requirements and data environment.",
  },
  {
    id: "faq-10",
    category: "Services",
    question: "Can you integrate AI into our existing software platforms rather than building from scratch?",
    answer:
      "Absolutely. AI integration — adding intelligence to your existing ERP, CRM, healthcare, or other enterprise platforms — is one of our core capabilities. We connect AI models to your existing data and workflows through well-designed APIs and integration layers, so you get the benefit of AI without needing to replace systems that already work.",
  },
];
