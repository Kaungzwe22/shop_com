import React from 'react'
import Navbar from './Navbar.jsx';
import Hero from '../components/home_page/Hero.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './Footer.jsx';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="px-40">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default RootLayout