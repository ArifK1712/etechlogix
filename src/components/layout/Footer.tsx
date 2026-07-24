import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Inline SVGs for social icons (lucide-react dropped Linkedin/Twitter in v0.400+)
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.733-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const footerLinks = {
  Services: [
    { label: "AI & Intelligent Automation", href: "/services/ai-automation" },
    { label: "Custom Software Engineering", href: "/services/custom-software" },
    { label: "Cloud & Modernisation", href: "/services/cloud" },
    { label: "Data Engineering", href: "/services/data" },
    { label: "Dedicated Technology Teams", href: "/services/teams" },
  ],
  Industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Event Technology", href: "/industries/event-technology" },
    { label: "Retail & E-Commerce", href: "/industries/retail" },
    { label: "Enterprise Operations", href: "/industries/enterprise" },
    { label: "Professional Services", href: "/industries/professional-services" },
  ],
  Company: [
    { label: "About Us", href: "/company" },
    { label: "Our Work", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-10">
        {/* CTA strip */}
        <div className="mb-12 pb-8 border-b border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Ready to build something intelligent?</p>
            <p className="text-gray-400 text-base mt-1">Let&apos;s start with a conversation.</p>
          </div>
          <Button variant="primary" size="md" href="/contact">
            Discuss Your Project <ArrowUpRight size={16} />
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-xs">
              AI and custom software engineering company helping businesses modernise operations,
              automate workflows, and build scalable digital products.
            </p>
            {/* Contact info */}
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-[#df012a] flex-shrink-0" />
                <span>Scottsdale, Arizona, United States</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-[#df012a] flex-shrink-0" />
                <a
                  href="mailto:hello@etechlogix.com"
                  className="hover:text-[#df012a] transition-colors"
                >
                  hello@etechlogix.com
                </a>
              </li>
            </ul>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/etechlogix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="eTechLogix on LinkedIn"
                className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#df012a] hover:bg-[#df012a] transition-all duration-200"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://twitter.com/etechlogix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="eTechLogix on X (Twitter)"
                className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#df012a] hover:bg-[#df012a] transition-all duration-200"
              >
                <XIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                  {group}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#df012a] rounded"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p className="text-gray-400">
            © {year} eTechLogix LLC. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-gray-200 text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-200 text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
