import React from 'react'
import './Cards.scss'





export default function Cards() {
    return (
        <div className="section_two">
            <div className="container popular">
                <h1 className='popular_text'>Popular Location</h1>
                <p className='popular_about'>For every one of us, travel came first. We’ve spent years living as nomads, pioneers, and voyagers— from island hopping in the</p>
                <div className='cards_box'>
                    <div className='card1'>
                        <div className='img'></div>
                        <h3>Istanbul, Turkey</h3>
                        <p>Istanbul is a major city in Turkey that straddles Europe. </p>

                    </div>


                    <div className='card1'>
                        <div className='img'></div>
                        <h3>Kuala Lumpur, malaysia</h3>
                        <p>A 272-step long trek leads you to this century.</p>

                    </div>


                    <div className='card1'>
                        <div className='img'></div>
                        <h3>Seoul, South Korea</h3>
                        <p>South Korea officially the Republic of Korea is a country in East Asia. </p>

                    </div>

                    
                </div>

            </div>
        </div>
    )
}
