import React from 'react'

export default function Navbar() {
  return (
   <div className=''>
    <div className="navbar bg-blue-950 shadow-sm px-10 py-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-5xl">PORTFOLIO</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-xl">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Skills</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
</div>
   </div>
  )
}
