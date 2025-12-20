import React from 'react';
import Header from '../camponants/Header.jsx';
import Herosection from '../camponants/Herosection.jsx';
import About from '../camponants/About.jsx';
import Experience from '../camponants/Experience.jsx';
import Project from '../camponants/Project.jsx';
import Contact from '../camponants/Contact.jsx';

function Home() {
  return (
    <>
      <section className='bg-[#0F172A] overflow-x-hidden'>
        <Header/>
        <Herosection />
        <About />
        <Experience/>
        <Project/>
        <Contact/>
      </section>
    </>
  );
}

export default Home;
