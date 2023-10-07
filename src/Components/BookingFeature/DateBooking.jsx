import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import { dateFormat } from './dateFormat'
import SelectDate from './SelectDate'
import NoOfPeople from './NoOfPeople'
const DateBooking = () => {
    
    const today = new Date()
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1)
    const [CheckInDate, setCheckInDate] = useState(today)
    const [CheckOutDate, setCheckOutDate] = useState(tomorrow)
    const [Adult, setAdult] = useState()
    const [Child, setChild] = useState()

    const [minDate,setMinDate] = useState(today)

    const getPeople = (a, c) => {
        setAdult(a)
        setChild(c)
    }

    const [ItemType, setItemType] = useState('')


    //callback function to get new date form child element
    const getNewData = (type, newDate) => {
        if (type === 'Check In') {
            setCheckInDate(newDate)
            
            if (CheckOutDate < newDate) {
                setCheckOutDate(newDate)
            }
        }
        else if (type === 'Check Out') {
            setCheckOutDate(newDate)
        }
        setItemType(null)
    }
    
    // set weather is going to update check in or out
    const handelDateInput = (e) => {
        setItemType(e)
        if(e ==='Check In'){
            setMinDate(today)

        }
        else{
            setMinDate(CheckInDate)
        }
    }


    const checkIN = dateFormat(CheckInDate)
    const checkOut = dateFormat(CheckOutDate)

    return (
        <>
            <div className='relative z-10 mt-12 flex justify-center  lg:items-center sm:justify-end lg:mt-64 lg:block box-content'>
                <div className='flex max-w-[26rem] flex-wrap mt-14 bg-gradient-to-b shadow-2xl from-primaryDark to-[#101E2F] rounded-2xl lg:max-w-none '>
                    <div onClick={() => { handelDateInput('Check In') }} className='w-full  p-5 border-b  border-primary sm:border-r sm:w-1/2 lg:w-1/4 flex flex-col lg:items-center justify-center lg:border-b-0'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5 lg:relative lg:mb-0 lg:right-8 lg:mt-4'>Check IN</h3>
                        <div className='flex items-center  text-gray-200 p-5 lg:pt-2 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>{checkIN.mDay}</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>{checkIN.month}  {checkIN.year}</p>
                                <p className=' w-fit text-gray-400 text-base'>{checkIN.day}</p>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { handelDateInput('Check Out') }} className='w-full p-5 border-b border-primary sm:w-1/2 lg:border-b-0 lg:border-r lg:w-1/4 flex flex-col lg:items-center justify-center'>
                        <h3 className='uppercase text-gray-300 text-sm mb-5 lg:relative lg:mb-0 lg:right-8 lg:mt-4'>Check Out</h3>
                        <div className='flex items-center  text-gray-200 p-5 lg:pt-2 rounded-md cursor-pointer hover:bg-[#1a2c43] active:bg-[#1a2c43]'>
                            <h6 className=' w-fit text-5xl mx-2'>{checkOut.mDay}</h6>
                            <div className='flex flex-col'>
                                <p className='w-fit text-sm'>{checkOut.month}  {checkOut.year}</p>
                                <p className=' w-fit text-gray-400 text-base'>{checkOut.day}</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full  mx-auto lg:w-1/4 flex lg:items-center justify-center  border-b lg:border-r lg:border-b-0 border-primary'>
                        <NoOfPeople PeopleB={getPeople} />
                    </div>
                    <div className='w-full lg:w-1/4 flex justify-center items-center'>
                        <div className='w-full p-5 flex m-auto h-full items-center justify-center'>
                            <button className=' bg-active text-primary p-2 px-5 rounded-[25rem] w-[80%] max-w-[15rem] hover:bg-opacity-90 active:bg-opacity-80 '>
                                Book Now
                            </button>
                        </div>

                    </div>
                </div>
                <SelectDate checkInDate={CheckInDate} minDate={minDate} iType={ItemType} getData={getNewData} />
            </div>
            <div className='bg-primary relative z-[1] rounded-b-lg w-0 lg:w-[95%] m-auto h-4 shadow-gray-900 shadow-lg'></div>
            <div className='bg-primary relative z-0 rounded-b-lg w-0 lg:w-[80%] m-auto h-4 shadow-lg'></div>
        </>
    )
}

export default DateBooking