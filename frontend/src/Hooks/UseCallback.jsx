//useCallback is a React Hook that lets you cache a function definition between re-renders.
//it means, when we use the useCallback hook, it doesn't create multiple instance of same function when re-render happens.
//Instead of creating new instance of function, it provides the cached function on re-render of component.

import React, { useCallback, useState } from 'react'
import Header from '../Components/Header'

function UseCallback() {
    const [counter,setCounter]= useState(0)

    // const newFunction = ()=>{};
    const newFunction = useCallback(()=>{},[])
  return (
    <div>
        <Header name={newFunction}/>
        <div>{counter}</div>
        <button onClick={()=>setCounter(counter+1)}>SetCouter</button>
    </div>
  )
}

export default UseCallback