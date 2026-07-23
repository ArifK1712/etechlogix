"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  duration?: number;
}

function extractNumber(str: string): { number: number; prefix: string; suffix: string } {
  const match = str.match(/^([^0-9]*)([0-9,.]+)([^0-9]*)$/);
  if (!match) return { number: 0, prefix: "", suffix: str };
  const num = parseFloat(match[2].replace(/,/g, ""));
  return { number: isNaN(num) ? 0 : num, prefix: match[1], suffix: match[3] };
}

export function AnimatedCounter({ value, label, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { number, prefix, suffix } = extractNumber(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || number === 0) return;
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * number));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(number);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, number, duration]);

  const displayValue = number > 0 ? `${prefix}${count.toLocaleString()}${suffix}` : value;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-black mb-1 tabular-nums">
        {displayValue}
      </div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  );
}
