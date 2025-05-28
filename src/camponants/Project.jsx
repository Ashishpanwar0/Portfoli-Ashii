import React from 'react'
import Project1 from '../assets/Project1.jpg';
import project2 from '../assets/project2.jpg';

function Project() {
  return (
    <section id='Project'>
         <div className='text-center text-5xl mb-5 text-[#e2e8f0b6] lg:mt-10'>
                <h1>Project</h1>
            </div>

            <div className='mt-15'>
              {/* first div */}
                  <div className='flex'>
                        <a href="https://pv-hotal-6c5589.netlify.app/" target="_blank"><img src={Project1} alt="" className='lg:w-[400px] rounded-sm scale-100 opacity-80 hover:opacity-50'/></a>
                        <div>
                            
                        </div>
                  </div>

                  {/*2nd Div  */}
                  <div>

                  </div>
                  {/* 3rd Div */}
                  <div>

                  </div>
            </div>
    </section>
  )
}

export default Project