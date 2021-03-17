import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {

  const [readMore, setReadMore] = useState(false)
  const readHide=()=>{
    setReadMore(!readMore)
  }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={readHide}>
          {readMore ? <AiOutlineMinus /> : <AiOutlinePlus /> }
        </button>
      </header>
      <p>{readMore && info}</p>
    </article>
  )
};

export default Question;
