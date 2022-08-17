import React from 'react'
import { Navbar } from '../Component/Navbar';
import Footer from '../Component/Footer';
import OtherPage from '../Component/OtherPage';
import PricingCard from '../Component/PricingCard';
import Work from '../Component/Work';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <OtherPage heading="MY PROJECTS." text="Some of my most recent Projects mentioned Below" />
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project