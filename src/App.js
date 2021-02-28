import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  return (
    <div className="app-wrapper">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App
