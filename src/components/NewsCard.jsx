import React from 'react';
import {news} from '../constants';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Button } from 'react-bootstrap';

const NewsCard = () => (

    <div>
        <Splide options={
            {
                perPage: 3,
                pagination: false,
                drag: 'free',

                breakpoints: {
                    640: {
                        perPage: 1,
                    },
                    900: {
                        perPage: 2,
                    },
              }
            }
        }>
            {
            news.map((news) => (
                <SplideSlide key={
                    news.id
                }>
                <div
                    className="news-card-content">
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
                        <Button variant="warning">Read More</Button>
                </div>
                    </SplideSlide>
            ))
        } 
        </Splide>

    </div>

)

export default NewsCard;
