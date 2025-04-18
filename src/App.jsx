import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Projects from './components/Projects'
import Service from './components/Service'
import Skills from './components/Skills'

function App() {
  return (
    <div className=''>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Parallax type={"service"} />
      </div>
        <Service />
      <div id="projects">
        <Parallax type={"Project"}/>
      </div>
        <Projects />

      <div id="Technologies">
        <Parallax type={"Skills"}/>
      </div>
        <Skills />
    </div>
  )
}

export default App

