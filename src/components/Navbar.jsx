import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/",          label: "Home" },
  { to: "/knowledge", label: "Education" },
  { to: "/projects",  label: "Projects" },
  { to: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen,   setIsOpen]   = useState(false);
  const [visible,  setVisible]  = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastY   = useRef(0);
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
      setScrolled(y > 20);
      if (y < 60) { setVisible(true); lastY.current = y; return; }
      if (isOpen) { lastY.current = y; return; }   // keep visible when menu open
      setVisible(y < lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  // ── Styles ──────────────────────────────────────────────
  const pillBg = theme === "dark"
    ? (scrolled ? "rgba(10,10,12,0.95)" : "rgba(10,10,12,0.75)")
    : (scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)");

  const pillShadow = theme === "dark"
    ? (scrolled ? "0 10px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)" : "0 4px 24px rgba(0,0,0,0.5)")
    : (scrolled ? "0 10px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.08)" : "0 4px 24px rgba(0,0,0,0.06)");

  return (
    <>
      {/* ══════════════════ FLOATING PILL ══════════════════ */}
      {/* Static wrapper handles centering — motion.nav only animates y/opacity */}
      <div
        style={{
          position:  "fixed",
          top:       "0.85rem",
          left:      "50%",
          transform: "translateX(-50%)",
          zIndex:    1000,
          width:     isMobile ? "calc(100vw - 2rem)" : "min(92vw, 760px)",
          maxWidth:  "760px",
          pointerEvents: "none",   /* clicks pass through the wrapper */
        }}
      >
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        aria-label="Main navigation"
        style={{ pointerEvents: "auto", width: "100%" }}
      >
        <div
          style={{
            background:         pillBg,
            backdropFilter:     "blur(24px) saturate(1.8)",
            WebkitBackdropFilter: "blur(24px) saturate(1.8)",
            border:             "1px solid var(--border)",
            borderRadius:       "50px",
            /* Tighter padding on mobile */
            padding:            isMobile ? "0.4rem 0.75rem" : "0.45rem 1rem",
            display:            "flex",
            alignItems:         "center",
            justifyContent:     "space-between",
            boxShadow:          pillShadow,
            transition:         "background 0.3s, box-shadow 0.3s",
            gap:                "0.5rem",
          }}
        >
          {/* ── Logo ── */}
          <NavLink to="/" aria-label="Home" style={{ textDecoration: "none", flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              {/* Monogram circle */}
              <div
                style={{
                  width:           34,
                  height:          34,
                  borderRadius:    "50%",
                  background:      "linear-gradient(135deg, var(--cyan), var(--purple))",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  fontFamily:      "'Space Grotesk', sans-serif",
                  fontWeight:      700,
                  fontSize:        "0.8rem",
                  color:           "#fff",
                  boxShadow:       "0 0 14px var(--cyan)",
                  flexShrink:      0,
                }}
              >
                BR
              </div>
              {/* Name — hidden on mobile to save space */}
              {!isMobile && (
                <span
                  style={{
                    fontFamily:            "'Space Grotesk', sans-serif",
                    fontWeight:            600,
                    fontSize:              "0.95rem",
                    color:                 "var(--text)",
                    letterSpacing:         "0.02em",
                    whiteSpace:            "nowrap",
                  }}
                >
                  Bhavik Rai
                </span>
              )}
            </motion.div>
          </NavLink>

          {/* ── Desktop nav links + Theme Toggle ── */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ul
                style={{
                  listStyle: "none",
                  margin:    0,
                  padding:   0,
                  display:   "flex",
                  alignItems: "center",
                  gap:       "0.15rem",
                }}
              >
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink to={to} style={{ textDecoration: "none" }}>
                      {({ isActive }) => (
                        <motion.div
                          whileHover={{ scale: 1.04 }}
                          style={{
                            padding:     "0.4rem 0.85rem",
                            borderRadius: "50px",
                            fontFamily:  "'Inter', sans-serif",
                            fontSize:    "0.87rem",
                            fontWeight:  isActive ? 600 : 400,
                            color:       isActive ? "var(--cyan)" : "var(--muted)",
                            background:  isActive ? "rgba(56,189,248,0.12)" : "transparent",
                            border:      isActive ? "1px solid var(--cyan)" : "1px solid transparent",
                            transition:  "all 0.2s ease",
                            letterSpacing: "0.01em",
                            whiteSpace:  "nowrap",
                          }}
                        >
                          {label}
                        </motion.div>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Theme Toggle Button (Desktop) */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.85, rotate: 180 }}
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle light/dark theme"
                style={{
                  background:   theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
                  border:       "1px solid var(--border)",
                  borderRadius: "50%",
                  width:        36,
                  height:       36,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  color:        theme === "dark" ? "#F59E0B" : "#7C3AED",
                  cursor:       "pointer",
                  marginLeft:   "0.3rem",
                  transition:   "all 0.25s ease",
                }}
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </motion.button>
            </div>
          )}

          {/* ── Mobile: active page label + theme toggle + hamburger ── */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {/* Show current page name */}
              <span
                style={{
                  fontFamily:   "'Inter', sans-serif",
                  fontSize:     "0.8rem",
                  fontWeight:   500,
                  color:        "var(--cyan)",
                  letterSpacing: "0.02em",
                  whiteSpace:   "nowrap",
                }}
              >
                {navLinks.find((n) => n.to === location.pathname)?.label ?? "Home"}
              </span>

              {/* Theme Toggle Button (Mobile) */}
              <motion.button
                whileTap={{ scale: 0.85, rotate: 180 }}
                onClick={toggleTheme}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle light/dark theme"
                style={{
                  background:   theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)",
                  border:       "1px solid var(--border)",
                  borderRadius: "50%",
                  width:        34,
                  height:       34,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  color:        theme === "dark" ? "#F59E0B" : "#7C3AED",
                  flexShrink:   0,
                  cursor:       "pointer",
                }}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </motion.button>

              {/* Hamburger button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                style={{
                  background:   "rgba(56,189,248,0.1)",
                  border:       "1px solid var(--border)",
                  borderRadius: "50%",
                  width:        34,
                  height:       34,
                  display:      "flex",
                  alignItems:   "center",
                  justifyContent: "center",
                  color:        "var(--cyan)",
                  flexShrink:   0,
                  cursor:       "pointer",
                }}
              >
                {isOpen ? <X size={17} /> : <Menu size={17} />}
              </motion.button>
            </div>
          )}
        </div>
      </motion.nav>
      </div>

      {/* ══════════════════ MOBILE OVERLAY MENU ══════════════════ */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={{
              position:           "fixed",
              top:                0,
              left:               0,
              right:              0,
              bottom:             0,
              background:         "var(--bg-primary)",
              backdropFilter:     "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              zIndex:             998,
              display:            "flex",
              flexDirection:      "column",
              alignItems:         "center",
              justifyContent:     "center",
              gap:                "0",
              paddingBottom:      "4rem",
            }}
          >
            {/* Close button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                position:     "absolute",
                top:          "1rem",
                right:        "1rem",
                background:   "rgba(0,245,255,0.08)",
                border:       "1px solid rgba(0,245,255,0.2)",
                borderRadius: "50%",
                width:        40,
                height:       40,
                display:      "flex",
                alignItems:   "center",
                justifyContent: "center",
                color:        "#00F5FF",
                cursor:       "pointer",
              }}
            >
              <X size={20} />
            </motion.button>

            {/* Logo in overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div
                style={{
                  width:          44,
                  height:         44,
                  borderRadius:   "50%",
                  background:     "linear-gradient(135deg, #00F5FF, #7C3AED)",
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  fontFamily:     "'Space Grotesk', sans-serif",
                  fontWeight:     700,
                  fontSize:       "1rem",
                  color:          "#fff",
                  boxShadow:      "0 0 20px rgba(0,245,255,0.5)",
                }}
              >
                BR
              </div>
              <span
                style={{
                  fontFamily:           "'Space Grotesk', sans-serif",
                  fontWeight:           700,
                  fontSize:             "1.25rem",
                  background:           "linear-gradient(135deg, #00F5FF, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip:       "text",
                }}
              >
                Bhavik Rai
              </span>
            </motion.div>

            {/* Nav links */}
            {navLinks.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 + 0.1, ease: "easeOut" }}
                style={{ width: "100%", maxWidth: 280 }}
              >
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  {({ isActive }) => (
                    <div
                      style={{
                        display:       "flex",
                        alignItems:    "center",
                        justifyContent: "space-between",
                        padding:       "1rem 1.25rem",
                        margin:        "0.2rem 0",
                        borderRadius:  16,
                        background:    isActive
                          ? "rgba(0,245,255,0.08)"
                          : "transparent",
                        border:        isActive
                          ? "1px solid rgba(0,245,255,0.2)"
                          : "1px solid transparent",
                        transition:    "all 0.2s",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:           "'Space Grotesk', sans-serif",
                          fontSize:             "1.5rem",
                          fontWeight:           700,
                          background:           isActive
                            ? "linear-gradient(135deg, #00F5FF, #7C3AED)"
                            : "none",
                          WebkitBackgroundClip: isActive ? "text" : "none",
                          WebkitTextFillColor:  isActive
                            ? "transparent"
                            : "rgba(255,255,255,0.55)",
                          backgroundClip:       isActive ? "text" : "none",
                          color:                isActive ? undefined : "rgba(255,255,255,0.55)",
                          letterSpacing:        "0.01em",
                        }}
                      >
                        {label}
                      </span>
                      {isActive && (
                        <span style={{ color: "#00F5FF", fontSize: "1rem" }}>→</span>
                      )}
                    </div>
                  )}
                </NavLink>
              </motion.div>
            ))}

            {/* Bottom tagline */}
            <div
              style={{
                position:      "absolute",
                bottom:        "2rem",
                fontFamily:    "'Inter', sans-serif",
                fontSize:      "0.72rem",
                color:         "rgba(255,255,255,0.2)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textAlign:     "center",
                padding:       "0 1rem",
              }}
            >
              Full-Stack &amp; AI Engineer
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
