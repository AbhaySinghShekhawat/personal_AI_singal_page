import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Pages/Hero'
import Features from './Pages/Features'
import Download from './Pages/Download'
import FAQ from './Pages/FAQ'
import Comet from './Pages/Comet'
import About from './Pages/About'

function App() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <Hero/>
      <About/>
       <Features/>
      <Download/>
      <FAQ/>
      <Comet/>
      <Footer/>
    </div>
  )
}

export default App
