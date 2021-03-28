import './Skill.css'
import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const Skill = ({ skill, index = 0, inView = true }) => {
  const { name, img, color } = skill

  const variants = {
    visible: i => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
      },
    }),
    hidden: {
      opacity: 0,
      scale: 0,
      y: 50
    }
  };

  return (
    <motion.div
      className='skill-container'
      style={{backgroundColor: color}}
      initial='hidden'
      animate={inView? 'visible' : 'hidden'}
      custom={index}
      variants={variants}
    >
      <img className='skill-img' src={require('../../Assets/Images/Skills/'+img).default} alt='skill image' />
      <h3 className='skill-title'>{name}</h3>
    </motion.div>
  )
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired,
  primary: PropTypes.number,
  inView: PropTypes.bool
}

export default Skill
