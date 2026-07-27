"use client";

import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Hammer, TrendingUp, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AssemblyStation {
  num: string;
  name: string;
  title: string;
  description: string;
  deliverable: string;
  icon: React.ElementType;
}

const stations: AssemblyStation[] = [
  {
    num: "01",
    name: "DISCOVER",
    title: "Discover & Align",
    description: "Understand the business goals, users, workflows, existing systems, operational challenges, risks, security needs, and success criteria.",
    deliverable: "Discovery & requirements roadmap",
    icon: Search,
  },
  {
    num: "02",
    name: "DESIGN",
    title: "Architect & Plan",
    description: "Define the product experience, technical architecture, integrations, data flows, AI responsibilities, security approach, and phased delivery roadmap.",
    deliverable: "Technical architecture blueprint",
    icon: PenTool,
  },
  {
    num: "03",
    name: "BUILD",
    title: "Engineer & Validate",
    description: "Deliver in controlled iterations with regular demonstrations, testing, documentation, stakeholder reviews, and transparent progress.",
    deliverable: "Production-ready software build",
    icon: Hammer,
  },
  {
    num: "04",
    name: "IMPROVE",
    title: "Evolve & Optimise",
    description: "Monitor performance, support users, refine workflows, modernise capabilities, and evolve the platform as business needs change.",
    deliverable: "Continuous optimisation & telemetry",
    icon: TrendingUp,
  },
];

export function ProcessSection() {
  const [activeStationIdx, setActiveStationIdx] = useState(0);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const redSignalRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Natural unpinned ScrollTrigger scrubbing red signal along SVG path
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.3,
        onUpdate: (self) => {
          const progress = self.progress;
          const total = stations.length;
          const idx = Math.min(Math.floor(progress * total), total - 1);
          setActiveStationIdx(idx);

          // Animate SVG red signal along path
          if (pathRef.current && redSignalRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            const point = pathRef.current.getPointAtLength(progress * pathLength);
            redSignalRef.current.setAttribute("cx", point.x.toString());
            redSignalRef.current.setAttribute("cy", point.y.toString());
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 w-full py-16 lg:py-20 bg-[radial-gradient(circle_at_30%_45%,rgba(223,1,42,0.24),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(120,0,24,0.16),transparent_34%),linear-gradient(135deg,#030303_0%,#22040b_48%,#080808_100%)] text-white overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"
        aria-hidden="true"
      />

      {/* Subtle Red Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#df012a]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── TOP HEADING & INTRODUCTION (WITH CLEAN 64-80px MARGIN BELOW) ─── */}
        <div className="max-w-[950px]">
          <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            HOW WE WORK
          </span>
          <h2
            id="process-heading"
            className="text-white font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            A structured delivery approach for{" "}
            <span className="text-[#df012a]">complex digital products.</span>
          </h2>
          <p className="text-white/65 leading-relaxed max-w-3xl">
            We combine business understanding, product strategy, enterprise architecture, and iterative engineering to deliver reliable outcomes with clear visibility throughout the engagement.
          </p>
        </div>

        {/* ─── DESKTOP PRODUCT ASSEMBLY JOURNEY (Positioned Cleanly Below Introduction) ─── */}
        <div className="hidden lg:block relative pt-4 pb-6">
          
          {/* Smooth Curved SVG Process Path */}
          <svg className="w-full h-[180px] overflow-visible" viewBox="0 0 1200 180" fill="none">
            {/* Base Background Path */}
            <path
              ref={pathRef}
              d="M 50 90 C 200 10, 350 170, 500 90 C 650 10, 800 170, 950 90 C 1050 30, 1150 130, 1180 90"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            {/* Red Accent Path */}
            <path
              d="M 50 90 C 200 10, 350 170, 500 90 C 650 10, 800 170, 950 90 C 1050 30, 1150 130, 1180 90"
              stroke="#df012a"
              strokeWidth="2.5"
              opacity="0.7"
            />

            {/* Traveling Red Product Signal */}
            <circle
              ref={redSignalRef}
              cx="50"
              cy="90"
              r="6"
              fill="#df012a"
              className="transition-all duration-150"
            />
          </svg>

          {/* 4 Transformation Station Cards Placed Cleanly along the Track */}
          <div className="grid grid-cols-4 gap-6 pt-6">
            {stations.map((station, idx) => {
              const isActive = idx === activeStationIdx;
              const isCompleted = idx < activeStationIdx;
              const IconComponent = station.icon;

              return (
                <div
                  key={station.num}
                  onClick={() => setActiveStationIdx(idx)}
                  className="cursor-pointer transition-all duration-300"
                >
                  <div
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                      isActive
                        ? "bg-[#111111] border-[#df012a] shadow-[0_0_24px_rgba(223,1,42,0.25)] scale-102"
                        : isCompleted
                        ? "bg-[#0a0a0a] border-white/20 opacity-80"
                        : "bg-black/60 border-white/10 opacity-40 hover:opacity-70"
                    }`}
                  >
                    {/* Top Row: Faded Stage Number & Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono font-bold text-3xl sm:text-4xl text-[#df012a] opacity-40">
                        {station.num}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isActive ? "bg-[#df012a]" : "bg-white/10 text-white/70"
                        }`}
                      >
                        <IconComponent size={18} />
                      </div>
                    </div>

                    {/* Stage Name & Title */}
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#df012a] mb-1">
                      {station.name}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-2">
                      {station.title}
                    </h3>

                    {/* Concise Description */}
                    <p className="text-white/65 leading-relaxed mb-4">
                      {station.description}
                    </p>

                    {/* Deliverable Label */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white/80 mt-auto">
                      <CheckCircle2 size={13} className="text-[#df012a]" /> {station.deliverable}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── MOBILE PRODUCT ASSEMBLY JOURNEY (Vertical Process Path) ─── */}
        <div className="block lg:hidden space-y-6 relative pl-6 border-l-2 border-[#df012a]/40 ml-4">
          {stations.map((station, idx) => {
            const isActive = idx === activeStationIdx;
            const IconComponent = station.icon;

            return (
              <div
                key={station.num}
                onClick={() => setActiveStationIdx(idx)}
                className="relative cursor-pointer"
              >
                {/* Node Bullet on Vertical Line */}
                <div
                  className={`absolute -left-[35px] top-1 w-8 h-8 rounded-full font-mono font-bold text-xs flex items-center justify-center shadow-md transition-colors ${
                    isActive ? "bg-[#df012a] text-white" : "bg-white/10 border border-white/20 text-white/70"
                  }`}
                >
                  {station.num}
                </div>

                <div
                  className={`p-5 rounded-xl border transition-all ${
                    isActive ? "bg-[#111111] border-[#df012a]" : "bg-[#0a0a0a] border-white/10 opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <IconComponent size={16} className="text-[#df012a]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#df012a]">
                      {station.name}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {station.title}
                  </h3>

                  <p className="text-white/65 leading-relaxed mb-3">
                    {station.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-xs font-bold uppercase text-[#df012a]">
                    <span>✓</span> {station.deliverable}
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
