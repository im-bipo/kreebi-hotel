import React, { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import {dateFormat} from './dateFormat'
import SelectDate from './SelectDate'
import NoOfPeople from './NoOfPeople'
const DateBooking = () => {

    const [CheckInDate, setCheckInDate] = useState(new Date());
    const [CheckOutDate, setCheckOutDate] = useState(new Date()); 
    const [Adult, setAdult] = useState ()
    const [Child, setChild] = useState ()

    const getPeople = (a,c) =>{
        setAdult(a)
        setChild(c)
    }

    const [ItemType, setItemType] = useState('')


    //callback function to get new date form child element
    const getNewData = (type,newDate) =>{
        if(type === 'Check In')
        {
            setCheckInDate(newDate)
            setCheckOutDate(newDate)
        }
        else if (type ==='Check Out')
        {
            setCheckOutDate(newDate)
        }
        setItemType(null)
    }

    // set weather is going to update check in or out
    const handelDateInput = (e) => {
        setItemType(e)
    }


    const checkIN = dateFormat(CheckInDate)
    const checkOut = dateFormat(CheckOutDate)

    return (
        <>
            <div className='flex justify-center lg:items-center md:justify-end lg:block box-content'>
                <div className='flex max-w-[30rem] flex-wrap mt-14 bg-gradient-to-b from-primaryDark to-[#101E2F] rounded-2xl lg:max-w-none '>
                    <div onClick={() => { handelDateInput('Check In') }} className=' w-full  p-5 border-b  border-primary sm:border-r sm:w-1/2 lg:w-1/4 flex flex-col justify-center lg:border-b-0'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5'>Check IN</h3>
                        <div className='flex items-center  text-gray-200 p-5 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>{checkIN.mDay}</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>{checkIN.month}  {checkIN.year}</p>
                                <p className=' w-fit text-gray-400 text-base'>{checkIN.day}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { handelDateInput('Check Out') }} className='w-full p-5 border-b border-primary sm:w-1/2 lg:border-b-0 lg:border-r lg:w-1/4 flex flex-col justify-center'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5'>Check Out</h3>
                        <div className='flex items-center  text-gray-200 p-5 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>{checkOut.mDay}</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>{checkOut.month}  {checkOut.year}</p>
                                <p className=' w-fit text-gray-400 text-base'>{checkOut.day}</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 m-auto lg:w-1/4 flex justify-center  border-r border-primary'>
                        <NoOfPeople PeopleB={getPeople}/>
                    </div>
                    <div className=' lg:w-1/4 flex justify-center'>
                        <div className=' p-5 flex m-auto h-full items-center justify-center'>
                            <button className=' bg-active text-primary p-2 px-5 rounded-[25rem] lg:w-[10rem] hover:bg-opacity-90 active:bg-opacity-80 '>
                                Book Now
                            </button>
                        </div>

                    </div>
                </div>
                <SelectDate checkInDate={CheckInDate} iType={ItemType} getData={getNewData} />
            </div>
        </>
    )
}

export default DateBooking