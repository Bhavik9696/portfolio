import React from 'react'
import { FaWhatsapp, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const Aside = () => {
  return (
    <div>
      <aside className="fixed right-4 top-64 flex flex-col space-y-6 z-50">
        <a 
          href="https://wa.me/qr/SPLZRPUSUPAWG1 " 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={22} />
        </a>
        <a 
          href="https://t.me/+918431985374" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaTelegramPlane size={22} />
        </a>
        <a 
          href="https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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
