import React from 'react'
import Container from './componants/Container'
import { useSelector } from 'react-redux'



const Account = () => {
 
  
  return (
    <section className='my-[130px]'>
        <Container>
            <h1 className='font-bold font-DM text-second text-[50px]'>My Account</h1>
            <p className='font-normal font-DM text-frist text-sm  pt-[11px] mb-[127px]'>  >  My account</p>

        </Container>
    </section>
  )
}

export default Account