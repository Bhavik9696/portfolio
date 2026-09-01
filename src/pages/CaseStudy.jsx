import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaCheckCircle,
} from "react-icons/fa";
import { getCaseStudy, getAdjacentStudies } from "../data/caseStudies";

/* ── Reveal wrapper ── */
function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Section block wrapper ── */
function Section({ title, children, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div style={{ marginBottom: "3.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1.25rem",
          }}
        >
          <div
            style={{
              width: 3,
              height: 20,
              background: "var(--accent)",
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.15rem",
              color: "var(--text)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </Reveal>
  );
}

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const study = getCaseStudy(id);
  const { prev, next } = study ? getAdjacentStudies(id) : { prev: null, next: null };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!study) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "var(--accent)",
          }}
        >
          404
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1rem",
            color: "var(--muted)",
          }}
        >
          Case study not found.
        </p>
        <Link to="/projects" className="btn-primary" style={{ textDecoration: "none" }}>
          <FaArrowLeft size={12} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "transparent",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* ── Hero Banner ── */}
      <div
        style={{
          background: "var(--bg-secondary)",
          borderBottom: "1px solid var(--border)",
          paddingTop: "6rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: "2rem" }}
          >
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 500,
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <FaArrowLeft size={11} />
              All Projects
            </Link>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="case-hero-grid"
          >
            {/* Left: Title block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              {/* Status badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.3rem 0.8rem",
                  borderRadius: 6,
                  background: "rgba(232,92,32,0.1)",
                  border: "1px solid rgba(232,92,32,0.25)",
                  color: "var(--accent)",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "inline-block",
                  }}
                />
                {study.status}
              </div>

              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                  marginBottom: "0.75rem",
                }}
              >
                {study.title}
              </h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  maxWidth: 600,
                }}
              >
                {study.subtitle}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
                {study.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {study.links.github && (
                  <a
                    href={study.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                    style={{ textDecoration: "none" }}
                  >
                    <FaGithub size={13} /> View on GitHub
                  </a>
                )}
                {study.links.live && (
                  <a
                    href={study.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: "none" }}
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>

            {/* Right: Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "1.5rem",
                alignSelf: "start",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "1.25rem",
                  margin: "0 0 1.25rem",
                }}
              >
                Project Details
              </h3>
              {[
                { label: "Role",     value: study.role },
                { label: "Timeline", value: study.timeline },
                { label: "Status",   value: study.status },
                { label: "Stack",    value: `${study.tags.length} technologies` },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    padding: "0.65rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.77rem",
                      color: "var(--muted-dark)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text)",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "4rem 2rem 5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "0",
        }}
        className="case-content-grid"
      >
        {/* Overview */}
        <Section title="Overview" delay={0.05}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              color: "var(--muted)",
              lineHeight: 1.85,
            }}
          >
            {study.overview}
          </p>
        </Section>

        {/* Problem */}
        <Section title="The Problem" delay={0.08}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: "0 10px 10px 0",
              padding: "1.25rem 1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "var(--text)",
                lineHeight: 1.8,
                margin: 0,
                fontStyle: "italic",
              }}
            >
              {study.problem}
            </p>
          </div>
        </Section>

        {/* Challenges */}
        <Section title="Key Challenges" delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {study.challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                style={{
                  display: "flex",
                  gap: "0.85rem",
                  alignItems: "flex-start",
                  padding: "1rem 1.25rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                    paddingTop: "0.15rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {challenge}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Solution */}
        <Section title="The Solution" delay={0.1}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.05rem)",
              color: "var(--muted)",
              lineHeight: 1.85,
            }}
          >
            {study.solution}
          </p>
        </Section>

        {/* Architecture */}
        <Section title="Architecture" delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            {study.architecture.map(({ layer, detail }, i) => (
              <motion.div
                key={layer}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: "1.5rem",
                  padding: "1rem 1.25rem",
                  background: i % 2 === 0 ? "var(--surface)" : "var(--bg-secondary)",
                  borderBottom: i < study.architecture.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
                className="arch-row"
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.04em",
                    paddingTop: "0.15rem",
                  }}
                >
                  {layer}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {detail}
                </span>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="Tech Stack" delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
              gap: "0.75rem",
            }}
          >
            {study.techStack.map(({ name, purpose }) => (
              <div
                key={name}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "0.9rem 1.1rem",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: "var(--text)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--muted-dark)",
                  }}
                >
                  {purpose}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Key Features */}
        <Section title="Key Features" delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "0.65rem",
            }}
          >
            {study.keyFeatures.map((feat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  padding: "0.85rem 1rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                }}
              >
                <FaCheckCircle
                  size={13}
                  style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.2rem" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.86rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title="Results & Impact" delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              gap: "0.75rem",
            }}
          >
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{
                  padding: "1.1rem 1.25rem",
                  background: "rgba(232,92,32,0.06)",
                  border: "1px solid rgba(232,92,32,0.2)",
                  borderRadius: 10,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    color: "var(--text)",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Prev / Next navigation */}
        {(prev || next) && (
          <Reveal delay={0.05}>
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "2.5rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {prev ? (
                <Link
                  to={`/case-study/${prev.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "1.1rem 1.25rem",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.72rem",
                        color: "var(--muted-dark)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.35rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      <FaArrowLeft size={10} /> Previous
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--text)",
                      }}
                    >
                      {prev.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  to={`/case-study/${next.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      padding: "1.1rem 1.25rem",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      textAlign: "right",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border)")
                    }
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.72rem",
                        color: "var(--muted-dark)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.35rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "0.35rem",
                      }}
                    >
                      Next <FaArrowRight size={10} />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "var(--text)",
                      }}
                    >
                      {next.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </Reveal>
        )}
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (min-width: 860px) {
          .case-hero-grid {
            grid-template-columns: 1fr 300px !important;
          }
          .case-content-grid {
            grid-template-columns: 1fr !important;
          }
          .arch-row {
            grid-template-columns: 160px 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .arch-row {
            grid-template-columns: 1fr !important;
            gap: 0.4rem !important;
          }
        }
      `}</style>
    </div>
  );
}
