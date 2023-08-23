import React from 'react'

const Searchbar = () => {
  return (
    <div className='p-3 input-group flex-nowrap '>
    <span className="input-group-text bg-light " id="basic-addon1"><i className="fa-solid fa-magnifying-glass "></i></span>
    <input type="text" className="form-control shadow-none  " placeholder="Username" aria-label="Username" />
    </div>
  )
}

export default Searchbar
