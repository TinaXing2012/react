import React, { useState } from 'react'

// stateful component
export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
        </div>
    )
}
