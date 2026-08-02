import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width / 2;
    let mouseY = height / 2;
    let animId;

    // ── Particles ──
    const NUM_PARTICLES = 120;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        // color: mostly white/cyan stars
        const r = Math.random();
        if (r < 0.7) {
          this.color = `rgba(255,255,255,`;
        } else if (r < 0.9) {
          this.color = `rgba(0,245,255,`;
        } else {
          this.color = `rgba(124,58,237,`;
        }
      }
      update(t) {
        this.x += this.speedX;
        this.y += this.speedY;
        // Twinkle
        const twinkle =
          this.opacity +
          Math.sin(t * this.twinkleSpeed + this.twinkleOffset) * 0.15;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle());
    }

    // ── Aurora blobs ──
    const blobs = [
      { x: 0.15, y: 0.2, r: 0.35, color: "rgba(0,245,255,0.04)", dx: 0.0003, dy: 0.0002 },
      { x: 0.7,  y: 0.7, r: 0.4,  color: "rgba(124,58,237,0.05)", dx: -0.0002, dy: 0.0003 },
      { x: 0.5,  y: 0.1, r: 0.3,  color: "rgba(20,241,149,0.03)", dx: 0.0004, dy: -0.0002 },
    ];

    // ── Mouse reactive glow ──
    const drawMouseGlow = () => {
      const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220);
      grad.addColorStop(0, "rgba(0,245,255,0.05)");
      grad.addColorStop(1, "rgba(0,245,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    };

    // ── Grid lines ──
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255,255,255,0.018)";
      ctx.lineWidth = 0.5;
      const spacing = 60;
      for (let x = 0; x < width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    let t = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Aurora blobs
      blobs.forEach((blob) => {
        blob.x += blob.dx;
        blob.y += blob.dy;
        if (blob.x < 0 || blob.x > 1) blob.dx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.dy *= -1;

        const grad = ctx.createRadialGradient(
          blob.x * width, blob.y * height, 0,
          blob.x * width, blob.y * height, blob.r * Math.max(width, height)
        );
        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      drawGrid();
      drawMouseGlow();

      // Particles
      t++;
      particles.forEach((p) => p.update(t));

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
