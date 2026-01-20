import React, { useState } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub,
  FaWordpress, FaGoogle, FaFileExcel, FaNodeJs, FaPhp, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiCanva, SiNetlify, SiMysql, SiMongodb, SiExpress
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

import computerguru from "../assets/computerguru.png";
import uou from "../assets/uou_small.png";
import saraswati from "../assets/saraswati.png";

const skills = [
  { name: "React.js", icon: FaReact },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNodeJs },
  { name: "PHP", icon: FaPhp },
  { name: "MySQL / SQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "WordPress", icon: FaWordpress },
  { name: "Google Ads", icon: FaGoogle },
  { name: "MS Excel / Office", icon: FaFileExcel },
  { name: "Canva", icon: SiCanva },
  { name: "Netlify", icon: SiNetlify },
  { name: "Database Management", icon: FaDatabase },
];

const education = [
  { img: uou, title: "Bachelor of Arts", desc: "Uttarakhand Open University · 2021–2024" },
  { img: uou, title: "Diploma in Information Technology", desc: "Uttarakhand Open University · 2025–2026 (Ongoing)" },
  { img: computerguru, title: "Diploma in Web Development", desc: "Computer Guru Training Institute · 2024–2025 (1 Year)" },
  { img: saraswati, title: "12th Standard", desc: "Saraswati Vidhya Mandir · 2021" },
];

const certifications = [
  { title: "SOAR – AI to Aspire 4 (HCL Technologies)", desc: "Completed 15-hour certified skill program under NCVET · 2025" },
  { title: "SOAR – AI to Aspire 4 (Microsoft Technologies)", desc: "Completed 15-hour certified skill program under NCVET · 2025" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-10 animate-pulse" />

      {/* SAME GRID AS HERO & EXPERIENCE */}
      <div className="max-w-7xl mx-auto px-5 lg:px-5 py-16 lg:py-20 relative z-10">
        
        {/* HEADING (same as Experience) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-3">
            About Me
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* DESCRIPTION */}
        <p className="text-slate-400 max-w-4xl mx-auto mb-12 text-center leading-relaxed text-sm lg:text-base">
          A Full-Stack Developer with experience in building responsive web
          applications using <span className="text-violet-400 font-medium">React</span>,{" "}
          <span className="text-violet-400 font-medium">PHP</span>,{" "}
          <span className="text-violet-400 font-medium">Node.js</span>, and{" "}
          <span className="text-violet-400 font-medium">MySQL</span>.
          Skilled in frontend, backend, digital tools, and office management.
        </p>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12">
          {["skills", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === tab
                  ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white"
                  : "border border-violet-400 text-violet-400 hover:bg-violet-500/10"
              }`}
            >
              {tab === "skills" ? "Skills & Tools" : "Education & Certifications"}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6
                               border border-slate-800 hover:border-violet-500/50
                               transition-all hover:-translate-y-1 text-center"
                  >
                    <Icon className="text-4xl text-violet-400 mx-auto mb-3" />
                    <p className="text-sm text-slate-300">{skill.name}</p>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* EDUCATION */}
              <div>
                <h3 className="text-xl font-semibold text-violet-400 mb-6">Education</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {education.map((edu, i) => (
                    <div
                      key={i}
                      className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6
                                 border border-slate-800 hover:border-violet-500/50 transition"
                    >
                      <div className="flex items-center gap-4">
                        <img src={edu.img} alt={edu.title} className="w-12 h-12 object-contain" />
                        <div>
                          <h4 className="text-white font-medium">{edu.title}</h4>
                          <p className="text-slate-400 text-sm">{edu.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div>
                <h3 className="text-xl font-semibold text-violet-400 mb-6">Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6
                                 border border-slate-800 hover:border-violet-500/50 transition"
                    >
                      <h4 className="text-white font-medium mb-2">{cert.title}</h4>
                      <p className="text-slate-400 text-sm">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
