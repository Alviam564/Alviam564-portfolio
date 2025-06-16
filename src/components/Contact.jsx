import React from 'react'
import Email from './Email';
import About from './About';
import { useContact } from '../uilts/ContactContext'

function Contact() {
  const { isContactOpen } = useContact()

  return (
    <>
    {isContactOpen && (
    <div className={`absolute inset-0 flex items-center justify-center z-10 bg-white dark:bg-black
      ${isContactOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="w-full max-w-[1100px] md:h-[700px] h-full bg-white dark:bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row dark:shadow-[0_20px_80px_0] dark:shadow-gray-400 shadow-2xl shadow-black">
        <About />
        <Email />
      </div>
    </div>
    )}
    </>
  )
}

export default Contact