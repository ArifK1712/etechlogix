export interface CapabilityItem {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface ServiceCapabilitiesProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  capabilities: CapabilityItem[];
}

export function ServiceCapabilities({
  eyebrow = "CORE CAPABILITIES",
  heading,
  headingAccent,
  description,
  capabilities,
}: ServiceCapabilitiesProps) {
  return (
    <section 
      id="capabilities"
      className="relative z-10 w-full py-16 lg:py-24 bg-white text-black overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="capabilities-heading" className="text-black font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Vertical Capability Index List — NO CARDS OR BOXED GRIDS */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
            >
              {/* Index & Title */}
              <div className="lg:col-span-4 flex items-start gap-4">
                <span className="font-mono text-sm font-bold text-[#df012a] tracking-wider pt-0.5">
                  {cap.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#df012a] transition-colors duration-200">
                  {cap.title}
                </h3>
              </div>

              {/* Description & Key Deliverables */}
              <div className="lg:col-span-8 space-y-4">
                <p className="text-gray-700 text-base leading-relaxed">
                  {cap.description}
                </p>

                {/* Deliverable Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cap.deliverables.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-800"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#df012a]" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
