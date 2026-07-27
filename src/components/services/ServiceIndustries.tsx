"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export interface IndustryApplication {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keySolutions: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface ServiceIndustriesProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  industries: IndustryApplication[];
}

export function ServiceIndustries({
  eyebrow = "INDUSTRY APPLICATIONS",
  heading,
  headingAccent,
  description,
  industries,
}: ServiceIndustriesProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = industries[activeIdx] || industries[0];

  return (
    <section 
      className="relative z-10 w-full py-16 lg:py-24 bg-gray-50 border-t border-gray-200 text-black overflow-hidden"
      aria-labelledby="industries-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="industries-heading" className="text-black font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Interactive Industry Showcase Grid: Image + Clean Vertical Selector List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Vertical Selector List */}
          <div className="lg:col-span-5 space-y-2 divide-y divide-gray-200 border-y border-gray-200">
            {industries.map((ind, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={ind.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left py-4 px-3 flex items-center justify-between transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded-lg ${
                    isSelected
                      ? "bg-white text-black font-bold border-l-4 border-l-[#df012a] pl-4 shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-white/50"
                  }`}
                >
                  <span className="text-base font-semibold">{ind.name}</span>
                  <ArrowRight
                    size={16}
                    className={`transition-transform duration-200 ${
                      isSelected ? "text-[#df012a] translate-x-1" : "text-gray-400 opacity-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Industry Image & Detail Panel */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xl space-y-6">
            
            {/* Industry Image */}
            <div className="relative h-[260px] sm:h-[340px] w-full rounded-2xl overflow-hidden bg-gray-900">
              <Image
                key={active.id}
                src={active.imageSrc}
                alt={active.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono text-[#df012a] font-bold uppercase tracking-wider block">
                  SELECTED SECTOR
                </span>
                <p className="text-sm font-bold text-white">{active.tagline}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {active.name} Software Engineering
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Key Deliverable Solutions */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Key Engineering Outcomes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-gray-800">
                {active.keySolutions.map((sol) => (
                  <div key={sol} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
