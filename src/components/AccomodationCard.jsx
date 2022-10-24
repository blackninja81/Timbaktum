import React from 'react';
import {hotels} from '../constants';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Button } from 'react-bootstrap';

const AccomodationCard = () => {
  return (
    <div>
    <Splide options={
        {
            perPage: 3,
            pagination: false,
            drag: 'free',
        }
    }>
        {
        hotels.map((hotel) => (
            <SplideSlide>
            <div key={
                    hotel.id
                }
                className="news-card-content">
                    <img src={
                            hotel.img
                        }
                        alt={
                            hotel.desc
                        }/>
                    <h4>{
                        hotel.title
                    }</h4>
                    <p>{
                        hotel.desc
                    }</p>
                    <Button variant="warning">Read More</Button>
            </div>
                </SplideSlide>
        ))
    } 
    </Splide>

</div>
  )
}

export default AccomodationCard