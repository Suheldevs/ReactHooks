// useLayout render befor the DOM element but useEffect render after DOM render 

import React, { useEffect, useLayoutEffect, useState } from 'react'

function    UseLayoutEffect() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
     console.log('hello from useEffect')
    },[count]) 
useLayoutEffect(()=>{
    console.log("Hello from useLayoutEffect") //ye console mai phle dikhe ga
},[count])
    return (
      <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>SetCount</button>
      </>
    
  )
}

export default UseLayoutEffect