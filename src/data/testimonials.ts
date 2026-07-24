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
      "eTechLogix brought deep domain understanding to a complex, compliance-heavy environment. Their document intelligence platform processes intake records in seconds that used to take our team hours. Their engineers take true ownership of outcomes.",
  },
  {
    id: "t2",
    name: "James Okafor",
    role: "VP of Product & Engineering",
    company: "Nexus Events Group",
    category: "Custom Enterprise Platform",
    initials: "JO",
    quote:
      "Unlike typical agencies, eTechLogix understood the operational complexity of our event logistics. They engineered a unified platform scaling smoothly to 10,000+ registrations per hour without breaking a sweat. A dependable long-term partner.",
  },
  {
    id: "t3",
    name: "Rebecca Torres",
    role: "Director of Digital Transformation",
    company: "Meridian Manufacturing",
    category: "Legacy ERP Modernisation",
    initials: "RT",
    quote:
      "Modernising a 15-year-old ERP system while keeping our business running felt daunting. eTechLogix executed a phased cloud migration with zero production downtime, giving us real-time operational visibility across supply and finance.",
  },
  {
    id: "t4",
    name: "David Vance",
    role: "Head of AI Operations",
    company: "Apex Distribution Solutions",
    category: "Agentic AI & Workflow Automation",
    initials: "DV",
    quote:
      "The Agentic AI workflow automation eTechLogix deployed connected our CRM, ERP, and logistics tools seamlessly. Their autonomous agents handle multi-step order validations and exception routing, saving us significant operational overhead.",
  },
  {
    id: "t5",
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "Vantage Tech Labs",
    category: "Startup MVP & Prototype Engineering",
    initials: "ER",
    quote:
      "eTechLogix turned our concept into a high-fidelity functional MVP in just 4 weeks. Having a working product to demonstrate directly changed the tone of our customer validation and investor fundraising discussions.",
  },
];
