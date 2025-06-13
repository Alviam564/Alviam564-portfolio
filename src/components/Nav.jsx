import React, { useState } from 'react'

function Nav() {

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
    <nav className='h-full w-full max-w-7x1 flex lg:flex-row items-center justify-evenly z-10 relative xs:flex-col'>
      <figure className="lg:w-1/2 h-full WA_logo xs:w-auto">
        <img className="dark:hidden cursor-pointer w-40 h-40 bg-transparent" onClick={handleDarkmodeToggle} src="/assets/WA logo.png" alt="" />
        <img className="hidden dark:inline cursor-pointer w-40 h-40 bg-transparent" onClick={handleDarkmodeToggle} src="/assets/WA logo dark mode.png" alt="" />
      </figure>
      <ul className="flex items-center text-base duration-300 ease-linear">
        <li className="p-2 list-none" onclick="{toggleinner_Contact}">
          <a href="#About" className="flex justify-between rounded-3xl text-base duration-300 ease-linear bg-orange-600 px-4 py-2 text-yellow-300 hover:text-orange-600 hover:bg-black dark:hover:bg-white hover:duration-300 hover:ease-linear">
          About</a>
        </li>
        <li className="p-2 list-none">
          <a href="#Projects" className="flex justify-between rounded-3xl text-base duration-300 ease-linear px-4 py-2 text-blue-500 hover:text-white hover:bg-blue-500 hover:duration-300 hover:ease-linear">
          Projects</a>
        </li>
        <li className="p-2 list-none" onclick="{toggleinner_Contact}">
          <a href="#" className="flex justify-between rounded-3xl text-base duration-300 ease-linear bg-yellow-300 px-4 py-2 text-red-600 hover:text-yellow-300 hover:bg-red-600 hover:duration-300 hover:ease-linear">
          Contacts</a>
        </li>
        <li classNameName="p-2 list-none " onClick={handleDarkmodeToggle}>
          <a href="#" classNameName="flex justify-between text-base duration-300 ease-linear">
            <i className="fas fa-adjust hover:scale-110 active:scale-90 active:hover:invert text-lg dark:text-white"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav