import React from 'react'
import { FaWhatsapp, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Aside = () => {
  return (
    <div>
      <aside className="fixed right-4 top-64 flex flex-col space-y-6 z-50">
        <a 
          href="https://wa.me/yourNumber" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={22} />
        </a>
        <a 
          href="https://t.me/yourUsername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaTelegramPlane size={22} />
        </a>
        <a 
          href="https://linkedin.com/in/yourProfile" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-700 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaLinkedin size={22} />
        </a>
      </aside>
      
    </div>
  )
}

export default Aside
