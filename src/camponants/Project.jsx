import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFolderOpen } from "react-icons/fa";

import Project1 from "../assets/Project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.JPG";

const projects = [
  {
    title: "Student Management System (NGO)",
    link: "https://www.samoonskills.org/sms/",
    image: project3,
    desc: "A complete student data management system developed for NGOs, covering admissions, attendance tracking, course progress monitoring, and payment management with a clean and responsive admin interface.",
    tech: ["PHP", "MySQL", "Tailwind CSS", "HTML"],
  },
  {
    title: "Education Website (NGO)",
    link: "https://samoonsav.netlify.app/",
    image: null,
    desc: "A modern and responsive education platform showcasing NGO initiatives, course offerings, and application forms with a clean UI/UX.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
  },
  {
    title: "Computer Guru Training Institute Website",
    link: "https://demo.computerguru.co.in/",
    image: project3,
    desc: "A full-featured educational website including course listings, enquiry forms, student registration, and admin-side management.",
    tech: ["React", "Tailwind CSS", "PHP", "MySQL"],
  },
  {
    title: "WordPress E-Commerce Website",
    link: "#",
    image: null,
    desc: "WordPress-based eCommerce website with WooCommerce, product management, secure checkout flow, and SEO optimization.",
    tech: ["WordPress", "WooCommerce", "Payments", "SEO"],
  },
  {
    title: "Responsive Hotel Website",
    link: "https://pv-hotal-6c5589.netlify.app/",
    image: Project1,
    desc: "A fully responsive hotel website with modern layout and optimized performance across devices.",
    tech: ["React", "Tailwind CSS", "Netlify"],
  },
  {
    title: "Responsive Yoga Website",
    link: "https://yogni.netlify.app/",
    image: project2,
    desc: "A calm and visually pleasing yoga website with responsive layout and smooth animations.",
    tech: ["React", "Tailwind CSS", "Netlify"],
  },
];

function Project() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="project"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-10 animate-pulse" />

      {/* SAME GRID AS HEADER / HERO / EXPERIENCE */}
      <div className="max-w-7xl mx-auto px-5 lg:px-5 py-16 lg:py-20 relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-3">
            Projects
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 opacity-30" />

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12`}
              >
                {/* CARD */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4 }}
                  className="w-full lg:w-[calc(50%-3rem)] bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-violet-500/50 transition-all"
                >
                  {/* IMAGE / PLACEHOLDER */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                  ) : (
                    <div className="w-full h-56 flex flex-col items-center justify-center bg-slate-900 text-slate-400 text-sm gap-2">
                      <FaFolderOpen className="text-3xl text-violet-400" />
                      Preview not available
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-violet-400 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full border border-violet-400/40 text-violet-400 bg-violet-500/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>

                {/* TIMELINE DOT */}
                <div className="hidden lg:flex w-11 h-11 rounded-full bg-slate-900 border-4 border-violet-500 items-center justify-center z-10">
                  <FaFolderOpen className="text-violet-400 text-base" />
                </div>

                {/* SPACER */}
                <div className="hidden lg:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
