// ── Case Study data for featured projects ──
// Each study: id, title, subtitle, role, timeline, status,
//   overview, problem, challenges[], solution, architecture,
//   techStack[], keyFeatures[], results[], links, accentColor

export const caseStudies = [
  {
    id: "career-recruit-ai",
    title: "Career Recruit AI",
    subtitle: "AI-Powered Campus Placement & Career Intelligence Platform",
    role: "Full-Stack & AI Developer",
    timeline: "3 months",
    status: "Freelance · Delivered",
    accentColor: "#FF6B35",
    tags: ["React", "Node.js", "FastAPI", "MongoDB", "scikit-learn", "spaCy", "JWT"],

    overview:
      "A comprehensive campus placement platform built for a college, featuring three distinct role portals (Student, Admin, Alumni) and a FastAPI-powered AI microservice. The system automates the entire placement cycle—from résumé parsing to shortlisting—while giving students personalized career guidance.",

    problem:
      "The college's placement cell was overwhelmed managing hundreds of student profiles manually. Recruiters had no way to programmatically screen candidates, students lacked real career direction, and the process was entirely paper-driven with zero analytics or automation.",

    challenges: [
      "Three completely different user experiences (Student / Admin / Alumni) with shared data but isolated permissions",
      "Integrating a Python AI microservice seamlessly into a Node.js/Express backend without latency spikes",
      "Building an ML placement prediction model accurate enough to be trustworthy (not just a toy)",
      "Parsing unstructured PDF résumés reliably across varied formats using pdfplumber + spaCy NER",
      "Real-time notifications when shortlisting decisions were made, without polling",
    ],

    solution:
      "Architected a hybrid backend where Node.js/Express handles auth (JWT + RBAC), business logic, and data persistence (MongoDB), while proxying all AI workloads to a FastAPI microservice. The AI layer handles ML prediction, résumé parsing, skill-gap analysis, and the TF-IDF FAQ chatbot — all independently scalable.",

    architecture: [
      { layer: "Frontend", detail: "React SPA with role-based route guards. Separate dashboards per role with shared component library." },
      { layer: "Auth Layer", detail: "JWT tokens with RBAC middleware. Role embedded in token payload, verified at every protected route." },
      { layer: "API Gateway", detail: "Node.js/Express acts as the single entry point, proxying AI requests to FastAPI to keep credentials server-side." },
      { layer: "AI Microservice", detail: "FastAPI (Python) handles: RandomForest placement prediction, pdfplumber + spaCy résumé parsing, TF-IDF chatbot, career path engine." },
      { layer: "Database", detail: "MongoDB with Mongoose schemas. Separate collections for users, applications, jobs, predictions, and chat logs." },
    ],

    techStack: [
      { name: "React", purpose: "Frontend SPA" },
      { name: "Node.js + Express", purpose: "API Gateway & Auth" },
      { name: "FastAPI (Python)", purpose: "AI Microservice" },
      { name: "MongoDB", purpose: "Primary Database" },
      { name: "scikit-learn", purpose: "ML Placement Prediction" },
      { name: "spaCy + pdfplumber", purpose: "Résumé NLP Parsing" },
      { name: "JWT + RBAC", purpose: "Authentication & Authorisation" },
      { name: "Recharts", purpose: "Analytics Dashboards" },
    ],

    keyFeatures: [
      "ML placement prediction with RandomForest, trained on historical placement data",
      "Résumé parser extracting skills, education, and experience from PDF files",
      "Skill-gap analysis comparing student profile against job requirements",
      "AI-generated career path recommendations personalised per student",
      "Mock interview practice module with question banks",
      "TF-IDF FAQ chatbot for student queries",
      "Automated shortlisting with email + in-app notifications",
      "Recharts-powered analytics dashboards for admin",
      "CSV and PDF export of placement reports",
    ],

    results: [
      "Reduced manual screening time by ~70% through automated shortlisting",
      "Placement prediction model achieved 84% accuracy on test dataset",
      "Résumé parsing handled 95%+ of submitted formats without manual correction",
      "Zero authentication vulnerabilities across 3 user roles in security review",
    ],

    links: {
      github: "https://github.com/Bhavik9696/AI-Based-Smart-Campus-Placement-and-Career-Intelligence-System-.git",
      live: null,
    },
  },

  {
    id: "projectlens-ai",
    title: "ProjectLens AI",
    subtitle: "RAG-Powered Software Requirements Traceability Platform",
    role: "Full-Stack & AI Developer",
    timeline: "6 weeks",
    status: "Personal Project · Live",
    accentColor: "#E8C547",
    tags: ["React", "Vite", "Node.js", "MongoDB", "RAG", "Gemini AI", "GitHub API"],

    overview:
      "ProjectLens AI automatically extracts software requirements from SRS documents and verifies their implementation against real GitHub repositories. It uses Retrieval-Augmented Generation (RAG) to cross-reference requirements with code, classifying each feature as Implemented, Partial, Missing, or Not Verifiable.",

    problem:
      "Software teams often lose track of whether their implementation actually matches what was specified. Requirements traceability (RTM) is usually done manually — a slow, error-prone process that most small teams skip entirely. There was no accessible tool that could do this automatically for real GitHub repos.",

    challenges: [
      "Building a reliable RAG pipeline that could handle large SRS documents without hallucination",
      "GitHub API rate limits when fetching repo contents for large codebases",
      "Distinguishing 'Implemented', 'Partial', 'Missing' with confidence — not just binary classification",
      "Redacting secrets and sensitive patterns from code before sending to Gemini (privacy-first RAG)",
      "Generating PDF Traceability Matrix (RTM) reports that look professional enough for client delivery",
    ],

    solution:
      "Built a chunked RAG pipeline that splits SRS documents into requirement units, embeds them, and then retrieves relevant code snippets from GitHub repos to feed as context to Gemini AI. The AI performs evidence-based analysis — it must cite specific file paths and line ranges when classifying a requirement.",

    architecture: [
      { layer: "Frontend", detail: "React + Vite SPA with an interactive RTM table and live analysis dashboard." },
      { layer: "RAG Pipeline", detail: "SRS → chunked requirements → vector search → GitHub code retrieval → Gemini analysis with evidence citations." },
      { layer: "GitHub Integration", detail: "GitHub API fetches file trees and content. Files are scanned and secrets are redacted before AI processing." },
      { layer: "AI Layer", detail: "Gemini AI (via Google AI SDK) classifies each requirement with confidence score, evidence, and reasoning." },
      { layer: "Report Engine", detail: "Generates downloadable PDF RTM reports and project health score dashboards." },
    ],

    techStack: [
      { name: "React + Vite", purpose: "Frontend SPA" },
      { name: "Node.js + Express", purpose: "Backend API" },
      { name: "MongoDB", purpose: "Store analysis results & history" },
      { name: "Gemini AI", purpose: "Requirement classification & analysis" },
      { name: "GitHub REST API", purpose: "Repository code retrieval" },
      { name: "RAG Architecture", purpose: "Context-aware requirement verification" },
    ],

    keyFeatures: [
      "Automatic SRS document parsing and requirement extraction",
      "GitHub repository analysis — any public repo by URL",
      "Evidence-based classification: Implemented / Partial / Missing / Not Verifiable",
      "Interactive Traceability Matrix (RTM) with filtering and sorting",
      "Project Health Score — an aggregate quality metric",
      "AI Copilot for follow-up questions about specific requirements",
      "PDF report generation for client/team delivery",
      "Privacy-focused: secrets and tokens redacted before AI processing",
    ],

    results: [
      "Successfully traced requirements across repos with 500+ files",
      "Reduced manual RTM creation from days to under 10 minutes",
      "Deployed and live at project-lens-ai-kappa.vercel.app",
      "Handles SRS documents up to 50 pages reliably",
    ],

    links: {
      github: "https://github.com/Bhavik9696/ProjectLens.Ai.git",
      live: "https://project-lens-ai-kappa.vercel.app/",
    },
  },

  {
    id: "allyvex",
    title: "ALLYVEX",
    subtitle: "Multi-Agent AI Sales Intelligence Engine",
    role: "Full-Stack & AI Engineer",
    timeline: "4 weeks",
    status: "Personal Project",
    accentColor: "#FF6B35",
    tags: ["Python", "FastAPI", "React", "Groq LLaMA", "Mistral", "SSE"],

    overview:
      "ALLYVEX is a multi-agent AI sales intelligence platform where four specialised AI agents collaborate to analyse companies and produce customer-vs-partner sales verdicts with confidence scores. It also auto-drafts personalised outreach emails — replacing hours of manual research with sub-minute AI analysis.",

    problem:
      "Sales teams spend 2–4 hours manually researching a single prospect before deciding whether to pitch them as a customer or a potential partner. This research is inconsistent, doesn't scale, and relies heavily on individual analyst intuition with no structured output.",

    challenges: [
      "Coordinating four independent AI agents without circular dependencies or race conditions",
      "Streaming partial results to the React frontend via Server-Sent Events (SSE) for a live 'thinking' feel",
      "Keeping LLM costs low while maintaining analysis quality — required careful model selection per agent",
      "Getting agents to produce structured JSON verdicts reliably, not free-form text",
      "Designing an Orchestrator agent that synthesises conflicting opinions from Bull and Bear agents",
    ],

    solution:
      "Implemented a sequential multi-agent pipeline with SSE streaming: Bull Agent researches the bullish case, Bear Agent argues the risks, Detective Agent finds verifiable facts, and the Orchestrator synthesises a final verdict with confidence score. Each agent uses the optimal LLM for its task (LLaMA 3 via Groq for speed, Mistral for structured output).",

    architecture: [
      { layer: "Bull Agent", detail: "Researches the strongest reasons this company would be a great customer. Uses LLaMA 3 (Groq) for speed." },
      { layer: "Bear Agent", detail: "Argues the risk factors and reasons they might not convert or churn. Counterbalances Bull." },
      { layer: "Detective Agent", detail: "Verifies factual claims made by Bull/Bear — funding, headcount, tech stack signals." },
      { layer: "Orchestrator Agent", detail: "Synthesises all three inputs into a final Customer/Partner verdict with confidence score and reasoning." },
      { layer: "SSE Stream", detail: "FastAPI streams each agent's partial output to React frontend in real-time so users see the analysis as it happens." },
      { layer: "Email Drafter", detail: "After verdict, auto-drafts a personalised outreach email using the verdict reasoning as context." },
    ],

    techStack: [
      { name: "Python + FastAPI", purpose: "Agent orchestration & SSE backend" },
      { name: "React", purpose: "Frontend with live streaming UI" },
      { name: "Groq LLaMA 3", purpose: "Bull & Bear agents (speed-optimised)" },
      { name: "Mistral", purpose: "Detective & Orchestrator (structured output)" },
      { name: "Server-Sent Events", purpose: "Real-time agent output streaming" },
    ],

    keyFeatures: [
      "Four specialised agents: Bull, Bear, Detective, Orchestrator",
      "Real-time streaming via SSE — watch the AI think live",
      "Customer vs Partner verdict with confidence score (0–100%)",
      "Automated outreach email generation post-verdict",
      "Company research from public signals (news, job postings, tech stack)",
      "Structured JSON verdicts for downstream integration",
    ],

    results: [
      "Reduces prospect research from 2–4 hours to under 3 minutes",
      "Four-agent architecture produces more balanced verdicts than single-model approaches",
      "SSE streaming keeps UI responsive even during long research phases",
      "Outreach emails rated 'send-ready' by test users without editing",
    ],

    links: {
      github: "https://github.com/Bhavik9696/ALLYVEX.git",
      live: null,
    },
  },
];

export function getCaseStudy(id) {
  return caseStudies.find((cs) => cs.id === id) || null;
}

export function getAdjacentStudies(id) {
  const idx = caseStudies.findIndex((cs) => cs.id === id);
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null,
  };
}
