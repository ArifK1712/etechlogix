export interface TechGroup {
  category: string;
  items: string[];
}

export const technologies: TechGroup[] = [
  {
    category: "AI & Machine Learning",
    items: ["OpenAI", "Azure AI", "LangChain", "Python", "TensorFlow", "PyTorch"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "React Native", "Flutter"],
  },
  {
    category: "Backend",
    items: ["Node.js", ".NET Core", "FastAPI", "Go", "Java Spring", "GraphQL"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Docker", "Kubernetes"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "dbt", "Snowflake"],
  },
  {
    category: "DevOps & Tooling",
    items: ["GitHub Actions", "Azure DevOps", "Datadog", "Sentry", "Vercel", "Nginx"],
  },
];
