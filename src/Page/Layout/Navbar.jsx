import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import Image from '../componants/Image'
import Logo from '../../assets/Logo.png'
import List from '../componants/List'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <section className='py-[32px]'>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <Link to ={"/"}><Image src={Logo}/></Link>
                </div>

                <div className='w-8/12'>
                    <ul className='flex gap-x-10'>
                    <Link to={'/'}><List text="Home"/></Link>
                    <Link to={'/shop'}><List text="Shop"/></Link>
                    <Link to={'/About'}><List text="About"/></Link>
                    <Link to={'/contact'}><List text="Contacts"/></Link>
                    <Link to={'/Journal'}><List text="Journal"/></Link>
                    
                    
                    
                    
                    </ul>
                
                
                    
                
               
                </div>

            </Flex>
        </Container>
     </section>
  )
}

export default Navbar