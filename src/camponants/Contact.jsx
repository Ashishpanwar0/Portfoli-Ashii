import React from 'react'
import Contlogo from '../assets/Contlogo.svg';
import Erow from '../assets/Erow.gif';

function Contact() {
  return (
    <section id='Contact' className='w-full lg:h-[570px] h-110'>
            <div className='text-center text-5xl mb-1 text-[#e2e8f0b6] lg:mt-15 mt-10 hidden'>
                <h1>Contact</h1>
            </div>

            <div className='lg:flex lg:mt-20 gap-x-1 mt-20'>
              <div className='w-[50%]'>
                <img src={Contlogo} alt="" className='lg:w-[100%] scale-x-[-1] lg:mt-[-90px] lg:ml-[-30px] lg:block hidden'/>
              </div>
              <img src={Erow} alt="" className='w-60 h-20 absolute mt-60 ml-90 lg:block hidden'/>
              <div className='lg:w-[45%] items-center text-center lg:ml-[-40px]'>
                <form action="" className='lg:mt-25 space-x-3 space-y-10 text-[white]'>
                  <h1 className='text-5xl lg:mb-25 mb-10 text-[#A78BFA]'>Contact Me</h1>
                  <input type="text" placeholder='Enter Name' name="" id="" className='border-b  lg:w-[48%] h-10 px-2 w-[90%]'/>
                  <input type="text" placeholder='Enter Your Email' name="" id="" className='border-b px-2 lg:w-[48%] h-10 w-[90%]'/>
                  <br/>
                  <textarea name="" id="" placeholder='Enter Message' className='border-b lg:w-[99%]  h-20 px-2 py-2 w-[90%]'></textarea>
                  <button className='border-1 border-[#0F172A] bg-[#ffffffd0] text-[black] px-3 py-2 rounded-sm hover:bg-[#A78BFA]'>Dowload Rusume</button>
                </form>
              </div>
            </div>
    </section>
  )
}

export default Contact