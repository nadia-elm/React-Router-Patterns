
import React from 'react'
import { useParams } from 'react-router-dom'
import {dogs} from '../assets/data'

export const DogInfo = () => {
 const {dogName} = useParams();

 const dog = dogs.find((dog) => dog.name === dogName)
 if(!dog){
  return <div>Dog not found</div>
 }
 return (
   <>
     <div className='infoCard'>
       <img style={{ height: '30rem' }} src={dog.image} alt={dog.name} />
       <div className='dogInfo'>
         <div className='content'>
           <h3>Name: {dog.name}</h3>
           <h3>Age: {dog.age}</h3>
           <h4>Facts about {dog.name}</h4>
           {dog.facts.map((fact, index) => (
             <p key={index}>{fact}</p>
           ))}
         </div>
       </div>
     </div>
   </>
 )
}
