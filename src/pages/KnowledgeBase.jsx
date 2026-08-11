import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";

const educationData = [
  {
    logo: "https://imgs.search.brave.com/rn2u9VZcGsi8Rd7WaApdSxQGEakQly5p-Ph4roXb7To/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvQkZtdHRyOEI4/WHcvc2RkZWZhdWx0/LmpwZw",
    title: "St Joseph Engineering College, Mangalore",
    degree: "Bachelor of Engineering — Computer Science",
    year: "2023 – 2027",
    note: "Final year student · CGPA: Ongoing",
    icon: FaGraduationCap,
  },
  {
    logo: "https://tse2.mm.bing.net/th/id/OIP.mEfz2KJP-r4o5lMLJg8e3QHaHa?pid=Api&P=0&h=180",
    title: "Vivekananda Pre University College, Puttur",
    degree: "Pre-University Education (Science)",
    year: "2021 – 2023",
    note: "PCM with Computer Science",
    icon: FaUniversity,
  },
  {
    logo: "https://ashwithrai.me/Education/priyadarshini.png",
    title: "Priyadarshini English Medium School, Bettampady",
    degree: "Secondary School Education (CBSE)",
    year: "2011 – 2021",
    note: "10 Years of Foundation",
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
            background: "#1A1A1A",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF6B35",
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
              background: "rgba(255,255,255,0.07)",
              marginTop: "0.5rem",
            }}
          />
        )}
      </div>

      {/* Card content */}
      <div
        style={{
          flex: 1,
          background: "#181818",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 10,
          padding: "1.25rem 1.5rem",
          marginBottom: "0.5rem",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
          e.currentTarget.style.background = "#1E1E1E";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.background = "#181818";
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
            background: "#FF6B35",
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
              color: "#FF6B35",
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
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
              flexShrink: 0,
              background: "#222",
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
            color: "#F5F5F0",
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
            color: "#A3A3A3",
            margin: "0 0 0.25rem",
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
              color: "#6B6B6B",
              margin: 0,
            }}
          >
            {edu.note}
          </p>
        )}
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
