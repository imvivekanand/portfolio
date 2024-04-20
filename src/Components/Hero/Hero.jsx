import React from 'react'
import './Hero.css'
import profileImage from '../../assets/profileImage.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profileImage} alt='profile image'/>
      <h1><span>I am Vivek Anand,</span> fullstack developer based in India.</h1>
      <p>{"I'm a Full Stack Developer specialized In MERN Stack Development."}</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
