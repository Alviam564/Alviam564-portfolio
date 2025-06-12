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
    <div>
      <img className="dark:hidden cursor-pointer w-64 h-64" onClick={handleDarkmodeToggle} src="/assets/WA logo.png" alt="" />
      <img className="hidden dark:inline cursor-pointer w-64 h-64" onClick={handleDarkmodeToggle} src="/assets/WA logo dark mode.png" alt="" />
      <div className="cursor-pointer p-2" onClick={handleDarkmodeToggle}>
        <a href="#" className="flex justify-between text-base duration-300 ease-linear nav__link--anchor-switch link__hover-effect--black">
          <i className="fas fa-adjust text-lg text-gray-700 dark:text-gray-300"></i>
        </a>
      </div>
    </div>
  )
}

export default Nav