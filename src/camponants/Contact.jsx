import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Contlogo from "../assets/Contlogo.svg";
import ContactMassege from "../assets/ContactMassege.gif";
import resume from "../assets/Ashish_Panwar_Resume.pdf";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* background glow (same theme) */}
      <div className="absolute top-24 right-10 w-64 h-64 bg-violet-600 blur-3xl opacity-10" />
      <div className="absolute bottom-24 left-10 w-64 h-64 bg-purple-600 blur-3xl opacity-10" />

      {/* 🔑 SAME START & END AS HEADER */}
      <div className="max-w-7xl mx-auto px-5 lg:px-5 py-16 lg:py-20 relative z-10">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent mb-3">
            Contact
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT IMAGE — HEADER LOGO KE SATH ALIGN */}
          <div
            className="hidden lg:flex lg:w-1/2 justify-start"
            data-aos="fade-right"
          >
            <img
              src={Contlogo}
              alt="contact"
              className="w-[85%] max-w-md scale-x-[-1]"
            />
          </div>

          {/* FORM */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
          >
            <form className="bg-slate-900/80 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-slate-800">

              {/* ICON PROPERLY RENDER */}
              <h3 className="flex items-center justify-center lg:justify-start gap-3 text-2xl lg:text-3xl font-semibold text-violet-400 mb-8">
                Contact Me
                <img
                  src={ContactMassege}
                  alt="message"
                  className="w-10 lg:w-12"
                />
              </h3>

              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-transparent border-b border-slate-700 text-slate-200 px-2 py-3 focus:border-violet-400 focus:outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent border-b border-slate-700 text-slate-200 px-2 py-3 focus:border-violet-400 focus:outline-none transition"
                />

                <textarea
                  rows="4"
                  placeholder="Enter Message"
                  className="w-full bg-transparent border-b border-slate-700 text-slate-200 px-2 py-3 resize-none focus:border-violet-400 focus:outline-none transition"
                />
              </div>

              <div className="flex flex-wrap gap-4 pt-8">
                <button
                  type="submit"
                  className="px-7 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg text-sm font-medium shadow-md shadow-violet-500/30 hover:shadow-violet-500/50 transition-all"
                >
                  Submit Here
                </button>

                <a
                  href={resume}
                  download
                  className="px-7 py-3 border border-violet-400 text-violet-400 rounded-lg text-sm font-medium hover:bg-violet-500/10 transition-all"
                >
                  Download Resume
                </a>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-slate-800 mt-10">
  <div className="max-w-7xl mx-auto px-5 py-4
                  flex flex-col sm:flex-row
                  items-center justify-between
                  gap-2 text-sm text-slate-400">

    <p>
      © {new Date().getFullYear()} Ashish Panwar
    </p>

    <div className="flex gap-4">
      <a
        href="#"
        className="hover:text-violet-400 transition"
      >
        Terms & Conditions
      </a>

      <span className="hidden sm:block">|</span>

      <a
        href="mailto:ashishpanwar2004@gmail.com"
        className="hover:text-violet-400 transition"
      >
        ashupanwar5684@gmail.com
      </a>
    </div>
  </div>
</div>

    </section>
  );
}

export default Contact;
