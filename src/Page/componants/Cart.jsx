import React from 'react'
import Image from '../componants/Image'
import Flex from '../componants/Flex'

import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { FaCodeCompare } from 'react-icons/fa6'

const Cart = ({price,title,src}) => {
  return (
    <div className='w-[370px] h-[465px] relative group'>
        <div className='w-[376px] h-[376px] bg-third'>
        <Image src={src} className='w-full '/>
        </div>
        <div className='w-[370px] h-[165px] bg-white absolute bottom-[0px] group-hover:bottom-[80px] duration-500
        opacity-0 group-hover:opacity-100 left-[7px] cursor-pointer'>
            <ul className='flex flex-col items-end gap-y-5 pt-5 group'>
                <li className='font-DM font-normal hover:font-bold duration-500 text-sm hover:text-second text-frist'>Add to Wish List <FaHeart className='inline ml-4'/></li>
                <li className='font-DM font-normal hover:font-bold duration-500 text-sm hover:text-second text-frist'>Compare <FaCodeCompare className='inline ml-4'/></li>
                <li className='font-DM font-normal hover:font-bold duration-500 text-sm hover:text-second text-frist'>Add to Cart <FaShoppingCart className='inline ml-4'/></li>
            </ul>
        </div>
        <Flex className='justify-between items-center mt-6 mb-4'>
        <p className='font-DM font-bold text-[20px] text-second'>{title}</p>
        <p className='font-DM font-normal text-sm text-frist leading-7'>{price}</p>
        </Flex>
        <p className='font-DM font-normal text-sm text-frist leading-7'>Black</p>
        <button className='absolute top-5 left-4 bg-second py-[10px] px-[30px] text-white'>New</button>

    </div>
  )
}

export default Cart