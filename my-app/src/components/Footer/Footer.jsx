import React from 'react'
import './footer.css'
import footer_logo from '../Assetss/logo_big.png'
import insta from '../Assetss/instagram_icon.png'
import pinterest from '../Assetss/pintester_icon.png'
import whatsapp from '../Assetss/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" /> <p>SHOPPER</p></div>
       <ul className="footer-links">
        <li>Company</li>
        <li>Produccts</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
       <div className="footer-social-icons">
        <div className="footer-container">
            <img src={insta} alt="" />
        </div>
        <div className="footer-container">
            <img src={pinterest} alt="" />
        </div>
        <div className="footer-container">
            <img src={whatsapp} alt="" />
        </div>
       </div>
       <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 -All Right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer
