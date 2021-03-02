import './Button.css'
import React from 'react'

const Button = ({ text = 'btn_text', primary = true, onClick}) => {

  return (
    <div {...{onClick}} className={`btn ${primary? 'btn-primary' : 'btn-secondary'}`}>
      <a>{text}</a>
    </div>
  )
}

export default Button
