import React from 'react'

const AboutCart = ({title, text, className}) => {
  return (
    <div>
        <h5 className={`font-DM font-bold text-[25px] text-second mb-3 ${className}`}>{title}</h5>
        <p className={`font-DM font-normal text-sm text-frist w-[439px] text-left ${className}`}>{text}</p>
    </div>
  )
}

export default AboutCart