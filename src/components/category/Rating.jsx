import React from 'react'

const Rating = () => {
    return (
        <div className="mt-3 border-b-1 border-gray-300 py-5">
            <h1 className='text-sm mb-2'>Rating</h1>
            <ul>
                <li className='flex items-center cursor-pointer'>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                </li>
                <li className='flex items-center mt-2 cursor-pointer'>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <span className='text-sm text-gray-500 ms-4'>And Up</span>
                </li>
                <li className='flex items-center mt-2 cursor-pointer'>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <span className='text-sm text-gray-500 ms-4'>And Up</span>
                </li>
                <li className='flex items-center mt-2 cursor-pointer'>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <span className='text-sm text-gray-500 ms-4'>And Up</span>
                </li>
                <li className='flex items-center mt-2 cursor-pointer'>
                    <i class="fa-solid fa-star text-sm text-yellow-400 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <i class="fa-solid fa-star text-sm text-gray-300 me-2"></i>
                    <span className='text-sm text-gray-500 ms-4'>And Up</span>
                </li>
            </ul>
        </div>

    )
}

export default Rating