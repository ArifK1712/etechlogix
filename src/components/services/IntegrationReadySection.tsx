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

/* ─── Stage 1 Data: Existing Systems ────────────────────────── */
const existingSystems = [
  { icon: Boxes,       label: "ERP",                 color: "text-rose-600"   },
  { icon: Cloud,       label: "CRM / Salesforce",    color: "text-sky-600"    },
  { icon: Database,    label: "Databases",           color: "text-cyan-600"   },
  { icon: MonitorCog,  label: "Legacy Software",     color: "text-violet-600" },
  { icon: Plug,        label: "Third-party APIs",    color: "text-orange-500" },
];

/* ─── Stage 3 Data: Connected Operations ────────────────────── */
const connectedOutcomes = [
  { icon: Share2,     label: "Shared data",          color: "text-sky-600"    },
  { icon: Zap,        label: "Automated workflows",  color: "text-[#df012a]"  },
  { icon: BarChart3,  label: "Real-time visibility", color: "text-emerald-600"},
  { icon: RefreshCcw, label: "Phased modernisation", color: "text-indigo-600" },
];

/* ─── Downward Connector Arrow Component ────────────────────── */
function StageConnector() {
  return (
    <div className="relative w-full flex justify-center items-center py-2" aria-hidden="true">
      <div className="flex flex-col items-center">
        {/* Line stem */}
        <div className="w-px h-5 bg-[#df012a]/40" />
        {/* Downward triangle arrow */}
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
          <path d="M7 9L0 0H14L7 9Z" fill="#df012a" fillOpacity="0.85" />
        </svg>
        {/* Small connection dot */}
        <div className="w-2 h-2 rounded-full bg-[#df012a] mt-0.5" />
      </div>
    </div>
  );
}

export function IntegrationReadySection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const stageVariant = {
    hidden: { opacity: 0, y: 14 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: customDelay, ease: [0.16, 1, 0.3, 1] as const },
    }),
  };

  return (
    <section
      className="relative z-10 w-full py-16 lg:py-20 bg-[linear-gradient(180deg,#ffffff_0%,#fdf6f7_60%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* ─── LEFT CONTENT COLUMN (~42% WIDTH ON DESKTOP) ─── */}
          <motion.div
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-28"
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
              className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal"
            >
              We build custom software that connects with the ERP, CRM, data platforms, APIs,
              and legacy applications your business already depends on.
            </motion.p>

            {/* Three open list items */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="pt-4 border-t border-gray-200/80 divide-y divide-gray-200/80"
            >
              {[
                {
                  icon: PlugZap,
                  title: "Connect without disruption",
                  desc: "Integrate new applications with the systems and workflows your teams already use.",
                },
                {
                  icon: Layers3,
                  title: "Modernise in phases",
                  desc: "Upgrade outdated processes gradually instead of replacing every system at once.",
                },
                {
                  icon: DatabaseZap,
                  title: "Keep data synchronised",
                  desc: "Maintain reliable information flow while reducing duplicate entry and manual handoffs.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="py-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center shrink-0 border border-[#df012a]/20">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* CTA link */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
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

          {/* ─── RIGHT ARCHITECTURE FLOW COLUMN (~58% WIDTH ON DESKTOP) ─── */}
          <div className="lg:col-span-7 space-y-2">

            {/* STAGE 1: EXISTING SYSTEMS */}
            <motion.div
              custom={0}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#df012a]">
                  EXISTING SYSTEMS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 pl-4 font-normal">
                Your current systems and data sources
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                {existingSystems.map((sys, i) => {
                  const Icon = sys.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-xl px-3.5 py-2.5 shadow-sm hover:border-gray-300 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                        <Icon size={18} className={sys.color} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-800">
                        {sys.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CONNECTOR 1 */}
            <StageConnector />

            {/* STAGE 2: CUSTOM BUSINESS PLATFORM (CENTRAL FEATURED LAYER) */}
            <motion.div
              custom={0.12}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-[#fbeaec]/80 border-2 border-[#df012a]/40 rounded-2xl p-6 sm:p-7 shadow-md shadow-[#df012a]/10 relative overflow-hidden"
            >
              {/* Soft internal background glow */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#df012a]/[0.03] via-transparent to-[#df012a]/[0.03] pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#df012a] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Cpu size={26} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#df012a] block mb-0.5">
                      CUSTOM BUSINESS PLATFORM
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      Portals • Workflows • Automation
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#df012a]/20 text-xs font-semibold text-[#df012a]">
                  <Workflow size={14} />
                  <span>Central Operations Hub</span>
                </div>
              </div>
            </motion.div>

            {/* CONNECTOR 2 */}
            <StageConnector />

            {/* STAGE 3: CONNECTED OPERATIONS */}
            <motion.div
              custom={0.24}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={stageVariant}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#df012a] shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#df012a]">
                  CONNECTED OPERATIONS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 pl-4 font-normal">
                The outcomes your business can achieve
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {connectedOutcomes.map((outcome, i) => {
                  const Icon = outcome.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-gray-50/70 border border-gray-200/80 rounded-xl px-4 py-3 shadow-xs hover:bg-white transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-gray-200/80 shadow-2xs">
                        <Icon size={18} className={outcome.color} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-900">
                        {outcome.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* BOTTOM CALLOUT BOX */}
            <motion.div
              custom={0.32}
              initial={prefersReducedMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={stageVariant}
              className="mt-6 p-4 rounded-2xl bg-[#fbeaec]/80 border border-[#df012a]/25 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#df012a]/15 text-[#df012a] flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">
                Modern software that fits your ecosystem. Built for how{" "}
                <span className="font-bold text-[#df012a]">your business actually works.</span>
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
