//tthe React useMemo hook return a memoized value(its like caching a value so that it doesn't need to be recalculated)
//The useMemo Hook only runs when one of its dependencies get updated
//this can improve the performce of the application. ther is one more hook in react to improve performance, that is useCallback hook.
//the useMemo and useCallback hooks are similar. the main difference is:
// -useMemo return a memoized Value.
// -useCallback return a memoized function.

import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const sum = () => {
    console.log('hello')
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
      sum = sum + i;
    }
    return sum;
  };
const result = useMemo(()=>{return sum()},[]);
// const result = sum();
  return (
    <div>
      <div>{result}</div>
      <button onClick={sum}>Sum</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>setCount</button>
    </div>
  );
}

export default UseMemo;
