import { ArrowRight, Bot, Server, Rocket } from "lucide-react";

interface ProofCard {
  id: string;
  icon: typeof Bot;
  category: string;
  title: string;
  description: string;
  resultLabel: string;
  result: string;
  linkText: string;
  href: string;
}

const proofCards: ProofCard[] = [
  {
    id: "agentic-ai",
    icon: Bot,
    category: "Agentic AI",
    title: "Automating a complex enterprise workflow",
    description: "AI agents processed documents, applied business rules, routed approvals and updated connected systems.",
    resultLabel: "BUSINESS IMPACT",
    result: "Millions in operational savings enabled",
    linkText: "View case study",
    href: "/work",
  },
  {
    id: "enterprise-integration",
    icon: Server,
    category: "Enterprise Integration",
    title: "Connecting fragmented business platforms",
    description: "Integrated ERP, CRM, operational systems and external services into one dependable workflow.",
    resultLabel: "BUSINESS IMPACT",
    result: "Reduced duplicate work and manual data movement",
    linkText: "View case study",
    href: "/work",
  },
  {
    id: "startup-product",
    icon: Rocket,
    category: "Startup Product",
    title: "From concept to investor-ready product demo",
    description: "Designed and built a functional prototype that helped the founding team demonstrate the product clearly.",
    resultLabel: "BUSINESS IMPACT",
    result: "Faster validation and stronger fundraising conversations",
    linkText: "View case study",
    href: "/work",
  },
];

export function CaseStudiesSection() {
  return (
    <section
      id="work"
      className="relative z-10 w-full py-16 lg:py-20 bg-white text-black overflow-hidden border-t border-gray-100"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            SELECTED PROOF
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="proof-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            Enterprise software that delivers{" "}
            <span className="text-[#df012a]">measurable outcomes.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A few examples of how we have helped organisations automate workflows, connect critical systems and launch new digital products.
          </p>
        </div>

        {/* ─── 3 COMPACT PROOF CARDS (Equal-Height Grid) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
          {proofCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className="bg-white border border-gray-200 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:border-[#df012a]/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Category & Small Lucide Icon */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#df012a] font-mono">
                      {card.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black tracking-tight leading-snug mb-3 group-hover:text-[#df012a] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Business Impact Box & Link */}
                <div>
                  <div className="p-4 rounded-2xl bg-[#fbeaec]/60 border border-[#df012a]/20 mb-4">
                    <span className="block text-[10px] font-mono font-bold uppercase text-[#df012a] tracking-wider mb-1">
                      {card.resultLabel}
                    </span>
                    <p className="font-bold text-gray-900 leading-tight">
                      {card.result}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df012a] hover:text-black transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* ─── UNDERSTATED LINK BELOW CARDS ─── */}
        <div className="text-center pt-2">
          <a
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#df012a] transition-colors py-2 px-4 rounded-full border border-gray-200 hover:border-[#df012a]/40 bg-gray-50/50"
          >
            View all case studies <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
