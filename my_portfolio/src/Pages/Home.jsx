import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-10 lg:px-20">
      <div className="card bg-base-100 shadow-sm flex flex-col lg:flex-row items-center w-full">
        {/* Card Body */}
        <div className="card-body flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6 py-6">
          <h2 className="card-title text-4xl sm:text-5xl font-bold">Hi,</h2>
          <h2 className="card-title text-4xl sm:text-5xl font-bold">I'm Nahid</h2>
          <h3 className="text-2xl sm:text-3xl">Welcome to my Portfolio</h3>

          <h3 className="text-xl sm:text-2xl mt-6">Follow Me</h3>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://www.facebook.com/md.nahid.hasan.31118"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition text-2xl"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/_nahid_0007/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/nahid-hstu57"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-2xl"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-nahid-hasan-66a713348"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition text-2xl"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Image */}
        <figure className="flex-1">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Portfolio"
            className="w-full h-auto object-cover rounded-lg"
          />
        </figure>
      </div>
    </div>
  );
}
