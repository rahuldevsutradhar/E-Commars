import React from 'react'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Image from './componants/Image'
import Button from './componants/Button'
import aboutimg from '../assets/aboutimg (1).png'
import aboutimg2 from '../assets/aboutimg2.png'
import AboutCart from './componants/AboutCart'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const About = () => {
  let data3=useSelector((state)=>state.bread.prevValue)
  let data2=useSelector((state)=>state.bread.aftervalue)
  
  return (
    <section className='py-[130px]'>
      <Container>
         <div>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>About</h1>
      </div>
      <div className='flex gap-x-3'>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>
          <Link to={data2 === "home" ? "/" : `/${data2}`}>
          {data2 ? <span>{data2} &gt;</span> : null }</Link>

          <Link to={data3 === "home" ? "/" : `/${data3}`}>
          {data3 ? <span>{data3} &gt;</span> : null }</Link>
        </h1>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>About</h1>
      </div>
        <Flex className='justify-between py-[136px] gap-x-[40px]'>
          <div className='w-1/2 relative'>
            <Image src={aboutimg}  className='w-[49%]'/>
            <Button text='Our Brands' className='absolute top-80 left-48 -translate-x-1/2'/>
          </div>
          <div className='w-1/2 relative'>
            <Image src={aboutimg2}  className='w-[49%]'/>
            <Button text='Our Stores' className='absolute top-80 left-48 -translate-x-1/2'/>
          </div>
        </Flex>
        <p className='font-DM font-normal text-second text-[39px] mb-[118px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        <Flex className='justify-between'>
          <AboutCart title='Our Vision' text='Lorem ipsum dolor sit  ex provident. Expedita, rem? Eveniet delectus cum eius molestiae at ducimus quae, illo, numquam exercitationem nobis doloremque excepturi modi saepe, quos deleniti perferendis consectetur voluptates omnis eaque velit molestias. Sit saepe ut quos! Cumque explicabo deserunt repudiandae.'/>
          <AboutCart title='Our Story' text='Lorem ipsum dolor sit  ex provident. Expedita, rem? Eveniet delectus cum eius molestiae at ducimus quae, illo, numquam exercitationem nobis doloremque excepturi modi saepe, quos deleniti perferendis consectetur voluptates omnis eaque velit molestias. Sit saepe ut quos! Cumque explicabo deserunt repudiandae.'/>
          <AboutCart title='Our Brands' text='Lorem ipsum perferendis consectetur voluptates omnis eaque velit molestias. Sit saepe ut quos! Cumque explicabo deserunt repudiandae.'/>

        </Flex>
      </Container>
    </section>
  )
}
export default About