import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const CatBrand = () => {
  const [showCat, setshowCat] = useState(false)
  const [selected, setSelected] = useState(null);

  let brands = ['Foxsur', 'hoco', 'GMM', 'Bin Bin', 'Solo', 'JOKADE', 'Hafele', 'Loz', 'Cute Press', 'Suzuki']

  const checked = (index) => {
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }
  }

  return (
    <div className='pb-5 border-b-1 border-gray-300 mt-6'>
      <p className='text-sm mb-3'>Brand</p>

      <div className={showCat ? 'h-80 overflow-y-scroll' : 'h-48 overflow-hidden'} >
        <ul className=''>

          {brands.map((label, index) => (
            <li key={index} className='text-xs text-gray-500 mb-1'>
              <label className='cursor-pointer hover:text-orange-400'>
                <input
                  onChange={() => checked(index)}
                  className='rounded-sm text-gray-300 checked:text-orange-500 me-2 '
                  checked={selected === index}
                  type="checkbox"
                />
                {label}
              </label>
            </li>
          ))}



        </ul>
      </div>
      <button onClick={() => setshowCat(!showCat)} className='text-cyan-600 text-xs font-medium cursor-pointer'>{showCat ? 'VIEW LESS' : 'VIEW MORE'}</button>
    </div>
  )
}

export default CatBrand