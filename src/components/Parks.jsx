import React from 'react'
import {park} from '../constants'
import '@splidejs/react-splide/css';
import { Button } from 'react-bootstrap';
import {Splide, SplideSlide} from '@splidejs/react-splide';

const Parks = () => {
  return (
          <div className='park-page'>
           {
          <Splide options={
            {
              height:'100rem',
                perPage: 3,
                pagination: false,
                drag: 'free',
                arrows: false,
            }
        }>
          {
            park.map((parks) => (
              <SplideSlide>
                <div key={
                        parks.id
                    }
                    className="parks-card-content">

                        <img src={
                          parks.img
                        }
                        alt={
                          parks.desc
                        }/>
                        <h3>{
                            parks.title
                        }</h3>
                        <p>
                          {
                            parks.desc
                          }
                        </p>
                        <Button variant='warning'>Learn More</Button>
                        </div>
                
                    </SplideSlide>
            ))
          }
        </Splide>
        } 
        </div>
    )
}

export default Parks
