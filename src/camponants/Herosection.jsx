import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { motion, AnimatePresence } from "framer-motion";
import Erow from "../assets/Erow.gif";
import code from "../assets/code.gif";
import Hero from "../assets/Hero.svg";
import resume from "../assets/Ashish_Panwar_Resume.pdf";

const roles = [
  "Frontend Developer",
  "UI / UX Designer",
  "Administrative & IT Support Executive",
];

function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 100,
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        overflow-hidden
      "
    >
      {/* SAME BACKGROUND GLOWS AS OTHER SECTIONS */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-24 right-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse" />

      {/* SAME GRID & HEIGHT SYSTEM */}
      <motion.div
        className="
          max-w-7xl mx-auto
          px-5 lg:px-5
          py-16 lg:py-20
          flex flex-col lg:flex-row
          items-center
          gap-10 lg:gap-12
        "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="flex items-center justify-center lg:justify-start text-3xl lg:text-4xl text-slate-200 tracking-wide">
            Hi, I Am
            <img
              src={Erow}
              alt="arrow"
              className="ml-2 w-16 lg:w-18 mt-[-4px]"
            />
          </h1>

          <h1 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
            ASHISH PANWAR
          </h1>

          {/* ROTATING ROLE */}
          <div className="h-8 flex justify-center lg:justify-start overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4 }}
                className="text-base lg:text-lg text-violet-300 font-medium"
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm lg:text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Frontend Developer with hands-on experience in building modern,
            responsive, and user-friendly web applications using{" "}
            <span className="text-violet-400 font-medium">React.js</span>,{" "}
            <span className="text-violet-400 font-medium">Tailwind CSS</span>, and{" "}
            <span className="text-violet-400 font-medium">JavaScript</span>.
            Also experienced in administrative and IT support operations.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <a
              href={resume}
              download
              className="px-7 py-2.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg text-sm font-medium shadow-md shadow-violet-500/30 hover:shadow-violet-500/50 transition-all"
            >
              Download Resume
            </a>

            <a
              href="#project"
              className="px-7 py-2.5 border border-violet-400 text-violet-400 rounded-lg text-sm font-medium hover:bg-violet-500/10 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src={code}
            alt="code"
            className="w-14 lg:w-16 absolute top-2 left-8 z-20 animate-bounce"
          />

          <img
            src={Hero}
            alt="hero"
            className="w-[75%] max-w-md lg:max-w-lg scale-x-[-1]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
