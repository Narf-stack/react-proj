import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({index,rgb,weight}) => {
  const [alert,setAlert]=useState(false)
  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={()=>{
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
      >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='arlert'>Copied to clipboard</p>}
    </article>
  )

}

export default SingleColor
