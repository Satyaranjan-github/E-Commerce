import React from 'react'
import './Footer.css'
import footer_logo from '../../Assets/logo_big.png'
import insta from '../../Assets/instagram_icon.png'
import pintesterest from '../../Assets/pintester_icon.png'
import wp from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Shoppers</p>
      </div>
      <ul className="footer-menu">
        <li><a href="#">Company</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Offices</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
      <div className="footer_icons">
        <div className="footer_icon-container">
        <img src={insta} alt="" />
        </div>
        <div className="footer_icon-container">
        <img src={pintesterest} alt="" />
        </div>
        <div className="footer_icon-container">
        <img src={wp} alt="" />
      </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023 - All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
