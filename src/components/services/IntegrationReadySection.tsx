"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  PlugZap,
  Layers3,
  DatabaseZap,
  ArrowRight,
  Boxes,
  Cloud,
  MonitorCog,
  Database,
  Plug,
  Workflow,
  Share2,
  BarChart3,
  RefreshCcw,
  CheckCircle2,
  Cpu,
  Zap,
} from "lucide-react";

/* ─── Stage 1 Data: Existing Systems (9 Items) ───────────────── */
const existingSystems = [
  { icon: Boxes,       label: "ERP",                 color: "text-rose-600"   },
  { icon: Cloud,       label: "CRM / Salesforce",    color: "text-sky-600"    },
  { icon: Database,    label: "Databases",           color: "text-cyan-600"   },
  { icon: MonitorCog,  label: "Legacy Applications", color: "text-violet-600" },
  { icon: Plug,        label: "Third-party APIs",    color: "text-orange-500" },
  { icon: Share2,      label: "MuleSoft",            color: "text-indigo-600" },
  { icon: Workflow,    label: "Descartes",           color: "text-teal-600"   },
  { icon: BarChart3,   label: "Avalara",             color: "text-amber-600"  },
  { icon: RefreshCcw,  label: "DMSi Agility",        color: "text-emerald-600"},
];

/* ─── Stage 2 Data: Custom Software & Integration Layer (4 Items) ─ */
const integrationCapabilities = [
  "Custom applications and portals",
  "Workflow automation",
  "System and API integrations",
  "AI-assisted operational processes",
];

/* ─── Stage 3 Data: Connected Business Outcomes (4 Items) ─────── */
const connectedOutcomes = [
  { icon: Database,    label: "Unified business data",        color: "text-sky-600"    },
  { icon: Zap,         label: "Automated handoffs",           color: "text-[#df012a]"  },
  { icon: BarChart3,   label: "Real-time operational visibility", color: "text-emerald-600"},
  { icon: Share2,      label: "Coordinated teams and systems", color: "text-indigo-600" },
];

/* ─── Downward Connector Arrow Component ────────────────────── */
function StageConnector() {
  return (
    <div className="relative w-full flex justify-center items-center py-1" aria-hidden="true">
      <div className="flex flex-col items-center">
        <div className="w-px h-3.5 bg-[#df012a]/40" />
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path d="M6 7L0 0H12L6 7Z" fill="#df012a" fillOpacity="0.85" />
        </svg>
      </div>
    </div>
  );
}

export function IntegrationReadySection() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const stageVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      className="relative z-10 w-full py-14 lg:py-18 bg-[linear-gradient(180deg,#ffffff_0%,#fdf6f7_60%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
      aria-labelledby="integration-ready-heading"
    >
      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      {/* Soft bottom-left glow */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#fbeaec]/70 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* ─── LEFT CONTENT COLUMN (~40% WIDTH ON DESKTOP) ─── */}
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            {/* Eyebrow */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
              <div className="inline-flex items-center gap-2 text-[#df012a]">
                <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em]">
                  INTEGRATION-READY BY DESIGN
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              id="integration-ready-heading"
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-black font-bold text-[30px] sm:text-[40px] leading-[1.1] tracking-tight"
            >
              Designed to fit your{" "}
              <span className="text-[#df012a]">existing technology ecosystem.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-gray-700 leading-relaxed font-normal"
            >
              We build custom software that connects with the ERP, CRM, data platforms, APIs,
              and legacy applications your business already depends on.
            </motion.p>

            {/* Three open list items */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="pt-3"
            >
              {[
                {
                  icon: PlugZap,
                  title: "Connect without disruption",
                  desc: "Integrate new capabilities with the systems and workflows your teams already use.",
                },
                {
                  icon: Layers3,
                  title: "Modernise in phases",
                  desc: "Improve outdated processes gradually instead of replacing everything at once.",
                },
                {
                  icon: DatabaseZap,
                  title: "Keep data synchronised",
                  desc: "Maintain reliable information flow while reducing duplicate entry and manual handoffs.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="py-4 first:pt-0 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center shrink-0 border border-[#df012a]/20">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-0.5">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA text link */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeIn} className="pt-2">
              <Link
                href="/services/enterprise-integrations"
                className="inline-flex items-center gap-2 text-[#df012a] font-semibold text-sm group transition-all duration-200 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2 rounded"
                aria-label="Explore Enterprise Integrations service page"
              >
                <span>Explore Enterprise Integrations</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COMPACT 3-LEVEL ARCHITECTURE VISUAL (~60% WIDTH ON DESKTOP) ─── */}
          <div className="lg:col-span-7 space-y-1">

            {/* LEVEL 1: EXISTING SYSTEMS */}
            <motion.div
              custom={0}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                    EXISTING SYSTEMS
                  </span>
                </div>
                <span className="text-xs text-gray-500 font-normal hidden sm:inline">
                  Your current platforms and data sources
                </span>
              </div>

              {/* Compact Wrapping Grid */}
              <div className="flex flex-wrap gap-2 pt-1">
                {existingSystems.map((sys, i) => {
                  const Icon = sys.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white border border-gray-200/90 rounded-lg px-2.5 py-1.5 shadow-2xs hover:border-gray-300 transition-colors"
                    >
                      <div className="w-6 h-6 rounded bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                        <Icon size={14} className={sys.color} strokeWidth={2} />
                      </div>
                      <span className="text-xs font-medium text-gray-800">
                        {sys.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* DOWNWARD CONNECTOR 1 */}
            <StageConnector />

            {/* LEVEL 2: CUSTOM SOFTWARE & INTEGRATION LAYER */}
            <motion.div
              custom={0.1}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-[#fbeaec]/80 border-2 border-[#df012a]/40 rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#df012a] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Cpu size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a] block">
                        CUSTOM SOFTWARE &amp; INTEGRATION LAYER
                      </span>
                      <p className="text-gray-700 font-medium">
                        Built around your systems, workflows, and business rules.
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-[#df012a]/20 text-[11px] font-semibold text-[#df012a] shrink-0">
                    <Workflow size={13} />
                    <span>Built for Your Operations</span>
                  </div>
                </div>

                {/* 4 Capabilities Grid in one row on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2.5 border-t border-[#df012a]/15">
                  {integrationCapabilities.map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center justify-start text-start text-xs font-semibold text-gray-800 bg-white/80 border border-[#df012a]/20 rounded-lg px-2.5 py-2 shadow-2xs"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* DOWNWARD CONNECTOR 2 */}
            <StageConnector />

            {/* LEVEL 3: CONNECTED BUSINESS OUTCOMES */}
            <motion.div
              custom={0.2}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-white border border-gray-200/90 rounded-2xl p-4 sm:p-5 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                  CONNECTED BUSINESS OUTCOMES
                </span>
              </div>

              {/* 4 Outcomes in 1 row on large desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {connectedOutcomes.map((outcome, i) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-gray-50/80 border border-gray-200/80 rounded-xl p-2.5 shadow-2xs hover:bg-white transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 border border-gray-200/80">
                        <Icon size={15} className={outcome.color} strokeWidth={2} />
                      </div>
                      <span className="text-xs font-semibold text-gray-900 leading-tight">
                        {outcome.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Summary Line inside same panel below subtle divider */}
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2 font-medium text-gray-700">
                <CheckCircle2 size={15} className="text-[#df012a] shrink-0" />
                <span>Built around your existing systems and the way your business actually operates.</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
