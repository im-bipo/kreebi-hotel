import React from 'react'
import NavBar from './Components/NavBar'
import HeroLander from './Components/HeroLander'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroLander/>
     <div className='h-[32rem] bg-blue-300'>about</div>
     <div className='h-[32rem] bg-blue-200'>spa</div>
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