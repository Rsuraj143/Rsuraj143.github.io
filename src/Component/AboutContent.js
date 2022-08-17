import "./AboutContent.css"

import React from 'react'
import { Link } from "react-router-dom"
import reactbg4 from "../Images/reactbg4.webp"
import reactbg3 from "../Images/reactbg3.webp"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Am a React Front-end Developer. I create responsive secure website for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-top">
                    <img src={reactbg4} alt="true" />
                </div>
                <div className="img-buttom">
                    <img src={reactbg3} alt="true" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent