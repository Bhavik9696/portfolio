import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaTimes, FaFilePdf } from "react-icons/fa";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="resume-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              zIndex: 9998,
            }}
          />

          {/* ── Centering shell (non-animated, pure positioning) ── */}
          <div
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "4rem 1.25rem 1.25rem",   /* top padding clears the navbar */
              pointerEvents: "none",
              boxSizing: "border-box",
            }}
          >
            {/* ── Animated modal ── */}
            <motion.div
              key="resume-modal"
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                pointerEvents: "all",
                width: "100%",
                maxWidth: 900,
                height: "100%",
                maxHeight: 780,
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-md)",
                borderRadius: 14,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* ── Top bar ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid var(--border)",
                  background: "var(--surface)",
                  flexShrink: 0,
                  gap: "1rem",
                  minHeight: 56,
                }}
              >
                {/* Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flex: 1, minWidth: 0 }}>
                  <FaFilePdf style={{ color: "var(--accent)", fontSize: "1.1rem", flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    Bhavik Rai — Resume
                  </span>
                </div>

                {/* Buttons — fixed width, no shrink */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
                  {/* Download */}
                  <a
                    href="/Bhavik_Resume.pdf"
                    download
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.5rem 1.1rem",
                      borderRadius: 8,
                      background: "var(--accent)",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(232,92,32,0.35)",
                      whiteSpace: "nowrap",
                      transition: "background 0.18s, transform 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#ff8a5e";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <FaDownload size={12} /> Download
                  </a>

                  {/* Close */}
                  <button
                    onClick={onClose}
                    aria-label="Close resume viewer"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 9,
                      background: "var(--surface-hi)",
                      border: "1px solid var(--border-md)",
                      color: "var(--muted)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "1rem",
                      flexShrink: 0,
                      transition: "background 0.18s, color 0.18s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--bg-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted)";
                      e.currentTarget.style.background = "var(--surface-hi)";
                    }}
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* ── PDF iframe ── */}
              <div style={{ flex: 1, overflow: "hidden", background: "#f0f0f0" }}>
                <iframe
                  src="/Bhavik_Resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  title="Bhavik Rai Resume"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
