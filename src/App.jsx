import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useDrinks } from './context/DrinksContext.jsx'
import Hero from './components/Hero.jsx'



const App = () => {
 const {setOrangeSoda,setLemonSoda,setStrawSoda}  = useDrinks()
 

  return (
    <main className='overflow-x-hidden w-full h-screen grid grid-cols-12 '>
      <Navbar/>
      <Hero/>
      
  

    </main>
  )
}

export default App