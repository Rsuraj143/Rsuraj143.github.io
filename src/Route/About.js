import React from 'react'
import { Navbar } from '../Component/Navbar';
import Footer from '../Component/Footer';
import OtherPage from '../Component/OtherPage';
import AboutContent from '../Component/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <OtherPage heading="ABOUT." text="Am a Friendly Front-End Developer"  />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About