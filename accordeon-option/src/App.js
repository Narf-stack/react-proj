import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
      <section className='info'>
        {data.map((question)=> {
          return ( <SingleQuestion key={question.id} {...question}  />)
        })}
      </section>
    </div>
  </main>
  )
}

export default App;
