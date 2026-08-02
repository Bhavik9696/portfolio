import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import KnowledgeBase from "./pages/KnowledgeBase";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ── Loading screen (renders on top, self-removes) ── */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* ── Custom cursor ── */}
      <CustomCursor />

      {/* ── Scroll progress bar ── */}
      <ScrollProgress />

      {/* ── App shell ── */}
      <Router>
        {/* Fixed full-page canvas background */}
        <ParticleBackground />

        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            background: "var(--bg-primary)",
            color: "var(--text)",
            fontFamily: "'Inter', sans-serif",
            position: "relative",
            zIndex: 1,
            transition: "background-color 0.4s ease, color 0.4s ease",
          }}
        >
          {/* Global luxury ambient blobs */}
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              top: "-15%",
              left: "-5%",
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.035) 0%, transparent 65%)",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
              animation: "aurora 22s ease-in-out infinite",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              bottom: "-15%",
              right: "-5%",
              width: 650,
              height: 650,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168,85,247,0.035) 0%, transparent 65%)",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
              animation: "aurora 26s ease-in-out infinite reverse",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "fixed",
              top: "45%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 550,
              height: 550,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(16,185,129,0.02) 0%, transparent 65%)",
              filter: "blur(90px)",
              pointerEvents: "none",
              zIndex: 0,
              animation: "aurora 30s ease-in-out infinite",
            }}
          />

          {/* ── Content layers ── */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />

            <main
              id="main-content"
              style={{
                minHeight: "100vh",
                paddingTop: "1rem",
                overflow: "hidden",
              }}
            >
              <Routes>
                <Route path="/"          element={<Home />} />
                <Route path="/knowledge" element={<KnowledgeBase />} />
                <Route path="/projects"  element={<Projects />} />
                <Route path="/contact"   element={<Contact />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
