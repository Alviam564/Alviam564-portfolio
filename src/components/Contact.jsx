import React from 'react'
import Email from './Email';
import About from './About';

function Contact() {
  function Contact(event) {
    let emailjs = ({
      publickey: "crFWlVbYA5WGha-Qm",
    })
    event.preventDefault();
    const loading = document.querySelector(".inner_Contact_overlay--Loading");
    const success = document.querySelector(".inner_Contact_overlay--success");
    loading.classList += " inner_Contact_overlay_visible";
    emailjs
    .sendForm (
      "service_ngh28wz",
      "template_oqg8cyf",
      event.target,
      "crFWlVbYA5WGha-Qm"
    )
    .then (() => {
      loading.classList.remove("inner_Contact_overlay_visible");
      success.classList += " inner_Contact_overlay_visible";
    })
    .catch (() => {
      loading.classList.remove("inner_Contact_overlay_visible");
      alert (
        "Sorry the email service is currently down. Please contact me directly on williamalvarezrodas@gmail.com"
      );
    });
  }
  function toggleinner_Contact() {
  let isinner_ContactOpen = false;
    if (isinner_ContactOpen) {
        isinner_ContactOpen = false;
        return document.body.classList.remove("inner_Contact--open")
    }
    isinner_ContactOpen = true;
    document.body.classList.add("inner_Contact--open");
}
  return (
    <div>Contact

      <About />
      <Email />
    </div>
  )
}

export default Contact