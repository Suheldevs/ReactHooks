// => useState is similar to useState, But instead of proving state & setter function . it provides state and dispatch function 
// => the useReducer hook accepts two arguments
//     - Reducer function
//     - Initial state
//and return Current state and Dispatch method
//The reducer function specifies how to state updated


import React, { useReducer, useState } from 'react'

function UseReducer() {
    const reducer = (state,action)=>{
        switch(action.type){
        case 'increase' :{
            return {count: state.count + 1 }
        }
        case 'decrease':{
            return {count: state.count -1 }
        }
        default:{
            return state
        }
    }
}
const [state , dispatch] = useReducer(reducer,{count:0})


     
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
        <button onClick={()=>dispatch({type:'decrease'})}>Decrease</button>
    </div>
  )
}

export default UseReducer