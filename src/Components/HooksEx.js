import React, { useEffect, useState } from 'react'

function HooksEx() {

    const [count,setCount] = useState(0)

    useEffect( () => {
        setCount(count)
    })
    
  return (
    <div>
        <h1>{count}</h1><hr />
        <button onClick={() => {
            setCount(count + 1)
        }}>Click me</button>
        <button onClick={() => {
            setCount(count - 1)
        }}>clickme</button>
        <button onClick={() => {
            setCount(count + 5)
        }}>clickme</button>
    </div>
  )
}

export default HooksEx