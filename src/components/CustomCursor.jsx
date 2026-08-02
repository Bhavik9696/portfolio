import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows instantly
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animate = () => {
      // Ring follows with lag (smooth interpolation)
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      setIsHovering(true);
      dot.style.transform = "translate(-50%, -50%) scale(0)";
    };

    const onLeave = () => {
      setIsHovering(false);
      dot.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const interactiveEls = "a, button, [role='button'], input, textarea, select, label";

    const addListeners = () => {
      document.querySelectorAll(interactiveEls).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    animId = requestAnimationFrame(animate);

    // Use MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addListeners();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }}
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovering ? "cursor-hover" : ""}`}
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99998 }}
      />
    </>
  );
}
