"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

interface IndustryItem {
  id: string;
  num: string;
  badgeLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const industriesData: IndustryItem[] = [
  {
    id: "events-conferences",
    num: "01",
    badgeLabel: "01 / INDUSTRY SECTOR",
    title: "Events & Conferences",
    description:
      "Registration, ticketing, attendee management, mobile apps, on-site operations, meetings, engagement, and event reporting.",
    imageSrc: "/industry-events.png",
    imageAlt: "Events & Conferences platform technology visual",
    href: "/contact",
  },
  {
    id: "erp-distribution",
    num: "02",
    badgeLabel: "02 / INDUSTRY SECTOR",
    title: "ERP & Distribution",
    description:
      "Order management, inventory, pricing, warehouse operations, logistics, finance, tax, and connected distribution workflows.",
    imageSrc: "/industry-retail.png",
    imageAlt: "ERP and Distribution operations technology visual",
    href: "/contact",
  },
  {
    id: "healthcare",
    num: "03",
    badgeLabel: "03 / INDUSTRY SECTOR",
    title: "Healthcare",
    description:
      "Secure healthcare workflows, document processing, operational automation, system integrations, and compliance-sensitive platforms.",
    imageSrc: "/industry-healthcare.png",
    imageAlt: "Secure Healthcare workflow software visual",
    href: "/contact",
  },
  {
    id: "enterprise-operations",
    num: "04",
    badgeLabel: "04 / BUSINESS ENVIRONMENT",
    title: "Enterprise Operations",
    description:
      "Internal portals, approvals, workflow management, reporting, document processing, and business automation.",
    imageSrc: "/industry-enterprise-operations.png",
    imageAlt: "Enterprise Operations control room in a sunlit office",
    href: "/contact",
  },
  {
    id: "enterprise-integrations",
    num: "05",
    badgeLabel: "05 / SOLUTION ENVIRONMENT",
    title: "Enterprise Integrations",
    description:
      "Connected solutions across Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP systems, healthcare platforms, cloud services, and custom APIs.",
    imageSrc: "/industry-enterprise-integrations.png",
    imageAlt: "Enterprise IT architecture team reviewing integration topology on a glass display",
    href: "/contact",
  },
  {
    id: "startups-digital-products",
    num: "06",
    badgeLabel: "06 / BUSINESS ENVIRONMENT",
    title: "Startups & Digital Products",
    description:
      "Clickable prototypes, functional demos, SaaS platforms, MVPs, customer validation, and scalable product foundations.",
    imageSrc: "/industry-startups-digital-products.png",
    imageAlt: "Startup product team reviewing interactive UX wireframes and SaaS MVP dashboards in a sunlit office",
    href: "#startups",
  },
];

export function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  const active = industriesData[activeIdx];

  const handleSelect = (index: number) => {
    setActiveIdx(index);
  };

  return (
    <section
      id="industries"
      className="relative z-10 w-full py-16 lg:py-20 bg-[radial-gradient(circle_at_30%_45%,rgba(223,1,42,0.24),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(120,0,24,0.16),transparent_34%),linear-gradient(135deg,#030303_0%,#22040b_48%,#080808_100%)] text-white overflow-hidden"
      aria-labelledby="industries-heading"
    >
      {/* Background Red Radial Glow behind Image Area */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#df012a]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── SECTION HEADING (Centered) ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            INDUSTRIES &amp; BUSINESS ENVIRONMENTS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="industries-heading"
            className="text-white font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            Software built for industries where{" "}
            <span className="text-[#df012a]">operational complexity matters.</span>
          </h2>
          <p className="text-white/65 leading-relaxed max-w-3xl mx-auto">
            We develop business-critical platforms, AI-powered workflows, and connected systems for organisations with complex processes, data, integrations, and compliance requirements.
          </p>
        </div>

        {/* ─── MAIN DESKTOP / TABLET SHOWCASE LAYOUT ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Large Industry Image (60% = 7 Cols) */}
          <div className="lg:col-span-7 w-full order-1 lg:order-1">
            <div className="relative aspect-[16/10] h-[300px] sm:h-[480px] lg:h-[680px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0b0b0b]">
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

              

              {/* Small Top-Left Active Label */}
              <div className="absolute top-4 left-4 z-30 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-white/20 shadow-md">
                {active.badgeLabel}
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between gap-4">
                <p className="font-medium text-white/90 bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
                  {active.description}
                </p>
                <Link
                  href={active.href}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#df012a] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#b8001f] transition-all shadow-md flex-shrink-0"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Vertical Editorial Navigation Rows (40% = 5 Cols) */}
          <div className="lg:col-span-5 w-full order-2 lg:order-2">
            <div
              className="flex flex-col border-t border-white/10"
              role="tablist"
              aria-label="Industry & Environment Selector"
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
                        ? "bg-[#df012a]/[0.08] border-l-2 border-l-[#df012a] pl-5"
                        : "hover:bg-white/[0.02] hover:pl-5"
                    }`}
                  >
                    {/* Number & Title */}
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
                          className={`text-lg font-bold tracking-tight transition-colors duration-200 ${
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

                    {/* Short Description */}
                    <p
                      className={`leading-relaxed line-clamp-2 transition-colors duration-200 ${
                        isActive ? "text-white/80" : "text-white/40 group-hover:text-white/60"
                      }`}
                    >
                      {item.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
