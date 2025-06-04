import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)

    return (
        <nav id='nav' className='px-40 main_bg pb-5 sticky top-0 z-999'>
            <header className='flex justify-end items-center py-2'>
                <NavLink className='text-white text-xs ms-10' to={'/'}>SAVE MORE ON APP</NavLink>
                <NavLink className='text-white text-xs ms-10' to={'/'}>SELL ON SHOP</NavLink>
                <NavLink className='text-white text-xs ms-10' to={'/'}>HELP & SUPPORT</NavLink>
                <div className="relative inline-block text-left">
                    <p onClick={() => setIsopen(!isopen)} type="button" className='text-white text-xs ms-10 cursor-pointer' id="menu-button" aria-expanded="true" aria-haspopup="true">
                        KZWE07407'S ACCOUNT
                    </p>
                    {isopen && (
                        <div onMouseLeave={() => setIsopen(!isopen)} className="absolute z-10 mt-2 w-70 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="p-5" role="none">
                                <NavLink className="block text-sm text-gray-500" to={'/'}> <i className="m-3 fa-solid fa-face-smile"></i><span className="hover:underline hover:text-red-500"> Manage My Account </span>  </NavLink>
                                <NavLink className="block text-sm text-gray-500" to={'/'}> <i className="m-3 fa-solid fa-box"></i><span className="hover:underline hover:text-red-500"> My Orders </span>  </NavLink>
                                <NavLink className="block text-sm text-gray-500" to={'/'}> <i className="m-3 fa-solid fa-heart"></i><span className="hover:underline hover:text-red-500"> My Wishlist & Followed Stores </span>  </NavLink>
                                <NavLink className="block text-sm text-gray-500" to={'/'}> <i className="m-3 fa-solid fa-star"></i><span className="hover:underline hover:text-red-500"> My Reviews </span>  </NavLink>
                                <NavLink className="block text-sm text-gray-500" to={'/'}> <i className="m-3 fa-solid fa-ban"></i> <span className="hover:underline hover:text-red-500"> My Returns & Cancellations </span> </NavLink>
                                
                                
                                <form method="POST" action="#" role="none">
                                    <button type="submit" className='block text-sm text-gray-500' role="menuitem" tabindex="-1" id="menu-item-3"><i class="m-3 fa-solid fa-right-from-bracket"></i> <span className="hover:underline hover:text-red-500 cursor-pointer"> Sign out</span></button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>

                <NavLink className='text-white text-xs ms-10' to={'/'}>LANGUAGE</NavLink>

            </header>

            <div className="flex justify-between items-center mt-3">
                <NavLink to={'/'}><img src="./logo.png" className='max-w-30' alt="" /></NavLink>
                 
                <div className="flex items-center">
                    <form action="" className='flex items-center'>
                        <input placeholder='Search in Shop' type="search" className='text-sm py-3 px-5 bg-white border-0 outline-none w-150 rounded-l-xs ' />
                        <button className='btn_search py-[10px] px-4 rounded-r-xs' type='submit'> <i class="fa-solid fa-magnifying-glass"></i> </button>
                    </form>

                    <NavLink className="text-white text-2xl ms-8" to={'/'}> <i class="fa-solid fa-cart-shopping"></i> </NavLink>
                    
                </div>

                <img src="./download_app.png" className='max-w-50' alt="" />
            </div>
        </nav>
    )
}

export default Navbar
