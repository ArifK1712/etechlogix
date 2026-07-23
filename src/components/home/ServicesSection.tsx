import {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
};

export function ServicesSection() {
  const aiService = services.find((s) => s.id === "ai-automation") || services[0];
  const supportingServices = services.filter((s) => s.id !== "ai-automation");

  return (
    <section
      id="services"
      className="py-15 md:py-20 bg-white relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── TOP SECTION: Eyebrow, Heading, Paragraph (Centered) ─── */}
        <div className="mb-12 md:mb-16 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            WHAT WE DO
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 text-black"
          >
            Engineering capabilities built around{" "}
            <span className="text-[#df012a]">business outcomes.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We don&apos;t sell technology — we solve business problems. Here are the five areas where we deliver the most value.
          </p>
        </div>

        {/* Asymmetric Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ─── LEFT: Main Featured Capability (AI & Intelligent Automation) ─── */}
          <article className="lg:col-span-6 xl:col-span-5 bg-black text-white rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between border border-white/10 group">
            {/* Subtle background red glow */}
            <div
              className="absolute -top-24 -right-24 w-96 h-96 bg-[#df012a]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#df012a]/30 transition-colors duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#df012a]/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              {/* Featured Badge */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#df012a] text-white text-xs font-bold uppercase tracking-widest shadow-md">
                  <Sparkles size={14} className="animate-pulse" />
                  Flagship Capability
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <Brain size={22} className="text-[#df012a]" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {aiService.title}
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
                {aiService.description}
              </p>

              {/* Key Highlights / Outcomes list */}
              <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#df012a] mb-3">
                  Core AI Capabilities Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aiService.outcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="flex items-center gap-2.5 text-sm text-white/90 font-medium"
                    >
                      <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA bar */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Zap size={14} className="text-[#df012a]" />
                <span>Production-ready enterprise AI models & agents</span>
              </div>
              <a
                href={aiService.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#df012a] text-white text-sm font-bold rounded-xl hover:bg-[#b8001f] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] shadow-lg group-hover:gap-3"
                aria-label={`Explore ${aiService.title}`}
              >
                Explore AI Solutions <ArrowRight size={16} />
              </a>
            </div>
          </article>

          {/* ─── RIGHT: 4 Supporting Capability Cards (2x2 Grid) ─── */}
          <div className="lg:col-span-6 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {supportingServices.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <article
                  key={service.id}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#df012a]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Accent border bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#df012a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div>
                    {/* Icon */}
                    <div className="w-11 h-11 bg-[#fbeaec] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#df012a] transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[#df012a] group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-black text-lg mb-2 leading-snug group-hover:text-[#df012a] transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-base leading-relaxed mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key Outcome Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.outcomes.slice(0, 2).map((outcome) => (
                        <span
                          key={outcome}
                          className="px-2 py-0.5 rounded-md bg-[#fbeaec] text-[#df012a] text-xs font-semibold"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df012a] group-hover:gap-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn capability <ArrowRight size={13} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
