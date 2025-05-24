import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} w-[64px] h-[64px] rounded-full bg-[#979797]
        flex items-center justify-center top-[50%] left-0 -translate-y-1/2 absolute z-[99999] cursor-pointer`}
      onClick={onClick}
    >
      <FaLongArrowAltRight className="text-white rotate-180" />
    </div>
  );
};

export default SamplePrevArrow;
