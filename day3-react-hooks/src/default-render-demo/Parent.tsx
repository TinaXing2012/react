import { useState } from 'react'
import Child from './Child';

export default function Parent() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Parent Count: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            <Child />
        </div>
    )
}
