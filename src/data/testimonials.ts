export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "MediFlow Health",
    category: "Healthcare & Document Intelligence",
    initials: "SM",
    quote:
      "Our intake process involved significant manual effort across compliance-heavy documentation. eTechLogix built a document intelligence platform that processes patient records accurately and at speed, with automatic exception routing when clinical review is needed. Their engineers take genuine ownership of outcomes.",
  },
  {
    id: "t2",
    name: "James Okafor",
    role: "VP of Product & Engineering",
    company: "Nexus Events Group",
    category: "Custom Enterprise Platform",
    initials: "JO",
    quote:
      "Event operations involve far more complexity than most software vendors appreciate. eTechLogix understood our registration, exhibitor, and on-site workflows from the start. The platform they engineered handles large-scale concurrent registrations reliably and has become the operational foundation we run every event on.",
  },
  {
    id: "t3",
    name: "Rebecca Torres",
    role: "Director of Digital Transformation",
    company: "Meridian Manufacturing",
    category: "Legacy ERP Modernisation",
    initials: "RT",
    quote:
      "Modernising a 15-year-old ERP while keeping operations running was a real risk. eTechLogix executed a phased migration with zero production downtime, connected our supply chain and finance data, and gave our operations team real-time visibility they didn't have before.",
  },
  {
    id: "t4",
    name: "David Vance",
    role: "Head of AI Operations",
    company: "Apex Distribution Solutions",
    category: "Agentic AI & Workflow Automation",
    initials: "DV",
    quote:
      "We had order validation and exception handling spread across CRM, ERP, and logistics tools with significant manual coordination in between. The Agentic AI workflow eTechLogix built connects those systems, handles multi-step validations autonomously, and routes exceptions to the right people when intervention is needed.",
  },
  {
    id: "t5",
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Vantage Tech Labs",
    category: "Startup Prototype & MVP Engineering",
    initials: "ER",
    quote:
      "We needed a working product experience to validate our concept with customers and open investor conversations. eTechLogix helped us define the core workflow, built a high-fidelity interactive prototype, and moved quickly into a functional MVP. Having something real to demonstrate changed the quality of those early discussions entirely.",
  },
];
