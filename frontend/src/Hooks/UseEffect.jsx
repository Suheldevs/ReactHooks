//  =>The useEffect hook in react is used to perform side effect in functional component
// =>useEffect() is called after the component renders, example side effect.
// =>useEffeect() function will accept two parameter first is callbackFunction and second on e is dependecy array.
// =>in second argument if we pass empty array [], then it will render when page refresh
// => in second argument if we pass any variable like this - [count] , then if count change useEffect() rerender. 

import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    //useEffect
    useEffect(()=>{
      setTimeout(()=>{              //CallBackFunction
        setCount((pre)=>pre+1) 
      },2000)
    },[]) //[] - empty array reder when page refresh

    return (
      <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>SetCount</button>
      </>
    
  )
}

export default UseEffect