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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className={`text-5xl font-extrabold ${titleColor} mt-20 mb-8 drop-shadow-lg text-center`}>
        About Me
      </h1>
      <div className={`${cardBg} bg-opacity-80 rounded-xl shadow-xl p-10 max-w-2xl w-full flex flex-col items-center`}>
        <h3 className={`${cardText} text-2xl font-semibold mb-4 text-center`}>
          I am Nahid, a student at Hajee Mohammad Danesh Science and Technology University, Bangladesh
        </h3>
        <h3 className="text-gray-200 text-lg text-center mb-6">
          I am a <span className="text-amber-400 font-bold">Front-End Developer</span>.<br />
          I enjoy building clean and interactive user interfaces.<br />
          My focus is on modern frontend technologies like <span className="text-cyan-400 font-semibold">React</span> and <span className="text-blue-400 font-semibold">Tailwind CSS</span>, and I'm currently exploring backend development with <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-500 font-semibold">MongoDB</span>.<br />
          I love turning ideas into digital experiences that are fast, accessible, and user-friendly.
        </h3>
        <div className="flex gap-4 mt-4">
          <span className={`${skillColors[0]} px-4 py-2 rounded-full font-bold shadow`}>React</span>
          <span className={`${skillColors[1]} px-4 py-2 rounded-full font-bold shadow`}>Tailwind CSS</span>
          <span className={`${skillColors[2]} px-4 py-2 rounded-full font-bold shadow`}>Node.js</span>
          <span className={`${skillColors[3]} px-4 py-2 rounded-full font-bold shadow`}>MongoDB</span>
        </div>
      </div>
    </div>
  )
}