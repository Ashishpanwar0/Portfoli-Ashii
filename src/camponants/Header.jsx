import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github-icon-2.svg";

function Header() {
  const [open, setOpen] = useState(false);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 lg:py-10 h-30 flex items-center justify-between">

        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          className="h-45 w-45 cursor-pointer hover:scale-105 transition lg:ml-[-30px] ml-[-20px]"
        />

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-20 text-slate-300">
          <a href="#home" className="hover:text-violet-400">Home</a>
          <a href="#about" className="hover:text-violet-400">About</a>
          <a href="#experience" className="hover:text-violet-400">Experience</a>
          <a href="#project" className="hover:text-violet-400">Project</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ashishpanwar2004/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" className="w-6 hover:scale-110 transition" />
          </a>

          <a href="https://github.com/Ashishpanwar0" target="_blank" rel="noreferrer">
            <img src={github} alt="github" className="w-6 hover:scale-110 transition" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-300 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-6 space-y-4 text-slate-300">
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
