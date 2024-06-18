import React from 'react'
import "./Home.css"
import homeImage from './prime-video.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={homeImage} alt="" />
       
      </div>

    </div>
  )
}

export default Home
