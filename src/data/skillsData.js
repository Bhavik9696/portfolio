// skillsData.js — Redesigned for clean category grid layout
export const skillsData = {
  languages: [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      desc: "Semantic structure and markup for the web.",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      desc: "Responsive styling, layouts, and animations.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      desc: "Modern web scripting and development.",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "AI, ML, backend APIs and scripting.",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      desc: "OOP, DSA, and backend development.",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      desc: "Querying and managing relational databases.",
    },
  ],
  frameworks: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      desc: "Building fast and scalable user interfaces.",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      desc: "Server-side JavaScript runtime for APIs.",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      desc: "Minimalist Node.js REST API framework.",
      invert: true,
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      desc: "High-performance Python API framework.",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      desc: "Utility-first CSS for rapid UI development.",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      desc: "Responsive component library for the web.",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      desc: "Lightning-fast frontend build tooling.",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      desc: "NoSQL document database for modern apps.",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      desc: "Popular open-source relational database.",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      desc: "Advanced open-source relational database.",
    },
  ],
  ai: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Primary language for AI/ML scripting.",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      desc: "Backend API layer for AI-powered apps.",
    },
    {
      name: "RAG",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Retrieval Augmented Generation pipelines.",
    },
    {
      name: "LangChain",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "LLM orchestration and chain building.",
    },
    {
      name: "Machine Learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Supervised learning and prediction models.",
    },
    {
      name: "LLMs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      desc: "Building with Groq, Gemini, and LLaMA APIs.",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      desc: "Version control and branching strategies.",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      desc: "Code hosting, CI/CD, and collaboration.",
      invert: true,
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      desc: "Primary code editor with rich extensions.",
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      desc: "API testing, debugging, and documentation.",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      desc: "Containerizing applications for deployment.",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      desc: "Zero-config frontend deployment platform.",
      invert: true,
    },
    {
      name: "Render",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      desc: "Cloud platform for backend deployments.",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      desc: "UI/UX design and prototyping tool.",
    },
  ],
};

// Category metadata for the Skills section
export const skillCategories = [
  { key: "languages",  label: "Languages" },
  { key: "frameworks", label: "Frameworks & Libraries" },
  { key: "databases",  label: "Databases" },
  { key: "ai",         label: "AI & Python" },
  { key: "tools",      label: "Tools & Platforms" },
];
