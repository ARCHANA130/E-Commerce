import React from 'react'
import './Hero.css'
import arrow_icon from '../Assetss/arrow.png'
import hand_icon from '../Assetss/hand_icon.png'
import hero_image from '../Assetss/hero_image.png'
const Hero = () => {
  return (
    < div className='hero'>
        <div className="hero-left"> 
            <h2>NEW ARRIVALS ONLY</h2> 
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
                </div>
                
                <p>collection</p> 
                <p>for everyone</p>
                <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          <div></div>
                 </div></div>
          
          <div className="hero-right">
            <img src={hero_image} alt="" />
          </div>
          
      

      
    </div>
  )
}

export default Hero
