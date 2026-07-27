"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layers, ShieldCheck, Database, Layout } from "lucide-react";

export interface ArchitectureLayer {
  id: string;
  name: string;
  sublabel: string;
  icon: "Layout" | "Layers" | "Database" | "ShieldCheck";
  items: string[];
}

export interface ServiceArchitectureProps {
  eyebrow?: string;
  heading: string;
  headingAccent?: string;
  description: string;
  layers: ArchitectureLayer[];
}

const iconMap = {
  Layout: Layout,
  Layers: Layers,
  Database: Database,
  ShieldCheck: ShieldCheck,
};

export function ServiceArchitecture({
  eyebrow = "PLATFORM ARCHITECTURE",
  heading,
  headingAccent,
  description,
  layers,
}: ServiceArchitectureProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="relative z-10 w-full py-16 lg:py-24 bg-[#050505] text-white overflow-hidden"
      aria-labelledby="architecture-heading"
    >
      {/* Background Subtle Radial Glow & Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id="architecture-heading" className="text-white font-bold text-[32px] sm:text-[44px] leading-tight tracking-tight mb-4">
            {heading}{" "}
            {headingAccent && (
              <span className="text-[#df012a]">{headingAccent}</span>
            )}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Connected Platform Architecture Stack — BANDS & CONNECTORS, NO CARDS */}
        <div className="relative space-y-4">
          
          {/* Animated Connecting Data Signal Line */}
          <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#df012a] via-white/20 to-[#df012a] hidden md:block" aria-hidden="true">
            {!prefersReducedMotion && (
              <motion.div
                className="w-1.5 h-6 rounded-full bg-[#df012a] -left-[2.5px] relative shadow-[0_0_12px_#df012a]"
                animate={{ y: [0, 420, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            )}
          </div>

          {layers.map((layer, idx) => {
            const IconComp = iconMap[layer.icon] || Layers;
            const isTop = idx === 0;
            const isBottom = idx === layers.length - 1;

            return (
              <div
                key={layer.id}
                className={`relative rounded-2xl p-6 sm:p-8 border backdrop-blur-md transition-all duration-300 ${
                  isTop
                    ? "bg-white/[0.04] border-[#df012a]/40"
                    : isBottom
                    ? "bg-white/[0.02] border-white/10"
                    : "bg-white/[0.03] border-white/15"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Layer Label & Icon */}
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isTop ? "bg-[#df012a]/20 text-[#df012a]" : "bg-white/10 text-white/80"}`}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#df012a] block mb-0.5">
                        {layer.sublabel}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {layer.name}
                      </h3>
                    </div>
                  </div>

                  {/* Connected System Nodes inside the Layer */}
                  <div className="lg:col-span-8 flex flex-wrap gap-2.5">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-200 hover:border-[#df012a]/50 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
