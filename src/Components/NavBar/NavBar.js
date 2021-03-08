import './NavBar.css'
import React from 'react'
import Logo from '../Logo/Logo'
import {animateScroll as scroll, Link} from 'react-scroll'

const NavBar = () => {
  return (
    <div className="nav floating">
      <Logo />
      <div className="links">
        <a className="main-link"><Link to='landing-page' smooth duration={500}>Home</Link></a>
        <a ><Link to='skills' smooth offset={-50} duration={500}>Technologies</Link></a>
        <a ><Link to='career' smooth offset={-50} duration={500}>Career</Link></a>
        <a ><Link to='education' smooth offset={-50} duration={500}>Education</Link></a>
      </div>
    </div>
  )
}

export default NavBar
