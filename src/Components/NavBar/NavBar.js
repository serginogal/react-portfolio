import './NavBar.css'
import React from 'react'
import Logo from '../Logo/Logo'

const NavBar = () => {
  return (
    <div className="nav">
      <Logo />
      <div className="links">
        <a className="main-link" href="#">Home</a>
        <a href="#">Technologies</a>
        <a href="#">Career</a>
        <a href="#">Education</a>
      </div>
    </div>
  )
}

export default NavBar
