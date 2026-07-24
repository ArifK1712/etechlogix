"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavCategory {
  id: string;
  label: string;
  href: string;
  items: NavDropdownItem[];
}

const navCategories: NavCategory[] = [
  {
    id: "services",
    label: "Services",
    href: "/services",
    items: [
      { label: "Enterprise Custom Software", href: "/services/custom-software" },
      { label: "Enterprise Integrations", href: "/services/enterprise-integrations" },
      { label: "Legacy Modernisation", href: "/services/legacy-modernisation" },
      { label: "Dedicated Engineering Teams", href: "/services/dedicated-engineering-teams" },
      { label: "Startup Prototypes & MVPs", href: "/services/startup-prototypes-mvps" },
    ],
  },
  {
    id: "ai-solutions",
    label: "AI Solutions",
    href: "/services/ai-automation",
    items: [
      { label: "Agentic AI & Workflow Automation", href: "/ai-solutions/agentic-ai-workflow-automation" },
      { label: "Document Processing Agents", href: "/ai-solutions/document-processing-agents" },
      { label: "ERP & CRM Connected Agents", href: "/ai-solutions/erp-crm-connected-agents" },
      { label: "Approval & Exception Agents", href: "/ai-solutions/approval-exception-agents" },
      { label: "Healthcare Workflow Agents", href: "/ai-solutions/healthcare-workflow-agents" },
      { label: "Event Operations Agents", href: "/ai-solutions/event-operations-agents" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    href: "/industries",
    items: [
      { label: "Events & Conferences", href: "/industries/events-conferences" },
      { label: "ERP & Distribution", href: "/industries/erp-distribution" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Enterprise Operations", href: "/industries/enterprise-operations" },
      { label: "Enterprise Integrations", href: "/industries/enterprise-integrations" },
      { label: "Startups & Digital Products", href: "/industries/startups-digital-products" },
    ],
  },
  {
    id: "case-studies",
    label: "Case Studies",
    href: "/case-studies",
    items: [
      { label: "All Case Studies", href: "/case-studies" },
      { label: "Agentic AI", href: "/case-studies/agentic-ai" },
      { label: "Enterprise Software", href: "/case-studies/enterprise-software" },
      { label: "Integrations", href: "/case-studies/integrations" },
      { label: "Startups & MVPs", href: "/case-studies/startups-mvps" },
    ],
  },
  {
    id: "company",
    label: "Company",
    href: "/company",
    items: [
      { label: "About eTechLogix", href: "/company/about" },
      { label: "How We Work", href: "/company/how-we-work" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Handle outside click & Escape key to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (catId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileCat = (catId: string) => {
    setMobileExpandedCat((prev) => (prev === catId ? null : catId));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isScrolled ? "" : ""
        }`}
      >
        {/* Background Red Glow */}
        <div 
          className="absolute left-1/2 -z-20 -translate-x-1/2 w-full h-10 bg-[#df012a]/80 blur-2xl pointer-events-none"
          aria-hidden="true" 
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] rounded"
              aria-label="eTechLogix — Home"
            >
              <Image src="/logo.png" alt="eTechLogix Logo" width={150} height={50} className="h-8 w-auto sm:h-15" />
            </a>

            {/* Desktop Nav with Accessible Multi-level Dropdowns */}
            <nav
              ref={navRef}
              className="hidden md:flex items-center gap-1 relative"
              aria-label="Main navigation"
            >
              {navCategories.map((category) => {
                const isOpen = activeDropdown === category.id;
                return (
                  <div
                    key={category.id}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={category.href}
                      className={`inline-flex items-center gap-1 px-4 py-2 rounded-md text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] ${
                        isOpen ? "text-[#df012a] bg-white/10" : "hover:text-[#df012a] hover:bg-white/10"
                      }`}
                      aria-expanded={isOpen}
                      aria-controls={`dropdown-${category.id}`}
                      onClick={(e) => {
                        // Allow direct navigation if clicked or toggle on keyboard focus
                        if (isOpen) setActiveDropdown(null);
                      }}
                    >
                      <span>{category.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#df012a]" : "text-gray-400"
                        }`}
                      />
                    </a>

                    {/* Desktop Dropdown Panel */}
                    <div
                      id={`dropdown-${category.id}`}
                      className={`absolute top-full left-0 pt-2 w-64 z-50 transition-all duration-200 ease-out origin-top-left ${
                        isOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby={`cat-${category.id}`}
                    >
                      <div className="bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl shadow-2xl rounded-2xl p-2 space-y-0.5">
                        {category.items.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="block px-3.5 py-2 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Primary Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" size="sm" href="/contact">
                Discuss Your Project
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              className="md:hidden p-2 rounded-md text-white hover:text-[#df012a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] touch-manipulation cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Side Drawer Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-[380px] z-[9999] bg-black border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <a href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="eTechLogix Logo" width={130} height={42} className="h-7 w-auto" />
          </a>
          <button
            type="button"
            className="p-2 rounded-lg text-white hover:text-[#df012a] hover:bg-white/10 transition-colors focus-visible:outline-none"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Drawer Collapsible Accordion Navigation */}
        <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {navCategories.map((category) => {
            const isExpanded = mobileExpandedCat === category.id;
            return (
              <div key={category.id} className="border-b border-white/5 pb-1">
                <div className="flex items-center justify-between">
                  <a
                    href={category.href}
                    className="flex-1 py-3 px-3 text-base font-bold text-white hover:text-[#df012a] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {category.label}
                  </a>
                  <button
                    type="button"
                    className="p-3 text-gray-400 hover:text-white transition-colors"
                    onClick={() => toggleMobileCat(category.id)}
                    aria-label={`Toggle ${category.label} sub-items`}
                    aria-expanded={isExpanded}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[#df012a]" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Mobile Collapsible Sub-items */}
                {isExpanded && (
                  <div className="pl-4 pr-2 pb-2 space-y-1 bg-white/5 rounded-xl py-2 my-1">
                    {category.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className="block py-2 px-3 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Primary CTA inside Mobile Menu */}
          <div className="mt-6 pt-2 px-2">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="w-full justify-center py-3.5 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Discuss Your Project
            </Button>
          </div>
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-5 border-t border-white/10 text-center text-xs text-white/40">
          © eTechLogix LLC. All rights reserved.
        </div>
      </div>
    </>
  );
}
