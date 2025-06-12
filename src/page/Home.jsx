import React from 'react'
import Background from '../components/Background'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <div className='dark:bg-black'>
      <Background/>
      <Nav />
      <Header />
      <Contact />
      <Projects />
      <Footer/>
    </div>
  )
}

export default Home