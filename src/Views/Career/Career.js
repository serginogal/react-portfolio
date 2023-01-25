import './Career.css'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Career = () => {

  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  });

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 50
    }
  };

  const listVariants = {
    visible: {
      opacity: 0.85,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: '-0.5rem'
    }
  };


  return (
    <div ref={ref} id='career' className='career-wrapper'>
      <motion.div
        className='career-title'
        initial='hidden'
        animate={inView? 'visible' : 'hidden'}
        variants={variants}
      >
        <h1>Let's take a look at my <span className="highlight">Career</span></h1>
        <img src={require('../../Assets/Images/Career/career-img-2.svg').default} alt="" />
      </motion.div>
      <motion.div
        className='career-list'
        initial='hidden'
        animate={inView? 'visible' : 'hidden'}
        variants={listVariants}
      >
        <motion.ol variants={listVariants}>
          <motion.li variants={listVariants}>
            <motion.span variants={listVariants} className='company-name'>Bluecode Inc.</motion.span><br/>
            <motion.span variants={listVariants}  className='company-title'>Fullstack Engineer</motion.span><br/>
            <motion.span variants={listVariants} span>July 2022 - Present</motion.span>
            <motion.p variants={listVariants}> Develop Single Page Applications using different Javascript Frameworks like <span className="highlight">ReactJS</span> and <span className="highlight">Angular</span></motion.p>
            <motion.p variants={listVariants}>Develop and Research Mobile Applications using <span className="highlight">React Native</span>, <span className="highlight">Ionic-Cordova</span>, <span className="highlight">Swift</span> and <span className="highlight">Kotlin</span></motion.p>
            <motion.p variants={listVariants}>Create Multiple <span className="highlight">Qiita articles</span> about Development and Implementation of different technologies</motion.p>
            <motion.p variants={listVariants}>Deploy <span className="highlight">ERC20/ERC721</span> Tokens in the <span className="highlight">Ethereum</span> and <span className="highlight">Polygon</span> Blockchains</motion.p>
            <motion.p variants={listVariants}>Develop and Deploy to <span className="highlight">Firebase Functions</span> APIs (<span className="highlight">ExpressJS</span>) to interact with <span className="highlight">ERC20/ERC721</span> Tokens using <span className="highlight">web3</span> for an <span className="highlight">iOS</span> and <span className="highlight">Android</span> Game</motion.p>
            <motion.p variants={listVariants}>Develop a Frontend to interact with the <span className="highlight">ERC20/ERC721</span> Tokens</motion.p>
            <motion.p variants={listVariants}>Deploy <span className="highlight">SPL-Tokens</span> in the <span className="highlight">Solana</span> Blockchain</motion.p>
            <motion.p variants={listVariants}>Develop and Deploy to <span className="highlight">Firebase Functions</span> APIs (<span className="highlight">ExpressJS</span>) to interact with <span className="highlight">SPL-Tokens</span> using <span className="highlight">Solana web3</span> for an <span className="highlight">iOS</span> and <span className="highlight">Android</span> Game</motion.p>
            <motion.p variants={listVariants}>Develop a Frontend to interact with the <span className="highlight">SPL-Tokens</span> Tokens</motion.p>
            <motion.p variants={listVariants}>Implement new features, maintain and update several <span className="highlight">iOS</span> and <span className="highlight">Android</span> apps built with <span className="highlight">React Native Expo</span> (using <span className="highlight">OTA updates</span>)</motion.p>
          </motion.li>
          <motion.li variants={listVariants}>
            <motion.span variants={listVariants} className='company-name'>PlaynextLab Inc.</motion.span><br/>
            <motion.span variants={listVariants}  className='company-title'>Software Engineer</motion.span><br/>
            <motion.span variants={listVariants} span>April 2019 - June 2022</motion.span>
            <motion.p variants={listVariants}> Develop and design new functionalities using <span className="highlight">NodeJS</span>, <span className="highlight">PUG</span>, <span className="highlight">CSS</span> and <span className="highlight">JavaScript</span> to an existing <span className="highlight">e-commerce</span> platform</motion.p>
            <motion.p variants={listVariants}>Develop from scratch an <span className="highlight">Online Music Application</span> using <span className="highlight">React Native</span> published in both, the <span className="highlight">App Store</span> and <span className="highlight">Google Play Store</span></motion.p>
            <motion.p variants={listVariants}>Maintain, fix and update various <span className="highlight">Online Messaging </span> and <span className="highlight">VOIP iOS Applications</span> using <span className="highlight">Objective C</span> and <span className="highlight">Swift</span></motion.p>
            <motion.p variants={listVariants}>Develop and add new screens and functionalities into an existing <span className="highlight">Mailing platform </span> using <span className="highlight">VueJS</span> and <span className="highlight">AWS</span> to develop the <span className="highlight">API</span></motion.p>
            <motion.p variants={listVariants}>Develop and Design an <span className="highlight">Online Contacts Application </span> built in <span className="highlight">Swift</span> that caches the contact information in a <span className="highlight">SQLite</span> Database</motion.p>
          </motion.li>
          <motion.li variants={listVariants}>
            <motion.span variants={listVariants} className='company-name'>Ricoh Spain IT Services</motion.span><br/>
            <motion.span variants={listVariants} className='company-title'>Software Engineer Trainee</motion.span><br/>
            <motion.span variants={listVariants}>November 2016 - July 2017</motion.span>
            <motion.p variants={listVariants}>Develop and design different <span className="highlight">Automation tools </span> using <span className="highlight">JAVA </span> to help the other teammates spend less time doing manual tasks</motion.p>
            <motion.p variants={listVariants}>Develop and maintain functionalities using <span className="highlight">JAVA </span>, <span className="highlight">JSP </span>, <span className="highlight">PL/SQL </span>, to an existing platform based on the <span className="highlight">medical sector</span></motion.p>
          </motion.li>
        </motion.ol>
      </motion.div>
    </div>
  )
}

export default Career
