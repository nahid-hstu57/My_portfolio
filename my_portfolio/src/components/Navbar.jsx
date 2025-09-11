import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles =
    "relative px-2 py-1 text-gray-300 transition duration-300 " +
    "hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 " +
    "hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:w-full hover:before:h-[2px] hover:before:bg-gradient-to-r hover:before:from-pink-500 hover:before:to-cyan-500 " +
    "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-pink-500 hover:after:to-cyan-500";

  const activeStyles =
    "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 " +
    "before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-[2px] before:bg-gradient-to-r before:from-pink-500 before:to-cyan-500 " +
    "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-pink-500 after:to-cyan-500";

  return (
    <div className="navbar bg-blue-950 shadow-sm px-4 sm:px-10 py-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl sm:text-5xl">PORTFOLIO</a>
      </div>

      {/* Hamburger for Mobile */}
      <div className="flex-none sm:hidden">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <div className={`flex-none ${isOpen ? "block" : "hidden"} sm:flex`}>
        <ul className="menu menu-horizontal px-1 text-xl flex flex-col sm:flex-row gap-2 sm:gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${navLinkStyles} ${activeStyles}` : navLinkStyles
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${navLinkStyles} ${activeStyles}` : navLinkStyles
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? `${navLinkStyles} ${activeStyles}` : navLinkStyles
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${navLinkStyles} ${activeStyles}` : navLinkStyles
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
