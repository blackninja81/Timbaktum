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
        hotels.map((hotel) => (
            <SplideSlide  key={
                hotel.id
            }>
            <div
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