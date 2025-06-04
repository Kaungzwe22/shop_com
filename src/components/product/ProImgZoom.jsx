import React, { useState } from 'react';

const ProImgZoom = () => {
    const [mainImageSrc, setMainImageSrc] = useState('../imgs/cat01.png');
    const [heart, setHeart] = useState(false)
    const [share, setShare] = useState(false)

    const changeImage = (src) => {
        setMainImageSrc(src);
    };

    return (
        <div className='flex'>
            <div>
                <div className="flex gap-5">
                    <div className="relative w-[300px] h-[300px] overflow-hidden border border-gray-300">
                        <img
                            id="mainImage"
                            src={mainImageSrc}
                            alt="Main Image"
                            className="w-full h-full block"
                        />
                    </div>
                </div>

                <div className="mt-2.5 w-[300px] overflow-hidden whitespace-nowrap border border-gray-300">
                    <img
                        src="../imgs/cat01.png"
                        alt="Red"
                        onClick={() => changeImage('../imgs/cat01.png')}
                        className="w-[60px] h-[60px] m-[5px] inline-block cursor-pointer"
                    />
                    <img
                        src="../imgs/cat02.png"
                        alt="Green"
                        onClick={() => changeImage('../imgs/cat02.png')}
                        className="w-[60px] h-[60px] m-[5px] inline-block cursor-pointer"
                    />
                    <img
                        src="../imgs/cat03.png"
                        alt="Blue"
                        onClick={() => changeImage('../imgs/cat03.png')}
                        className="w-[60px] h-[60px] m-[5px] inline-block cursor-pointer"
                    />
                    <img
                        src="../imgs/cat04.png"
                        alt="Yellow"
                        onClick={() => changeImage('../imgs/cat04.png')}
                        className="w-[60px] h-[60px] m-[5px] inline-block cursor-pointer"
                    />
                    <img
                        src="../imgs/cat05.png"
                        alt="Magenta"
                        onClick={() => changeImage('../imgs/cat05.png')}
                        className="w-[60px] h-[60px] m-[5px] inline-block cursor-pointer"
                    />
                </div>
            </div>

            <div className="ml-6">
                <h1 className='text-xl'>Yves Rocher (France) BHC Anti Hair Loss Shampoo 300ml *Directly from Thailand Official Store *Expired Date 2023</h1>
                <div className="flex justify-end items-center my-1">


                    <div className="relative inline-block text-left">
                        <button onClick={() => setShare(!share)} type="button" className="cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            <i className="fa-solid text-gray-500 mx-1 text-2xl fa-share-nodes"></i>
                        </button>
                        {
                            share && (
                                <div onMouseLeave={() => setShare(!share)} className="absolute p-5 right-0 z-10 mt-2 w-50 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                    <h3>Share via:</h3>
                                    <div className="py-1 flex items-center justify-between" role="none">
                                        <a href="" className="text-sm text-gray-700 mx-1" role="menuitem" tabindex="-1" id="menu-item-0">
                                            <img src="../imgs/facebook_logo.png" className='w-7' alt="" />
                                        </a>
                                        <a href="" className="text-sm text-gray-700 mx-1" role="menuitem" tabindex="-1" id="menu-item-0">
                                            <img src="../imgs/pinterest_logo.png" className='w-10' alt="" />
                                        </a>
                                        <a href="" className="text-sm text-gray-700 mx-1" role="menuitem" tabindex="-1" id="menu-item-0">
                                            <img src="../imgs/twitter_logo.png" className='w-7 rounded-full' alt="" />
                                        </a>
                                        
                                    </div>
                                </div>
                            )
                        }

                    </div>

                    <i onClick={() => setHeart(!heart)} className={heart ? "fa-solid text-gray-500 mx-1 text-2xl fa-heart cursor-pointer" : "fa-regular text-gray-500 mx-1 text-2xl fa-heart cursor-pointer"}></i>
                </div>
            </div>
        </div>
    );
};

export default ProImgZoom;
