import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Logo or Brand Name */}
        <div className="text-lg font-semibold w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0">
          <Link to="/" className="hover:text-gray-400 text-2xl">
            VictorOkello
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap space-x-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0">
          <Link to="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link to="/privacy-policy" className="hover:text-gray-400">
            Privacy Policy
          </Link>
        </div>

        {/* Social Media Icons or Other Links */}
        <div className="flex flex-wrap space-x-4 w-full md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={34} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={34} />
          </a>
          <a href="https://github.com/vict-okello" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={34} />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} VictorOkello. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer