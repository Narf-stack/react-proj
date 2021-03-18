import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] =useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(20)
      // console.log(colors)
      setList(colors)
    }catch(error){
      setError(true)
      console.log(error)
    }

  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" value={color}
            onChange={(e)=> setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error? 'error':null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        <h4>list</h4>
        {list.map((color,index)=>{
          let data = {index:index, ...color}
          return <SingleColor key={index} {...data}  />
        })}

      </section>
    </>
  )
}

export default App
