import './Skills.css'
import React from 'react'
import Skill from '../../Components/Skill/Skill'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import skills from '../../_data/skills.json'

const Skills = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      scale: 0,
      y: 50
    }
  };

  return (
    <div ref={ref} id='skills' className="skills-wrapper">
      <motion.div
        className="skills-header"
        initial='hidden'
        animate={inView? 'visible' : 'hidden'}
        variants={variants}
      >
        <h1>Some <span className="highlight">technologies</span> that I use</h1>
      </motion.div>
      <div className='skills-list-wrapper'>
        {
          (skills || []).map((skill, index) => <Skill  {...{skill, index, inView}} />)
        }
      </div>
    </div>
  )
}

export default Skills
