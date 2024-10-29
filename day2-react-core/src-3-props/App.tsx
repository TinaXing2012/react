import React, { useRef, useState } from 'react'
import Child from './Child'

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
      <hr />
      <Child
        name="John Smith"
        age={20}
        user={{ fname: 'Edward', lname: 'Doe' }}
        fruit={['banana', 'apple', 'orange']}
        cb={() => console.log('callback invoked!')}
        count={count}
      >
        <h2>Title for Child from Parent</h2>
      </Child>
    </div>
  )
}
