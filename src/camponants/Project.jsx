import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.JPG';
import Erow from '../assets/Erow.gif';

function Project() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id='Project'>
      <div className='text-center text-5xl mb-5 text-[#A78BFA] lg:mt-10 mt-10' data-aos="fade-down">
        <h1>Project</h1>
      </div>

      <div className='mt-15 space-y-12'>
        {/* 1st */}
        <div className='lg:flex lg:gap-x-37 w-[100%] items-center' data-aos="fade-up">
          <a href="http://student.infy.uk/?i=1" target="_blank" className='lg:ml-15 '>
            <img src={project3} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0' />
          </a>
          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117' />
          <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#0F172A] px-5 py-2 rounded-xl'>
            <h1 className='text-2xl text-[#A78BFB] mb-3'>
              Student Management System
            </h1>
            <p>
              Client: Computer Guru Training Institute, Rishikesh
            </p>
            <p className='mb-5 text-sm'>
              Developed a complete Student Management System tailored for Computer Guru Training Institute to streamline their student data, attendance tracking, fee management, and course monitoring.
            </p>
            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>PHP (Backend)</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>MySQL (Database)</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>HTML (Frontend)</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'> Font Awesome</li>
            </ul>
          </div>
        </div>

        {/* ...... */}
          <div className='lg:flex lg:gap-x-37 w-[100%] items-center' data-aos="fade-up">
            <a href="https://onlinepaper.infy.uk/" target="_blank" className='lg:ml-15 '>
              <img src={project3} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0' />
            </a>
            <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117' />
            <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#0F172A] px-5 py-2 rounded-xl'>
              <h1 className='text-2xl text-[#A78BFB] mb-3'>
                 Online Examination System
              </h1>
              <p>
                Client: Computer Guru Training Institute, Rishikesh
              </p>
              <p className='mb-5 text-sm'>
                Designed and developed an Online Examination System to simplify test creation, student login, automated result calculation, and admin-based subject/question management. The system supports multiple-choice questions, timer control, and result analysis.
              </p>
              <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>PHP (Backend)</li>
                <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>MySQL (Database)</li>
                <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
                <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>HTML (Frontend)</li>
                <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'> Font Awesome</li>
              </ul>
            </div>
          </div>

        {/* 2nd div */}
        <div className='lg:flex lg:gap-x-37 w-[100%] items-center' data-aos="fade-up">
          <a href="https://pv-hotal-6c5589.netlify.app/" target="_blank" className='lg:ml-15 '>
            <img src={Project1} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0' />
          </a>
          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117' />
          <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#0F172A] px-5 py-2 rounded-xl'>
            <h1 className='text-2xl text-[#A78BFB]  mb-3'>
              Responsive Hotel Website
            </h1>
            <p className='mb-5 text-sm'>
              I designed and developed a fully responsive Yoga website with a calm, modern interface that reflects the spirit of yoga. It includes cleanly structured sections like Home, About, Classes, and Contact. The layout adapts smoothly across all devices, providing an engaging and user-friendly experience. The project focuses on simplicity, clarity, and a peaceful visual design.
            </p>
            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>React+Vite</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Netlify</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>GitHub</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Animated</li>
            </ul>
          </div>
        </div>

        {/* 3rd Div */}
        <div className='lg:flex lg:gap-x-37 w-[100%] items-center' data-aos="fade-up">
          <a href="https://yogni.netlify.app/" target="_blank" className='lg:ml-15 '>
            <img src={project2} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0' />
          </a>
          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117' />
          <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#0F172A] px-5 py-2 rounded-xl'>
            <h1 className='text-2xl text-[#A78BFB]  mb-3'>
              Responsive Yoga Website
            </h1>
            <p className='mb-5 text-sm'>
              I designed and developed a fully responsive Yoga website with a calm, modern interface that reflects the spirit of yoga. It includes cleanly structured sections like Home, About, Classes, and Contact. The layout adapts smoothly across all devices, providing an engaging and user-friendly experience. The project focuses on simplicity, clarity, and a peaceful visual design.
            </p>
            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>React+Vite</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Netlify</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>GitHub</li>
              <li className='border-1 py-1 rounded-xl items-center text-center border-[#9988FB] bg-[#183656] text-[#4EC1C6]'>Animated</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
