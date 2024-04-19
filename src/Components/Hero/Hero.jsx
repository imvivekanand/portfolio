import React from 'react'
import './Hero.css'
import profileImage from '../../assets/profileImage.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profileImage} alt='profile image'/>
      <h1><span>I am Vivek Anand,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from India, also have some basic knowledge of the "MERN Stack".</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
