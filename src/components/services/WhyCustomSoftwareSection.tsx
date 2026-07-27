"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Workflow,
  Network,
  Boxes,
  MessageSquare,
  FileSpreadsheet,
  Mail,
  Copy,
  Clock,
  UserX,
  Link2Off,
  TrendingDown,
  ShieldCheck,
  RefreshCw,
  TrendingUp,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export function WhyCustomSoftwareSection() {
  const prefersReducedMotion = useReducedMotion();

  // Motion variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const nodeStagger = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      className="relative z-10 w-full py-16 lg:py-20 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(223,1,42,0.04),transparent_70%),linear-gradient(180deg,#ffffff_0%,#fdf8f8_50%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
      aria-labelledby="why-custom-heading"
    >
      {/* Subtle Dotted Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─── LEFT CONTENT COLUMN (~38% WIDTH ON DESKTOP) ─── */}
          <motion.div
            className="lg:col-span-5 space-y-6"
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
                  WHY CUSTOM SOFTWARE
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="why-custom-heading"
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-black font-bold text-[32px] sm:text-[44px] leading-[1.1] tracking-tight"
            >
              When your operations outgrow{" "}
              <span className="text-[#df012a]">off-the-shelf software.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal"
            >
              Generic platforms often force teams to adapt their processes around rigid tools. We design software around the way your people, workflows, data, and existing systems actually operate.
            </motion.p>

            {/* Open List Items (Dividers, No Cards!) */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="space-y-6 pt-4 border-t border-gray-200/80 divide-y divide-gray-200/80"
            >
              {/* Item 1 */}
              <div className="pt-6 first:pt-0 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Workflow size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Workflow fit
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Support the way your teams actually work instead of forcing them into rigid software processes.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="pt-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Network size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Connected operations
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Bring systems, data, approvals, and teams into one coordinated operational flow.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="pt-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Boxes size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    Built to evolve
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Create a modular foundation that can adapt as your organisation and requirements grow.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT WORKFLOW VISUAL CANVAS (~62% WIDTH ON DESKTOP) ─── */}
          <motion.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden">
              
              {/* Canvas Header */}
              <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  The difference is in the workflow
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  From manual workarounds to one coordinated operating flow.
                </p>
              </div>

              {/* ─── LANE 1: OFF-THE-SHELF WORKFLOW ─── */}
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  OFF-THE-SHELF WORKFLOW
                </span>

                {/* Nodes Sequence */}
                <div className="relative py-2">
                  {/* SVG Dash Connector (Desktop) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" aria-hidden="true">
                    <line
                      x1="8%"
                      y1="35%"
                      x2="92%"
                      y2="35%"
                      stroke="#d1d5db"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </svg>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
                    {/* Node 1 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm">
                        <MessageSquare size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Customer<br />Request</span>
                    </motion.div>

                    {/* Node 2 + Warning badge */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2 relative">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shadow-sm">
                        <FileSpreadsheet size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Spreadsheet<br />Handoff</span>

                      {/* Red Warning Marker 1 */}
                      <div className="absolute -right-2 top-3 hidden sm:flex w-5 h-5 rounded-full bg-[#df012a] text-white items-center justify-center text-[10px] font-bold z-20 shadow-sm">
                        !
                      </div>
                    </motion.div>

                    {/* Node 3 + Warning badge */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2 relative">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm">
                        <Mail size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Email<br />Approval</span>

                      {/* Red Warning Marker 2 */}
                      <div className="absolute -right-2 top-3 hidden sm:flex w-5 h-5 rounded-full bg-[#df012a] text-white items-center justify-center text-[10px] font-bold z-20 shadow-sm">
                        !
                      </div>
                    </motion.div>

                    {/* Node 4 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm">
                        <Copy size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Duplicate<br />Data Entry</span>
                    </motion.div>

                    {/* Node 5 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2 col-span-2 sm:col-span-1">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-sm">
                        <Clock size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Delayed<br />Reporting</span>
                    </motion.div>
                  </div>
                </div>

                {/* Status Pills Lane 1 */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 px-4 rounded-2xl bg-gray-100/70 border border-gray-200/70 text-xs sm:text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <UserX size={15} className="text-rose-500" />
                    <span>Manual</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Link2Off size={15} className="text-rose-500" />
                    <span>Disconnected</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <TrendingDown size={15} className="text-rose-500" />
                    <span>Hard to scale</span>
                  </div>
                </div>
              </div>

              {/* ─── MIDDLE SEPARATOR ─── */}
              <div className="my-8 flex items-center justify-center gap-4 border-y border-dashed border-gray-200 py-3.5">
                <span className="text-[#df012a] font-bold text-xs sm:text-sm tracking-wide">
                  Designed around your operation
                </span>
              </div>

              {/* ─── LANE 2: CUSTOM SOFTWARE WORKFLOW ─── */}
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#df012a] block mb-1">
                  CUSTOM SOFTWARE WORKFLOW
                </span>

                {/* Nodes Sequence */}
                <div className="relative py-2">
                  {/* SVG Solid Red Animated Pulse Line (Desktop) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" aria-hidden="true">
                    <line
                      x1="8%"
                      y1="35%"
                      x2="92%"
                      y2="35%"
                      stroke="#df012a"
                      strokeWidth="2.5"
                      strokeDasharray="8 8"
                    >
                      {!prefersReducedMotion && (
                        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
                      )}
                    </line>
                    <circle cx="92%" cy="35%" r="4" fill="#df012a" />
                  </svg>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
                    {/* Node 1 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-sm">
                        <MessageSquare size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Customer<br />Request</span>
                    </motion.div>

                    {/* Node 2 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-sm">
                        <Workflow size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Intelligent<br />Routing</span>
                    </motion.div>

                    {/* Node 3 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-sm">
                        <ShieldCheck size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Role-Based<br />Approval</span>
                    </motion.div>

                    {/* Node 4 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-sm">
                        <RefreshCw size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Automatic<br />System Sync</span>
                    </motion.div>

                    {/* Node 5 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-2 col-span-2 sm:col-span-1">
                      <div className="w-12 h-12 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-sm">
                        <TrendingUp size={22} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-900 leading-snug tracking-tight">Live<br />Operational Insights</span>
                    </motion.div>
                  </div>
                </div>

                {/* Outcome Pills Lane 2 */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 px-4 rounded-2xl bg-[#fbeaec] border border-[#df012a]/20 text-xs sm:text-sm font-semibold text-gray-900">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Automated</span>
                  </div>
                  <span className="text-[#df012a]/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Connected</span>
                  </div>
                  <span className="text-[#df012a]/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-600" />
                    <span>Built to evolve</span>
                  </div>
                </div>
              </div>

              {/* ─── BOTTOM CALLOUT BOX ─── */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#fbeaec]/80 border border-[#df012a]/25 flex items-center justify-center gap-3.5 text-center sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#df012a]/15 text-[#df012a] flex items-center justify-center flex-shrink-0">
                  <Rocket size={20} />
                </div>
                <p className="text-sm sm:text-base font-bold text-gray-900">
                  Fewer workarounds. One coordinated operational flow.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
