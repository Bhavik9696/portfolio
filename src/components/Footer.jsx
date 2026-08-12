import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socials = [
  { icon: FaGithub,   href: "https://github.com/Bhavik9696",  label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:bhavikrai.dev@gmail.com",  label: "Email" },
];

const quickLinks = [
  { label: "Home",      href: "/" },
  { label: "Projects",  href: "/projects" },
  { label: "Education", href: "/knowledge" },
  { label: "Contact",   href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "3.5rem 2rem 2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 7,
                  background: "#FF6B35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#fff",
                }}
              >
                BR
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#F5F5F0",
                }}
              >
                Bhavik Rai
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.83rem",
                color: "#6B6B6B",
                lineHeight: 1.7,
                maxWidth: 220,
                margin: 0,
              }}
            >
              Full-Stack Developer &amp; AI Engineer building reliable, intelligent software.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                color: "#FF6B35",
                marginBottom: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Navigation
            </h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.84rem",
                      color: "#6B6B6B",
                      textDecoration: "none",
                      transition: "color 0.18s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#F5F5F0")}
                    onMouseLeave={(e) => (e.target.style.color = "#6B6B6B")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.78rem",
                color: "#FF6B35",
                marginBottom: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 8,
                    background: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6B6B6B",
                    fontSize: "0.95rem",
                    transition: "color 0.18s, border-color 0.18s, background 0.18s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FF6B35";
                    e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
                    e.currentTarget.style.background = "rgba(255,107,53,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#6B6B6B";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.background = "#1A1A1A";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "#6B6B6B",
                marginTop: "1rem",
              }}
            >
              bhavikrai.dev@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: "1.5rem",
          }}
        />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#6B6B6B",
              margin: 0,
            }}
          >
            © {year} Bhavik Rai. All rights reserved.
          </p>

          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            style={{
              background: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "0.45rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#A3A3A3",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.76rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "color 0.18s, border-color 0.18s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#FF6B35";
              e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#A3A3A3";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <FaArrowUp size={11} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
