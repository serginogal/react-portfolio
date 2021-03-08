import './Footer.css'
import React from 'react'
import Logo from '../Logo/Logo'
import {Link} from 'react-scroll'

const Footer = ({ }) => {
  return (
    <div className="footer-wrapper">
    <Logo color={'#fff'} />
    <div className="footer-links">
      <Link className="main-link" to='landing-page' smooth duration={500}>Home</Link>
      <Link to='skills' smooth offset={-50} duration={500}>Technologies</Link>
      <Link to='career' smooth offset={-50} duration={500}>Career</Link>
      <Link to='education' smooth offset={-50} duration={500}>Education</Link>
    </div>
  </div>
  )
}

export default Footer
