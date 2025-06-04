import React from 'react'

const SideMenu = () => {
    return (
        <div className='fixed left-0 bottom-15 '>
            <ul>
                <li className='p-2 border-1 border-white hover:text-orange-500'> <a href="#hero"> <i class="fa-solid fa-angle-up"></i> </a> </li>
                <li className='p-2 ps-[10px] border-1 border-white hover:text-orange-500 relative group'>
                    <a href="#cat"> <i class="fa-solid fa-grip-vertical"></i>
                        <span className='text-xs whitespace-nowrap font-medium absolute top-0 bg-white py-3 w-0 left-8 group-hover:w-35 group-hover:ps-3 overflow-hidden duration-300'>Categories</span>
                    </a>
                </li>
                <li className='p-2 ps-[10px] border-1 border-white hover:text-orange-500 relative group'>
                    <a href="#just"> <i class="fa-solid fa-user-tie"></i>
                        <span className='text-xs whitespace-nowrap font-medium absolute top-0 bg-white py-3 w-0 left-8 group-hover:w-35 group-hover:ps-3 overflow-hidden duration-300'>Just For You</span>
                    </a>
                </li>
                <li className='p-2 ps-[10px] border-1 border-white hover:text-orange-500 relative group'>
                    <a href="#just"> <i class="fa-solid fa-user-tie"></i>
                        <span className='text-xs whitespace-nowrap font-medium absolute top-0 bg-white py-3 w-0 left-8 group-hover:w-35 group-hover:ps-3 overflow-hidden duration-300'>Just For You</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu