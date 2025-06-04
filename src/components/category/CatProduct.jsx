import React from 'react'
import { NavLink } from 'react-router-dom'

const CatProduct = () => {
    return (
        <div className='mt-5'>
            <div className="grid grid-cols-4 gap-2">
                <NavLink to={'/product'} className="col-span-1 hover:shadow-md">
                    <div className="h-60 bg-[url(../imgs/cat01.png)] bg-no-repeat bg-center bg-contain"></div>
                    <div className="p-2 text-xs">
                        <p className='text-gray-600 font-medium tracking-wide h-8.5 line-clamp-2'>Golden Pyae Sheets Large Size Waterproof Sheet for Adult Summer i will keep typing so that i can see if this works or not </p>
                        <p className='text-sm font-medium text-orange-500 my-2'>Ks 200,000</p>

                        <i className="text-yellow-400 fa-solid fa-star me-1"></i>
                        <i className="text-yellow-400 fa-solid fa-star me-1"></i>
                        <i className="text-yellow-400 fa-solid fa-star me-1"></i>
                        <i className="text-yellow-400 fa-solid fa-star me-1"></i>
                        <i className="text-gray-300 fa-solid fa-star me-1"></i>
                        <span className='text-xs text-gray-500'>(1)</span>
                        <span className='float-right text-gray-400 mb-3'>Yangon</span>
                    </div>
                </NavLink>
            </div>

            {/* pagination / */}
            <div className='mt-20 flex justify-end'>
                <nav className="text-xs" aria-label="Pagination">
                    <NavLink to={'/'} className="py-2 px-3 border-1 border-gray-400 rounded-md me-1">
                        <i className="fa-solid fa-angle-left"></i>
                    </NavLink>

                    <NavLink to={'/'} className="py-2 px-3 border-1 border-gray-400 rounded-sm me-1 bg-cyan-600 text-white">1</NavLink>
                    <NavLink to={'/'} className="py-2 px-3 border-1 border-gray-400 rounded-sm me-1">2</NavLink>

                    <NavLink to={'/'} className="py-2 px-3 border-1 border-gray-400 rounded-md me-1">
                        <i className="fa-solid fa-angle-right"></i>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default CatProduct