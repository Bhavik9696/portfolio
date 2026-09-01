import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import KnowledgeBase from "./pages/KnowledgeBase";
import CaseStudy from "./pages/CaseStudy";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ChatWidget from "./components/ChatWidget";

/* ── Animated Routes (needs useLocation inside Router) ── */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/knowledge"
          element={
            <PageWrapper>
              <KnowledgeBase />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/case-study/:id"
          element={
            <PageWrapper>
              <CaseStudy />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

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
            background: "var(--bg-primary)",
            color: "var(--text)",
            fontFamily: "'Inter', sans-serif",
            position: "relative",
            zIndex: 1,
            transition: "background 0.35s ease, color 0.35s ease",
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
              <AnimatedRoutes />
            </main>

            <Footer />
          </div>

          {/* ── AI Chat Widget (fixed position, renders over everything) ── */}
          <ChatWidget />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
