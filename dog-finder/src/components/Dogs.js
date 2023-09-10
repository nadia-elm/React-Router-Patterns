import React from 'react'
import { dogs } from '../assets/data.js'
import { Dog } from './Dog.js'

export const Dogs = () => {
  return (
     <div className='wrapper'>
      {dogs.map((dog, idx) => {
        return <Dog key={idx} {...dog} />
      })}
    </div>
  )
}
