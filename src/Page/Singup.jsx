import React from 'react'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Button from './componants/Button'

const Singup = () => {
  return (
    <section className='my-[124px]'>
      <Container>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Sing Up</h1>
        <p className='font-normal font-DM text-frist text-sm  pt-[11px] mb-[124px]'>Home  >  Sign up</p>
        <p className='font-normal mb-[80px] font-DM text-frist w-[644px] text-[16px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
         
         <h1 className='font-bold mb-[42px] font-DM text-second text-[39px]'>Your Personal Details</h1>
        <Flex className='flex gap-x-10'>
          <label htmlFor="Name" className='font-bold mb-[10px] font-DM text-second text-[16px]'>First Name <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Name' placeholder='First Name'/>
          </label>
          <label htmlFor="Name" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Last Name <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Name' placeholder='Last Name'/>
          </label> 
          </Flex>
          
        <Flex className='flex gap-x-10'>
          <label htmlFor="Email" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Email address <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Email' placeholder='company@domain.com'/>
          </label>
          <label htmlFor="Telephone" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Telephone <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Number' placeholder='Your phone number'/>
          </label> 
          </Flex>

          <h1 className='font-bold mb-[42px] font-DM text-second text-[39px] border-t border-[#F0F0F0] mt-[58px] '>New Customer</h1>
        <Flex className='flex gap-x-10'>
          <label htmlFor="Address " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Address 1 <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Address' placeholder='4279 Zboncak Port Suite 6212'/>
          </label>
          <label htmlFor="Address " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Address 2 <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Address ' placeholder='-'/>
          </label> 
          </Flex>

        <Flex className='flex gap-x-10'>
          <label htmlFor="City " className='font-bold mb-[10px] font-DM text-second text-[16px]'>City <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='City' placeholder='Your City'/>
          </label>
          <label htmlFor="Post Code " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Post Code <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='number ' placeholder='05228'/>
          </label> 
          </Flex>

        <Flex className='flex gap-x-10 pb-[70px] border-b border-[#F0F0F0]'>    
          <label htmlFor="City " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Country <br />
          <select className='py-4 w-[508px] mb-7 border border-b border-[#F0F0F0] font-DM text-frist font-normal text-[16px]'>
            <option value="">Please select</option>
            <option value="">India</option>
            <option value="">Bangladesh</option>
            <option value="">Nepal</option>
            <option value="">United State of America</option>
            <option value="">Rassia</option>         
          </select>
          </label>

          <label htmlFor="City " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Region/State <br />
          <select className='py-4 w-[508px] mb-7 border border-b border-[#F0F0F0] font-DM text-frist font-normal text-[16px]'>
            <option value="">Please select</option>
            <option value="">Dheli</option>
            <option value="">Dhaka</option>
            <option value="">Kathmundu</option>
            <option value="">Washington DC</option>
            <option value="">Mosko</option>         
          </select>
          </label>       
          </Flex>

          <h1 className='font-bold mb-[42px] font-DM text-second text-[39px] my-[60px] '>Your Password</h1>
        <Flex className='flex gap-x-10'>
          <label htmlFor="Password " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Password <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Password' placeholder='Password'/>
          </label>
          <label htmlFor="Password " className='font-bold mb-[10px] font-DM text-second text-[16px]'>Repeat Password<br />
           <input className='border-b border-[#F0F0F0] py-4 w-[508px] mb-7' type="text" id='Password ' placeholder='Repeat Password'/>
          </label> 
          </Flex>

          <div className='mb-[25px] mt-[65px]'>
  <label htmlFor="Password " className='font-normal mb-[25px] font-DM text-frist text-[16px] mr-[15px]'>
    <input type="checkbox"/> I have read and agree to the Privacy Policy
  </label>
</div>
<div>
  <span className='font-normal mb-[10px] font-DM text-frist text-[16px] mr-[33px]'>Subscribe Newsletter</span>
  <label className='font-normal mb-[25px] font-DM text-frist text-[16px] mr-[33px]'>
    <input type="radio" name="newsletter" value="yes"/> Yes
  </label>
  <label className='font-normal mb-[10px] font-DM text-frist text-[16px] mr-[33px]'>
    <input type="radio" name="newsletter" value="no" /> No
  </label>
  
</div>
<Button text='Log in' className='mt-[27px]'/>
      </Container>
    </section>
  )
}

export default Singup