import React from 'react'
import About from './About'
import Contact from './Contact'
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
        <Contact/>
    </div>
  )
}

export default All