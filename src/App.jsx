import { useState, useEffect } from 'react'
import './App.css'
import ParticleBackground from './Components/ParticleBackground'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-layout">
      {/* Interactive High-Tech Particle Network */}
      <ParticleBackground />
      {/* Subtle dynamic interactive cursor glow */}
      <div
        className="interactive-spotlight"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
