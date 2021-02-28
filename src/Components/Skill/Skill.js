import './Skill.css'
import React from 'react'

const Skill = ({ skill }) => {
  const { name, img, color } = skill

  return (
    <div className='skill-container' style={{backgroundColor: color}}>
      <img className='skill-img' src={require('../../Assets/Images/Skills/'+img).default} alt='skill image' />
      <h3 className='skill-title'>{name}</h3>
    </div>
  )
}

export default Skill
