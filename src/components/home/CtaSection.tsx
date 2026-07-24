import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="contact-cta"
      className="py-15 md:py-20 bg-[#df012a] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/70 text-base font-bold uppercase tracking-widest mb-4">
          Ready to get started?
        </p>
        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
        >
          Let&apos;s build something{" "}
          <span className="text-white/80">intelligent</span> together.
        </h2>
        <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re exploring AI automation, planning a modernisation, or need a team to
          build your next platform — start with a conversation. No obligation, no pitch deck.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            id="cta-discuss-project"
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#df012a] font-bold rounded-xl hover:bg-gray-50 transition-colors duration-200 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#df012a] shadow-xl"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
          <a
            id="cta-email"
            href="mailto:hello@etechlogix.com"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#df012a]"
          >
            <Mail size={18} /> hello@etechlogix.com
          </a>
        </div>

        <p className="mt-8 text-white/50 text-base">
          We typically respond within 1 business day.
        </p>
      </div>
    </section>
  );
}
