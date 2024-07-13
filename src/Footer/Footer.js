import React from 'react'
import './Footer.css';
import { assets } from '../Assets/assets';
export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem esse sunt sequi laboriosam porro commodi quas a placeat illo libero.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delibary</li>
                        <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+001-336-2-254</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>  
        </div>
        <hr />
        <p className='footer-copyright'>copyright 2024 @ tomato All Right Reserved.</p>
    </div>
  )
}
