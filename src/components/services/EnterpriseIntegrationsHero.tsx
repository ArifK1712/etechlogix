"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  RefreshCcw,
  Network,
  Boxes,
  Cloud,
  MonitorCog,
  Database,
  Waypoints,
  DatabaseZap,
  Workflow,
  ChartNoAxesCombined,
  CheckCircle2,
  Code2,
  Lock,
  GitMerge,
} from "lucide-react";

/* ─── Stage 1 Data: Business Systems ────────────────────────── */
const businessSystems = [
  { icon: Boxes,       label: "ERP",                 color: "text-rose-600"   },
  { icon: Cloud,       label: "Salesforce",          color: "text-sky-600"    },
  { icon: MonitorCog,  label: "Legacy Applications", color: "text-violet-600" },
  { icon: Database,    label: "Databases",           color: "text-cyan-600"   },
];

/* ─── Stage 2 Data: Integration Capabilities ───────────────── */
const integrationCapabilities = [
  { icon: Code2,    label: "APIs"                },
  { icon: Network,  label: "MuleSoft"            },
  { icon: GitMerge, label: "Event-driven flows"  },
  { icon: Lock,     label: "Secure connectors"   },
];

/* ─── Stage 3 Data: Connected Outcomes ──────────────────────── */
const connectedOutcomes = [
  { icon: DatabaseZap,         label: "Synced data",          color: "text-sky-600"    },
  { icon: Workflow,            label: "Automated workflows",  color: "text-[#df012a]"  },
  { icon: ChartNoAxesCombined, label: "Real-time visibility", color: "text-emerald-600"},
];

export function EnterpriseIntegrationsHero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const nodeStagger = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: (customDelay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      className="relative z-10 w-full pt-8 pb-16 lg:pt-12 lg:pb-20 bg-[linear-gradient(180deg,#ffffff_0%,#fffafa_60%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
      aria-labelledby="hero-integrations-heading"
    >
      {/* Subtle dotted technical pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Soft red radial glow behind visual area */}
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[450px] bg-[#fbeaec]/80 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─── LEFT CONTENT COLUMN (~42% desktop width) ─── */}
          <motion.div
            className="lg:col-span-5 space-y-6 lg:space-y-7"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
          >
            {/* Eyebrow Pill */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] text-xs font-mono font-bold uppercase tracking-[0.16em]">
                <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" aria-hidden="true" />
                <span>ENTERPRISE INTEGRATIONS</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              id="hero-integrations-heading"
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-black font-bold text-[36px] sm:text-[48px] lg:text-[52px] leading-[1.08] tracking-tight"
            >
              Connect the systems that{" "}
              <span className="text-[#df012a]">run your business.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-xl"
            >
              We connect enterprise applications, data platforms, APIs, and legacy systems to create
              reliable workflows across your technology ecosystem.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#df012a] text-white font-semibold text-sm hover:bg-[#c00124] transition-all duration-200 shadow-md shadow-[#df012a]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2"
              >
                <span>Discuss Your Integration Project</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#integration-challenges"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-gray-300 text-gray-900 font-semibold text-sm hover:border-gray-400 hover:bg-gray-50/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                <span>Explore Capabilities</span>
                <ArrowRight size={18} className="text-[#df012a]" />
              </Link>
            </motion.div>

            {/* Credibility Points */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-700 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#df012a] shrink-0" />
                <span>Secure data exchange</span>
              </div>
              <span className="hidden sm:block text-gray-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <RefreshCcw size={18} className="text-[#df012a] shrink-0" />
                <span>Reliable synchronisation</span>
              </div>
              <span className="hidden sm:block text-gray-300" aria-hidden="true">•</span>
              <div className="flex items-center gap-2">
                <Network size={18} className="text-[#df012a] shrink-0" />
                <span>Built for enterprise scale</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT VISUAL COLUMN (~58% desktop width) ─── */}
          <div className="lg:col-span-7 relative">
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/40 relative overflow-hidden">
              
              {/* Internal subtle background pattern */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(223,1,42,0.18) 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
                aria-hidden="true"
              />

              {/* Visual Canvas Layout: 3 Stages Flow */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* ── STAGE 1: BUSINESS SYSTEMS (4 cols on md) ── */}
                <motion.div
                  custom={0.1}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={nodeStagger}
                  className="md:col-span-4 space-y-3"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                      BUSINESS SYSTEMS
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
                    {businessSystems.map((sys, i) => {
                      const Icon = sys.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-xl px-3 py-2.5 shadow-xs hover:border-gray-300 transition-colors"
                        >
                          <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                            <Icon size={16} className={sys.color} strokeWidth={1.8} />
                          </div>
                          <span className="text-xs font-semibold text-gray-800 truncate">
                            {sys.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* ── DESKTOP HORIZONTAL CONNECTOR 1 (1 col on md) ── */}
                <div className="hidden md:flex md:col-span-1 justify-center items-center relative py-4" aria-hidden="true">
                  <div className="w-full h-px bg-[#df012a]/30 relative flex items-center justify-center">
                    {!prefersReducedMotion && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#df012a]"
                        animate={{ x: [-12, 12, -12] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    )}
                    <svg width="8" height="12" viewBox="0 0 8 12" className="absolute -right-1 text-[#df012a]">
                      <path d="M0 0L8 6L0 12V0Z" fill="currentColor" fillOpacity="0.8" />
                    </svg>
                  </div>
                </div>

                {/* ── MOBILE VERTICAL CONNECTOR 1 ── */}
                <div className="flex md:hidden justify-center items-center py-1" aria-hidden="true">
                  <div className="h-6 w-px bg-[#df012a]/40 relative flex items-center justify-center">
                    <svg width="12" height="8" viewBox="0 0 12 8" className="absolute -bottom-1 text-[#df012a]">
                      <path d="M6 8L0 0H12L6 8Z" fill="currentColor" fillOpacity="0.8" />
                    </svg>
                  </div>
                </div>

                {/* ── STAGE 2: INTEGRATION & ORCHESTRATION (FEATURING LAYER - 4 cols on md) ── */}
                <motion.div
                  custom={0.2}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={nodeStagger}
                  className="md:col-span-4 bg-[#fbeaec]/90 border-2 border-[#df012a]/40 rounded-2xl p-4 sm:p-5 shadow-md shadow-[#df012a]/10 relative overflow-hidden space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#df012a] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Waypoints size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a] block">
                        Integration & Orchestration
                      </span>
                      <span className="text-[11px] text-gray-600 font-medium block">
                        Enterprise Data & API Pipeline
                      </span>
                    </div>
                  </div>

                  {/* 4 Compact Capability Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {integrationCapabilities.map((cap, i) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 bg-white/90 border border-[#df012a]/20 rounded-lg px-2.5 py-1.5 shadow-2xs"
                        >
                          <Icon size={13} className="text-[#df012a] shrink-0" />
                          <span className="text-[11px] font-bold text-gray-900 truncate">
                            {cap.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* ── DESKTOP HORIZONTAL CONNECTOR 2 (1 col on md) ── */}
                <div className="hidden md:flex md:col-span-1 justify-center items-center relative py-4" aria-hidden="true">
                  <div className="w-full h-px bg-[#df012a]/30 relative flex items-center justify-center">
                    {!prefersReducedMotion && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-[#df012a]"
                        animate={{ x: [-12, 12, -12] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      />
                    )}
                    <svg width="8" height="12" viewBox="0 0 8 12" className="absolute -right-1 text-[#df012a]">
                      <path d="M0 0L8 6L0 12V0Z" fill="currentColor" fillOpacity="0.8" />
                    </svg>
                  </div>
                </div>

                {/* ── MOBILE VERTICAL CONNECTOR 2 ── */}
                <div className="flex md:hidden justify-center items-center py-1" aria-hidden="true">
                  <div className="h-6 w-px bg-[#df012a]/40 relative flex items-center justify-center">
                    <svg width="12" height="8" viewBox="0 0 12 8" className="absolute -bottom-1 text-[#df012a]">
                      <path d="M6 8L0 0H12L6 8Z" fill="currentColor" fillOpacity="0.8" />
                    </svg>
                  </div>
                </div>

                {/* ── STAGE 3: CONNECTED OPERATIONS (2 cols on md) ── */}
                <motion.div
                  custom={0.3}
                  initial={prefersReducedMotion ? false : "hidden"}
                  animate="visible"
                  variants={nodeStagger}
                  className="md:col-span-2 space-y-3"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                      CONNECTED OPERATIONS
                    </span>
                  </div>

                  <div className="space-y-2">
                    {connectedOutcomes.map((outcome, i) => {
                      const Icon = outcome.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-gray-50/80 border border-gray-200/80 rounded-xl px-2.5 py-2 shadow-2xs hover:bg-white transition-colors"
                        >
                          <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center shrink-0 border border-gray-200/80">
                            <Icon size={14} className={outcome.color} strokeWidth={1.8} />
                          </div>
                          <span className="text-[11px] font-medium text-gray-900 leading-tight">
                            {outcome.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

              </div>

              {/* Bottom Context Strip */}
              <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-[#df012a]" />
                  <span>Bi-directional Data Flows</span>
                </div>
                <span className="font-mono text-[11px] text-gray-400">Zero System Downtime</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
