import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [chars, setChars] = useState([]);

  // Progress bar
  useEffect(() => {
    const total = 2400; // ms
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
          setTimeout(() => onComplete?.(), 600);
        }, 300);
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
    }, 80);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#050816",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: 100000,
            overflow: "hidden",
          }}
        >
          {/* Background aurora blobs */}
          <div
            style={{
              position: "absolute",
              width: 600,
              height: 600,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)",
              top: "-20%",
              left: "-15%",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
              bottom: "-15%",
              right: "-10%",
              filter: "blur(80px)",
              pointerEvents: "none",
            }}
          />

          {/* Logo monogram */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00F5FF, #7C3AED)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              boxShadow:
                "0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(0,245,255,0.2)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.8rem",
              color: "#fff",
              position: "relative",
            }}
          >
            BR
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTop: "2px solid #00F5FF",
                borderRight: "2px solid rgba(0,245,255,0.3)",
              }}
            />
          </motion.div>

          {/* Name reveal */}
          <motion.div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "0.15em",
              marginBottom: "0.5rem",
              display: "flex",
              gap: "0.05em",
            }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  i < chars.length ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  background:
                    char === " "
                      ? "none"
                      : "linear-gradient(135deg, #00F5FF, #7C3AED, #14F195)",
                  WebkitBackgroundClip: char === " " ? "none" : "text",
                  WebkitTextFillColor: char === " " ? "transparent" : "transparent",
                  backgroundClip: char === " " ? "none" : "text",
                  color: char === " " ? "transparent" : undefined,
                  display: "inline-block",
                  minWidth: char === " " ? "0.3em" : undefined,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.8 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "#94A3B8",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            Full-Stack · AI Engineer · Problem Solver
          </motion.p>


          {/* Progress bar */}
          <div
            style={{
              width: "clamp(260px, 40vw, 380px)",
              height: 3,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                borderRadius: 3,
                background: "linear-gradient(90deg, #00F5FF, #7C3AED, #14F195)",
                width: `${progress}%`,
                boxShadow: "0 0 12px rgba(0,245,255,0.8)",
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "#94A3B8",
              marginTop: "0.6rem",
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
