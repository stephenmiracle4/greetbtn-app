import React,{useState} from 'react'

function Counter() {
    const[count,setCount] = useState(0)
  return (
    <div>Counter
        <h1>Your Count is: {count}</h1>
        <button onClick={() => setCount(count + 1)}>click me</button>
    </div>
  )
}

export default Counter