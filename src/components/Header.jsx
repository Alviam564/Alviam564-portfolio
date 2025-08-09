import React from 'react'
import { useContact } from '../uilts/ContactContext'

function Header() {
  const { toggleContact } = useContact()

  const handleClick = () => {
    window.scrollTo({ top:0, behavior: 'smooth' })
    toggleContact()
  }
  
  return (
    <>
      <header className="left-1/4 py-8 xl:w-4/6 w-1/2 max-w-5xl relative flex flex-col z-10 xl:flex-row md:justify-evenly">
        <div className='about'>
          <h1 className="md:text-9xl text-7xl text-orange-600 dark:blue md:text-left text-center">Hey</h1>
          <h1 className="md:text-8xl text-5xl blue dark:text-orange-600 md:text-left text-center">I'm William.</h1>
          <p className=" w-full md:w-3/4 text-xl md:text-2xl pb-5 font-normal leading-relaxed dark:text-white md:text-left text-center ">I'm a <span className="text-violet-700 dark:yellow font-bold">Frontend Software Engineer</span> with a strong passion for building web applications with great user experiences.
            Here's a bit more <span className="text-violet-700 dark:yellow font-bold cursor-pointer" onClick={toggleContact}> about me.</span>
          </p>
          <div className="aboutme_link flex gap-3">
            <a href="https://www.linkedin.com/in/william-alvarez-rodas-b4180136a" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <i className="fab fa-linkedin blue" aria-hidden="true"></i>
            </a> 
            <a href="https://github.com/Alviam564" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <i className="fab fa-github text-black dark:text-white" aria-hidden="true"></i>
            </a>
            <a href="/assets/William Alvarez Rodas Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-3xl">
              <i className="fa fa-file-pdf text-red-600" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <figure className="WA_pic rounded-3xl overflow-hidden mb-6 shadow-black justify-center flex">
          <img src="/assets/WilliamAR.jpeg" className="w-full scale-100 rounded-full intro-pic" alt="" />
        </figure>
      </header>
      <button className="w-20 h-20 fixed bottom-8 right-10 rounded-full shadow-xl shadow-black text-white bg-black z-10 border-none dark:bg-white dark:text-black cursor-pointer hover:scale-110 active:scale-90" onClick={handleClick}>
        <i className="fa fa-envelope text-4xl text-white dark:text-black"></i>
      </button>
    </>
  )
}

export default Header