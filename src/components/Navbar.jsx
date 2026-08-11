import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/",          label: "Home" },
  { to: "/knowledge", label: "Education" },
  { to: "/projects",  label: "Projects" },
  { to: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastY    = useRef(0);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // Track mobile breakpoint
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Hide/show on scroll direction
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      if (y < 60) { setVisible(true); lastY.current = y; return; }
      if (isOpen) { lastY.current = y; return; }
      setVisible(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const navBg = scrolled
    ? "rgba(17,17,17,0.96)"
    : "rgba(17,17,17,0.75)";

  return (
    <>
      {/* ══════════════ DESKTOP + TABLET NAV ══════════════ */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: visible ? 0 : -60, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: navBg,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: isMobile ? "0 1.25rem" : "0 2rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <NavLink to="/" aria-label="Home" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ opacity: 0.8 }}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              {/* Monogram square */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 6,
                  background: "#FF6B35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#fff",
                  flexShrink: 0,
                  letterSpacing: "0.02em",
                }}
              >
                BR
              </div>
              {!isMobile && (
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "#F5F5F0",
                    letterSpacing: "0.01em",
                  }}
                >
                  Bhavik Rai
                </span>
              )}
            </motion.div>
          </NavLink>

          {/* ── Desktop nav links ── */}
          {!isMobile && (
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} style={{ textDecoration: "none" }}>
                    {({ isActive }) => (
                      <div
                        style={{
                          position: "relative",
                          padding: "0.45rem 1rem",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.87rem",
                          fontWeight: isActive ? 600 : 400,
                          color: isActive ? "#FF6B35" : "#A3A3A3",
                          transition: "color 0.2s ease",
                          letterSpacing: "0.01em",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#F5F5F0";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.color = "#A3A3A3";
                        }}
                      >
                        {label}
                        {/* Active underline */}
                        {isActive && (
                          <motion.div
                            layoutId="nav-underline"
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: "1rem",
                              right: "1rem",
                              height: 2,
                              background: "#FF6B35",
                              borderRadius: 2,
                            }}
                          />
                        )}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* ── Mobile hamburger ── */}
          {isMobile && (
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5F5F0",
                cursor: "pointer",
              }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          )}
        </nav>
      </motion.header>

      {/* ══════════════ MOBILE FULLSCREEN MENU ══════════════ */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#111111",
              zIndex: 998,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 0,
              paddingBottom: "4rem",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                position: "absolute",
                top: "1.1rem",
                right: "1.25rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                width: 38,
                height: 38,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5F5F0",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Logo in overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              style={{ marginBottom: "3rem", display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "#FF6B35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#fff",
                }}
              >
                BR
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#F5F5F0",
                }}
              >
                Bhavik Rai
              </span>
            </motion.div>

            {/* Nav links */}
            {navLinks.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.08, ease: "easeOut" }}
                style={{ width: "100%", maxWidth: 260 }}
              >
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {({ isActive }) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "1rem 1.25rem",
                        margin: "0.15rem 0",
                        borderRadius: 10,
                        background: isActive ? "rgba(255,107,53,0.08)" : "transparent",
                        borderLeft: isActive ? "2px solid #FF6B35" : "2px solid transparent",
                        transition: "all 0.2s",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: isActive ? "#FF6B35" : "rgba(245,245,240,0.5)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {label}
                      </span>
                      {isActive && (
                        <span style={{ color: "#FF6B35", fontSize: "1rem" }}>→</span>
                      )}
                    </div>
                  )}
                </NavLink>
              </motion.div>
            ))}

            {/* Bottom tagline */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Full-Stack · AI Engineer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
