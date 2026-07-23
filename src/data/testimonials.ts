export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    company: "MediFlow Health",
    industry: "Healthcare",
    initials: "SM",
    quote:
      "eTechLogix didn't just build us software — they fundamentally changed how our clinical operations team works. The document intelligence platform they delivered processes records in seconds that used to take our team hours. The quality of engineering and the depth of understanding they brought to a highly regulated environment was exceptional.",
  },
  {
    id: "t2",
    name: "James Okafor",
    role: "VP of Product & Engineering",
    company: "Nexus Events Group",
    industry: "Event Technology",
    initials: "JO",
    quote:
      "We'd worked with several agencies before eTechLogix and always ended up with something that partially worked. This team actually understood the complexity of our event logistics — and built a platform that scales to 10,000+ registrations in a session without breaking a sweat. They're genuinely a long-term technology partner.",
  },
  {
    id: "t3",
    name: "Rebecca Torres",
    role: "Director of Digital Transformation",
    company: "Meridian Manufacturing",
    industry: "Enterprise Operations",
    initials: "RT",
    quote:
      "Migrating a 15-year-old ERP system while keeping the business running felt impossible. eTechLogix made it happen — zero production downtime, our team was onboarded in days, and we cut infrastructure costs in half. The new system gives us real-time visibility we've never had before. I can't recommend them highly enough.",
  },
  {
    id: "t4",
    name: "David Vance",
    role: "Head of AI Infrastructure",
    company: "Apex Commerce Solutions",
    industry: "Retail & E-commerce",
    initials: "DV",
    quote:
      "The AI recommendation and predictive inventory engine built by eTechLogix transformed our fulfillment operations. We saw a 35% reduction in stockout events during peak sales season. Their engineering team is disciplined, communicative, and focused on tangible ROI.",
  },
  {
    id: "t5",
    name: "Elena Rostova",
    role: "Managing Director",
    company: "Global Logistics Advisory",
    industry: "Professional Services",
    initials: "ER",
    quote:
      "Working with eTechLogix was a breath of fresh air. They automated our client onboarding and compliance document validation workflows seamlessly. What used to take a week of manual back-and-forth is now completed automatically within minutes.",
  },
];
