import { createContext, useContext, useState } from 'react'

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [isContactOpen, setIsContactOpen] = useState(false)

    const toggleContact = () => setIsContactOpen((prev) => !prev)
    const closeContact = () => setIsContactOpen(false)
    
    return (
        <ContactContext.Provider value={{ isContactOpen, toggleContact, closeContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export function useContact() {
    return useContext(ContactContext)
}