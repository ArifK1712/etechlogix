import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-15 md:py-20 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Frequently Asked Questions"
          title="Questions we"
          titleHighlight="hear most often."
          description="Can't find what you're looking for? Reach out directly and we'll respond within one business day."
        />
        <Accordion items={faqs} />
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-base">
            Still have questions?{" "}
            <Link
              href="/contact"
              className="text-[#df012a] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded"
            >
              Get in touch →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
