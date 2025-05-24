import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';



const SampleNextArrow = ({className, style, onClick}) => {
  return (
    <div className={`${className} w-[64px] h-[64px] rounded-full bg-[#979797]
     flex items-center justify-center top-[50%] right-0 -translate-y-1/2 absolute `}  
      onClick={onClick}>
        <FaLongArrowAltRight className='text-white'/>
        

    </div>
  )
}

export default SampleNextArrow