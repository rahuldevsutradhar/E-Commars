import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-sm font-normal font-DM list-none text-frist hover:text-second hover:font-bold duration-500 cursor-grab ${className}`}>{text}</li>
  )
}

export default List