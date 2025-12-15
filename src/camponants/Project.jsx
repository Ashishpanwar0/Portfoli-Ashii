import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Project1 from "../assets/Project1.jpg";   // Hotel
import project2 from "../assets/project2.jpg";   // Yoga
import project3 from "../assets/project3.JPG";   // Student / Computer Guru
import Erow from "../assets/Erow.gif";

const projects = [
  {
    title: "Student Management System (NGO)",
    link: "https://www.samoonskills.org/sms/",
    image: project3,
    desc:
      "A complete student data management system developed for NGOs, covering admissions, attendance tracking, course progress monitoring, and payment management with a clean and responsive admin interface.",
    tech: ["PHP", "MySQL", "Tailwind CSS", "HTML", "Font Awesome"],
  },
  {
    title: "Education Website (Samoon)",
    link: "https://samoonsav.netlify.app/",
    image: null,
    desc:
      "A modern and responsive education platform showcasing NGO initiatives, course offerings, and application forms. Focused on clean UI/UX, component-based structure, and performance optimization.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
  },
  {
    title: "Computer Guru Training Institute Website",
    link: "https://demo.computerguru.co.in/",
    image: project3,
    desc:
      "A full-featured educational website including course listings, enquiry forms, student registration, and admin-side management. Built with a scalable frontend and backend integrations.",
    tech: ["React", "Tailwind CSS", "MySQL", "PHP"],
  },
  {
    title: "WordPress E-Commerce Website",
    link: "#",
    image: null,
    desc:
      "Developed WordPress-based eCommerce websites (StyleNest & Men's Clothing) with WooCommerce, product management, secure checkout flow, and SEO optimization.",
    tech: ["WordPress", "WooCommerce", "Payments", "SEO"],
  },
  {
    title: "Responsive Hotel Website",
    link: "https://pv-hotal-6c5589.netlify.app/",
    image: Project1,
    desc:
      "A fully responsive hotel website with a modern layout, smooth navigation, and optimized performance across all devices.",
    tech: ["React", "Tailwind CSS", "Netlify", "GitHub"],
  },
  {
    title: "Responsive Yoga Website",
    link: "https://yogni.netlify.app/",
    image: project2,
    desc:
      "A calm and visually pleasing yoga website designed with a responsive layout, smooth animations, and user-friendly sections.",
    tech: ["React", "Tailwind CSS", "Netlify", "GitHub"],
  },
];

function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="Project">
      {/* Heading */}
      <div
        className="text-center text-5xl mb-5 text-[#A78BFA] lg:mt-10 mt-10"
        data-aos="fade-down"
      >
        <h1>Projects</h1>
      </div>

      {/* Projects List */}
      <div className="mt-15 space-y-14">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:flex lg:gap-x-36 w-full items-center"
            data-aos="fade-up"
          >
            {/* LEFT IMAGE / PLACEHOLDER */}
            {project.image ? (
              <a href={project.link} target="_blank" className="lg:ml-15">
                <img
                  src={project.image}
                  alt={project.title}
                  className="lg:w-[400px] w-[94%] ml-3 lg:ml-0 rounded-xl
                             opacity-90 hover:opacity-60 transition duration-300"
                />
              </a>
            ) : (
              <div className="lg:w-[400px] w-[94%] ml-3 lg:ml-15 bg-[#183656] py-20 rounded-xl text-center">
                <h2 className="text-xl text-[#A78BFA] font-semibold">
                  {project.title}
                </h2>
              </div>
            )}

            {/* Arrow */}
            <img
              src={Erow}
              alt=""
              className="w-32 h-20 absolute lg:block hidden lg:ml-117"
            />

            {/* RIGHT CONTENT */}
            <div
              className="
                text-slate-300
                lg:w-[50%]
                border border-[#1e2a4a]
                hover:border-[#A78BFA]
                hover:bg-[#162447]
                transition-all duration-300 ease-in-out
                px-6 py-4 rounded-xl
              "
            >
              <h2 className="text-2xl text-[#A78BFA] mb-3 hover:text-[#C4B5FD] transition">
                {project.title}
              </h2>

              <p className="mb-6 text-sm leading-relaxed tracking-wide text-slate-400">
                {project.desc}
              </p>

              <ul className="grid lg:grid-cols-4 grid-cols-2 gap-4">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="
                      border border-[#9988FB]
                      bg-[#183656]
                      text-[#4EC1C6]
                      py-1 rounded-xl text-center
                      hover:bg-[#1f3b5f]
                      hover:text-[#7dd3fc]
                      transition
                    "
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
