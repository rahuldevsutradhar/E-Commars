import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Layout/Navbar'
import Menubar from '../Layout/Menubar'
import Footer from '../Layout/Footer'


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