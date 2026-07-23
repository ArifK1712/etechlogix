"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  id: string;
  index: string;
  value: number;
  hasPlus: boolean;
  displayValueRaw: string;
  label: string;
  ariaLabel: string;
}

const statsData: StatItem[] = [
  {
    id: "years-exp",
    index: "01",
    value: 10,
    hasPlus: true,
    displayValueRaw: "10+",
    label: "Years of Experience",
    ariaLabel: "Over 10 years of experience",
  },
  {
    id: "projects-del",
    index: "02",
    value: 150,
    hasPlus: true,
    displayValueRaw: "150+",
    label: "Projects Delivered",
    ariaLabel: "Over 150 projects delivered",
  },
  {
    id: "clients-srv",
    index: "03",
    value: 50,
    hasPlus: true,
    displayValueRaw: "50+",
    label: "Clients Served",
    ariaLabel: "Over 50 clients served",
  },
  {
    id: "ind-cov",
    index: "04",
    value: 6,
    hasPlus: false,
    displayValueRaw: "6",
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
    if (prefersReducedMotion) {
      setCurrentCount(stat.value);
      return;
    }

    if (!isIntersecting) return;

    let animationFrameId: number;
    const duration = 1400; // 1.4s count-up
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
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
    <li
      className="group relative flex flex-col justify-between p-6 lg:py-15 border-t sm:border-t-0 lg:border-t-0 border-white/10 lg:border-l transition-colors duration-250 hover:bg-white/[0.025]"
      style={{
        opacity: isIntersecting || prefersReducedMotion ? 1 : 0,
        transform:
          isIntersecting || prefersReducedMotion
            ? "translateY(0)"
            : "translateY(20px)",
        transition: prefersReducedMotion
          ? "none"
          : `opacity 0.6s ease-out ${delayMs}ms, transform 0.6s ease-out ${delayMs}ms, background-color 0.25s ease`,
      }}
    >
      {/* Index */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-lg font-mono font-medium text-white/60 tracking-wider">
          {stat.index}
        </span>
      </div>

      {/* Large Number with Red Plus */}
      <div className="mb-8">
        <div
          className="flex items-baseline gap-0.5 group-hover:-translate-y-0.5 transition-transform duration-250"
          aria-label={stat.ariaLabel}
        >
          <span className="font-bold text-white tracking-[-0.045em] leading-[0.95] tabular-nums text-[42px] sm:text-[50px] lg:text-[clamp(46px,4.5vw,72px)]">
            {isIntersecting || prefersReducedMotion ? currentCount : 0}
          </span>
          {stat.hasPlus && (
            <span className="font-bold text-[#df012a] leading-none text-[26px] sm:text-[32px] lg:text-[clamp(30px,3vw,48px)] ml-0.5">
              +
            </span>
          )}
        </div>
      </div>

      {/* Label and Red Accent Line */}
      <div>
        <p className="text-[12px] sm:text-[13px] font-semibold text-white/60 uppercase tracking-[0.06em] leading-[1.4] line-clamp-2 group-hover:text-white/80 transition-colors duration-250 mb-4">
          {stat.label}
        </p>

        {/* Accent Line */}
        <div className="w-[38px] group-hover:w-[58px] h-[2px] bg-[#df012a] transition-all duration-250" />
      </div>
    </li>
  );
}

export function TrustBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full pb-12 lg:pb-16"
      aria-label="Proven experience and statistics"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Outer Dark Container */}
        <div
          className="relative overflow-hidden rounded-2xl lg:rounded-[20px] border border-white/10"
          style={{
            background:
              "radial-gradient(circle at 15% 50%, rgba(223, 1, 42, 0.18), transparent 35%), radial-gradient(circle at 85% 50%, rgba(223, 1, 42, 0.1), transparent 30%), #000000",
          }}
        >
          {/* Top Thin Red Gradient Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(90deg, transparent, #df012a 18%, #df012a 82%, transparent)",
            }}
            aria-hidden="true"
          />

          {/* Grid Layout: 5 Columns on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)] gap-0 items-stretch text-white">
            {/* Introduction Column */}
            <div
              className="p-6 sm:p-8 lg:p-[42px_34px] xl:p-[48px_42px] flex flex-col justify-between col-span-1 sm:col-span-2 lg:col-span-1 border-b sm:border-b-0 lg:border-b-0"
              style={{
                opacity: isIntersecting || prefersReducedMotion ? 1 : 0,
                transform:
                  isIntersecting || prefersReducedMotion
                    ? "translateY(0)"
                    : "translateY(18px)",
                transition: prefersReducedMotion
                  ? "none"
                  : "opacity 0.6s ease-out, transform 0.6s ease-out",
              }}
            >
              <div>
                <span className="block text-[11px] font-bold text-[#df012a] uppercase tracking-[0.14em] mb-2">
                  PROVEN DELIVERY
                </span>
                <h2 className="text-[clamp(22px,2vw,30px)] font-bold text-white leading-[1.15] mb-3">
                  Experience built through real-world delivery.
                </h2>
              </div>
            </div>

            {/* 4 Statistics Columns */}
            <ol className="contents">
              {statsData.map((stat, i) => (
                <StatColumn
                  key={stat.id}
                  stat={stat}
                  isIntersecting={isIntersecting}
                  prefersReducedMotion={prefersReducedMotion}
                  delayMs={120 + i * 80}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
