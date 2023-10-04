import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import HeroLander from './Components/HeroLander'
import AboutUs from './Components/AboutUs'

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroLander />
      <AboutUs/>
      <div className='h-[32rem] bg-blue-300'></div>
      <div className='h-[32rem] bg-blue-200'>

      </div>
      <div className='h-[32rem] bg-blue-300'>Restruant and Bar</div>
      <div className='h-[32rem] bg-blue-200'>Advntages</div>
      <div className='h-[32rem] bg-blue-300'>Rooms</div>
      <div className='h-[32rem] bg-blue-200'>meter</div>
      <div className='h-[32rem] bg-blue-300'>testimonial</div>
      <div className='h-[32rem] bg-blue-200'>footer</div>
    </div>
  )
}

export default App