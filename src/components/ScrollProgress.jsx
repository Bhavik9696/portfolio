import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setWidth(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 2,
        width: `${width}%`,
        background: "linear-gradient(90deg, #00F5FF, #7C3AED, #14F195)",
        zIndex: 9999,
        boxShadow: "0 0 8px rgba(0,245,255,0.8)",
        transition: "width 0.05s linear",
        pointerEvents: "none",
      }}
    />
  );
}
