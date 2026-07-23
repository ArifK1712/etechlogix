import { Zap, Scale, BarChart2, Smile } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const outcomes = [
  {
    icon: Zap,
    title: "Operational efficiency",
    description:
      "Automate repetitive tasks, reduce manual errors, and free your team to focus on work that matters. Our clients routinely see 50–90% reductions in manual processing time.",
  },
  {
    icon: Scale,
    title: "Scalability without friction",
    description:
      "Build on foundations that grow with your ambitions — cloud-native architectures that handle 10x traffic without platform rethinks or emergency refactoring.",
  },
  {
    icon: BarChart2,
    title: "Better decisions, faster",
    description:
      "Replace gut feel and stale reports with real-time dashboards, AI-generated insights, and predictive signals that surface the right information at the right moment.",
  },
  {
    icon: Smile,
    title: "Exceptional user experiences",
    description:
      "Products and tools that people actually want to use — designed around real workflows, tested with real users, and continuously refined based on real behaviour.",
  },
];

export function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="py-15 md:py-20 bg-[#fbeaec]"
      aria-labelledby="outcomes-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Business Outcomes"
          title="The results that"
          titleHighlight="actually matter."
          description="We measure success by your outcomes, not our deliverables. Here's what our clients gain from working with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 flex gap-5 items-start hover:shadow-lg transition-shadow duration-300 border border-[#df012a]/10"
            >
              <div className="w-12 h-12 bg-[#fbeaec] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <outcome.icon size={22} className="text-[#df012a]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-black text-lg mb-2">{outcome.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{outcome.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
