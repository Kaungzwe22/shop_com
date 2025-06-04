import React from 'react'
import Hero from './Hero'
import Categories from './Categories'
import JustForYou from './JustForYou'
import SideMenu from './SideMenu'

const HomePage = () => {
  return (
    <main>
        <Hero/>
        <Categories/>
        <JustForYou/>
        <SideMenu/>
    </main>
  ) 
}

export default HomePage