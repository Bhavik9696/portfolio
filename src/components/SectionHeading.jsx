import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * SectionHeading — Reusable premium section title
 * Props:
 *   label   — small uppercase label above (optional)
 *   title   — main heading text
 *   gradient — "cyan" | "purple" | "full" (default "full")
 *   align   — "center" | "left" (default "center")
 */
export default function SectionHeading({
  label,
  title,
  gradient = "full",
  align = "center",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const gradients = {
    cyan: "linear-gradient(135deg, var(--cyan), var(--purple))",
    purple: "linear-gradient(135deg, var(--purple), var(--cyan))",
    full: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 50%, var(--accent) 100%)",
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      style={{
        textAlign: align,
        marginBottom: "3rem",
      }}
    >
      {label && (
        <motion.p
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1 } },
          }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--cyan)",
            marginBottom: "0.5rem",
          }}
        >
          ✦ {label} ✦
        </motion.p>
      )}

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6 } },
        }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          background: gradients[gradient],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent !important",
          marginBottom: "1rem",
        }}
      >
        {title}
      </motion.h2>

      {/* Animated underline */}
      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6, ease: "easeOut" },
          },
        }}
        style={{
          height: 2,
          width: 60,
          margin: align === "center" ? "0 auto" : "0",
          borderRadius: 2,
          background: gradients[gradient],
          boxShadow: "0 0 12px rgba(0,245,255,0.6)",
          transformOrigin: align === "center" ? "center" : "left",
        }}
      />
    </motion.div>
  );
}
