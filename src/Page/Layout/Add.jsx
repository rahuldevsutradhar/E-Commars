import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import Image from '../componants/Image'
import add1 from '../../assets/add1.jpg'
import Ad2 from '../../assets/Ad2.jpg'
import Ad3 from '../../assets/Ad3.jpg'
import { Link } from 'react-router-dom'

const Add = () => {
  return (
    <section className='mb-[128px]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                    <Link to='/shop'><Image  src={add1}/></Link>
                </div>
                <div className='w-1/2 flex flex-col gap-y-10'>
                <Link to='/shop'><Image  src={Ad2}/></Link>
                <Link to='/shop'><Image  src={Ad3}/></Link>
                     
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Add