import Link from "next/link";
import { ShieldCheck, Network, ArrowRight, CheckCircle2 } from "lucide-react";

interface IntegrationGroup {
  id: string;
  category: string;
  systems: string[];
  description: string;
}

const integrationGroups: IntegrationGroup[] = [
  {
    id: "crm",
    category: "CRM & Customer Platforms",
    systems: ["Salesforce"],
    description: "Real-time customer data sync, automated opportunity pipelines, and bi-directional CRM workflows.",
  },
  {
    id: "middleware",
    category: "Integration & Middleware",
    systems: ["MuleSoft", "Custom APIs"],
    description: "Enterprise API management, ESB message routing, event buses, and high-concurrency microservices.",
  },
  {
    id: "logistics",
    category: "Distribution & Logistics",
    systems: ["Descartes", "DMSi Agility"],
    description: "Supply chain tracking, building material ERP connectors, dispatch feeds, and inventory automation.",
  },
  {
    id: "finance",
    category: "Tax & Finance",
    systems: ["Avalara"],
    description: "Automated sales tax calculation, global tax compliance, invoice reconciliation, and ERP financial sync.",
  },
  {
    id: "enterprise",
    category: "Enterprise Systems",
    systems: ["ERP platforms", "Healthcare systems", "Event platforms", "Custom operational software"],
    description: "Mission-critical internal applications, EHRs, registration systems, and legacy database bridges.",
  },
];

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="py-16 lg:py-20 bg-white text-black border-t border-gray-100 relative overflow-hidden"
      aria-labelledby="integrations-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── SECTION HEADER (Centered) ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            ENTERPRISE INTEGRATIONS
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="integrations-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            Connecting the systems your{" "}
            <span className="text-[#df012a]">business already depends on.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We build secure integrations between enterprise platforms, operational systems, cloud services, and custom applications so data and workflows move reliably across the organisation.
          </p>
        </div>

        {/* ─── CONNECTED SYSTEMS VISUAL & GROUPED CATEGORIES GRID ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Connected System Pipeline Diagram (5 Cols) */}
          <div className="lg:col-span-5 bg-black text-white rounded-3xl p-7 sm:p-9 relative overflow-hidden border border-white/10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#df012a] flex items-center gap-2">
                  <Network size={16} /> UNIFIED INTEGRATION HUB
                </span>
                <span className="text-[11px] text-white/50 font-mono">SECURE // REAL-TIME</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Zero Data Silos. End-to-End Reliability.
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Our integration architecture guarantees fail-safe message routing, strict access permissions, and continuous data auditability across legacy databases and modern cloud APIs.
              </p>

              {/* Data Flow Connection Diagram */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Source System Event</span>
                  <span className="text-[10px] font-mono text-[#df012a] bg-[#df012a]/10 px-2 py-0.5 rounded">Webhook / Trigger</span>
                </div>
                
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-[#df012a]" />
                </div>

                <div className="p-3.5 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#df012a]" /> Integration Middleware
                  </span>
                  <span className="text-[10px] font-mono text-white/80">Transformation &amp; Auth</span>
                </div>

                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-[#df012a]" />
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">Target Enterprise Platform</span>
                  <span className="text-[10px] font-mono text-white/80">Synchronized Record</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
              <span>MULESOFT // SALESFORCE // CUSTOM</span>
              <span className="text-[#df012a]">✓ VERIFIED</span>
            </div>
          </div>

          {/* RIGHT SIDE: 5 Grouped Integration Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {integrationGroups.map((group, idx) => (
              <div
                key={group.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "sm:col-span-2 bg-[#fbeaec]/30 border-[#df012a]/20" : "bg-white border-gray-100 hover:border-[#df012a]/30 hover:shadow-lg"
                }`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#df012a] mb-1.5 block">
                    {group.category}
                  </span>

                  {/* Systems Badge List */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {group.systems.map((sys) => (
                      <span
                        key={sys}
                        className="px-2.5 py-1 rounded-md bg-black text-white text-xs font-bold font-mono tracking-tight"
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {group.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 pt-3 border-t border-gray-100">
                  <CheckCircle2 size={14} className="text-[#df012a]" />
                  <span>Enterprise production deployment</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ─── BOTTOM CTA ─── */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black text-white text-sm font-bold rounded-xl hover:bg-[#df012a] transition-all duration-200 shadow-md hover:gap-3"
          >
            Discuss an Enterprise Integration <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
