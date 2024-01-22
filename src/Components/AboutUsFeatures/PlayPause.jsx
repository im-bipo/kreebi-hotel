import React,{ useState } from 'react'
import { FaPause, FaPlay } from "react-icons/fa6";
const PlayPause = () => {
    const [state, setState] = useState('pause')
    document.getElementById('kreebiHotelVideo')
    
    const ControlButton =(e)=>{
        if (e==='play'){
            setState(e)
            document.getElementById('kreebiHotelVideo').play()
        }
        else{
            document.getElementById('kreebiHotelVideo').pause()
            setState(e)

        }
    }
    
    switch (state)
    {
        case 'play':
        {
        return (
            <div onClick={()=>ControlButton('pause')} className='cursor-pointer p-4 rounded-full text-white bg-primary w-fit'>
                <FaPause />
            </div>
        )
    }
    
    case 'pause':
        {
            return (
                <div onClick={()=>ControlButton('play')} className='cursor-pointer p-4 rounded-full text-white  bg-primary w-fit'>
                    <FaPlay />
            </div>
        )
    }
}
}
export default PlayPause