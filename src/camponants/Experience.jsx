import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      time: "2024 - Present",
      title: "Office Assistant - Samoon Foundation (NGO)",
      desc: "Managed digital and administrative operations, including documentation, email communication, and daily office tasks. Maintained and updated the organization's website, ensuring smooth functionality and accurate content. Supported online activities such as Google Ads campaigns, social media posting, and outreach initiatives.",
      skills: ["Google Ads", "WordPress", "Canva", "AI Tools", "Documentation", "Volunteer Coordination"],
    },
    {
      time: "2024 - Present",
      title: "MERN Stack Developer - Intern (Nimokey.com)",
      desc: "Working on scalable web applications using MERN stack. Developing React components, handling API integration, authentication flows, and dashboard features. Collaborating via GitHub in Agile workflow.",
      skills: ["React", "JavaScript", "APIs", "GitHub", "Dashboard UI"],
    },
    {
      time: "Apr 2025 - Jun 2025",
      title: "Full-Stack Developer - Intern (Nova Nectar Services Pvt. Ltd.)",
      desc: "Built full-stack web applications with responsive UI and secure APIs. Worked in Agile sprints, handled version control, and assisted in deployment workflows.",
      skills: ["React", "PHP", "MySQL", "APIs", "GitHub"],
    },
  ];

  return (
    <section
      id="experience"
      className="
        py-16 lg:py-20
        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950
        relative overflow-hidden
      "
    >
      {/* Background glow (same theme) */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-violet-600 rounded-full blur-3xl opacity-10 animate-pulse" />

      {/* 🔑 SAME CONTAINER AS HEADER & HERO */}
      <div className="max-w-7xl mx-auto px-5 lg:px-5 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-3">
            Experience
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:gap-12`}
              >
                {/* Card */}
                <motion.div
                  className="w-full lg:w-[calc(50%-3rem)] bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 lg:p-7 border border-slate-800 hover:border-violet-500/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <span className="inline-flex items-center gap-2 text-xs text-violet-400 bg-violet-500/10 px-3 py-1.5 rounded-full border border-violet-500/30">
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                    {exp.time}
                  </span>

                  <h3 className="text-lg font-semibold text-white mt-4 mb-2 hover:text-violet-400 transition">
                    {exp.title}
                  </h3>

                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs border border-violet-400/50 text-violet-400 bg-violet-500/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden lg:flex w-11 h-11 rounded-full bg-slate-900 border-4 border-violet-500 items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <FaBriefcase className="text-violet-400 text-base" />
                </motion.div>

                {/* Spacer */}
                <div className="hidden lg:block w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
