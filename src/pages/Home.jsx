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

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

/* ─── CSS Variables (inject once via a style tag or global CSS) ─── */
const globalStyles = `
  :root {
    --gold-100: #fff8e1;
    --gold-300: #ffd54f;
    --gold-400: #ffca28;
    --gold-500: #ffc107;
    --gold-600: #ffb300;
    --gold-900: #7a5700;
    --black:    #050505;
    --black-80: rgba(5,5,5,0.80);
    --glass-bg: rgba(255, 195, 7, 0.06);
    --glass-border: rgba(255, 195, 7, 0.22);
    --glass-shadow: 0 8px 40px rgba(255, 180, 0, 0.18);
  }

  /* ── Glassmorphism card ── */
  .glass {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(18px) saturate(1.4);
    -webkit-backdrop-filter: blur(18px) saturate(1.4);
    box-shadow: var(--glass-shadow);
    border-radius: 1rem;
  }

  /* ── Gold glow text ── */
  .gold-text {
    color: var(--gold-400);
    text-shadow: 0 0 18px rgba(255, 193, 7, 0.55);
  }

  /* ── Animated gold underline ── */
  .gold-line::after {
    content: '';
    display: block;
    margin: 0.35rem auto 0;
    width: 3rem;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold-500), transparent);
  }

  /* ── Background radial shimmer ── */
  .gold-radial {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.12;
    pointer-events: none;
  }
`;

/* ─── Inject global styles ─── */
function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: globalStyles }} />;
}

/* ─── Animated Section ─── */
function AnimatedSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay, duration: 0.65, ease: "easeOut" },
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

/* ─── Tech Icon ─── */
const TechIcon = ({ Icon }) => (
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.25, rotate: 6 }}
    className="w-14 h-14 flex items-center justify-center rounded-full glass"
    style={{
      boxShadow:
        "0 0 22px rgba(255,193,7,0.45), inset 0 0 8px rgba(255,193,7,0.1)",
    }}
  >
    <Icon style={{ color: "var(--gold-400)", fontSize: "1.7rem" }} />
  </motion.div>
);

/* ─── Section Heading ─── */
const SectionHeading = ({ children }) => (
  <h2
    className="text-2xl font-semibold mb-6 gold-line tracking-wide uppercase"
    style={{
      fontFamily: "'Cinzel', serif",
      color: "var(--gold-300)",
      letterSpacing: "0.12em",
      textShadow: "0 0 20px rgba(255,193,7,0.4)",
    }}
  >
    {children}
  </h2>
);

const SubHeading = ({ children }) => (
  <h3
    className="text-lg font-semibold mb-4"
    style={{
      fontFamily: "'Cinzel', serif",
      color: "var(--gold-500)",
      letterSpacing: "0.08em",
      textShadow: "0 0 12px rgba(255,193,7,0.35)",
    }}
  >
    {children}
  </h3>
);

/* ─── Home Page ─── */
export default function HomePage() {
  return (
    <>
      {/* Google Font — Cinzel (display) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />

      <div
        className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden"
        style={{
          background: "var(--black)",
          color: "#f0e6c8",
          fontFamily: "'Lato', sans-serif",
        }}
      >
        {/* ── Background shimmer blobs ── */}
        <div
          className="gold-radial"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, #ffc107, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="gold-radial"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, #ffb300, transparent 70%)",
            bottom: "5%",
            right: "-5%",
            opacity: 0.09,
          }}
        />

        <DotsBackground />
        <CursorGlow />
        <Aside />

        {/* ── INTRO ── */}
        <AnimatedSection delay={0}>
          <section className="text-center max-w-3xl">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.04em" }}
            >
              Hi, I'm{" "}
              <span
                className="gold-text"
                style={{
                  background: "linear-gradient(135deg, #ffd54f, #ff8f00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Bhavik Rai
              </span>{" "}
              👋
            </h1>

            {/* Typewriter badge */}
            <div
              className="glass inline-block px-5 py-2 mt-2"
              style={{ borderRadius: "0.6rem" }}
            >
              <span
                className="text-2xl md:text-3xl font-light"
                style={{ color: "var(--gold-100)" }}
              >
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
            </div>

            <div className="mt-8">
              {/* Pass a className or style prop if Button supports it */}
              <Button
                btntext="⬇ Download Resume"
                style={{
                  background: "linear-gradient(135deg, #ffc107, #ff8f00)",
                  color: "#0a0a0a",
                  fontWeight: 700,
                  border: "none",
                  boxShadow: "0 0 24px rgba(255,193,7,0.5)",
                  letterSpacing: "0.06em",
                  fontFamily: "'Cinzel', serif",
                }}
              />
            </div>
          </section>
        </AnimatedSection>

        {/* ── PROFILE ── */}
        <AnimatedSection delay={0.2}>
          <section className="mt-20 text-center relative w-full max-w-6xl">
            {/* MOBILE ICONS */}
            <div className="flex lg:hidden flex-wrap justify-center gap-5 mb-8">
              <TechIcon Icon={SiReact} />
              <TechIcon Icon={SiNodedotjs} />
              <TechIcon Icon={SiMongodb} />
              <TechIcon Icon={SiExpress} />
              <TechIcon Icon={SiTailwindcss} />
              <TechIcon Icon={SiGithub} />
            </div>

            {/* LEFT ICONS */}
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
              className="inline-block rounded-full p-[3px] relative z-10"
              style={{
                background:
                  "linear-gradient(135deg, #ffd54f, #ff8f00, #ffd54f)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px 4px rgba(255,193,7,0.4)",
                  "0 0 48px 12px rgba(255,193,7,0.7)",
                  "0 0 20px 4px rgba(255,193,7,0.4)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div
                className="p-1 rounded-full"
                style={{ background: "var(--black)" }}
              >
                <img
                  src={profile}
                  alt="Bhavik Rai"
                  className="w-72 h-72 sm:w-80 sm:h-80 rounded-full object-cover object-top"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(255,193,7,0.25)",
                  }}
                />
              </div>
            </motion.div>

            {/* RIGHT ICONS */}
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

            {/* ABOUT */}
            <div className="glass mt-10 mx-auto max-w-xl px-8 py-6">
              <SectionHeading>About Me</SectionHeading>
              <p
                style={{
                  color: "#d4c08a",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                }}
              >
                I'm a{" "}
                <span className="gold-text font-semibold">
                  full-stack developer
                </span>{" "}
                passionate about building scalable web applications and solving
                algorithmic challenges. I love crafting performant systems and
                clean, maintainable code.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* ── SKILLS ── */}
        <AnimatedSection delay={0.4}>
          <section className="mt-24 text-center w-full max-w-5xl">
            <SectionHeading>Skills</SectionHeading>

            {/* Languages */}
            <div className="glass mb-10 px-6 py-8">
              <SubHeading>Languages</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillsData.languages.map((skill, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <SkillCard {...skill} />
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="glass mb-10 px-6 py-8">
              <SubHeading>Frameworks & Libraries</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillsData.frameworks.map((skill, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <SkillCard {...skill} />
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass mb-10 px-6 py-8">
              <SubHeading>Databases & Tools</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillsData.tools.map((skill, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <SkillCard {...skill} />
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Currently Learning */}
            <div className="glass px-6 py-8">
              <SubHeading>Currently Learning</SubHeading>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillsData.CurrentlyLearning.map((skill, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <SkillCard {...skill} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </>
  );
}
