import React from 'react'
import '../Blog/Blog.scss'

export default function Blog() {
    return (
        <div className='section_four'>
            <div className="carusel">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M6 11L1 6L6 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.0001 11L8.00012 6L13.0001 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="231" height="5" viewBox="0 0 231 5" fill="none">
                    <rect width="75" height="5" rx="2.5" fill="#C9453B" fill-opacity="0.1" />
                    <rect x="78" width="75" height="5" rx="2.5" fill="#C9453B" />
                    <rect x="156" width="75" height="5" rx="2.5" fill="#C9453B" fill-opacity="0.1" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M8.00012 11L13.0001 6L8.00012 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 11L6 6L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>



            <h1 className='popular_text  from_blog'>From Blog & News</h1>
            <p className='popular_about'>Welcome to Community Conversations, a new interview series featuring Intrepid travellers, creatives and activists in our community.</p>


            <div className='big_div'>
                <div className="national">

                    <div className='img4'></div>
                    <h4>
                        Banff National Park
                    </h4>
                    <p>Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible

                    </p>
                    <h5>@thomasalva_adison</h5>


                </div>

                <div className="hirowima">

                    <div className='news_blog'>
                        <div className='img5'></div>
                        <div className='texts_left'>
                            <h5>The Hiroshima Peace!</h5>
                            <p>It was formally opened to the public in August that year.</p>
                            <h6>@shova_bd88</h6>
                        </div>

                    </div>

                    <div className='news_blog'>
                        <div className='img5'></div>
                        <div className='texts_left'>
                            <h5>The faithful prayers!</h5>
                            <p>A major pilgrimage center for Hindus, the holy city.</p>
                            <h6>@adem/smith</h6>
                        </div>

                    </div>

                    <div className='news_blog'>
                        <div className='img5'></div>
                        <div className='texts_left'>
                            <h5>Colourful waters!</h5>
                            <p>Forest-driven water and energy cycles are poorly.</p>
                            <h6>@jhon7leew</h6>
                        </div>

                    </div>  

                </div>

            </div>

        </div>
    )
}
