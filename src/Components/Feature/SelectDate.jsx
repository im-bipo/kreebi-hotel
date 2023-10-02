import React, { useState,useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const SelectDate = (props) => {
    const ItemType = props.iType
    const CheckInDate = props.checkInDate
    const [dateError, setDateError] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    
    //callback function to send new date to parent element
    const handleChange = (date) =>{
        if(ItemType === 'Check Out')
        {
            if(CheckInDate.getFullYear()*10000+CheckInDate.getMonth()*100+CheckInDate.getDate()<= date.getFullYear()*10000+date.getMonth()*100+date.getDate()){
                setStartDate(date)
            }
            else{
                setDateError('!!! Invalid Date !!!')
            }
        }
        else{
            setStartDate(date)
        }
    }


    
    useEffect(
        () => {
            removeDatePicker();
        }, [startDate])
        
        
        const removeDatePicker = () => {
            document.getElementById('DatePickerContainer').classList.add('hidden')
            setDateError('')
            //to reset type of item so we can reselect the same element

            props.getData(ItemType , startDate);
    }

    //open date picker when user click on date 
    if (ItemType){
            document.getElementById('DatePickerContainer').classList.remove('hidden')
    }
  return (
   <div id='DatePickerContainer' className='hidden'>
                    <div className='fixed flex flex-col justify-center items-center w-full h-full bg-gray-950 bg-opacity-70 top-0 left-0 right-0 bottom-0' >
                        <div onClick={removeDatePicker} className='relative  bottom-10 cursor-pointer left-32'>
                        <div className='bg-white w-5 rounded-lg h-1 rotate-45'></div>
                        <div className='bg-white w-5 h-1 rounded-lg -rotate-45'></div>
                        </div>
                        <div className='relative  bottom-5 cursor-pointer'>
                           <p>
                             Select your {ItemType} date 
                            </p>
                            <p className='text-center text-[red]'>
                             {dateError}
                            </p>
                        </div>
                        <DatePicker
                            onChange={(date) => handleChange(date)}
                            inline
                        />
                    </div>
                </div>
  );
}

export default SelectDate