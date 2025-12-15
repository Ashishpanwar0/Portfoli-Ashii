import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Erow from "../assets/Erow.gif";
import code from "../assets/code.gif";
import Hero from "../assets/Hero.svg";
import { motion } from "framer-motion";

function HeroSection() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <motion.section
      className="h-auto lg:flex overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 w-full lg:ml-16 lg:mt-28 mt-8 ml-5">
        <h1
          className="flex text-4xl lg:text-5xl text-slate-200 tracking-[4px]"
          data-aos="fade-right"
        >
          Hi, I Am
          <img src={Erow} alt="" className="mt-[-10px] ml-2 w-30" />
        </h1>

        <h1
          className="text-5xl lg:text-6xl text-violet-400 font-poppins"
          data-aos="fade-left"
        >
          ASHISH PANWAR
        </h1>

        <p
          className="text-xl text-slate-300 font-poppins"
          data-aos="zoom-in-up"
        >
          Frontend Developer
        </p>

        <p
          className="text-sm lg:text-base text-slate-400 leading-relaxed lg:w-[90%]"
          data-aos="fade-up"
        >
          Frontend Developer with hands-on experience in building modern,
          responsive, and user-friendly web applications using React.js,
          Tailwind CSS, and JavaScript. Passionate about clean UI, performance,
          and smooth user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 pt-4" data-aos="fade-up">
          <a
             href={resume} download="Ashish_Panwar_Resume.pdf" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition"
          >
            Download Resume
          </a>
          <a
            href="#Project"
            className="px-6 py-3 border border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white rounded-lg transition"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center"
        data-aos="fade-up-left"
      >
        <img
          src={code}
          alt=""
          className="w-24 absolute top-5 left-10 z-20 animate-bounce"
        />
        <img src={Hero} alt="" className="w-[85%] scale-x-[-1]" />
      </div>
    </motion.section>
  );
}

export default HeroSection;
