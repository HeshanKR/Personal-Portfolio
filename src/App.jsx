import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Contact />
      <ToastContainer />
    </div>
  )
}

export default App
