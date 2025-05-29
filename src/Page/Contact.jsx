import React from 'react'
import Container from './componants/Container'
import Button from './componants/Button'
import { useSelector } from 'react-redux'

const Contact = () => {
    let data=useSelector((state)=>state.bread.prevValue)
    let data2=useSelector((state)=>state.bread.aftervalue)

  return (
    <section>
      <Container>
        <div className='mb-[125px]'>
           <h1 className='font-bold font-DM text-second text-[50px] pt-[124px]'>Contact</h1>
           <div className='flex gap-x-3'>
             <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>{data2}>{data}> </h1>
             <h1 className='font-normal font-DM text-frist text-sm  pt-[11px]'>Contact</h1>
           </div>
        </div>
        <div className='mb-[140px]'>
           <h1 className='font-bold mb-[42px] font-DM text-second text-[39px] pt-[124px]'>Fill up a Form</h1>
           <label htmlFor="Name" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Name <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[49%] mb-6' type="Name" id='text' placeholder='Enter your name here'/>
           </label> <br />
           <label htmlFor="Email" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Email <br />
           <input className='border-b border-[#F0F0F0] py-4 w-[49%] mb-6' type="Email" id='text' placeholder='Enter your Email here'/>
           </label> <br />
           <label htmlFor="Message" className='font-bold mb-[10px] font-DM text-second text-[16px]'>Message <br />
           <textarea className='border-b border-[#F0F0F0] py-4 w-[49%] mb-6' type="Message" id='text' placeholder='Enter your Message here'/>
           </label><br />
           <Button text='Shop' className='px-[85px]'/>
        </div>

        <iframe className='w-full h-[572px] mb-[140px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.086360923214!2d89.27710627480003!3d24.013283778634314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84f0ec23a72b%3A0x775d6cd53cbdad8b!2z4Kaq4Ka-4Kas4Kao4Ka-IOCmrOCmv-CmnOCnjeCmnuCmvuCmqCDgppMg4Kaq4KeN4Kaw4Kav4KeB4KaV4KeN4Kak4Ka_IOCmrOCmv-CmtuCnjeCmrOCmrOCmv-CmpuCnjeCmr-CmvuCmsuCmr-CmvA!5e1!3m2!1sbn!2sbd!4v1747236462012!5m2!1sbn!2sbd"
        ></iframe>

      </Container>
    </section>
  )
}

export default Contact