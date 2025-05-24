import React from 'react'
import Navbar from './Layout/Navbar'
import Menubar from './Layout/Menubar'
import Footer from './Layout/Footer'
import Image from './componants/Image'
import bannar from '../assets/bannar.jpg'
import bnone from '../assets/bnone.png'
import bntwo from '../assets/bntwo.png'
import two from '../assets/two.png'
import delivary from '../assets/delivary.png'
import refresh from '../assets/refresh.png'
import Container from './componants/Container'
import Flex from './componants/Flex'
import Add from './Layout/Add'
import { Link } from 'react-router-dom'
import Cart from './componants/Cart'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import banner2 from '../assets/banner2.png'
import Subheading from './componants/Subheading'


import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SampleNextArrow from './componants/SampleNextArrow';
import SamplePrevArrow from './componants/SamplePrevArrow'
const Home = () => {
  var settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <>
      <section className='mb-[140px]'>
        <Slider {...settings}>
            <div>
              <Link to='/shop'><Image className='w-full' src={bannar} /></Link>
            </div>
            <div>
              <Link to='/shop'><Image className='w-full' src={bannar} /></Link>
            </div>
            <div>
              <Link to='/shop'><Image className='w-full' src={bannar} /></Link>
            </div>
            <div>
              <Link to='/shop'><Image className='w-full' src={bannar} /></Link>
            </div>
          </Slider>

        

        



        
        <Container>
          <Flex className='justify-between'>
            <Flex className='py-[30px] gap-x-4'>
              <Image src={two} />
              <p className='font-DM font-normal text-[#6D6D6D] text-[16px]'>Two years warranty</p>
            </Flex>
            <Flex className='py-[30px] gap-x-4'>
              <Image src={delivary} />
              <p className='font-DM font-normal text-[#6D6D6D] text-[16px]'>Free shipping</p>
            </Flex>
            <Flex className='py-[30px] gap-x-4'>
              <Image src={refresh} />
              <p className='font-DM font-normal text-[#6D6D6D] text-[16px]'>Return policy in 30 days</p>
            </Flex>
          </Flex>
        </Container>
      </section>
      <Add />
      <section className='mb-[118px]'>
        <Container>
          <Subheading text="New Arrivals" className='mb-[47px]' />
          <Slider {...settings}>
            <div>
              <Cart src={product1} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product3} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product4} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product2} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product1} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product3} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product4} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product2} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
          </Slider>
          {/* <Flex className='flex gap-x-10'>
      <Cart src={product1} title="Basic Crew Neck Tee" price="$44.00"/>
      <Cart src={product3} title="Basic Crew Neck Tee" price="$44.00"/>
      <Cart src={product4} title="Basic Crew Neck Tee" price="$44.00"/>
      <Cart src={product2} title="Basic Crew Neck Tee" price="$44.00"/>
      </Flex>       */}
        </Container>
      </section>
      <section className='mb-[118px]'>
        <Container>
          <Subheading text="Our Bestsellers" className='mb-[47px]' />

          <Slider {...settings}>
            <div>
            <Cart src={p1} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p2} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p3} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p4} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product1} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product3} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product4} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product2} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
          </Slider>    
        </Container>
      </section>
      <section className='mb-[128px]'>
        <Link to='/shop'><Image className='w-full' src={banner2} /></Link>
      </section>
      <section className='mb-[118px]'>
        <Container>
          <Subheading text="Our Bestsellers" className='mb-[47px]' />

          <Slider {...settings}>
            <div>
            <Cart src={p5} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p6} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p7} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
            <Cart src={p8} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product1} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product3} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product4} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
            <div>
              <Cart src={product2} title="Basic Crew Neck Tee" price="$44.00" />
            </div>
          </Slider>    
        </Container>
      </section>
    </>
  )
}

export default Home