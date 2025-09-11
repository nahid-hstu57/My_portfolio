import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router";

export default function Footer() {
  const location = useLocation();


  if (location.pathname === "/home" || location.pathname === "/") {
    return null;
  }

  return (
    <footer className="footer bg-neutral text-neutral-content py-15 px-4 sm:px-10 md:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Left Section */}
      <aside className="flex items-center gap-2">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432..."></path>
        </svg>
        <p className="text-sm sm:text-base text-center sm:text-left">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </aside>

      {/* Right Section */}
      <nav className="flex gap-4 text-2xl">
        <a
          href="https://www.facebook.com/md.nahid.hasan.31118"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/_nahid_0007/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://github.com/nahid-hstu57"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/md-nahid-hasan-66a713348"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>
    </footer>
  );
}
