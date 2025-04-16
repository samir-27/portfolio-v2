import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Projects from './components/Projects'
import Service from './components/Service'

function App() {
  return (
    <div className=''>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="home">
        <Parallax />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="home">
        <Parallax />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="home">
        <Parallax />
      </div>
    </div>
  )
}

export default App

