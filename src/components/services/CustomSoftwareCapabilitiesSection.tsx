"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  PanelsTopLeft,
  Workflow,
  Bot,
  Boxes,
  CalendarDays,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CapabilityItem {
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  useCases: string[];
}

const capabilities: CapabilityItem[] = [
  {
    category: "CUSTOMER EXPERIENCE",
    title: "Enterprise Web Applications & Portals",
    description:
      "Secure, role-based platforms that connect customers, partners, vendors, and internal teams.",
    icon: PanelsTopLeft,
    useCases: [
      "Customer portals",
      "Partner and vendor portals",
      "Membership platforms",
      "Employee self-service",
    ],
  },
  {
    category: "BUSINESS OPERATIONS",
    title: "Internal Operations Platforms",
    description:
      "Custom systems that replace spreadsheets, email chains, and disconnected operational tools.",
    icon: Workflow,
    useCases: [
      "Approval workflows",
      "Task and process management",
      "Request processing",
      "Operational dashboards",
    ],
  },
  {
    category: "INTELLIGENT AUTOMATION",
    title: "Workflow Automation & AI Agents",
    description:
      "Agentic AI and automation solutions that coordinate repetitive and decision-driven business processes.",
    icon: Bot,
    useCases: [
      "Document processing",
      "Intelligent request routing",
      "Approval automation",
      "AI-assisted operations",
    ],
  },
  {
    category: "ENTERPRISE OPERATIONS",
    title: "ERP & Distribution Solutions",
    description:
      "Connected platforms for inventory, orders, warehouses, pricing, and distribution operations.",
    icon: Boxes,
    useCases: [
      "Inventory management",
      "Order processing",
      "Warehouse workflows",
      "Distributor management",
    ],
  },
  {
    category: "INDUSTRY PLATFORMS",
    title: "Event & Conference Systems",
    description:
      "End-to-end event platforms for organisers, attendees, exhibitors, sponsors, and on-site teams.",
    icon: CalendarDays,
    useCases: [
      "Registration and ticketing",
      "Exhibitor and sponsor portals",
      "On-site check-in",
      "B2B meeting scheduling",
    ],
  },
  {
    category: "REGULATED SOFTWARE",
    title: "Healthcare Software Solutions",
    description:
      "Secure software for healthcare workflows, operations, data, patients, and providers.",
    icon: HeartPulse,
    useCases: [
      "Patient and provider portals",
      "Care coordination",
      "Appointment workflows",
      "Secure system integrations",
    ],
  },
];

export function CustomSoftwareCapabilitiesSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section
      className="relative z-10 w-full overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1a0509_0%,#110307_50%,#090506_100%)] py-16 text-white lg:py-20"
      aria-labelledby="capabilities-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#df012a]/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      {/* Subtle dotted pattern */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[550px] w-[550px] opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.3) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(circle at top right, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at top right, black 25%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mb-12 max-w-3xl space-y-4 lg:mb-16"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
            <div className="inline-flex items-center gap-2 text-[#df012a]">
              <span className="h-px w-5 bg-[#df012a]" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em]">
                WHAT WE BUILD
              </span>
            </div>
          </motion.div>

          <motion.h2
            id="capabilities-heading"
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="text-[32px] font-bold leading-[1.1] tracking-tight text-white sm:text-[44px]"
          >
            Custom software for the workflows that{" "}
            <span className="text-[#df012a]">run your business.</span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="max-w-2xl text-base font-normal leading-relaxed text-gray-300 sm:text-lg"
          >
            From customer-facing platforms to complex internal operations, we design software around your users, processes, integrations, and long-term business goals.
          </motion.p>
        </motion.div>

        {/* Capability grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={prefersReducedMotion ? undefined : fadeIn}
                className="group relative flex h-full flex-col justify-start rounded-3xl border border-white/20 bg-white/[0.035] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#df012a]/60 hover:bg-[#250910]/80 sm:p-7"
              >
                <div>
                  {/* Icon and title */}
                  <div className="mb-4 flex items-start gap-3.5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-[#df012a]/30 bg-[#df012a]/15 text-[#df012a] transition-transform duration-300 group-hover:scale-105">
                      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                    </div>

                    <div className="pt-0.5">
                      <span className="mb-1 block font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                        {item.category}
                      </span>

                      <h3 className="text-2xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#df012a]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-5 text-base leading-relaxed text-gray-300">{item.description}</p>

                  {/* Divider */}
                  <div className="mb-5 h-px w-full bg-white/20" aria-hidden="true" />

                  {/* Use cases */}
                  <ul className="space-y-2.5" aria-label={`Use cases for ${item.title}`}>
                    {item.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-center gap-2.5 text-sm font-medium text-gray-300">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#df012a]" aria-hidden="true" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}