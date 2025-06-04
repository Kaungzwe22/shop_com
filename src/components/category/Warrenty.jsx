import React, { useState } from 'react'

const Warrenty = () => {
    const [selected, setSelected] = useState(null);

    let brands = ['No Warrenty', 'Non-local warrenty', 'Local seller warrenty', 'Local Warrenty', 'Brand Warrenty', 'International Seller Warrenty', 'International Manufacturer Warrenty']

    const checked = (index) => {
        if (selected === index) {
            setSelected(null)
        } else {
            setSelected(index)
        }
    }

    return (
        <div className='pb-5 border-b-1 border-gray-300 mt-6'>
            <ul className=''>
                <li className='text-sm mb-3'>Warrenty Type</li>

                {brands.map((label, index) => (
                    <li key={index} className='text-xs text-gray-500 mb-1'>
                        <label className='cursor-pointer hover:text-orange-400'>
                            <input
                                onChange={() => checked(index)}
                                className='rounded-sm text-gray-300 checked:text-orange-500 me-2'
                                checked={selected === index}
                                type="checkbox"
                            />
                            {label}
                        </label>
                    </li>
                ))}



            </ul>
        </div>
    )
}

export default Warrenty