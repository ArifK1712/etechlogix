"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Code2,
  Network,
  RefreshCcw,
  Rocket,
  Users,
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Capability {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const capabilities: Capability[] = [
  {
    eyebrow: "AI & AUTOMATION",
    title: "Agentic AI Workflow Automation",
    description:
      "AI agents that connect enterprise systems, process documents, execute multi-step tasks, apply business rules, and involve people when approvals are required.",
    icon: Bot,
    href: "#ai-solutions",
  },
  {
    eyebrow: "CUSTOM SOFTWARE",
    title: "Enterprise Custom Software",
    description:
      "Purpose-built platforms for internal operations, customer portals, ERP workflows, event management, and healthcare — designed around how your business actually works.",
    icon: Code2,
    href: "/services/custom-software",
  },
  {
    eyebrow: "INTEGRATIONS",
    title: "Enterprise System Integrations",
    description:
      "Secure connections across Salesforce, MuleSoft, ERP platforms, cloud services, and custom applications — turning isolated systems into one coordinated data flow.",
    icon: Network,
    href: "/services/enterprise-integrations",
  },
  {
    eyebrow: "MODERNISATION",
    title: "Legacy System Modernization",
    description:
      "Migrate ageing applications, improve integrations, and introduce scalable cloud and AI capabilities through a phased approach that avoids disrupting live operations.",
    icon: RefreshCcw,
    href: "/#custom-software",
  },
  {
    eyebrow: "STARTUPS",
    title: "Startup Prototype Development",
    description:
      "Rapid MVP and prototype development for founders who need a working product to validate their concept, attract investment, or reach their first customers quickly.",
    icon: Rocket,
    href: "#startups",
  },
  {
    eyebrow: "TEAM EXTENSION",
    title: "Product Engineering & Team Extension",
    description:
      "Experienced engineers, architects, and AI specialists who integrate with your existing team, take ownership of delivery, and scale up or down as requirements change.",
    icon: Users,
    href: "/#custom-software",
  },
];

export function EngineeringCapabilitiesSection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

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
      transition: { staggerChildren: 0.07 },
    },
  };

  return (
    <section
      id="custom-software"
      className="relative z-10 w-full overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,#1a0509_0%,#110307_50%,#090506_100%)] py-16 text-white lg:py-20"
      aria-labelledby="engineering-capabilities-heading"
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#df012a]/[0.07] blur-[120px]"
        aria-hidden="true"
      />

      {/* Dotted pattern top-right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-20"
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
          className="mb-12 max-w-3xl space-y-4 lg:mb-14"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
            <div className="inline-flex items-center gap-2 text-[#df012a]">
              <span className="h-px w-5 bg-[#df012a]" aria-hidden="true" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.16em]">
                ENGINEERING CAPABILITIES
              </span>
            </div>
          </motion.div>

          <motion.h2
            id="engineering-capabilities-heading"
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="text-[32px] font-bold leading-[1.1] tracking-tight text-white sm:text-[44px]"
          >
            Engineering capabilities built around{" "}
            <span className="text-[#df012a]">complex business operations.</span>
          </motion.h2>

          <motion.p
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="max-w-2xl font-normal leading-relaxed text-gray-300"
          >
            From AI-powered workflow automation to enterprise integrations and custom platforms — delivered by a team that understands operational complexity.
          </motion.p>
        </motion.div>

        {/* Capability grid — 3 columns desktop, 2 tablet, 1 mobile */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                variants={prefersReducedMotion ? undefined : fadeIn}
                className="group relative flex flex-col rounded-2xl border border-white/[0.12] bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#df012a]/50 hover:bg-[#200810]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                aria-label={item.title}
              >
                {/* Icon + eyebrow */}
                <div className="mb-4 flex items-start gap-3.5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#df012a]/25 bg-[#df012a]/12 text-[#df012a] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <span className="mt-2.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#df012a]">
                    {item.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-base font-bold leading-snug text-white transition-colors duration-300 group-hover:text-[#df012a] sm:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="flex-1 leading-relaxed text-gray-400">
                  {item.description}
                </p>

                {/* Arrow link — bottom right */}
                <div className="mt-5 flex items-center justify-end">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#df012a]/60 transition-colors duration-200 group-hover:text-[#df012a]">
                    Learn more
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
