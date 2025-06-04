import React from 'react'
import { NavLink } from 'react-router-dom'

const Path = () => {
    return (
        <div className='pb-3 border-b-1 border-gray-300 mb-5'>
            <p>
                <NavLink to={'/'} className="text-blue-400 text-xs font-medium">Home <i class=" mx-2 fa-solid fa-angle-right"></i></NavLink>
                <NavLink to={'/'} className="text-blue-400 text-xs font-medium">Category <i class=" mx-2 fa-solid fa-angle-right"></i></NavLink>
                <NavLink to={'/'} className="text-blue-400 text-xs font-medium">Hair Care <i class=" mx-2 fa-solid fa-angle-right"></i></NavLink>
                 
            </p>
        </div>
    )
}

export default Path