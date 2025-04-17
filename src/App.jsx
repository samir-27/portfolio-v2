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
      <div id="services">
        <Parallax type={"service"} />
      </div>
        <Service />
      <div id="projects">
        <Parallax type={"Project"}/>
      </div>
        <Projects />
        <h1 className='text-8xl text-white'>Hello</h1>
      {/* <div id="home">
        <Parallax />
      </div> */}
    </div>
  )
}

export default App

