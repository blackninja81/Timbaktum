import React from 'react'
import { schools } from '../constants'
import { Button } from 'react-bootstrap'

const School = () => {
  return (
      schools.map((school) => (
          <div key={school.id}
               className='school-main'>
            <h1>Come Learn At Our Top Institutions</h1>
        <div className='school-page-container'>

            <div className='school-image'>
              <img src= {school.img} />
            </div>
            <div className='school-details'>
              <p>{school.content}</p>
              <p>{school.content}</p>
            <Button variant="warning">Learn More</Button>
              </div>
            </div>
        </div>
    ))
  )
}

export default School
