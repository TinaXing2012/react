import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Parent: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <Child count={count} name="Miss Xing" fn={() => console.log('Hello')}>
                <p>This is JSX from Parent</p>
                <input />
            </Child>

        </div>
    )
}
