import React from 'react'
import '@splidejs/splide/css';
import NewsCard from './NewsCard';
import {Splide, SplideSlide} from '@splidejs/react-splide';


const News = () => {
    return (
        <div className='news-container'>
            <h1>Whats Happening In Timbaktum</h1>
                <div className='news-cards'>
                        <NewsCard/>
                </div>
        </div>
    )
}

export default News
