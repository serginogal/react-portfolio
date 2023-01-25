import './Button.css'
import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text = 'btn_text', primary = true, onClick}) => {

  return (
    <div {...{onClick}} className={`btn ${primary? 'btn-primary' : 'btn-secondary'} non-selectable`}>
      <span>{text}</span>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
