import React from 'react'

function About() {
  const skills = [
    { name: 'HTML', src:"https://cdn.iconscout.com/icon/free/png-256/html-3-2944937.png"},
    { name: 'CSS', src:"https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"},
    { name: 'JavaScript', src:"https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"},
    { name: 'React', src:"https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"},
    { name: 'Tailwind', src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"}
  ]

  return (
    <div className="w-full px-10 py-20 flex flex-col justify-center relative-translate-y-28 bg-white dark:bg-black dark:text-white">
      <h3 className="text-2xl text-left font-bold">Here's a bit about me.</h3>
      <h4 className="text-sm text-left mt-3 mb-6 font-bold">Frontend Software Engineer</h4>
      <p className="mb-3 text-left text-lg">
        I'm a 23 year-old New Yorker <span className="text-violet-700 dark:yellow font-bold dark:font-bold">frontend software engineer</span> wanting to develop websites for top-tech companies.
        I currently understanding and wanting to be able to assist in solving difficult engineering problems.
      </p>
      <div className="flex flex-wrap">
        {skills.map((skill) => 
          <figure key={skill.name} className="w-1/4 p-4 flex flex-col items-center transition-all hover:scale-100 hover:brightness-90 scale-90">
            <img className="w-full"
            src={skill.src} alt={skill.name} />
            <p>{skill.name}</p>
          </figure>
        )}
      </div>
    </div>
  )
}

export default About