import React, { useState } from 'react';
import skills1 from '../assets/skills1.jpg';
import skills2 from '../assets/skills2.png';
import skills3 from '../assets/skills3.webp';
import skills4 from '../assets/skills4.png';
import skills5 from '../assets/skills5.webp';
import skills6 from '../assets/skills6.jpg';
import skills7 from '../assets/skills7.png';
import skills8 from '../assets/skills8.jpg';
import skills9 from '../assets/skills9.webp';
import skills10 from '../assets/skills10.jpg';
import Education from '../assets/Education.svg';
import RightArrow from '../assets/RightArrow.gif'

import computerguru from '../assets/computerguru.png';
import uou from '../assets/uou_small.png';
import saraswati from '../assets/saraswati.png';
import Erow from '../assets/Erow.gif';

import security from '../assets/SecurityResearch.gif';
import office365 from '../assets/office365.gif';
import frant from '../assets/frant.gif';
import googleads from '../assets/googleads.gif';
import git from '../assets/git.gif';
import worldpress from '../assets/Wordpress.gif';
import react from '../assets/react.gif';
import java from '../assets/java-script.gif';

function About() {
  const [activeTab, setActiveTab] = useState('education');
  return (
    <>
      <section id="About" className='pt-10'>
        <div className='text-center text-5xl mb-5 text-[#A78BFA]'>
          <h1>About</h1>
        </div>
        <div className="p-6">
          {/* Buttons start*/}
          <div className="flex justify-center mb-6 space-x-4">
<button
          onClick={() => setActiveTab('skills')}
          className={`px-5 py-2 rounded-lg transition-all duration-300 ${
            activeTab === 'skills'
              ? 'bg-[#A78BFA] text-black'
              : 'bg-gray-200 text-black'
          }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-10 py-2 rounded-lg transition-all duration-300 ${
            activeTab === 'education'
              ? 'bg-[#A78BFA] text-black'
              : 'bg-gray-200 text-black'
          }`}
        >
          Skills
        </button>

          </div>
          {/* Buttons End*/}

          {/* Skills Contant start */}
          <div className="lg:ml-10">
           {activeTab === 'education' && (
              <>
                <div className='block lg:hidden w-full'>
                  <div className='grid grid-cols-2 gap-x-4 w-full gap-y-10 mt-10'>
                    <img src={react} alt="" className='w-[90%]' />
                    <img src={java} alt="" className='w-[90%]' />
                    <img src={frant} alt="" className='w-[90%]' />
                    <img src={git} alt="" className='w-[90%]' />
                    <img src={worldpress} alt="" className='w-[90%]' />
                    <img src={office365} alt="" className='w-[80%]' />
                    <img src={googleads} alt="" className='w-[70%]' />
                  </div>
                </div>

                <div className='lg:block hidden'>
                  {/* <h2 className="text-3xl font-bold text-[#e2e8f0f5]">My Skills</h2> */}
                  <div className=' grid lg:grid-cols-5 lg:w-[100%] lg:space-x-18 gap-x-5 space-y-5 mt-10'>
                    <img src={skills3} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-cover hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills5} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] object-cover rounded-xl hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills10} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] object-cover  rounded-xl hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills1} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] object-cover  rounded-xl hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills9} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] object-cover  rounded-xl hover:scale-110 hover:rounded-[30px]' />
                  </div>
                  <div className='grid lg:grid-cols-5 grid-cols-3 w-[100%] h-[200px] lg:space-x-18 gap-x-5 space-y-5 lg:mt-10'>
                    <img src={skills2} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-cover hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills4} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-cover hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills6} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-cover hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills7} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-center hover:scale-110 hover:rounded-[30px]' />
                    <img src={skills8} alt="" className='lg:w-[180px] lg:h-[160px] w-[80px] h-[80px] rounded-xl object-cover hover:scale-110 hover:rounded-[30px]' />
                  </div>
                </div>
              </>
            )}
            {/* Skills Contant end */}

            {/* Education contant Start */}
            {activeTab === 'skills' && (
              <div className='lg:flex lg:gap-x-1'>
                <div>
                  <img src={security} alt="" className='lg:w-[100%]  lg:h-[750px] w-[100%] h-[auto] scale-x-[-1] lg:mt-[-140px] mt-[-60px] lg:ml-[-50px]' />
                </div>
                <img src={Erow} alt="" className='w-40 h-30 absolute lg:ml-130 lg:mt-45 lg:block hidden' />
                <div>
                  <ul className="space-y-8 lg:mt-8">
                    <li>
                      <strong className='ml-27 text-xl lg:text-2xl text-white'>Web Development</strong><br />
                      <strong className='flex gap-x-5 mt-2 text-white text-sm'><img src={computerguru} alt="" className='w-22 rounded-sm mt-[-38px]' />
                        Computer Guru Training Institute <br /> (1 Year Diploma)</strong>
                    </li>
                    <li>
                      <strong className='ml-27 text-xl lg:text-2xl text-white lg:w-full justify-end'>Information <span className='lg:ml-0 ml-26 sm:ml-0'>Technology</span></strong><br />
                      <strong className='flex gap-x-5 mt-2 text-white text-sm'><img src={uou} alt="" className='w-22 rounded-sm mt-[-40px]' />
                        Uttrakhand Open Universty<br /> (1 Year Diploma)</strong>
                    </li>
                    <li>
                      <strong className='ml-27 text-xl lg:text-2xl text-white'>Bachelor Of Art</strong><br />
                      <strong className='flex gap-x-5 mt-2 text-white text-sm'><img src={uou} alt="" className='w-22 rounded-sm mt-[-40px]' />
                        Uttrakhand Open Universty<br /> ( Graduation )</strong>
                    </li>
                    <li>
                      <strong className='ml-27 tex-xl lg:text-2xl text-white'>12th</strong><br />
                      <strong className='flex gap-x-5 lg:mt-1 text-white text-sm'><img src={saraswati} alt="" className='w-22 rounded-sm mt-[-40px]' />
                        Saraswati Vidhya Mandir<br /> ( 2021 with 70% )</strong>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* Education contant end */}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
