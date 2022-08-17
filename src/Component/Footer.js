import "./Footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>133-Police Colony,Housing,Pandesara</p>
                        <p>Surat, Gujarat</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} /> +91-7008298174
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} /> raudasuraj4@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>About my Social Media </h4>
                <p>This is Rauda Suraj. i Mentioned below of my all Socialmedia Platform. you can contact me as well</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer