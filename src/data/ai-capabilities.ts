export interface AiCapability {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export const aiCapabilities: AiCapability[] = [
  {
    id: "generative-ai",
    icon: "Sparkles",
    title: "Generative AI Applications",
    description:
      "Custom AI assistants, enterprise knowledge search, document summarisation, content generation, and retrieval-augmented generation (RAG) systems grounded in your own data.",
    tags: ["RAG", "LLMs", "Enterprise Search", "Knowledge Base"],
  },
  {
    id: "ai-agents",
    icon: "Bot",
    title: "AI Agents & Automation",
    description:
      "Intelligent agents that reason, plan, and act across multiple steps — connecting systems, executing workflows, and reducing repetitive manual work without constant human input.",
    tags: ["Multi-step agents", "Tool use", "Workflow automation"],
  },
  {
    id: "document-intelligence",
    icon: "FileSearch",
    title: "Document Intelligence",
    description:
      "Extract, classify, validate and structure information from PDFs, forms, invoices, contracts, medical records, and unstructured documents at scale.",
    tags: ["OCR", "Classification", "Data extraction", "Validation"],
  },
  {
    id: "conversational-ai",
    icon: "MessageSquare",
    title: "Conversational AI",
    description:
      "Customer support assistants, internal knowledge assistants, voice experiences, and multilingual interfaces that handle complex queries with context and accuracy.",
    tags: ["Chatbots", "Voice AI", "Multilingual", "Support automation"],
  },
  {
    id: "predictive-analytics",
    icon: "TrendingUp",
    title: "Predictive Analytics",
    description:
      "Forecasting, recommendation engines, anomaly detection, classification, and decision-support systems built on your operational data to surface actionable intelligence.",
    tags: ["Forecasting", "Anomaly detection", "Recommendations", "ML"],
  },
  {
    id: "ai-integration",
    icon: "Plug",
    title: "AI Integration",
    description:
      "Add AI capabilities to existing ERP, CRM, healthcare, event management, e-commerce, and enterprise platforms — without rebuilding what already works.",
    tags: ["ERP/CRM AI", "API integration", "Healthcare AI", "Embedded AI"],
  },
];
