"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  // Append first 3 items to allow seamless 3-card sliding wrap-around
  const extendedTestimonials = [...testimonials, ...testimonials.slice(0, 3)];

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

  // Next Slide - moves exactly 1 card at a time
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Previous Slide - moves exactly 1 card at a time
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer (5.5s)
  useEffect(() => {
    if (!isIntersecting || isPaused || prefersReducedMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(nextSlide, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isIntersecting, isPaused, prefersReducedMotion, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-15 md:py-20 bg-[#fbeaec]/60 overflow-hidden focus:outline-none"
      aria-label="Client Testimonials Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── SECTION HEADER (Centered UI) ─── */}
        <div className="mb-8 lg:mb-12 max-w-[900px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            CLIENT TESTIMONIALS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="testimonials-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(44px,4.5vw,60px)] leading-[1.05] tracking-tight mb-4"
          >
            Trusted by teams who{" "}
            <span className="text-[#df012a]">demand excellence.</span>
          </h2>
        </div>

        {/* ─── CONTROLS HEADER BAR: TOP RIGHT ARROW BUTTONS ─── */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
            SLIDING REVIEWS ({currentIndex + 1} / {total})
          </div>

          {/* Previous & Next Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 text-gray-700 hover:border-[#df012a] hover:text-[#df012a] flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] cursor-pointer"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#df012a] text-white hover:bg-[#b8001f] flex items-center justify-center transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 cursor-pointer"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* ─── CAROUSEL TRACK WINDOW ─── */}
        <div className="overflow-hidden relative py-2 [---card-width:100%] sm:[---card-width:50%] lg:[---card-width:33.333333%]">
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(calc(-1 * var(---card-width) * ${currentIndex}))`,
            }}
          >
            {/* Desktop 33.333% / Tablet 50% / Mobile 100% sliding cards */}
            {extendedTestimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex flex-col items-stretch"
                aria-hidden={idx < currentIndex || idx >= currentIndex + 3}
              >
                <figure className="bg-white rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 border border-[#df012a]/10 h-full w-full">
                  {/* Quote icon */}
                  <div className="mb-5">
                    <Quote size={28} className="text-[#df012a] opacity-40" aria-hidden="true" />
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-gray-700 text-base leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Client Attribution */}
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-gray-100 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full bg-[#df012a] text-white text-sm font-bold flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-black text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SUBTLE PROGRESS INDICATOR (HORIZONTAL BARS) ─── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? "w-8 bg-[#df012a]"
                  : "w-3 bg-[#df012a]/20 hover:bg-[#df012a]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
