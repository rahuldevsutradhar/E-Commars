import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from './Cart';
import p2 from '../../assets/p2.png'
import data from '../../../data.js'



function Items({ currentItems }) {
  return (
    <>
      <div className='flex flex-wrap gap-x-[45px] gap-y-[45px]'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Cart src={item.img} title={item.title} price={item.price} />
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {
  
  const [itemOffset, setItemOffset] = useState(0);

  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='my-[50px] mr-4 flex justify-between'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-5"
        pageLinkClassName="py-2 px-4 bg-black text-white"
      />
      <h1>Products from {itemOffset+1} to {endOffset<data.length ? endOffset : data.length} of {data.length}</h1>
      </div>
    </>
  );
}

export default Pagination