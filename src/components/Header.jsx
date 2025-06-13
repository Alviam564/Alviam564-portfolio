import React from 'react'

function Header() {
  return (
    <header className="left-1/4 py-8 w-1/2 max-w-5xl z-10 relative flex justify-evenly">
      <div>
        <h1 className="text-9xl text-orange-600 dark:text-blue-800 text-left">Hey</h1>
        <h1 className="text-8xl text-blue-800 dark:text-orange-600 text-left">I'm William.</h1>
        <p className=" w-3/4 text-2xl pb-5 font-normal leading-relaxed dark:text-white">I'm a <span className="text-purple-700 dark:text-yellow-300 font-bold">Frontend Software Engineer</span> with a strong passion for building web applications with great user experiences.
          Here's a bit more<span className="text-purple-700 dark:text-yellow-300 font-bold cursor-pointer" onclick="{toggleinner_Contact}"> about me.</span>
        </p>
        <div className="aboutme_link flex gap-3">
          <a href="https://www.linkedin.com/in/william-alvarez-rodas-b4180136a" target="_blank" className="text-3xl">
            <i className="fab fa-linkedin text-blue-700" aria-hidden="true"></i>
          </a> 
          <a href="https://github.com/Alviam564" target="_blank" className="text-3xl">
            <i className="fab fa-github text-black" aria-hidden="true"></i>
          </a>
          <a href="/assets/William Alvarez Rodas Resume.pdf" target="_blank" className="text-3xl">
            <i className="fa fa-file-pdf text-red-600" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <figure className="WA_pic rounded-3xl overflow-hidden mb-6 shadow-black">
        <img src="/assets/WilliamAR.jpeg" className="w-full scale-100 intro-pic" alt="" />
      </figure>
    </header>
  )
}

export default Header