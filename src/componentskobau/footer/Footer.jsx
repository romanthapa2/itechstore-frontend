import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='bg-white h-screen text-center  mt-10 md:h-60 md:flex justify-evenly'>
    <div className='pt-10 md:mt-10 md:pt-0' >
      <h1 className='font-semibold mb-2'>Support</h1>
      <h3>1st floor,777 building</h3>
      <h3>Sundhara,Lalitpur</h3>
      <h3>Bagmati 44600</h3>
      <h3>Nepal</h3>
      <div className='flex flex-row'>
      <span><FontAwesomeIcon icon={faEnvelope} /></span>
      <h3 className='ml-4'>thaparoman970@gmail.com</h3>
      </div>
      <div className='flex flex-row'>
        <span><FontAwesomeIcon icon={faPhone} /></span>
      <h4 className='ml-10'>9806580938</h4>
      </div>
      
    </div>
    <div className='mt-5 md:mt-10'>
        <h2 className='font-semibold mb-2'>Shop</h2>
        <h3>Laptops</h3>
        <h3>Desktops</h3>
        <h3>Apple Products</h3>
        <h3>Services</h3>
    </div>
    <div className=' mt-5 md:mt-10'>
        <h2 className='font-semibold mb-2'>Help</h2>
        <h3>Return & refound</h3>
        <h3>Privacy Policy</h3>
        <h3>Terms of service</h3>
    </div>
    <div className='hidden md:mt-10 md:block'>
        <h2 className='font-semibold'>About</h2>
        <h3>Blogs</h3>
        <h3>Contact Us</h3>
        <h3>Pc Builder</h3>
        <h3>Sitemap</h3>
    </div>
    </div>
  )
}

export default Footer
