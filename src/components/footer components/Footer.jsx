import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'


const MemoizeFontAwesomeIcon = React.memo(FontAwesomeIcon);
const Footer = () => {
  return (
    <div className='bg-white md:h-60 text-center mt-8 md:mt-0 py-6 md:flex justify-evenly'>
    <div className='md:pt-0' >
      <h1 className='font-semibold mb-2'>Support</h1>
      <h3>1st floor,777 building</h3>
      <h3>Sundhara,Lalitpur</h3>
      <h3>Bagmati 44600</h3>
      <h3>Nepal</h3>
      <div className='flex gap-3 justify-center flex-row'>
      <MemoizeFontAwesomeIcon icon={faEnvelope} />
      <h3 className=''>thaparoman970@gmail.com</h3>
      </div>
      <div className='flex gap-3 justify-center flex-row'>
        <MemoizeFontAwesomeIcon icon={faPhone} />
      <h4 className=''>9806580938</h4>
      </div>
      
    </div>
    <div className='mt-10'>
        <h2 className='font-semibold mb-2'>Shop</h2>
        <h3>Laptops</h3>
        <h3>Desktops</h3>
        <h3>Apple Products</h3>
        <h3>Services</h3>
    </div>
    <div className=' mt-10 '>
        <h2 className='font-semibold mb-2'>Help</h2>
        <h3>Return & refound</h3>
        <h3>Privacy Policy</h3>
        <h3>Terms of service</h3>
    </div>
    <div className='mt-10'>
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
