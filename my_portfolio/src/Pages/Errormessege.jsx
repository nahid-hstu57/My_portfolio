import React from 'react'

export default function Errormessege({
  message = "An unexpected error occurred.",
  gradientFrom = "from-gray-900",
  gradientVia = "via-gray-800",
  gradientTo = "to-gray-900",
  cardBg = "bg-gray-800",
  cardText = "text-white",
  iconColor = "text-amber-400",
  titleColor = "text-amber-400"
}) {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientVia} ${gradientTo}`}>
      <div className={`${cardBg} bg-opacity-90 rounded-xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center`}>
        <svg
          className={`w-16 h-16 ${iconColor} mb-4`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
        </svg>
        <h1 className={`text-3xl font-extrabold ${titleColor} mb-2 text-center`}>Error</h1>
        <p className={`text-lg font-semibold text-center ${cardText}`}>{message}</p>
      </div>
    </div>
  )
}