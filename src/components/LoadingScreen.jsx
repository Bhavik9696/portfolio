import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [chars, setChars] = useState([]);

  // Progress bar
  useEffect(() => {
    const total = 2000;
    const interval = 20;
    const step = (interval / total) * 100;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 500);
        }, 250);
      }
      setProgress(current);
    }, interval);
    return () => clearInterval(timer);
  }, [onComplete]);

  // Name reveal char by char
  const name = "BHAVIK RAI";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setChars(name.slice(0, i + 1).split(""));
      i++;
      if (i >= name.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#111111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: 100000,
            overflow: "hidden",
          }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#FF6B35",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.75rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "#fff",
              position: "relative",
            }}
          >
            BR
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -5,
                borderRadius: 20,
                border: "2px solid transparent",
                borderTop: "2px solid #FF6B35",
                borderRight: "2px solid rgba(255,107,53,0.3)",
              }}
            />
          </motion.div>

          {/* Name reveal */}
          <motion.div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              marginBottom: "0.4rem",
              display: "flex",
              gap: "0.05em",
              color: "#F5F5F0",
            }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={i < chars.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{
                  display: "inline-block",
                  minWidth: char === " " ? "0.3em" : undefined,
                  color: char === " " ? "transparent" : undefined,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#6B6B6B",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Full-Stack · AI · Problem Solver
          </motion.p>

          {/* Progress bar */}
          <div
            style={{
              width: "clamp(220px, 36vw, 320px)",
              height: 2,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRadius: 2,
                background: "#FF6B35",
                width: `${progress}%`,
                transition: "width 0.05s linear",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.68rem",
              color: "#6B6B6B",
              marginTop: "0.5rem",
              letterSpacing: "0.08em",
            }}
          >
            {Math.round(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
