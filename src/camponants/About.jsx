import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaWordpress, FaGoogle, FaFileExcel, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiNetlify, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import computerguru from "../assets/computerguru.png";
import uou from "../assets/uou_small.png";
import saraswati from "../assets/saraswati.png";

const skills = [
  { name: "React.js", icon: FaReact }, { name: "JavaScript", icon: FaJsSquare }, { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss }, { name: "Node.js", icon: FaNodeJs }, { name: "PHP", icon: FaPhp }, { name: "MySQL / SQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb }, { name: "Express.js", icon: SiExpress }, { name: "Git", icon: FaGitAlt }, { name: "GitHub", icon: FaGithub },
  { name: "WordPress", icon: FaWordpress }, { name: "Google Ads", icon: FaGoogle }, { name: "MS Excel / Office", icon: FaFileExcel },
  { name: "Canva", icon: SiCanva }, { name: "Netlify", icon: SiNetlify }, { name: "Database Management", icon: FaDatabase },
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
    <section id="about" className="py-20 px-5 lg:px-20 text-white">
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-4 animate-fade-in">About Me</h2>

      <p className="text-slate-400 max-w-6xl mx-auto mb-12 animate-fade-in delay-200 text-justify">
        A Full-Stack Developer with experience in building responsive web applications using React, PHP, Node.js, and MySQL. Skilled in frontend, backend, digital tools, and office management. Fast learner and problem-solver ready for full-time or internship roles.
      </p>

      <div className="flex justify-center gap-4 mb-12 animate-slide-up">
        <button onClick={() => setActiveTab("skills")} className={`px-6 py-2 rounded-lg transition ${activeTab === "skills" ? "bg-violet-500 text-white" : "border border-violet-400 text-violet-400"} hover:bg-violet-600`}>Skills & Tools</button>
        <button onClick={() => setActiveTab("education")} className={`px-6 py-2 rounded-lg transition ${activeTab === "education" ? "bg-violet-500 text-white" : "border border-violet-400 text-violet-400"} hover:bg-violet-600`}>Education & Certifications</button>
      </div>

      {activeTab === "skills" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="bg-slate-900 rounded-xl p-6 flex flex-col items-center hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 ease-in-out animate-fade-in border border-[#1e2a4a]" style={{ animationDelay: `${i * 100}ms` }}>
                <Icon className="text-4xl text-violet-400 mb-3 animate-spin-slow" />
                <p className="text-sm text-center">{skill.name}</p>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === "education" && (
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-violet-400 mb-6 animate-fade-in">Education</h3>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {education.map((edu, i) => (
              <div key={i} className="bg-slate-900 rounded-xl p-6 flex items-center gap-4 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 border border-[#1e2a4a]" style={{ animationDelay: `${i * 150}ms` }}>
                <img src={edu.img} alt={edu.title} className="w-16 h-16 object-contain rounded-full animate-fade-in" />
                <div><h4 className="font-semibold">{edu.title}</h4><p className="text-slate-400 text-sm">{edu.desc}</p></div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-violet-400 mb-6 animate-fade-in delay-300">Certifications</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-slate-900 rounded-xl p-6 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 ease-in-out animate-slide-up border border-[#1e2a4a]" style={{ animationDelay: `${(i + education.length) * 150}ms` }}>
                <h4 className="font-semibold">{cert.title}</h4>
                <p className="text-slate-400 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
