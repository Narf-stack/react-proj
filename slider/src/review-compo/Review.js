import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';

const Review =((position)=>{

  return (
        <article className={position.data.position} >
          <img src={position.data.image} alt={position.data.name} className='person-img' />
          <h4>{position.data.name}</h4>
          <p className='title'>{position.data.title}</p>
          <p className='text'>{position.data.quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      )
})

export default Review
