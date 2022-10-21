import React from 'react'
import {park} from '../constants'
import '@splidejs/react-splide/css';
import {Splide, SplideSlide} from '@splidejs/react-splide';

const Parks = () => {
  return (
          <div className='park-page'>
    <div className='parks-img'>
          <h1>Have A day Out At The Park</h1>
          {/* <img src={'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} /> */}
    </div>
           {
          <Splide options={
            {
              height:'30rem',
                perPage: 3,
                pagination: false,
                drag: 'free',
            }
        }>
          {
            park.map((parks) => (
                <div key={
                        parks.id
                    }
                    >
                    <SplideSlide>
                      <div className="parks-card-content">

                        <img src={
                          parks.img
                        }
                        alt={
                          parks.desc
                        }/>
                        </div>
                        <h3>{
                            parks.title
                        }</h3>
                    </SplideSlide>
                </div>
            ))
                      }
        </Splide>
        } 
        </div>
    )
}

export default Parks
