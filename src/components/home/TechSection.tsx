import { SectionHeader } from "@/components/ui/SectionHeader";
import { technologies } from "@/data/technologies";

export function TechSection() {
  return (
    <section
      id="technologies"
      className="py-15 md:py-20 bg-black"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology Ecosystem"
          title="The tools that power"
          titleHighlight="your solutions."
          description="We work across a broad and carefully chosen stack — selecting the right technology for each problem rather than defaulting to familiar tools."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((group) => (
            <div
              key={group.category}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#df012a]/30 transition-colors duration-300"
            >
              <h3 className="text-[#df012a] font-bold text-xs uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-white/8 border border-white/10 text-white/80 text-sm font-medium rounded-lg hover:border-[#df012a]/40 hover:text-white hover:bg-[#df012a]/10 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
