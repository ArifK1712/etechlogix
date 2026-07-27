export interface OutcomeItem {
  num: string;
  headline: string;
  description: string;
}

export interface ServiceOutcomesProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  outcomes: OutcomeItem[];
}

export function ServiceOutcomes({
  eyebrow = "BUSINESS OUTCOMES",
  heading,
  headingAccent,
  description,
  outcomes,
}: ServiceOutcomesProps) {
  return (
    <section 
      className="relative z-10 w-full py-16 lg:py-24 bg-white text-black overflow-hidden"
      aria-labelledby="outcomes-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="outcomes-heading" className="text-black font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Large Statement Callouts with Subtle Dividers — NO FAKE STATS OR CLIENT CLAIMS */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {outcomes.map((item) => (
            <div 
              key={item.num}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-gray-50 transition-colors duration-200 px-2 sm:px-4"
            >
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-[#df012a] bg-[#fbeaec] px-2.5 py-1 rounded-md">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {item.headline}
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
