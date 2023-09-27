import React from 'react'
import DateBooking from './Feature/DateBooking'

const HeroLander = () => {
  return (
    <>
      <div className=' bg-[url("./assets/images/main-banner.jpg")] bg-cover lg:bg-center  bg-no-repeat pt-20 text-white p-5' >
        <div className='md:m-20 lg:mb-14'>

          <h1 className='w-[5rem] text-[3rem] font-[200]'>
            Exclusive Boutique Hotel
          </h1>
          <p className='font-thin text-[.9rem] my-5'>
            Luxry Botuque hotel
          </p>
          <div className='flex space-x-4'>
            <div className="border w-10 rounded-full px-4 py-2 ">f</div>
            <div className="border w-10 rounded-full px-4 py-2 ">x</div>
            <div className="border w-10 rounded-full px-4 py-2 ">i</div>
          </div>
        </div>
        <DateBooking />
      </div>
    </>
  )
}

export default HeroLander