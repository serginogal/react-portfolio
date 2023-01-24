import './App.css'
import Career from './Components/Career/Career'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Components/Skills/Skills'

const App = () => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <LandingPage />
      <Skills />
      <Career />
      <Education />
      <Footer />
    </div>
  );
}

export default App
