import React from 'react';
import Review from './Review';
import LeftBtn from './Left-btn';
import RightBtn from './Right-btn';

const Reviews = ({people, index,changeIndex}) => {
        // let id = index
  return (
    <div className='section-center'>
      {people.map((person, personIndex) => {
        // const {id, image,name,title,quote} = person
        let position='nextSlide'
        if(personIndex === index){
          position='activeSlide'
        }
        if(personIndex === index -1 ||
          (index === 0 && personIndex === people.length -1)){
          position ='lastSlide'
        }
        return(
          <Review key={person.id} data={{ position: position,...person}}/>
          )
      })}

      <LeftBtn changeIndex={changeIndex} index={index}/>
      <RightBtn changeIndex={changeIndex} index={index}/>
    </div>
  )
}

export default Reviews;
