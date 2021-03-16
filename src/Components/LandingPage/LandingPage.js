import './LandingPage.css'
import React from 'react'
import Button from '../Button/Button'
import resume from '../../Assets/Sergi_Nogal_CV.pdf'
import { motion } from "framer-motion"

const LandingPage = () => {

  return (
      <div id='landing-page' className="landing-wrapper">
        <motion.div className="landing-text"
          initial={{
            opacity:0,
            x: '-2em'
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{ delay: 0.1, ease: "easeOut", duration: 0.5 }}
        >
          <h1>Hi! 👋<br/>
          My name is <span className="highlight">Sergi Nogal</span><br/>
          I'm a <span className="highlight">Frontend Developer 👨‍💻</span><br/>
          from <span className="highlight">Barcelona, SP 🇪🇸</span><br/>
          living in <span className="highlight">Tokyo, JP 🇯🇵</span></h1>
          <h3>I'm a self driven and detail-oriented professional with passion and motivation to always keep learning in this ever-evolving sector.</h3>
          <Button onClick={() => window.open(resume)} text={'Check my Resume'} />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0.1,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="landing-image">
            <img src={require('../../Assets/Images/Landing/landing-bg-2.svg').default} alt="Landing Page Image" />
          </div>
        </motion.div>
      </div>
  )
}

export default LandingPage
