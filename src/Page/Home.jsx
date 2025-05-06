import React from 'react'
import Navbar from './Layout/Navbar'
import Menubar from './Layout/Menubar'
import Footer from './Layout/Footer'
import Image from './componants/Image'
import bannar from '../assets/bannar.jpg'
import two from '../assets/two.png'
import delivary from '../assets/delivary.png'
import refresh from '../assets/refresh.png'
import Container from './componants/Container'
import Flex from './componants/Flex'

const Home = () => {
  return (
    <section>
      <Image className='w-full' src={bannar}/>
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
  ) 
}    

export default Home