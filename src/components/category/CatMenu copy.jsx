import React, { useState } from 'react'

const CatMenu = () => {

    const [catIcon, setcatIcon] = useState(false)

    return (
        <div>
            <div onMouseEnter={() => setcatIcon(true)} onMouseLeave={() => setcatIcon(false)} className="relative group/first py-2 w-30">
                <p className='text-sm my-3 text-blue-900 font-medium cursor-pointer'>Categories {catIcon ? (<i class="ms-2 fa-solid fa-angle-down"></i>) : (<i class="ms-2 fa-solid fa-angle-up"></i>)} </p>

                <div className="absolute shadow-sm bg-white z-800 border-1 border-gray-300 py-3 w-50 hidden group-hover/first:block">
                    <div className="relative">
                        <ul>
                            {/* first items box */}
                            <li className='group/firstItems cursor-pointer group/second'>
                                <p className='group-hover/firstItems:bg-gray-200 group-hover/firstItems:text-orange-500 flex justify-between text-xs p-2 '> Health & Beauty <span className='hidden group-hover/firstItems:inline-block '><i class="fa-solid fa-angle-right"></i></span> </p>
                                {/* second items box */}
                                <div className="absolute shadow-sm bg-white left-49 top-[-13px] z-800 border-1 border-gray-300 py-3 w-50 hidden group-hover/second:block">
                                    <div className="relative">
                                        <ul>
                                            <li className='group/secondItems group/third cursor-pointer'>
                                                <p className='group-hover/secondItems:bg-gray-200 group-hover/secondItems:text-orange-500 flex justify-between text-xs p-2 '> Health & Beauty <span className='hidden group-hover/secondItems:inline-block '><i class="fa-solid fa-angle-right"></i></span> </p>
                                                {/* third items box */}
                                                <div className="absolute shadow-sm bg-white left-49 top-[-13px] z-800 border-1 border-gray-300 py-3 w-50 hidden group-hover/third:block">
                                                    <div className="relative">
                                                        <ul>
                                                            <li className='group/thirdItems cursor-pointer'>
                                                                <p className='group-hover/thirdItems:bg-gray-200 group-hover/thirdItems:text-orange-500 flex justify-between text-xs p-2 '> Health & Beauty  </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatMenu