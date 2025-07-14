import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Contlogo from '../assets/Contlogo.svg';
import Erow from '../assets/Erow.gif';
import ContactMassege from '../assets/ContactMassege.gif';

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id='Contact' className='w-full lg:h-[570px] h-135 overflow-hidden'>
      <div className='text-center text-5xl mb-1 text-[#A78BFA] lg:mt-15 mt-10 hidden' data-aos="fade-down">
        <h1>Contact</h1>
      </div>

      <div className='lg:flex lg:mt-20 gap-x-1 mt-20'>
        <div className='w-[50%]' data-aos="fade-right">
          <img src={Contlogo} alt="" className='lg:w-[100%] scale-x-[-1] lg:mt-[-90px] lg:ml-[-30px] lg:block hidden' />
        </div>
        
        <img src={Erow} alt="" className='w-60 h-20 absolute mt-60 ml-90 lg:block hidden' data-aos="zoom-in" />

        <div className='lg:w-[45%] items-center text-center lg:ml-[-40px]' data-aos="fade-left">
          <form action="" className='lg:mt-25 space-x-3 space-y-10 text-[white]'>
            <h1 className='flex lg:text-5xl text-4xl lg:mb-1 mb-1 items-center text-[#A78BFA] lg:ml-0 ml-3'>
              Contact Me <img src={ContactMassege} alt="" className='w-30' />
            </h1>
            <input type="text" placeholder='Enter Name' name="" id="" className='border-b  lg:w-[48%] h-10 px-2 w-[90%]' />
            <input type="text" placeholder='Enter Your Email' name="" id="" className='border-b px-2 lg:w-[48%] h-10 w-[90%]' />
            <br />
            <textarea name="" id="" placeholder='Enter Message' className='border-b lg:w-[99%]  h-20 px-2 py-2 w-[90%]'></textarea>
            <button className='border-1 border-[#0F172A] bg-[#ffffffd0] text-[black] px-3 py-2 rounded-sm hover:bg-[#A78BFA]'>Submit Here</button>
            <a href="/resume.pdf" download="Ashish_Panwar_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className='inline-block border-1 border-[#0F172A] bg-[#ffffffd0] text-[black] px-3 py-2 rounded-sm hover:bg-[#A78BFA]'
            >
              Download Resume
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
