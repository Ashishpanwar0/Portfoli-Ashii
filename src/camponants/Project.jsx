import React from 'react'
import Project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';
import Erow from '../assets/Erow.gif';

function Project() {
  return (
    <section id='Project'>
         <div className='text-center text-5xl mb-5 text-[#e2e8f0b6] lg:mt-10'>
                <h1>Project</h1>
            </div>

            <div className='mt-15 space-y-12'>
              {/* first div */}
                  <div className='lg:flex lg:gap-x-37 w-[100%] items-center'>
                        <a href="https://pv-hotal-6c5589.netlify.app/" target="_blank" className='lg:ml-15 '><img src={Project1} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0'/></a>
                          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117'/>
                        <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402] px-5 py-2 rounded-xl'>
                            <h1 className='text-2xl text-[#A78BFB] mb-3'>
                              Responsive Hotal Website 
                            </h1>
                            <p className='mb-5 text-sm'>
                              I designed and developed a fully responsive Yoga website with a calm, modern interface that reflects the spirit of yoga. It includes cleanly structured sections like Home, About, Classes, and Contact. The layout adapts smoothly across all devices, providing an engaging and user-friendly experience. The project focuses on simplicity, clarity, and a peaceful visual design.
                            </p>
                            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>React+Vite</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Netlify</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>GitHub</li>
                               <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Animated</li>
                            </ul>
                        </div>
                  </div>

                  {/*2nd Div  */}
                  <div className='lg:flex lg:gap-x-37 w-[100%] items-center'>
                        <a href="https://yogni.netlify.app/" target="_blank" className='lg:ml-15 '><img src={project2} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0'/></a>
                          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117'/>
                        <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402] px-5 py-2 rounded-xl'>
                            <h1 className='text-2xl text-[#A78BFB] mb-3'>
                              Responsive Yoga Website 
                            </h1>
                            <p className='mb-5 text-sm'>
                              I designed and developed a fully responsive Yoga website with a calm, modern interface that reflects the spirit of yoga. It includes cleanly structured sections like Home, About, Classes, and Contact. The layout adapts smoothly across all devices, providing an engaging and user-friendly experience. The project focuses on simplicity, clarity, and a peaceful visual design.
                            </p>
                            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>React+Vite</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Netlify</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>GitHub</li>
                               <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Animated</li>
                            </ul>
                        </div>
                  </div>
                  {/* 3rd Div */}
                   {/* <div className='lg:flex lg:gap-x-37 w-[100%] items-center'>
                        <a href="https://yogni.netlify.app/" target="_blank" className='lg:ml-15 '><img src={project2} alt="" className='lg:w-[400px] rounded-[10px] scale-100 opacity-80 hover:opacity-50 w-[94%] lg:mb-2 mb-3 ml-3 lg:ml-0'/></a>
                          <img src={Erow} alt="" className='w-35 h-20 absolute lg:block hidden lg:ml-117'/>
                        <div className='text-[#e2e8f0b6] lg:w-[50%] text-justify border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402] px-5 py-2 rounded-xl'>
                            <h1 className='text-2xl text-[#A78BFB] mb-3'>
                              Responsive Yoga Website 
                            </h1>
                            <p className='mb-5 text-sm'>
                              I designed and developed a fully responsive Yoga website with a calm, modern interface that reflects the spirit of yoga. It includes cleanly structured sections like Home, About, Classes, and Contact. The layout adapts smoothly across all devices, providing an engaging and user-friendly experience. The project focuses on simplicity, clarity, and a peaceful visual design.
                            </p>
                            <ul className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>React+Vite</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Tailwind CSS </li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Netlify</li>
                              <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>GitHub</li>
                               <li className='border-1 py-1 rounded-xl items-center text-center border-[#12204402] bg-[#183656] text-[#4EC1C6]'>Animated</li>
                            </ul>
                        </div>
                  </div> */}
                  {/* 4th start */}
            </div>
    </section>
  )
}

export default Project