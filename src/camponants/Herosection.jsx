import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import { motion } from "framer-motion";
import Erow from "../assets/Erow.gif";
import code from "../assets/code.gif";
import Hero from "../assets/Hero.svg";
import resume from "../assets/Ashish_Panwar_Resume.pdf";

function HeroSection() {
  useEffect(() => { Aos.init({ duration: 1000, once: true, offset: 100, easing: "ease-in-out" }); }, []);

  return (
    <motion.section className="h-auto lg:flex overflow-hidden" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      
      <div className="lg:w-1/2 w-full space-y-6 lg:ml-16 lg:mt-10 mt-10 px-5 lg:px-0">
        <h1 className="flex items-center text-4xl lg:text-5xl text-slate-200 tracking-[4px]" data-aos="fade-right">Hi, I Am<img src={Erow} alt="arrow" className="ml-2 w-24 lg:w-26 mt-[-8px]" /></h1>

        <h1 className="text-4xl lg:text-6xl font-poppins text-violet-400" data-aos="fade-left">ASHISH PANWAR</h1>

        <p className="text-xl text-slate-300 font-poppins" data-aos="zoom-in-up">Frontend Developer</p>

        <p className="text-sm lg:text-base text-slate-400 leading-relaxed lg:w-[90%]" data-aos="fade-up">
          Frontend Developer with hands-on experience in building modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, and JavaScript. Passionate about clean UI, performance, and smooth user experiences.
        </p>

        <div className="flex flex-wrap gap-4 pt-4" data-aos="fade-up">
          <a href={resume} download="Ashish_Panwar_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition duration-300">Download Resume</a>
          <a href="#Project" className="px-6 py-3 border border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white rounded-lg transition duration-300">View Projects</a>
        </div>
      </div>

      <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center items-center" data-aos="fade-up-left">
        <img src={code} alt="code" className="w-20 lg:w-24 absolute top-4 left-6 z-20" />
        <img src={Hero} alt="hero" className="w-[80%] lg:w-[85%] scale-x-[-1]" />
      </div>

    </motion.section>
  );
}

export default HeroSection;
