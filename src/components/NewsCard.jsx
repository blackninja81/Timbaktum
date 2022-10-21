import React from 'react';
import {news} from '../constants';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const NewsCard = () => (

    <div>
        <Splide options={
            {
                perPage: 3,
                pagination: false,
                drag: 'free',
            }
        }>
            {
            news.map((news) => (
                <div key={
                        news.id
                    }
                    className="news-card-content">
                    <SplideSlide>
                        <img src={
                                news.img
                            }
                            alt={
                                news.description
                            }/>
                        <h4>{
                            news.title
                        }</h4>
                        <p>{
                            news.content
                        }</p>

                    </SplideSlide>
                </div>
            ))
        } 
        </Splide>

    </div>

)

export default NewsCard;
