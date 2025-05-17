import React from 'react'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Button from './componants/Button'

const Login = () => {
  return (
    <section className='my-[130px]'>
      <Container>
        <h1 className='font-bold font-DM text-second text-[64px]'>Login</h1>
        <p className='font-normal font-DM text-frist text-sm  pt-[11px] mb-[128px]'>Home    Login</p>
        <p className='font-normal font-DM text-frist text-[16px] w-[644px]  pt-[11px] mb-[120px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <h1 className='font-bold mb-[42px] font-DM text-second text-[39px]'>Returning Customer</h1>
          
        <Flex className='flex gap-x-10'>
          <label htmlFor="Email" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Email address <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Email' placeholder='company@domain.com'/>
          </label>
          <label htmlFor="Password" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Password <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Password' placeholder='.........'/>
          </label> 
          </Flex>

          <Button text='Log in' className='mb-[129px]'/>
           <h1 className='font-bold font-DM text-second text-[39px] mb-[38px]'>New Customer</h1>
           <p className='font-normal font-DM text-frist text-sm w-[644px] mb-[51px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
           <Button text='Continue'/>
      </Container>
    </section>
  )
}

export default Login