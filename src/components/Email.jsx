import React, { useRef } from 'react'
import { useContact } from '../uilts/ContactContext'
import emailjs from '@emailjs/browser'

function Email() {
  const { toggleContact } = useContact();

  const formRef = useRef();


  const handleClose = () => {
      const loading = document.querySelector(".inner_Contact_overlay--Loading");
      const success = document.querySelector(".inner_Contact_overlay--success");
      loading?.classList.remove("inner_Contact_overlay_visible")
      success?.classList.remove("inner_Contact_overlay_visible")
      formRef.current?.reset()
      toggleContact()
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".inner_Contact_overlay--Loading");
    const success = document.querySelector(".inner_Contact_overlay--success");
    loading?.classList.remove("inner_Contact_overlay_visible")
    success?.classList.remove("inner_Contact_overlay_visible")

    loading.classList.add("inner_Contact_overlay_visible");

    emailjs.sendForm(
        'service_y4g0zps',
        'template_k2ti2sw',
        formRef.current,
        'crFWlVbYA5WGha-Qm'
    ).then(() => {
        loading.classList.remove("inner_Contact_overlay_visible");
        success.classList.add("inner_Contact_overlay_visible");
        formRef.current?.reset()
    }).catch(() => {
      loading.classList.remove("inner_Contact_overlay_visible");
      console.error("EmailJS Error:");
      alert("Sorry the email service is currently down. Please contact me directly on williamalvarezrodas@gmail.com");
    });

  };

  return (
    <div className="w-full px-10 py-20 flex flex-col justify-center relative-translate-x-28 bg-black text-white dark:bg-white dark:text-black">
        <button className="relative xl:bottom-20 xl:left-1/2 bottom-10 left-28 dark:text-black text-white bg-transparent border-0 text-4xl z-10 cursor-pointer hover:scale-110 active:scale-90" onClick={toggleContact}>
          <i className="fa fa-close"></i>
        </button>
        <h3 className="text-2xl text-left font-bold">Let's have a chat!</h3>
        <h4 className="text-sm text-left mt-3 mb-6 font-bold">I'm currently open to new opportunities.</h4>
        <form ref={formRef} id="contact_form" onSubmit={handleSubmit}>
          <div className="mb-5 hover:text-orange-600">
            <label className="content-[''] text-sm font-bold">Name</label>
            <input className="w-full bg-black text-white outline-none border-b-2 border-b-solid border-b-gray-500 hover: border-gray-300 focus:border-orange-600" name="name" type="text" required></input>
          </div>
          <div className="mb-5 hover:text-orange-600">
            <label className="content-[''] text-sm font-bold">Email</label>
            <input className="w-full bg-black text-white outline-none border-b-2 border-b-solid border-b-gray-500 hover: border-gray-300 focus:border-orange-600" name="email" type="email" required></input>
          </div>
          <div className="mb-5 hover:text-orange-600 active:text-orange-600">
            <label className="content-[''] text-sm font-bold">Message</label>
            <textarea className="w-full bg-black text-white outline-none border-b-2 border-b-solid border-b-gray-500 hover: border-gray-300 focus:border-orange-600 resize-x h-28 mt-2 " name="message" type="text" required></textarea>
          </div>
          <button id="contact_submit" className="w-7/12 h-14 text-white bg-orange-600 border-2 border-solid border-orange-600 text-xl transition-all font-bold hover:border-white hover:bg-transparent active:border-orange-600 active:text-orange-600 dark:text-black dark:border-black"> Send it my way </button>
        </form>
        <div className="inner_Contact_overlay--Loading absolute top-0 left-0 w-full h-full hidden items-center justify-center -z-10 bg-black text-7xl">
            <i className="fas fa-spinner"></i>
        </div>
        <div className="inner_Contact_overlay--success absolute top-0 left-0 w-full h-full hidden items-center justify-center -z-10 bg-green-500 text-center text-4xl font-bold p-7">
            <p>
                Thanks for your time and message! Looking forward to speaking to you soon.
            </p>
            <button className="relative bottom-20 left-1/2 dark:text-black text-white bg-transparent border-0 text-4xl z-10 cursor-pointer hover:scale-110 active:scale-90" onClick={handleClose}>
                <i className="fa fa-close"></i>
            </button>
        </div>
    </div>
  )
}

export default Email