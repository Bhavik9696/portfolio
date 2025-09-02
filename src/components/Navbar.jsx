import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"; 
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const { theme, toggleTheme } = useTheme();

  return (
    <nav className=" shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="flex justify-between items-center h-16 px-5 md:px-16">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold font-serif text-purple-600 sm:text-2xl md:text-3xl">
            Bhavik Rai
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "dark:text-white rounded  transition lg:ml-9 "
            }>Home</NavLink>
          <NavLink to="/knowledge"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            }>Educational Background</NavLink>
          <NavLink to="/projects"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            }>Projects</NavLink>
          <NavLink to="/contact"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            }>Contact</NavLink>
            <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
            
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown with animation) */}
      <div
        className={`md:hidden  from-slate-800 via-slate-600 to-slate-900 shadow-md transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-90 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
          <NavLink to="/"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            } onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/knowledge"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            } onClick={() => setIsOpen(false)}>Educational Background</NavLink>
          <NavLink to="/projects"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            } onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact"  className={({ isActive }) =>
              isActive
                ? "text-orange-500 rounded  transition lg:ml-9"
                : "text-black dark:text-white rounded  transition lg:ml-9 "
            } onClick={() => setIsOpen(false)}>Contact</NavLink>
             <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
