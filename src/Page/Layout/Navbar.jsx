import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import Image from '../componants/Image'
import Logo from '../../assets/Logo.png'
import List from '../componants/List'

const Navbar = () => {
  return (
     <section className='py-[32px]'>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <Image src={Logo}/>
                </div>

                <div className='w-8/12'>
                    <ul className='flex gap-x-10'>
                    <List text="Home"/>
                    <List text="Shop"/>
                    <List text="About"/>
                    <List text="Contacts"/>
                    <List text="Journal"/>
                    </ul>
                
                
                    
                
               
                </div>

            </Flex>
        </Container>
     </section>
  )
}

export default Navbar