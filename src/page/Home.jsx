import React from 'react'
import Background from '../components/Background'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ContactProvider } from '../uilts/ContactContext'

function Home() {
  return (
    <div className='dark:bg-black'>
      <ContactProvider>
        <Background />
        <Nav />
        <Header />
        <Contact />
        <Projects />
        <Footer/>
      </ContactProvider>
    </div>
  )
}

export default Home