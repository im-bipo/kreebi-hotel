import React from 'react'
const DateBooking = () => {
    return (
        <div className='flex flex-wrap mt-20 sm:mx-10 bg-gradient-to-b from-primaryDark to-[#101E2F] rounded-2xl sm: md:mx-0'>
            <div className='md:m-auto p-5 sm:w-1/2 lg:w-fit'>
                <h3 className='uppercase text-gray-300 text-sm mb-5'>Arrivail</h3>
                <div className='flex items-center  text-gray-200 bg-[#1a2c43] p-5 rounded-md cursor-pointer hover:bg-opacity-60 active:bg-opacity-80'>
                    <h6 className=' w-fit text-5xl mx-2'>18</h6>
                    <div className='flex flex-col'>
                        <p className='w-fit text-sm'>Oct, 2019</p>
                        <p className=' w-fit text-gray-400 text-base'>Friday</p>
                    </div>
                </div>
            </div>
            <div className='md:m-auto p-5 sm:w-1/2 lg:w-fit'>
                <h3 className='uppercase text-gray-300 text-sm mb-5'>Check Out</h3>
                <div className='flex items-center  text-gray-200 bg-[#1a2c43] p-5 rounded-md cursor-pointer  hover:bg-primaryDark hover:bg-opacity-60 active:bg-opacity-80'>
                    <h6 className=' w-fit text-5xl mx-2'>18</h6>
                    <div className='flex flex-col'>
                        <p className='w-fit text-sm'>Oct, 2019</p>
                        <p className=' w-fit text-gray-400 text-base'>Friday</p>
                    </div>
                </div>
            </div>
            <div className=' w-[200%] max-w-sm flex m-auto md:w-1/2'>
                <div className='w-1/2  p-5 text-center '>
                    <h6>Adults</h6>
                    <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                        <button>+</button>
                        <h5 className='text-[3rem]'>5</h5>
                        <button>-</button>
                    </div>
                </div>
                <div className='w-1/2  p-5 text-center'>
                    <h6>Children</h6>
                    <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                        <button>+</button>
                        <h5 className='text-[3rem]'>5</h5>
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div className='p-5 m-auto items-center justify-center'>
                <button className='bg-active text-primary p-2 px-5 rounded-[25rem] lg:w-[10rem] hover:bg-opacity-90 active:bg-opacity-80 '>
                    Book Now
                </button>
            </div>

        </div>
    )
}

export default DateBooking