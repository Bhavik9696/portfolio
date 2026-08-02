import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    icon: FaWhatsapp,
    href: "https://wa.me/qr/SPLZRPUSUPAWG1",
    label: "WhatsApp",
    color: "#25D366",
    glow: "rgba(37,211,102,0.4)",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Bhavik9696",
    label: "GitHub",
    color: "#fff",
    glow: "rgba(255,255,255,0.3)",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    label: "LinkedIn",
    color: "#0A66C2",
    glow: "rgba(10,102,194,0.4)",
  },
];

export default function FloatingDock() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="floating-dock-wrapper"
      style={{
        position: "fixed",
        right: "1.25rem",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        zIndex: 500,
      }}
    >
      {/* Vertical line above */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        style={{
          width: 1,
          height: 60,
          background: "linear-gradient(to bottom, transparent, rgba(0,245,255,0.4))",
          margin: "0 auto 0.5rem",
          transformOrigin: "top",
        }}
      />

      {links.map(({ icon: Icon, href, label, color, glow }, i) => (
        <div key={label} style={{ position: "relative" }}>
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.5, ease: "easeOut" }}
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(11,17,32,0.8)",
              border: `1px solid rgba(255,255,255,0.1)`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              color: hovered === label ? color : "rgba(255,255,255,0.5)",
              boxShadow:
                hovered === label
                  ? `0 0 20px ${glow}, 0 0 40px ${glow}`
                  : "0 4px 16px rgba(0,0,0,0.3)",
              transition: "color 0.2s, box-shadow 0.2s",
              fontSize: "1.1rem",
            }}
          >
            <Icon />
          </motion.a>

          {/* Tooltip */}
          <AnimatePresence>
            {hovered === label && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  right: "54px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(11,17,32,0.95)",
                  border: "1px solid rgba(0,245,255,0.2)",
                  borderRadius: 8,
                  padding: "4px 10px",
                  fontSize: "0.72rem",
                  fontFamily: "'Inter', sans-serif",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  backdropFilter: "blur(10px)",
                }}
              >
                {label}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Vertical line below */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        style={{
          width: 1,
          height: 60,
          background: "linear-gradient(to top, transparent, rgba(0,245,255,0.4))",
          margin: "0.5rem auto 0",
          transformOrigin: "bottom",
        }}
      />
    </div>
  );
}
