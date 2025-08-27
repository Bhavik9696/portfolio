import profile from "../assets/images/myimge.jpg"
import TextType from '../components/TextType';

export default function HomePage() {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-0">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Bhavik Rai</span> 👋
          <h1>{" "}</h1>
          <span className=" text-4xl md:text-4xl font-normal text-gray-300">
            <TextType
              text={[
                "a MERN Stack Developer",
                "a Problem Solver",
                "always Learning 🚀"
              ]}
              typingSpeed={30}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>
        </h1>
        <a
          href="/Bhavik_Rai_Resume.pdf" 
          download="Bhavik_Rai_Resume.pdf"
          className=" bg-purple-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl shadow-md transition duration-300"
        >
          Download Resume
        </a>
      </section>

      {/* Profile Section */}
      <section className="mt-12 text-center">
        <img
          src={profile} 
          alt="Bhavik Rai"
          className="w-36 h-36 rounded-full mx-auto shadow-lg border-4 border-purple-400 object-cover"
        />
        <h2 className="text-2xl font-semibold mt-6">About Me</h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          I'm a{" "}
          <span className="text-purple-400 font-medium">
            full-stack developer
          </span>{" "}
          passionate about building scalable web applications and solving
          algorithmic challenges.
        </p>
      </section>

           {/* Skills Section */}
      <section className="mt-12 text-center w-full max-w-5xl">
  <h2 className="text-2xl font-semibold mb-6">Skills</h2>

  {/* Programming Languages */}
  <h3 className="text-xl font-semibold text-purple-400 mb-4">Languages</h3>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    alt="HTML" 
    className="w-12 h-12 mx-auto mb-3" 
  />
  <span className="text-purple-400 font-medium">HTML</span>
  <p className="text-gray-400 text-sm mt-2">The backbone of web pages, providing structure and semantics.</p>
</div>

<div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    alt="CSS" 
    className="w-12 h-12 mx-auto mb-3" 
  />
  <span className="text-purple-400 font-medium">CSS</span>
  <p className="text-gray-400 text-sm mt-2">Styles web pages with layouts, colors, and responsive design.</p>
</div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
           alt="JavaScript" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">JavaScript</span>
      <p className="text-gray-400 text-sm mt-2">Core programming language for web interactivity.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
           alt="Java" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">Java</span>
      <p className="text-gray-400 text-sm mt-2">Strong OOP foundation, used for backend and Android apps.</p>
    </div>
  </div>

  {/* Frameworks & Libraries */}
  <h3 className="text-xl font-semibold text-purple-400 mb-4">Frameworks & Libraries</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
           alt="React" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">React</span>
      <p className="text-gray-400 text-sm mt-2">JS library for building fast & scalable UIs.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://tse4.mm.bing.net/th/id/OIP.WzIshFoNdagNNG_GG7CajwHaCk?pid=Api&P=0&h=180"
           alt="Tailwind CSS" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">Tailwind CSS</span>
      <p className="text-gray-400 text-sm mt-2">Utility-first CSS framework for modern responsive designs.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
           alt="Node.js" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">Node.js</span>
      <p className="text-gray-400 text-sm mt-2">Backend runtime for building scalable apps.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
           alt="Express.js" className="w-12 h-12 mx-auto mb-3 invert" />
      <span className="text-purple-400 font-medium">Express.js</span>
      <p className="text-gray-400 text-sm mt-2">Minimalist backend framework for Node.js.</p>
    </div>
  </div>

  {/* Databases & Tools */}
  <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases & Tools</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
           alt="MongoDB" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">MongoDB</span>
      <p className="text-gray-400 text-sm mt-2">NoSQL database for modern web applications.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
           alt="Git" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">Git & GitHub</span>
      <p className="text-gray-400 text-sm mt-2">Version control and collaboration tool.</p>
    </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
         alt="GitHub" className="w-12 h-12 mx-auto mb-3 invert" />
    <span className="text-purple-400 font-medium">GitHub</span>
    <p className="text-gray-400 text-sm mt-2">Cloud-based platform for collaboration and code hosting.</p>
  </div>

   <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
         alt="VS Code" className="w-12 h-12 mx-auto mb-3" />
    <span className="text-purple-400 font-medium">VS Code</span>
    <p className="text-gray-400 text-sm mt-2">Lightweight yet powerful code editor for all projects.</p>
  </div>
  
  <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
         alt="Firebase" className="w-12 h-12 mx-auto mb-3" />
    <span className="text-purple-400 font-medium">Firebase</span>
    <p className="text-gray-400 text-sm mt-2">Backend-as-a-Service for authentication, database & hosting.</p>
  </div>

    <div className="bg-[#112240] p-4 rounded-xl shadow-md hover:scale-105 transition-transform">
      <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
           alt="Postman" className="w-12 h-12 mx-auto mb-3" />
      <span className="text-purple-400 font-medium">Postman</span>
      <p className="text-gray-400 text-sm mt-2">API testing, debugging, and collaboration tool.</p>
    </div>
  </div>
</section>

    </div>
  );
}
