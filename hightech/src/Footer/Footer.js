import React from 'react'
import "../Assets/Style/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='footer-container'>
        <div className="footer-box">
          <div className="footer-col-one">

            <h1><Link to='/'>High <span>Tech</span></Link></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
            <div className="footer-icons">
              <span><i className="fa-brands fa-facebook-f"></i></span>
              <span><i className="fa-brands fa-twitter"></i></span>
              <span><i className="fa-brands fa-instagram"></i></span>
              <span><i className="fa-brands fa-linkedin-in"></i></span>
            </div>
          </div>


          <div className="footer-col-two">
            <h1><Link to='/'>Short Link</Link></h1>
            <ul>
              <li><Link><i className="fa-solid fa-chevron-right"></i>About Us</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Contact Us</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Our Services</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Our Projects</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Latest Blog</Link></li>
            </ul>

          </div>


          <div className="footer-col-three">
            <h1><Link to='/'>Help Link</Link></h1>
            <ul>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Terms Of Us</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Privacy Policy</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Helps</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>FQAs</Link></li>
              <li><Link><i className="fa-solid fa-chevron-right"></i>Contact</Link></li>
            </ul>
          </div>


          <div className="footer-col-four">
            <h1><Link to='/'>Contact Us</Link></h1>
            <ul>
              <li><Link><i className="fa-solid fa-location-dot"></i>Terms Of Us</Link></li>
              <li><Link><i className="fa-solid fa-phone"></i>Privacy Policy</Link></li>
              <li><Link><i className="fa-solid fa-envelope"></i>Helps</Link></li>
            </ul>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
