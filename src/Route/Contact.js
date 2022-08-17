import React from 'react'
import { Navbar } from '../Component/Navbar';
import Footer from '../Component/Footer';
import OtherPage from '../Component/OtherPage';
import Form from '../Component/Form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <OtherPage heading="CONTACT" text="Let's have a Chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact