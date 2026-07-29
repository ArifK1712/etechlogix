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
  const prefersReducedMotion = useReducedMotion() ?? false;

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
      className="relative z-10 w-full py-14 lg:py-18 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(223,1,42,0.04),transparent_70%),linear-gradient(180deg,#ffffff_0%,#fdf8f8_50%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* ─── LEFT CONTENT COLUMN (~42% WIDTH ON DESKTOP) ─── */}
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
                  WHY CUSTOM SOFTWARE
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              id="why-custom-heading"
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-black font-bold text-[32px] sm:text-[42px] leading-[1.1] tracking-tight"
            >
              When your operations outgrow{" "}
              <span className="text-[#df012a]">off-the-shelf software.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-gray-700 leading-relaxed font-normal"
            >
              Generic platforms force businesses to adapt their processes around rigid tools. The result is disconnected workflows, manual handoffs between systems, limited integration options, and an architecture that becomes harder to change as operations evolve.
            </motion.p>

            {/* Supporting Points */}
            <motion.div
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="space-y-4 pt-3"
            >
              {/* Point 1 */}
              <div className="pt-4 first:pt-0 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Workflow size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Fits your operation
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Software designed around how your teams, approvals, systems, and business rules actually work.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="pt-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Network size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Connects your systems
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bring applications, data, people, and workflows into one coordinated operational environment.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="pt-4 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center flex-shrink-0 border border-[#df012a]/20">
                  <Boxes size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">
                    Evolves with your business
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Create a flexible foundation that can adapt as processes, requirements, and operations change.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT WORKFLOW VISUAL CANVAS (~58% WIDTH ON DESKTOP) ─── */}
          <motion.div
            className="lg:col-span-7"
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border border-gray-200/90 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl shadow-gray-200/50 relative overflow-hidden">
              
              {/* Canvas Header */}
              <div className="text-center max-w-lg mx-auto mb-6 sm:mb-7">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 tracking-tight">
                  From disconnected workarounds to one coordinated operation.
                </h3>
                <p className="text-gray-600 font-normal leading-relaxed">
                  Custom software connects your people, processes, data, and systems around the way your business actually works.
                </p>
              </div>

              {/* ─── LANE 1: OFF-THE-SHELF WORKFLOW ─── */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-1">
                  OFF-THE-SHELF WORKFLOW
                </span>

                {/* Nodes Sequence */}
                <div className="relative py-1">
                  {/* SVG Dash Connector (Desktop) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" aria-hidden="true">
                    <line
                      x1="8%"
                      y1="32%"
                      x2="92%"
                      y2="32%"
                      stroke="#d1d5db"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  </svg>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
                    {/* Node 1 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-xs">
                        <MessageSquare size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Customer<br />Request</span>
                    </motion.div>

                    {/* Node 2 + Warning badge */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5 relative">
                      <div className="w-11 h-11 rounded-2xl bg-emerald-50/50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center shadow-xs">
                        <FileSpreadsheet size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Spreadsheet<br />Tracking</span>

                      {/* Red Warning Marker 1 */}
                      <div className="absolute -right-2 top-2.5 hidden sm:flex w-4.5 h-4.5 rounded-full bg-[#df012a] text-white items-center justify-center text-[10px] font-bold z-20 shadow-xs">
                        !
                      </div>
                    </motion.div>

                    {/* Node 3 + Warning badge */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5 relative">
                      <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-xs">
                        <Mail size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Manual Email<br />Approval</span>

                      {/* Red Warning Marker 2 */}
                      <div className="absolute -right-2 top-2.5 hidden sm:flex w-4.5 h-4.5 rounded-full bg-[#df012a] text-white items-center justify-center text-[10px] font-bold z-20 shadow-xs">
                        !
                      </div>
                    </motion.div>

                    {/* Node 4 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-xs">
                        <Copy size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Repeated Data<br />Entry</span>
                    </motion.div>

                    {/* Node 5 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5 col-span-2 sm:col-span-1">
                      <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-200 text-gray-700 flex items-center justify-center shadow-xs">
                        <Clock size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Delayed<br />Visibility</span>
                    </motion.div>
                  </div>
                </div>

                {/* Status Pills Lane 1 */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 py-2 px-3.5 rounded-2xl bg-gray-100/70 border border-gray-200/70 text-xs font-medium text-gray-700">
                  <div className="flex items-center gap-1.5">
                    <UserX size={14} className="text-rose-500" />
                    <span>Manual</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Link2Off size={14} className="text-rose-500" />
                    <span>Disconnected</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <TrendingDown size={14} className="text-rose-500" />
                    <span>Hard to scale</span>
                  </div>
                </div>
              </div>

              {/* ─── MIDDLE SEPARATOR ─── */}
              <div className="my-4 flex items-center justify-center gap-4 border-y border-dashed border-gray-200 py-2">
                <span className="text-[#df012a] font-bold text-xs tracking-wide">
                  Designed around your operation
                </span>
              </div>

              {/* ─── LANE 2: CUSTOM SOFTWARE WORKFLOW ─── */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#df012a] block mb-1">
                  CUSTOM SOFTWARE WORKFLOW
                </span>

                {/* Nodes Sequence */}
                <div className="relative py-1">
                  {/* SVG Solid Red Animated Pulse Line (Desktop) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" aria-hidden="true">
                    <line
                      x1="8%"
                      y1="32%"
                      x2="92%"
                      y2="32%"
                      stroke="#df012a"
                      strokeWidth="2.5"
                      strokeDasharray="8 8"
                    >
                      {!prefersReducedMotion && (
                        <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.2s" repeatCount="indefinite" />
                      )}
                    </line>
                    <circle cx="92%" cy="32%" r="4" fill="#df012a" />
                  </svg>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative z-10">
                    {/* Node 1 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-xs">
                        <MessageSquare size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Customer<br />Request</span>
                    </motion.div>

                    {/* Node 2 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-xs">
                        <Workflow size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Work Routed<br />Automatically</span>
                    </motion.div>

                    {/* Node 3 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-xs">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Approval by the<br />Right Person</span>
                    </motion.div>

                    {/* Node 4 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-xs">
                        <RefreshCw size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Systems Updated<br />Automatically</span>
                    </motion.div>

                    {/* Node 5 */}
                    <motion.div variants={prefersReducedMotion ? undefined : nodeStagger} className="flex flex-col items-center text-center space-y-1.5 col-span-2 sm:col-span-1">
                      <div className="w-11 h-11 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 text-[#df012a] flex items-center justify-center shadow-xs">
                        <TrendingUp size={20} />
                      </div>
                      <span className="text-xs font-bold text-gray-900 leading-snug tracking-tight">Real-Time Operational<br />Visibility</span>
                    </motion.div>
                  </div>
                </div>

                {/* Outcome Pills Lane 2 */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 py-2 px-3.5 rounded-2xl bg-[#fbeaec] border border-[#df012a]/20 text-xs font-semibold text-gray-900">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Automated</span>
                  </div>
                  <span className="text-[#df012a]/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Connected</span>
                  </div>
                  <span className="text-[#df012a]/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    <span>Built to evolve</span>
                  </div>
                </div>
              </div>

              {/* ─── BOTTOM CALLOUT BOX ─── */}
              <div className="mt-5 p-3.5 sm:p-4 rounded-2xl bg-[#fbeaec]/80 border border-[#df012a]/25 flex items-center justify-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-xl bg-[#df012a]/15 text-[#df012a] flex items-center justify-center flex-shrink-0">
                  <Rocket size={18} />
                </div>
                <p className="font-bold text-gray-900">
                  One connected workflow. Less manual work. Better operational visibility.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
