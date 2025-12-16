import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Project1 from "../assets/Project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.JPG";
import Erow from "../assets/Erow.gif";

const projects = [
  { title: "Student Management System (NGO)", link: "https://www.samoonskills.org/sms/", image: project3, desc: "A complete student data management system developed for NGOs, covering admissions, attendance tracking, course progress monitoring, and payment management with a clean and responsive admin interface.", tech: ["PHP","MySQL","Tailwind CSS","HTML","Font Awesome"] },
  { title: "Education Website (Samoon)", link: "https://samoonsav.netlify.app/", image: null, desc: "A modern and responsive education platform showcasing NGO initiatives, course offerings, and application forms with a clean UI/UX.", tech: ["React","Tailwind CSS","JavaScript","Netlify"] },
  { title: "Computer Guru Training Institute Website", link: "https://demo.computerguru.co.in/", image: project3, desc: "A full-featured educational website including course listings, enquiry forms, student registration, and admin-side management.", tech: ["React","Tailwind CSS","MySQL","PHP"] },
  { title: "WordPress E-Commerce Website", link: "#", image: null, desc: "WordPress-based eCommerce websites with WooCommerce, product management, secure checkout flow, and SEO optimization.", tech: ["WordPress","WooCommerce","Payments","SEO"] },
  { title: "Responsive Hotel Website", link: "https://pv-hotal-6c5589.netlify.app/", image: Project1, desc: "A fully responsive hotel website with modern layout and optimized performance across devices.", tech: ["React","Tailwind CSS","Netlify","GitHub"] },
  { title: "Responsive Yoga Website", link: "https://yogni.netlify.app/", image: project2, desc: "A calm and visually pleasing yoga website with responsive layout and smooth animations.", tech: ["React","Tailwind CSS","Netlify","GitHub"] },
];

function Project() {
  useEffect(() => { Aos.init({ duration: 1000, once: true, offset: 100, easing: "ease-in-out" }); }, []);

  return (
    <section id="Project" className="py-20 px-6 lg:px-20 text-slate-200">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-violet-400 mb-16" data-aos="fade-down">Projects</h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" className={`flex flex-col lg:flex-row gap-10 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>

            {project.image ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full lg:w-1/2">
                <img src={project.image} alt={project.title} className="w-full rounded-2xl opacity-90 hover:opacity-100 hover:scale-105 transition duration-300" />
              </a>
            ) : (
              <div className="w-full lg:w-1/2 bg-slate-900 rounded-2xl flex items-center justify-center h-64">
                <h3 className="text-xl font-semibold text-violet-400 text-center px-4">{project.title}</h3>
              </div>
            )}

            <div className="w-full lg:w-1/2 bg-slate-900 rounded-2xl p-8 hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300 border border-[#1e2a4a]">
              <h3 className="text-2xl font-semibold text-violet-400 mb-4">{project.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.desc}</p>
              <ul className="flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <li key={i} className="px-4 py-1 rounded-full text-sm border border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white transition duration-300">{tech}</li>
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
