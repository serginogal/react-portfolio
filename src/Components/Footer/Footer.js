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
    <div className='sns-wrapper'>
      <div className='sns-img-container' onClick={() => window.location.href = 'mailto:snogal.cm@gmail.com'}>
        <img className='sns-img' src={require('../../Assets/Images/Other/envelope.svg').default} alt='github logo' />
      </div>
      <div className='sns-img-container' onClick={() => window.open('https://github.com/obviouswhy/')}>
        <img className='sns-img' src={require('../../Assets/Images/Skills/github-square.svg').default} alt='github logo' />
      </div>
      <div className='sns-img-container' onClick={() => window.open('https://www.linkedin.com/in/sergi-nogal-13493b13b/')}>
        <img className='sns-img' src={require('../../Assets/Images/Other/linkedin.svg').default} alt='github logo' />
      </div>
      <div className='sns-img-container' onClick={() => window.open('https://www.instagram.com/__nogu/')}>
        <img className='sns-img' src={require('../../Assets/Images/Other/instagram-square.svg').default} alt='github logo' />
      </div>
    </div>
  </div>
  )
}

export default Footer
