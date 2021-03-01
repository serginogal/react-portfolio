import './Career.css'
import React from 'react'

const Career = ({  }) => {
  return (
    <div className='career-wrapper'>
        <div className="career-title">
          <h1>Let's take a look at my <span className="highlight">Career</span></h1>
          <img src={require('../../Assets/Images/Career/career-img-2.svg').default} alt="" />
        </div>
        <div className="career-list">
          <ol>
            <li>
              <span className='company-name'>PlaynextLab Inc.</span><br/>
              <span className='company-title'>Software Engineer</span><br/>
              <span>April 2019 - Present</span>
              <p>Develop and design new functionalities using <span className="highlight">NodeJS</span>, <span className="highlight">PUG</span>, <span className="highlight">CSS</span> and <span className="highlight">JavaScript</span> to an existing <span className="highlight">e-commerce</span> platform</p>
              <p>Develop from scratch an <span className="highlight">Online Music Application</span> using <span className="highlight">React Native</span> published in both, the <span className="highlight">App Store</span> and <span className="highlight">Google Play Store</span></p>
              <p>Maintain, fix and update various <span className="highlight">Online Messaging </span> and <span className="highlight">VOIP iOS Applications</span> using <span className="highlight">Objective C</span> and <span className="highlight">Swift</span></p>
              <p>Develop and add new screens and functionalities into an existing <span className="highlight">Mailing platform </span> using <span className="highlight">VueJS</span> and <span className="highlight">AWS</span> to develop the <span className="highlight">API</span></p>
              <p>Develop and Design an <span className="highlight">Online Contacts Application </span> built in <span className="highlight">Swift</span> that caches the contact information in a <span className="highlight">SQLite</span> Database</p>
            </li>
            <li>
              <span className='company-name'>Ricoh Spain IT Services</span><br/>
              <span className='company-title'>Software Engineer Trainee</span><br/>
              <span>November 2016 - July 2017</span>
              <p>Develop and design different <span className="highlight">Automation tools </span> using <span className="highlight">JAVA </span> to help the other teammates spend less time doing manual tasks</p>
              <p>Develop and maintain functionalities using <span className="highlight">JAVA </span>, <span className="highlight">JSP </span>, <span className="highlight">PL/SQL </span>, to an existing platform based on the <span className="highlight">medical sector</span></p>
            </li>
          </ol>
        </div>
      </div>
  )
}

export default Career
