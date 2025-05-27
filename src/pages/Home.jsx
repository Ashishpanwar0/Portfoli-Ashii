import React from 'react';
import Header from '../camponants/Header.jsx';
import Herosection from '../camponants/Herosection.jsx';
import About from '../camponants/About.jsx';

function Home() {
  return (
    <>
      <section className='bg-[#0F172A]'>
        <Header />
        <Herosection />
        <About />
      </section>
    </>
  );
}

export default Home;
