import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const CatColor = () => {
    const [showCat, setshowCat] = useState(false)

    let brands = [
        "Black",
        "White",
        "Gray",
        "Silver",
        "Blue",
        "Red",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
        "Beige",
        "Cream",
        "Gold",
        "Teal",
        "Navy",
        "Maroon",
        "Olive",
        "Charcoal"
    ]

    return (
        <div className='pb-5 border-b-1 border-gray-300 mt-6'>
            <p className='text-sm mb-3'>Color Family</p>

            <div className={showCat ? 'h-80 overflow-y-scroll' : 'h-48 overflow-hidden'} >
                <ul>

                    {brands.map((label, index) => (
                        <li key={index} className='text-xs text-gray-500 mb-1'>
                            <label className='cursor-pointer hover:text-orange-400'>
                                <input
                                    className='rounded-sm text-gray-300 checked:text-orange-500 me-2'
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

export default CatColor