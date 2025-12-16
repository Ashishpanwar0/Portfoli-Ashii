import React, { useState } from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github-icon-2.svg";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-0 left-0 w-full z-50  backdrop-blur py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

        <img src={logo} alt="logo" className="w-40 h-40 hover:scale-105 transition" />

        <nav className="hidden lg:flex items-center gap-20 text-slate-300">
          <a href="#" className="hover:text-violet-400 transition">Home</a>
          <a href="#About" className="hover:text-violet-400 transition">About</a>
          <a href="#Experience" className="hover:text-violet-400 transition">Experience</a>
          <a href="#Project" className="hover:text-violet-400 transition">Project</a>
          <a href="#Contact" className="hover:text-violet-400 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/ashishpanwar2004/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="w-6 hover:scale-110 transition" /></a>
          <a href="https://github.com/Ashishpanwar0" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="w-6 hover:scale-110 transition" /></a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-300 text-2xl">☰</button>
        </div>

      </div>

      {open && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-6 py-6 space-y-4 text-slate-300">
          <a href="#" onClick={() => setOpen(false)} className="block hover:text-violet-400">Home</a>
          <a href="#About" onClick={() => setOpen(false)} className="block hover:text-violet-400">About</a>
          <a href="#Experience" onClick={() => setOpen(false)} className="block hover:text-violet-400">Experience</a>
          <a href="#Project" onClick={() => setOpen(false)} className="block hover:text-violet-400">Project</a>
          <a href="#Contact" onClick={() => setOpen(false)} className="block hover:text-violet-400">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Header;
