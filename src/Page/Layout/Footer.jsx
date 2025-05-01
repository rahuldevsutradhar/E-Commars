import React from 'react'
import Container from '../componants/Container'
import Flex from '../componants/Flex'
import List from '../componants/List'
import Image from '../componants/Image'
import logo2 from '../../assets/logo2.png'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SlSocialInstagram } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] pb-[60px]'>
        <Container>
            <Flex>
                <div className='w-2/12'>
                    <h5 className='text-[16px] font-DM font-bold leading-[23px] text-second mt-12 mb-4'>MENU</h5>
                    <ul className='flex flex-col gap-y-[6px]'>
                    <List text='Home'/>
                    <List text='Shop'/>
                    <List text='About'/>
                    <List text='Contact'/>
                    <List text='Journal'/>
                    </ul>
                </div>
                <div className='w-2/12'>
                    <h5 className='text-[16px] font-DM font-bold leading-[23px] text-second mt-12 mb-4'>SHOP</h5>
                    <ul className='flex flex-col gap-y-[6px]'>
                    <List text='Category 1'/>
                    <List text='Category 2'/>
                    <List text='Category 3'/>
                    <List text='Category 4'/>
                    <List text='Category 5'/>
                    </ul>
                </div>
                <div className='w-2/12'>
                    <h5 className='text-[16px] font-DM font-bold leading-[23px] text-second mt-12 mb-4'>HELP</h5>
                    <ul className='flex flex-col gap-y-[6px]'>
                    <List text='Privacy Policy'/>
                    <List text='Terms & Conditions'/>
                    <List text='Special E-shop'/>
                    <List text='Shipping'/>
                    <List text='Secure Payments'/>
                    </ul>
                </div>
                <div className='w-3/12'>
                <h1 className='text-[16px] font-DM font-bold leading-[23px] text-second mt-12 '>(052) 611-5711</h1>
                <h1 className='text-[16px] font-DM font-bold leading-[23px] text-second mt-2 mb-[15px]'>company@domain.com</h1>
                <p className='text-[#6D6D6D] font-DM font-normal text-sm leading-[23px]'>575 Crescent Ave. Quakertown, PA 18951</p>
                
                </div>
                <div className='w-3/12'>
                <Image src={logo2} alt='logo2' className='mt-12 mx-auto'/>
                </div>

            </Flex>
            <Flex>
                <div className='w-1/2 pt-[64px] flex gap-x-[24px] '>
                <FaFacebook className='w-4 h-4'/>
                <FaLinkedin className='w-4 h-4'/>
                <SlSocialInstagram className='w-4 h-4'/>
                </div>
                <div className='w-1/2 pt-[64px]'>
                    <p className='text-end font-normal text-sm text-[#6D6D6D] font-DM'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer