import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface ServiceHeroProps {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt: string;
  proofPill?: string;
}

export function ServiceHero({
  eyebrow,
  heading,
  headingAccent,
  description,
  primaryCtaText = "Discuss Your Project",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Capabilities",
  secondaryCtaHref = "#capabilities",
  imageSrc,
  imageAlt,
  proofPill,
}: ServiceHeroProps) {
  return (
    <section 
      className="relative z-10 w-full pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white text-black overflow-hidden"
      aria-label={`${eyebrow} hero`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.16em]">
              <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
              {eyebrow}
            </span>

            <h1 className="text-black font-bold text-[36px] sm:text-[48px] lg:text-[clamp(42px,4.5vw,60px)] leading-[1.08] tracking-tight">
              {heading}{" "}
              {headingAccent && (
                <span className="text-[#df012a]">{headingAccent}</span>
              )}
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href={primaryCtaHref}>
                {primaryCtaText}
              </Button>
              <Button variant="secondary" size="md" href={secondaryCtaHref}>
                {secondaryCtaText} <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>

            {/* Proof Pill Badge */}
            {proofPill && (
              <div className="pt-2">
                <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#fbeaec] border border-[#df012a]/20 text-xs font-semibold text-gray-900">
                  <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse flex-shrink-0" aria-hidden="true" />
                  <span>{proofPill}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Enterprise Photographic Showcase (Realistic, no cards/code holograms) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 group">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Subtle Image Tagline */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 text-white">
                  <span className="text-[10px] font-mono text-[#df012a] font-bold uppercase block mb-0.5 tracking-wider">
                    ENTERPRISE ARCHITECTURE
                  </span>
                  <p className="text-xs font-medium text-gray-200 leading-snug">
                    Engineering reliable, scalable custom software for mission-critical operations.
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
