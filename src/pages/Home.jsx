import profile from "../assets/images/myimageupdated.jpeg";
import TextType from "../components/TextType";
import Button from "../components/Button";
import { skillsData } from "../data/skillsData";
import SkillCard from "../components/SkillCard";
import Aside from "../components/Aside";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import DotsBackground from "../components/DotsBackground";
import CursorGlow from "../components/CursorGlow";

// Icons
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

/* ================= Animated Section ================= */
function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
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

/* ================= Tech Icon ================= */
const TechIcon = ({ Icon }) => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.2 }}
    className="w-14 h-14 flex items-center justify-center rounded-full
               bg-purple-500/10 backdrop-blur-md
               shadow-[0_0_20px_rgba(168,85,247,0.6)]"
  >
    <Icon className="text-purple-400 text-3xl" />
  </motion.div>
);

/* ================= Home Page ================= */
export default function HomePage() {
  return (
    <div className="text-black dark:text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      <DotsBackground />
      <CursorGlow />
      <Aside />

      {/* ================= INTRO ================= */}
      <AnimatedSection delay={0}>
        <section className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-purple-400">Bhavik Rai</span> 👋
          </h1>

          <span className="bg-gray-600 dark:bg-transparent text-black dark:text-gray-300 text-3xl md:text-4xl font-normal px-2 py-1 rounded">
            <TextType
              text={[
                "a MERN Stack Developer",
                "a Problem Solver",
                "always Learning 🚀",
              ]}
              typingSpeed={30}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
            />
          </span>

          <div className="mt-6">
            <Button btntext=" Download Resume" />
          </div>
        </section>
      </AnimatedSection>

      {/* ================= PROFILE ================= */}
      <AnimatedSection delay={0.2}>
        <section className="mt-16 text-center relative w-full max-w-6xl">
          {/* MOBILE ICONS */}
          <div className="flex lg:hidden flex-wrap justify-center gap-5 mb-6">
            <TechIcon Icon={SiReact} />
            <TechIcon Icon={SiNodedotjs} />
            <TechIcon Icon={SiMongodb} />
            <TechIcon Icon={SiExpress} />
            <TechIcon Icon={SiTailwindcss} />
            <TechIcon Icon={SiGithub} />
          </div>

          {/* LEFT CURVED ICONS */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-24 h-64">
              <div className="absolute top-0 left-6">
                <TechIcon Icon={SiReact} />
              </div>
              <div className="absolute top-20 left-0">
                <TechIcon Icon={SiNodedotjs} />
              </div>
              <div className="absolute top-40 left-6">
                <TechIcon Icon={SiMongodb} />
              </div>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <motion.div
            className="inline-block rounded-full border-4 border-purple-400 p-1 relative z-10"
            initial={{ boxShadow: "0 0 0 0 #a78bfa" }}
            animate={{ boxShadow: "0 0 32px 6px #a78bfa" }}
            transition={{
              duration: 1,
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src={profile}
              alt="Bhavik Rai"
              className="w-72 h-72 sm:w-80 sm:h-80 rounded-full
                         object-cover object-top
                         border-4 border-purple-500
                         shadow-[0_0_45px_rgba(168,85,247,0.9)]"
            />
          </motion.div>

          {/* RIGHT CURVED ICONS */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="relative w-24 h-64">
              <div className="absolute top-0 right-6">
                <TechIcon Icon={SiExpress} />
              </div>
              <div className="absolute top-20 right-0">
                <TechIcon Icon={SiTailwindcss} />
              </div>
              <div className="absolute top-40 right-6">
                <TechIcon Icon={SiGithub} />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8">About Me</h2>
          <p className="dark:text-gray-300 mt-4 max-w-xl mx-auto text-xl">
            I'm a{" "}
            <span className="text-purple-400 font-medium">
              full-stack developer
            </span>{" "}
            passionate about building scalable web applications and solving
            algorithmic challenges. I love crafting performant systems and
            clean, maintainable code.
          </p>
        </section>
      </AnimatedSection>

      {/* ================= SKILLS ================= */}
      <AnimatedSection delay={0.4}>
        <section className="mt-20 text-center w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>

          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skillsData.languages.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skillsData.frameworks.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Databases & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {skillsData.tools.map((skill, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <SkillCard {...skill} />
              </AnimatedSection>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mb-4">
            Currently Learning
          </h3>
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
