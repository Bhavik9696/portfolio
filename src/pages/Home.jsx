import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView as useIOInView } from "react-intersection-observer";
import profile from "../assets/images/myimageupdated.jpeg";
import TextType from "../components/TextType";
import SkillsDialpad from "../components/SkillsDialpad";
import FloatingDock from "../components/FloatingDock";
import SectionHeading from "../components/SectionHeading";

import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiPython,
} from "react-icons/si";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* ─── Scroll reveal wrapper ─── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const controls = useAnimation();
  const [ref, inView] = useIOInView({ triggerOnce: true, threshold: 0.08 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const offsets = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...offsets[direction] },
        visible: {
          opacity: 1, y: 0, x: 0,
          transition: { delay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating tech icon ─── */
const TECH_ICONS = [
  { Icon: SiReact,       color: "#61DAFB", label: "React",     delay: 0 },
  { Icon: SiNodedotjs,   color: "#68A063", label: "Node.js",   delay: 0.4 },
  { Icon: SiMongodb,     color: "#47A248", label: "MongoDB",   delay: 0.8 },
  { Icon: SiExpress,     color: "#fff",    label: "Express",   delay: 1.2 },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind",  delay: 1.6 },
  { Icon: SiPython,      color: "#3776AB", label: "Python",    delay: 2.0 },
];

function TechIcon({ Icon, color, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + delay * 0.12, type: "spring", stiffness: 200 }}
      title={label}
      aria-label={label}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + delay * 0.4, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.3, rotate: 10 }}
        style={{
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "rgba(11,17,32,0.8)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 0 14px ${color}33`,
          color,
          fontSize: "1.3rem",
        }}
      >
        <Icon />
      </motion.div>
    </motion.div>
  );
}



/* ─── Profile Card (desktop) ─── */
function ProfileCard({ size = 240 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setTilt({
      x: -((e.clientY - cy) / (rect.height / 2)) * 8,
      y:  ((e.clientX - cx) / (rect.width / 2)) * 8,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0, rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ perspective: 1000, transformStyle: "preserve-3d", position: "relative", display: "inline-block" }}
    >
      {/* Spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: -4,
          borderRadius: "50%",
          background: "conic-gradient(from 0deg, #00F5FF, #7C3AED, #14F195, #00F5FF)",
          filter: "blur(4px)",
          opacity: 0.7,
        }}
      />
      <motion.div
        animate={{
          boxShadow: [
            "0 0 30px rgba(0,245,255,0.3)",
            "0 0 55px rgba(0,245,255,0.6)",
            "0 0 30px rgba(0,245,255,0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ position: "relative", zIndex: 1, borderRadius: "50%", padding: 4, background: "#050816" }}
      >
        <img
          src={profile}
          alt="Bhavik Rai — Full-Stack Developer & AI Engineer"
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </motion.div>

      {/* Open to Work badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        style={{
          position: "absolute",
          bottom: 12,
          right: -10,
          background: "rgba(20,241,149,0.1)",
          border: "1px solid rgba(20,241,149,0.4)",
          borderRadius: 50,
          padding: "4px 10px",
          display: "flex",
          alignItems: "center",
          gap: "0.35rem",
          backdropFilter: "blur(12px)",
          zIndex: 2,
        }}
      >
        <span style={{
          width: 7, height: 7, borderRadius: "50%", background: "#14F195",
          boxShadow: "0 0 8px rgba(20,241,149,0.8)", display: "inline-block",
        }} />
        <span style={{
          fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 600,
          color: "#14F195", letterSpacing: "0.04em", whiteSpace: "nowrap",
        }}>
          Open to Work
        </span>
      </motion.div>
    </motion.div>
  );
}

/* ─── MAIN HOME PAGE ─── */
export default function HomePage() {

  return (
    <div style={{ minHeight: "100vh", background: "transparent", fontFamily: "'Inter', sans-serif", position: "relative", zIndex: 1 }}>
      <FloatingDock />

      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 1.25rem 3rem",
          position: "relative",
        }}
      >
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 65%)",
          filter: "blur(40px)", pointerEvents: "none",
        }} />

        {/* HERO INNER — column on mobile, row on desktop */}
        <div style={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.5rem",
        }}>

          {/* Profile card — visible on MOBILE too, above text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProfileCard size={200} />
          </motion.div>

          {/* Text content — centred on mobile */}
          <div style={{ width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}>

            {/* Greeting chip */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.2)",
                borderRadius: 50, padding: "5px 14px", marginBottom: "1.25rem",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#14F195", boxShadow: "0 0 8px rgba(20,241,149,0.8)" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 500, color: "#00F5FF", letterSpacing: "0.06em" }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 8vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "1rem",
                color: "var(--text)",
              }}
            >
              Hi, I'm{" "}
              <span className="hero-title-gradient">
                Bhavik Rai
              </span>
              <motion.span
                animate={{ rotate: [0, 20, 0, 20, 0] }}
                transition={{ delay: 1.5, duration: 1.5 }}
                style={{ display: "inline-block", marginLeft: "0.2em" }}
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: "inline-block",
                background: "var(--glass-bg)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "8px 16px",
                marginBottom: "1.25rem",
                maxWidth: "100%",
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(0.9rem, 3vw, 1.35rem)", fontWeight: 500, color: "var(--text)" }}>
                <span style={{ color: "var(--cyan)", fontWeight: 700 }}>&gt; </span>
                <TextType
                  text={["a MERN Stack Developer", "an AI / ML Engineer", "a Problem Solver", "a Full-Stack Developer", "always Learning 🚀"]}
                  typingSpeed={35}
                  pauseDuration={1800}
                  showCursor
                  cursorCharacter="█"
                />
              </span>
            </motion.div>

            {/* About blurb */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "var(--muted)",
                lineHeight: 1.8,
                maxWidth: 560,
                margin: "0 auto 1.75rem",
              }}
            >
              Passionate about building{" "}
              <span style={{ color: "var(--cyan)", fontWeight: 600 }}>scalable AI-powered systems</span> and
              full-stack applications. I craft performant, maintainable code that{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>solves real-world problems</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginBottom: "1.75rem",
                justifyContent: "center",
              }}
            >
              <a href="/Bhavik_Rai_Resume.pdf" download className="btn-primary" style={{ textDecoration: "none" }}>
                <FaDownload size={13} /> Download Resume
              </a>
              <a href="https://github.com/Bhavik9696" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration: "none" }}>
                <FaGithub size={13} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank" rel="noopener noreferrer" className="btn-outline"
                style={{ textDecoration: "none", borderColor: "#7C3AED", color: "#A855F7" }}
              >
                <FaLinkedin size={13} /> LinkedIn
              </a>
              <a href="/contact" className="btn-outline" style={{ textDecoration: "none", borderColor: "#14F195", color: "#14F195" }}>
                <FaEnvelope size={13} /> Hire Me
              </a>
            </motion.div>

            {/* Tech icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.68rem", color: "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Tech:
              </span>
              {TECH_ICONS.map((t) => (
                <TechIcon key={t.label} {...t} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem",
          }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.62rem", color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 1, height: 36, background: "linear-gradient(to bottom, #00F5FF, transparent)", borderRadius: 1 }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════ ABOUT SECTION ═══════════════════ */}
      <section id="about" style={{ padding: "4rem 1.25rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="Who I Am" title="About Me" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1rem",
        }}>
          {/* About text — spans full width */}
          <Reveal delay={0.1}>
            <div
              className="glass"
              style={{ padding: "1.75rem", gridColumn: "1 / -1" }}
            >
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 2vw, 1rem)", color: "var(--muted)", lineHeight: 1.9, margin: 0 }}>
                I'm a <span style={{ color: "#00F5FF", fontWeight: 600 }}>full-stack developer</span> and{" "}
                <span style={{ color: "#7C3AED", fontWeight: 600 }}>AI engineer</span> passionate about building
                scalable web applications and solving algorithmic challenges. I love crafting performant systems
                and clean, maintainable code. I have hands-on experience building{" "}
                <span style={{ color: "#14F195" }}>multi-agent AI platforms, RAG systems, and real-time web apps</span>.
              </p>
            </div>
          </Reveal>

          {/* Stat cards */}
          {[
            { value: "10+", label: "Projects Built",     color: "#00F5FF" },
            { value: "2+",  label: "Freelance Clients",  color: "#7C3AED" },
            { value: "AI",  label: "Specialization",     color: "#14F195" },
          ].map(({ value, label, color }, i) => (
            <Reveal key={label} delay={0.15 + i * 0.1}>
              <div
                className="glass"
                style={{ padding: "1.5rem", textAlign: "center", border: `1px solid ${color}22` }}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.2rem", fontWeight: 700,
                  color, textShadow: `0 0 20px ${color}66`, lineHeight: 1, marginBottom: "0.4rem",
                }}>
                  {value}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#94A3B8", letterSpacing: "0.04em" }}>
                  {label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════ SKILLS SECTION ═══════════════════ */}
      <section id="skills" style={{ padding: "4rem 1.25rem", maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="What I Know" title="Skills & Expertise" />
        <SkillsDialpad />
      </section>
    </div>
  );
}
