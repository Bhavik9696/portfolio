import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KnowledgeBase from "./pages/KnowledgeBase";

function App() {
  return (
    <Router>
      {/* ── Google Font: Cinzel + Lato ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <div
        className="w-screen min-h-screen relative overflow-x-hidden"
        style={{
          background: "#050505",
          color: "#f0e6c8",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        {/* ── Ambient gold radial blobs ── */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "-15%",
            left: "-10%",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,193,7,0.13), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: "-10%",
            right: "-8%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,160,0,0.10), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Fine dot-grid texture overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage:
              "radial-gradient(rgba(255,193,7,0.07) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* ── Content layers ── */}
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />

          <main className="min-h-screen pt-16 px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/knowledge" element={<KnowledgeBase />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
