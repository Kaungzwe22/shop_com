import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='mt-20 bg-gray-100 pt-15'>
      <div className="flex justify-between px-40 pb-10">
          <ul className='text-blue-900'>
            <li className='mb-2'><span className="text-sm">Customer Care</span></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Help Center</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>How to Buy</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Corporate & Bulk Purchasing</NavLink> </li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Returns & Refunds</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Contact Us</NavLink></li>
          </ul>
          <ul className='text-blue-900'>
            <li className='mb-2'><span className="text-sm">Shop</span></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>About Shop</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Careers</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Shop Cares</NavLink> </li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Terms & Conditions</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Pravicy & Policy</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Online Shopping</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Shop University</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Sell On Shop</NavLink></li>
            <li><NavLink className="text-xs hover:underline" to={'/'}>Code of Conduct</NavLink></li>
          </ul>
          <div className="flex items-top w-[50%]">
            <img src="../imgs/logo02.png" className='size-12 me-3' alt="" />
            <p className='text-blue-900 text-xs'> 
              <span className='text-orange-500 text-sm'>Happy Shopping </span> <br />
              Download App
            </p>
            <div className="grid grid-cols-2 ms-10 gap-2 h-10">
              <a href=""><img className='col-span-1 w-30' src="../imgs/footer01.png" alt="" /></a>
              <a href=""><img className='col-span-1 w-30' src="../imgs/footer02.png" alt="" /></a> 
              <a href=""><img className='col-span-1 w-30' src="../imgs/footer03.png" alt="" /></a>
            </div>

          </div>
      </div>

        <div className="bg-white py-20 px-40 flex">
          <div className="me-30">
            <h1 className='text-md mb-5 text-blue-900'>Payment Methods</h1>
            <div className="flex items-top">
              <img className='w-12 me-3' src="../imgs/pay01.png" alt="" />
              <img className='w-12 me-3' src="../imgs/pay02.png" alt="" />
              <img className='w-12 me-3' src="../imgs/pay03.png" alt="" />
              <img className='w-12 me-3' src="../imgs/pay04.png" alt="" />
              <img className='w-12 me-3' src="../imgs/pay05.png" alt="" />
            </div>
          </div>
          <p className="text-md mb-5 text-blue-900">
            Verified By 
            <img className='w-20 mt-5' src="../imgs/pay06.png" alt="" />
          </p>
        </div>
    </footer>
  )
}

export default Footer