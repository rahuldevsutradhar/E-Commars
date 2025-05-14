import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`text-white bg-second border borfer-transparent font-DM font-bold py-4 px-16 text-sm hover:bg-transparent hover:border-second hover:text-second duration-500 ${className}`}>{text}</button>
  )
}

export default Button