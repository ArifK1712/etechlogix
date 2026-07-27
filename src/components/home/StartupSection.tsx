import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface StartupStage {
  num: string;
  stageName: string;
  title: string;
  description: string;
  deliverable: string;
}

const startupStages: StartupStage[] = [
  {
    num: "01",
    stageName: "STAGE 01 — CONCEPT",
    title: "Prototype",
    description: "Define the concept, user journeys, product experience, and core value proposition.",
    deliverable: "Clickable UX/UI prototype & pitch visual",
  },
  {
    num: "02",
    stageName: "STAGE 02 — VALIDATION",
    title: "Functional Demo",
    description: "Build a working product experience that founders can demonstrate to customers, partners, and investors.",
    deliverable: "Working interactive demo with live data",
  },
  {
    num: "03",
    stageName: "STAGE 03 — LAUNCH",
    title: "MVP",
    description: "Develop a scalable product foundation ready for early users, feedback, and future growth.",
    deliverable: "Production-ready software & cloud setup",
  },
];

export function StartupSection() {
  return (
    <section
      id="startups"
      className="py-16 lg:py-20 bg-white text-black border-t border-gray-100 relative overflow-hidden"
      aria-labelledby="startups-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            FOR STARTUPS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="startups-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            Turn your idea into a product{" "}
            <span className="text-[#df012a]">investors can experience.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            We help founders move from concept to clickable prototype, functional demo, and scalable MVP—creating a credible product experience for customer validation, partner discussions, and fundraising presentations.
          </p>

          {/* Compact Proof Statement */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#fbeaec] border border-[#df012a]/20 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm max-w-2xl mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse flex-shrink-0" />
            <span>
              Helping startups enter fundraising conversations with a{" "}
              <strong className="text-[#df012a]">working product</strong> instead of only a presentation.
            </span>
          </div>
        </div>

        {/* ─── THREE-STAGE PROGRESSION GRID ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {startupStages.map((stage) => (
            <div
              key={stage.num}
              className="bg-[#fbeaec]/40 border border-[#df012a]/15 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-[#df012a]/40 transition-all duration-300 shadow-sm group"
            >
              <div>
                {/* Stage Number & Name */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono font-bold text-3xl text-[#df012a] opacity-50">
                    {stage.num}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#df012a]">
                    {stage.stageName}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black tracking-tight mb-3 group-hover:text-[#df012a] transition-colors">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable Label */}
              <div className="pt-4 border-t border-gray-200/80 flex items-center gap-2 font-semibold text-gray-900">
                <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTAs ─── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-[#df012a] transition-all duration-200 shadow-md hover:gap-3"
          >
            Build Your Startup Product <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-black text-sm font-bold rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
          >
            Discuss Your Idea
          </Link>
        </div>

      </div>
    </section>
  );
}
