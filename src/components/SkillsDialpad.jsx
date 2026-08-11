import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData, skillCategories } from "../data/skillsData";

/* ══════════════════════════════════════════════════
   Individual Skill Card
══════════════════════════════════════════════════ */
function SkillItem({ name, icon, desc, invert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -6 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        background: hovered ? "#1e2231" : "#181b27",
        border: hovered
          ? "1px solid rgba(99,102,241,0.45)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: 14,
        padding: "1.25rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.65rem",
        boxShadow: hovered
          ? "0 8px 28px rgba(0,0,0,0.35)"
          : "0 2px 12px rgba(0,0,0,0.2)",
        transition: "background 0.2s ease, border 0.2s ease, box-shadow 0.2s ease",
        cursor: "default",
        userSelect: "none",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          background: "#0f1120",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: 30,
            height: 30,
            objectFit: "contain",
            filter: invert ? "invert(1) brightness(0.85)" : "none",
            transition: "transform 0.2s ease",
            transform: hovered ? "scale(1.12)" : "scale(1)",
          }}
        />
      </div>

      {/* Name */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "0.82rem",
          color: hovered ? "#e2e8f0" : "#c8d0e0",
          textAlign: "center",
          margin: 0,
          letterSpacing: "0.01em",
          lineHeight: 1.3,
        }}
      >
        {name}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          color: "#64748b",
          textAlign: "center",
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        {desc}
      </p>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   Category Section
══════════════════════════════════════════════════ */
function CategorySection({ label, skills, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      style={{ marginBottom: "3rem" }}
    >
      {/* Category Heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.25rem",
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: "#94a3b8",
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          {label}
        </h3>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "linear-gradient(90deg, rgba(99,102,241,0.25), transparent)",
            borderRadius: 1,
          }}
        />
      </div>

      {/* Cards Grid */}
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem key={`${label}-${skill.name}`} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════
   Main Skills Grid Export
══════════════════════════════════════════════════ */
export default function SkillsDialpad() {
  return (
    <div style={{ width: "100%" }}>
      {skillCategories.map((cat, i) => (
        <CategorySection
          key={cat.key}
          label={cat.label}
          skills={skillsData[cat.key] || []}
          index={i}
        />
      ))}

      {/* Responsive grid CSS */}
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 1rem;
        }

        @media (min-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 0.75rem;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}
