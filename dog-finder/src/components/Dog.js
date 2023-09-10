import React from 'react'
import { Link } from 'react-router-dom'

export const Dog = ({name,image}) => {
  return (
    <>
      <div className='singleDog'>
        <img className='profilePicture'
          
          src={image}
          alt={`dog name ${name}`}
        ></img>
        <div className='info '>
          <h3>{name}</h3>
          <Link to={`/dog/${name}`} className='btn'>Learn More</Link>
        </div>
      </div>
    </>
  )
}

