import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Cpu,
  RefreshCw,
  Server,
  Layers,
  Database,
  Lock,
  FileText,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Agentic AI & Workflow Automation Services | eTechLogix",
  description:
    "eTechLogix engineers enterprise Agentic AI systems that connect applications, process documents, execute business rules, manage exceptions, and complete real operational workflows.",
  alternates: {
    canonical: "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation",
  },
  openGraph: {
    title: "Agentic AI & Workflow Automation Services | eTechLogix",
    description:
      "eTechLogix engineers enterprise Agentic AI systems that connect applications, process documents, execute business rules, manage exceptions, and complete real operational workflows.",
    url: "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation",
    siteName: "eTechLogix",
    images: [
      {
        url: "https://www.etechlogix.com/hero-ai-workflow.png",
        width: 1200,
        height: 630,
        alt: "eTechLogix Agentic AI Workflow Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic AI & Workflow Automation Services | eTechLogix",
    description:
      "eTechLogix engineers enterprise Agentic AI systems that connect applications, process documents, execute business rules, manage exceptions, and complete real operational workflows.",
    images: ["https://www.etechlogix.com/hero-ai-workflow.png"],
  },
};

export default function AgenticAiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation#webpage",
        url: "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation",
        name: "Agentic AI & Workflow Automation Services | eTechLogix",
        description:
          "eTechLogix engineers enterprise Agentic AI systems that connect applications, process documents, execute business rules, manage exceptions, and complete real operational workflows.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.etechlogix.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "AI Solutions",
            item: "https://www.etechlogix.com/services/ai-automation",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Agentic AI & Workflow Automation",
            item: "https://www.etechlogix.com/ai-solutions/agentic-ai-workflow-automation",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Enterprise Agentic AI & Workflow Automation Development",
        provider: {
          "@type": "Organization",
          name: "eTechLogix",
          url: "https://www.etechlogix.com",
        },
        description:
          "Engineering custom Agentic AI workflows, intelligent document processing, ERP/CRM system synchronization, and human-in-the-loop exception handling.",
        serviceType: "Agentic AI Development & Integration",
      },
    ],
  };

  return (
    <main className="w-full bg-white text-black overflow-hidden pt-20">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── SECTION 1: HERO (Centered Architectural Showcase) ─── */}
      <section className="relative z-10 w-full pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white overflow-hidden" aria-labelledby="hero-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Hero Header Stack */}
          <div className="max-w-[950px] mx-auto text-center mb-10">
            <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-4">
              <span className="w-5 h-px bg-[#df012a]" />
              AGENTIC AI &amp; WORKFLOW AUTOMATION
              <span className="w-5 h-px bg-[#df012a]" />
            </span>
            <h1
              id="hero-heading"
              className="text-black font-bold text-[36px] sm:text-[50px] lg:text-[clamp(44px,5vw,64px)] leading-[1.06] tracking-tight mb-5"
            >
              AI agents that{" "}
              <span className="text-[#df012a]">execute real business workflows.</span>
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 text-base sm:text-lg">
              We engineer Agentic AI systems that connect enterprise applications, process documents, apply business rules, complete multi-step tasks, manage exceptions, and involve people only when judgement or approval is required.
            </p>

            {/* Reused Shared Buttons Matching Homepage Hero Sizing */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Button variant="primary" size="md" href="/contact">
                Discuss an AI Use Case
              </Button>
              <Button variant="secondary" size="md" href="#how-it-works">
                See How It Works <ArrowRight size={16} />
              </Button>
            </div>

            {/* Approved Proof Badge Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#fbeaec] border border-[#df012a]/20 text-xs font-semibold text-gray-900 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse flex-shrink-0" />
              <span>Helping clients achieve millions in operational savings through AI-powered workflow automation.</span>
            </div>
          </div>

          {/* Panoramic Enterprise Execution Visual Banner */}
          <div className="max-w-[1200px] mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group bg-black">
              

              {/* Panoramic Workflow Image */}
              <div className="relative h-[300px] sm:h-[420px] lg:h-[480px]">
                <Image
                  src="/hero-ai-workflow-bright.png"
                  alt="Bright daylight corporate office environment with professionals reviewing Agentic AI workflow automation UI screen"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                {/* Bottom Overlay Badges */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-white max-w-sm">
                    <span className="text-[10px] font-mono text-[#df012a] font-bold uppercase block mb-0.5">
                      ORCHESTRATION PIPELINE
                    </span>
                    <p className="text-xs font-semibold">
                      Automated document parsing, ERP sync, and 1-click human approval gating.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-white text-right">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block mb-0.5">
                      DELIVERED RESULT
                    </span>
                    <p className="text-xs font-bold font-mono">
                      Zero Manual Re-Keying
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: FROM BUSINESS REQUEST TO COMPLETED OUTCOME (Dark Gradient Canvas) ─── */}
      <section
        id="how-it-works"
        className="relative z-10 w-full py-16 lg:py-20 bg-[radial-gradient(circle_at_30%_45%,rgba(223,1,42,0.24),transparent_38%),radial-gradient(circle_at_78%_72%,rgba(120,0,24,0.16),transparent_34%),linear-gradient(135deg,#030303_0%,#22040b_48%,#080808_100%)] text-white overflow-hidden"
        aria-labelledby="workflow-heading"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[950px] mx-auto text-center mb-14">
            <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
              <span className="w-5 h-px bg-[#df012a]" />
              END-TO-END WORKFLOW ARCHITECTURE
              <span className="w-5 h-px bg-[#df012a]" />
            </span>
            <h2 id="workflow-heading" className="text-white font-bold text-[32px] sm:text-[44px] tracking-tight leading-tight mb-4">
              From business request to <span className="text-[#df012a]">completed outcome.</span>
            </h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              A continuous, auditable path connecting business events directly to verified outcomes.
            </p>
          </div>

          {/* Continuous Visual Workflow Path (9 Steps Grid Canvas) */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-[#df012a] font-bold block mb-1">01 // INTAKE</span>
              <p className="font-bold text-white text-sm mb-1">Business Trigger</p>
              <p className="text-white/60 font-sans text-xs">Email, API payload, form, file drop, or webhook event.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-[#df012a] font-bold block mb-1">02 // DATA &amp; CONTEXT</span>
              <p className="font-bold text-white text-sm mb-1">Context Ingestion</p>
              <p className="text-white/60 font-sans text-xs">Ingests documents, database records, and historic context.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-[#df012a] font-bold block mb-1">03 // PLANNING</span>
              <p className="font-bold text-white text-sm mb-1">AI Task Planning</p>
              <p className="text-white/60 font-sans text-xs">Decomposes request into sub-tasks and API steps.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-[#df012a] font-bold block mb-1">04 // SYSTEMS</span>
              <p className="font-bold text-white text-sm mb-1">Connected Systems</p>
              <p className="text-white/60 font-sans text-xs">Queries &amp; updates ERP, CRM, and internal databases.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#df012a]/20 border border-[#df012a]/50">
              <span className="text-[#df012a] font-bold block mb-1">05 // BUSINESS RULES</span>
              <p className="font-bold text-white text-sm mb-1">Rule Execution</p>
              <p className="text-white/70 font-sans text-xs">Applies strict policy limits, compliance, and checks.</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30">
              <span className="text-amber-400 font-bold block mb-1">06 // EXCEPTIONS</span>
              <p className="font-bold text-white text-sm mb-1">Exception Handling</p>
              <p className="text-white/70 font-sans text-xs">Detects anomalies and routes low-confidence items.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-white/60 font-bold block mb-1">07 // HUMAN GATE</span>
              <p className="font-bold text-white text-sm mb-1">Human Approval</p>
              <p className="text-white/60 font-sans text-xs">Managers review pre-compiled context via 1-click.</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40">
              <span className="text-emerald-400 font-bold block mb-1">08 // OUTCOME</span>
              <p className="font-bold text-white text-sm mb-1">Completed Outcome</p>
              <p className="text-white/70 font-sans text-xs">Task finalized across all connected enterprise systems.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/15">
              <span className="text-emerald-400 font-bold block mb-1">09 // LOGGING</span>
              <p className="font-bold text-white text-sm mb-1">Audit Trail Logged</p>
              <p className="text-white/60 font-sans text-xs">Every step recorded for security and compliance audits.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 4: WORKS ACROSS YOUR SYSTEMS—WITH PEOPLE STILL IN CONTROL ─── */}
      <section className="relative z-10 w-full py-16 lg:py-20 bg-gray-50 border-y border-gray-100" aria-labelledby="systems-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Side: High-Resolution Agentic Orchestration Layer Image */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-900 group">
                <Image
                  src="/agentic-orchestration-layer.jpg"
                  alt="Agentic Orchestration Layer diagram showing Salesforce, MuleSoft, Descartes, Avalara, DMSi Agility, ERPs, CRMs, Healthcare EHRs, and APIs"
                  width={1024}
                  height={1024}
                  quality={100}
                  priority
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side: Human Controls */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
                <span className="w-5 h-px bg-[#df012a]" />
                GOVERNANCE &amp; CONTROL
              </span>
              <h2 id="systems-heading" className="text-black font-bold text-[32px] sm:text-[42px] leading-tight tracking-tight mb-4">
                Works across your systems—<span className="text-[#df012a]">with people still in control.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Agentic AI systems operate within your security boundary, respecting access rules and escalating exceptions whenever policy limits or confidence thresholds require human judgment.
              </p>

              <ul className="space-y-2.5 text-sm text-gray-800 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                  <span>Execute predictable cases automatically with 100% rule adherence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                  <span>Detect low-confidence results and route to human review queues</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                  <span>Route financial or policy exceptions to authorized sign-offs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#df012a] flex-shrink-0" />
                  <span>Record every decision, prompt, and execution step in a tamper-evident audit log</span>
                </li>
              </ul>

              <Button variant="primary" size="md" href="/contact">
                Discuss Your Integration Landscape
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 5: BUSINESS IMPACT & DELIVERY APPROACH ─── */}
      <section className="relative z-10 w-full py-16 lg:py-20 bg-white" aria-labelledby="impact-heading">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            
            {/* Impact Highlights */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
                <span className="w-5 h-px bg-[#df012a]" />
                BUSINESS IMPACT
              </span>
              <h2 id="impact-heading" className="text-black font-bold text-[32px] sm:text-[42px] leading-tight tracking-tight mb-4">
                Reduce the cost of manual workflow execution.
              </h2>
              
              <div className="p-5 rounded-2xl bg-[#fbeaec] border border-[#df012a]/30 mb-6">
                <span className="block text-xs font-mono font-bold text-[#df012a] uppercase tracking-wider mb-1">
                  DELIVERED OUTCOME
                </span>
                <p className="text-2xl font-bold text-gray-900 leading-tight">
                  Millions in operational savings enabled
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-800">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ Less manual data entry</div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ Faster processing cycles</div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ Fewer operational errors</div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ Consistent rule execution</div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ Better exception visibility</div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">✓ More team capacity</div>
              </div>
            </div>

            {/* 4-Stage Delivery Journey */}
            <div className="lg:col-span-7">
              <h3 className="text-xl font-bold text-black mb-6">4-Stage Engineering Delivery Journey</h3>
              
              <div className="space-y-4 relative">
                {[
                  {
                    num: "01",
                    title: "Discover the workflow",
                    desc: "Analyze manual bottlenecks, data inputs, existing systems, and operational stakes.",
                  },
                  {
                    num: "02",
                    title: "Map systems, rules & exceptions",
                    desc: "Define exact decision trees, API connections, policy thresholds, and human review gates.",
                  },
                  {
                    num: "03",
                    title: "Prototype & validate",
                    desc: "Build controlled prototype agents to validate accuracy, security, and exception routing.",
                  },
                  {
                    num: "04",
                    title: "Integrate, launch & optimise",
                    desc: "Deploy into production, link enterprise APIs, log audit trails, and refine performance.",
                  },
                ].map((step) => (
                  <div key={step.num} className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-4">
                    <span className="font-mono text-sm font-bold text-[#df012a] bg-[#fbeaec] px-2.5 py-1 rounded-lg">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Contextual Internal Links */}
          <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4 text-xs font-semibold text-gray-600">
            <span>Explore related services:</span>
            <Link href="/services/custom-software" className="text-[#df012a] hover:underline">
              Enterprise Custom Software
            </Link>
            <span>·</span>
            <Link href="/services/enterprise-integrations" className="text-[#df012a] hover:underline">
              Enterprise Integrations
            </Link>
            <span>·</span>
            <Link href="/services/legacy-modernisation" className="text-[#df012a] hover:underline">
              Legacy Modernisation
            </Link>
            <span>·</span>
            <Link href="/services/dedicated-engineering-teams" className="text-[#df012a] hover:underline">
              Dedicated Engineering Teams
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
