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

      {/* ── Loading screen ── */}
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {/* ── Custom cursor ── */}
      <CustomCursor />

      {/* ── Scroll progress bar ── */}
      <ScrollProgress />

      {/* ── App shell ── */}
      <Router>
        <div
          style={{
            width: "100%",
            minHeight: "100vh",
            background: "#111111",
            color: "#F5F5F0",
            fontFamily: "'Inter', sans-serif",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Content ── */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />

            <main
              id="main-content"
              style={{
                minHeight: "100vh",
                paddingTop: "1rem",
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
