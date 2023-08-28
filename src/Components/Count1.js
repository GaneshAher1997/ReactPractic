import React, { useState } from 'react'

const Count1 = () => {
    const[count,setCount]=useState(0);

    const Increments =()=>{
        setCount(count + 1)
    }
    const Decrements =()=>{
        if(count > 0){ 
        setCount(count - 1)
        }
    }
    const Resets =()=>{
        setCount(0)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={Increments}>Increment</button>
        <button onClick={Decrements}>Decrement</button>
        <button onClick={Resets}>Reset</button>
        

    </div>
  )
}

export default Count1

