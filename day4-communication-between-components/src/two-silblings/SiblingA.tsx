import React, { useState } from 'react'

export default function SiblingA({ onGetCount }: { onGetCount: (count: number) => void }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>SiblingA: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => onGetCount(count)}>Send to Baba</button>
        </div>
    )
}
