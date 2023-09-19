import React from 'react'

const HeroLander = () => {
  return (
    <>
     <div className='h-[40rem] bg-[url("./assets/images/main-banner.jpg")] bg-cover sm:bg-center lg:h-[50rem] bg-no-repeat pt-20 text-white p-5' >
        <div className='md:m-20'>

        <h1 className='w-[5rem] text-[3rem] font-[200]'>
            Exclusive Boutique Hotel
        </h1>
        <p className='font-thin text-[.9rem] my-5'>
            Luxry Botuque hotel
        </p>
        <div className='flex space-x-4'>
            <div className="border w-10 rounded-full px-4 py-2 ">f</div>
            <div className="border w-10 rounded-full px-4 py-2 ">x</div>
            <div className="border w-10 rounded-full px-4 py-2 ">i</div>
        </div>
        </div>
        <div className='bg-[#2d4765ff] mt-[6rem] p-5 rounded-2xl relative lg:-bottom-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis molestiae ipsam id. Asperiores nisi obcaecati blanditiis rem veniam harum, unde dolore deserunt temporibus dolorum omnis dicta sed quos quaerat? 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis doloribus nemo tempore quod. Perspiciatis facilis consequuntur dicta eligendi 
        </div>
     </div>
    </>
  )
}

export default HeroLander