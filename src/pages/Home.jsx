import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView as useIOInView } from "react-intersection-observer";
import profile from "../assets/images/myimageupdated.jpeg";
import SkillsDialpad from "../components/SkillsDialpad";
import SectionHeading from "../components/SectionHeading";
import { FaDownload, FaGithub, FaArrowRight } from "react-icons/fa";

/* ─── Scroll reveal wrapper ─── */
function Reveal({ children, delay = 0, direction = "up" }) {
  const controls = useAnimation();
  const [ref, inView] = useIOInView({ triggerOnce: true, threshold: 0.08 });
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const offsets = {
    up:    { y: 32, x: 0 },
    down:  { y: -32, x: 0 },
    left:  { y: 0, x: 32 },
    right: { y: 0, x: -32 },
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
          transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── MAIN HOME PAGE ─── */
export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        zIndex: 1,
      }}
    >

      {/* ═══════════════════════════════════════
          HERO SECTION — Asymmetric Editorial
      ═══════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "8rem 2rem 4rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── LEFT: Text Content ── */}
          <div style={{ maxWidth: 640 }}>

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#FF6B35",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#A3A3A3",
                }}
              >
                Full-Stack Developer · Based in India
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.65 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                marginBottom: "1.25rem",
                color: "#F5F5F0",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#FF6B35" }}>Bhavik Rai.</span>
            </motion.h1>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 500,
                lineHeight: 1.45,
                color: "#F5F5F0",
                marginBottom: "1rem",
                letterSpacing: "-0.01em",
              }}
            >
              I build{" "}
              <span
                style={{
                  borderBottom: "2px solid #FF6B35",
                  paddingBottom: "1px",
                }}
              >
                reliable web applications
              </span>{" "}
              and{" "}
              <span
                style={{
                  borderBottom: "2px solid #E8C547",
                  paddingBottom: "1px",
                }}
              >
                AI-powered systems.
              </span>
            </motion.p>

            {/* Supporting blurb */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
                color: "#A3A3A3",
                lineHeight: 1.8,
                marginBottom: "2.25rem",
                maxWidth: 520,
              }}
            >
              Computer Science Engineering student focused on MERN stack,
              backend development, and intelligent software systems.
              I care about clean code, fast performance, and useful products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.55 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "3rem",
              }}
            >
              <a
                href="/projects"
                className="btn-primary"
                style={{ textDecoration: "none" }}
              >
                View My Work <FaArrowRight size={12} />
              </a>
              <a
                href="/Bhavik_Rai_Resume.pdf"
                download
                className="btn-outline"
                style={{ textDecoration: "none" }}
              >
                <FaDownload size={12} /> Download Resume
              </a>
            </motion.div>

            {/* Info row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                paddingTop: "1.5rem",
              }}
            >
              {[
                { num: "01", label: "MERN STACK" },
                { num: "02", label: "AI APPLICATIONS" },
                { num: "03", label: "BACKEND DEVELOPMENT" },
              ].map(({ num, label }, i) => (
                <div
                  key={num}
                  style={{
                    flex: "1 1 140px",
                    padding: "0.75rem 1.25rem",
                    borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    paddingLeft: i === 0 ? "0" : "1.25rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      color: "#6B6B6B",
                      letterSpacing: "0.1em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#A3A3A3",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hero-image-col"
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Orange decorative offset block */}
            <div
              style={{
                position: "absolute",
                bottom: -16,
                right: "8%",
                width: "60%",
                height: "55%",
                background: "#FF6B35",
                borderRadius: 12,
                zIndex: 0,
                opacity: 0.85,
              }}
            />

            {/* Secondary amber accent line */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: "6%",
                width: 3,
                height: "45%",
                background: "#E8C547",
                borderRadius: 2,
                zIndex: 3,
              }}
            />

            {/* Image frame */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                maxWidth: 380,
              }}
            >
              <img
                src={profile}
                alt="Bhavik Rai — Full-Stack Developer & AI Engineer"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "block",
                }}
              />

              {/* Open to Work badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -16,
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 10,
                  padding: "0.6rem 0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  zIndex: 4,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#A3A3A3",
                    whiteSpace: "nowrap",
                  }}
                >
                  Open to Work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.6rem",
              color: "#6B6B6B",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 32,
              background: "linear-gradient(to bottom, #FF6B35, transparent)",
              borderRadius: 1,
            }}
          />
        </motion.div>

        {/* Responsive hero CSS */}
        <style>{`
          @media (min-width: 900px) {
            .hero-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 4rem !important;
            }
            .hero-image-col {
              justify-content: flex-end !important;
            }
          }
          @media (max-width: 899px) {
            .hero-image-col {
              order: -1;
              max-width: 320px;
              margin: 0 auto;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SECTION — Editorial Two-Column
      ═══════════════════════════════════════ */}
      <section
        id="about"
        style={{
          padding: "6rem 2rem",
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="about-grid"
        >
          {/* Left: Section label */}
          <Reveal delay={0.05}>
            <div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#FF6B35",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                01 / About
              </span>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                  color: "#F5F5F0",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Who I Am
              </h2>
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={0.15}>
            <div>
              {/* Large opening sentence */}
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                  fontWeight: 500,
                  color: "#F5F5F0",
                  lineHeight: 1.55,
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                I enjoy turning complex problems into simple, usable software.
              </p>

              {/* Body text */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                  color: "#A3A3A3",
                  lineHeight: 1.85,
                  marginBottom: "1rem",
                }}
              >
                I'm a Computer Science Engineering student at{" "}
                <span style={{ color: "#F5F5F0", fontWeight: 500 }}>
                  St Joseph Engineering College, Mangalore
                </span>{" "}
                with hands-on experience in full-stack development and AI engineering.
                I build MERN stack applications, backend systems with Node.js and FastAPI,
                and intelligent tools powered by RAG, LLMs, and multi-agent architectures.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
                  color: "#A3A3A3",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                }}
              >
                I've delivered freelance projects, built AI-powered platforms that solve real problems,
                and I'm always looking for opportunities to work on meaningful software that makes
                a genuine difference.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  paddingTop: "1.75rem",
                }}
              >
                {[
                  { value: "10+", label: "Projects Built" },
                  { value: "2+",  label: "Freelance Clients" },
                  { value: "AI",  label: "Specialization" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#FF6B35",
                        lineHeight: 1,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        color: "#6B6B6B",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* About responsive CSS */}
        <style>{`
          @media (min-width: 860px) {
            .about-grid {
              grid-template-columns: 240px 1fr !important;
              gap: 5rem !important;
            }
          }
        `}</style>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS SECTION
      ═══════════════════════════════════════ */}
      <section
        id="skills"
        style={{
          padding: "6rem 2rem",
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <SectionHeading
          num="02"
          label="What I Know"
          title="Skills & Expertise"
        />
        <SkillsDialpad />
      </section>

    </div>
  );
}
