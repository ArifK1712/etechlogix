"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Database,
  ShieldCheck,
  Zap,
  Cpu,
  UserCheck,
  Lock,
  QrCode,
  Users,
  Layers,
  Sparkles,
  Check,
  AlertTriangle,
  RefreshCw,
  Server,
  Activity,
} from "lucide-react";

export interface AgenticTab {
  id: string;
  num: string;
  tabLabel: string;
  title: string;
  problem: string;
  agentAction: string;
  connectedSystems: string;
  humanApproval: string;
  businessOutcome: string;
  imageSrc: string;
  imageAlt: string;
}

export const agenticTabs: AgenticTab[] = [
  {
    id: "workflow-automation",
    num: "01",
    tabLabel: "Workflow Automation Agents",
    title: "End-to-End Workflow Automation Agents",
    problem: "Disconnected enterprise applications requiring manual data entry and multi-step coordination across teams.",
    agentAction: "Orchestrates complex end-to-end tasks, triggers real-time events, applies business rules, and executes API calls across platforms.",
    connectedSystems: "Salesforce, MuleSoft, Descartes, Custom APIs, Enterprise ERPs",
    humanApproval: "Human review automatically triggered when business rules flag high-value threshold exceptions.",
    businessOutcome: "Eliminates manual data transfer delays and reduces operational overhead.",
    imageSrc: "/showcase-agents.png",
    imageAlt: "Workflow Automation Agent execution visual",
  },
  {
    id: "document-processing",
    num: "02",
    tabLabel: "Document Processing Agents",
    title: "Intelligent Document Processing Agents",
    problem: "High volume of unstructured PDFs, invoices, forms, and contracts causing processing backlogs.",
    agentAction: "Extracts key data fields, verifies table structures, validates entities against database records, and flags discrepancies.",
    connectedSystems: "OCR Engines, Accounting ERPs, EHR Systems, Secure Cloud Storage",
    humanApproval: "Low-confidence extractions automatically routed to a human reviewer queue.",
    businessOutcome: "Instant document processing with 99%+ data accuracy and zero manual keying.",
    imageSrc: "/showcase-docintel.png",
    imageAlt: "Intelligent Document Processing Agent visual",
  },
  {
    id: "erp-crm-agents",
    num: "03",
    tabLabel: "ERP & CRM Connected Agents",
    title: "Connected ERP & CRM Intelligence Agents",
    problem: "Isolated inventory records, customer accounts, and order statuses between CRM and ERP databases.",
    agentAction: "Bi-directionally syncs order statuses, monitors inventory thresholds, updates customer records, and flags data anomalies.",
    connectedSystems: "DMSi Agility, Salesforce, Avalara, NetSuite, SAP",
    humanApproval: "Price override requests or credit hold releases require manager sign-off.",
    businessOutcome: "Unified real-time operational data across sales, finance, and distribution teams.",
    imageSrc: "/showcase-integration.png",
    imageAlt: "ERP and CRM Connected Agent visual",
  },
  {
    id: "approval-exception",
    num: "04",
    tabLabel: "Approval & Exception Agents",
    title: "Automated Approval & Exception Agents",
    problem: "Operational bottlenecks caused by delayed manual approvals and complex exception handling.",
    agentAction: "Analyzes incoming operational requests, pre-validates compliance rules, drafts approval context, and notifies decision-makers.",
    connectedSystems: "Slack/Teams Gateways, Workday, Enterprise Portals, Email Workflows",
    humanApproval: "Designated managers review pre-compiled context and approve via 1-click action.",
    businessOutcome: "Accelerated decision velocity with full audit trail compliance.",
    imageSrc: "/showcase-chat.png",
    imageAlt: "Approval and Exception Agent visual",
  },
  {
    id: "healthcare-workflow",
    num: "05",
    tabLabel: "Healthcare Workflow Agents",
    title: "HIPAA-Compliant Healthcare Workflow Agents",
    problem: "Complex patient intake processing, insurance verification delays, and administrative record fragmentation.",
    agentAction: "Validates patient eligibility, processes intake documentation, cross-references coverage policies, and updates EHRs securely.",
    connectedSystems: "Epic EHR, Cerner, Clearinghouses, Secure Patient Portals",
    humanApproval: "Clinical discrepancies or insurance eligibility exceptions routed to medical staff.",
    businessOutcome: "Faster patient processing with guaranteed HIPAA compliance and auditability.",
    imageSrc: "/showcase-docintel.png",
    imageAlt: "Healthcare Workflow Agent visual",
  },
  {
    id: "event-operations",
    num: "06",
    tabLabel: "Event Operations Agents",
    title: "Real-Time Event Operations Agents",
    problem: "High-volume attendee registration, badge generation, access control, and live schedule sync for enterprise conferences.",
    agentAction: "Validates registrations, syncs ticketing data, triggers automated badge printing, and manages gate access control.",
    connectedSystems: "EventBrite, Cvent, Custom Badge Printers, RFID Gates",
    humanApproval: "On-site VIP changes or emergency schedule overrides require event director approval.",
    businessOutcome: "Zero-downtime event operations supporting thousands of concurrent attendees.",
    imageSrc: "/industry-events.png",
    imageAlt: "Event Operations Agent visual",
  },
];

/* ─── DYNAMIC VISUAL CANVAS COMPONENTS ─── */

/** 1. Workflow Automation Visual Canvas **/
export function WorkflowAutomationVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            WORKFLOW ORCHESTRATION CANVAS
          </span>
        </div>
        <span className="text-white/40">STEP 1 TO 4 // SYSTEM MAP</span>
      </div>

      {/* SVG Canvas Map Container */}
      <div className="relative my-auto py-2 w-full max-w-[500px] mx-auto">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40 rounded-2xl" />

        {/* Node Layout Structure */}
        <div className="relative z-10 space-y-3.5">
          
          {/* STEP 1: Entry Trigger Node */}
          <div className="flex justify-start">
            <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 flex items-center gap-2.5 shadow-sm">
              <div className="w-6 h-6 rounded-lg bg-[#df012a]/20 border border-[#df012a]/40 flex items-center justify-center text-[#df012a]">
                <FileText size={13} />
              </div>
              <div>
                <span className="block text-[9px] font-mono text-white/50 uppercase">01 // INPUT TRIGGER</span>
                <span className="text-xs font-bold text-white">New Business Request</span>
              </div>
            </div>
          </div>

          {/* Connected Line to Core */}
          <div className="flex justify-start left-12 relative my-0.5">
            <div className="w-0.5 h-3 bg-gradient-to-b from-white/20 to-[#df012a]/60 relative overflow-hidden ml-6">
              {!isReducedMotion && (
                <div className="w-full h-1.5 bg-[#df012a] animate-pulse" />
              )}
            </div>
          </div>

          {/* STEP 2: Central AI Orchestration Node */}
          <div className="p-3.5 rounded-2xl bg-[#0e0306] border border-[#df012a]/50 shadow-[0_0_20px_rgba(223,1,42,0.12)] text-center relative">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#df012a]/20 border border-[#df012a]/40 text-[#df012a] font-mono text-[9px] font-bold uppercase tracking-wider mb-1">
              <Cpu size={11} /> 02 // AI ORCHESTRATION CORE
            </div>
            <h4 className="text-xs font-bold text-white tracking-tight">AI Orchestration Engine</h4>
            <p className="text-[10px] font-mono text-white/60 mt-0.5">Planning · Rules · Execution</p>

            {/* Connected Systems Orbit Chips */}
            <div className="mt-2.5 pt-2.5 border-t border-white/10 grid grid-cols-4 gap-1.5 text-[10px] font-mono">
              <div className="p-1 rounded bg-white/5 border border-white/10 text-white/80">CRM</div>
              <div className="p-1 rounded bg-white/5 border border-white/10 text-white/80">ERP</div>
              <div className="p-1 rounded bg-white/5 border border-white/10 text-white/80">Docs</div>
              <div className="p-1 rounded bg-[#df012a]/20 border border-[#df012a]/40 text-white font-bold">API Hub</div>
            </div>
          </div>

          {/* Connected Lines to Decision Branch */}
          <div className="flex justify-center my-0.5">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#df012a]/60 to-white/20" />
          </div>

          {/* STEP 3: Decision Branching Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            {/* Auto Approved Path */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/15 relative">
              <span className="text-[9px] font-mono text-emerald-400 font-bold block mb-0.5">03A // AUTO EXECUTE</span>
              <span className="font-bold text-white block">Standard Rule</span>
              <span className="text-[10px] text-white/50 block mt-0.5">Direct System Sync</span>
            </div>

            {/* Human Review Gate Path */}
            <div className="p-3 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 relative">
              <span className="text-[9px] font-mono text-[#df012a] font-bold block mb-0.5">03B // HUMAN REVIEW</span>
              <span className="font-bold text-white block">Manager Approval</span>
              <span className="text-[10px] text-[#df012a] block mt-0.5 font-medium">Exception Gate Flagged</span>
            </div>
          </div>

          {/* STEP 4: Final Outcome Node */}
          <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <div>
                <span className="text-[9px] font-mono text-emerald-400 font-bold block">04 // FINAL OUTCOME</span>
                <span className="font-bold text-white">Workflow Completed</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
              ✓ SYNCHRONIZED
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

/** 2. Document Processing Visual Canvas **/
export function DocumentProcessingVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            DOCUMENT INTELLIGENCE PIPELINE
          </span>
        </div>
        <span className="text-white/40">OCR SCAN // DATA VALIDATION</span>
      </div>

      {/* Main Document Intelligence Canvas */}
      <div className="relative my-auto py-1 w-full max-w-[500px] mx-auto space-y-3">
        
        {/* Step 1 & 2: Document Scanning Surface & Field Extraction Split */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          
          {/* Left Column: Realistic White Document Surface with Laser Scan Beam */}
          <div className="sm:col-span-5 p-3 rounded-2xl bg-white text-gray-900 shadow-md border border-gray-300 relative overflow-hidden">
            {/* Red Scanning Beam Line */}
            {!isReducedMotion && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#df012a] shadow-[0_0_8px_#df012a] animate-pulse z-20" />
            )}

            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200 text-[9px] font-mono font-bold text-gray-500">
              <span>INVOICE_89021.PDF</span>
              <span className="text-[#df012a]">OCR SCANNING</span>
            </div>

            {/* Document Body Lines & Highlighted Fields */}
            <div className="space-y-1.5 text-[10px]">
              <div className="flex justify-between items-center p-1 rounded bg-gray-100 border border-gray-200">
                <span className="text-gray-500 font-mono">SUPPLIER:</span>
                <span className="font-bold font-mono text-gray-900">Acme Corp</span>
              </div>

              <div className="flex justify-between items-center p-1.5 rounded bg-[#fbeaec] border border-[#df012a]/40">
                <span className="text-[#df012a] font-mono font-bold">TOTAL:</span>
                <span className="font-bold font-mono text-[#df012a]">$148,250.00</span>
              </div>

              <div className="flex justify-between items-center p-1 rounded bg-gray-100 border border-gray-200">
                <span className="text-gray-500 font-mono">INV NO:</span>
                <span className="font-bold font-mono text-gray-900">INV-90214</span>
              </div>
            </div>
          </div>

          {/* Right Column: Extracted Fields & Validation Status */}
          <div className="sm:col-span-7 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-white/50 block">EXTRACTED INVOICE ID</span>
                <span className="font-mono font-bold text-white">INV-90214</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                ✓ VALIDATED
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#df012a] font-bold block">EXTRACTED AMOUNT</span>
                <span className="font-mono font-bold text-white">$148,250.00</span>
              </div>
              <span className="text-[9px] font-mono text-white/80 bg-black/40 px-1.5 py-0.5 rounded">
                MATCH PASSED
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-white/50 block">TAX &amp; LINE ITEMS</span>
                <span className="font-mono font-bold text-white">14 Items Parsed</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                ✓ RULES MATCHED
              </span>
            </div>
          </div>

        </div>

        {/* Step 3: Small Exception Branch */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#df012a]" />
            <span className="text-white/70 text-[11px]">Low-Confidence Discrepancy Route</span>
          </div>
          <span className="text-[9px] font-mono text-white/40">HUMAN REVIEW QUEUED</span>
        </div>

        {/* Step 4: Final Structured Output Completed */}
        <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">STRUCTURED OUTPUT</span>
              <span className="font-bold text-white">ERP Record Created &amp; Synced</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
            99.8% CONFIDENCE
          </span>
        </div>

      </div>
    </div>
  );
}

/** 3. Connected Systems Visual Canvas **/
export function ConnectedSystemsVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            CONNECTED AGENT TOPOLOGY
          </span>
        </div>
        <span className="text-white/40 font-mono">ERP · CRM · SYNC ENGINE</span>
      </div>

      {/* Main Connected Systems Canvas */}
      <div className="relative my-auto py-1 w-full max-w-[500px] mx-auto space-y-3">
        
        {/* Step 1: Central Dominant Core Node */}
        <div className="p-3.5 rounded-2xl bg-[#0e0306] border border-[#df012a]/50 shadow-[0_0_20px_rgba(223,1,42,0.12)] text-center relative">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#df012a]/20 border border-[#df012a]/40 text-[#df012a] font-mono text-[9px] font-bold uppercase tracking-wider mb-1">
            <Cpu size={11} /> CENTRAL INTEGRATION CORE
          </div>
          <h4 className="text-xs font-bold text-white tracking-tight">Connected Agent Core</h4>
          <p className="text-[10px] font-mono text-white/60 mt-0.5">Sync · Rules · Actions</p>
        </div>

        {/* Step 2: System Orbit Node Grid */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-center">
            <span className="block text-[9px] font-mono text-white/50 uppercase">CRM</span>
            <span className="font-bold text-white text-[11px]">Salesforce</span>
            <span className="block text-[8px] font-mono text-emerald-400 mt-0.5">UPDATES RECD</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 text-center">
            <span className="block text-[9px] font-mono text-[#df012a] font-bold uppercase">ERP</span>
            <span className="font-bold text-white text-[11px]">SAP / DMSi</span>
            <span className="block text-[8px] font-mono text-white/80 mt-0.5">ORDERS SYNCED</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 text-center">
            <span className="block text-[9px] font-mono text-white/50 uppercase">TAX &amp; APIS</span>
            <span className="font-bold text-white text-[11px]">Avalara / APIs</span>
            <span className="block text-[8px] font-mono text-emerald-400 mt-0.5">RATES LIVE</span>
          </div>
        </div>

        {/* Step 3: Conflict Handling & Mismatch Resolution Gate */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-[#df012a]" />
            <div>
              <span className="text-[9px] font-mono text-white/50 block">CONFLICT RESOLUTION</span>
              <span className="font-bold text-white text-[11px]">Data Discrepancy Validated &amp; Resolved</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded font-bold">
            UNIFIED
          </span>
        </div>

        {/* Step 4: Final Unified Synchronized Record */}
        <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">UNIFIED OUTCOME</span>
              <span className="font-bold text-white">Systems Synchronized</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
            ✓ SINGLE SOURCE OF TRUTH
          </span>
        </div>

      </div>
    </div>
  );
}

/** 4. Approval Exception Visual Canvas **/
export function ApprovalExceptionVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            DECISION ROUTING CANVAS
          </span>
        </div>
        <span className="text-white/40 font-mono font-medium">REQUEST EVALUATION &amp; ROUTING</span>
      </div>

      {/* Main Decision Tree Canvas */}
      <div className="relative my-auto py-1 w-full max-w-[500px] mx-auto space-y-3">
        
        {/* Step 1: Incoming Request Node */}
        <div className="flex justify-start">
          <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 flex items-center gap-2 shadow-sm">
            <div className="w-5 h-5 rounded bg-[#df012a]/20 border border-[#df012a]/40 flex items-center justify-center text-[#df012a]">
              <FileText size={11} />
            </div>
            <div>
              <span className="block text-[8px] font-mono text-white/50 uppercase">01 // INCOMING REQUEST</span>
              <span className="text-[11px] font-bold text-white">PO-88402 Purchase Approval ($48,500)</span>
            </div>
          </div>
        </div>

        {/* Step 2: Rule Evaluation Node */}
        <div className="p-3 rounded-2xl bg-[#0e0306] border border-[#df012a]/50 shadow-[0_0_16px_rgba(223,1,42,0.12)] text-center relative">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#df012a]/20 border border-[#df012a]/40 text-[#df012a] font-mono text-[9px] font-bold uppercase tracking-wider mb-0.5">
            <ShieldCheck size={10} /> 02 // POLICY &amp; RULE CHECK
          </div>
          <h4 className="text-xs font-bold text-white tracking-tight">AI Evaluation Engine</h4>
          <span className="text-[9px] font-mono text-white/50 block">Limits · Compliance · Delegations</span>
        </div>

        {/* Step 3: Decision Branches (3 Paths: Auto, Human Review, Exception) */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-center">
            <span className="block text-[8px] font-mono text-emerald-400 font-bold uppercase">AUTO-APPROVED</span>
            <span className="font-bold text-white text-[10px]">Under Threshold</span>
            <span className="block text-[8px] font-mono text-emerald-400 mt-0.5">✓ DIRECT PASSED</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 text-center">
            <span className="block text-[8px] font-mono text-[#df012a] font-bold uppercase">HUMAN REVIEW</span>
            <span className="font-bold text-white text-[10px]">Manager Gate</span>
            <span className="block text-[8px] font-mono text-[#df012a] mt-0.5 font-bold">SLACK 1-CLICK</span>
          </div>

          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
            <span className="block text-[8px] font-mono text-amber-400 font-bold uppercase">EXCEPTION</span>
            <span className="font-bold text-white text-[10px]">Policy Mismatch</span>
            <span className="block text-[8px] font-mono text-amber-400 mt-0.5">INVESTIGATING</span>
          </div>
        </div>

        {/* Step 4: Human Checkpoint Node */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <UserCheck size={14} className="text-[#df012a]" />
            <div>
              <span className="text-[9px] font-mono text-white/50 block">HUMAN REVIEW CHECKPOINT</span>
              <span className="font-bold text-white text-[11px]">Authorized Approver Sign-Off Logged</span>
            </div>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded font-bold">
            SIGNED
          </span>
        </div>

        {/* Step 5: Final Resolved State */}
        <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">FINAL RESOLUTION</span>
              <span className="font-bold text-white">Request Resolved &amp; Completed</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
            ✓ AUDITED
          </span>
        </div>

      </div>
    </div>
  );
}

/** 5. Healthcare Workflow Visual Canvas **/
export function HealthcareWorkflowVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            HEALTHCARE WORKFLOW CANVAS
          </span>
        </div>
        <span className="text-cyan-400 font-mono font-medium">HIPAA SECURED · AES-256</span>
      </div>

      {/* Main Healthcare Workflow Canvas */}
      <div className="relative my-auto py-1 w-full max-w-[500px] mx-auto space-y-3">
        
        {/* Step 1 & 2: Patient Intake Document Surface & Field Extraction Split */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          
          {/* Left Column: Realistic White Medical Record Surface */}
          <div className="sm:col-span-5 p-3 rounded-2xl bg-white text-gray-900 shadow-md border border-gray-300 relative overflow-hidden">
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-gray-200 text-[9px] font-mono font-bold text-gray-500">
              <span>PATIENT_INTAKE.PDF</span>
              <span className="text-cyan-600 font-bold">HIPAA FORM</span>
            </div>

            {/* Form Fields */}
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between items-center p-1 rounded bg-gray-100">
                <span className="text-gray-500 font-mono">PATIENT ID:</span>
                <span className="font-bold font-mono text-gray-900">PT-44910</span>
              </div>
              <div className="flex justify-between items-center p-1 rounded bg-cyan-50 border border-cyan-200">
                <span className="text-cyan-800 font-mono font-bold">PROVIDER:</span>
                <span className="font-bold font-mono text-cyan-900">Metro Health</span>
              </div>
              <div className="flex justify-between items-center p-1 rounded bg-gray-100">
                <span className="text-gray-500 font-mono">DOC TYPE:</span>
                <span className="font-bold font-mono text-gray-900">Referral</span>
              </div>
            </div>
          </div>

          {/* Right Column: Secure Validation & Compliance Checks */}
          <div className="sm:col-span-7 space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-white/50 block">REQUIRED FIELDS</span>
                <span className="font-mono font-bold text-white text-[11px]">All 28 Fields Validated</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                ✓ PASSED
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-cyan-400 font-bold block">COMPLIANCE &amp; SECURITY</span>
                <span className="font-mono font-bold text-white text-[11px]">HIPAA Record Verified</span>
              </div>
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-900/60 px-1.5 py-0.5 rounded font-bold">
                ENCRYPTED
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono text-white/50 block">EHR MATCH</span>
                <span className="font-bold text-white text-[11px]">Epic System Linked</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                ✓ MATCHED
              </span>
            </div>
          </div>

        </div>

        {/* Step 3: Small Exception Handling Branch */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#df012a]" />
            <span className="text-white/70 text-[11px]">Clinical Exception Escalation Route</span>
          </div>
          <span className="text-[9px] font-mono text-white/40">STAFF QUEUED</span>
        </div>

        {/* Step 4: Final Secure System Update Completed */}
        <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">SECURE SYSTEM UPDATE</span>
              <span className="font-bold text-white">Record Securely Updated</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
            ✓ AUDIT TRAIL LOGGED
          </span>
        </div>

      </div>
    </div>
  );
}

/** 6. Event Operations Visual Canvas **/
export function EventOperationsVisual({ isReducedMotion }: { isReducedMotion: boolean }) {
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 relative overflow-hidden select-none">
      {/* Top Architectural Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse" />
          <span className="text-white font-bold uppercase tracking-wider">
            EVENT OPERATIONS CANVAS
          </span>
        </div>
        <span className="text-[#df012a] font-mono font-bold">10K+ CONCURRENCY // LIVE</span>
      </div>

      {/* Main Event Operations Canvas */}
      <div className="relative my-auto py-1 w-full max-w-[500px] mx-auto space-y-3">
        
        {/* Step 1: Registration Intake Node */}
        <div className="flex justify-start">
          <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/15 flex items-center gap-2 shadow-sm">
            <div className="w-5 h-5 rounded bg-[#df012a]/20 border border-[#df012a]/40 flex items-center justify-center text-[#df012a]">
              <QrCode size={11} />
            </div>
            <div>
              <span className="block text-[8px] font-mono text-white/50 uppercase">01 // INTAKE</span>
              <span className="text-[11px] font-bold text-white">Attendee Reg #REG-10940 (VIP Pass)</span>
            </div>
          </div>
        </div>

        {/* Step 2: Validation Stage */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/15 flex items-center justify-between text-xs">
          <div>
            <span className="text-[9px] font-mono text-white/50 block">ATTENDEE &amp; TICKET VALIDATED</span>
            <span className="font-bold text-white text-[11px]">Payment &amp; Eligibility Verified</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded font-bold">
            ✓ CONFIRMED
          </span>
        </div>

        {/* Step 3: Operational Routing Engine (Ticketing, Badge, Check-In, Access) */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-center">
            <span className="block text-[8px] font-mono text-white/50 uppercase">TICKETING</span>
            <span className="font-bold text-white text-[10px]">QR Generated</span>
            <span className="block text-[8px] font-mono text-emerald-400 mt-0.5">READY</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#df012a]/15 border border-[#df012a]/40 text-center">
            <span className="block text-[8px] font-mono text-[#df012a] font-bold uppercase">BADGE PRINT</span>
            <span className="font-bold text-white text-[10px]">On-Site Sync</span>
            <span className="block text-[8px] font-mono text-white/80 mt-0.5 font-bold">PRINTED</span>
          </div>

          <div className="p-2 rounded-xl bg-white/5 border border-white/15 text-center">
            <span className="block text-[8px] font-mono text-white/50 uppercase">ACCESS</span>
            <span className="font-bold text-white text-[10px]">Session Gate</span>
            <span className="block text-[8px] font-mono text-emerald-400 mt-0.5">GRANTED</span>
          </div>
        </div>

        {/* Step 4: Small Exception Branch */}
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-amber-400" />
            <span className="text-white/70 text-[11px]">Pending Payment / Duplicate Reg Check</span>
          </div>
          <span className="text-[9px] font-mono text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded font-bold">
            RESOLVED
          </span>
        </div>

        {/* Step 5: Final Live Event Update & Attendee Ready */}
        <div className="p-3 rounded-xl bg-white/5 border border-emerald-500/30 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <div>
              <span className="text-[9px] font-mono text-emerald-400 font-bold block">LIVE EVENT SYSTEM UPDATE</span>
              <span className="font-bold text-white">Attendee Ready &amp; Checked In</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">
            ✓ EVENT-READY
          </span>
        </div>

      </div>
    </div>
  );
}

export function AiSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [translateOffset, setTranslateOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Recalculate track max scroll offset
  const updateMaxOffset = useCallback(() => {
    if (containerRef.current && trackRef.current) {
      const containerW = containerRef.current.offsetWidth;
      const trackW = trackRef.current.scrollWidth;
      const max = Math.max(0, trackW - containerW);
      setMaxOffset(max);
      setTranslateOffset((prev) => Math.min(prev, max));
    }
  }, []);

  useEffect(() => {
    updateMaxOffset();
    window.addEventListener("resize", updateMaxOffset);
    return () => window.removeEventListener("resize", updateMaxOffset);
  }, [updateMaxOffset]);

  // Reduced motion & Intersection Observer
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % agenticTabs.length);
  }, []);

  useEffect(() => {
    if (!isIntersecting || isPaused || prefersReducedMotion) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(nextSlide, 7000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isIntersecting, isPaused, prefersReducedMotion, nextSlide]);

  // Keep active tab visible in carousel window
  useEffect(() => {
    if (containerRef.current && trackRef.current) {
      const activeTabElem = trackRef.current.children[activeIdx] as HTMLElement;
      if (activeTabElem) {
        const tabLeft = activeTabElem.offsetLeft;
        const tabWidth = activeTabElem.offsetWidth;
        const containerW = containerRef.current.offsetWidth;

        setTranslateOffset((prev) => {
          if (tabLeft + tabWidth > prev + containerW) {
            return Math.min(maxOffset, tabLeft + tabWidth - containerW + 32);
          } else if (tabLeft < prev) {
            return Math.max(0, tabLeft - 32);
          }
          return prev;
        });
      }
    }
  }, [activeIdx, maxOffset]);

  // Arrow Clicks change active tab one at a time
  const handlePrevTab = () => {
    setActiveIdx((prev) => Math.max(0, prev - 1));
  };

  const handleNextTab = () => {
    setActiveIdx((prev) => Math.min(agenticTabs.length - 1, prev + 1));
  };

  const active = agenticTabs[activeIdx];

  // Render dedicated visual component per tab
  const renderRightVisualCanvas = () => {
    switch (activeIdx) {
      case 0:
        return <WorkflowAutomationVisual isReducedMotion={prefersReducedMotion} />;
      case 1:
        return <DocumentProcessingVisual isReducedMotion={prefersReducedMotion} />;
      case 2:
        return <ConnectedSystemsVisual isReducedMotion={prefersReducedMotion} />;
      case 3:
        return <ApprovalExceptionVisual isReducedMotion={prefersReducedMotion} />;
      case 4:
        return <HealthcareWorkflowVisual isReducedMotion={prefersReducedMotion} />;
      case 5:
        return <EventOperationsVisual isReducedMotion={prefersReducedMotion} />;
      default:
        return <WorkflowAutomationVisual isReducedMotion={prefersReducedMotion} />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="ai-solutions"
      className="relative z-10 w-full py-16 lg:py-20 bg-white text-black overflow-hidden"
      aria-labelledby="ai-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── TOP SECTION: Eyebrow, Heading, Paragraph & Prominent Impact Line ─── */}
        <div className="mb-12 lg:mb-16 max-w-[950px] mx-auto text-center">
          <span className="inline-flex items-center justify-center gap-2 text-[#df012a] text-xs font-bold uppercase tracking-[0.14em] mb-3">
            <span className="w-5 h-px bg-[#df012a]" />
            AGENTIC AI &amp; WORKFLOW AUTOMATION
            <span className="w-5 h-px bg-[#df012a]" />
          </span>
          <h2
            id="ai-heading"
            className="text-black font-bold text-[34px] sm:text-[46px] lg:text-[clamp(42px,4.5vw,58px)] leading-[1.08] tracking-tight mb-4"
          >
            From manual workflows to{" "}
            <span className="text-[#df012a]">intelligent execution.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            We build AI agents that connect enterprise systems, process documents, apply business rules, execute multi-step tasks, manage exceptions, and involve people when approvals or judgement are required.
          </p>

          {/* Prominent Impact Statement */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#fbeaec] border border-[#df012a]/20 text-xs sm:text-sm font-semibold text-gray-900 shadow-sm max-w-2xl mx-auto text-left sm:text-center">
            <span className="w-2 h-2 rounded-full bg-[#df012a] animate-pulse flex-shrink-0" />
            <span>
              Our AI-agent workflow solutions have helped clients achieve{" "}
              <strong className="text-[#df012a] font-bold">millions of dollars in operational savings</strong>{" "}
              by reducing manual work, delays, errors, and disconnected processes.
            </span>
          </div>
        </div>

        {/* ─── 6 AGENTIC AI CAPABILITY TABS CAROUSEL (One-Tab Arrow Navigation, No Scrollbar) ─── */}
        <div className="flex items-center gap-3 mb-10 py-3 relative">
          
          {/* Left Arrow: Activates Previous Tab */}
          <button
            type="button"
            onClick={handlePrevTab}
            disabled={isMounted && activeIdx === 0}
            aria-label="Previous tab"
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-800 hover:border-[#df012a] hover:text-[#df012a] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center flex-shrink-0 transition-all shadow-sm cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Carousel Window */}
          <div ref={containerRef} className="overflow-hidden flex-1 relative">
            <div
              ref={trackRef}
              className="flex items-center gap-8 transition-transform duration-500 ease-out flex-nowrap"
              style={{ transform: `translateX(-${translateOffset}px)` }}
              role="tablist"
              aria-label="Agentic AI tabs navigation"
            >
              {agenticTabs.map((item, i) => {
                const isActive = i === activeIdx;
                return (
                  <button
                    key={item.id}
                    role="tab"
                    id={`tab-agentic-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`agentic-panel-${item.id}`}
                    onClick={() => setActiveIdx(i)}
                    className={`flex items-center gap-2 py-2 px-0 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 border-b-2 flex-shrink-0 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "border-[#df012a] text-black font-bold"
                        : "border-transparent text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold ${
                        isActive ? "text-[#df012a]" : "text-gray-400"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="text-lg sm:text-2xl">{item.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Arrow: Activates Next Tab */}
          <button
            type="button"
            onClick={handleNextTab}
            disabled={isMounted && activeIdx === agenticTabs.length - 1}
            aria-label="Next tab"
            className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-800 hover:border-[#df012a] hover:text-[#df012a] disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center flex-shrink-0 transition-all shadow-sm cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>

        </div>

        {/* ─── MAIN SHOWCASE: LEFT EXPLANATORY CARD & RIGHT DYNAMIC VISUAL CANVAS ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Active Agentic Explanatory Details Panel */}
          <div className="lg:col-span-6 bg-white border border-gray-200/90 rounded-3xl p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#df012a] uppercase tracking-widest mb-2">
                {active.num} / 06 — AGENTIC AI CAPABILITY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4">
                {active.title}
              </h3>

              <div className="space-y-4 mb-6 text-sm">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/60">
                  <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Business Problem:
                  </span>
                  <p className="text-gray-800 leading-relaxed font-medium">
                    {active.problem}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#fbeaec]/40 border border-[#df012a]/20">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#df012a] mb-1">
                    What The AI Agent Does:
                  </span>
                  <p className="text-gray-900 leading-relaxed font-medium">
                    {active.agentAction}
                  </p>
                </div>
              </div>

              {/* Systems & Human Checkpoint */}
              <div className="space-y-3 mb-6 pt-4 border-t border-gray-100 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-gray-900 block mb-0.5">Connected Enterprise Tools:</span>
                  <span className="text-gray-600 font-mono">{active.connectedSystems}</span>
                </div>

                <div>
                  <span className="font-bold text-[#df012a] block mb-0.5">Human Approval Checkpoint:</span>
                  <span className="text-gray-700">{active.humanApproval}</span>
                </div>
              </div>
            </div>

            {/* Outcome Badge */}
            <div className="p-3.5 rounded-xl bg-black text-white text-xs sm:text-sm font-semibold flex items-center justify-between gap-4 mt-auto">
              <span>Outcome: {active.businessOutcome}</span>
              <CheckCircle2 size={18} className="text-[#df012a] flex-shrink-0" />
            </div>
          </div>

          {/* RIGHT: Dynamic Visual Canvas Component per Selected Tab */}
          <div className="lg:col-span-6 bg-black text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-white/10 flex flex-col justify-between min-h-[460px] sm:min-h-[500px]">
            {/* Dynamic Visual Content Canvas */}
            <div className="flex-1 flex flex-col justify-between transition-opacity duration-300">
              {renderRightVisualCanvas()}
            </div>

            {/* Bottom CTA Link */}
            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#df012a] hover:text-white transition-colors"
              >
                Discuss {active.tabLabel} for Your Enterprise <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
