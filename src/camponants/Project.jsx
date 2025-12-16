import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
    title: "Education Website (Samoon)",
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
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="project" className="py-20 px-6 lg:px-20 text-slate-200">
      <h2
        className="text-4xl lg:text-5xl font-bold text-center text-violet-400 mb-16"
        data-aos="fade-down"
      >
        Projects
      </h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col lg:flex-row gap-10 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE / PLACEHOLDER */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-1/2"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-2xl opacity-90 hover:opacity-100 hover:scale-105 transition duration-300"
                />
              ) : (
                <div className="w-full h-64 rounded-2xl bg-slate-900 border border-[#1e2a4a] flex items-center justify-center">
                  <span className="text-slate-400 text-sm">
                    Preview not available
                  </span>
                </div>
              )}
            </a>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 bg-slate-900 rounded-2xl p-8 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 border border-[#1e2a4a]">
              <h3 className="text-2xl font-semibold text-violet-400 mb-4">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {project.desc}
              </p>

              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="px-4 py-1 rounded-full text-sm border border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white transition duration-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
