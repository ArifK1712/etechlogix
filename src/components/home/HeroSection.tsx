"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  description: string;
  proofLine?: { prefix: string; highlight: string; suffix: string };
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tag: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/hero-enterprise-software.png",
    imageAlt: "Real enterprise software architecture workshop in a bright corporate office",
    eyebrow: "ENTERPRISE CUSTOM SOFTWARE",
    headline: "Custom software engineered for",
    headlineAccent: "complex enterprise operations.",
    description:
      "We design and develop AI-powered enterprise platforms for events and conferences, ERP and distribution operations, healthcare, workflow management, and connected business environments.",
    primaryCta: { label: "Discuss Your Enterprise Project", href: "/contact" },
    secondaryCta: { label: "Explore Our Capabilities", href: "#services" },
    tag: "Custom Software",
  },
  {
    id: 2,
    image: "/hero-ai-workflow.png",
    imageAlt: "Professionals reviewing AI-powered workflow automation dashboard in a daylight office",
    eyebrow: "AGENTIC AI & WORKFLOW AUTOMATION",
    headline: "AI agents that complete real",
    headlineAccent: "business workflows.",
    description:
      "We build Agentic AI systems that connect enterprise applications, process documents, execute multi-step tasks, apply business rules, manage exceptions, and involve people when approvals are required.",
    proofLine: {
      prefix: "“Helping clients achieve ",
      highlight: "millions in operational savings",
      suffix: " through AI-powered workflow automation.”",
    },
    primaryCta: { label: "Explore Agentic AI", href: "#ai-solutions" },
    secondaryCta: { label: "Discuss an AI Use Case", href: "/contact" },
    tag: "Agentic AI",
  },
  {
    id: 3,
    image: "/hero-enterprise-integrations.png",
    imageAlt: "Enterprise IT directors reviewing system integration topology dashboard in a daylight office",
    eyebrow: "ENTERPRISE INTEGRATIONS",
    headline: "Connect the enterprise systems your",
    headlineAccent: "business already depends on.",
    description:
      "We engineer secure integrations across Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERP platforms, healthcare systems, cloud services, and custom applications.",
    primaryCta: { label: "Explore Enterprise Integrations", href: "#services" },
    secondaryCta: { label: "Discuss an Integration", href: "/contact" },
    tag: "Enterprise Integrations",
  },
  {
    id: 4,
    image: "/hero-teams.png",
    imageAlt: "Dedicated engineering team network visualization",
    eyebrow: "DEDICATED ENGINEERING TEAMS",
    headline: "Extend your team with engineers who",
    headlineAccent: "think like owners.",
    description:
      "Add experienced engineers, architects, designers, cloud specialists, and AI experts who understand your objectives, take responsibility, and work as an extension of your organisation.",
    primaryCta: { label: "Build Your Engineering Team", href: "#services" },
    secondaryCta: { label: "Discuss Your Requirements", href: "/contact" },
    tag: "Dedicated Teams",
  },
  {
    id: 5,
    image: "/hero-cloud.png",
    imageAlt: "Legacy system modernisation and cloud migration visualization",
    eyebrow: "LEGACY SYSTEM MODERNISATION",
    headline: "Move away from legacy systems without",
    headlineAccent: "disrupting operations.",
    description:
      "Modernise ageing applications, migrate critical data, improve integrations, and introduce scalable cloud and AI capabilities through a controlled, phased approach.",
    primaryCta: { label: "Explore Modernisation", href: "#services" },
    secondaryCta: { label: "Talk to Our Team", href: "/contact" },
    tag: "Legacy Modernisation",
  },
];

const AUTOPLAY_INTERVAL = 6000;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating || index === current) return;
      setDirection(dir);
      setPrev(current);
      setIsAnimating(true);
      setCurrent(index);
      setProgress(0);
      setTimeout(() => {
        setPrev(null);
        setIsAnimating(false);
      }, 700);
    },
    [current, isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const back = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  // Autoplay + progress bar
  useEffect(() => {
    timerRef.current = setInterval(() => next(), AUTOPLAY_INTERVAL);
    progressRef.current = setInterval(
      () => setProgress((p) => Math.min(p + 100 / (AUTOPLAY_INTERVAL / 100), 100)),
      100
    );
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [next]);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <section
      className="relative w-full overflow-hidden min-h-screen lg:h-screen bg-black"
      aria-label="Hero slider"
      aria-roledescription="carousel"
    >
      <div className="flex flex-col lg:flex-row h-full min-h-screen lg:min-h-0">
        {/* ─── LEFT: Image Panel ─────────────────────────────────── */}
        <div
          className="relative overflow-hidden w-full lg:w-1/2 h-[350px] sm:h-[450px] lg:h-full flex-shrink-0"
          aria-label="Slide visual"
        >
          {/* Outgoing image */}
          {prevSlide && (
            <div
              key={`prev-${prev}`}
              className="absolute inset-0 z-10"
              style={{
                animation: `slideOut${direction === "next" ? "Left" : "Right"} 0.7s cubic-bezier(0.76,0,0.24,1) forwards`,
              }}
            >
              <Image
                src={prevSlide.image}
                alt={prevSlide.imageAlt}
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
            </div>
          )}

          {/* Active image */}
          <div
            key={`curr-${current}`}
            className="absolute inset-0 z-20"
            style={{
              animation: `slideIn${direction === "next" ? "Right" : "Left"} 0.7s cubic-bezier(0.76,0,0.24,1) forwards`,
            }}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient overlay: fade to dark on right edge to bleed into white panel */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/80" /> */}
          </div>

          {/* Slide tag badge — bottom left */}
          <div className="absolute bottom-8 left-8 z-30">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#df012a] animate-pulse" />
              {slide.tag}
            </span>
          </div>

          {/* Slide counter — top left */}
          <div className="absolute top-20 sm:top-28 left-8 z-30 flex items-center gap-3">
            <span className="text-white/40 text-xs font-mono tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="w-16 h-px bg-white/20">
              <div
                className="h-full bg-[#df012a] transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* ─── RIGHT: Content Panel ──────────────────────────────── */}
        <div
          className="relative bg-gray-100 flex flex-col justify-center z-30 overflow-hidden w-full lg:w-1/2 flex-shrink-0"
        >

          <div className="px-6 sm:px-10 xl:px-14 py-10 lg:py-16">
            {/* Eyebrow */}
            <div
              key={`eyebrow-${current}`}
              className="mb-6 animate-fadeUp"
            >
              <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-widest">
                <span className="w-5 h-px bg-[#df012a]" />
                {slide.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              key={`headline-${current}`}
              className="text-black text-3xl xl:text-6xl font-bold leading-tight tracking-tight mb-5 animate-fadeUp"
              style={{ animationDelay: "60ms" }}
            >
              {slide.headline}{" "}
              <span className="text-[#df012a]">{slide.headlineAccent}</span>
            </h1>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className={`text-gray-500 leading-relaxed ${slide.proofLine ? "mb-4" : "mb-10"} animate-fadeUp`}
              style={{ animationDelay: "120ms" }}
            >
              {slide.description}
            </p>

            {/* Compact Proof Line (Slide 2) */}
            {slide.proofLine && (
              <p
                key={`proof-${current}`}
                className="font-medium text-gray-700 leading-relaxed mb-8 animate-fadeUp"
                style={{ animationDelay: "150ms" }}
              >
                {slide.proofLine.prefix}
                <span className="text-[#df012a] font-semibold">
                  {slide.proofLine.highlight}
                </span>
                {slide.proofLine.suffix}
              </p>
            )}

            {/* CTAs */}
            <div
              key={`ctas-${current}`}
              className="flex flex-col sm:flex-row gap-3 mb-14 animate-fadeUp"
              style={{ animationDelay: "180ms" }}
            >
              <a
                href={slide.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#df012a] text-white text-sm font-semibold rounded-lg hover:bg-[#b8001f] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2"
              >
                {slide.primaryCta.label} <ArrowUpRight size={16} />
              </a>
              <a
                href={slide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-black text-sm font-semibold rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                {slide.secondaryCta.label}
              </a>
            </div>

            {/* ─── Navigation controls ─────────────────────────── */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-8">
              {/* Dot indicators */}
              <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Go to slide ${i + 1}: ${s.eyebrow}`}
                    onClick={() => goTo(i, i > current ? "next" : "prev")}
                    className={`transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${
                      i === current
                        ? "w-7 h-2.5 bg-[#df012a]"
                        : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={back}
                  aria-label="Previous slide"
                  className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#df012a] hover:text-[#df012a] hover:bg-[#fbeaec]/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
                >
                  <ArrowLeft size={17} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="w-10 h-10 rounded-lg bg-[#df012a] flex items-center justify-center text-white hover:bg-[#b8001f] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-0.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#df012a] rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Slide number watermark */}
          <div
            className="absolute bottom-8 right-8 text-[120px] font-bold leading-none select-none pointer-events-none"
            style={{ color: "rgba(0,0,0,0.04)" }}
            aria-hidden="true"
          >
            {String(current + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Keyframe animations injected globally */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(6%); opacity: 0; }
          to   { transform: translateX(0);  opacity: 1; }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(-4%); opacity: 0; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-6%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0);  opacity: 1; }
          to   { transform: translateX(4%); opacity: 0; }
        }
        @keyframes fadeUp {
          from { transform: translateY(14px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .animate-fadeUp {
          animation: fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) both;
        }
      `}</style>
    </section>
  );
}
