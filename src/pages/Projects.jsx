import React from "react";
import Aside from "../components/Aside";
import DotsBackground from "../components/DotsBackground";
import CursorGlow from "../components/CursorGlow";
import { useEffect } from "react";

const currentlyWorking = [
  {
    title: "Queue-SWAP",
    description:
      "Queue-SWAP is an innovative Mern-Stack web-based platform designed to bridge the gap between people who want to avoid long queues and individuals willing to stand in line on their behalf. The system connects customers with queue helpers in real time, helping users save valuable hours while providing income opportunities for gig workers. It includes features like booking, live tracking, secure payments, and a rating system for trust and reliability.",
    liveLink: null,
    codeLink: "https://github.com/Bhavik9696/Queue-Swap.git",
  },
  {
  title: "Healthcare Coding Integration (SIH25026)",
  description:
    "A Smart India Hackathon project that integrates NAMASTE and ICD-11 codes into EMR/EHR systems. Features dual-coding for interoperability, smart search with auto-complete, terminology services for code mapping, and analytics dashboards for hospitals and insurers. Helps clinicians quickly record traditional + biomedical diagnoses while ensuring compliance with Indian EHR standards.",
  liveLink: null,
  codeLink: "https://docs.google.com/presentation/d/1uggpBFjk9YCVOsJkKr17Zs93roJ-J57s/edit?usp=sharing&ouid=103575647141063325562&rtpof=true&sd=true",
},

];

function Projects() {
  const projects = [
    {
  title: "MERN Fitness Tracker",
  description:
    "A full-stack fitness tracking app built with the MERN stack. Users can sign up, log in, and securely manage their workout routines with JWT-based authentication., React Context for state management, and CRUD features for managing workouts with MongoDB Atlas.",
  liveLink: null,
  codeLink: "https://github.com/Bhavik9696/Gym-buddy.git",
},

    {
      title: "College Official Website",
      description:
        "A full stack web application serving as the website for a college. Developed using React, Tailwind CSS, and Firebase for real-time database and authentication. Features include course info, events, news, secure login, and personalized dashboards.",
      liveLink: "https://bbcdclg.netlify.app",
      codeLink: "https://github.com/Bhavik9696/college-website.git",
    },
    {
      title: "React Password Generator",
      description:
        "A simple and customizable password generator built with React and Vite. Generate strong passwords, adjust length, include numbers or special characters, and copy to clipboard easily. Built with React Hooks (useState, useEffect, useRef).",
      liveLink: "https://soft-starlight-7cc2ce.netlify.app/",
      codeLink: "https://github.com/Bhavik9696/passward-generator.git",
    },
    {
      title: "Responsive Landing Page for PW",
      description:
        "A visually appealing and responsive home page website built using Tailwind CSS. Fully mobile-friendly with modern design and smooth UI transitions.",
      liveLink: "https://pwlandpage.netlify.app/",
      codeLink: "https://github.com/Bhavik9696/pw-landingpage_clone.git",
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Tailwind CSS, showcasing projects, skills, and experience with interactive UI and smooth navigation.",
      liveLink: "https://bhavikrai-portfolio.netlify.app",
      codeLink: "https://github.com/Bhavik9696/portfolio.git",
    },
    {
      title: "ejs-file-app",
      description:
        "View, create, and manage text files on the server with a simple web interface. Built using Node.js, Express, and EJS.",
      liveLink: null,
      codeLink: "https://github.com/Bhavik9696/ejs-file-app.git",
    },
    {
      title: "Stock Price Predictor",
      description:
        "Stock prediction using linear regression in Python with an integrated frontend for user interaction.",
      liveLink: null,
      codeLink: "https://github.com/Bhavik9696/python-miniproject.git",
    },
  ];

  return (
    <div className="relative min-h-screen text-white p-8 overflow-hidden z-[9]">
      <DotsBackground />
      <CursorGlow />
      <Aside />
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>

      {/* Other Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-black bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 opacity-0 translate-y-8 animate-fade-in"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-black mb-4 dark:text-white">{project.description}</p>
            <div className="flex gap-4">
              {project.liveLink ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Live Demo
                </a>
              ) : (
                <span className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-70">
                  Live Demo Unavailable
                </span>
              )}
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Currently Working Projects Section */}
      <div className="mb-12 mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Currently Working On</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentlyWorking.map((project, index) => (
            <div
              key={index}
              className="border-2 border-purple-500 text-black bg-gray-200 dark:bg-gray-800 dark:text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 opacity-0 translate-y-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-black mb-4 dark:text-white">{project.description}</p>
              <div className="flex gap-4">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed opacity-70">
                    Live Demo Unavailable
                  </span>
                )}
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border border-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Projects;