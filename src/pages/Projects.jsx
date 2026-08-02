import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBrain, FaLock, FaCode, FaGlobe } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import FloatingDock from "../components/FloatingDock";

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
    accentColor: "#00F5FF",
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
    accentColor: "#7C3AED",
  },
];

const personalProjects = [
  {
    title: "ALLYVEX – AI Sales Intelligence Engine",
    description:
      "A multi-agent AI sales intelligence platform built using Python, FastAPI, React, Groq LLaMA, Mistral, and SSE. Architected Bull, Bear, Detective, and Orchestrator agents that research companies, generate customer-vs-partner sales verdicts with confidence scores, and automatically draft outreach emails.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/ALLYVEX.git",
    tags: ["Python", "FastAPI", "React", "LLaMA", "Groq", "SSE"],
    category: "ai",
    icon: FaBrain,
    accentColor: "#00F5FF",
  },
  {
    title: "AI-Based Project Failure Analysis System",
    description:
      "A secure RAG-powered platform built with FastAPI, React, and MongoDB that classifies project reports as Passed or Failed and generates evidence-based root cause analysis. Designed a chunked document ingestion pipeline with vector search.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/secure-project-intelligence.git",
    tags: ["RAG", "FastAPI", "React", "MongoDB", "LLM"],
    category: "ai",
    icon: FaBrain,
    accentColor: "#14F195",
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
    accentColor: "#7C3AED",
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
    accentColor: "#00F5FF",
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
    accentColor: "#14F195",
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
    accentColor: "#7C3AED",
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
    accentColor: "#00F5FF",
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
    accentColor: "#14F195",
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
    accentColor: "#7C3AED",
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
    accentColor: "#00F5FF",
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
    accentColor: "#14F195",
  },
];

const FILTERS = [
  { key: "all",      label: "All Projects" },
  { key: "ai",       label: "AI / ML" },
  { key: "fullstack",label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
];

/* ─── Project Card ─── */
function ProjectCard({ project, featured = false }) {
  const { title, subtitle, description, liveLink, codeLink, tags, icon: Icon, accentColor } = project;
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: -((e.clientY - cy) / (rect.height / 2)) * 6,
      y:  ((e.clientX - cx) / (rect.width / 2)) * 6,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
      style={{ rotateX: tilt.x, rotateY: tilt.y }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.02 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      layout
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          background: hovered
            ? `rgba(${accentColor === "#00F5FF" ? "56,189,248" : accentColor === "#7C3AED" ? "139,92,246" : "16,185,129"},0.06)`
            : "rgba(18,18,22,0.85)",
          border: `1px solid ${hovered ? accentColor + "44" : "rgba(255,255,255,0.07)"}`,
          borderRadius: 20,
          padding: featured ? "2rem" : "1.5rem",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${accentColor}22`
            : "0 4px 24px rgba(0,0,0,0.2)",
          transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Top shimmer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: hovered
              ? `linear-gradient(90deg, transparent, ${accentColor}88, transparent)`
              : "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            transition: "background 0.3s",
          }}
        />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          {/* Icon */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: `${accentColor}15`,
              border: `1px solid ${accentColor}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: accentColor,
              fontSize: "1.1rem",
              flexShrink: 0,
              boxShadow: hovered ? `0 0 16px ${accentColor}44` : "none",
              transition: "box-shadow 0.3s",
            }}
          >
            <Icon />
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: featured ? "1.2rem" : "1rem",
                  color: hovered ? accentColor : "#fff",
                  margin: 0,
                  transition: "color 0.2s",
                  textShadow: hovered ? `0 0 12px ${accentColor}66` : "none",
                  lineHeight: 1.3,
                }}
              >
                {title}
              </h3>
              {featured && (
                <span
                  style={{
                    fontSize: "0.62rem",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}44)`,
                    border: `1px solid ${accentColor}44`,
                    color: accentColor,
                    borderRadius: 50,
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  ★ Featured
                </span>
              )}
            </div>
            {subtitle && (
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  color: accentColor,
                  margin: "2px 0 0",
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
            color: "#94A3B8",
            lineHeight: 1.75,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              padding: "0.45rem 1rem",
              borderRadius: 50,
              background: `${accentColor}10`,
              border: `1px solid ${accentColor}30`,
              color: accentColor,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${accentColor}20`;
              e.currentTarget.style.boxShadow = `0 0 16px ${accentColor}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${accentColor}10`;
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <FaGithub size={13} />
            Source Code
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
                padding: "0.45rem 1rem",
                borderRadius: 50,
                background: "linear-gradient(135deg, #00F5FF22, #7C3AED22)",
                border: "1px solid rgba(0,245,255,0.3)",
                color: "#00F5FF",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 16px rgba(0,245,255,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <FaExternalLinkAlt size={11} />
              Live Demo
            </a>
          ) : (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 1rem",
                borderRadius: 50,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                fontWeight: 500,
              }}
            >
              Private / WIP
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN PROJECTS PAGE ─── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allPersonal = [...freelanceProjects, ...personalProjects];

  const filtered =
    activeFilter === "all"
      ? allPersonal
      : allPersonal.filter((p) => p.category === activeFilter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 1,
      }}
    >
      <FloatingDock />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.25rem 4rem" }}>
        <SectionHeading label="What I've Built" title="Projects" />

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.6rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {FILTERS.map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                padding: "0.5rem 1.4rem",
                borderRadius: 50,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.84rem",
                fontWeight: 500,
                cursor: "none",
                transition: "all 0.2s ease",
                background:
                  activeFilter === key
                    ? "linear-gradient(135deg, rgba(0,245,255,0.15), rgba(124,58,237,0.15))"
                    : "rgba(255,255,255,0.03)",
                border:
                  activeFilter === key
                    ? "1px solid rgba(0,245,255,0.4)"
                    : "1px solid rgba(255,255,255,0.08)",
                color: activeFilter === key ? "#00F5FF" : "rgba(255,255,255,0.5)",
                boxShadow:
                  activeFilter === key ? "0 0 16px rgba(0,245,255,0.15)" : "none",
              }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
              gap: "1.5rem",
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{ display: "flex" }}
              >
                <ProjectCard project={project} featured={project.featured} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "4rem", color: "#94A3B8" }}
          >
            <p style={{ fontFamily: "'Inter', sans-serif" }}>
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
