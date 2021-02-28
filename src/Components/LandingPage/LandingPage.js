import './LandingPage.css'
import React, { useEffect, useState } from 'react'

const LandingPage = ({}) => {

  return (
    <div className="landing-wrapper">
      <div className="landing-text">
        {/* <h1>Hi, I am a <span className="highlight">Frontend Developer</span> </h1> */}
        <h1>Hi! 👋<br/>
        My name is <span className="highlight">Sergi Nogal</span><br/>
        a <span className="highlight">Frontend Developer 👨‍💻</span><br/>
        from <span className="highlight">Barcelona, SP 🇪🇸</span><br/>
        living in <span className="highlight">Tokyo, JP 🇯🇵</span></h1>
        <h3>I'm a self driven and detailed oriented professional with passion and motivation to always keep learning in this ever evolving sector.</h3>
        <div className="btn">
          <a href="#">Check my Resume</a>
        </div>
      </div>
      <div className="landing-image">
        <img src={require('../../Assets/Images/Landing/landing-bg-1.png').default} alt="Landing Page Image" />
      </div>
    </div>
  )
}

export default LandingPage
