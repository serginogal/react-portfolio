import './Footer.css'
import React from 'react'
import Logo from '../Logo/Logo'

const Footer = ({ }) => {
  return (
    <div className="footer-wrapper">
    <Logo color={'#fff'} />
    <div className="footer-links">
      <a href="#" className="main-link">Home</a>
      <a href="#">Technologies</a>
      <a href="#">Career</a>
      <a href="#">Education</a>
    </div>
  </div>
  )
}

export default Footer
