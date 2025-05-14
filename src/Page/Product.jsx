import React from 'react'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Image from './componants/Image'
import Image_1 from '../assets/Image_1.png'
import Image_2 from '../assets/Image_2.png'
import Image_3 from '../assets/Image_3.png'
import Image_4 from '../assets/Image_4.png'
import Subheading from './componants/Subheading'
import { FaStar } from 'react-icons/fa'
import Button from './componants/Button'

const Product = () => {
  return (
    <section className='py-[150px]'>
      <Container>
        <Flex className='flex-wrap justify-between gap-y-10'>
          <div className='w-[49%]'>
            <Image src={Image_1} className='w-full'/>
          </div>
          <div className='w-[49%]'>
            <Image src={Image_2} className='w-full'/>
          </div>
          <div className='w-[49%]'>
            <Image src={Image_3} className='w-full'/>
          </div>
          <div className='w-[49%]'>
            <Image src={Image_4} className='w-full'/>
          </div>
        </Flex>
        <Subheading text='Product' className='pt-[49px] pb-[15px]'/>
        <Flex className='gap-x-[25px]'>
          <ul className='flex gap-x-[2px] items-center'>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
          </ul>
          <p className='text-frist font-normal text-sm'>1 Review</p>
        </Flex>
        <Flex className='py-6 items-center gap-x-6 border-b border-[#F0F0F0] w-[49%]'>
          <del className='text-frist font-normal text-[16px] font-DM'>$88.00</del>
          <p className='text-second font-bold text-[20px] font-DM'>$44.00</p>
        </Flex>
        <Flex className='gap-x-[53px] items-center py-[30px]'>
          <h4 className='text-second font-bold text-[20px] font-DM '>COLOR:</h4>
          <ul className='flex gap-x-[15px]'>
            <li className='w-[20px] h-[20px] bg-[#979797] rounded-full hover:scale-[1.5] duration-300'></li>
            <li className='w-[20px] h-[20px] bg-[#FF8686] rounded-full hover:scale-[1.5] duration-300'></li>
            <li className='w-[20px] h-[20px] bg-[#7ED321] rounded-full hover:scale-[1.5] duration-300'></li>
            <li className='w-[20px] h-[20px] bg-[#B6B6B6] rounded-full hover:scale-[1.5] duration-300'></li>
            <li className='w-[20px] h-[20px] bg-[#15CBA5] rounded-full hover:scale-[1.5] duration-300'></li>           
          </ul>
        </Flex>
        <Flex className='gap-x-[75px] items-center'>
          <h4 className='text-second font-bold text-[20px] font-DM '>SIZE:</h4>
          <select className='py-2 px-12 border border-[#F0F0F0]'>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XLL</option>         
          </select>
        </Flex>
        <Flex className='gap-x-[75px] items-center py-[35px] border-b border-[#F0F0F0] w-[49%]'>
          <h4 className='text-second font-bold text-[20px] font-DM '>QUANTITY:</h4>
          <div className='flex gap-x-[35px] border border-[#F0F0F0]'>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
        </Flex>          
        <Flex className='items-center gap-x-[26px] border-b border-[#F0F0F0] w-[49%] py-5'>
          <h4 className='text-second font-bold text-[20px] font-DM '>STATUS:</h4>
           <h4 className='text-frist font-normal text-[16px] font-DM '>In stock</h4>
        </Flex>
        <Flex className='pt-[45px] gap-x-5 border-b border-[#F0F0F0] w-[49%] py-5'>
          <Button text='Add to Wish List'/>
          <Button text='Add to Cart'/>
        </Flex>

        <div className='py-6'>
          <div className='flex justify-between py-5 border border-[#F0F0F0] '>
          <h1 className='text-second font-bold text-[20px] font-DM'>FEATURES & DETAILS</h1>
          <h1 className='text-second font-bold text-[20px] font-DM'>+</h1>
        </div>
        </div>
        <div className='flex justify-between py-5 border border-[#F0F0F0] '>
          <h1 className='text-second font-bold text-[20px] font-DM'>SHIPPING & RETURNS</h1>
          <h1 className='text-second font-bold text-[20px] font-DM'>+</h1>
        </div>
        <div className='pt-5 pb-[123px]'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <Flex className='gap-x-15 items-center pb-[42px]'>
          <h1 className='text-frist font-normal text-[20px] font-DM'>Description</h1>
          <h1 className='text-second font-bold text-[20px] font-DM'>Reviews (1)</h1>
        </Flex>
        <p className='text-frist font-normal text-sm font-DM border-b border-[#F0F0F0] py-5'>1 review for Product</p>
        <Flex className='gap-x-[37px] pt-6 pb-4'>
           <h4 className='text-second font-normal text-[16px] font-DM '>John Ford</h4>
           <ul className='flex gap-x-[2px] items-center'>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
            <li><FaStar className='text-[#FFD881] text-sm'/></li>
          </ul>
        </Flex>
        <p className='border-b border-[#F0F0F0] py-5 text-frist font-normal text-[16px] font-DM'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <h1 className='text-second font-bold text-[20px] font-DM mt-[53px] mb-[48px]'>Add a Review</h1>
        <div>
          <h1 className='text-second font-bold text-[20px] font-DM pb-[14px]'>Name</h1>
          <input type="name" name="" id="" placeholder='Your name here' className='text-frist font-normal text-[14px] border-none font-DM'/>
        </div>
        <div className='my-6'>
          <h1 className='text-second font-bold text-[20px] font-DM pb-[14px]'>Email</h1>
          <input type="Email"  placeholder='Your email here' className='text-frist font-normal text-[14px] border-none font-DM'/>
        </div>
        <div className='my-6'>
          <h1 className='text-second font-bold text-[20px] font-DM pb-[14px]'>Review</h1>
          <input type="Email"  placeholder='Your email here' className='text-frist font-normal text-[14px] border-none font-DM pb-20 pr-20'/>
        </div>
        <Button text='Post' className='px-[81px] mb-[100px]'/>
      </Container>
    </section>
  )
}

export default Product