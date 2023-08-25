import React from 'react'
import './Massege.css'
import meme from '../../assets/meme.webp'

const Massege = () => {
  return (
    <div className=''>
    <div className='d-flex justify-content-center'>
    <div className=' border rounded-5 text-center  p-2 ChatBody w-50 d-flex justify-content-center mb-3'><p className='m-0 '> Older Messages</p> </div>
    </div>
    <div className='d-flex justify-content-between mt-2'>
    <span className=' rounded-5 p-1 msge_color'> Hello, how are you Friend</span>
    <span className=' rounded-5 p-1 '></span>

    </div>
    <div className='d-flex justify-content-between mt-2'>
    <span className=' rounded-5 p-1 '></span>
    <span className=' rounded-5 p-1 msge_color   '>I am good, what about you</span>
    </div>
    <div className='d-flex justify-content-between mt-2'>
    <span className=' rounded-5 p-1 msge_color'>Im good too.</span>
    <span className=' rounded-5 p-1 '></span>
    </div>
    <div className='d-flex justify-content-between mt-2'>
    <div className=' rounded-5 p-1'><img src={meme} height={100} className='rounded-2'/></div>
    <span className=' rounded-5 p-1 '></span>
    </div>
  
    </div>
  )
}

export default Massege