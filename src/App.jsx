import './App.css'
import Contacts from './components/Contacts'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import ProjectDetail from './components/ProjectDetail'
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
      <div id="skills">
        <Parallax type={"Skills"}/>
      </div>
        <Skills />
      <div id="contact">
        <Contacts />
        </div>
    </div>
  )
}

export default App

