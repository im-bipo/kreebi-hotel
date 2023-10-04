import React from 'react'
import VideoPlaceholder from '../assets/images/hotelPlaceHolder.avif'
import { RiHotelBedFill } from "react-icons/ri";
import video from '../assets/video/hotelVideo.mp4'
import barImg from '../assets/images/BarChart.png'
import PlayPause from './AboutUsFeatures/PlayPause';
const AboutUs = () => {

    return (
        <>
            <div className='bg-stdBgOne px-3 py-20 flex flex-col md:flex-row'>
                <div className='flex flex-col max-w-lg m-auto md:w-1/2'>
                    <div className='my-10'>
                        <RiHotelBedFill className='text-primary text-[4rem] border border-gray-300  p-2' />
                    </div>
                    <h2 className='text-4xl font-thin max-w-[15rem] text-gray-800'>
                        Luxury Plaza Hotel for you
                    </h2>
                    <p className=' text-gray-500 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, soluta consequatur. Cupiditate porro quaerat accusamus neque vitae, fugiat qui tenetur.</p>
                    <button className='w-fit py-2 px-10 rounded-3xl border border-gray-400 my-5 hover:bg-gray-200 hover:border-primary active:bg-primary active:text-white'>About us</button>
                </div>


                <div className='w-full h-[30rem] rounded-[2rem]  shadow-lg max-w-lg m-auto md:w-1/2'>
                
                    <div>
                        <video id='kreebiHotelVideo' src={video} width="750" height="500" poster={VideoPlaceholder} className='rounded-t-[2rem] h-[24rem] object-cover infinity'>
                        </video>
                    </div>

                    <div id="controls" className=' flex items-center p-5 bg-gray-50 h-24 rounded-b-[25px] relative z-[2] shadow-lg'>
                        <PlayPause />
                        <div className='pl-3'>
                            <h6 className='font-medium text-primary'>Play Video</h6>
                            <p className='text-gray-400'>Kreebi Hotel</p>
                        </div>

                    </div>
                    
                    <div className='w-[90%] shadow-lg rounded-b-3xl h-8 bg-gray-200 m-auto relative z-[1] bottom-3'>
                    </div>
                    <div className='w-[70%] shadow-lg rounded-b-3xl h-5 bg-gray-200 m-auto relative z-0 bottom-3'>
                    </div>

                    <div id="bookingP" className='flex justify-end'>
                        <div id="BoolingPCard" className='w-fit  px-6 rounded-lg bg-gray-50 shadow-lg relative z-10 bottom-64 right-3 h-40 text-center text-gray-600'>
                            <p className='relative top-5 right-7'>%</p>
                            <p className='text-4xl font-thin'>98</p>
                            <p className=' font-thin text-gray-500'>Sucess booking</p>
                            <img src={barImg} width='100rem' alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default AboutUs