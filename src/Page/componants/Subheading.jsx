import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h2 className={`font-DM font-bold text-second text-[40px] ${className}`}>{text}</h2>
  )
}

export default Subheading