import Link from "next/link";
import {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
  Zap,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="pt-16 md:pt-20 bg-white relative border-t border-gray-100"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-12 md:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            ENGINEERING CAPABILITIES
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="services-heading"
            className="text-black font-bold text-[34px] sm:text-[44px] lg:text-[clamp(38px,4vw,54px)] leading-[1.08] tracking-tight mb-4"
          >
            Engineering capabilities built around{" "}
            <span className="text-[#df012a]">complex business operations.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We design, build, integrate, and modernise business-critical platforms using enterprise engineering and practical AI.
          </p>
        </div>

        {/* ─── BALANCED EQUAL 6-CARD GRID (3 Cols Desktop / 2 Cols Tablet / 1 Col Mobile) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service) => {
            const isPrimary = service.id === "ai-automation";
            const Icon = iconMap[service.icon] || Code2;

            if (isPrimary) {
              return (
                <article
                  key={service.id}
                  className="bg-black text-white border border-[#df012a]/40 rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden shadow-lg hover:border-[#df012a] transition-all duration-300 group"
                >
                  {/* Background Red Ambient Glow */}
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 bg-[#df012a]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#df012a]/30 transition-colors"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Icon & Primary Label */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center">
                        <Brain size={22} className="text-[#df012a]" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#df012a] text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                        <Sparkles size={12} className="animate-pulse" />
                        Primary Capability
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-xl mb-3 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-4 border-t border-white/15">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#df012a] hover:text-white transition-colors group-hover:gap-3"
                      aria-label={`Explore ${service.title}`}
                    >
                      Explore Agentic AI Solutions <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={service.id}
                className="bg-white border border-gray-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-[#df012a]/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#df012a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 bg-[#fbeaec] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#df012a] transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-[#df012a] group-hover:text-[#df012a] transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-black text-xl mb-3 leading-tight group-hover:text-[#df012a] transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#df012a] group-hover:gap-2.5 transition-all duration-200"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
