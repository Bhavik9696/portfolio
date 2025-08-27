import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center text-white px-6 py-16"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg" // <-- replace with your image
            alt="Bhavik Rai"
            className="rounded-2xl shadow-lg w-72 md:w-96 hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-6">
            Hi 👋 I'm <span className="font-semibold text-purple-400">Bhavik Rai</span>, 
            a passionate <span className="font-semibold">MERN Stack Developer</span> 
            who loves solving real-world problems through code. 
            I enjoy building full-stack applications, learning new technologies, 
            and working on projects that make life easier for people. 🚀
          </p>

          {/* Skills / Highlights */}
          <div className="grid grid-cols-2 gap-4 text-gray-200">
            <div className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">⚡ Skills</h3>
              <p className="text-sm">React.js, Node.js, MongoDB, Express.js</p>
              <p className="text-sm">Tailwind CSS, Git, REST APIs</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">🎯 Interests</h3>
              <p className="text-sm">Problem Solving</p>
              <p className="text-sm">UI/UX Design</p>
              <p className="text-sm">Open Source</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl text-white font-semibold transition"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
