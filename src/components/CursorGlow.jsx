import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isVisible]);

  return (
    <>
      {/* Outer soft ambient glow */}
      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          width: 260,
          height: 260,
          top: 0,
          left: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,193,7,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        animate={{ x: mousePos.x - 130, y: mousePos.y - 130 }}
        transition={{ type: "spring", stiffness: 120, damping: 28 }}
      />

      {/* Inner sharp gold core */}
      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          width: 80,
          height: 80,
          top: 0,
          left: 0,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,213,79,0.30) 0%, transparent 70%)",
          filter: "blur(12px)",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        animate={{ x: mousePos.x - 40, y: mousePos.y - 40 }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      />
    </>
  );
}
