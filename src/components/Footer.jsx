import { FaLinkedin, FaGithub, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: FaGithub,   href: "https://github.com/Bhavik9696",  label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: FaTwitter,  href: "https://twitter.com",            label: "Twitter" },
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
        position: "relative",
        background: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "4rem",
        overflow: "hidden",
      }}
    >
      {/* Wave SVG top */}
      <div style={{ position: "absolute", top: -1, left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: 40 }}>
          <path
            d="M0 40 Q360 0 720 20 Q1080 40 1440 10 L1440 0 L0 0 Z"
            fill="rgba(0,245,255,0.04)"
          />
          <path
            d="M0 40 Q360 10 720 28 Q1080 46 1440 20 L1440 0 L0 0 Z"
            fill="rgba(124,58,237,0.03)"
          />
        </svg>
      </div>

      {/* Glow blobs */}
      <div style={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,245,255,0.04), transparent 70%)",
        bottom: 0,
        left: "10%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)",
        bottom: 0,
        right: "10%",
        filter: "blur(60px)",
        pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "3rem 1.5rem 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00F5FF, #7C3AED)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#fff",
                  boxShadow: "0 0 16px rgba(0,245,255,0.3)",
                }}
              >
                BR
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  background: "linear-gradient(135deg, #00F5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bhavik Rai
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.7, maxWidth: 220 }}>
              Full-Stack Developer & AI Engineer. Building intelligent, scalable web applications.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#00F5FF", marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      color: "#94A3B8",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#00F5FF")}
                    onMouseLeave={(e) => (e.target.style.color = "#94A3B8")}
                  >
                    → {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#00F5FF", marginBottom: "1rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Connect
            </h4>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(0,245,255,0.06)",
                    border: "1px solid rgba(0,245,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    fontSize: "1rem",
                    transition: "color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00F5FF";
                    e.currentTarget.style.boxShadow = "0 0 16px rgba(0,245,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#94A3B8";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", color: "#94A3B8", marginTop: "1rem" }}>
              📧 bhavikrai.dev@gmail.com
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: "1.5rem" }} />

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
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#94A3B8", margin: 0 }}>
            © {year} Bhavik Rai. Made with{" "}
            <FaHeart style={{ display: "inline", color: "#7C3AED", verticalAlign: "middle" }} />{" "}
            &amp; lots of{" "}
            <span style={{ color: "#00F5FF" }}>code</span>.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            style={{
              background: "linear-gradient(135deg, rgba(0,245,255,0.1), rgba(124,58,237,0.1))",
              border: "1px solid rgba(0,245,255,0.2)",
              borderRadius: "50px",
              padding: "0.45rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#00F5FF",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 500,
              cursor: "none",
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 0 16px rgba(0,245,255,0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
          >
            <FaArrowUp size={12} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
