import React from 'react'
import './custom/style.css'


const Hero = () => {
  return (
    <div className='heroStyle grid'>
      <p className='small'>Hi, my name is</p>
      <h1 className='x-large'>Emmanuel Os</h1>
      <h1 className='x-large'>I build things for the web.</h1>
      <p className='writeUp'>I'm a frontend developer based in Nigeria, Lagos. specializing in building exceptional websites, applications, and everything in between.</p>
      <ul>
        <li>
          <a href='mailto:josephe44@gmail.com' className='hero-btn'>Get In Touch</a>
        </li>
      </ul>
    </div>
  )
}


export default Hero
