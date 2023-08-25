import React from 'react'
import './Socail_media_app.css'
import Fb from '../../assets/facebook.png'
import insta from '../../assets/insta.png'
import twit from '../../assets/twitter.png'

const Socail_media_app = () => {
  return (
    <div className=' d-flex gap-4'>
    <img src={Fb} alt='' className=' SIzeImg rounded-5  m-0'/>
    <img src={insta} alt='' className=' SIzeImg rounded-5  m-0'/>
    <img src={twit} alt='' className=' SIzeImg rounded-5  m-0'/>
    </div>
  )
}

export default Socail_media_app