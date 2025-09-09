import React from "react";
import Aside from "../components/Aside";
import DotsBackground from "../components/DotsBackground";
import CursorGlow from "../components/CursorGlow";
function Projects() {
  const projects = [
    {
      title: "College Official Website",
      description:
        "A full stack web application serving as the official website for a college. Developed using React, Tailwind CSS, and Firebase for real-time database and authentication. Features include course info, faculty, events, news, secure login, and personalized dashboards.",
      liveLink: "https://bbcdclg.netlify.app",
      codeLink: "https://github.com/Bhavik9696/college-website.git",
    },
     {
      title: "React Password Generator",
      description:
        "A simple and customizable password generator built with React and Vite. Generate strong passwords, adjust length, include numbers or special characters, and copy to clipboard easily. Built with React Hooks (useState, useEffect, useRef).",
      liveLink: "https://soft-starlight-7cc2ce.netlify.app/", // add your live demo link
      codeLink: "https://github.com/Bhavik9696/passward-generator.git", // add your GitHub link
    },
    {
      title: "Responsive landing Page for PW",
      description:
        "A visually appealing and responsive home page website built using Tailwind CSS. Fully mobile-friendly with modern design and smooth UI transitions.",
      liveLink: "https://pwlandpage.netlify.app/",
      codeLink: "https://github.com/Bhavik9696/pw-landingpage_clone.git", 
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "E-commerce App",
      description: "Full-stack MERN application with cart system and payments.",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Stock Price Predictor",
      description: "Web app using Flask and ML to predict stock prices.",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
     <div className="relative min-h-screen text-white p-8 overflow-hidden z-[9]">

      <DotsBackground/>
      <CursorGlow/>
      <Aside/>
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-black bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-black mb-4 dark:text-white ">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-purple-600 px-4 py-2 rounded hover:bg-purple-700"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
