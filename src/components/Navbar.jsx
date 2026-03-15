import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/knowledge", label: "Educational Background" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative font-semibold transition-all duration-200"
      : "relative font-normal transition-all duration-200 hover:opacity-80";

  const activeDot = (isActive) =>
    isActive ? (
      <span
        className="absolute -bottom-1 left-0 w-full h-px rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #ffc107, transparent)",
          boxShadow: "0 0 6px rgba(255,193,7,0.8)",
        }}
      />
    ) : null;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50"
      style={{
        background: "rgba(5, 5, 5, 0.65)",
        backdropFilter: "blur(20px) saturate(1.4)",
        WebkitBackdropFilter: "blur(20px) saturate(1.4)",
        borderBottom: "1px solid rgba(255, 193, 7, 0.15)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.5), 0 1px 0 rgba(255,193,7,0.08)",
      }}
    >
      <div className="flex justify-between items-center h-16 px-5 md:px-16">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 no-underline">
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1.4rem",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ffd54f, #ff8f00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
              letterSpacing: "0.06em",
              filter: "drop-shadow(0 0 8px rgba(255,193,7,0.5))",
            }}
          >
            Bhavik Rai
          </span>
          {/* Gold accent dot */}
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#ffc107", boxShadow: "0 0 6px #ffc107" }}
          />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {({ isActive }) => (
                  <>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "0.92rem",
                        letterSpacing: "0.05em",
                        color: isActive ? "#ffd54f" : "rgba(240,230,200,0.75)",
                        textShadow: isActive
                          ? "0 0 12px rgba(255,193,7,0.6)"
                          : "none",
                        transition: "color 0.2s, text-shadow 0.2s",
                      }}
                    >
                      {label}
                    </span>
                    {activeDot(isActive)}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: "#ffc107",
            background: "rgba(255,193,7,0.08)",
            border: "1px solid rgba(255,193,7,0.2)",
          }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? "320px" : "0px",
          opacity: isOpen ? 1 : 0,
          background: "rgba(5, 5, 5, 0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: isOpen ? "1px solid rgba(255,193,7,0.12)" : "none",
        }}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {({ isActive }) => (
                  <span
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.06em",
                      color: isActive ? "#ffd54f" : "rgba(240,230,200,0.75)",
                      textShadow: isActive
                        ? "0 0 14px rgba(255,193,7,0.7)"
                        : "none",
                    }}
                  >
                    {label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}

          {/* Divider */}
          <li
            className="w-24 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,193,7,0.4), transparent)",
            }}
          />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
