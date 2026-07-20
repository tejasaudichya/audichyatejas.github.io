import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return(
    <>
    <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
