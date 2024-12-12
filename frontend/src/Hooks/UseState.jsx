//The useState hook enables functional component to manage state



import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>SetCount</button>
    </>
  )
}

export default UseState