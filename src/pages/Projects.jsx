import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBrain, FaLock, FaCode, FaGlobe } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";

/* ─── Project Data (preserved exactly) ─── */
const freelanceProjects = [
  {
    title: "Career Recruit AI",
    subtitle: "Full-Stack & AI Developer — Freelance Project",
    description:
      "AI-driven campus placement platform with Student, Admin, and Alumni portals, ML-based placement prediction, resume parsing, and automated shortlisting — serving 200+ students.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/AI-Based-Smart-Campus-Placement-and-Career-Intelligence-System-.git",
    tags: ["Python", "ML", "React", "FastAPI", "MongoDB"],
    category: "ai",
    featured: true,
    icon: FaBrain,
    accentColor: "#FF6B35",
  },
  {
    title: "Silent Emergency Communication System",
    subtitle: "Freelance Project",
    description:
      "AI-powered emergency alert platform using hand-gesture and fall detection via OpenCV, triggering instant SMS/email alerts with 95% real-time accuracy.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/Silent-Emergency-Communication-System.git",
    tags: ["Python", "OpenCV", "AI", "Computer Vision"],
    category: "ai",
    featured: true,
    icon: FaBrain,
    accentColor: "#E8C547",
  },
];

const personalProjects = [
  {
    title: "ProjectLens AI",
    description:
      "A RAG-powered platform that automatically extracts software requirements from SRS documents and verifies their implementation against real GitHub repositories using evidence-based AI analysis. Built intelligent requirement extraction, code retrieval, and traceability analysis to classify features as Implemented, Partial, Missing, or Not Verifiable. Features GitHub repository analysis, project health scoring, Traceability Matrix (RTM), AI Copilot, PDF report generation, and privacy-focused RAG with secret redaction.",
    liveLink: "https://project-lens-ai-kappa.vercel.app/",
    codeLink: "https://github.com/Bhavik9696/secure-project-intelligence.git",
    tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "RAG", "Gemini AI", "GitHub API"],
    category: "ai",
    icon: FaBrain,
    accentColor: "#E8C547",
  },
  {
    title: "ALLYVEX – AI Sales Intelligence Engine",
    description:
      "A multi-agent AI sales intelligence platform built using Python, FastAPI, React, Groq LLaMA, Mistral, and SSE. Architected Bull, Bear, Detective, and Orchestrator agents that research companies, generate customer-vs-partner sales verdicts with confidence scores, and automatically draft outreach emails.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/ALLYVEX.git",
    tags: ["Python", "FastAPI", "React", "LLaMA", "Groq", "SSE"],
    category: "ai",
    icon: FaBrain,
    accentColor: "#FF6B35",
  },
  {
    title: "CertiShield – AI & QR Certificate Fraud Verification",
    description:
      "An automated academic certificate verification and fraud detection platform. Performs deep QR-code payload extraction, multi-portal API validation, and OCR/Vision cross-checks (Tesseract + Gemini 2.5 Vision) to catch name tampering, serial forgery, and stolen QR credentials.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/SecureCert-Verify",
    tags: ["React", "Node.js", "Gemini", "OCR", "QR Code"],
    category: "ai",
    icon: FaLock,
    accentColor: "#FF6B35",
  },
  {
    title: "Queue-SWAP",
    description:
      "An innovative MERN-Stack web platform connecting customers who want to avoid long queues with individuals willing to stand in line on their behalf. Includes booking, live tracking, secure payments, and a rating system.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/Queue-Swap.git",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    category: "fullstack",
    icon: FaCode,
    accentColor: "#E8C547",
  },
  {
    title: "MERN Fitness Tracker",
    description:
      "A full-stack fitness tracking app with JWT-based authentication, React Context for state management, and CRUD features for managing workouts with MongoDB Atlas.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/Gym-buddy.git",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    category: "fullstack",
    icon: FaCode,
    accentColor: "#FF6B35",
  },
  {
    title: "College Official Website",
    description:
      "A full-stack web application serving as the website for a college. Built with React, Tailwind CSS, and Firebase for real-time database and authentication. Features course info, events, news, and personalized dashboards.",
    liveLink: "https://bbcdclg.netlify.app",
    codeLink: "https://github.com/Bhavik9696/college-website.git",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "fullstack",
    icon: FaGlobe,
    accentColor: "#E8C547",
  },
  {
    title: "React Password Generator",
    description:
      "A customizable password generator with adjustable length, special characters, and clipboard copy. Built with React Hooks (useState, useEffect, useRef).",
    liveLink: "https://soft-starlight-7cc2ce.netlify.app/",
    codeLink: "https://github.com/Bhavik9696/passward-generator.git",
    tags: ["React", "Vite", "Hooks"],
    category: "frontend",
    icon: FaCode,
    accentColor: "#FF6B35",
  },
  {
    title: "Responsive Landing Page for PW",
    description:
      "A visually appealing and responsive home page website built using Tailwind CSS. Fully mobile-friendly with modern design and smooth UI transitions.",
    liveLink: "https://pwlandpage.netlify.app/",
    codeLink: "https://github.com/Bhavik9696/pw-landingpage_clone.git",
    tags: ["HTML", "CSS", "Tailwind CSS"],
    category: "frontend",
    icon: FaGlobe,
    accentColor: "#E8C547",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS, showcasing projects, skills, and experience with interactive UI and smooth navigation.",
    liveLink: "https://bhavikrai-portfolio.netlify.app",
    codeLink: "https://github.com/Bhavik9696/portfolio.git",
    tags: ["React", "Tailwind CSS", "Vite"],
    category: "frontend",
    icon: FaGlobe,
    accentColor: "#FF6B35",
  },
  {
    title: "ejs-file-app",
    description:
      "View, create, and manage text files on the server with a simple web interface. Built using Node.js, Express, and EJS.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/ejs-file-app.git",
    tags: ["Node.js", "Express", "EJS"],
    category: "fullstack",
    icon: FaCode,
    accentColor: "#E8C547",
  },
  {
    title: "Stock Price Predictor",
    description:
      "Stock prediction using linear regression in Python with an integrated frontend for user interaction.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/python-miniproject.git",
    tags: ["Python", "Machine Learning", "Linear Regression"],
    category: "ai",
    icon: FaBrain,
    accentColor: "#FF6B35",
  },
];

const FILTERS = [
  { key: "all",       label: "All" },
  { key: "ai",        label: "AI / ML" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend",  label: "Frontend" },
];

/* ─── Project Card — Clean editorial style ─── */
function ProjectCard({ project, index }) {
  const { title, subtitle, description, liveLink, codeLink, tags, icon: Icon, accentColor, featured } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1E1E1E" : "#181818",
        border: "1px solid",
        borderColor: hovered ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.07)",
        borderRadius: 12,
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Left accent border */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "16%",
          bottom: "16%",
          width: 3,
          background: accentColor,
          borderRadius: "0 2px 2px 0",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.2s",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 8,
            background: "#222",
            border: "1px solid rgba(255,255,255,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accentColor,
            fontSize: "1rem",
            flexShrink: 0,
          }}
        >
          <Icon />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.97rem",
                color: hovered ? "#F5F5F0" : "#D4D4D4",
                margin: 0,
                lineHeight: 1.3,
                transition: "color 0.2s",
              }}
            >
              {title}
            </h3>
            {featured && (
              <span
                style={{
                  fontSize: "0.6rem",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "rgba(255,107,53,0.12)",
                  border: "1px solid rgba(255,107,53,0.3)",
                  color: "#FF6B35",
                  borderRadius: 4,
                  padding: "2px 6px",
                  whiteSpace: "nowrap",
                }}
              >
                Featured
              </span>
            )}
          </div>
          {subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.71rem",
                color: "#6B6B6B",
                margin: "3px 0 0",
                fontWeight: 500,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.84rem",
          color: "#A3A3A3",
          lineHeight: 1.75,
          margin: 0,
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Tech tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {tags.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            padding: "0.4rem 0.9rem",
            borderRadius: 6,
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#A3A3A3",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.77rem",
            fontWeight: 500,
            textDecoration: "none",
            transition: "color 0.18s, border-color 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#F5F5F0";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#A3A3A3";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          <FaGithub size={12} /> Source Code
        </a>

        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.4rem 0.9rem",
              borderRadius: 6,
              background: "rgba(255,107,53,0.1)",
              border: "1px solid rgba(255,107,53,0.25)",
              color: "#FF6B35",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.77rem",
              fontWeight: 500,
              textDecoration: "none",
              transition: "background 0.18s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,107,53,0.18)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,107,53,0.1)")}
          >
            <FaExternalLinkAlt size={10} /> Live Demo
          </a>
        ) : (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.4rem 0.9rem",
              borderRadius: 6,
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.2)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.77rem",
              fontWeight: 500,
            }}
          >
            Private / WIP
          </span>
        )}
      </div>
    </motion.div>
  );
}

/* ─── MAIN PROJECTS PAGE ─── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allProjects = [...freelanceProjects, ...personalProjects];

  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "7rem 2rem 5rem",
        }}
      >
        <SectionHeading
          num="03"
          label="What I've Built"
          title="Selected Work"
        />

        {/* Filter tabs — minimal text style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
            marginBottom: "3rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {FILTERS.map(({ key, label }) => {
            const isActive = activeFilter === key;
            return (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                style={{
                  padding: "0.6rem 1.25rem",
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive ? "2px solid #FF6B35" : "2px solid transparent",
                  marginBottom: "-1px",
                  color: isActive ? "#FF6B35" : "#6B6B6B",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.84rem",
                  fontWeight: isActive ? 600 : 400,
                  cursor: "pointer",
                  transition: "color 0.18s, border-color 0.18s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#A3A3A3";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#6B6B6B";
                }}
              >
                {label}
              </button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
              gap: "1.25rem",
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "#6B6B6B",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            No projects in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
