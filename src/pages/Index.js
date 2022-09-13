import React from 'react'

import Hero from "../components/Hero/Hero"
import CarouselCity from "../components/CarouselCity/CarouselCity"
import SignUpGoogle from '../components/SignUpGoogle/SignUpGoogle'

export const Index = () => {
  return (
    
   <div>
     <Hero/>
     <SignUpGoogle/>
     <CarouselCity/>
   </div>
    
  )
}

export default Index