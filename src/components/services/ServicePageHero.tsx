"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Puzzle,
  Layers,
  Building2,
  Cloud,
  HeartPulse,
  Bot,
  Server,
  Database,
  Plug,
} from "lucide-react";

export interface ServicePageHeroProps {
  eyebrow?: string;
  heading?: string;
  headingAccent?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function ServicePageHero({
  eyebrow = "ENTERPRISE CUSTOM SOFTWARE",
  heading = "Software built",
  headingAccent = "your business.",
  description = "We design and build secure, scalable software for complex enterprise workflows, connected systems, and modernisation initiatives.",
  primaryCtaText = "Discuss Your Project",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Capabilities",
  secondaryCtaHref = "#capabilities",
}: ServicePageHeroProps = {}) {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const centralCardVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section 
      className="relative z-10 w-full pt-8 pb-14 lg:pt-12 lg:pb-16 bg-[radial-gradient(ellipse_60%_50%_at_75%_50%,rgba(223,1,42,0.06),transparent_70%),linear-gradient(180deg,#ffffff_0%,#fdf6f7_40%,#fbeaec_85%,#ffffff_100%)] text-black overflow-hidden border-b border-gray-200/80"
      aria-label="Enterprise Custom Software Hero"
    >
      {/* ─── BACKGROUND TECHNICAL PATTERNS ─── */}
      {/* Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(rgba(223,1,42,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} 
        aria-hidden="true" 
      />

      {/* Perspective Grid near Bottom */}
      <div 
        className="absolute bottom-0 inset-x-0 h-40 opacity-15 pointer-events-none bg-[linear-gradient(to_right,rgba(223,1,42,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(223,1,42,0.15)_1px,transparent_1px)] bg-[size:3rem_1.5rem] [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)]" 
        aria-hidden="true" 
      />

      {/* Soft Radial Glow behind Right Visualization Area */}
      <div 
        className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[450px] h-[350px] bg-[#df012a]/[0.08] blur-[80px] rounded-full pointer-events-none hidden lg:block" 
        aria-hidden="true" 
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ─── TWO-COLUMN HERO GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ─── LEFT CONTENT COLUMN (~45% WIDTH ON DESKTOP) ─── */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
          >
            {/* Outlined Badge */}
            <motion.div variants={prefersReducedMotion ? undefined : fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbeaec]/90 border border-[#df012a]/30 text-[#df012a] text-[11px] font-mono font-bold uppercase tracking-[0.16em]">
                <span className="w-2 h-2 rounded-full bg-[#df012a]" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-black font-bold text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.08] tracking-tight"
            >
              {heading}<br />
              {headingAccent && (
                <span className="text-[#df012a]">{headingAccent}</span>
              )}
            </motion.h1>

            {/* Short Decorative Red Line */}
            <motion.div 
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="w-12 h-[2px] bg-[#df012a] my-3" 
              aria-hidden="true" 
            />

            {/* Description */}
            <motion.p 
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-[540px] font-normal"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#df012a] text-white font-semibold text-sm sm:text-base shadow-md shadow-[#df012a]/20 hover:bg-[#b8001f] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-gray-900 border border-gray-300 font-semibold text-sm sm:text-base hover:bg-[#fbeaec]/60 hover:border-[#df012a]/40 hover:text-[#df012a] transition-all duration-200 group"
              >
                <span>{secondaryCtaText}</span>
                <ArrowRight size={18} className="text-[#df012a] group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Credibility Features (3 Compact Items with Dividers) */}
            <motion.div 
              variants={prefersReducedMotion ? undefined : fadeIn}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200/80"
            >
              {/* Feature 1 */}
              <div className="flex items-start gap-3 sm:pr-2">
                <ShieldCheck size={24} className="text-[#df012a] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Secure by design</h3>
                  <p className="text-[11px] text-gray-600 leading-snug">Enterprise-grade security at every layer</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3 sm:px-2 sm:border-l sm:border-gray-200">
                <TrendingUp size={24} className="text-[#df012a] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Built to scale</h3>
                  <p className="text-[11px] text-gray-600 leading-snug">Scalable architecture for long-term growth</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3 sm:pl-2 sm:border-l sm:border-gray-200">
                <Puzzle size={24} className="text-[#df012a] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-gray-900">Integration-ready</h3>
                  <p className="text-[11px] text-gray-600 leading-snug">Seamless integration with your ecosystem</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT ECOSYSTEM VISUAL COLUMN (~55% WIDTH ON DESKTOP) ─── */}
          <div className="lg:col-span-7 relative w-full pt-4 lg:pt-0 flex justify-center">
            
            {/* Desktop / Tablet Layout Diagram (Hidden on Mobile, block on sm+) */}
            <div className="hidden sm:block relative w-[660px] h-[500px] shrink-0 select-none scale-[0.88] md:scale-95 lg:scale-100 origin-center">
              
              {/* SVG CONNECTOR LINES CANVAS WITH PERFECT 90-DEGREE CURVED PATHS & ENDPOINT DOTS */}
              <svg 
                viewBox="0 0 660 500"
                className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                aria-hidden="true"
              >
                {/* 1. ERP Systems (Top Left: 170, 80) -> Central Card Top-Left (240, 180) */}
                <path
                  d="M 170 80 H 228 A 12 12 0 0 1 240 92 V 180"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="170" cy="80" r="3.5" fill="#df012a" />
                <circle cx="240" cy="180" r="3.5" fill="#df012a" />

                {/* 2. Salesforce (Top Right: 490, 80) -> Central Card Top-Right (420, 180) */}
                <path
                  d="M 490 80 H 432 A 12 12 0 0 0 420 92 V 180"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="490" cy="80" r="3.5" fill="#df012a" />
                <circle cx="420" cy="180" r="3.5" fill="#df012a" />

                {/* 3. Healthcare Platforms (Mid Left: 150, 250) -> Central Card Left-Center (210, 250) */}
                <path
                  d="M 150 250 H 210"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.5s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="150" cy="250" r="3.5" fill="#df012a" />
                <circle cx="210" cy="250" r="3.5" fill="#df012a" />

                {/* 4. AI Workflows (Mid Right: 515, 250) -> Central Card Right-Center (450, 250) */}
                <path
                  d="M 515 250 H 450"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.5s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="515" cy="250" r="3.5" fill="#df012a" />
                <circle cx="450" cy="250" r="3.5" fill="#df012a" />

                {/* 5. Legacy Systems (Bottom Left: 180, 420) -> Central Card Bottom-Left (240, 320) */}
                <path
                  d="M 180 420 H 228 A 12 12 0 0 0 240 408 V 320"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2.2s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="180" cy="420" r="3.5" fill="#df012a" />
                <circle cx="240" cy="320" r="3.5" fill="#df012a" />

                {/* 6. Data & Analytics (Bottom Center: 330, 380) -> Central Card Bottom-Center (330, 320) */}
                <path
                  d="M 330 380 V 320"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1.8s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="330" cy="380" r="3.5" fill="#df012a" />
                <circle cx="330" cy="320" r="3.5" fill="#df012a" />

                {/* 7. Third-party APIs (Bottom Right: 480, 420) -> Central Card Bottom-Right (420, 320) */}
                <path
                  d="M 480 420 H 432 A 12 12 0 0 1 420 408 V 320"
                  fill="none"
                  stroke="#df012a"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                >
                  {!prefersReducedMotion && (
                    <animate attributeName="stroke-dashoffset" from="16" to="0" dur="2.2s" repeatCount="indefinite" />
                  )}
                </path>
                <circle cx="480" cy="420" r="3.5" fill="#df012a" />
                <circle cx="420" cy="320" r="3.5" fill="#df012a" />
              </svg>

              {/* CENTRAL PLATFORM CARD (Centered at 330, 250) */}
              <motion.div
                variants={prefersReducedMotion ? undefined : centralCardVariant}
                initial={prefersReducedMotion ? false : "hidden"}
                animate="visible"
                className="absolute top-[180px] left-[210px] w-[240px] h-[140px] z-20"
              >
                <div className="w-full h-full bg-white border-2 border-[#df012a]/50 rounded-2xl p-4 shadow-2xl shadow-[#df012a]/15 text-center flex flex-col items-center justify-center hover:shadow-[#df012a]/25 transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center mb-2 border border-[#df012a]/20 shadow-inner">
                    <Layers size={24} />
                  </div>
                  <h2 className="text-base font-bold text-gray-900 leading-tight mb-0.5">
                    Your Business Platform
                  </h2>
                  <p className="text-[10px] font-medium text-gray-500">
                    Custom workflows &bull; Data &bull; Automation
                  </p>
                </div>
              </motion.div>

              {/* 1. ERP Systems (Top Left: Bounds 40..170, 30..130) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[30px] left-[40px] w-[130px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-1.5">
                  <Building2 size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">ERP Systems</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Connected</span>
                </div>
              </motion.div>

              {/* 2. Salesforce (Top Right: Bounds 490..620, 30..130) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[30px] right-[40px] w-[130px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-1.5">
                  <Cloud size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">Salesforce</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Connected</span>
                </div>
              </motion.div>

              {/* 3. Healthcare Platforms (Mid Left: Bounds 10..150, 200..300) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[200px] left-[10px] w-[140px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
                  <HeartPulse size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">Healthcare Platforms</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Connected</span>
                </div>
              </motion.div>

              {/* 4. AI Workflows (Mid Right: Bounds 515..645, 200..300) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[200px] right-[15px] w-[130px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
                  <Bot size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">AI Workflows</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Automated</span>
                </div>
              </motion.div>

              {/* 5. Legacy Systems (Bottom Left: Bounds 50..180, 370..470) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[370px] left-[50px] w-[130px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
                  <Server size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">Legacy Systems</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Integrated</span>
                </div>
              </motion.div>

              {/* 6. Data & Analytics (Bottom Center: Bounds 260..400, 380..480) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[380px] left-[260px] w-[140px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-1.5">
                  <Database size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">Data & Analytics</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Synced</span>
                </div>
              </motion.div>

              {/* 7. Third-party APIs (Bottom Right: Bounds 480..610, 370..470) */}
              <motion.div
                whileHover={{ y: -4 }}
                className="absolute top-[370px] right-[50px] w-[130px] h-[100px] z-20 bg-white border border-gray-200 rounded-xl p-3 shadow-md hover:border-[#df012a]/40 hover:shadow-lg transition-all duration-200 text-center flex flex-col items-center justify-center"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5">
                  <Plug size={18} />
                </div>
                <div className="text-xs font-bold text-gray-900 mb-0.5">Third-party APIs</div>
                <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Connected</span>
                </div>
              </motion.div>

            </div>

            {/* Mobile Responsive Layout Diagram (Clean 2-column grid below central card) */}
            <div className="block sm:hidden space-y-4 pt-4">
              {/* Central Platform Card (Mobile) */}
              <div className="bg-white border-2 border-[#df012a]/50 rounded-2xl p-5 shadow-xl text-center">
                <div className="w-10 h-10 rounded-xl bg-[#fbeaec] text-[#df012a] flex items-center justify-center mx-auto mb-2 border border-[#df012a]/20">
                  <Layers size={22} />
                </div>
                <h2 className="text-base font-bold text-gray-900 mb-0.5">Your Business Platform</h2>
                <p className="text-[11px] font-medium text-gray-500">Custom workflows &bull; Data &bull; Automation</p>
              </div>

              {/* 2-Column Grid of Integration Cards (Mobile) */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-1">
                    <Building2 size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">ERP Systems</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Connected</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-1">
                    <Cloud size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">Salesforce</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Connected</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1">
                    <HeartPulse size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">Healthcare</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Connected</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-1">
                    <Bot size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">AI Workflows</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Automated</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1">
                    <Server size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">Legacy Systems</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Integrated</div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm text-center">
                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mx-auto mb-1">
                    <Database size={16} />
                  </div>
                  <div className="text-[11px] font-bold text-gray-900">Data & Analytics</div>
                  <div className="text-[9px] font-semibold text-emerald-600">Synced</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
