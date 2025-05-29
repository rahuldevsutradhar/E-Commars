import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice'

const Shop = () => {

  let data2 = useSelector((state) => state.bread.prevValue)
  let data3=useSelector((state)=>state.bread.aftervalue)
  

  return (
    <section>
      <div>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Shop</h1>
      </div>
      <div className='flex gap-x-3'>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>{data3}>{data2}></h1>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>Shop</h1>
      </div>
    </section>

  )
}

export default Shop