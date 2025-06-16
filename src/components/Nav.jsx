import React, { useState } from 'react'
import { useContact } from '../uilts/ContactContext'
import Projects from '../components/Projects'

function Nav() {

  const { toggleContact } = useContact()
  const handleClick = () => {
    window.scrollTo({ top:0, behavior: 'smooth' })
    toggleContact()
  }

  const handleClick2 = () => {
    window.scrollTo(<Projects />)
  }

  const [darkToggle, setDarkToggle] = useState(false)

  const handleDarkmodeToggle = () => {
    setDarkToggle ((prev) => {
      const newToggle = !prev;
      if (newToggle) {
        document.body.classList.add("dark")
      }
      else {
        document.body.classList.remove("dark")
      }
      return newToggle
    })
  }
  return (
    <nav className='h-full w-full max-w-7x1 flex md:flex-row items-center justify-evenly z-10 relative flex-col'>
      <figure className="lg:w-1/2 h-full WA_logo w-auto">
        <img className="dark:hidden cursor-pointer w-40 h-40" onClick={handleDarkmodeToggle} src="/assets/WA logo.png" alt="" />
        <img className="hidden dark:inline cursor-pointer w-40 h-40" onClick={handleDarkmodeToggle} src="/assets/WA logo dark mode.png" alt="" />
      </figure>
      <ul className="flex items-center flex-col md:flex-row text-base duration-300 ease-linear">
        <li className="p-2 list-none cursor-pointer" onClick={handleClick}>
          <div className="flex justify-between rounded-3xl text-base duration-300 ease-linear bg-orange-600 px-4 py-2 yellow hover:text-orange-600 hover:bg-black dark:hover:bg-white hover:duration-300 hover:ease-linear font-bold">
          About</div>
        </li>
        <li className="p-2 list-none" onClick={handleClick2}>
          <a href="#Projects" className="flex justify-between rounded-3xl text-base duration-300 ease-linear px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 hover:duration-300 hover:ease-linear font-bold">
          Projects</a>
        </li>
        <li className="p-2 list-none cursor-pointer" onClick={handleClick}>
          <div className="flex justify-between rounded-3xl text-base duration-300 ease-linear bgyellow px-4 py-2 text-red-600 hover:yellow hover:bg-red-600 hover:duration-300 hover:ease-linear font-bold">
          Contacts</div>
        </li>
        <li className="p-2 list-none " onClick={handleDarkmodeToggle}>
          <div className="flex justify-between text-base duration-300 ease-linear">
            <i className="fas fa-adjust hover:scale-110 active:scale-90 active:hover:invert text-lg dark:text-white"></i>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav