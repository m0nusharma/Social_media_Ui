import React from 'react'
import './AppName.css'

const AppName = ({title, coption}) => {
  return (
    <div className=''>
    <div className=' BoxItem d-flex align-items-center gap-1 ps-3 pe-3 '>
    <p className='m-0 fw-bold'>{title}</p>
    <span className='BoxP bg-secondary text-light rounded-2  fw-bold'>{coption}</span>
    </div>
    </div>
  )
}

export default AppName