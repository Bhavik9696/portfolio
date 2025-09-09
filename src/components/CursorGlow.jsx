import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl z-[-1]"
      animate={{ x: mousePos.x - 80, y: mousePos.y - 80 }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
    />
  );
}
