import React from 'react'
import '../Login/Login.scss'
export default function Login() {
  return (

    <div className="section_three">
      <div className="popular">
        <h1 className='popular_text'>Special Offers</h1>
        <p className='popular_about'>With the New Year comes a refreshing sense of wanderlust, a longing in our souls to escape to warmer climates, </p>


        <div className="cards">
          <div className="card_space">
            <div className='img1'></div>
            <h4 className='space_name'>Statue of Liberty.</h4>
            <div className='space_location'>
              <p>📍New York</p>
              <p>⭐️4.8</p>
            </div>
            <p className='space_day'>4 Day 5 Nights</p>
            <p className='space_person'><span className='space_price'>$459/</span>person</p>
          </div>

          <div className="card_space">
            <div className='img1'></div>
            <h4 className='space_name'>The Great Wall </h4>
            <div className='space_location'>
              <p>📍China </p>
              <p>⭐️4.9</p>
            </div>
            <p className='space_day'>7 Day 8 Nights</p>
            <p className='space_person'><span className='space_price'>$850/</span>person</p>
          </div>

          <div className="card_space">
            <div className='img1'></div>
            <h4 className='space_name'>Dizin</h4>
            <div className='space_location'>
              <p>📍Iran</p>
              <p>⭐️4.</p>
            </div>
            <p className='space_day'>6 Day 5 Nights</p>
            <p className='space_person'><span className='space_price'>$550/</span>person</p>
          </div>

          <div className="card_space">
            <div className='img1'></div>
            <h4 className='space_name'>Sajek Valley</h4>
            <div className='space_location'>
              <p>📍Bangladesh</p>
              <p>⭐️4.7</p>
            </div>
            <p className='space_day'>3 Day 4 Nights</p>
            <p className='space_person'><span className='space_price'>$400/</span>person</p>
          </div>

          <div className="card_space">
            <div className='img1'></div>
            <h4 className='space_name'>Osaka Castle</h4>
            <div className='space_location'>
              <p>📍Japan</p>
              <p>⭐️4.7</p>
            </div>
            <p className='space_day'>4 Day 5 Nights</p>
            <p className='space_person'><span className='space_price'>$700/</span>person</p>
          </div>


        </div>


      </div>


    </div>

  )
}
