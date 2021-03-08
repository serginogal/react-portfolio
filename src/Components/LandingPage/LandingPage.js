import './LandingPage.css'
import React from 'react'
import Button from '../Button/Button'
import resume from '../../Assets/Sergi_Nogal_CV.pdf'

const LandingPage = () => {

  return (
      <div id='landing-page' className="landing-wrapper">
        <div className="landing-text">
          {/* <h1>Hi, I am a <span className="highlight">Frontend Developer</span> </h1> */}
          <h1>Hi! 👋<br/>
          My name is <span className="highlight">Sergi Nogal</span><br/>
          I'm a <span className="highlight">Frontend Developer 👨‍💻</span><br/>
          from <span className="highlight">Barcelona, SP 🇪🇸</span><br/>
          living in <span className="highlight">Tokyo, JP 🇯🇵</span></h1>
          <h3>I'm a self driven and detail-oriented professional with passion and motivation to always keep learning in this ever-evolving sector.</h3>
          <Button onClick={() => window.open(resume)} text={'Check my Resume'} />
        </div>
        <div className="landing-image">
          <img src={require('../../Assets/Images/Landing/landing-bg-1.png').default} alt="Landing Page Image" />
        </div>
      </div>
  )
}

export default LandingPage
