// import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React from 'react'
import { useState, useEffect } from "react";

function Contact() {
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 100000000);
      });
    const [count, setCount] = useState(0);
    const [todos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
        setCount((c) => c + 1);
        if (count === 8) {

            alert("out of stock")
            return;
        }
      };
      const decrement = () => {
        setCount((c) => c - 1);
      };
      const [color] = useState("red");
  return (
    <>
    <p>Mobile Number</p>
      <h3>09130521416</h3>
      <todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button className='btn btn-danger' onClick={increment}>+</button>
        <button className='btn btn-danger' onClick={decrement}>-</button>
      </div>
      <div>
      <h1>My favorite color is {color}!</h1>
      </div>
    </>
  )
}

export default Contact
