import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function SkillCard({ icon, name, desc, invert }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * 10;
    const dy = -((e.clientY - cy) / (rect.height / 2)) * 10;
    setTilt({ x: dy, y: dx });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.06 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        position: "relative",
        background: hovered
          ? "rgba(0,245,255,0.06)"
          : "rgba(11,17,32,0.6)",
        border: hovered
          ? "1px solid rgba(0,245,255,0.3)"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "1.4rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: hovered
          ? "0 0 30px rgba(0,245,255,0.2), 0 0 60px rgba(0,245,255,0.05), inset 0 0 20px rgba(0,245,255,0.03)"
          : "0 4px 24px rgba(0,0,0,0.2)",
        transition: "background 0.25s, border 0.25s, box-shadow 0.25s",
        cursor: "none",
        overflow: "hidden",
      }}
    >
      {/* Top shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          width: "60%",
          height: 1,
          background: hovered
            ? "linear-gradient(90deg, transparent, rgba(0,245,255,0.6), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          transition: "background 0.3s",
        }}
      />

      {/* Icon orb */}
      <motion.div
        animate={
          hovered
            ? { boxShadow: "0 0 24px rgba(0,245,255,0.5)", scale: 1.1 }
            : { boxShadow: "0 0 12px rgba(0,245,255,0.1)", scale: 1 }
        }
        transition={{ duration: 0.25 }}
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "rgba(0,245,255,0.06)",
          border: hovered
            ? "1px solid rgba(0,245,255,0.4)"
            : "1px solid rgba(0,245,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "border 0.25s",
        }}
      >
        <img
          src={icon}
          alt={name}
          style={{
            width: 30,
            height: 30,
            objectFit: "contain",
            filter: invert
              ? "invert(1) brightness(0.9)"
              : hovered
              ? "drop-shadow(0 0 6px rgba(0,245,255,0.7))"
              : "none",
            transition: "filter 0.25s",
          }}
        />
      </motion.div>

      {/* Name */}
      <p
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "0.85rem",
          color: hovered ? "#00F5FF" : "#fff",
          letterSpacing: "0.03em",
          textAlign: "center",
          transition: "color 0.25s",
          textShadow: hovered ? "0 0 12px rgba(0,245,255,0.5)" : "none",
          margin: 0,
        }}
      >
        {name}
      </p>

      {/* Description — reveal on hover */}
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: hovered ? 1 : 0,
          height: hovered ? "auto" : 0,
        }}
        transition={{ duration: 0.25 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.72rem",
          color: "#94A3B8",
          textAlign: "center",
          lineHeight: 1.5,
          margin: 0,
          overflow: "hidden",
        }}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
}
