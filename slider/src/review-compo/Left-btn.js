import React from 'react'
import { FiChevronLeft } from 'react-icons/fi';


const LeftBtn =((changeIndex,index)=>{
  return (
    <div>
      <button className='prev' onClick={()=>{changeIndex.changeIndex(index - 1)}}>
        <FiChevronLeft/>
      </button>
    </div>
  )
})

export default LeftBtn
