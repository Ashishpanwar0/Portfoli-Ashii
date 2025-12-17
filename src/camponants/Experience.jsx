import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => { Aos.init({ duration: 1000, once: true, offset: 120, easing: "ease-in-out" }); }, []);

  const experiences = [
    { time: "2024 - Present", title: "Office Assistant - Samoon Foundation (NGO)", desc: "Managed digital and administrative operations, including documentation, email communication, and daily office tasks. Maintained and updated the organization’s website, ensuring smooth functionality and accurate content. Supported online activities such as Google Ads campaigns, social media posting, and outreach initiatives. Assisted in NGO program coordination, volunteer management, and provided overall administrative support to improve operational efficiency.", skills: ["Google Ads","WordPress","Canva","AI Tools","Documentation","Volunteer Coordination","Accounting Support"] },
    
    { time: "2024 - Present", title: "MERN Stack Developer - Intern (Nimokey.com)", desc: "Working on scalable web applications using MERN stack. Developing React components, handling API integration, authentication flows, and dashboard features. Collaborating via GitHub in Agile workflow.", skills: ["React","JavaScript","APIs","GitHub","Dashboard UI"] },
    
    { time: "Apr 2025 - Jun 2025", title: "Full-Stack Developer - Intern (Nova Nectar Services Pvt. Ltd.)", desc: "Built full-stack web applications with responsive UI and secure APIs. Worked in Agile sprints, handled version control, and assisted in deployment workflows.", skills: ["React","PHP","MySQL","APIs","GitHub"] },
  ];

  return (
    <section id="experience" className="px-6 lg:px-20  text-slate-200">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-violet-400 mb-16" data-aos="fade-up">Experience</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} className="bg-slate-900 rounded-2xl p-8 border border-[#1e2a4a] hover:bg-slate-800 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition duration-300">
            
            <span className="inline-block text-xs tracking-wider text-slate-400 bg-slate-800 px-3 py-1 rounded-full">{exp.time}</span>

            <h3 className="text-xl font-semibold text-slate-100 mt-4">{exp.title}</h3>

            <p className="text-sm text-slate-400 mt-4 leading-relaxed text-justify">{exp.desc}</p>

            <ul className="flex flex-wrap gap-3 mt-6">
              {exp.skills.map((skill, i) => (
                <li key={i} className="px-4 py-1 rounded-full text-sm border border-violet-400 text-violet-400 hover:bg-violet-500 hover:text-white transition duration-300">{skill}</li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
