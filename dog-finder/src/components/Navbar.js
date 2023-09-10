
import {Link}  from 'react-router-dom'

import React from 'react'
import { dogs } from '../assets/data'


export const Navbar = () => {
  return (
    <nav className='nav-center'>
      <ul className='nav-links'>
        <li className='nav-link'>
          <Link to='/dogs'>Home</Link>
        </li>
        {dogs.map((dog) => {
          return (
            <li key={dog.name} className='nav-link'>
              <Link to={`/dog/${dog.name}`}>{dog.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
