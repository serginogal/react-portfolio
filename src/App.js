import './App.css'
import Career from './Views/Career/Career'
import Education from './Views/Education/Education'
import Footer from './Components/Footer/Footer'
import LandingPage from './Views/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'
import Skills from './Views/Skills/Skills'

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
