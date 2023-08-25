import React from 'react'

const SmallBox = () => {
  return (
    <div className='mt-4'>
    <div className='border  d-flex gap-2 align-items-center justify-content-between p-2 rounded-5'>
    <p className='items m-0'>All</p>
    <i className="items fa-regular fa-comments text-primary"></i>
    <i className ="items fa-solid fa-chevron-down"></i>
    </div>
    </div>
  )
}

export default SmallBox