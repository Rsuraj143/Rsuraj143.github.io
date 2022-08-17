import React from 'react';
import { Navbar } from '../Component/Navbar';
import {FrontPage} from '../Component/FrontPage';
import Footer from '../Component/Footer';
import Work from '../Component/Work';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <FrontPage/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home