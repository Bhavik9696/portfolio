import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import FloatingDock from "../components/FloatingDock";
import SectionHeading from "../components/SectionHeading";
import { FaUniversity, FaGraduationCap, FaSchool } from "react-icons/fa";

const educationData = [
  {
    logo: "https://imgs.search.brave.com/rn2u9VZcGsi8Rd7WaApdSxQGEakQly5p-Ph4roXb7To/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQkZtdHRyOEI4/WHcvc2RkZWZhdWx0/LmpwZw",
    title: "St Joseph Engineering College, Mangalore",
    degree: "Bachelor of Engineering — Computer Science",
    year: "2023 – 2027",
    note: "Final year student",
    icon: FaGraduationCap,
    accentColor: "#00F5FF",
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.mEfz2KJP-r4o5lMLJg8e3QHaHa?pid=Api&P=0&h=180",
    title: "Vivekananda Pre University College, Puttur",
    degree: "Pre-University Education (Science)",
    year: "2021 – 2023",
    note: "PCM with Computer Science",
    icon: FaUniversity,
    accentColor: "#7C3AED",
  },
  {
    logo: "https://ashwithrai.me/Education/priyadarshini.png",
    title: "Priyadarshini English Medium School, Bettampady",
    degree: "Secondary School Education (CBSE)",
    year: "2011 – 2021",
    note: "10 Years of Foundation",
    icon: FaSchool,
    accentColor: "#14F195",
  },
];

function TimelineCard({ edu, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();
  const isLeft = index % 2 === 0;

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: isLeft ? -50 : 50 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, delay: index * 0.15, ease: "easeOut" },
        },
      }}
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
        position: "relative",
        marginBottom: "3rem",
        width: "100%",
      }}
      className="timeline-item"
    >
      <div
        style={{
          width: "44%",
          position: "relative",
        }}
        className="timeline-card-wrapper"
      >
        {/* Card */}
        <div
          style={{
            background: "rgba(18,18,22,0.85)",
            border: `1px solid ${edu.accentColor}22`,
            borderRadius: 20,
            padding: "1.75rem",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: `0 4px 30px rgba(0,0,0,0.3), 0 0 40px ${edu.accentColor}0a`,
            position: "relative",
            overflow: "hidden",
            transition: "border 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = `1px solid ${edu.accentColor}44`;
            e.currentTarget.style.boxShadow = `0 8px 40px rgba(0,0,0,0.4), 0 0 40px ${edu.accentColor}22`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = `1px solid ${edu.accentColor}22`;
            e.currentTarget.style.boxShadow = `0 4px 30px rgba(0,0,0,0.3), 0 0 40px ${edu.accentColor}0a`;
          }}
        >
          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: `linear-gradient(90deg, transparent, ${edu.accentColor}, transparent)`,
              borderRadius: "20px 20px 0 0",
            }}
          />

          {/* Logo + Icon row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${edu.accentColor}10`,
                border: `1px solid ${edu.accentColor}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <img
                src={edu.logo}
                alt={edu.title}
                style={{
                  width: 36,
                  height: 36,
                  objectFit: "contain",
                  borderRadius: 6,
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML = `<span style="font-size:1.4rem;color:${edu.accentColor}">${['🎓','🏫','📚'][index]}</span>`;
                }}
              />
            </div>

            {/* Year badge */}
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                background: `${edu.accentColor}15`,
                border: `1px solid ${edu.accentColor}40`,
                color: edu.accentColor,
                borderRadius: 50,
                padding: "3px 10px",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {edu.year}
            </span>
          </div>

          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              margin: "0 0 0.4rem",
              lineHeight: 1.3,
            }}
          >
            {edu.title}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.83rem",
              color: edu.accentColor,
              margin: "0 0 0.4rem",
              fontWeight: 500,
            }}
          >
            {edu.degree}
          </p>
          {edu.note && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "#94A3B8",
                margin: 0,
              }}
            >
              {edu.note}
            </p>
          )}
        </div>
      </div>

      {/* Center dot — only for desktop */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "2rem",
          transform: "translate(-50%, 0)",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: edu.accentColor,
          border: `3px solid #050816`,
          boxShadow: `0 0 16px ${edu.accentColor}88`,
          zIndex: 10,
        }}
        className="timeline-dot"
      />
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
      <FloatingDock />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "5rem 1.25rem 4rem" }}>
        <SectionHeading label="My Journey" title="Educational Background" />

        {/* Timeline container */}
        <div
          style={{
            position: "relative",
          }}
        >
          {/* Center vertical line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom, transparent, rgba(0,245,255,0.3), rgba(124,58,237,0.3), rgba(20,241,149,0.3), transparent)",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
            className="timeline-line"
          />

          {/* Timeline items */}
          {educationData.map((edu, index) => (
            <TimelineCard key={edu.title} edu={edu} index={index} />
          ))}
        </div>

        {/* Responsive: mobile stacked layout */}
        <style>{`
          @media (max-width: 768px) {
            .timeline-item { justify-content: flex-start !important; }
            .timeline-card-wrapper { width: 85% !important; margin-left: 2rem !important; }
            .timeline-dot { left: 0 !important; top: 1.5rem !important; transform: none !important; }
            .timeline-line { left: 0.4rem !important; }
          }
          @media (max-width: 480px) {
            .timeline-card-wrapper { width: 90% !important; margin-left: 1.5rem !important; }
          }
        `}</style>
      </div>
    </div>
  );
}
