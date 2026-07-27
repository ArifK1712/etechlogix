export interface ProcessStage {
  num: string;
  title: string;
  description: string;
}

export interface ServiceProcessProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  stages: ProcessStage[];
}

export function ServiceProcess({
  eyebrow = "DELIVERY APPROACH",
  heading,
  headingAccent,
  description,
  stages,
}: ServiceProcessProps) {
  return (
    <section 
      className="relative z-10 w-full py-16 lg:py-24 bg-gray-50 border-t border-gray-200 text-black overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="process-heading" className="text-black font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Single Connected Process Line — NOT EIGHT SEPARATE BOXES */}
        <div className="relative">
          
          {/* Continuous Connecting Line (Desktop) */}
          <div 
            className="absolute top-7 left-8 right-8 h-0.5 bg-gradient-to-r from-[#df012a] via-gray-300 to-[#df012a] hidden lg:block" 
            aria-hidden="true" 
          />

          {/* Stepped Process List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage) => (
              <div 
                key={stage.num}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#df012a]/40 transition-all duration-200 group"
              >
                <div>
                  {/* Stage Bullet & Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#fbeaec] text-[#df012a] font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#df012a] group-hover:text-white transition-colors duration-200">
                      {stage.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                      STAGE {stage.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {stage.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
