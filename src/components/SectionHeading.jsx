import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

/**
 * SectionHeading — Editorial section title
 * Props:
 *   num    — section number (e.g. "01")
 *   label  — small eyebrow label above (optional)
 *   title  — main heading text
 *   align  — "center" | "left" (default "left")
 */
export default function SectionHeading({
  num,
  label,
  title,
  align = "left",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      }}
      style={{
        textAlign: align,
        marginBottom: "3rem",
      }}
    >
      {/* Eyebrow: number + label */}
      {(num || label) && (
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.05 } },
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "0.7rem",
            justifyContent: align === "center" ? "center" : "flex-start",
          }}
        >
          {num && (
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#6B6B6B",
                textTransform: "uppercase",
              }}
            >
              {num} /
            </span>
          )}
          {label && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FF6B35",
              }}
            >
              {label}
            </span>
          )}
        </motion.div>
      )}

      {/* Main title */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.55 } },
        }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#F5F5F0",
          letterSpacing: "-0.01em",
          margin: "0 0 1rem",
        }}
      >
        {title}
      </motion.h2>

      {/* Orange underline accent */}
      <motion.div
        variants={{
          hidden: { scaleX: 0, opacity: 0 },
          visible: {
            scaleX: 1,
            opacity: 1,
            transition: { delay: 0.25, duration: 0.45, ease: "easeOut" },
          },
        }}
        style={{
          height: 2,
          width: 36,
          marginLeft: align === "center" ? "auto" : 0,
          marginRight: align === "center" ? "auto" : 0,
          borderRadius: 2,
          background: "#FF6B35",
          transformOrigin: align === "center" ? "center" : "left",
        }}
      />
    </motion.div>
  );
}
