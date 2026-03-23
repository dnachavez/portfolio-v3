import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "php",
    title: "PHP",
    href: "https://www.php.net/",
    categories: ["Language"],
  },
  // Frameworks & Libraries
  {
    key: "react",
    title: "React.js",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },
  {
    key: "laravel",
    title: "Laravel",
    href: "https://laravel.com/",
    categories: ["Framework"],
  },
  {
    key: "codeigniter",
    title: "CodeIgniter",
    href: "https://codeigniter.com/",
    categories: ["Framework"],
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    categories: ["Library", "AI"],
  },
  {
    key: "vuejs",
    title: "Vue.js",
    href: "https://vuejs.org/",
    categories: ["Framework"],
  },
  {
    key: "expressjs",
    title: "Express.js",
    href: "https://expressjs.com/",
    categories: ["Framework"],
    theme: true,
  },
  // AI/ML
  {
    key: "openai",
    title: "OpenAI",
    href: "https://openai.com/",
    categories: ["AI"],
    theme: true,
  },
  {
    key: "gemini",
    title: "Google Gemini",
    href: "https://gemini.google.com/",
    categories: ["AI"],
  },
  {
    key: "claude",
    title: "Anthropic Claude",
    href: "https://claude.ai/",
    categories: ["AI"],
  },
  {
    key: "huggingface",
    title: "Hugging Face",
    href: "https://huggingface.co/",
    categories: ["AI"],
  },
  {
    key: "pinecone",
    title: "Pinecone",
    href: "https://www.pinecone.io/",
    categories: ["Database", "AI"],
  },
  {
    key: "neo4j",
    title: "Neo4j",
    href: "https://neo4j.com/",
    categories: ["Database"],
  },
  {
    key: "azure-di",
    title: "Azure Document Intelligence",
    href: "https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence",
    categories: ["AI", "Cloud"],
  },
  // Automation
  {
    key: "n8n",
    title: "n8n",
    href: "https://n8n.io/",
    categories: ["Automation"],
  },
  {
    key: "make",
    title: "Make",
    href: "https://www.make.com/",
    categories: ["Automation"],
  },
  {
    key: "zapier",
    title: "Zapier",
    href: "https://zapier.com/",
    categories: ["Automation"],
  },
  // Cloud & DevOps
  {
    key: "aws",
    title: "AWS",
    href: "https://aws.amazon.com/",
    categories: ["Cloud"],
  },
  {
    key: "gcp",
    title: "GCP",
    href: "https://cloud.google.com/",
    categories: ["Cloud"],
  },
  {
    key: "firebase",
    title: "Firebase",
    href: "https://firebase.google.com/",
    categories: ["Cloud"],
  },
  {
    key: "vercel",
    title: "Vercel",
    href: "https://vercel.com/",
    categories: ["Cloud"],
    theme: true,
  },
  {
    key: "netlify",
    title: "Netlify",
    href: "https://www.netlify.com/",
    categories: ["Cloud"],
  },
  {
    key: "github-actions",
    title: "GitHub Actions",
    href: "https://github.com/features/actions",
    categories: ["DevOps"],
    theme: true,
  },
  {
    key: "circleci",
    title: "CircleCI",
    href: "https://circleci.com/",
    categories: ["DevOps"],
  },
  {
    key: "serverless",
    title: "Serverless Framework",
    href: "https://www.serverless.com/",
    categories: ["DevOps"],
  },
  {
    key: "digitalocean",
    title: "Digital Ocean",
    href: "https://www.digitalocean.com/",
    categories: ["Cloud"],
  },
  {
    key: "replit",
    title: "Replit",
    href: "https://replit.com/",
    categories: ["Cloud", "Tools"],
  },
  {
    key: "cpanel",
    title: "cPanel",
    href: "https://cpanel.net/",
    categories: ["Cloud"],
  },
  // Databases
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "dynamodb",
    title: "DynamoDB",
    href: "https://aws.amazon.com/dynamodb/",
    categories: ["Database"],
  },
  {
    key: "supabase",
    title: "Supabase",
    href: "https://supabase.com/",
    categories: ["Database"],
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database"],
  },
  // Version Control
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    categories: ["Version Control"],
    theme: true,
  },
  {
    key: "bitbucket",
    title: "Bitbucket",
    href: "https://bitbucket.org/",
    categories: ["Version Control"],
  },
  // Design & Tools
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "ps",
    title: "Photoshop",
    href: "https://www.adobe.com/products/photoshop.html",
    categories: ["Tools", "Design"],
  },
  {
    key: "canva",
    title: "Canva",
    href: "https://www.canva.com/",
    categories: ["Tools", "Design"],
  },
  {
    key: "wordpress",
    title: "WordPress",
    href: "https://wordpress.org/",
    categories: ["Tools", "CMS"],
  },
  {
    key: "adobe",
    title: "Adobe Creative Suite",
    href: "https://www.adobe.com/creativecloud.html",
    categories: ["Tools", "Design"],
  },
]
