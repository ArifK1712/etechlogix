import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const insights = [
  {
    id: "ai-integration-guide",
    tag: "AI Solutions",
    readTime: "8 min read",
    title: "How to evaluate AI automation opportunities in your business",
    excerpt:
      "Not every process should be automated, and not every AI initiative will deliver a positive return. Here's a practical framework for identifying where AI genuinely creates value — and where it doesn't.",
    imageSrc: "/hero-ai.png",
    imageAlt: "AI Automation Evaluation Framework Workspace",
    href: "/insights/ai-automation-evaluation",
  },
  {
    id: "legacy-modernisation",
    tag: "Cloud & Modernisation",
    readTime: "6 min read",
    title: "Legacy modernisation without a big-bang rewrite",
    excerpt:
      "Replacing a core system all at once is rarely the right answer. The strangler-fig approach lets you modernise incrementally, with lower risk and continuous delivery value throughout the process.",
    imageSrc: "/hero-cloud.png",
    imageAlt: "Cloud Architecture and Legacy Modernisation",
    href: "/insights/legacy-modernisation-approach",
  },
  {
    id: "healthcare-ai",
    tag: "Healthcare",
    readTime: "10 min read",
    title: "AI in healthcare operations: What's working and what isn't",
    excerpt:
      "Practical observations from healthcare software projects — which AI applications are generating real ROI, which are still early-stage experiments, and what the compliance considerations look like in practice.",
    imageSrc: "/industry-healthcare.png",
    imageAlt: "Digital Healthcare AI Operations",
    href: "/insights/healthcare-ai-operations",
  },
];

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="py-15 md:py-20 bg-white"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-10 lg:mb-14 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            INSIGHTS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="insights-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(44px,4.5vw,60px)] leading-[1.05] tracking-tight mb-4"
          >
            Thinking that{" "}
            <span className="text-[#df012a]">informs better work.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Practical perspectives on AI, software engineering, cloud, and the decisions that shape digital product outcomes.
          </p>
        </div>

        {/* 3 Aligned Insight Cards with Equal Heights & Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {insights.map((article) => (
            <article key={article.id} className="flex flex-col h-full">
              <a
                href={article.href}
                className="group flex flex-col h-full bg-white border border-gray-200/80 rounded-2xl overflow-hidden hover:border-[#df012a]/40 hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
              >
                {/* High-Resolution Article Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Content & Aligned Read Link */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-[#fbeaec]/40 text-[#df012a] text-xs font-bold rounded-md">
                        {article.tag}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-black text-lg leading-snug mb-3 group-hover:text-[#df012a] transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{article.excerpt}</p>
                  </div>

                  {/* Aligned Bottom Read Link */}
                  <div className="pt-4 border-t border-gray-100 flex items-center gap-1.5 text-sm font-bold text-[#df012a] group-hover:gap-2.5 transition-all duration-200">
                    Read article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/insights"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-black text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-[#df012a] transition-colors duration-200 shadow-sm hover:gap-3"
          >
            View All Insights <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
