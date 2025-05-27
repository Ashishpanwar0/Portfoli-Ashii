import React from 'react'
import Erow from '../assets/Erow.gif';
import code from '../assets/code.gif';
import Hero from '../assets/Hero.svg';

function HeroSection() {
  return (
    <section className='h-auto lg:flex'>
         {/* <img src={robo} alt=""  className='w-30 h-30 lg:block hidden animate__animated animate__flash animate__infinite	infinite animate__slower 60s absolute'/> */}
         <div className='lg:w-150 space-y-5 w-[full] lg:ml-15 lg:mt-25 mt-5 ml-5'>
            <h1 className='flex text-5xl text-[#e2e8f0] tracking-[5px]'>
                Hi, I Am <img src={Erow} alt="" className='mt-[-20px] lg:ml-0 ml-[-20px]'/>
            </h1>
            <h1 className='text-6xl text-[#A78BFA] tracking-[2px] font-poppins lg:w-[full] w-[90%]'> 
                ASHISH PANWAR
            </h1>
                <p className='flex text-xl text-[#e2e8f0b6] font-poppins'>
                    WEB DEVLOPER <img src={Erow} alt="" className='mt-[-20px] w-25'/>
                </p>
                <p className='text-justify text-sm text-[#e2e8f0b6] tracking-[1px] lg:w-160 w-[95%]'>
                    a skilled web and app developer with expertise in React.js, Next.js, MongoDB, Tailwind CSS, PostgreSQL, and Firebase. I bring a deep understanding of these technologies to create dynamic and responsive applications, ensuring a seamless user experience and robust backend functionality. My commitment to mastering the latest tools and frameworks allows me to deliver cutting-edge solutions that meet and exceed client expectations.
                </p>
         </div>
         <div className='lg:mt-0 mt-5 lg:ml-0 ml-5'>
            <img src={code} alt="" className='lg:w-40 w-[82px] lg:h-20 h-15 absolute z-20'/>
            <img src={Hero} alt="" className='w-[90%] scale-x-[-1]'/>
         </div>
    </section>
  )
}

export default HeroSection