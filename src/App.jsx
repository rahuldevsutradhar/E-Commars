import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Page/Home';
import Shop from './Page/Shop';
import Product from './Page/Product';
import About from './Page/About';
import Contact from './Page/Contact';
import Login from './Page/Login';
import Singup from './Singup';
import Cart from './Page/Cart';
import Checkout from './Page/Checkout';
import Error from './Page/Error';
import RootLayout from './Page/Layout/RootLayout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="product" element={<Product />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="login" element={<Login />}/>
        <Route path="singup" element={<Singup />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="checkout" element={<Checkout />}/>
        <Route path="/*" element={<Error />}/>
      </Route>
    </>

  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App