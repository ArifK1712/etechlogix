"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Workflow,
  Boxes,
  CalendarDays,
  XCircle,
  Sparkles,
  Check,
  CheckCircle2,
  Eye,
  ShieldCheck,
  RefreshCw,
  Zap,
  Activity,
  TrendingUp,
} from "lucide-react";

interface ContextLabel {
  text: string;
  icon: React.ElementType;
  statusColor: string;
}

interface UseCase {
  id: string;
  title: string;
  selectorIcon: React.ElementType;
  challenge: string;
  solution: string;
  capabilities: string[];
  imageSrc: string;
  imageAlt: string;
  contextLabels: ContextLabel[];
}

const useCases: UseCase[] = [
  {
    id: "internal-ops",
    title: "Internal Operations Platform",
    selectorIcon: Workflow,
    challenge:
      "Teams manage requests, approvals, documents, and reporting through spreadsheets, email, and disconnected tools.",
    solution:
      "A role-based operations platform that centralises requests, automates approvals, manages documents, and provides real-time visibility.",
    capabilities: [
      "Request management",
      "Approval automation",
      "Role-based access",
      "Document workflows",
      "Operational dashboards",
    ],
    imageSrc: "/images/custom-software/internal-operations-platform.webp",
    imageAlt:
      "Modern enterprise operations team collaborating in a bright corporate environment with digital workflow dashboards",
    contextLabels: [
      { text: "Workflow connected", icon: CheckCircle2, statusColor: "text-emerald-600" },
      { text: "Real-time visibility", icon: Eye, statusColor: "text-sky-600" },
      { text: "Role-based access", icon: ShieldCheck, statusColor: "text-[#df012a]" },
    ],
  },
  {
    id: "erp-distribution",
    title: "ERP & Distribution Workflow",
    selectorIcon: Boxes,
    challenge:
      "Orders, inventory, warehouse operations, pricing, and fulfilment are managed across disconnected systems.",
    solution:
      "A connected distribution platform that coordinates orders, inventory, warehouses, pricing, and third-party services.",
    capabilities: [
      "Order processing",
      "Inventory visibility",
      "Warehouse workflows",
      "Pricing and tax integration",
      "Distributor management",
    ],
    imageSrc: "/images/custom-software/erp-distribution-workflow.webp",
    imageAlt:
      "Bright modern distribution warehouse and automated inventory management logistics center",
    contextLabels: [
      { text: "Inventory sync", icon: RefreshCw, statusColor: "text-emerald-600" },
      { text: "Automated orders", icon: Zap, statusColor: "text-[#df012a]" },
      { text: "Multi-warehouse", icon: Boxes, statusColor: "text-indigo-600" },
    ],
  },
  {
    id: "event-conference",
    title: "Event & Conference Platform",
    selectorIcon: CalendarDays,
    challenge:
      "Registration, attendee management, exhibitors, check-in, meetings, and reporting operate across separate tools.",
    solution:
      "One connected event platform for organisers, attendees, exhibitors, sponsors, and on-site teams.",
    capabilities: [
      "Registration and ticketing",
      "Exhibitor and sponsor portals",
      "On-site check-in",
      "B2B meeting scheduling",
      "Event analytics",
    ],
    imageSrc: "/images/custom-software/event-conference-platform.webp",
    imageAlt:
      "Professional trade show event hall showing registration kiosks and attendee check-in operations",
    contextLabels: [
      { text: "Real-time check-in", icon: Activity, statusColor: "text-emerald-600" },
      { text: "Exhibitor portal", icon: Sparkles, statusColor: "text-[#df012a]" },
      { text: "Live analytics", icon: TrendingUp, statusColor: "text-sky-600" },
    ],
  },
];

export function CustomSoftwareInActionSection() {
  const [activeId, setActiveId] = useState<string>("internal-ops");
  const prefersReducedMotion = useReducedMotion();

  const activeUseCase = useCases.find((uc) => uc.id === activeId) || useCases[0];

  const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      className="relative z-10 w-full py-16 lg:py-20 bg-[linear-gradient(180deg,#ffffff_0%,#fffafa_60%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
      aria-labelledby="in-action-heading"
    >
      {/* Subtle dotted background pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-4"
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
                CUSTOM SOFTWARE IN ACTION
              </span>
              <span className="w-5 h-px bg-[#df012a]" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="in-action-heading"
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="text-black font-bold text-[32px] sm:text-[44px] leading-[1.1] tracking-tight"
          >
            Built for complex business operations,{" "}
            <span className="text-[#df012a]">not generic use cases.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={prefersReducedMotion ? undefined : fadeIn}
            className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto"
          >
            See how purpose-built software can replace fragmented processes with connected workflows,
            role-based experiences, automation, and real-time operational visibility.
          </motion.p>
        </motion.div>

        {/* ─── USE-CASE SELECTORS (BUTTONS) ─── */}
        <div
          role="tablist"
          aria-label="Custom software use case selectors"
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
        >
          {useCases.map((uc) => {
            const Icon = uc.selectorIcon;
            const isActive = activeId === uc.id;

            return (
              <button
                key={uc.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${uc.id}`}
                id={`tab-${uc.id}`}
                onClick={() => setActiveId(uc.id)}
                className={`
                  w-full sm:w-auto inline-flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl
                  text-sm font-semibold transition-all duration-200 border text-left
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#df012a] focus-visible:ring-offset-2
                  ${
                    isActive
                      ? "bg-[#fbeaec] border-[#df012a]/50 text-gray-900 shadow-sm"
                      : "bg-white border-gray-200/90 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  }
                `}
              >
                <div
                  className={`
                    w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border transition-colors
                    ${
                      isActive
                        ? "bg-[#df012a]/15 text-[#df012a] border-[#df012a]/30"
                        : "bg-gray-100 text-gray-500 border-gray-200/80"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* ─── ACTIVE USE-CASE PANEL ─── */}
        <div className="bg-white border border-gray-200/90 rounded-3xl shadow-xl shadow-gray-200/40 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeUseCase.id}
              role="tabpanel"
              id={`panel-${activeUseCase.id}`}
              aria-labelledby={`tab-${activeUseCase.id}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              
              {/* LEFT CONTENT COLUMN (~40% desktop) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8">
                
                {/* 1. Business Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 text-[#df012a] flex items-center justify-center shrink-0 border border-rose-200/60">
                      <XCircle size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#df012a]">
                      BUSINESS CHALLENGE
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal pl-9">
                    “{activeUseCase.challenge}”
                  </p>
                </div>

                {/* 2. Custom Solution */}
                <div className="pt-6 border-t border-gray-200/80 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/60">
                      <Sparkles size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-600">
                      CUSTOM SOLUTION
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-900 leading-relaxed pl-9">
                    “{activeUseCase.solution}”
                  </p>
                </div>

                {/* 3. Key Capabilities */}
                <div className="pt-6 border-t border-gray-200/80 space-y-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    KEY CAPABILITIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeUseCase.capabilities.map((cap, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200/90 text-xs sm:text-sm font-medium text-gray-800"
                      >
                        <Check size={14} className="text-[#df012a] shrink-0" />
                        <span>{cap}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT IMAGE COLUMN (~60% desktop) */}
              <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] bg-gray-100 overflow-hidden">
                <Image
                  src={activeUseCase.imageSrc}
                  alt={activeUseCase.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />

                {/* Soft left gradient fade into content on desktop */}
                <div
                  className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none hidden lg:block"
                  aria-hidden="true"
                />

                {/* Subtle top & bottom shadow gradient for badge legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none z-10"
                  aria-hidden="true"
                />

                {/* Translucent Context Badges over Image */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-20 pointer-events-none">
                  {/* Top badges */}
                  <div className="flex flex-wrap gap-2 justify-end">
                    {activeUseCase.contextLabels.slice(0, 2).map((label, idx) => {
                      const LabelIcon = label.icon;
                      return (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md text-xs sm:text-sm font-semibold text-gray-900"
                        >
                          <LabelIcon size={16} className={label.statusColor} />
                          <span>{label.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom badge */}
                  {activeUseCase.contextLabels[2] && (
                    <div className="flex justify-start">
                      <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/80 shadow-md text-xs sm:text-sm font-semibold text-gray-900">
                        {(() => {
                          const LabelIcon = activeUseCase.contextLabels[2].icon;
                          return (
                            <>
                              <LabelIcon
                                size={16}
                                className={activeUseCase.contextLabels[2].statusColor}
                              />
                              <span>{activeUseCase.contextLabels[2].text}</span>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
