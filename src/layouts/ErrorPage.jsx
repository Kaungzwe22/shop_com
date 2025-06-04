import React from 'react'
import CatMenu from '../components/category/CatMenu'
import JustForYou from '../components/home_page/JustForYou'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <CatMenu/>

            <div className="mt-10">
              <div className="flex justify-center">
                <img className='size-70' src="../imgs/error.png" alt="" />
              </div>
              <div className="text-center mt-5">
                <h1 className='text-2xl'>We're Sorry, an error has occured</h1>
                <p className='mb-5 mt-1 text-gray-600'>We seem to have lost this page but we don't want to lose you.</p>
                <NavLink className="py-2 px-5 border-1 border-orange-500 rounded-xl text-orange-500 " to={'/'}>BACK TO HOMEPAGE</NavLink>
                
              </div>
            </div>

        <JustForYou/>
    </div>
  )
}

export default ErrorPage