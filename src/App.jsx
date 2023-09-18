import React from 'react'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
     <div className='h-[50rem] bg-[url("./assets/images/main-banner.jpg")] bg-cover bg-center bg-no-repeat pt-20'>Lander</div>
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