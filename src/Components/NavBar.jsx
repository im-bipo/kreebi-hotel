import React from 'react'

// This component's css is writtent in vanilla css

import './NavBar.css'
const NavBar = () => {
    const handleHam = () =>{
        console.log("clicked");
        document.getElementById('NavLists').classList.toggle('open')
        document.getElementById('ham-menu').classList.toggle('open')
    }
  return (
    <nav className='nav'>
        <h1 className='Logo'>
            Kreebi
        </h1>
        <ul id='NavLists' className='NavLists'>
            <li className='list'>
                <a href="/" onClick={handleHam}>Home</a>
            </li>
            <li className='list'>
                <a href="#about" onClick={handleHam}>about</a>
            </li>
            <li className='list'>
                <a href="#contact" onClick={handleHam}>Contact</a>
            </li>
            <li className='list'>
                <a href="#blog" onClick={handleHam}>blog</a>
            </li>
        </ul>
        <div className="en-btn">
        <div className='Contact-btn'>

            <button className='btn'>
        Contact
            </button>
        </div>
        <div id='ham-menu' className='ham-menu' onClick={handleHam}>
            <div className='ham-bar ham-bar-1'></div>
            <div className='ham-bar ham-bar-2'></div>
            <div className='ham-bar ham-bar-3'></div>
        </div>
        </div>
    </nav>
  )
}

export default NavBar