import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaRegStar, FaMicrochip, FaTerminal, FaBroadcastTower } from "react-icons/fa";

// Standard keypad symbols for a 3x4 telephone layout
const KEYPAD_SYMBOLS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];

export default function SkillsDialpad({ skills, activeCategory, onSelectCategory, categories }) {
  // Ensure we have an active skill selected
  const [selectedSkill, setSelectedSkill] = useState(skills[0] || null);
  const [pressedKey, setPressedKey] = useState(null);
  const [dialedSequence, setDialedSequence] = useState([]);

  // Auto-select first skill when category changes
  useEffect(() => {
    if (skills && skills.length > 0) {
      setSelectedSkill(skills[0]);
      setDialedSequence([]);
    }
  }, [skills]);

  // Handle keypad press
  const handleKeyPress = (skill, symbolIndex, symbol) => {
    setPressedKey(symbolIndex);
    setTimeout(() => setPressedKey(null), 250);

    setDialedSequence((prev) => [...prev.slice(-3), symbol]);

    if (skill) {
      setSelectedSkill(skill);
    }
  };

  // Map 12 keypad slots (3x4 grid)
  const keypadSlots = KEYPAD_SYMBOLS.map((symbol, index) => {
    const skill = skills[index] || null;
    return { symbol, index, skill };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
      }}
    >
      {/* ══════════════════ CATEGORY TABS ══════════════════ */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.6rem",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {categories.map(({ key, label }) => {
          const isActive = activeCategory === key;
          return (
            <motion.button
              key={key}
              onClick={() => onSelectCategory(key)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: 50,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                border: "1px solid",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: isActive
                  ? "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(139,92,246,0.18))"
                  : "var(--glass-bg)",
                borderColor: isActive ? "var(--cyan)" : "var(--border)",
                color: isActive ? "var(--cyan)" : "var(--muted)",
                boxShadow: isActive
                  ? "0 0 20px rgba(56,189,248,0.2), inset 0 0 10px rgba(56,189,248,0.1)"
                  : "none",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              {isActive && (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--cyan)",
                    boxShadow: "0 0 8px var(--cyan)",
                  }}
                />
              )}
              {label}
            </motion.button>
          );
        })}
      </div>

      {/* ══════════════════ MAIN DIALPAD CONTAINER ══════════════════ */}
      <div
        style={{
          width: "100%",
          maxWidth: 960,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* ─── LEFT: TELEPHONE KEYPAD (3x4 GRID) ─── */}
        <div
          style={{
            position: "relative",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: 24,
            padding: "1.75rem 1.5rem",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "var(--glass-shadow)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
          }}
        >
          {/* Futuristic Dialpad Header Display Bar */}
          <div
            style={{
              width: "100%",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "0.6rem 1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontFamily: "'Space Grotesk', monospace",
              fontSize: "0.78rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--cyan)" }}>
              <FaBroadcastTower className="animate-pulse" style={{ color: "var(--cyan)" }} />
              <span style={{ letterSpacing: "0.08em", fontWeight: 600 }}>DIAL-IN INTERFACE</span>
            </div>
            <div style={{ color: "var(--accent)", fontSize: "0.72rem", letterSpacing: "0.05em" }}>
              {dialedSequence.length > 0 ? `DIALED: ${dialedSequence.join(" ")}` : "SELECT KEY"}
            </div>
          </div>

          {/* 3x4 Keypad Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.2rem 1rem",
              justifyItems: "center",
              width: "100%",
              maxWidth: 380,
            }}
          >
            {keypadSlots.map(({ symbol, index, skill }) => {
              const isSelected = selectedSkill && skill && selectedSkill.name === skill.name;
              const isPressed = pressedKey === index;

              return (
                <KeypadButton
                  key={symbol}
                  symbol={symbol}
                  skill={skill}
                  isSelected={isSelected}
                  isPressed={isPressed}
                  onClick={() => handleKeyPress(skill, index, symbol)}
                />
              );
            })}
          </div>

          {/* Bottom Dialpad Status Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              paddingTop: "0.5rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontSize: "0.7rem",
              color: "#94A3B8",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span>STATUS: READY</span>
            <span style={{ color: "#7C3AED", fontWeight: 600 }}>FREQUENCY: 60 FPS</span>
          </div>
        </div>

        {/* ─── RIGHT: FLOATING DETAIL CARD ─── */}
        <div style={{ position: "relative", width: "100%" }}>
          <AnimatePresence mode="wait">
            {selectedSkill ? (
              <SkillDetailCard key={selectedSkill.name} skill={selectedSkill} />
            ) : (
              <div
                style={{
                  background: "rgba(11,17,32,0.6)",
                  border: "1px border rgba(255,255,255,0.1)",
                  borderRadius: 24,
                  padding: "3rem 1.5rem",
                  textAlign: "center",
                  color: "#94A3B8",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Select a key on the dialpad to view skill intelligence.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════ KEYPAD BUTTON COMPONENT ══════════════════ */
function KeypadButton({ symbol, skill, isSelected, isPressed, onClick }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * 8;
    const dy = -((e.clientY - cy) / (rect.height / 2)) * 8;
    setTilt({ x: dy, y: dx });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const isDisabled = !skill;

  return (
    <motion.button
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={isDisabled}
      animate={{
        scale: isPressed ? 0.92 : hovered ? 1.08 : isSelected ? 1.04 : 1,
        rotateX: tilt.x,
        rotateY: tilt.y,
        rotate: hovered ? 2 : 0,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      style={{
        width: "clamp(90px, 22vw, 108px)",
        height: "clamp(90px, 22vw, 108px)",
        borderRadius: "50%",
        position: "relative",
        background: isSelected
          ? "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(139,92,246,0.2))"
          : hovered
          ? "rgba(56,189,248,0.1)"
          : "var(--bg-secondary)",
        border: isSelected
          ? "2px solid var(--cyan)"
          : hovered
          ? "1.5px solid var(--cyan)"
          : "1px solid var(--border)",
        boxShadow: isSelected
          ? "0 0 30px rgba(56,189,248,0.3), inset 0 0 15px rgba(56,189,248,0.15)"
          : hovered
          ? "0 0 25px rgba(56,189,248,0.2), inset 0 0 10px rgba(56,189,248,0.08)"
          : "0 6px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        cursor: isDisabled ? "default" : "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.4rem",
        opacity: isDisabled ? 0.5 : 1,
        outline: "none",
        userSelect: "none",
        transition: "background 0.25s, border 0.25s, box-shadow 0.25s",
      }}
    >
      {/* Keypad Symbol Number (top right corner) */}
      <span
        style={{
          position: "absolute",
          top: "8px",
          right: "12px",
          fontFamily: "'Space Grotesk', monospace",
          fontSize: "0.68rem",
          fontWeight: 700,
          color: isSelected ? "var(--cyan)" : hovered ? "var(--accent)" : "var(--muted)",
          letterSpacing: "0.05em",
        }}
      >
        {symbol}
      </span>

      {/* Ripple ring effect on hover / click */}
      {(hovered || isSelected || isPressed) && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: isPressed ? 1.2 : 1.05, opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: -4,
            borderRadius: "50%",
            border: isSelected ? "1px solid var(--cyan)" : "1px solid var(--purple)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Skill Icon */}
      {skill ? (
        <>
          <motion.img
            src={skill.icon}
            alt={skill.name}
            animate={{ scale: hovered || isSelected ? 1.15 : 1 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "28px",
              height: "28px",
              objectFit: "contain",
              filter: skill.invert
                ? "invert(1) brightness(0.9)"
                : hovered || isSelected
                ? "drop-shadow(0 0 8px var(--cyan))"
                : "none",
              marginBottom: "2px",
            }}
          />
          {/* Skill Name */}
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 600,
              color: isSelected ? "var(--cyan)" : "var(--text)",
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "85%",
              letterSpacing: "0.02em",
            }}
          >
            {skill.name}
          </span>
        </>
      ) : (
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--muted)",
          }}
        >
          {symbol}
        </span>
      )}
    </motion.button>
  );
}

/* ══════════════════ SKILL DETAIL CARD COMPONENT ══════════════════ */
function SkillDetailCard({ skill }) {
  const { name, icon, desc, level = "Expert", stars = 5, topics = [], invert } = skill;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        position: "relative",
        background: "var(--glass-bg)",
        border: "1px solid var(--glass-border)",
        borderRadius: 24,
        padding: "2rem",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "var(--glass-shadow)",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Top Shimmer Line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, #00F5FF, #7C3AED, transparent)",
        }}
      />

      {/* Header Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        {/* Glowing Icon Container */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: "rgba(0,245,255,0.08)",
            border: "1px solid rgba(0,245,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 25px rgba(0,245,255,0.25)",
            flexShrink: 0,
          }}
        >
          <img
            src={icon}
            alt={name}
            style={{
              width: 36,
              height: 36,
              objectFit: "contain",
              filter: invert ? "invert(1) brightness(0.9)" : "drop-shadow(0 0 8px rgba(0,245,255,0.6))",
            }}
          />
        </div>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--text)",
                margin: 0,
              }}
            >
              {name}
            </h3>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--accent)",
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: 50,
                padding: "2px 10px",
                letterSpacing: "0.05em",
              }}
            >
              {level}
            </span>
          </div>

          {/* Star Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem", marginTop: "0.4rem" }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{ color: star <= stars ? "var(--cyan)" : "var(--border)", fontSize: "0.9rem" }}>
                {star <= stars ? <FaStar /> : <FaRegStar />}
              </span>
            ))}
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--muted)", marginLeft: "0.5rem" }}>
              {stars} / 5 Rating
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.92rem",
          color: "var(--muted)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {desc}
      </p>

      {/* Core Topics / Capabilities Chips */}
      {topics && topics.length > 0 && (
        <div>
          <h4
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--cyan)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <FaMicrochip style={{ color: "var(--cyan)" }} /> Key Competencies
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {topics.map((topic) => (
              <span
                key={topic}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  borderRadius: 10,
                  padding: "5px 12px",
                  backdropFilter: "blur(8px)",
                }}
              >
                • {topic}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Interface Status Indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "0.75rem",
          borderTop: "1px solid var(--border)",
          fontFamily: "'Space Grotesk', monospace",
          fontSize: "0.72rem",
          color: "var(--muted)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <FaTerminal style={{ color: "var(--accent)" }} /> LINKED TO DIALPAD
        </span>
        <span style={{ color: "var(--cyan)" }}>ACTIVE MODULE</span>
      </div>
    </motion.div>
  );
}
