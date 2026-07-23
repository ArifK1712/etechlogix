"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

interface IndustryItem {
  id: string;
  num: string;
  badgeLabel: string;
  title: string;
  challenge: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const industriesData: IndustryItem[] = [
  {
    id: "healthcare",
    num: "01",
    badgeLabel: "01 / HEALTHCARE",
    title: "Healthcare",
    challenge:
      "Build secure digital platforms for clinical, administrative, and patient-facing workflows.",
    imageSrc: "/industry-healthcare.png",
    imageAlt: "Modern Clinical Digital Patient Workflow Technology",
    href: "/industries/healthcare",
  },
  {
    id: "event-technology",
    num: "02",
    badgeLabel: "02 / EVENT TECHNOLOGY",
    title: "Event Technology",
    challenge:
      "Connect registration, engagement, operations, and attendee data through one platform.",
    imageSrc: "/industry-events.png",
    imageAlt: "Professional Event Technology and Attendee Engagement",
    href: "/industries/events",
  },
  {
    id: "retail-ecommerce",
    num: "03",
    badgeLabel: "03 / RETAIL & E-COMMERCE",
    title: "Retail & E-commerce",
    challenge:
      "Unify products, inventory, orders, customers, and marketplace integrations.",
    imageSrc: "/industry-retail.png",
    imageAlt: "Modern Fulfilment and Inventory Operations",
    href: "/industries/retail",
  },
  {
    id: "enterprise-operations",
    num: "04",
    badgeLabel: "04 / ENTERPRISE OPERATIONS",
    title: "Enterprise Operations",
    challenge:
      "Replace fragmented processes with integrated applications and intelligent automation.",
    imageSrc: "/showcase-integration.png",
    imageAlt: "Integrated Enterprise Software Operations Platform",
    href: "/industries/enterprise",
  },
  {
    id: "data-infrastructure",
    num: "05",
    badgeLabel: "05 / DATA & INFRASTRUCTURE",
    title: "Data & Infrastructure",
    challenge:
      "Modernise legacy systems, connect data, and create reliable cloud foundations.",
    imageSrc: "/hero-cloud.png",
    imageAlt: "Cloud Architecture and Data Infrastructure Systems",
    href: "/industries/cloud-data",
  },
  {
    id: "professional-services",
    num: "06",
    badgeLabel: "06 / PROFESSIONAL SERVICES",
    title: "Professional Services",
    challenge:
      "Build secure portals, workflow systems, and digital tools that improve service delivery.",
    imageSrc: "/hero-software.png",
    imageAlt: "Secure Digital Portals for Professional Service Delivery",
    href: "/industries/professional-services",
  },
];

export function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const active = industriesData[activeIdx];

  const handleSelect = (index: number) => {
    setActiveIdx(index);
  };

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative z-10 w-full py-16 lg:py-20 bg-black text-white overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Background Red Radial Glow behind Image Area */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#df012a]/12 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── SECTION HEADING (Centered) ─── */}
        <div className="mb-10 lg:mb-14 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            INDUSTRY EXPERTISE
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="industries-heading"
            className="text-white font-bold text-[34px] sm:text-[46px] lg:text-[clamp(44px,4.5vw,60px)] leading-[1.05] tracking-tight mb-4"
          >
            Solutions built for your{" "}
            <span className="text-[#df012a]">industry’s challenges.</span>
          </h2>
          <p className="text-white/62 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We combine industry knowledge with software, cloud, data, and AI expertise to solve complex operational challenges.
          </p>
        </div>

        {/* ─── MAIN DESKTOP / TABLET SHOWCASE LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE: Large Industry Image (60% = 7 Cols) */}
          <div className="lg:col-span-7 w-full order-1 lg:order-1">
            <div className="relative aspect-[16/10] h-[300px] sm:h-[380px] lg:h-160 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0b0b0b]">
              {/* Active Image Crossfade */}
              {industriesData.map((item, i) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    i === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`object-cover transition-transform duration-500 ease-out ${
                      i === activeIdx && !prefersReducedMotion ? "scale-100" : "scale-103"
                    }`}
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Edge Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 pointer-events-none" />

              {/* Small Top-Left Active Label */}
              <div className="absolute top-4 left-4 z-30 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-white/20 shadow-md">
                {active.badgeLabel}
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between">
                <p className="text-base font-medium text-white/90 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                  Technology designed around real industry operations.
                </p>
                <a
                  href={active.href}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#df012a] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#b8001f] transition-all shadow-md"
                >
                  View Solution <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Editorial Navigation Rows (40% = 5 Cols) */}
          <div className="lg:col-span-5 w-full order-2 lg:order-2">
            <div
              className="flex flex-col border-t border-white/10"
              role="tablist"
              aria-label="Industry solutions selector"
            >
              {industriesData.map((item, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`tab-industry-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-industry-${item.id}`}
                    onClick={() => handleSelect(i)}
                    onMouseEnter={() => handleSelect(i)}
                    className={`group relative flex flex-col justify-center py-4 px-4 text-left border-b border-white/10 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#df012a]/[0.06] border-l-2 border-l-[#df012a] pl-5"
                        : "hover:bg-white/[0.02] hover:pl-5"
                    }`}
                  >
                    {/* Top Row: Number, Title, Arrow */}
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono font-bold transition-colors duration-200 ${
                            isActive ? "text-[#df012a]" : "text-white/30 group-hover:text-white/50"
                          }`}
                        >
                          {item.num}
                        </span>
                        <h3
                          className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 ${
                            isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <ChevronRight
                        size={18}
                        className={`transition-all duration-200 ${
                          isActive
                            ? "text-[#df012a] opacity-100 translate-x-1"
                            : "text-white/20 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>

                    {/* Bottom One-Line Challenge */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-colors duration-200 ${
                        isActive ? "text-white/80" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {item.challenge}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Accessible Hidden Content for SEO */}
        <div className="sr-only">
          {industriesData.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
