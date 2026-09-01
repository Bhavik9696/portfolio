import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    logo: "https://imgs.search.brave.com/rn2u9VZcGsi8Rd7WaApdSxQGEakQly5p-Ph4roXb7To/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQkZtdHRyOEI4/WHcvc2RkZWZhdWx0/LmpwZw",
    title: "St Joseph Engineering College, Mangaluru",
    degree: "B.E. in Computer Science and Engineering",
    year: "2023 – 2027",
    note: "Current Student",
    score: "CGPA: 8.53 / 10",
    icon: FaGraduationCap,
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.mEfz2KJP-r4o5lMLJg8e3QHaHa?pid=Api&P=0&h=180",
    title: "Vivekananda PU College, Puttur",
    degree: "Pre-University (Science)",
    year: "2021 – 2023",
    note: "PCM with Computer Science",
    score: "91.5%",
    icon: FaUniversity,
  },
  {
    logo: "https://ashwithrai.me/Education/priyadarshini.png",
    title: "Priyadarshini English Medium School, Bettampady",
    degree: "SSLC",
    year: "2011 – 2021",
    note: "10 Years of Foundation",
    score: "91.2%",
    icon: FaSchool,
  },
];

function TimelineCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();
  const Icon = edu.icon;

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -24 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.55, delay: index * 0.12, ease: "easeOut" },
        },
      }}
      style={{
        display: "flex",
        gap: "1.5rem",
        paddingBottom: index < educationData.length - 1 ? "2.5rem" : 0,
        position: "relative",
      }}
    >
      {/* Timeline line + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        {/* Dot */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "var(--surface)",
            border: "1px solid var(--border-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--accent)",
            fontSize: "0.9rem",
            flexShrink: 0,
            zIndex: 2,
          }}
        >
          <Icon />
        </div>

        {/* Vertical line */}
        {index < educationData.length - 1 && (
          <div
            style={{
              width: 1,
              flex: 1,
              background: "var(--border)",
              marginTop: "0.5rem",
            }}
          />
        )}
      </div>

      {/* Card content */}
      <div
        style={{
          flex: 1,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: "1.25rem 1.5rem",
          marginBottom: "0.5rem",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border-md)";
          e.currentTarget.style.background = "var(--surface-hi)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.background = "var(--surface)";
        }}
      >
        {/* Top orange accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "30%",
            height: 2,
            background: "var(--accent)",
            borderRadius: "0 2px 0 0",
          }}
        />

        {/* Year badge + logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "0.75rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            {edu.year}
          </span>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 7,
              border: "1px solid var(--border)",
              overflow: "hidden",
              flexShrink: 0,
              background: "var(--surface-hi)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={edu.logo}
              alt={edu.title}
              style={{ width: 28, height: 28, objectFit: "contain", borderRadius: 4 }}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.97rem",
            color: "var(--text)",
            margin: "0 0 0.3rem",
            lineHeight: 1.35,
          }}
        >
          {edu.title}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.84rem",
            color: "var(--muted)",
            margin: "0 0 0.25rem",
            fontWeight: 500,
          }}
        >
          {edu.degree}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.15rem" }}>
          {edu.note && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "var(--muted-dark)",
                margin: 0,
              }}
            >
              {edu.note}
            </p>
          )}
          {edu.score && (
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--accent)",
                background: "rgba(232,92,32,0.1)",
                border: "1px solid rgba(232,92,32,0.25)",
                borderRadius: 5,
                padding: "0.15rem 0.55rem",
                letterSpacing: "0.03em",
                whiteSpace: "nowrap",
              }}
            >
              {edu.score}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function KnowledgeBase() {
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
          maxWidth: 860,
          margin: "0 auto",
          padding: "7rem 2rem 5rem",
        }}
      >
        <SectionHeading
          num="04"
          label="My Journey"
          title="Educational Background"
        />

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {educationData.map((edu, index) => (
            <TimelineCard key={edu.title} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
