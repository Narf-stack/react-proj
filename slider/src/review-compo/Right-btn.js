import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

const RightBtn =((changeIndex,index)=>{
  const rightMove = changeIndex.changeIndex
  console.log({index})
  return (
    <div>
      <button className='next' onClick={()=>{rightMove(index + 1)}}>
        <FiChevronRight/>
      </button>
    </div>
  )
})

export default RightBtn
