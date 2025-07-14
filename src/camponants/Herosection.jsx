import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';
import Erow from '../assets/Erow.gif';
import code from '../assets/code.gif';
import Hero from '../assets/Hero.svg';
import { motion } from 'framer-motion';

function HeroSection() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-in-out',
        });
    }, [])

    return (
        <motion.section
            className='h-auto lg:flex overflow-hidden'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className='lg:w-150 space-y-5 w-full lg:ml-15 lg:mt-25 mt-5 ml-5'>
                <h1 className='flex text-5xl text-[#e2e8f0] tracking-[5px]' data-aos="fade-right">
                    Hi, I Am <img src={Erow} alt="" className='mt-[-20px] lg:ml-0 ml-[-20px]' />
                </h1>
                <h1 className='text-6xl text-[#A78BFA] tracking-[2px] font-poppins lg:w-full w-[90%]' data-aos="fade-left">
                    ASHISH PANWAR
                </h1>
                <p className='flex text-xl text-[#e2e8f0b6] font-poppins' data-aos="zoom-in-up">
                    WEB DEVELOPER <img src={Erow} alt="" className='mt-[-20px] w-25' />
                </p>
                <p className='text-justify text-sm text-[#e2e8f0b6] tracking-[1px] lg:w-160 w-[95%]' data-aos="fade-up">
                    a skilled web and app developer with expertise in React.js, Next.js, MongoDB, Tailwind CSS, PostgreSQL, and Firebase...
                </p>
            </div>

            <div className='lg:mt-0 mt-5 lg:ml-0 ml-5 relative' data-aos="fade-up-left">
                <img src={code} alt="" className='lg:w-40 w-[82px] lg:h-20 h-15 absolute z-20 animate-bounce' data-aos="zoom-in" />
                <img src={Hero} alt="" className='w-[90%] scale-x-[-1]' data-aos="fade-up" />
            </div>
        </motion.section>
    )
}

export default HeroSection;
