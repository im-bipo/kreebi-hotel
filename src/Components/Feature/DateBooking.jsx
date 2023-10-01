import React, { useState } from 'react'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const DateBooking = () => {

    const removeDatePicker = () => {
        document.getElementById('DatePickerContainer').classList.add('hidden')
        console.log('remove date picker')
    }
    const handleDate = () => {

        document.getElementById('DatePickerContainer').classList.toggle('hidden')
        console.log('hi this gi')

    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // console.log("hi this is call form something")

    return (
        <>
            <div className='flex justify-center lg:items-center md:justify-end lg:block box-content'>
                <div className='flex max-w-[26rem] flex-wrap mt-14 bg-gradient-to-b from-primaryDark to-[#101E2F] rounded-2xl lg:max-w-none '>
                    <div onClick={handleDate} className=' w-full  p-5 border-b  border-primary sm:border-r sm:w-1/2 lg:w-1/4 flex flex-col justify-center lg:border-b-0'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5'>Check IN</h3>
                        <div className='flex items-center  text-gray-200 p-5 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>{`${startDate.getDate()}`}</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>{`${startDate.getMonth()} ${startDate.getFullYear()}`}</p>
                                <p className=' w-fit text-gray-400 text-base'>{`${startDate.getDay()}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className='  w-full p-5 border-b border-primary sm:w-1/2 lg:border-b-0 lg:border-r lg:w-1/4 flex flex-col justify-center'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5'>Check Out</h3>
                        <div className='flex items-center  text-gray-200 p-5 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>12</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>Oct, 2019</p>
                                <p className=' w-fit text-gray-400 text-base'>Friday</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 m-auto lg:w-1/4 flex justify-center  border-r border-primary'>
                        <div className='w-fit  py-5 text-center '>
                            <h6>Adults</h6>
                            <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                                <button>+</button>
                                <h5 className='text-[3rem]'>5</h5>
                                <button>-</button>
                            </div>
                        </div>
                        <div className='w-fit  py-5 text-center'>
                            <h6>Children</h6>
                            <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                                <button>+</button>
                                <h5 className='text-[3rem]'>5</h5>
                                <button>-</button>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:w-1/4 flex justify-center'>
                        <div className=' p-5 flex m-auto h-full items-center justify-center'>
                            <button className=' bg-active text-primary p-2 px-5 rounded-[25rem] lg:w-[10rem] hover:bg-opacity-90 active:bg-opacity-80 '>
                                Book Now
                            </button>
                        </div>

                    </div>
                </div>
                <div id='DatePickerContainer' className='hidden'>
                    <div className='fixed flex flex-col justify-center items-center w-full h-full bg-gray-950 bg-opacity-50 top-0 left-0 right-0 bottom-0' >
                        <div onClick={removeDatePicker} className='relative left-32 bottom-5'>
                            x
                        </div>
                        <DatePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            inline
                        />
                        <div>
                            <button onClick={removeDatePicker} className='bg-gray-200 text-primary rounded-lg p-5 py-1'>
                                Done
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DateBooking