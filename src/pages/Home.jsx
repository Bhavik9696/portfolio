import profile from "../assets/images/myimageupdated.jpeg"
import TextType from '../components/TextType';
import Button from "../components/Button";
import { skillsData } from "../data/skillsData";
import SkillCard from "../components/SkillCard";
import Aside from "../components/Aside";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DotsBackground from "../components/DotsBackground"; 
import CursorGlow from "../components/CursorGlow";

// Reusable Animated Section Component
function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60,scale: 0.95 },
    visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="text-black dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 relative z-0 overflow-hidden">
      <DotsBackground />
      <CursorGlow />
      <Aside />

      {/* Intro Section */}
      <AnimatedSection delay={0}>
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-purple-400">Bhavik Rai</span> 👋
            <h1>{" "}</h1>
            <span className="bg-gray-600 text-black dark:bg-transparent dark:text-gray-300 text-4xl md:text-4xl font-normal">
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
      </AnimatedSection>

      {/* Profile Section */}
      <AnimatedSection delay={0.2}>
        <section className="mt-12 text-center">
          <motion.div
            className="inline-block rounded-full border-4 border-purple-400 p-1"
            initial={{ boxShadow: "0 0 0 0 #a78bfa" }}
            animate={{ boxShadow: "0 0 24px 4px #a78bfa" }}
            transition={{ duration: 0.8, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          >
            <img
              src={profile}
              alt="Bhavik Rai"
              className="w-40 h-40 rounded-full object-cover"
            />
          </motion.div>
          <h2 className="text-2xl font-semibold mt-6">About Me</h2>
          <p className="dark:text-gray-300 mt-3 max-w-xl mx-auto text-xl">
            I'm a{" "}
            <span className="text-purple-400 font-medium">
              full-stack developer
            </span>{" "}
            passionate about building scalable web applications and solving
            algorithmic challenges. My expertise spans across MERN stack (MongoDB, Express, React, Node.js), REST APIs, and database design. I love crafting performant systems and clean, maintainable code.
          </p>
        </section>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
        <section className="mt-12 text-center w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skillsData.languages.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>

          {/* Frameworks */}
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Frameworks & Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skillsData.frameworks.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>

          {/* Tools */}
          <h3 className="text-xl font-semibold text-purple-400 mb-4">Databases & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.tools.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>




          <h3 className="text-xl font-semibold text-purple-400 mb-4">Currently Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.CurrentlyLearning.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
