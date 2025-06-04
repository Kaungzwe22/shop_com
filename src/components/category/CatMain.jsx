import React, { useState } from 'react'
import CatMenu from './CatMenu'
import Path from './Path'
import SideCat from './SideCat'
import CatBrand from './CatBrand'
import Ship from './Ship'
import Rating from './Rating'
import Warrenty from './Warrenty'
import CatColor from './CatColor'
import { NavLink } from 'react-router-dom'
import CatProduct from './CatProduct'

const CatMain = () => {

  const [pricelowhigh, setPricelowhigh] = useState(false)

  return (
    <main className='bg-white'>
      <CatMenu />
      <Path />

      <div className="grid grid-cols-14">
        <div className="col-span-3">
          <SideCat />
          <CatBrand />
          <Ship />

          {/* price min to max  */}
          <div className="mt-3 border-b-1 border-gray-300 pb-5">
            <h1 className='text-sm mb-2'>Price</h1>
            <div className=' flex items-center'>
              <input className='focus:outline-none text-xs py-2 px-2 border-gray-300 w-22' type="number" placeholder='Min' />
              <span className='text-gray-500 mx-2'>-</span>
              <input className='focus:outline-none text-xs py-2 px-2 border-gray-300 w-22' type="number" placeholder='Max' />
              <button className='bg-orange-400 border-1 border-orange-400 rounded-xs ms-2 text-white py-2 px-3 text-xs cursor-pointer hover:bg-blue-500'><i class="fa-solid fa-caret-right"></i></button>
            </div>
          </div>

          <Rating />
          <Warrenty />
          <CatColor />

          {/* Delivery options  */}
          <div className="mt-3 border-b-1 border-gray-300 pb-5">
            <h1 className='text-sm mb-2'>Delivery Option Standard</h1>
            <input id='delivery' type="checkbox" className='focus:outline-none text-xs rounded-sm border-gray-300' />
            <label htmlFor="delivery" className='text-xs ms-1 text-gray-500 cursor-pointer hover:text-orange-400'> Yes</label>
          </div>

          {/* Pack type  */}
          <div className="mt-3 pb-5">
            <h1 className='text-sm mb-2'>Pack Type</h1>
            <input id='single' type="checkbox" className='focus:outline-none text-xs rounded-sm border-gray-300' />
            <label htmlFor="single" className='text-xs ms-1 text-gray-500 cursor-pointer hover:text-orange-400'> Single Item</label> <br />
            <input id='multi' type="checkbox" className='focus:outline-none text-xs rounded-sm border-gray-300' />
            <label htmlFor="multi" className='text-xs ms-1 text-gray-500 cursor-pointer hover:text-orange-400'> Multi-pack</label>
          </div>

        </div>
        <div className="col-span-11">
          <div className="pb-5 border-b-1 border-gray-200">
            <h1 className='text-lg font-medium'>Block Building Sets</h1>

            <div className="flex items-center justify-between mt-2">
              <p className='text-sm text-gray-500'>Showing results for Block Building Sets</p>

              <div className="flex items-center">
                <div className="me-3 relative flex items-center">
                  <span className='text-sm me-2'> Sort By:  </span>
                  <button onClick={() => setPricelowhigh(!pricelowhigh)} className='text-sm border-1 border-gray-400 py-2 px-3 w-50 rounded-lg flex items-center justify-between cursor-pointer hover:text-orange-500'>
                    <span>Best Match</span>
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                  <div className={` absolute top-10 left-14 rounded-md bg-white shadow-md w-50 transition-all  duration-300 overflow-hidden ${pricelowhigh ?'max-h-100 py-2 px-1' : 'max-h-0' }   `}  >
                    <NavLink className='text-sm block p-2 rounded-md hover:bg-gray-100 hover:text-orange-500' to={'/category'}>Best Match</NavLink>
                    <NavLink className='text-sm block p-2 rounded-md hover:bg-gray-100 hover:text-orange-500' to={'/category'}>Price low to hight</NavLink>
                    <NavLink className='text-sm block p-2 rounded-md hover:bg-gray-100 hover:text-orange-500' to={'/category'}>Price hight to low</NavLink>

                  </div>
                </div>

                <span className='me-2 text-sm'>View: </span>
                <NavLink className='me-2 text-sm hover:text-orange-500' to={'/category'}> <i class="fa-solid fa-table-cells-large"></i> </NavLink>
                <NavLink className='me-2 text-sm hover:text-orange-500' to={'/category'}> <i class="fa-solid fa-list"></i> </NavLink>
                
              </div>
            </div>            
          </div>

          <CatProduct/>
        </div>

      </div>
    </main>
  )
}

export default CatMain