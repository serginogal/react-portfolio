import './Skills.css'
import React from 'react'
import Skill from '../Skill/Skill'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Skills = ({ skills }) => {

  const [ref, inView, entry] = useInView({
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
        {inView&&
        <>
          <motion.div
            className="skills-header"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h1>Some <span className="highlight">technologies</span> that I use</h1>
          </motion.div>
          <div className='skills-list-wrapper'>
            {
              skills.map((skill, index) => <Skill  {...{skill, index}} />)
            }
          </div>
        </>
        }
      </div>
  )
}

export default Skills
