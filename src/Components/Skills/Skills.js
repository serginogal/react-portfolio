import './Skills.css'
import React from 'react'
import Skill from '../Skill/Skill'

const Skills = ({ skills }) => {

  return (
    <div className="skills-wrapper">
      <div className="skills-header">
        <h1>Some <span className="highlight">technologies</span> that I use</h1>
      </div>
      <div className='skills-list-wrapper'>
        {
          skills.map(skill => <Skill  {...{skill}} />)
        }
      </div>
    </div>
  )
}

export default Skills
