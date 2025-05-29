import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import Image from '../componants/Image'
import Logo from '../../assets/Logo.png'
import List from '../componants/List'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activebutton } from '../../slices/breadcumbs'

const Navbar = () => {
    let dispatch = useDispatch();
    
let handleIncrement = (name) => {
  dispatch(activebutton(name));
}
    
  return (
     <section className='py-[32px]'>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <Link to ={"/"}><Image src={Logo}/></Link>
                </div>

                <div className='w-8/12'>
                    <ul className='flex gap-x-10'>
                    <Link onClick={()=>handleIncrement("Home")} to={'/'}><List text="Home"/></Link>
                    <Link onClick={()=>handleIncrement("Shop")} to={'/shop'}><List text="Shop"/></Link>
                    <Link onClick={()=>handleIncrement("About")} to={'/About'}><List text="About"/></Link>
                    <Link onClick={()=>handleIncrement("Contacts")} to={'/contact'}><List text="Contacts"/></Link>
                    <Link onClick={()=>handleIncrement("Journal")} to={'/Journal'}><List text="Journal"/></Link>
                    
                    
                    
                    
                    </ul>
                
                
                    
                
               
                </div>

            </Flex>
        </Container>
     </section>
  )
}

export default Navbar