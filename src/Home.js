import React from 'react'
import "./Home.css"
import homeImage from './kartmize.jpg'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={homeImage} alt="" />

        <div className='home_row'>
          <Product/>
          <Product/>    
        </div> 
        <div className='home_row'>

        </div>  
        <div className='home_row'>

        </div>
      </div>

    </div>
  )
}

export default Home
