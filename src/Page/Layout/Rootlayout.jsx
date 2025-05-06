import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Footer from './Footer'


const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout