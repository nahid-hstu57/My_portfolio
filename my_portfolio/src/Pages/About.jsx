import React from 'react'

export default function About({
  titleColor = "text-amber-400",
  cardBg = "bg-gray-800",
  cardText = "text-white",
  skillColors = [
    "bg-amber-400 text-gray-900",
    "bg-cyan-400 text-gray-900",
    "bg-green-400 text-gray-900",
    "bg-green-500 text-gray-900"
  ]
}) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 sm:px-10">
      {/* Title */}
      <h1 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${titleColor} mt-16 sm:mt-20 mb-6 sm:mb-8 drop-shadow-lg text-center`}>
        About Me
      </h1>

      {/* Card */}
      <div className={`${cardBg} bg-opacity-80 rounded-xl shadow-xl p-6 sm:p-10 max-w-2xl w-full flex flex-col items-center`}>
        <h3 className={`${cardText} text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center`}>
          I am Nahid, a student at Hajee Mohammad Danesh Science and Technology University, Bangladesh
        </h3>

        <h3 className="text-gray-200 text-sm sm:text-base md:text-lg text-center mb-6 leading-relaxed">
          I am a <span className="text-amber-400 font-bold">Front-End Developer</span>.<br />
          I enjoy building clean and interactive user interfaces.<br />
          My focus is on modern frontend technologies like <span className="text-cyan-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span>, and I'm currently exploring backend development with <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-500 font-semibold">MongoDB</span>.<br />
          I love turning ideas into digital experiences that are fast, accessible, and user-friendly.
        </h3>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <span className={`${skillColors[0]} px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow text-sm sm:text-base`}>React</span>
          <span className={`${skillColors[1]} px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow text-sm sm:text-base`}>Tailwind CSS</span>
          <span className={`${skillColors[2]} px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow text-sm sm:text-base`}>Node.js</span>
          <span className={`${skillColors[3]} px-3 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow text-sm sm:text-base`}>MongoDB</span>
        </div>
      </div>
    </div>
  )
}
