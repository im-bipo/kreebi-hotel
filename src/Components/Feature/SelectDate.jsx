import React, { useState,useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
const SelectDate = (props) => {
    const ItemType = props.iType
    const [startDate, setStartDate] = useState(new Date());
    
    //callback function to send new date to parent element
    useEffect(
        () => {
        props.getData(ItemType , startDate);
        removeDatePicker();
    }, [startDate])
  

  const removeDatePicker = () => {
      document.getElementById('DatePickerContainer').classList.add('hidden')
    }

    //open date picker when user click on date 
    if (ItemType){
            document.getElementById('DatePickerContainer').classList.remove('hidden')
    }
  return (
   <div id='DatePickerContainer' className='hidden'>
                    <div className='fixed flex flex-col justify-center items-center w-full h-full bg-gray-950 bg-opacity-70 top-0 left-0 right-0 bottom-0' >
                        <div onClick={removeDatePicker} className='relative  bottom-5 cursor-pointer'>
                            Select your {ItemType} date
                        </div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            inline
                        />
                    </div>
                </div>
  );
}

export default SelectDate