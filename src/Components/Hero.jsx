import React from 'react'
import './Navbar.css'
import './Hero.css'
import HERO_IMAGE from './FOOD-BG-IMAGE.png'

const Hero = () => {
  return (
    <div>
        <img src={HERO_IMAGE} alt="hero" id='hero'/>
    </div>
  )
}

export default Hero