import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from './componants/Pagination'
import Flex from './componants/Flex'
import Container from './componants/Container'


const Shop = () => {

  let data2 = useSelector((state) => state.bread.prevValue)
  let data3=useSelector((state)=>state.bread.aftervalue)
  

  return (
    <section>
      <Container>
        <div>
        <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Shop</h1>
      </div>
      <div className='flex gap-x-3 mb-[130px]'>
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>
           <Link to={data3 === 'home' ? '/' : `/${data3}`}> 
           {data3 ? <span>{data3} &gt;</span> : null} </Link>
           
           <Link to={data2 === 'home'? '/' : `/${data2}`}>
           {data2 ? <span>{data2} &gt;</span> : null} </Link>
        </h1>
            {/* ahane condition use kora hoisa jate > ai chinoo rendaring kore na asa */}
           
        <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>Shop</h1>
      </div>

      <Flex>
        <div className='w-3/12 '>Shop by Category</div>
        <div className='w-9/12 '>

         <Pagination itemsPerPage={12}/>

        </div>

      </Flex>
      </Container>


     
    </section>

  )
}

export default Shop