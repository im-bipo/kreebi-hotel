import React from 'react'
import VideoPlaceholder from '../assets/images/hotelPlaceHolder.avif'
import { IoRestaurantOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import resturantImg from '../assets/images/resturants.avif'
import food from '../assets/images/food.avif'
import PlayPause from './AboutUsFeatures/PlayPause';
const AboutUs = () => {

    return (
        <>
            <div className='bg-stdBgOne px-3 pb-20 md:pt-20 flex flex-col md:flex-row'>
                <div className='flex flex-col max-w-lg m-auto md:w-1/2 md:pl-5'>
                    <div className='my-10'>
                        <IoRestaurantOutline className='text-primary text-[4rem] rounded-lg border border-gray-300  p-2' />
                    </div>
                    <h2 className='text-4xl font-thin max-w-[15rem] text-gray-800'>
                        Resturants & Bars
                    </h2>
                    <p className=' text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta consequatur. Cupiditate porro quaerat accusamus neque vitae, fugiat qui tenetur.</p>
                    <button className='w-fit py-2 px-10 rounded-3xl border border-gray-400 my-5 hover:bg-gray-200 hover:border-primary active:bg-primary active:text-white'>RESERVE A TABLE</button>
                </div>


                <div className='w-full h-[30rem] rounded-[2rem]  shadow-lg max-w-lg m-auto md:w-1/2 '>
                
                <div>
                        <img id='kreebiHotelVideo' src={resturantImg} width="750" height="500" className='rounded-t-[2rem] h-[24rem] object-cover infinity'>
                        </img>
                    </div>

                    <div id="controls" className=' flex items-center p-5 bg-gray-50 h-24 rounded-b-[25px] relative z-[2] shadow-lg'>
                        <div onClick={() => ControlButton('play')} className='p-4 rounded-full text-white  bg-primary w-fit'>
                            <GiHamburger />
                        </div>
                        <div className='pl-3'>
                            <h6 className='font-medium text-primary'>+$20</h6>
                            <p className='text-gray-400'>Lunch Price</p>
                        </div>
                    </div>
                    
                    <div className='w-[90%] shadow-lg rounded-b-3xl h-8 bg-gray-200 m-auto relative z-[1] bottom-3'>
                    </div>
                    <div className='w-[70%] shadow-lg rounded-b-3xl h-5 bg-gray-200 m-auto relative z-0 bottom-3'>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AboutUs