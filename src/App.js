import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Components/Skills/Skills'

const skills = [
  {
    name: 'HTML',
    img: 'html5.svg',
    color: '#e34c26'
  },
  {
    name: 'CSS',
    img: 'css3-alt.svg',
    color: '#3b9bd4'
  },
  {
    name: 'JavaScript',
    img: 'js-square.svg',
    color: '#f0db4f'
  },
  {
    name: 'React Native',
    img: 'react.svg',
    color: '#61DBFB'
  },
  {
    name: 'Swift',
    img: 'swift.svg',
    color: '#eb543d'
  },
  {
    name: 'NodeJS',
    img: 'node.svg',
    color: '#68a063'
  },
  {
    name: 'ReactJS',
    img: 'react.svg',
    color: '#61DBFB'
  },
  {
    name: 'Java',
    img: 'java.svg',
    color: '#f89820'
  },
  {
    name: 'GitHub',
    img: 'github-square.svg',
    color: '#4078c0'
  },
  {
    name: 'Linux',
    img: 'debian.svg',
    color: '#d70a53'
  },
  {
    name: 'Windows',
    img: 'windows.svg',
    color: '#00a2ed'
  },
  {
    name: 'Mac',
    img: 'apple.svg',
    color: '#555555'
  },
]

const App = () => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <LandingPage />
      <Skills {...{skills}} />
    </div>
  );
}

export default App
