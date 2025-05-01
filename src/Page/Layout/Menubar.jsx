import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import Image from '../componants/Image'
import menubar from '../../assets/menubar.png'
import { IoSearch } from 'react-icons/io5'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const Menubar = () => {
  return (
    <section className='py-[25px] bg-[#F5F5F3]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12'>
                <Flex className='gap-x-2.5 items-center'>
                <Image src={menubar} alt='menubar'/>
                <p className='text-sm font-normal font-DM'>Shop by Category</p>
                </Flex>
                </div>
                <div className='w-8/12 relative' >
                  <input className='bg-white py-4 pl-5 pr-16 w-full placeholder:text-sm placeholder:text-[#C4C4C4] placeholder:font-normal placeholder:font-DM ' type="text"
                   placeholder='Search Products.....'/>
                   <IoSearch className='absolute top-1/2 right-7 -translate-1/2 w-4 h-4 '/>
                </div>
                <div className='w-4/12 '>
                    <Flex className='justify-end'>
                    <FaUserAlt />
                    <IoIosArrowDown className='ml-2.5'/>
                    <FaShoppingCart className='ml-10 '/>
                    </Flex>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Menubar