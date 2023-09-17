import React from 'react'

// This component's css is writtent in vanilla css

import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='nav'>
        <h1 className='Logo'>
            Kreebi
        </h1>
        <ul className='NavLists'>
            <li className='list'>Home</li>
            <li className='list'>Services</li>
            <li className='list'>Rooms</li>
            <li className='list'>Blog</li>
        </ul>
        <div className='Contact-btn'>

            <button className='btn'>
        Contact
            </button>
        </div>
    </nav>
  )
}

export default NavBar