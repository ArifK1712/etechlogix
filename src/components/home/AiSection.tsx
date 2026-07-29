"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

export interface AgenticTab {
  id: string;
  num: string;
  tabLabel: string;
  heading: string;
  capabilities: string[];
  connectedPlatforms?: string[];
  outcome: string;
  imageSrc: string;
  imageAlt: string;
}

export const agenticTabs: AgenticTab[] = [
  {
    id: "workflow-automation",
    num: "01",
    tabLabel: "Workflow Automation",
    heading: "Automate complex workflows across teams and systems.",
    capabilities: [
      "Coordinate multi-step business processes",
      "Trigger actions across CRM, ERP, portals, email, and APIs",
      "Apply business rules and route work automatically",
      "Escalate exceptions to the appropriate person",
    ],
    outcome: "Faster operations with fewer manual handoffs and less duplicate work.",
    imageSrc: "/workflow-automation-team.jpg",
    imageAlt: "Business and technology team mapping an operational workflow on a whiteboard in a modern office",
  },
  {
    id: "document-processing",
    num: "02",
    tabLabel: "Document Processing",
    heading: "Turn business documents into validated, usable data.",
    capabilities: [
      "Process invoices, contracts, forms, PDFs, and records",
      "Extract important fields and table data",
      "Validate information against existing systems",
      "Route uncertain or incomplete information for review",
    ],
    outcome: "Reduce manual data entry while improving speed and accuracy.",
    imageSrc: "/document-processing-unsplash.jpg",
    imageAlt: "Finance and accounting team processing paper invoices, forms, and validating records on a laptop",
  },
  {
    id: "erp-crm-integration",
    num: "03",
    tabLabel: "ERP & CRM Integration",
    heading: "Connect your systems so information and actions move automatically.",
    capabilities: [
      "Connect ERP, CRM, portals, databases, and external APIs",
      "Synchronize customer, order, inventory, and operational data",
      "Trigger downstream actions when business events occur",
      "Reduce duplicate entry and disconnected workflows",
    ],
    connectedPlatforms: [
      "Salesforce",
      "MuleSoft",
      "Descartes",
      "Avalara",
      "DMSi Agility",
      "Custom ERPs & APIs",
    ],
    outcome: "One connected operational flow across the systems your business already uses.",
    imageSrc: "/erp-crm-integration-unsplash.jpg",
    imageAlt: "Enterprise IT solution architects reviewing system integration plans on a laptop and whiteboard",
  },
  {
    id: "approvals-exceptions",
    num: "04",
    tabLabel: "Approvals & Exceptions",
    heading: "Accelerate approvals without removing human control.",
    capabilities: [
      "Evaluate requests against policies, limits, and compliance rules",
      "Prepare relevant information for decision-makers",
      "Automatically approve eligible requests",
      "Escalate high-risk or unusual cases to authorized reviewers",
    ],
    outcome: "Faster decisions with clear accountability and a complete audit trail.",
    imageSrc: "/approvals-exceptions-team.jpg",
    imageAlt: "Finance and procurement managers reviewing policy check and approval documents in a conference room",
  },
  {
    id: "healthcare-workflows",
    num: "05",
    tabLabel: "Healthcare Workflows",
    heading: "Simplify healthcare administration while protecting sensitive data.",
    capabilities: [
      "Process patient intake and referral information",
      "Validate eligibility and required documentation",
      "Connect with EHRs, portals, and healthcare systems",
      "Route clinical or administrative exceptions to staff",
    ],
    outcome: "Faster patient processing with secure, traceable workflows.",
    imageSrc: "/healthcare-workflows-team.jpg",
    imageAlt: "Healthcare administration staff and doctor reviewing patient intake and EHR records at a clinical station",
  },
  {
    id: "event-operations",
    num: "06",
    tabLabel: "Event Operations",
    heading: "Coordinate registration, access, and live event operations.",
    capabilities: [
      "Validate registrations, payments, and ticket eligibility",
      "Coordinate badge generation and on-site check-in",
      "Connect event platforms, printers, gates, and attendee systems",
      "Handle live updates, exceptions, and schedule changes",
    ],
    outcome: "Smooth event operations for organizers and attendees at scale.",
    imageSrc: "/event-operations-team.jpg",
    imageAlt: "Enterprise event staff managing conference registration counter, badge printing, and attendee check-in",
  },
];

export function AiSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [translateOffset, setTranslateOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Recalculate track max scroll offset
  const updateMaxOffset = useCallback(() => {
    if (containerRef.current && trackRef.current) {
      const containerW = containerRef.current.offsetWidth;
      const trackW = trackRef.current.scrollWidth;
      const max = Math.max(0, trackW - containerW);
      setMaxOffset(max);
      setTranslateOffset((prev) => Math.min(prev, max));
    }
  }, []);

  useEffect(() => {
    updateMaxOffset();
    window.addEventListener("resize", updateMaxOffset);
    return () => window.removeEventListener("resize", updateMaxOffset);
  }, [updateMaxOffset]);

  // Reduced motion & Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % agenticTabs.length);
  }, []);

  useEffect(() => {
    if (!isIntersecting || isPaused || prefersReducedMotion) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(nextSlide, 8000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isIntersecting, isPaused, prefersReducedMotion, nextSlide]);

  // Keep active tab visible in carousel window
  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const activeTabElem = trackRef.current.children[activeIdx] as HTMLElement;
      if (activeTabElem) {
        const tabLeft = activeTabElem.offsetLeft;
        const tabWidth = activeTabElem.offsetWidth;
        const containerW = containerRef.current.offsetWidth;

        setTranslateOffset((prev) => {
          if (tabLeft + tabWidth > prev + containerW) {
            return Math.min(maxOffset, tabLeft + tabWidth - containerW + 32);
          } else if (tabLeft < prev) {
            return Math.max(0, tabLeft - 32);
          }
          return prev;
        });
      }
    }
  }, [activeIdx, maxOffset]);

  const handlePrevTab = () => {
    setActiveIdx((prev) => Math.max(0, prev - 1));
  };

  const handleNextTab = () => {
    setActiveIdx((prev) => Math.min(agenticTabs.length - 1, prev + 1));
  };

  const active = agenticTabs[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="ai-solutions"
      className="relative z-10 w-full py-16 lg:py-24 bg-white text-black overflow-hidden"
      aria-labelledby="ai-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── TOP SECTION: Eyebrow, Heading, Supporting Description ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            AGENTIC AI &amp; WORKFLOW AUTOMATION
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="ai-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            AI agents built for the{" "}
            <span className="text-[#df012a]">workflows that run your business.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We design AI agents that process information, coordinate decisions, connect enterprise systems, and complete operational work—with people involved wherever judgment or approval is required.
          </p>
        </div>

        {/* ─── 6 AGENTIC AI CAPABILITY TABS CAROUSEL ─── */}
        <div className="flex items-center gap-3 mb-10 py-3 relative border-b border-gray-100 pb-4">
          
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrevTab}
            disabled={activeIdx === 0 ? true : undefined}
            suppressHydrationWarning
            aria-label="Previous tab"
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-800 hover:border-[#df012a] hover:text-[#df012a] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center flex-shrink-0 transition-all shadow-xs cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel Window */}
          <div ref={containerRef} className="overflow-hidden flex-1 relative">
            <div
              ref={trackRef}
              className="flex items-center gap-8 transition-transform duration-500 ease-out flex-nowrap"
              style={{ transform: `translateX(-${translateOffset}px)` }}
              role="tablist"
              aria-label="Agentic AI capabilities navigation"
            >
              {agenticTabs.map((item, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`tab-agentic-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`agentic-panel-${item.id}`}
                    onClick={() => setActiveIdx(i)}
                    className={`flex items-center gap-2.5 py-2 px-0 text-sm font-semibold tracking-tight transition-all duration-200 border-b-2 flex-shrink-0 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "border-[#df012a] text-black font-bold"
                        : "border-transparent text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold ${
                        isActive ? "text-[#df012a]" : "text-gray-400"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-base sm:text-xl">{item.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNextTab}
            disabled={activeIdx === agenticTabs.length - 1 ? true : undefined}
            suppressHydrationWarning
            aria-label="Next tab"
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-800 hover:border-[#df012a] hover:text-[#df012a] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center flex-shrink-0 transition-all shadow-xs cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* ─── ACTIVE TAB EDITORIAL TWO-COLUMN DISPLAY ─── */}
        <div className="mt-8 lg:mt-12 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* IMAGE COLUMN (lg:col-span-6) */}
            <div className="lg:col-span-6 relative group">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-gray-200/80 bg-gray-100">
                <Image
                  src={active.imageSrc}
                  alt={active.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />
                {/* Subtle Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#df012a]" />
                    {active.num} / {active.tabLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* CONTENT COLUMN (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              
              {/* Category Label & Heading */}
              <div>
                <span className="text-xs font-mono font-bold text-[#df012a] uppercase tracking-widest block mb-2">
                  {active.num} — {active.tabLabel.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">
                  {active.heading}
                </h3>
              </div>

              {/* Capability Statements */}
              <div className="space-y-3 pt-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block">
                  What eTechLogix Delivers:
                </span>
                <ul className="space-y-3">
                  {active.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-800 leading-normal">
                      <div className="w-5 h-5 rounded-full bg-[#fbeaec] text-[#df012a] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check size={13} strokeWidth={2.5} />
                      </div>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connected Platforms (If Present) */}
              {active.connectedPlatforms && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    Connected Platforms &amp; Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {active.connectedPlatforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center text-xs font-semibold text-gray-700 bg-gray-100 border border-gray-200/90 px-3 py-1 rounded-lg"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Business Outcome Statement Box */}
              <div className="p-4 rounded-xl bg-[#fbeaec]/60 border border-[#df012a]/20 flex items-start gap-3 text-sm">
                <div className="w-7 h-7 rounded-lg bg-[#df012a] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#df012a] block mb-0.5">
                    Measurable Business Outcome:
                  </span>
                  <p className="font-semibold text-gray-900 leading-snug">
                    {active.outcome}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
