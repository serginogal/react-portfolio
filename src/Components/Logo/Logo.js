import './Logo.css'
import React from 'react'

const Logo = ({color = '#424953', size = '1.5rem', text = 'Sergi Nogal'}) => {

  return (
    <div>
      <h2 style={{color, fontSize: size}} className='logo'>{text}</h2>
    </div>
  )
}

export default Logo
