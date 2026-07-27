export interface IntegrationSystem {
  category: string;
  systems: string[];
  routeDescription: string;
}

export interface ServiceIntegrationsProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  integrations: IntegrationSystem[];
  centralLabel?: string;
}

export function ServiceIntegrations({
  eyebrow = "SYSTEM INTEGRATIONS",
  heading,
  headingAccent,
  description,
  integrations,
  centralLabel = "Custom Enterprise Platform",
}: ServiceIntegrationsProps) {
  return (
    <section 
      className="relative z-10 w-full py-16 lg:py-24 bg-white text-black overflow-hidden"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="integrations-heading" className="text-black font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Connected Ecosystem Topology Map — NO LOGO CARDS */}
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-10 border border-gray-800 text-white relative overflow-hidden">
          
          {/* Central Platform Spine Header */}
          <div className="text-center pb-8 border-b border-white/10 mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#df012a] block mb-1">
              CENTRAL ORCHESTRATION HUB
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {centralLabel}
            </h3>
          </div>

          {/* Integration Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((group) => (
              <div 
                key={group.category}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#df012a]/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#df012a] tracking-wider block mb-2">
                    {group.category}
                  </span>
                  
                  {/* System Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {group.systems.map((sys) => (
                      <span
                        key={sys}
                        className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-xs font-semibold text-gray-200"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-mono pt-3 border-t border-white/10">
                  {group.routeDescription}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
