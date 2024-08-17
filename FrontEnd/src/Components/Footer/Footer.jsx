import React from 'react'
import "./Footer.css"
import footer_icon from "../assets/logo_big.png"
import instagram_icon from "../assets/instagram_icon.png"
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from "../assets/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className='footer'>
            <div className="Shopper-logo">
                <img src={footer_icon} alt="" />
                <h1>SHOPPER</h1>
            </div>
            <div className="contact-details">
                <ul>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="social-icons">
                <img src={instagram_icon} alt="" />
                <img src={pintester_icon} alt="" />
                <img src={whatsapp_icon} alt="" />
            </div>
            <hr />
            <footer>Copyright @ 2023 - All Rights Reserved</footer>

        </div>
    )
}

export default Footer
