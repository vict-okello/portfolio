import React from 'react'
import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom'
function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-slate-700 text-white shadow-md p-5">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          VictorOkello
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-gray-200 font-bold' : 'hover:text-gray-300'
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header> 
  )
}
export default Header
