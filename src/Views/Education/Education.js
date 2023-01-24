import './Education.css'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Education = () => {

  const [ref, inView, entry] = useInView({
    threshold: 0.3,
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
      x: '0.5rem'
    }
  };

  return (
    <div ref={ref} id='education' className='education-wrapper'>
      <motion.div
        className='education-list'
        initial='hidden'
        animate={inView? 'visible' : 'hidden'}
        variants={listVariants}>
        <motion.ol variants={listVariants}>
          <motion.li variants={listVariants}>
            <motion.span variants={listVariants} className='school-name'>ARC Academy Japanese Language School</motion.span><br/>
            <motion.span variants={listVariants} >January 2018 - March 2019</motion.span>
            <motion.p variants={listVariants}>Japanese language studies</motion.p>
          </motion.li>
          <motion.li variants={listVariants}>
            <motion.span variants={listVariants} className='school-name'>Escoles Universitàries Gimbernat (EUG)</motion.span><br/>
            <motion.span variants={listVariants}>October 2013 - June 2017</motion.span>
            <motion.p variants={listVariants}>Bachelor in Computer Science and Services</motion.p>
          </motion.li>
        </motion.ol>
      </motion.div>
      <motion.div
        className='education-title'
        initial='hidden'
        animate={inView? 'visible' : 'hidden'}
        variants={variants}
      >
        <h1>And now let's take a look at my <span className="highlight">Education</span></h1>
        <img src={require('../../Assets/Images/Education/education-img-1.svg').default} alt="" />
      </motion.div>
    </div>
  )
}

export default Education
