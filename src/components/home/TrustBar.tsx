"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  id: string;
  index: string;
  value: number;
  hasPlus: boolean;
  label: string;
  ariaLabel: string;
}

const statsData: StatItem[] = [
  {
    id: "years-exp",
    index: "01",
    value: 10,
    hasPlus: true,
    label: "Years of Experience",
    ariaLabel: "Over 10 years of experience",
  },
  {
    id: "projects-del",
    index: "02",
    value: 150,
    hasPlus: true,
    label: "Projects Delivered",
    ariaLabel: "Over 150 projects delivered",
  },
  {
    id: "clients-srv",
    index: "03",
    value: 50,
    hasPlus: true,
    label: "Clients Served",
    ariaLabel: "Over 50 clients served",
  },
  {
    id: "ind-cov",
    index: "04",
    value: 6,
    hasPlus: false,
    label: "Industries Covered",
    ariaLabel: "6 industries covered",
  },
];

function StatColumn({
  stat,
  isIntersecting,
  prefersReducedMotion,
  delayMs,
}: {
  stat: StatItem;
  isIntersecting: boolean;
  prefersReducedMotion: boolean;
  delayMs: number;
}) {
  const [currentCount, setCurrentCount] = useState(prefersReducedMotion ? stat.value : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (!isIntersecting) return;

    let animationFrameId: number;
    const duration = 1200; // 1.2s count-up once
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrentCount(Math.floor(eased * stat.value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentCount(stat.value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isIntersecting, prefersReducedMotion, stat.value]);

  return (
    <div
      className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 first:border-l-0 transition-colors duration-200"
      style={{
        opacity: isIntersecting || prefersReducedMotion ? 1 : 0,
        transform:
          isIntersecting || prefersReducedMotion
            ? "translateY(0)"
            : "translateY(16px)",
        transition: prefersReducedMotion
          ? "none"
          : `opacity 0.5s ease-out ${delayMs}ms, transform 0.5s ease-out ${delayMs}ms`,
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono font-bold text-[#df012a] uppercase tracking-widest">
          {stat.index}
        </span>
      </div>

      <div className="mb-2" aria-label={stat.ariaLabel}>
        <span className="font-bold tracking-tight leading-none text-3xl sm:text-4xl lg:text-5xl tabular-nums text-white">
          {isIntersecting || prefersReducedMotion ? currentCount : 0}
        </span>
        {stat.hasPlus && (
          <span className="font-bold text-[#df012a] text-2xl sm:text-3xl ml-0.5">
            +
          </span>
        )}
      </div>

      <p className="font-medium tracking-wide uppercase text-gray-300 w-25">
        {stat.label}
      </p>
    </div>
  );
}

export function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="credibility-stats"
      className="relative z-10 w-full py-12 lg:py-16"
      aria-label="Enterprise credibility statistics"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Introduction Header & Supporting Text */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-2.5">
              <span className="w-4 h-px bg-[#df012a]" />
              PROVEN DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-3">
              Enterprise delivery backed by proven experience.
            </h2>
            <p className="leading-relaxed">
              Years of engineering experience across complex platforms, enterprise integrations, AI-powered workflows, and long-term product development.
            </p>
          </div>

          {/* Right: 4 Metrics in 1 Row on Desktop, 2x2 on Tablet, Stacked on Mobile */}
          <div className="lg:col-span-8 bg-[linear-gradient(135deg,#0a0a0a_0%,#1b050a_55%,#0d0d0d_100%)] border border-white/10 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, i) => (
              <StatColumn
                key={stat.id}
                stat={stat}
                isIntersecting={isIntersecting}
                prefersReducedMotion={prefersReducedMotion}
                delayMs={100 + i * 70}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
