import React from 'react'
import { useContact } from '../uilts/ContactContext'

function Footer() {

  const { toggleContact } = useContact()
  
    const handleClick = () => {
      window.scrollTo({ top:0, behavior: 'smooth' })
      toggleContact()
    }

  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black pt-28 pb-28 flex items-center justify-center z-10">
      <div className="relative">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-5"> 
            <a href="#" className="text-red-600 dark:text-green-600 text-xl md:text-6xl font-bold hover:yellow dark:hover:text-violet-600 relative after:bgyellow dark:after:bg-violet-600 after:content-[''] after:absolute after:h-1 after:w-0 after:-bottom-1 after:right-0 hover:after:w-full">William Alvarez Rodas</a>
          </h2>
          <div className="blue dark:text-orange-600 text-l md:text-3xl flex justify-center mb-4 gap-2">
            <a href="https://github.com/Alviam564" target="_blank" rel="noopener noreferrer"
            className="hover:yellow dark:hover:text-violet-600 relative after:bgyellow dark:after:bg-violet-600 after:content-[''] after:absolute after:h-1 after:w-0 after:-bottom-1 after:right-0 hover:after:w-full">Github</a>

            <a href="https://linkedin.com/in/william-alvarez-145228335" target="_blank" rel="noopener noreferrer"
            className="hover:yellow dark:hover:text-violet-600 relative after:bgyellow dark:after:bg-violet-600 after:content-[''] after:absolute after:h-1 after:w-0 after:-bottom-1 after:right-0 hover:after:w-full">Linkedin</a>

            <a href="#" onClick={handleClick} 
            className="hover:yellow dark:hover:text-violet-600 relative after:bgyellow dark:after:bg-violet-600 after:content-[''] after:absolute after:h-1 after:w-0 after:-bottom-1 after:right-0 hover:after:w-full">Contact</a>

            <a href="/assets/William Alvarez Rodas Resume.pdf"  target="_blank" rel="noopener noreferrer"
            className="hover:yellow dark:hover:text-violet-600 relative after:bgyellow dark:after:bg-violet-600 after:content-[''] after:absolute after:h-1 after:w-0 after:-bottom-1 after:right-0 hover:after:w-full">Resume</a>
          </div>
          <div className='text-lg text-center w-1/2 md:w-full'>
            Copyright © 2025 William Alvarez Rodas
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer