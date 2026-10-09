import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
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
              <Helmet>
                <title>Bhavik Rai | Full-Stack Developer & AI Engineer</title>
                <meta name="description" content="Bhavik Rai is a Full-Stack Developer & AI Engineer specializing in MERN stack, Node.js, FastAPI, and intelligent AI systems powered by LLMs and RAG. Based in India, open to work." />
                <meta property="og:title" content="Bhavik Rai | Full-Stack Developer & AI Engineer" />
                <meta property="og:description" content="Full-Stack Developer & AI Engineer building reliable web apps and intelligent software. MERN, Node.js, FastAPI, LLMs, RAG." />
                <meta property="og:url" content="https://raibhavik.me/" />
                <link rel="canonical" href="https://raibhavik.me/" />
              </Helmet>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/knowledge"
          element={
            <PageWrapper>
              <Helmet>
                <title>Education & Knowledge | Bhavik Rai</title>
                <meta name="description" content="Explore Bhavik Rai's education, certifications, and technical knowledge base — Computer Science Engineering at St Joseph Engineering College, Mangalore." />
                <meta property="og:title" content="Education & Knowledge | Bhavik Rai" />
                <meta property="og:url" content="https://raibhavik.me/knowledge" />
                <link rel="canonical" href="https://raibhavik.me/knowledge" />
              </Helmet>
              <KnowledgeBase />
            </PageWrapper>
          }
        />
        <Route
          path="/projects"
          element={
            <PageWrapper>
              <Helmet>
                <title>Projects | Bhavik Rai — Full-Stack & AI Developer</title>
                <meta name="description" content="Browse Bhavik Rai's portfolio of 10+ projects — AI platforms, MERN stack apps, RAG systems, computer vision tools, and freelance work." />
                <meta property="og:title" content="Projects | Bhavik Rai" />
                <meta property="og:url" content="https://raibhavik.me/projects" />
                <link rel="canonical" href="https://raibhavik.me/projects" />
              </Helmet>
              <Projects />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Helmet>
                <title>Contact Bhavik Rai | Hire a Full-Stack & AI Developer</title>
                <meta name="description" content="Get in touch with Bhavik Rai for full-time roles, freelance projects, or collaborations. Open to opportunities in full-stack and AI development." />
                <meta property="og:title" content="Contact | Bhavik Rai" />
                <meta property="og:url" content="https://raibhavik.me/contact" />
                <link rel="canonical" href="https://raibhavik.me/contact" />
              </Helmet>
              <Contact />
            </PageWrapper>
          }
        />
        <Route
          path="/case-study/:id"
          element={
            <PageWrapper>
              <Helmet>
                <title>Case Study | Bhavik Rai</title>
                <meta name="description" content="In-depth case study of a project built by Bhavik Rai — architecture, technology choices, and outcomes." />
                <link rel="canonical" href="https://raibhavik.me/projects" />
              </Helmet>
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
    <HelmetProvider>
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
    </HelmetProvider>
  );
}

export default App;
