import React from 'react';
import Header from '../camponants/Header.jsx';
import Herosection from '../camponants/Herosection.jsx';
import About from '../camponants/About.jsx';
import Experience from '../camponants/Experience.jsx';
import Project from '../camponants/Project.jsx';

function Home() {
  return (
    <>
      <section className='bg-[#0F172A]'>
        <Header/>
        <Herosection />
        <About />
        <Experience/>
        <Project/>
      </section>
    </>
  );
}

export default Home;
