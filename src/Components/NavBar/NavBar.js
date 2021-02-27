import './NavBar.css'
import React from 'react'
import Logo from '../Logo/Logo'

const NavBar = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="links">
        <a className="main-link" href="#">Home</a>
        <a href="#">Skills</a>
        <a href="#">Career</a>
        <a href="#">Education</a>
        <a href="#">Language</a>
      </div>
    </div>
  )
}

export default NavBar
