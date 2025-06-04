import React from 'react'

const Hero = () => {
    return (
        <section id="hero">
            <div className="grid grid-cols-6 gap-2">
                <div className='col-span-5'>

                    <div id="default-carousel" class="relative w-full" data-carousel="slide">
                        {/* <!-- Carousel wrapper --> */}
                        <div class="relative h-56 overflow-hidden md:h-96">
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../imgs/hero01.png" class="absolute block w-full -translate-x-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../imgs/hero02.png" class="absolute block w-full -translate-x-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../imgs/hero03.png" class="absolute block w-full -translate-x-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../imgs/hero04.png" class="absolute block w-full -translate-x-1/2 left-1/2" alt="..." />
                            </div>
                            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="../imgs/hero05.png" class="absolute block w-full -translate-x-1/2 left-1/2" alt="..." />
                            </div>
                        </div>
                        {/* <!-- Slider indicators --> */}
                        <div class="absolute z-30 flex -translate-x-1/2 bottom-15 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        {/* <!-- Slider controls --> */}
                        <button type="button" class="absolute bottom-8 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="text-xs text-white inline-flex items-center justify-center w-6 h-7 rounded-r-2xl bg-gray-300 opacity-50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <i class="fa-solid fa-chevron-left"></i>
                            </span>
                        </button>
                        <button type="button" class="absolute bottom-8 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="text-xs text-white inline-flex items-center justify-center w-6 h-7 rounded-l-2xl bg-gray-300 opacity-50 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <i class="fa-solid fa-chevron-right"></i>
                            </span>
                        </button>
                    </div>

                </div>
                <div className='col-span-1'>
                    <div className="bg-white h-88 p-2">
                        <div className="flex items-center mb-2">
                            <img src="../imgs/logo02.png" className='size-10' alt="" />
                            <span className='font-sm'>Try Shop App MM</span>
                        </div>
                        <div className="card p-2 bg_gradient text-white rounded-xl">
                            <span className='text-xs'> <i class="fa-solid fa-star"></i> 4.8 Rated </span>
                            <h4 className='text-sm text-center mb-5'> Down the App Now </h4>
                            <p className='flex items-center px-5 text-sm font-medium leading-4 mb-3'> <img className='size-8 me-2' src="../imgs/free_ship.png" alt="" /> Get Free Shipping </p>
                            <p className='flex items-center px-5 text-sm font-medium leading-4 mb-3'> <img className='size-8 me-2' src="../imgs/get_voucher.png" alt="" /> Get  Vouchers </p>
                        </div>
                        <div className="flex items-center mt-2">
                            <img src="../imgs/qr.png" className='size-20' alt="" />
                            <div className="p-1">
                                <a href="" className='flex items-center my-2 text-xs border p-1 rounded-md'> <i class="fa-brands fa-apple me-1 text-sm"></i> App Store </a>
                                <a href="" className='flex items-center my-2 text-xs border p-1 rounded-md'> <i class="fa-brands fa-google-play me-1 text-sm"></i> Google Play </a>
                            </div>
                        </div>
                        <span className='text-xs'>More Discount from APP</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero