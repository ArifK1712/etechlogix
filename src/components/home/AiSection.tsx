"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  FileText,
  MessageSquare,
  TrendingUp,
  Plug,
  Layers,
} from "lucide-react";

interface ShowcaseCapability {
  id: string;
  num: string;
  tabLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  benefits: string[];
  businessOutcome: string;
  ctaHref: string;
}

const showcaseData: ShowcaseCapability[] = [
  {
    id: "generative-ai",
    num: "01",
    tabLabel: "Generative AI",
    title: "Generative AI Applications",
    description:
      "Build secure AI assistants, enterprise knowledge search, document summarisation tools, and retrieval-augmented (RAG) applications grounded in business data.",
    imageSrc: "/showcase-genai.png",
    imageAlt: "Enterprise Generative AI Knowledge Workspace",
    benefits: [
      "Retrieval-Augmented Generation (RAG) grounded in enterprise data",
      "Strict role-based access control & hallucination guardrails",
      "Custom LLM synthesis and enterprise knowledge search",
    ],
    businessOutcome: "Turn scattered enterprise knowledge into instant, accurate operational answers.",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "ai-agents",
    num: "02",
    tabLabel: "AI Agents",
    title: "AI Agents & Automation",
    description:
      "Create intelligent agents that reason, plan, connect systems, and execute multi-step operational workflows with appropriate human oversight.",
    imageSrc: "/showcase-agents.png",
    imageAlt: "Modern Operations Environment showing AI Agents",
    benefits: [
      "Autonomous multi-step planning and tool execution",
      "Seamless integration with ERP, CRM, and internal APIs",
      "Human approval checkpoints for critical operations",
    ],
    businessOutcome: "Automate complex processes while maintaining control and 100% visibility.",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "document-intelligence",
    num: "03",
    tabLabel: "Document Intelligence",
    title: "Document Intelligence",
    description:
      "Extract, classify, validate, and structure information from invoices, forms, contracts, healthcare records, and unstructured business documents.",
    imageSrc: "/showcase-docintel.png",
    imageAlt: "Document Intelligence Data Processing Visual",
    benefits: [
      "High-accuracy OCR and layout-aware document parsing",
      "Automated entity classification & table data extraction",
      "Confidence scoring and exception handling workflows",
    ],
    businessOutcome: "Convert high-volume unstructured PDFs into clean, usable database records.",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "conversational-ai",
    num: "04",
    tabLabel: "Conversational AI",
    title: "Conversational AI",
    description:
      "Develop customer support assistants, internal helpdesk bots, voice experiences, and multilingual interfaces that handle complex queries with context.",
    imageSrc: "/showcase-chat.png",
    imageAlt: "Conversational AI Customer Support Experience",
    benefits: [
      "Multi-turn contextual dialog with deep domain awareness",
      "Seamless escalation to human agents with full transcript history",
      "Multilingual support across Web, Mobile, and Voice channels",
    ],
    businessOutcome: "Deliver 24/7 instant customer and employee support with 95%+ accuracy.",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "predictive-analytics",
    num: "05",
    tabLabel: "Predictive Analytics",
    title: "Predictive Analytics",
    description:
      "Use forecasting, recommendation engines, anomaly detection, and classification models on operational data to surface actionable insights.",
    imageSrc: "/showcase-predictive.png",
    imageAlt: "Predictive Analytics Business Forecasting Environment",
    benefits: [
      "Time-series forecasting and demand planning models",
      "Real-time anomaly detection and risk identification",
      "Decision-support engines with statistical confidence bounds",
    ],
    businessOutcome: "Shift from reactive historical reporting to proactive strategic forecasting.",
    ctaHref: "/services/ai-automation",
  },
  {
    id: "ai-integration",
    num: "06",
    tabLabel: "AI Integration",
    title: "AI Integration",
    description:
      "Add practical AI capabilities to existing ERP, CRM, healthcare, e-commerce, and enterprise platforms without rebuilding systems that already work.",
    imageSrc: "/showcase-integration.png",
    imageAlt: "Connected Enterprise Systems AI Integration Layer",
    benefits: [
      "Lightweight middleware bridging legacy databases & AI services",
      "Embedded AI microservices inside existing user workflows",
      "Fail-safe rules ensuring zero operational downtime",
    ],
    businessOutcome: "Introduce intelligent features into existing operations with minimal disruption.",
    ctaHref: "/services/ai-automation",
  },
];

export function AiSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Check prefers-reduced-motion & intersection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-play every 6.5 seconds
  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % showcaseData.length);
  }, []);

  useEffect(() => {
    if (!isIntersecting || isPaused || prefersReducedMotion) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(nextSlide, 6500);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isIntersecting, isPaused, prefersReducedMotion, nextSlide]);

  const active = showcaseData[activeIdx];

  const handleSelect = (index: number) => {
    setActiveIdx(index);
  };

  return (
    <section
      ref={sectionRef}
      id="ai-solutions"
      className="relative z-10 w-full pb-16 lg:pb-20 bg-white text-black overflow-hidden"
      aria-labelledby="ai-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── TOP SECTION: Eyebrow, Heading, Paragraph (Centered) ─── */}
        <div className="mb-10 lg:mb-14 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            AI SOLUTIONS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="ai-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(44px,4.5vw,60px)] leading-[1.05] tracking-tight mb-4"
          >
            {" "}
            <span className="text-[#df012a]">production-ready intelligence.</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            We help organisations identify valuable AI opportunities, prepare their data, build secure solutions, and integrate intelligence into real business operations.
          </p>
        </div>
        {/* ─── BELOW SHOWCASE: SIX MINIMAL NUMBERED TABS BAR ─── */}
        <div className="relative pt-6 mb-10 border-t border-gray-200">
          {/* Active Red Connecting Line across tab bar */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-[2px] bg-gray-200 pointer-events-none">
            <div
              className="h-full bg-[#df012a] transition-all duration-300"
              style={{
                width: `${100 / 6}%`,
                transform: `translateX(${activeIdx * 100}%)`,
              }}
            />
          </div>

          <div
            className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar pb-2"
            role="tablist"
            aria-label="AI Solutions showcase navigation"
          >
            {showcaseData.map((item, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-showcase-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`showcase-panel-${item.id}`}
                  onClick={() => handleSelect(i)}
                  className={`flex items-center gap-2 py-3 px-2 text-sm font-semibold tracking-tight transition-all duration-200 border-b-2 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "border-[#df012a] text-black font-bold"
                      : "border-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  <span
                    className={`font-mono text-xl font-bold transition-colors ${
                      isActive ? "text-[#df012a]" : "text-gray-400"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="text-xl">{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
        {/* ─── MAIN SHOWCASE: IMAGE (60-65%) + CONTENT PANEL (35-40%) ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center mb-12 relative">
          {/* LEFT SIDE: Large Bright Image (7 Cols = ~58-62%) */}
          <div className="lg:col-span-7 w-full relative">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gray-100 group bg-gray-50">
              {/* Active Image with Crossfade */}
              {showcaseData.map((item, i) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className={`object-cover transition-transform duration-700 ease-out ${
                      i === activeIdx && !prefersReducedMotion ? "scale-100" : "scale-105"
                    }`}
                    priority={i === 0}
                  />
                </div>
              ))}

              {/* Subtle Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 pointer-events-none" />

              {/* Small Image Caption Overlay */}
              <div className="absolute bottom-4 left-4 z-30 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-semibold text-gray-900 border border-white/60 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#df012a]" />
                <span>AI applied to real business operations</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Active Content Panel (5 Cols = ~40%, Slight Editorial Overlap) */}
          <div className="lg:col-span-5 w-full lg:-ml-10 relative z-30">
            <div
              id={`showcase-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-showcase-${active.id}`}
              className="bg-white lg:bg-[#fbeaec]/40 border border-gray-200/80 rounded-2xl p-6 sm:p-8 xl:p-10 backdrop-blur-md transition-all duration-300"
            >
              {/* Small Number */}
              <div className="text-xs font-mono font-bold text-[#df012a] uppercase tracking-widest mb-2">
                {active.num} / 06 — CAPABILITY
              </div>

              {/* Capability Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-3">
                {active.title}
              </h3>

              {/* Concise Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {active.description}
              </p>

              {/* Three Short Benefits */}
              <ul className="space-y-3 mb-6">
                {active.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-medium text-gray-800">
                    <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Business Outcome Statement */}
              <div className="p-4 rounded-xl bg-[#fbeaec]/40 border border-[#df012a]/20 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#df012a] mb-1">
                  Business Outcome:
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {active.businessOutcome}
                </div>
              </div>

              {/* CTA Link */}
              <div>
                <a
                  href={active.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#df012a] text-white font-semibold text-sm rounded-xl hover:bg-[#b8001f] transition-all shadow-md hover:gap-3 hover:-translate-y-0.5"
                >
                  Explore AI Solutions <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        

        {/* Accessible Hidden Content for SEO */}
        <div className="sr-only">
          {showcaseData.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.businessOutcome}</p>
              <ul>
                {item.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
