
import { useState } from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = ({item,handleClick}) => {
  const[open,setOpen]=useState(false)
        const {title,price,image,description,rating,id} =item
  return (
    <div className='card'>
      <Link to={`/about/${id}`}><img src={image} height={'200px'} width={'200px'}></img></Link>
        <div className='inner'>
          <h5>{title}</h5>
          <p>Price:{price}Rs</p>
          <p>Rating:{rating.rate}⭐</p> 
          <button onClick={()=>handleClick(item)}>Add Card</button>
          <button onClick={()=>setOpen(!open)}>Read More</button>
          {open && (
            <div>
              <p>{description}</p>
              <button onClick={()=>setOpen(!open)}>Colse</button>
            </div>
          )}
        </div>
        
       
    </div>
  )
}

export default Card