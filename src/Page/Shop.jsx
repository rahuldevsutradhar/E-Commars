import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Pagination from './componants/Pagination'
import Flex from './componants/Flex'
import Container from './componants/Container'
import Image from './componants/Image'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'


const Shop = () => {

  let data2 = useSelector((state) => state.bread.prevValue)
  let data3=useSelector((state)=>state.bread.aftervalue)
  
  let [design, setDesign]=useState(true)
  let handleDesign=()=>{
   setDesign(!design)
    
  }

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

        <div className='flex justify-between items-center mb-[60px]'>
          <Flex className=' gap-x-5'>
            <div onClick={handleDesign}>
                 <Image  src={grid1}/>
            </div>
            <div onClick={handleDesign}>
                 <Image  src={grid2}/>
            </div>
          </Flex>

        <Flex className='gap-x-15'>
          <Flex className='gap-x-5 items-center'>
          <p className='text-sm'>Sort by:</p>
          <select name="" id="" className='border border-[#767676] py-2 px-5'>
            <option value="">Featured</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Green</option>
          </select>
        </Flex>
        <Flex className='gap-x-5 items-center'>
          <p className='text-sm'>Show:</p>
          <select name="" id="" className='border border-[#767676] py-2 px-5'>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
          </select>
        </Flex>
        </Flex>
        </div>

        {
          design 
          ?
            <Pagination itemsPerPage={12}/>
          :
            <h1>add new design</h1>
        }


        </div>

      </Flex>
      </Container>


     
    </section>

  )
}

export default Shop