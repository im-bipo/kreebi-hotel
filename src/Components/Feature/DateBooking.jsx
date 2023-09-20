import React from 'react'
const DateBooking = () => {
    return (
        <div className='flex flex-wrap mt-20 sm:mx-10  bg-primary rounded-2xl sm: md:mx-0'>
            <div className='min-w-[13rem] sm:min-w-[unset] sm:m-auto p-5 sm:w-fit '>
            <h3 className='uppercase text-gray-300 text-sm mb-5'>Arrival</h3>
                <div className='flex items-center  text-gray-200'>
                    <h6 className=' w-fit text-5xl mx-2'>18</h6>
                    <div className='flex flex-col'>
                        <p className='w-fit text-sm'>Oct, 2019</p>
                        <p className=' w-fit text-gray-400 text-base'>Friday</p>
                    </div>
                </div>
            </div>
            <div className='sm:m-auto p-5 sm:w-1/2 md:w-fit'>
                <h3 className='uppercase text-gray-300 text-sm mb-5'>Goter</h3>
                <div className='flex items-center  text-gray-200'>
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
                <button className='bg-active text-primary p-2 px-5 rounded-[25rem] lg:w-[10rem]'>
                    Reserve Now
                </button>
            </div>

        </div>
    )
}

export default DateBooking