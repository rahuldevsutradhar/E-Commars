import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Shop = () => {

  let data2 = useSelector((state) => state.bread.prevValue)
  let data3=useSelector((state)=>state.bread.aftervalue)
  

  return (
    <section>
      <div>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Shop</h1>
      </div>
      <div className='flex gap-x-3'>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>
           <Link to={data3 === 'home' ? '/' : `/${data3}`}> 
           {data3 ? <span>{data3} &gt;</span> : null} </Link>
           
           <Link to={data2 === 'home'? '/' : `/${data2}`}>
           {data2 ? <span>{data2} &gt;</span> : null} </Link>
        </h1>
            {/* ahane condition use kora hoisa jate > ai chinoo rendaring kore na asa */}
           
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>Shop</h1>
      </div>
    </section>

  )
}

export default Shop