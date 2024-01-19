import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
// import { FiInstagram } from 'react-icons/fi'
// import { GrTwitter } from 'react-icons/gr'

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
   
      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about-me-section">About</a></li>
        <li><a href="#experience">Experience</a></li>
      
        <li><a href="#contact">Contacts</a></li>
      </ul>

      
      <div className="footer_copyright">
        <small>&copy; {currentYear} Created by Riya Goyal.</small>
      </div>

    </footer>
  )
}

export default Footer;