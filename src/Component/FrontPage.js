import "./FrontPage.css";

import React from 'react'
import IntroImg from  "../Images/FrontPageBG.jpg"
import { Link } from "react-router-dom";


export const FrontPage = () => {
  return (
    <div className="frontpage">
        <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>         
        </div>
        <div className="content">
          <p>Hi, I Am Rauda Suraj</p>
          <h1>React Develoer</h1>
          <div>
            <Link to="/project" className="btn">Project</Link>
            <Link to="contact" className="btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}
