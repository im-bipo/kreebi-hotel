import React, { useState } from 'react'

const NoOfPeople = (props) => {

    const [adult,setAdult] = useState(2)
    const [child,setChild] = useState(1)

    const Change = (cat,exp) =>
    {
        switch(cat){
            case ('Adult'):
               (exp == '+' 
               ?setAdult(adult+1) 
               :( adult!=0 
                    ?setAdult(adult-1) 
                    :setAdult(0) )
                )
                break;

            case ('Child'):
                (exp == '+' 
                ?setChild(child+1) 
                :( child!=0 
                     ?setChild(child-1) 
                     :setChild(0) )
                 )
                 break;
        }
        
    } 
    props.PeopleB(adult,child)
    return (
    <>
    <div className='w-fit  py-5 text-center '>
                            <h6>Adults</h6>
                            <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                                <button onClick={() => {Change('Adult','+')}}>+</button>
                                <h5 className='text-[3rem]'>{adult}</h5>
                                <button onClick={() => {Change('Adult','-')}}>-</button>
                            </div>
                        </div>
                        <div className='w-fit  py-5 text-center'>
                            <h6>Children</h6>
                            <div className='flex justify-center items-center p-5 space-x-2 text-2xl'>
                                <button onClick={() => {Change('Child','+')}}>+</button>
                                <h5 className='text-[3rem]'>{child}</h5>
                                <button onClick={() => {Change('Child','-')}}>-</button>
                            </div>
                        </div>
    </>
  )
}

export default NoOfPeople