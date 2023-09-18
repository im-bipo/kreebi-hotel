import React from 'react'

// This component's css is writtent in vanilla css

import './NavBar.css'
const NavBar = () => {

    //add or remove ham menu with css class
    const handleHam = () =>{
        document.getElementById('nav').classList.toggle('expendedNav')
    }


    // handle nav remove without x 
    let remove = true
    const NavBox = () => {
        remove = false
    }
    const BodyBox = () =>{
        if(remove){
            handleHam()
        }
        remove = true

        
}
  return (
    <nav className='nav' id='nav'>
        <h1 className='Logo'>
            Kreebi
        </h1>
        <div id='NavLists' className='NavLists ' onClick={() => BodyBox()}>
        <ul className='Lists' onClick={() => NavBox()}>
            <h2 className='sm-nav-title'>Hotle Kreebi</h2>
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
            <li className='list'>
                <a href="#blog" onClick={handleHam}>blog</a>
            </li>
            <li className='list'>
                <a href="#blog" onClick={handleHam}>blog</a>
            </li>
            <li className='list'>
                <a href="#blog" onClick={handleHam}>blog</a>
            </li>
        </ul>
        </div>
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