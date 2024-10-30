import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
      <div className="flex flex-col sm:flex-row border border-gray-400">
        
        {/* hero Right side */}
        <img src={assets.hero_img2} alt="" className='w-full sm:w-1/0' />
      </div>
  )
}

export default Hero
