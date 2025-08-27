import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen min-h-screen bg-gradient-to-b from-slate-800 via-slate-600 to-slate-900 text-white">
        <Navbar />

        <main className="min-h-screen pt-16 px-6">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Homepage */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
