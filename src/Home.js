import React from 'react'
import "./Home.css"
import homeImage from './kartmize.jpg'
import grinder from './grinder.png'
import Product from './Product'
import echo from './amzon_echo.png'
import sumsung from './samsung-curved.png'
import iPad from './ipad-4th-gen.png'
import gamingMonitor from './gaming_monitor.png'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' src={homeImage} alt="" />

        <div className='home_row'>

          <Product 
          id="12321341"
          title='The Lean Startup:  How Constant Innovation Creates 
          Radically Successful Business Paperpack' 
          price={29.99} 
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
          rating={3}/>

          <Product
          id="12321341"
          title="Kenwood KMix Stand Mixer for Baking , Stylish Kitchen 
          Mixer with K-beater,Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image={grinder}
          rating={4}
          /> 
        </div> 

        <div className='home_row'>
        <Product
        id="23445930"
        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
        price={98.99}
        rating={5}
        image={echo}
        />  

        <Product
        id="4903850"
        title="Sumsung LC49RG90SSUXEN 49' Curved LED Gamning Monitor"
        price={199.99}
        rating={4}
        image={sumsung}  
        />

        <Product
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
        price={589.99}
        rating={5}
        image={iPad}
        />    
        </div>

        <div className='home_row'>
          <Product
          id="90829332"
          title="Sumsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5142 * 1440"
          price={1094.98}
          rating={4}
          image={gamingMonitor}
          />    
        </div>

      </div>

    </div>
  )
}

export default Home
