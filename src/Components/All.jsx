import React from 'react'
import About from './About'
import Contact from './Contact'
import Github from './Github'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills '

const All = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Github/>
        <Contact/>
    </div>
  )
}

export default All