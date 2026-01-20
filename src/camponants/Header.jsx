import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github-icon-2.svg";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="w-full relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-5 lg:px-5 h-20 flex items-center justify-between">
        
        {/* LOGO (FIXED SIZE – HEADER FRIENDLY) */}
        <img
          src={logo}
          alt="logo"
          className="h-30 w-35 lg:h-40 lg:w-50 cursor-pointer hover:scale-105 transition
                     lg:ml-[-30px] ml-[-20px]"
        />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-12 text-slate-300 text-sm font-medium">
          <a href="#home" className="hover:text-violet-400 transition">Home</a>
          <a href="#about" className="hover:text-violet-400 transition">About</a>
          <a href="#experience" className="hover:text-violet-400 transition">Experience</a>
          <a href="#project" className="hover:text-violet-400 transition">Project</a>
          <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ashishpanwar2004/"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center
                       rounded-full border border-violet-500/30
                       hover:border-violet-400 hover:bg-violet-500/10
                       transition"
          >
            <img src={linkedin} alt="linkedin" className="w-5" />
          </a>

          <a
            href="https://github.com/Ashishpanwar0"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 flex items-center justify-center
                       rounded-full border border-violet-500/30
                       hover:border-violet-400 hover:bg-violet-500/10
                       transition"
          >
            <img src={github} alt="github" className="w-5" />
          </a>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center
                       rounded-full border border-violet-500/30
                       text-slate-300 text-xl
                       hover:text-violet-400 hover:bg-violet-500/10 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 px-5 py-4 space-y-3 text-slate-300">
          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-violet-400">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block hover:text-violet-400">About</a>
          <a href="#experience" onClick={() => setOpen(false)} className="block hover:text-violet-400">Experience</a>
          <a href="#project" onClick={() => setOpen(false)} className="block hover:text-violet-400">Project</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-violet-400">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
