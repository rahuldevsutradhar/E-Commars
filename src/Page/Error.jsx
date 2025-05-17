import React from 'react'
import Container from './componants/Container'
import Button from './componants/Button'
import Image from './componants/Image'
import error from '../assets/error.png'
import { FaSearch } from 'react-icons/fa'

const Error = () => {
  return (
    <section className='mb-[140px] mt-[81px]'>
      <Container>
        <Image src={error}/>
        <p className='font-normal font-DM text-frist text-sm w-[635px] mt-[59px] mb-[51px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <div className='relative w-[644px] mb-[60px]'>
          <input className='w-full p-5' type="text"  placeholder='Type to search'/>
          <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2' />
        </div>
        <Button text='Back to Home'/>
      </Container>
    </section>
  )
}

export default Error