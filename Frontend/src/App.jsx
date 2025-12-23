import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Commitment from './components/Commitment'
import Bearers from './components/Bearers'
import GalleryDocuments from './components/GalleryDocuments'
import Location  from './components/Location'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Commitment/>
        <Bearers/>
        <GalleryDocuments/>
        <Location/>
        <ContactForm/>
        <Footer/>

      </main>
    </div>
  )
}

export default App
