"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "AI Solutions", href: "/services/ai-automation" },
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300 overflow-clip ${
          isScrolled
            ? ""
            : ""
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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-medium rounded-md text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] hover:text-[#df012a] ${
                    isScrolled
                      ? " hover:bg-[#fbeaec]"
                      : " hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" size="sm" href="/contact">
                Discuss Your Project
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              type="button"
              className="md:hidden p-2 rounded-md text-white hover:text-[#df012a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] touch-manipulation cursor-pointer"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <Menu className="text-white" size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Side Drawer Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-full z-[9999] bg-black border-l border-white/10 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out ${
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

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col px-6 py-6 gap-2 flex-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-3.5 text-lg font-bold text-white rounded-xl hover:text-[#df012a] hover:bg-white/5 transition-all duration-150 border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-8 pt-2">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="w-full justify-center py-3.5 text-base"
            >
              Discuss Your Project
            </Button>
          </div>
        </nav>

        {/* Drawer Footer */}
        <div className="px-6 py-6 border-t border-white/10 text-center text-xs text-white/50">
          © eTechLogix LLC. All rights reserved.
        </div>
      </div>
    </>
  );
}
