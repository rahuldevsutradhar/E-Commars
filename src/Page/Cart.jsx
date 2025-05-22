import React from 'react'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Image from './componants/Image'
import cart from '../assets/cart.png'
import { RxCrossCircled } from 'react-icons/rx'
import Button from './componants/Button'

const Cart = () => {
  return (
    <section className='my-[125px]'>
      <Container>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Cart</h1>
        <p className='font-normal font-DM text-frist text-sm  pt-[11px] mb-[136px]'>Home  >  Cart</p>

        <Flex className='bg-[#F5F5F3] py-[34px] pl-[20px]'>
          <div className='w-3/12 font-bold font-DM text-second text-sm'>Product </div>
          <div className='w-3/12 font-bold font-DM text-second text-sm'>Price</div>
          <div className='w-3/12 font-bold font-DM text-second text-sm'>Quantity</div>
          <div className='w-3/12 font-bold font-DM text-second text-sm'>Total</div>
        </Flex>
        <Flex className='bg-white py-[34px] pl-[20px]'>
          <div className='w-3/12 font-bold font-DM text-second text-sm flex items-center gap-x-10'>
          <RxCrossCircled  />
          <Image src={cart}/> 
          <p className='font-bold font-DM text-second text-[16px]'>Product name</p>
          </div>
          <div className='w-3/12 font-bold font-DM text-second text-[20px] flex items-center'><p >$44.00</p></div>
          <div className='w-3/12 font-bold font-DM text-second text-sm flex items-center'>
          <div className='flex gap-x-[35px] border border-[#F0F0F0]'>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div> 
          </div>
          <div className='w-3/12 font-bold font-DM text-second text-[20px] flex items-center'><p >$44.00</p></div>
        </Flex>

        <div className='flex items-center '>
          <select className='py-2 px-12 border border-[#F0F0F0]'>
            <option value="">Size</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XLL</option>         
          </select>
        <p className='font-bold font-DM text-second text-sm px-[25px]'>Apply coupon</p>
       
        </div>
         <p className='font-bold font-DM text-second text-sm text-end'>Update cart</p>
         <p className='font-bold font-DM text-second text-sm text-end mt-[54px]'>Cart totals</p>

        <div className='w-full flex justify-end pt-6'>
          <div >
            <div className='flex items-center gap-x-[253px] top-0 right-0'>
              <p className='font-bold font-DM text-second text-sm text-end'>Subtotal</p>
              <p className='font-bold font-DM text-frist text-sm text-end'>389.99 $</p>
            </div>
            <div className='flex items-center gap-x-[278px] top-0 right-0 mt-[16px] mb-[30px]'>
              <p className='font-bold font-DM text-second text-sm text-end'>Total</p>
              <p className='font-bold font-DM text-frist text-sm text-end'>389.99 $</p>
            </div>
            <Button text='Proceed to Checkout'  />
          </div>
        </div>
      </Container>

    </section>
  )
}

export default Cart