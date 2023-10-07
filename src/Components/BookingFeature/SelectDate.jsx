import React, { useState,useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const SelectDate = (props) => {
    const checkState = props.iType
    const minDate = props.minDate
    // const minDate = props.minDate
    
    const [newDate, setnewDate] = useState();

    
    useEffect(
        () => {
            props.getData(checkState , newDate);
            removeDatePicker();
        }, [newDate])
        
        
        const removeDatePicker = () => {
            document.getElementById('DatePickerContainer').classList.add('hidden')
            //to reset type of item so we can reselect the same element

    }

    //open date picker when user click on date 
    if (checkState){
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
                             Select your {checkState} date 
                            </p>
                        </div>
                        <DatePicker
                            minDate={minDate}
                            // onClick={handleAction}
                            onChange={(date) => setnewDate(date)}
                            inline
                        />
                    </div>
                </div>
  );
}

export default SelectDate