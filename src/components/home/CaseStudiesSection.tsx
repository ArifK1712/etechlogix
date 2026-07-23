import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CaseStudyStory {
  num: string;
  industry: string;
  tag: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  href: string;
}

const featuredStories: CaseStudyStory[] = [
  {
    num: "01",
    industry: "Healthcare Technology",
    tag: "Document Intelligence",
    title: "AI-Powered Medical Document Processing Platform",
    challenge:
      "A regional healthcare network was manually processing thousands of patient intake forms, referral documents, and insurance authorisations — creating bottlenecks, errors, and compliance risk.",
    solution:
      "We built a secure document intelligence platform using custom ML models to extract, classify, and validate structured data from unstructured medical documents — integrating directly with their EHR system.",
    metrics: [
      { label: "Faster Processing", value: "94%" },
      { label: "Error Reduction", value: "87%" },
      { label: "Hours Saved / Month", value: "2,000+" },
    ],
    technologies: ["Python", "Azure AI", "FastAPI", "React", "PostgreSQL"],
    href: "/work/healthcare-document-intelligence",
  },
  {
    num: "02",
    industry: "Event Technology",
    tag: "Custom Software Engineering",
    title: "Enterprise Event Management Platform",
    challenge:
      "A growing event management company was running operations across four disconnected tools, causing data loss, double bookings, and a poor attendee experience at scale.",
    solution:
      "We architected and delivered a unified event management platform covering registration, session management, sponsor portals, and real-time reporting — built for high concurrency.",
    metrics: [
      { label: "Events Managed Annually", value: "150+" },
      { label: "Overhead Reduced", value: "60%" },
      { label: "Registrations / Hour", value: "10,000+" },
    ],
    technologies: ["Next.js", "Node.js", "AWS", "PostgreSQL", "Redis"],
    href: "/work/event-platform",
  },
];

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="relative z-10 w-full py-14 lg:py-20 bg-white text-black overflow-hidden"
      aria-labelledby="work-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-10 lg:mb-14 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            SELECTED WORK
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="work-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(44px,4.5vw,60px)] leading-[1.05] tracking-tight mb-4"
          >
            Real problems.{" "}
            <span className="text-[#df012a]">Measured outcomes.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Detailed stories of complex software engineering, AI deployment, and enterprise modernisation delivered for our clients.
          </p>
        </div>
        {/* ─── CONSISTENT 3-COLUMN EDITORIAL CASE STUDY ROWS ─── */}
        <div className="space-y-6">
          {featuredStories.map((story) => (
            <article
              key={story.num}
              className="bg-[#fbeaec]/40 border border-[#df012a]/15 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative p-5 rounded-4xl"
            >
              {/* Column 1: Case Number, Industry Label, Project Title (4 Cols = ~33%) */}
              <div className="lg:col-span-4 pr-0 lg:pr-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-xl lg:text-2xl font-mono font-bold text-[#df012a]">
                    {story.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#df012a]">
                    {story.industry}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-snug">
                  {story.title}
                </h3>
              </div>

              {/* Column 2: Challenge, Solution, Stack (5 Cols = ~42%) */}
              <div className="lg:col-span-5 space-y-3">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#df012a] mb-0.5">
                    The Challenge
                  </span>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-black mb-0.5">
                    Our Solution
                  </span>
                  <p className="text-gray-900 text-sm sm:text-base font-medium leading-relaxed">
                    {story.solution}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs font-mono text-gray-400 mr-1">STACK:</span>
                  {story.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Column 3: Compact Metrics & CTA Link (3 Cols = ~25%) */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full pt-1 lg:pl-6 border-t lg:border-t-0 lg:border-l border-gray-200 gap-4">
                {/* 3 Compact Metrics */}
                <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-3">
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-bold text-[#df012a] tracking-tight leading-none">
                        {metric.value}
                      </span>
                      <span className="text-xs font-semibold text-black uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Case Study Link */}
                <div className="pt-2 border-t border-gray-100 lg:border-t-0 lg:pt-0">
                  <a
                    href={story.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#df012a] hover:underline"
                  >
                    View case study <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
