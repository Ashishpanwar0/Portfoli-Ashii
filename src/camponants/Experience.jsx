import React from 'react'
import ex from '../assets/ex-logo.gif';


function Experience() {
    return (
        <section id='Experience' className='w-[100%]'>
            <div className='text-center text-5xl mb-1 text-[#A78BFA] lg:mt-5 mt-10'>
                <h1>Experience</h1>
            </div>
            <div className='lg:flex'>
                {/* Image */}
                <div>
                    <img src={ex} alt="" className='lg:w-[1100px] h-[600px] sm:ml-[160px] lg:ml-[-30px] lg:mt-5 mt-[-130px]'/>
                </div>
                {/* Image End */}

                {/* Contanct Start */}
                <div className='space-y-1 text-[#e2e8f0b6] lg:mt-0 mt-[-60px]'>
                    {/* first div */}
                    <div className=' flex border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402]  space-x-5 i px-5 py-5 lg:w-[90%] w-[100%] lg:mt-15 rounded-sm'>
                        <div className='lg:w-full w-[100%] text-sm lg:mt-1 mt-1'><h1>2024 - PRESENT</h1></div>
                        <div className='text-justify lg:ml-[-90px]'>
                            <h1 className='mb-2 lg:text-[19px] hover:text-[#4EC1C6] text-white'>OFFICE ASSISTENT- SAMOON FOUNDATION ( NGO )</h1>
                            <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit distinctio magni quod enim tempore impedit, laudantium dolorem fuga deleniti placeat aspernatur consequatur voluptatum repellat nemo atque voluptate, eaque veritatis.</p>
                            <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-full w-[100%] text-center items-center'>
                                <li className='border-1 lg:px-4 lg:py-3 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center items-center'>Google Ads</li>
                                 <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Website Updating</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>WordPress</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Ai tool</li>
                                   <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Accounting</li>
                                   <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Canva</li>
                                    <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Volunteering</li>
                            </ul>
                        </div>
                        </div>
                    {/* 2nd div */}
                            <div className=' flex border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402]  space-x-5 i px-5 py-5 lg:w-[90%] w-[100%] lg:mt-1 rounded-sm'>
                        <div className='lg:w-full w-[100%] text-sm lg:mt-1 mt-1'><h1>March (2024) - PRESENT</h1></div>
                        <div className='text-justify lg:ml-[-90px]'>
                            <h1 className='mb-2 lg:text-[19px] hover:text-[#4EC1C6] text-white'>Full-Stack Developer - NovaNectar Services Pvt.Ltd <strong>( Internship )</strong></h1>
                            <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit distinctio magni quod enim tempore impedit, laudantium dolorem fuga deleniti placeat aspernatur consequatur voluptatum repellat nemo atque voluptate, eaque veritatis.</p>
                            <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-full w-[100%] items-center'>
                                <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>React</li>
                                 <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Tailwind</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Node</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>Mern Stack</li>
                            </ul>
                        </div>
                        </div>
                        {/* 3rd */}
                        <div className=' flex border-1 hover:border-[#122044a4] hover:bg-[#172649] border-[#12204402]  space-x-5 i px-5 py-5 lg:w-[90%] w-[100%] lg:mt-1 rounded-sm'>
                        <div className='lg:w-full w-[100%] text-sm lg:mt-1 mt-1'><h1>1 Month</h1></div>
                        <div className='text-justify lg:ml-[-90px]'>
                            <h1 className='mb-2 lg:text-[19px] hover:text-[#4EC1C6] text-white'>Frontend Developer - Prodigy InfoTech <strong>( Internship )</strong></h1>
                            <p className='text-sm mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit distinctio magni quod enim tempore impedit, laudantium dolorem fuga deleniti placeat aspernatur consequatur voluptatum repellat nemo atque voluptate, eaque veritatis.</p>
                            <ul className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:w-full w-[100%] items-center'>
                                <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>HTML 5</li>
                                 <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>CSS</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>JS</li>
                                  <li className='border-1 lg:px-4 lg:py-1 px-6 py-1 text-sm rounded-2xl border-[#12204402] bg-[#183656] text-[#4EC1C6] text-center'>GitHub</li>
                            </ul>
                        </div>
                        </div>
                </div>
                {/* Contant End */}
            </div>
        </section>
    )
}

export default Experience