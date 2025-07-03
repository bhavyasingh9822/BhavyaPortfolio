import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
// import Marque from './Marque'
import Experience from './Experience'

import Skills from './Skills'
import Achive from './Achive'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     {/* <Marque/> */}
     
     <About/>
     <Skills/>
     <Experience />
     <Achive/>
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
