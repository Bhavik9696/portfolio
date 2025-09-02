import profile from "../assets/images/myimge.jpg"
import TextType from '../components/TextType';
import KnowledgeBase from './KnowledgeBase'
import Button from "../components/Button";
import { skillsData } from "../data/skillsData";
import SkillCard from "../components/SkillCard";

export default function HomePage() {
  return (
    <div className=" text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-0">
      <section className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Bhavik Rai</span> 👋
          <h1>{" "}</h1>
          <span className=" text-4xl md:text-4xl font-normal text-gray-300 ">
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
        <Button btntext=" Download Resume"/>
      </section>

      {/* Profile Section */}
      <section className="mt-12 text-center">
        <img
          src={profile} 
          alt="Bhavik Rai"
          className="w-36 h-36 rounded-full mx-auto shadow-lg border-4 border-purple-400 object-cover"
        />
        <h2 className="text-2xl font-semibold mt-6">About Me</h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-xl">
          I'm a{" "}
          <span className="text-purple-400 font-medium">
            full-stack developer
          </span>{" "}
          passionate about building scalable web applications and solving
          algorithmic challenges.
          My expertise spans across MERN stack (MongoDB, Express, React, Node.js), REST APIs, and database design. I love crafting performant systems and clean, maintainable code.
        </p>
      </section>

           {/* Skills Section */}
      <section className="mt-12 text-center w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        {/* Languages */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Languages</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {skillsData.languages.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>

        {/* Frameworks */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {skillsData.frameworks.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillsData.tools.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
}
