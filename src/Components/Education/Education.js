import './Education.css'
import React from 'react'

const Education = ({  }) => {
  return (
    <div className='education-wrapper'>
      <div className="education-list">
        <ol>
          <li>
            <span className='school-name'>ARC Academy Japanese Language School</span><br/>
            <span>January 2018 - March 2019</span>
            <p>Studied Japanese for a bit more than 1 year where I acquired a conversational level</p>
          </li>
          <li>
            <span className='school-name'>ESCOLA UNIVERSITARIA GIMBERNAT (EUG)</span><br/>
            <span>October 2013 - June 2017</span>
            <p>Bachelor in Computer Science and Services</p>
          </li>
        </ol>
      </div>
      <div className="education-title">
        <h1>And now let's take a look at my <span className="highlight">Education</span></h1>
        <img src={require('../../Assets/Images/Education/education-img-1.svg').default} alt="" />
      </div>
    </div>
  )
}

export default Education
