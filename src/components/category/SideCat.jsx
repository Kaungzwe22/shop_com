import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideCat = () => {

  const [showCat, setshowCat] = useState(false)
  return (
    <div className='pb-5 border-b-1 border-gray-300'>
      <p className='text-sm mb-3'>Category</p>

      <div className={showCat ? 'h-80 overflow-y-scroll' : 'h-48 overflow-hidden'} >
        <ul className=''>

          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Block Building Sets</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Gift Cards & Tags</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Wrenches</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>School Sets</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Women Fashion Hair Accessories</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Phone Wall Charges</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Bathroom Fittings</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Sleep & Loungewear</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Tool Set</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Key Chains</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Action Figures</NavLink></li>
          <li className='text-xs text-gray-500 mb-1'><NavLink className=" hover:text-orange-500" to={'/'}>Video Game Characters</NavLink></li>
        </ul>
      </div>
      <button onClick={() => setshowCat(!showCat)} className='text-cyan-600 text-xs font-medium cursor-pointer'>{showCat ? 'VIEW LESS' : 'VIEW MORE'}</button>
    </div>
  )
}

export default SideCat