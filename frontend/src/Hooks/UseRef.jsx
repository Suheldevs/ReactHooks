// =>useRef() is a react hook that allow us to create mutable variables,
// which will not re-render the component . when the variables value changes it will not change the value

//=>useRef() is also used for accessing DOM element, it means we can access the dom element using useRef hooks

import React, { useEffect, useRef, useState } from "react";
function UseRef() {
  const count = useRef(0);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    count.current = count.current + 1;
    // setCounter((pre)=>pre+1);
  });

  //accessing dom element
  const inputElement = useRef();
  const ChangeBodyStyle = () => {
    console.log(inputElement.current);
    const body = inputElement.current.style;
    body.color = "black";
    body.padding = "20px";
    body.backgroundColor = "white";
  };
  return (
    <div ref={inputElement}>
      <div>Count : {count.current}</div>
      <div>Counter : {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>setCounter</button>
      <button onClick={() => count.current + 1}>setCounter</button>

      <button onClick={ChangeBodyStyle}>ChangeBodyStyle</button>
    </div>
  );
}

export default UseRef;
