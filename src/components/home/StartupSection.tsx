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
    stageName: "STAGE 01 — DEFINE",
    title: "Define",
    description: "Clarify the product idea, target audience, core user workflow, and the functionality that matters most before any design or development begins.",
    deliverable: "Product scope & user workflow map",
  },
  {
    num: "02",
    stageName: "STAGE 02 — PROTOTYPE",
    title: "Prototype",
    description: "Create an interactive and realistic product experience that can be used for validation, investor demonstrations, and early customer conversations.",
    deliverable: "Clickable prototype & pitch-ready visual",
  },
  {
    num: "03",
    stageName: "STAGE 03 — BUILD",
    title: "Build",
    description: "Turn the validated concept into a functional and scalable product foundation ready for early users, real feedback, and continued development.",
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
        <div className="mb-12 lg:mb-14 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            STARTUP PROTOTYPE DEVELOPMENT
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="startups-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            Turn your idea into a product{" "}
            <span className="text-[#df012a]">investors can experience.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We help founders move from concept to a working product experience — designed for validation, customer conversations, and fundraising.
          </p>
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

        {/* ─── CTA ─── */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#df012a] hover:gap-3 transition-all duration-200 group"
            aria-label="Discuss your startup product idea"
          >
            Discuss your product idea
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
