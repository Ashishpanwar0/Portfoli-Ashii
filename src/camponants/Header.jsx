import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github-icon-2.svg';
import 'animate.css';

function Header() {
  return (
    // Header start //
    <section className='flex  h-40 text-[#e2e8f0b6] lg:space-x-5 space-x-35 text-1xl items-center text-center'>
      <img src={logo} alt="" className='w-30 h-30 lg:ml-12 ml-2 hover:scale-70' />
      <div className='space-x-20 lg:ml-50 lg:block hidden'>
        <a href="" className='hover:text-[#FBFBFC]'>Home</a>
        <a href="#About" className='hover:text-[#FBFBFC]'>About</a>
        <a href="#Experience" className='hover:text-[#FBFBFC]'>Experience</a>
        <a href="#Project" className='hover:text-[#FBFBFC]'>Project</a>
        <a href="" className='hover:text-[#FBFBFC]'>Contact</a>
      </div>
      {/* Images start */}
      <div className='lg:ml-45 ml-1 flex gap-5 items-center sm:ml-[440px]'>
        <a href="https://www.linkedin.com/in/ashishpanwar2004/"> <img src={linkedin} alt="" className='w-10 hover:scale-70' /></a>
        <a href="https://github.com/Ashishpanwar0"> <img src={github} alt="" className='w-8 hover:scale-70' /></a>
        {/* Images End */}
      </div>
    </section>
    // Header End//
  )
}

export default Header