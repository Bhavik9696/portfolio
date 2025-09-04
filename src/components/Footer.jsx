import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900  text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Brand / Name */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          Bhavik Rai
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://www.linkedin.com/in/bhavik-rai-438a70294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Bhavik9696" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © 2025 Bhavik Rai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
